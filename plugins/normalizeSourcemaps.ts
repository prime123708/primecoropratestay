import path from 'node:path';
import type { Plugin } from 'vite';

const NO_LAYOUT_QUERY = '?noLayout.jsx';

/**
 * Vite/Rollup plugin that makes sure generated sourcemap `sources` entries
 * point back to a real file path on disk.  Two problematic scenarios:
 *
 *  1. The layout-wrapper plugin creates an extra module whose id includes
 *     `?noLayout.jsx`.  Upstream transforms (Babel, TypeScript, etc.) will
 *     happily keep that query in the sourcemap source; later when Vite tries
 *     to resolve the path it fails because no file with the query exists.
 *
 *  2. Babel (used via vite-plugin-babel) emits maps whose `sources` are just
 *     the _basename_ of the file.  When Vite looks for `useDevServerHeartbeat.ts`
 *     it has no idea where that live, so it logs the "Can't resolve original
 *     location" warning.
 *
 * This plugin runs post‑transform and rewrites the map entries accordingly.
 */
export function normalizeSourcemaps(): Plugin {
  return {
    name: 'normalize-sourcemaps',
    enforce: 'post',
    transform(code, id) {
      // ask Rollup for the current combined map from earlier transforms
      // (this will be undefined if no earlier plugins produced a map)
      const map = this.getCombinedSourcemap && this.getCombinedSourcemap();
      if (!map) {
        return null;
      }

      let changed = false;
      const fixedSources = map.sources.map((src: string) => {
        let fixed = src;

        // strip our special query if present
        if (fixed.endsWith(NO_LAYOUT_QUERY)) {
          fixed = fixed.slice(0, -NO_LAYOUT_QUERY.length);
        }

        // if the source is just a basename (no slashes) replace it with the
        // resolved id (minus any query portion).  this covers the Babel problem.
        if (!fixed.includes('/') && !fixed.includes('\\')) {
          const withoutQuery = id.split('?')[0];
          if (withoutQuery !== fixed) {
            fixed = withoutQuery;
          }
        }

        if (fixed !== src) {
          changed = true;
        }
        return fixed;
      });

      if (changed) {
        // return a new object so Rollup notices the mutation
        return {
          code,
          map: {
            ...map,
            sources: fixedSources,
          },
        };
      }

      return null;
    },
  };
}
