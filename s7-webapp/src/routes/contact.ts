import type { RenderCtx, Route, RouteMeta } from '../app/types';
import { alternates, localePath } from '../i18n';
import { arrow } from '../lib/icons';
import { initReveal } from '../ui/reveal';
import { initContactForm } from '../ui/contact-form';

export const contact: Route = {
  id: 'contact',
  path: '/contact',
  theme: 's7',

  meta({ lang, t }: RenderCtx): RouteMeta {
    return {
      title: t.contact.meta.title,
      description: t.contact.meta.description,
      canonicalPath: localePath(lang, '/contact'),
      ogTitle: t.contact.meta.ogTitle,
      ogDescription: t.contact.meta.ogDescription,
      themeColor: '#0A0A0B',
      themeColorLight: '#F6F3EE',
      alternates: alternates('/contact'),
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        url: 'https://s7.ma/contact',
        mainEntity: {
          '@type': 'Organization',
          name: 'S7',
          email: t.contact.email,
          url: 'https://s7.ma/',
          address: { '@type': 'PostalAddress', addressCountry: 'MA' },
        },
      },
    };
  },

  render({ t }: RenderCtx): string {
    const c = t.contact;

    const details = c.details
      .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
      .join('\n          ');

    const topics = c.topics
      .map((topic, i) => `<option value="${topic}"${i === 0 ? ' selected' : ''}>${topic}</option>`)
      .join('\n              ');

    return /* html */ `
  <section class="ct wrap" id="top">
    <p class="label rv"><span class="dot"></span> ${c.label}</p>

    <div class="ct-grid">
      <!-- ---------------- the form ---------------- -->
      <div class="ct-main rv">
        <h1>${c.h1}</h1>
        <p class="ct-lead">${c.lead}</p>

        <form class="ct-form" id="contactForm" novalidate>
          <h2 class="ct-form-title">${c.formTitle}</h2>

          <div class="fld">
            <label for="cf-name">${c.fName}</label>
            <input id="cf-name" name="name" type="text" autocomplete="name"
                   maxlength="120" required aria-describedby="cf-name-err">
            <p class="fld-err" id="cf-name-err" hidden></p>
          </div>

          <div class="fld">
            <label for="cf-email">${c.fEmail}</label>
            <input id="cf-email" name="email" type="email" autocomplete="email"
                   maxlength="180" required aria-describedby="cf-email-err">
            <p class="fld-err" id="cf-email-err" hidden></p>
          </div>

          <div class="fld">
            <label for="cf-company">${c.fCompany} <span class="hint">${c.fCompanyHint}</span></label>
            <input id="cf-company" name="company" type="text" autocomplete="organization"
                   maxlength="120">
          </div>

          <div class="fld">
            <label for="cf-topic">${c.fTopic}</label>
            <select id="cf-topic" name="topic">
              ${topics}
            </select>
          </div>

          <div class="fld">
            <label for="cf-message">${c.fMessage}</label>
            <textarea id="cf-message" name="message" rows="6" maxlength="4000"
                      required aria-describedby="cf-message-hint cf-message-err"></textarea>
            <p class="fld-hint" id="cf-message-hint">${c.fMessageHint}</p>
            <p class="fld-err" id="cf-message-err" hidden></p>
          </div>

          <!-- Left empty by people, filled by bots. Hidden from both eyes and
               screen readers, and never submitted anywhere. -->
          <div class="hp" aria-hidden="true">
            <label for="cf-website">Website</label>
            <input id="cf-website" name="website" type="text" tabindex="-1" autocomplete="off">
          </div>

          <div class="ct-actions">
            <button class="btn btn-primary" type="submit" id="cf-submit">
              <span class="cf-label">${c.submit}</span>
              ${arrow()}
            </button>
            <p class="ct-privacy">${c.privacyNote}</p>
          </div>

          <p class="ct-status" id="cf-status" role="status" aria-live="polite"></p>
        </form>

        <!-- swapped in on success -->
        <div class="ct-done" id="cf-done" hidden>
          <p class="ct-done-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                 stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.2 5.2L20 7"/></svg>
          </p>
          <h2>${c.successTitle}</h2>
          <p>${c.successBody}</p>
          <button class="btn btn-ghost" type="button" id="cf-again">${c.successAgain}</button>
        </div>
      </div>

      <!-- ---------------- the aside ---------------- -->
      <aside class="ct-aside rv" style="--d:100ms">
        <a class="ct-email" href="mailto:${c.email}">
          <span class="ct-email-label">${c.emailLabel}</span>
          <span class="ct-email-value">${c.email}</span>
        </a>

        <dl class="facts">
          ${details}
        </dl>
      </aside>
    </div>
  </section>`;
  },

  mount(main: HTMLElement, ctx: RenderCtx): () => void {
    const stopReveal = initReveal(main);
    const stopForm = initContactForm(main, ctx);
    return () => {
      stopReveal();
      stopForm();
    };
  },
};
