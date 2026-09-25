import type { RenderCtx, Route, RouteMeta } from '../app/types';
import { alternates, localePath } from '../i18n';
import { arrow, arrowThin, pilpodGlyph, reqtoneMark } from '../lib/icons';
import { initReveal } from '../ui/reveal';
import { initStandard } from '../ui/standard';

const pad = (n: number): string => (n < 10 ? '0' : '') + n;

/** The studio's public address. One place, so the page and the JSON-LD agree. */
const CONTACT_EMAIL = 'contact@s7.ma';

export const home: Route = {
  id: 'home',
  path: '/',
  theme: 's7',

  meta({ lang, t }: RenderCtx): RouteMeta {
    return {
      title: t.home.meta.title,
      description: t.home.meta.description,
      canonicalPath: localePath(lang, '/'),
      ogTitle: t.home.meta.ogTitle,
      ogDescription: t.home.meta.ogDescription,
      themeColor: '#0A0A0B',
      themeColorLight: '#F6F3EE',
      alternates: alternates('/'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'S7',
        alternateName: 'Service7',
        url: 'https://s7.ma/',
        description: t.home.meta.jsonLdDescription,
        email: CONTACT_EMAIL,
        address: { '@type': 'PostalAddress', addressCountry: 'MA' },
      },
    };
  },

  render({ t, href }: RenderCtx): string {
    const principles = t.home.principles
      .map(
        ([title, body], i) => /* html */ `
        <li class="pr rv">
          <span class="pr-n">${pad(i + 1)}</span>
          <h3 class="pr-t">${title}</h3>
          <p class="pr-d">${body}</p>
        </li>`,
      )
      .join('');

    const services = t.home.services
      .map(
        ([title, body, stack], i) => /* html */ `
        <article class="service rv" style="--d:${i * 80}ms">
          <span class="service-idx">${pad(i + 1)}</span>
          <h3>${title}</h3>
          <p>${body}</p>
          <p class="service-stack">${stack}</p>
        </article>`,
      )
      .join('');

    const facts = t.home.facts
      .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
      .join('\n          ');

    return /* html */ `
  <!-- ============ HERO ============ -->
  <section class="hero wrap" id="top">
    <p class="eyebrow"><span class="pulse"></span> ${t.home.eyebrow}</p>

    <h1>${t.home.h1}</h1>

    <p class="hero-sub">${t.home.sub}</p>

    <div class="hero-cta">
      <a class="btn btn-primary" href="${href('/#contact')}">
        ${t.home.ctaContact}
        ${arrow()}
      </a>
      <a class="btn btn-ghost" href="${href('/#services')}">${t.home.ctaServices}</a>
    </div>

    <p class="hero-meta">
      <span>${t.home.meta1}</span>
      <span>${t.home.meta2}</span>
      <span>${t.home.meta3}</span>
      <span>${t.home.meta4}</span>
    </p>
  </section>

  <!-- ============ SERVICES ============ -->
  <section id="services" class="wrap">
    <p class="label rv"><span class="dot"></span> ${t.home.servicesLabel}</p>

    <div class="section-head">
      <h2 class="rv">${t.home.servicesHeading}</h2>
      <p class="rv" style="--d:80ms">${t.home.servicesLead}</p>
    </div>

    <div class="services">${services}
    </div>

    <a class="product-link services-cta rv" href="${href('/#contact')}">
      ${t.home.servicesCta}
      ${arrowThin()}
    </a>
  </section>

  <!-- ============ PRODUCTS ============ -->
  <section id="products" class="wrap">
    <p class="label rv"><span class="dot"></span> ${t.home.productsLabel}</p>

    <div class="section-head">
      <h2 class="rv">${t.home.productsHeading}</h2>
      <p class="rv" style="--d:80ms">${t.home.productsLead}</p>
    </div>

    <div class="products">
      <article class="product is-live rv" style="--d:0ms">
        <div class="product-top">
          <span class="product-idx">01</span>
          <span class="badge soon">${t.home.badgeLive}</span>
        </div>
        ${pilpodGlyph('product-glyph')}
        <h3>PilPod</h3>
        <p class="kind">${t.home.pilpodKind}</p>
        <p>${t.home.pilpodBody}</p>
        <a class="product-link" href="https://pilpod.ma" target="_blank" rel="noopener">
          ${t.home.pilpodLink}
          ${arrowThin()}
        </a>
      </article>

      <article class="product is-pre rv" style="--d:120ms">
        <div class="product-top">
          <span class="product-idx">02</span>
          <span class="badge pre">${t.home.badgePre}</span>
        </div>
        ${reqtoneMark('rt-card', 'product-glyph brand')}
        <h3>ReqTone</h3>
        <p class="kind">${t.home.reqtoneKind}</p>
        <p>${t.home.reqtoneBody}</p>
        <a class="product-link" href="${href('/reqtone')}">
          ${t.home.productOverview}
          ${arrowThin()}
        </a>
      </article>
    </div>
  </section>

  <!-- ============ THE S7 STANDARD ============ -->
  <section id="standard" class="standard wrap">
    <p class="label rv"><span class="dot"></span> ${t.home.standardLabel}</p>

    <div class="std-grid">
      <div class="std-aside rv">
        <h2>${t.home.standardHeading}</h2>
        <p>${t.home.standardLead}</p>
        <p class="std-cap"><b class="std-count">00</b> ${t.home.standardCap}</p>
        <div class="std-rail" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      </div>

      <ol class="std-list">${principles}
      </ol>
    </div>
  </section>

  <!-- ============ ABOUT ============ -->
  <section id="about" class="wrap">
    <p class="label rv"><span class="dot"></span> ${t.home.aboutLabel}</p>

    <div class="about-grid">
      <p class="about-lead rv">${t.home.aboutLead}</p>

      <div class="about-body rv" style="--d:100ms">
        <p>${t.home.aboutP1}</p>
        <p>${t.home.aboutP2}</p>

        <dl class="facts">
          ${facts}
        </dl>
      </div>
    </div>
  </section>

  <!-- ============ CONTACT ============ -->
  <section id="contact" class="wrap">
    <p class="label rv"><span class="dot"></span> ${t.home.contactLabel}</p>

    <div class="contact rv">
      <h2>${t.home.contactHeading}</h2>
      <p>${t.home.contactBody}</p>
      <a class="btn btn-primary contact-mail" href="mailto:${CONTACT_EMAIL}">
        ${CONTACT_EMAIL}
        ${arrow()}
      </a>
      <p class="contact-note">${t.home.contactNote}</p>
    </div>
  </section>`;
  },

  mount(main: HTMLElement): () => void {
    const stopReveal = initReveal(main);
    const stopStandard = initStandard(main);
    return () => {
      stopReveal();
      stopStandard();
    };
  },
};
