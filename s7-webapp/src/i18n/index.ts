import { en, type Dict } from './en';
import { fr } from './fr';
import { type Lang, LANGS, isLang } from './types';

export type { Lang, Dict };
export { LANGS, isLang };

export const DICTS: Record<Lang, Dict> = { en, fr };

/**
 * English is the default, so its pages sit at the root and French lives under
 * /fr. Changing this constant moves the prefix, not the architecture.
 */
export const DEFAULT_LANG: Lang = 'en';
export const PREFIX: Record<Lang, string> = { en: '', fr: '/fr' };

export const dict = (lang: Lang): Dict => DICTS[lang];

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'fr' : 'en');

/* ------------------------------------------------------------- paths ---- */

/** '/reqtone' in French → '/fr/reqtone'. '/' in French → '/fr'. */
export function localePath(lang: Lang, path: string): string {
  const clean = path === '/' ? '' : path;
  return PREFIX[lang] + clean || '/';
}

/**
 * The reverse: pull the language prefix off a path.
 * '/fr/reqtone' → { lang: 'fr', path: '/reqtone' }
 * '/reqtone'    → { lang: 'en', path: '/reqtone' }
 */
export function splitLocale(path: string): { lang: Lang; path: string } {
  for (const lang of LANGS) {
    const prefix = PREFIX[lang];
    if (!prefix) continue;
    if (path === prefix) return { lang, path: '/' };
    if (path.startsWith(prefix + '/')) return { lang, path: path.slice(prefix.length) };
  }
  return { lang: DEFAULT_LANG, path };
}

/**
 * Localise an authored link. Renderers write language-neutral paths
 * ('/reqtone', '/#products') and this turns them into the right URL, so a
 * prerendered French page links to French pages even with JavaScript off.
 */
export function localeHref(lang: Lang, href: string): string {
  if (!href.startsWith('/')) return href;
  const cut = href.indexOf('#');
  const path = cut === -1 ? href : href.slice(0, cut) || '/';
  const hash = cut === -1 ? '' : href.slice(cut);
  return localePath(lang, path) + hash;
}

/* ----------------------------------------------------------- choice ----- */

const STORAGE_KEY = 's7.lang';

/** The visitor's saved choice, if they have made one. */
export function savedLang(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return isLang(v) ? v : null;
  } catch {
    return null; // private mode, blocked storage: fall back to detection
  }
}

export function saveLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* nothing to do: the choice simply will not outlive the session */
  }
}

/**
 * What this browser would rather read. Checks the full ordered list, so a
 * visitor with [fr-MA, ar, en] gets French and one with [en-GB, fr] gets
 * English — the order they set is the order we honour.
 */
export function preferredLang(): Lang {
  const list: readonly string[] = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || ''];

  for (const tag of list) {
    const base = tag.toLowerCase().split('-')[0];
    if (base && LANGS.includes(base as Lang)) return base as Lang;
  }
  return DEFAULT_LANG;
}

/** Every language's URL for one route — the hreflang set. */
export const alternates = (path: string): ReadonlyArray<{ lang: Lang; path: string }> =>
  LANGS.map((lang) => ({ lang, path: localePath(lang, path) }));
