import type { Dict, Lang } from '../i18n';

/**
 * The contract every route implements.
 *
 * `render()` returns a string rather than DOM nodes on purpose: the exact same
 * function runs in Node at build time (to write static HTML for crawlers and
 * no-JS visitors) and in the browser during a client-side navigation. One
 * implementation, no drift between the two — and now, one implementation for
 * both languages.
 */

export type Theme = 's7' | 'reqtone';
export type Mode = 'dark' | 'light';

/** Everything a renderer is given. Nothing is read from globals. */
export interface RenderCtx {
  readonly lang: Lang;
  /** The dictionary for `lang`. */
  readonly t: Dict;
  /** The current route's language-neutral path, for building the language switch. */
  readonly path: string;
  /**
   * Turns an authored, language-neutral link ('/reqtone', '/#products') into
   * the URL this page should actually point at.
   */
  readonly href: (href: string) => string;
  /** The same link, but in the other language. */
  readonly altHref: (href: string) => string;
}

export interface RouteMeta {
  /** <title> */
  readonly title: string;
  /** <meta name="description"> */
  readonly description: string;
  /** Canonical path for THIS language, e.g. "/fr/reqtone" */
  readonly canonicalPath: string;
  readonly ogTitle: string;
  readonly ogDescription: string;
  /** Browser UI colour in dark mode… */
  readonly themeColor: string;
  /** …and in light mode. */
  readonly themeColorLight: string;
  /** Overrides the default "index, follow". */
  readonly robots?: string;
  /** Serialised into a <script type="application/ld+json"> block. */
  readonly jsonLd?: Record<string, unknown>;
  /** Route-specific favicon href; falls back to the S7 mark. */
  readonly icon?: string;
  /** hreflang alternates: every language this route exists in. */
  readonly alternates: ReadonlyArray<{ lang: Lang; path: string }>;
}

export interface Route {
  /** Stable id, also used as the document's data-route attribute. */
  readonly id: string;
  /** Language-neutral path, without a trailing slash (except "/"). */
  readonly path: string;
  /** Which token set the shell wears while this route is mounted. */
  readonly theme: Theme;
  meta(ctx: RenderCtx): RouteMeta;
  /** Inner HTML of <main>. Must be deterministic — it runs at build time too. */
  render(ctx: RenderCtx): string;
  /**
   * Client-only enhancement. Receives the freshly mounted <main>.
   * Returns a teardown that must release every listener and observer it took.
   */
  mount?(main: HTMLElement, ctx: RenderCtx): () => void;
}

/** Everything a page needs in <head>, in the order it should be written. */
export interface HeadTags {
  readonly title: string;
  readonly tags: readonly string[];
}
