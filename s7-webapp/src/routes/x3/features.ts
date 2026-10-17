import type { RenderCtx, Route, RouteMeta } from '../../app/types';
import { arrowThin } from '../../lib/icons';
import { initReveal } from '../../ui/reveal';
import { X3_PATH, closing, group, pad, subnav, x3Meta } from './shared';

/** Screens from the pilot. Every name and amount in them is invented. */
const SHOTS = ['recap-devis', 'delais', 'recap-commande'] as const;
const ANCHORS = ['screens', 'users', 'ai'] as const;

export const x3Features: Route = {
  id: 'x3-features',
  path: X3_PATH.features,
  theme: 'x3',

  meta(ctx: RenderCtx): RouteMeta {
    return x3Meta(ctx, 'features', ctx.t.x3.features.meta);
  },

  render(ctx: RenderCtx): string {
    const { href } = ctx;
    const x = ctx.t.x3.features;

    const jump = ctx.t.x3.home.pillars
      .map(
        ([, , label], i) =>
          `<a href="${href(X3_PATH.features + '#' + (ANCHORS[i] ?? ''))}"><b>${pad(i + 1)}</b> ${label}</a>`,
      )
      .join('\n      ');

    const screens = x.screensGroups.map(([h, items], i) => group(h, items, i)).join('');
    const users = x.usersGroups.map(([h, items], i) => group(h, items, i)).join('');

    const shots = x.shots
      .map(
        ([tag, caption, alt], i) => /* html */ `
      <figure class="rv"${i ? ` style="--d:${i * 80}ms"` : ''}>
        <img src="/x3companion/${SHOTS[i] ?? SHOTS[0]}.webp" width="1280" height="800"
             alt="${alt}" loading="lazy" decoding="async" />
        <figcaption><b>${tag}</b> <span>${caption}</span></figcaption>
      </figure>`,
      )
      .join('');

    const homes = x.homes
      .map(
        ([role, tiles], i) => /* html */ `
      <div class="x3-home rv"${i ? ` style="--d:${i * 70}ms"` : ''}>
        <p class="who"><i></i> ${role}</p>
        <ul>
          ${tiles.map((tile) => `<li><span></span>${tile}</li>`).join('\n          ')}
        </ul>
      </div>`,
      )
      .join('');

    const aiRows = x.aiTableRows
      .map(
        (row) =>
          `<tr>${row.map((cell, i) => (i === row.length - 1 ? `<td class="num">${cell}</td>` : `<td>${cell}</td>`)).join('')}</tr>`,
      )
      .join('\n              ');

    const aiPoints = x.aiPoints
      .map(
        ([title, body], i) => /* html */ `
        <div class="pp-card rv"${i ? ` style="--d:${i * 80}ms"` : ''}>
          <h3>${title}</h3>
          <p>${body}</p>
        </div>`,
      )
      .join('');

    return /* html */ `${subnav(ctx, 'features')}

  <section class="wrap x3-page-head" id="top">
    <p class="label rv"><span class="dot"></span> ${x.label}</p>
    <h1 class="rv">${x.h1}</h1>
    <p class="x3-page-lead rv" style="--d:80ms">${x.lead}</p>
    <nav class="x3-jump rv" style="--d:140ms" aria-label="${x.label}">
      ${jump}
    </nav>
  </section>

  <!-- ============ 01 — SCREENS & FEATURES ============ -->
  <section class="wrap" id="screens">
    <p class="label rv"><span class="dot"></span> ${x.screensLabel}</p>
    <div class="sec-head rv">
      <h2>${x.screensHeading}</h2>
      <p>${x.screensLead}</p>
    </div>
    <div class="feat">${screens}
    </div>

    <h3 class="x3-sub rv">${x.shotsHeading}</h3>
    <div class="x3-shots">${shots}
    </div>
    <p class="x3-shots-note rv">${x.shotsNote}</p>
  </section>

  <!-- ============ 02 — USER CONTROL ============ -->
  <section class="wrap" id="users">
    <p class="label rv"><span class="dot"></span> ${x.usersLabel}</p>
    <div class="sec-head rv">
      <h2>${x.usersHeading}</h2>
      <p>${x.usersLead}</p>
    </div>
    <div class="feat x3-two">${users}
    </div>

    <div class="x3-sub-head rv">
      <h3 class="x3-sub">${x.homesHeading}</h3>
      <p>${x.homesLead}</p>
    </div>
    <div class="x3-homes">${homes}
    </div>
  </section>

  <!-- ============ 03 — AI ============ -->
  <section class="wrap" id="ai">
    <p class="label rv"><span class="dot"></span> ${x.aiLabel}</p>

    <div class="x3-ai">
      <div class="rv">
        <h2>${x.aiHeading}</h2>
        <p class="x3-ai-lead">${x.aiLead}</p>
      </div>

      <div class="x3-chat rv" style="--d:120ms" role="img" aria-label="${x.aiChatNote}: ${x.aiQ1}">
        <p class="loop-bar"><i></i> ${x.aiChatBar}</p>
        <div class="x3-chat-body" aria-hidden="true">
          <p class="q">${x.aiQ1}</p>
          <div class="a">
            <p>${x.aiA1}</p>
            <table>
              <thead><tr>${x.aiTableHead.map((h, i, all) => `<th${i === all.length - 1 ? ' class="num"' : ''}>${h}</th>`).join('')}</tr></thead>
              <tbody>
              ${aiRows}
              </tbody>
            </table>
          </div>
          <p class="q">${x.aiQ2}</p>
          <div class="a">
            <p>${x.aiA2}</p>
            <div class="bars">
              <span style="--w:38%"><b>38%</b></span>
              <span class="team" style="--w:44%"><b>44%</b></span>
            </div>
          </div>
        </div>
        <p class="x3-chat-note">${x.aiChatNote}</p>
      </div>
    </div>

    <div class="pp-privacy x3-ai-points">${aiPoints}
    </div>
  </section>

  <!-- ============ STATUS ============ -->
  <section class="wrap">
    <p class="label rv"><span class="dot"></span> ${x.statusLabel}</p>
    <div class="pd-status">
      <div class="rv">
        <h2>${x.statusHeading}</h2>
        <p>${x.statusBody}</p>
        <p class="x3-more x3-more-left"><a href="${href(X3_PATH.docs)}">${x.ctaDocs} ${arrowThin()}</a></p>
      </div>
      <dl class="plat rv" style="--d:100ms">
        ${x.platforms
          .map(([k, v], i) => `<div><dt>${k}</dt><dd${i < 4 ? ' class="ok"' : ''}>${v}</dd></div>`)
          .join('\n        ')}
      </dl>
    </div>
  </section>
${closing(ctx, { href: X3_PATH.docs, label: x.ctaDocs })}`;
  },

  mount(main: HTMLElement): () => void {
    return initReveal(main);
  },
};
