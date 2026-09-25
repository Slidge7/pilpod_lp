import type { RenderCtx, Route } from '../app/types';
import { applyMeta } from '../app/head';
import { translateShell } from '../app/shell';
import { setClockLang } from '../ui/clock';
import {
  DEFAULT_LANG,
  dict,
  isLang,
  localeHref,
  localePath,
  otherLang,
  preferredLang,
  savedLang,
  saveLang,
  splitLocale,
  type Lang,
} from '../i18n';
import {
  initScroll,
  currentKey,
  mintKey,
  remember,
  recall,
  scrollToHash,
  scrollToTop,
} from './scroll';

/**
 * A small client router: two languages, three routes, no framework.
 *
 * Responsibilities, in the order they matter:
 *   1. never reload the document for an internal link;
 *   2. leave the nav, clock, footer and backdrop untouched across a navigation
 *      — including a change of language, which re-translates them in place;
 *   3. animate the swap with the View Transitions API, degrade to a CSS fade;
 *   4. put the reader where they expect to be (top, anchor, or where they
 *      were when they pressed Back);
 *   5. tell assistive technology that the page changed, because nothing in a
 *      client-side navigation does that on its own.
 */

export type RouterMode = 'history' | 'hash';

export interface RouterOptions {
  readonly routes: readonly Route[];
  readonly fallback: Route;
  readonly main: HTMLElement;
  /** Deployment base, e.g. "/" or "/preview/". Always leading + trailing slash. */
  readonly base?: string;
  readonly mode?: RouterMode;
}

interface Target {
  readonly lang: Lang;
  /** Language-neutral route path. */
  readonly path: string;
  readonly hash: string;
}

const canViewTransition =
  typeof document !== 'undefined' &&
  typeof (document as Document & { startViewTransition?: unknown }).startViewTransition ===
    'function';

const prefersReduced = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export class Router {
  private readonly routes: readonly Route[];
  private readonly fallback: Route;
  private readonly main: HTMLElement;
  private readonly base: string;
  private readonly mode: RouterMode;

  private current: Route | null = null;
  private lang: Lang = DEFAULT_LANG;
  private teardown: (() => void) | null = null;
  private key = 0;
  private navigating = false;
  /** A navigation that arrived while one was already in flight. */
  private queued: (() => void) | null = null;

  constructor(opts: RouterOptions) {
    this.routes = opts.routes;
    this.fallback = opts.fallback;
    this.main = opts.main;
    this.base = opts.base ?? '/';
    this.mode = opts.mode ?? 'history';
  }

  /* ------------------------------------------------------------- lifecycle */

  start(): void {
    initScroll();
    this.key = currentKey();

    document.addEventListener('click', this.onClick, false);
    window.addEventListener('popstate', this.onPop);
    if (this.mode === 'hash') window.addEventListener('hashchange', this.onPop);

    const target = this.readLocation();
    const route = this.resolve(target.path);

    // The server already delivered this route's markup in this language.
    // Adopt it rather than re-rendering: no flash, no wasted parse, and the
    // reveal animations get to play from their real starting state.
    this.current = route;
    this.lang = target.lang;
    this.applyRoute(route);
    this.rewriteLinks(document);
    this.teardown = route.mount?.(this.main, this.ctx()) ?? null;

    const wanted = this.languageOnArrival(target);
    if (wanted !== target.lang) {
      // Switch in place and correct the URL without adding a history entry, so
      // Back still leaves the site rather than bouncing between languages.
      void this.switchLanguage(wanted, { replace: true, save: false });
    } else {
      document.documentElement.removeAttribute('data-lang-pending');
    }

    // Honour a fragment the browser could not resolve before our markup was
    // interactive (and, in hash mode, could never resolve at all).
    if (target.hash) {
      requestAnimationFrame(() => scrollToHash(target.hash, 'instant'));
    }
  }

  stop(): void {
    document.removeEventListener('click', this.onClick, false);
    window.removeEventListener('popstate', this.onPop);
    window.removeEventListener('hashchange', this.onPop);
    this.teardown?.();
  }

  /**
   * Which language this visitor should actually get.
   *
   * Precedence, strongest first:
   *   1. an explicit /fr URL — they followed a French link, so honour it;
   *   2. a choice they made here before;
   *   3. what their browser asks for;
   *   4. English.
   */
  private languageOnArrival(target: Target): Lang {
    if (target.lang !== DEFAULT_LANG) return target.lang;

    const hint = document.documentElement.dataset.langPending;
    if (isLang(hint)) return hint; // decided before first paint

    const saved = savedLang();
    if (saved) return saved;
    return preferredLang();
  }

  /* ------------------------------------------------------------- resolving */

  private resolve(path: string): Route {
    const clean = path.replace(/\/+$/, '') || '/';
    return this.routes.find((r) => r.path === clean) ?? this.fallback;
  }

  /** Everything a renderer needs, for the language currently mounted. */
  private ctx(lang: Lang = this.lang, path = this.current?.path ?? '/'): RenderCtx {
    const other = otherLang(lang);
    return {
      lang,
      t: dict(lang),
      path,
      href: (href: string) => this.deploy(localeHref(lang, href)),
      altHref: (href: string) => this.deploy(localeHref(other, href)),
    };
  }

  /** Current language, route path and fragment, independent of mode and base. */
  private readLocation(): Target {
    return this.targetFromURL(new URL(location.href)) ?? { lang: DEFAULT_LANG, path: '/', hash: '' };
  }

  /**
   * App path and fragment for a same-origin URL, or null when the URL is
   * outside this app. The single place that knows how each mode encodes a
   * location and where the language prefix lives.
   */
  private targetFromURL(url: URL): Target | null {
    let raw: string;
    let hash: string;

    if (this.mode === 'hash') {
      const h = url.hash.slice(1);
      if (!h.startsWith('/')) return null;
      const cut = h.indexOf('#');
      raw = cut === -1 ? h : h.slice(0, cut) || '/';
      hash = cut === -1 ? '' : h.slice(cut);
    } else {
      raw = url.pathname;
      if (this.base !== '/') {
        if (!raw.startsWith(this.base)) return null;
        raw = '/' + raw.slice(this.base.length);
      }
      hash = url.hash;
    }

    const { lang, path } = splitLocale(raw || '/');
    return { lang, path: path || '/', hash };
  }

  /** A localised app path ('/fr/reqtone') as a URL this deployment serves. */
  private deploy(path: string): string {
    const cut = path.indexOf('#');
    const bare = cut === -1 ? path : path.slice(0, cut) || '/';
    const hash = cut === -1 ? '' : path.slice(cut);

    if (this.mode === 'hash') return `${this.base}#${bare}${hash}`;
    const joined = bare === '/' ? this.base : this.base.replace(/\/$/, '') + bare;
    return joined + hash;
  }

  /** The URL for a route in a language. */
  private urlFor(lang: Lang, path: string, hash: string): string {
    return this.deploy(localePath(lang, path) + hash);
  }

  /**
   * Rewrite in-document links for deployments that are not served from the
   * root in history mode. Rendered links already carry the right language, so
   * this only adjusts for base and hash mode.
   */
  rewriteLinks(root: ParentNode): void {
    if (this.mode === 'history' && this.base === '/') return;
    root.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach((a) => {
      const raw = a.getAttribute('href');
      if (!raw || a.dataset.rewritten === '1') return;
      a.setAttribute('href', this.deploy(raw));
      a.dataset.rewritten = '1';
    });
  }

  /* --------------------------------------------------------------- events */

  private onClick = (e: MouseEvent): void => {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const anchor = (e.target as Element | null)?.closest?.('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || anchor.hasAttribute('download')) return;
    if (anchor.target && anchor.target !== '_self') return;
    if (anchor.getAttribute('rel')?.includes('external')) return;

    if (href.startsWith('#')) {
      // A bare in-page fragment: scroll it, record it, stay put.
      e.preventDefault();
      if (!scrollToHash(href, prefersReduced() ? 'instant' : 'smooth')) scrollToTop('smooth');
      this.pushHash(href);
      return;
    }
    if (/^(mailto:|tel:)/i.test(href)) return;

    const url = new URL(anchor.href, location.href);
    if (url.origin !== location.origin) return;

    const target = this.targetFromURL(url);
    if (!target) return;

    e.preventDefault();
    void this.navigate(target.path, target.hash, target.lang);
  };

  private onPop = (): void => {
    const target = this.readLocation();
    const route = this.resolve(target.path);
    const key = currentKey();

    if (route === this.current && target.lang === this.lang) {
      // Same page, different fragment (or a Back to a stored offset).
      if (target.hash) scrollToHash(target.hash, 'instant');
      else window.scrollTo({ top: recall(key), behavior: 'instant' });
      this.key = key;
      return;
    }

    remember(this.key);
    this.key = key;
    void this.commit(route, target.lang, target.hash, recall(key), 'back');
  };

  /* ------------------------------------------------------------ navigating */

  /** Programmatic navigation. Safe to call from anywhere. */
  async navigate(path: string, hash = '', lang: Lang = this.lang, replace = false): Promise<void> {
    const route = this.resolve(path);
    const sameRoute = route === this.current;
    const sameLang = lang === this.lang;
    const url = this.urlFor(lang, route === this.fallback ? path : route.path, hash);

    if (sameRoute && sameLang) {
      // In-page move: no transition, no remount — just go there.
      history[replace ? 'replaceState' : 'pushState'](mintKey(), '', url);
      this.key = currentKey();
      if (hash) {
        if (!scrollToHash(hash, prefersReduced() ? 'instant' : 'smooth')) scrollToTop('smooth');
      } else {
        scrollToTop(prefersReduced() ? 'instant' : 'smooth');
      }
      return;
    }

    if (!sameLang) saveLang(lang); // an explicit switch is a choice worth keeping

    remember(this.key);
    history[replace ? 'replaceState' : 'pushState'](mintKey(), '', url);
    this.key = currentKey();
    await this.commit(route, lang, hash, sameRoute ? window.scrollY : 0, 'forward');
  }

  /** Re-render the current page in another language, keeping the reader's place. */
  async switchLanguage(
    lang: Lang,
    opts: { replace?: boolean; save?: boolean } = {},
  ): Promise<void> {
    if (lang === this.lang || !this.current) return;
    if (opts.save !== false) saveLang(lang);

    const url = this.urlFor(lang, this.current.path, location.hash);
    history[opts.replace ? 'replaceState' : 'pushState'](mintKey(), '', url);
    this.key = currentKey();
    await this.commit(this.current, lang, '', window.scrollY, 'forward');
  }

  private pushHash(hash: string): void {
    const target = this.readLocation();
    history.pushState(mintKey(), '', this.urlFor(target.lang, target.path, hash));
    this.key = currentKey();
  }

  /* -------------------------------------------------------------- the swap */

  private async commit(
    route: Route,
    lang: Lang,
    hash: string,
    scrollY: number,
    direction: 'forward' | 'back',
  ): Promise<void> {
    // Two transitions cannot run at once. Rather than drop the second — which
    // is what a plain guard does, and which leaves the URL pointing at a page
    // the reader cannot see after a fast Back — remember it and run it as soon
    // as this one lands. Only the newest is kept: with three presses in a
    // second, the middle one is a place nobody asked to stop at.
    if (this.navigating) {
      this.queued = () => void this.commit(route, lang, hash, scrollY, direction);
      return;
    }
    this.navigating = true;

    const root = document.documentElement;
    const reduce = prefersReduced();
    const langChanged = lang !== this.lang;
    const routeChanged = route !== this.current;
    root.dataset.nav = direction;
    root.classList.add('is-navigating');
    this.sweep();

    const swap = (): void => {
      this.teardown?.();
      this.teardown = null;

      this.lang = lang;
      this.current = route;
      const ctx = this.ctx(lang, route.path);

      this.main.innerHTML = route.render(ctx);
      this.applyRoute(route);
      this.rewriteLinks(this.main);

      if (langChanged) {
        // The chrome is never rebuilt, so translate it where it stands.
        translateShell(ctx);
        setClockLang(ctx.t);
        this.rewriteLinks(document);
      }
      root.removeAttribute('data-lang-pending');

      // A forward navigation to a NEW page lands on something unseen, so its
      // opening section rises in. A language switch keeps the reader exactly
      // where they were, so it only cross-fades.
      this.main.classList.remove('page-enter');
      if (direction === 'forward' && routeChanged && !reduce && !hash) {
        this.main.classList.add('page-enter');
        window.setTimeout(() => this.main.classList.remove('page-enter'), 1200);
      }

      // Position before the new snapshot is taken, so the transition animates
      // between two correctly-scrolled frames instead of sliding afterwards.
      if (hash && scrollToHash(hash, 'instant')) {
        /* landed on the anchor */
      } else {
        window.scrollTo({ top: scrollY, behavior: 'instant' });
      }

      this.teardown = route.mount?.(this.main, ctx) ?? null;
    };

    if (canViewTransition && !reduce) {
      const start = (document as Document & {
        startViewTransition: (cb: () => void) => { finished: Promise<void> };
      }).startViewTransition;
      try {
        await start.call(document, swap).finished;
      } catch {
        /* a transition can be skipped or interrupted; the DOM is already correct */
      }
    } else if (reduce) {
      swap();
    } else {
      // No View Transitions (older Safari, Firefox before 144): a short fade
      // on <main> stands in for the cross-fade; the rise plays as normal.
      this.main.classList.add('is-leaving');
      await new Promise<void>((r) => setTimeout(r, 150));
      swap();
      requestAnimationFrame(() => this.main.classList.remove('is-leaving'));
    }

    root.classList.remove('is-navigating');
    delete root.dataset.nav;

    // Move focus into the new page and say its name. Without this, a keyboard
    // or screen-reader user is left in the old document's tab order with no
    // indication that anything happened.
    if (routeChanged) this.main.focus({ preventScroll: true });
    const live = document.getElementById('routeLive');
    if (live) live.textContent = dict(lang).a11y.pageLoaded(route.meta(this.ctx()).title);

    this.navigating = false;

    const next = this.queued;
    this.queued = null;
    next?.();
  }

  /** Restart the hairline sweep under the nav. */
  private sweep(): void {
    const bar = document.querySelector<HTMLElement>('.nav-progress');
    if (!bar || prefersReduced()) return;
    bar.classList.remove('sweep');
    void bar.offsetWidth; // restart the animation from frame zero
    bar.classList.add('sweep');
  }

  /** Head, theme and nav state for a route. */
  private applyRoute(route: Route): void {
    const ctx = this.ctx(this.lang, route.path);
    applyMeta(route.meta(ctx), this.lang);

    const root = document.documentElement;
    root.dataset.theme = route.theme;
    root.dataset.route = route.id;

    // The language switch is part of the shell, so it is not re-rendered on a
    // route change — but it must follow the reader to the matching page in the
    // other language, not send them back to its home page.
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.setAttribute('href', ctx.altHref(route.path));

    const here = this.urlFor(this.lang, route.path, '');
    document.querySelectorAll<HTMLAnchorElement>('.nav-links a, .foot-nav a').forEach((a) => {
      const active = a.getAttribute('href') === here;
      if (active) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }
}
