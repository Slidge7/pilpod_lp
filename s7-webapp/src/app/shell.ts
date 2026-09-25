import { s7Mark, flagMA, sunIcon, moonIcon } from '../lib/icons';
import { otherLang, dict } from '../i18n';
import { currentMode, themeLabel } from '../ui/controls';
import type { RenderCtx } from './types';

/**
 * The persistent chrome: ambient backdrop, nav (with the Morocco time strip,
 * the language switch and the theme toggle) and footer.
 *
 * Rendered once — the router only ever replaces <main>, so none of this
 * remounts, the clock never restarts and the nav never repaints on a route
 * change. When the language changes, `translateShell` updates the text and the
 * links in place rather than rebuilding the markup, for the same reason.
 */

/* ------------------------------------------------------------------ ambient */

/**
 * Two backdrops live in the DOM at once and cross-fade on a theme change.
 * Both are pure CSS (tiled background-images and gradients); there is no SVG
 * element scaled to the viewport and no filter anywhere, which is what makes
 * them free to animate.
 */
export function renderAmbient(): string {
  return /* html */ `
<div class="ambient" aria-hidden="true">
  <div class="amb amb-s7">
    <span class="glow glow-a"></span>
    <span class="glow glow-b"></span>
    <span class="glow glow-c"></span>
    <span class="zellige"></span>
    <span class="zellige-lens"><span class="lens-inner"></span></span>
  </div>
  <div class="amb amb-reqtone">
    <span class="glow rt-glow-a"></span>
    <span class="glow rt-glow-b"></span>
    <span class="dev-grid"></span>
  </div>
  <span class="grain"></span>
  <span class="pointer-light"></span>
</div>`;
}

/* ---------------------------------------------------------------- controls */

/**
 * The language switch is a real link to the other language's URL for this same
 * page. That means it works with JavaScript off, and search engines can follow
 * it — the hreflang tags say the translation exists, this proves it.
 *
 * The theme toggle is script-only by nature, so it is hidden when scripting is
 * unavailable rather than sitting there doing nothing.
 */
function renderControls(ctx: RenderCtx): string {
  const other = otherLang(ctx.lang);
  const otherDict = dict(other);
  const switchLabel = other === 'fr' ? ctx.t.a11y.switchToFrench : ctx.t.a11y.switchToEnglish;

  return /* html */ `
    <div class="ctl">
      <a class="ctl-btn ctl-lang" id="langBtn" href="${ctx.altHref(ctx.path)}"
         hreflang="${otherDict.htmlLang}" lang="${otherDict.htmlLang}"
         aria-label="${switchLabel}" title="${switchLabel}">${otherDict.short}</a>
      <button class="ctl-btn ctl-theme" id="themeBtn" type="button"
              aria-label="${ctx.t.a11y.themeToLight}" title="${ctx.t.a11y.themeToLight}">
        ${sunIcon('i-sun')}${moonIcon('i-moon')}
      </button>
    </div>`;
}

/* ---------------------------------------------------------------------- nav */

const NAV_LINKS = [
  { href: '/#services', key: 'services', cls: '' },
  { href: '/#products', key: 'products', cls: 'hide-s' },
  { href: '/#standard', key: 'standard', cls: 'hide-s' },
  { href: '/#contact', key: 'contact', cls: '' },
] as const;

export function renderNav(ctx: RenderCtx): string {
  const links = NAV_LINKS.map(
    (l) =>
      `<a href="${ctx.href(l.href)}" data-app-href="${l.href}"${
        l.cls ? ` class="${l.cls}"` : ''
      } data-nav="${l.key}">${ctx.t.nav[l.key]}</a>`,
  ).join('\n        ');

  return /* html */ `
<header class="nav" id="nav">
  <div class="tz" id="tz">
    <div class="tz-scroll" id="tzScroll" role="group" aria-label="${ctx.t.clock.stripLabel}">
      <div class="tz-track">
        <div class="tz-side" id="tzWest"></div>
        <div class="tz-ma" id="tzMa" role="group" aria-label="${ctx.t.clock.badgeLabel}"
             title="${ctx.t.clock.badgeTitle}">
          ${flagMA('tz-flag')}
          <span class="tz-gmt">GMT</span>
          <span class="tz-clock"><span id="tzMaHM">--:--</span><span class="tz-sec" id="tzMaS">:--</span></span>
        </div>
        <div class="tz-side" id="tzEast"></div>
      </div>
    </div>
  </div>
  <div class="wrap nav-inner">
    <a class="mark" href="${ctx.href('/')}" data-app-href="/" aria-label="${ctx.t.a11y.home}">
      ${s7Mark()}
      <span class="name">S7</span>
      <span class="sub">Service7</span>
    </a>
    <nav class="nav-links" aria-label="${ctx.t.a11y.primaryNav}">
        ${links}
    </nav>
    ${renderControls(ctx)}
  </div>
  <span class="nav-progress" aria-hidden="true"></span>
</header>`;
}

/* ------------------------------------------------------------------- footer */

const FOOT_PRODUCTS = [
  { href: '/#products', text: 'PilPod' },
  { href: '/reqtone', text: 'ReqTone' },
] as const;

export function renderFooter(ctx: RenderCtx, year: number): string {
  const products = FOOT_PRODUCTS.map(
    (l) => `<li><a href="${ctx.href(l.href)}" data-app-href="${l.href}">${l.text}</a></li>`,
  ).join('\n            ');

  return /* html */ `
<footer>
  <div class="wrap">
    <div class="foot-top">
      <div>
        <div class="foot-mark">
          ${s7Mark()}
          <strong>S7</strong>
        </div>
        <p class="foot-tag">${ctx.t.footer.tagline}</p>
      </div>

      <div class="foot-nav">
        <div>
          <h4 data-foot="products">${ctx.t.footer.products}</h4>
          <ul>
            ${products}
          </ul>
        </div>
        <div>
          <h4 data-foot="studio">${ctx.t.footer.studio}</h4>
          <ul>
            <li><a href="${ctx.href('/#services')}" data-app-href="/#services" data-nav="services">${ctx.t.nav.services}</a></li>
            <li><a href="${ctx.href('/#standard')}" data-app-href="/#standard" data-nav="standard">${ctx.t.nav.standard}</a></li>
            <li><a href="${ctx.href('/#about')}" data-app-href="/#about" data-nav="about">${ctx.t.nav.about}</a></li>
            <li><a href="${ctx.href('/#contact')}" data-app-href="/#contact" data-nav="contact">${ctx.t.nav.contact}</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="foot-bottom">
      <span class="made"><i></i> ${ctx.t.footer.madeIn}</span>
      <span data-foot="by">${ctx.t.footer.by}</span>
      <span>&copy; <span id="yr">${year}</span> S7</span>
    </div>
  </div>
</footer>`;
}

/* -------------------------------------------------------------- whole shell */

/**
 * Body markup for a given route. `mainHtml` is the route's own render()
 * output; everything around it is identical on every page, which is precisely
 * why the router can leave it alone.
 */
export function renderBody(ctx: RenderCtx, mainHtml: string, year: number): string {
  return /* html */ `<a class="skip" href="#main">${ctx.t.a11y.skip}</a>
${renderAmbient()}
${renderNav(ctx)}
<main id="main" tabindex="-1">
${mainHtml}
</main>
${renderFooter(ctx, year)}
<p class="sr-live" id="routeLive" role="status" aria-live="polite"></p>`;
}

/* --------------------------------------------------------- language switch */

const setText = (sel: string, html: string): void => {
  const el = document.querySelector(sel);
  if (el) el.innerHTML = html;
};
const setAttr = (sel: string, attr: string, value: string): void => {
  const el = document.querySelector(sel);
  if (el) el.setAttribute(attr, value);
};

/**
 * Re-translate the persistent chrome after a language change, in place.
 *
 * Rebuilding the nav would be two lines shorter and would restart the clock,
 * drop the scroll sentinel's observer and re-run the fit logic — so instead
 * every string the shell owns is updated where it stands. The elements are
 * addressed by id or data-attribute, both of which are written by the
 * renderers above; keep the two in step.
 */
export function translateShell(ctx: RenderCtx): void {
  const t = ctx.t;
  const other = otherLang(ctx.lang);
  const otherDict = dict(other);
  const switchLabel = other === 'fr' ? t.a11y.switchToFrench : t.a11y.switchToEnglish;

  setText('.skip', t.a11y.skip);
  setAttr('.mark', 'aria-label', t.a11y.home);
  setAttr('.mark', 'href', ctx.href('/'));
  setAttr('.nav-links', 'aria-label', t.a11y.primaryNav);

  // Nav + footer links: text and destination both move with the language.
  document.querySelectorAll<HTMLAnchorElement>('a[data-nav]').forEach((a) => {
    const key = a.dataset.nav as keyof typeof t.nav;
    if (t.nav[key]) a.textContent = t.nav[key];
  });
  document.querySelectorAll<HTMLAnchorElement>('.nav-links a, .foot-nav a, .mark').forEach((a) => {
    const raw = a.dataset.appHref;
    if (raw) a.setAttribute('href', ctx.href(raw));
  });

  setAttr('#tzScroll', 'aria-label', t.clock.stripLabel);
  setAttr('#tzMa', 'aria-label', t.clock.badgeLabel);
  setAttr('#tzMa', 'title', t.clock.badgeTitle);

  setText('.foot-tag', t.footer.tagline);
  setText('[data-foot="products"]', t.footer.products);
  setText('[data-foot="studio"]', t.footer.studio);
  setText('[data-foot="by"]', t.footer.by);
  const made = document.querySelector('.foot-bottom .made');
  if (made) made.innerHTML = `<i></i> ${t.footer.madeIn}`;

  const theme = document.getElementById('themeBtn');
  if (theme) {
    const label = themeLabel(t, currentMode());
    theme.setAttribute('aria-label', label);
    theme.setAttribute('title', label);
  }

  const lang = document.getElementById('langBtn');
  if (lang) {
    lang.textContent = otherDict.short;
    lang.setAttribute('href', ctx.altHref(ctx.path));
    lang.setAttribute('hreflang', otherDict.htmlLang);
    lang.setAttribute('lang', otherDict.htmlLang);
    lang.setAttribute('aria-label', switchLabel);
    lang.setAttribute('title', switchLabel);
  }
}
