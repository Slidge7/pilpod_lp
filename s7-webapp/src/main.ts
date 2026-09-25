/**
 * Client entry.
 *
 * The document that arrives from the server is already the right page, in the
 * right language — it was rendered from these same route modules at build
 * time. So there is no hydration step and nothing is re-rendered on load: we
 * adopt the markup, wire up the behaviour, and from then on the router swaps
 * <main> in place.
 */
import './styles/tokens.css';
import './styles/base.css';
import './styles/ambient.css';
import './styles/nav.css';
import './styles/controls.css';
import './styles/transitions.css';
import './styles/home.css';
import './styles/reqtone.css';
import './styles/notfound.css';

import { Router, type RouterMode } from './router/router';
import { routes, fallback } from './routes';
import { dict, isLang, DEFAULT_LANG, type Lang } from './i18n';
import { initNav } from './ui/nav';
import { initClock } from './ui/clock';
import { initAmbient } from './ui/ambient';
import { initTheme } from './ui/controls';

const main = document.getElementById('main');

if (main) {
  // The language this document was rendered in. The router may switch away
  // from it a moment later (a French browser landing on an English URL), and
  // will re-translate the chrome when it does.
  const docLang: Lang = isLang(document.documentElement.lang)
    ? document.documentElement.lang
    : DEFAULT_LANG;

  const liveDict = () => dict(isLang(document.documentElement.lang) ? document.documentElement.lang : docLang);

  // Persistent chrome — started once, never torn down.
  initNav();
  initClock(dict(docLang));
  initAmbient();
  initTheme(liveDict);

  const yr = document.getElementById('yr');
  if (yr) yr.textContent = String(new Date().getFullYear());

  const mode: RouterMode =
    (import.meta.env.VITE_ROUTER_MODE as string | undefined) === 'hash' ? 'hash' : 'history';

  const router = new Router({
    routes,
    fallback,
    main,
    base: import.meta.env.BASE_URL || '/',
    mode,
  });

  router.start();

  // Handy for debugging from the console; costs nothing.
  (window as unknown as { s7: unknown }).s7 = { router };
}
