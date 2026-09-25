import { defineConfig, type Plugin, type ViteDevServer } from 'vite';

/**
 * Two builds come out of this config:
 *
 *   vite build                      → dist/         client bundle + shell template
 *   vite build --ssr src/ssr.ts     → .ssr/ssr.js   the same route modules, in Node
 *
 * scripts/prerender.mjs then feeds the second through the first and writes one
 * real HTML file per route. Nothing in src/ is duplicated between them: routes
 * render strings, so the identical code runs at build time and in the browser.
 */

/**
 * Dev-server parity.
 *
 * In production the HTML shell arrives with the route already rendered into
 * it. Without this, `vite dev` would serve an empty <body> and the app would
 * behave differently from the thing we ship — the exact class of bug that only
 * shows up after deploy. So the dev server runs the same prerender path.
 */
function devPrerender(): Plugin {
  let server: ViteDevServer;
  return {
    name: 's7:dev-prerender',
    apply: 'serve',
    configureServer(s) {
      server = s;
    },
    async transformIndexHtml(html, ctx) {
      const mod = (await server.ssrLoadModule('/src/ssr.ts')) as {
        pageForPath: (p: string) => {
          title: string;
          head: string;
          body: string;
          theme: string;
          id: string;
          htmlLang: string;
        };
      };
      const url = (ctx.originalUrl ?? '/').split('?')[0] ?? '/';
      const page = mod.pageForPath(url);
      return html
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
        .replace('<!--app-head-->', page.head)
        .replace('<!--app-body-->', page.body)
        .replace('data-theme="s7"', `data-theme="${page.theme}"`)
        .replace('data-route="home"', `data-route="${page.id}"`)
        .replace('<html lang="en"', `<html lang="${page.htmlLang}"`);
    },
  };
}

export default defineConfig({
  base: process.env.S7_BASE ?? '/',
  plugins: [devPrerender()],

  build: {
    target: 'es2020',
    cssTarget: 'chrome87',
    modulePreload: { polyfill: false },
    assetsInlineLimit: 2048,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        // One entry chunk, one stylesheet. At this size, splitting costs more
        // round trips than it saves bytes.
        manualChunks: undefined,
      },
    },
  },

  server: { port: 5173, strictPort: false },
  preview: { port: 4173 },
});
