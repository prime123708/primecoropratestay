import type { Plugin } from 'vite';

// A tiny plugin that makes Vite treat any import ending in `?noLayout.jsx` as
// if the query weren't there.  The react-router build integration still creates
// virtual modules with this suffix, and although they aren’t real files the
// resolver/transformer chain can get confused when it tries to use the id for
// sourcemap lookups or error reporting.  By normalising the import we ensure
// everything downstream sees the real file path.
export function stripNoLayoutQuery(): Plugin {
  const suffix = '?noLayout.jsx';
  return {
    name: 'strip-no-layout-query',
    enforce: 'pre',
    async resolveId(source, importer, options) {
      if (typeof source !== 'string' || !source.endsWith(suffix)) {
        return null;
      }
      // remove the suffix and delegate to the normal resolver (skip self to
      // avoid infinite recursion)
      const clean = source.slice(0, -suffix.length);
      const resolved = await this.resolve(clean, importer, { skipSelf: true });
      if (resolved) {
        // re-apply any query/hash that was appended by the resolver
        return { ...resolved, id: resolved.id };
      }
      // if we could not resolve, return null so Vite handles the original id
      return null;
    },
  };
}
