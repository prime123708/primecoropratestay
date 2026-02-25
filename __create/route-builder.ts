import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Hono } from 'hono';
import type { Handler } from 'hono/types';
import updatedFetch from '../src/__create/fetch';

const API_BASENAME = '/api';
const api = new Hono();

// Absolute path to source API directory (used in development only)
const SRC_API_DIR = join(fileURLToPath(new URL('.', import.meta.url)), '../src/app/api');
if (globalThis.fetch) {
  globalThis.fetch = updatedFetch;
}

// Recursively find all route.js files
async function findRouteFiles(dir: string): Promise<string[]> {
  const files = await readdir(dir);
  let routes: string[] = [];

  for (const file of files) {
    try {
      const filePath = join(dir, file);
      const statResult = await stat(filePath);

      if (statResult.isDirectory()) {
        routes = routes.concat(await findRouteFiles(filePath));
      } else if (file === 'route.js') {
        // Handle root route.js specially
        if (filePath === join(dir, 'route.js')) {
          routes.unshift(filePath); // Add to beginning of array
        } else {
          routes.push(filePath);
        }
      }
    } catch (error) {
      console.error(`Error reading file ${file}:`, error);
    }
  }

  return routes;
}

// Helper function to transform file path to Hono route path
function getHonoPathFromFs(routeFile: string, baseDir: string): { name: string; pattern: string }[] {
  const relativePath = routeFile.replace(baseDir, '');
  const parts = relativePath.split('/').filter(Boolean);
  const routeParts = parts.slice(0, -1); // Remove 'route.js'
  if (routeParts.length === 0) {
    return [{ name: 'root', pattern: '' }];
  }
  const transformedParts = routeParts.map((segment) => {
    const match = segment.match(/^\[(\.{3})?([^\]]+)\]$/);
    if (match) {
      const [_, dots, param] = match;
      return dots === '...'
        ? { name: param, pattern: `:${param}{.+}` }
        : { name: param, pattern: `:${param}` };
    }
    return { name: segment, pattern: segment };
  });
  return transformedParts;
}

// Dev: import and register all routes from source files via vite /@fs
async function registerRoutesDev() {
  const routeFiles = (
    await findRouteFiles(SRC_API_DIR).catch((error) => {
      console.error('Error finding route files:', error);
      return [];
    })
  )
    .slice()
    .sort((a, b) => {
      return b.length - a.length;
    });

  // Clear existing routes
  api.routes = [];

  for (const routeFile of routeFiles) {
    try {
      // Normalize Windows backslashes and use Vite's /@fs absolute path prefix
      const normalized = routeFile.replace(/\\/g, '/');
      const viteId = `/@fs/${normalized}`;
      const route = await import(/* @vite-ignore */ `${viteId}?update=${Date.now()}`);

      const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
      for (const method of methods) {
        try {
          if (route[method]) {
            const parts = getHonoPathFromFs(routeFile, SRC_API_DIR);
            const honoPath = `/${parts.map(({ pattern }) => pattern).join('/')}`;
            const handler: Handler = async (c) => {
              const params = c.req.param();
              if (import.meta.env.DEV) {
                const updated = await import(/* @vite-ignore */ `${viteId}?update=${Date.now()}`);
                return await updated[method](c.req.raw, { params });
              }
              return await route[method](c.req.raw, { params });
            };
            const methodLowercase = method.toLowerCase();
            switch (methodLowercase) {
              case 'get':
                api.get(honoPath, handler);
                break;
              case 'post':
                api.post(honoPath, handler);
                break;
              case 'put':
                api.put(honoPath, handler);
                break;
              case 'delete':
                api.delete(honoPath, handler);
                break;
              case 'patch':
                api.patch(honoPath, handler);
                break;
              default:
                console.warn(`Unsupported method: ${method}`);
                break;
            }
          }
        } catch (error) {
          console.error(`Error registering route ${routeFile} for method ${method}:`, error);
        }
      }
    } catch (error) {
      console.error(`Error importing route file ${routeFile}:`, error);
    }
  }
}

// Prod: import and register all routes via Vite's glob so they are bundled
function registerRoutesProd() {
  // Keys look like "../src/app/api/.../route.js"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const modules = import.meta.glob('../src/app/api/**/route.js', { eager: true }) as Record<string, any>;

  api.routes = [];

  for (const [key, route] of Object.entries(modules)) {
    try {
      const normalizedKey = key.replace(/\\/g, '/');
      const base = '../src/app/api/';
      const relative = normalizedKey.startsWith(base) ? normalizedKey.slice(base.length) : normalizedKey;
      const fsLikePath = join(SRC_API_DIR, relative).replace(/\\/g, '/');
      const parts = getHonoPathFromFs(fsLikePath, SRC_API_DIR);
      const honoPath = `/${parts.map(({ pattern }) => pattern).join('/')}`;

      const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
      for (const method of methods) {
        if (route[method]) {
          const handler: Handler = async (c) => {
            const params = c.req.param();
            return await route[method](c.req.raw, { params });
          };
          switch (method.toLowerCase()) {
            case 'get':
              api.get(honoPath, handler);
              break;
            case 'post':
              api.post(honoPath, handler);
              break;
            case 'put':
              api.put(honoPath, handler);
              break;
            case 'delete':
              api.delete(honoPath, handler);
              break;
            case 'patch':
              api.patch(honoPath, handler);
              break;
          }
        }
      }
    } catch (error) {
      console.error(`Error registering prod route for key ${key}:`, error);
    }
  }
}

// Initial route registration
if (import.meta.env.DEV) {
  await registerRoutesDev();
} else {
  registerRoutesProd();
}

// Hot reload routes in development
if (import.meta.env.DEV) {
  import.meta.glob('../src/app/api/**/route.js', {
    eager: true,
  });
  if (import.meta.hot) {
    import.meta.hot.accept((newSelf) => {
      registerRoutesDev().catch((err) => {
        console.error('Error reloading routes:', err);
      });
    });
  }
}

export { api, API_BASENAME };
