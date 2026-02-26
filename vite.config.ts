import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import { reactRouterHonoServer } from 'react-router-hono-server/dev';
import { defineConfig, Plugin } from 'vite';
import babel from 'vite-plugin-babel';
import tsconfigPaths from 'vite-tsconfig-paths';
import { addRenderIds } from './plugins/addRenderIds';
import { aliases } from './plugins/aliases';
import consoleToParent from './plugins/console-to-parent';
import { stripNoLayoutQuery } from './plugins/stripNoLayoutQuery';
import { layoutWrapperPlugin } from './plugins/layouts';
import { normalizeSourcemaps } from './plugins/normalizeSourcemaps';
import { loadFontsFromTailwindSource } from './plugins/loadFontsFromTailwindSource';
import { nextPublicProcessEnv } from './plugins/nextPublicProcessEnv';
import { restart } from './plugins/restart';
import { restartEnvFileChange } from './plugins/restartEnvFileChange';

// Vite warns when a plugin returns code but no sourcemap. the react-router
// build-client-route transform is one such case; it simply re‑exports symbols
// and doesn't emit a map. our helper plugin intercepts those virtual modules
// *before* the router plugin runs and hands back an empty sourcemap, which
// prevents the warning entirely.
// This wrapper invokes the standard reactRouter() plugin but then
// alters its transform hook so that any module created with
// ?__react-router-build-client-route returns a dummy sourcemap.  Doing the
// work inside the original plugin eliminates the warning because the map is
// present when the plugin itself returns its result.
function reactRouterWithSourcemapFix(): Plugin | Plugin[] {
  const plugins = reactRouter();

  // sometimes reactRouter() returns an array of plugins; sometimes, maybe a
  // single object. normalize to array for easier processing.
  const pluginArray: Plugin[] = Array.isArray(plugins) ? plugins : [plugins];

  for (const p of pluginArray) {
    if (p && p.name === 'react-router:build-client-route' && typeof p.transform === 'function') {
      const origTransform = p.transform;
      p.transform = async function (code, id, options) {
        const result = await origTransform.call(this, code, id, options);

        if (id.includes('?__react-router-build-client-route')) {
          if (typeof result === 'string') {
            return {
              code: result,
              map: { version: 3, sources: [], names: [], mappings: '' }
            };
          }
          if (result && typeof result === 'object' && !result.map) {
            return {
              ...result,
              map: { version: 3, sources: [], names: [], mappings: '' }
            };
          }
        }
        return result;
      };
    }
  }

  // return original shape
  return Array.isArray(plugins) ? pluginArray : pluginArray[0];
}

export default defineConfig({
  // Keep them available via import.meta.env.NEXT_PUBLIC_*
  envPrefix: 'NEXT_PUBLIC_',
  optimizeDeps: {
    // Explicitly include fast-glob, since it gets dynamically imported and we
    // don't want that to cause a re-bundle.
    include: ['fast-glob', 'lucide-react'],
    exclude: [
      '@hono/auth-js/react',
      '@hono/auth-js',
      '@auth/core',
      '@hono/auth-js',
      'hono/context-storage',
      '@auth/core/errors',
      'fsevents',
      'lightningcss',
    ],
  },
  logLevel: 'info',
  plugins: [
    nextPublicProcessEnv(),
    restartEnvFileChange(),
    stripNoLayoutQuery(),
    reactRouterHonoServer({
      serverEntryPoint: './__create/index.ts',
      runtime: 'node',
    }),
    babel({
      include: ['src/**/*.{js,jsx,ts,tsx}'], // or RegExp: /src\/.*\.[tj]sx?$/
      exclude: /node_modules/, // skip everything else
      babelConfig: {
        babelrc: false, // don’t merge other Babel files
        configFile: false,
        plugins: ['styled-jsx/babel'],
      },
    }),
    restart({
      restart: [
        'src/**/page.jsx',
        'src/**/page.tsx',
        'src/**/layout.jsx',
        'src/**/layout.tsx',
        'src/**/route.js',
        'src/**/route.ts',
      ],
    }),
    consoleToParent(),
    loadFontsFromTailwindSource(),
    addRenderIds(),
    // reactRouter plugin wrapped to patch its client-route transform so it
    // always returns a dummy map. this silences the repeated warnings.
    reactRouterWithSourcemapFix(),
    tsconfigPaths(),
    aliases(),
    layoutWrapperPlugin(),
    normalizeSourcemaps(),
  ],
  resolve: {
    alias: {
      lodash: 'lodash-es',
      'npm:stripe': 'stripe',
      stripe: path.resolve(__dirname, './src/__create/stripe'),
      '@auth/create/react': '@hono/auth-js/react',
      '@auth/create': path.resolve(__dirname, './src/__create/@auth/create'),
      '@': path.resolve(__dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  clearScreen: false,
  server: {
    allowedHosts: true,
    host: '0.0.0.0',
    port: 4000,
    hmr: {
      overlay: false,
    },
    warmup: {
      clientFiles: ['./src/app/root.tsx'],
    },
  },
});
