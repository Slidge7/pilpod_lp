# S7 — s7.ma

The studio site, as a single-page application in English and French, dark and
light. Internal links never reload the page, and the backdrop no longer drops
frames.

Pages: home, **Services**, **PilPod**, ReqTone, **Contact**, 404 — each in both
languages, each prerendered.

- **No framework, no runtime dependencies.** TypeScript + Vite, pure CSS.
  About 32 kB of JS and 11 kB of CSS once gzipped — six pages, two languages.
- **Every route is prerendered to real HTML in both languages**, so crawlers,
  link previews and visitors without JavaScript get the whole site, with
  hreflang alternates and JSON-LD.
- **After first paint, the router takes over.** Links — and the language
  switch — swap `<main>` in place with a View Transition. The nav, the GMT
  clock, the footer and the backdrop are never re-rendered.

## Commands

```bash
npm install
npm run dev          # dev server; renders routes the same way the build does
npm run build        # client build → SSR build → prerender into dist/
npm run serve:dist   # serve dist/ the way Firebase does (clean URLs, real 404)
npm run typecheck
firebase deploy      # predeploy runs the build
```

## Layout

```
index.html              shell template (placeholders filled at build time)
src/
  main.ts               client entry: starts the chrome, hands over to the router
  ssr.ts                build-time entry: the same routes, rendered in Node
  router/router.ts      history routing, View Transitions, focus + announcements
  router/scroll.ts      per-entry scroll restoration, anchor offsets
  app/shell.ts          nav, time strip, backdrop, footer (rendered once)
  app/head.ts           per-route <head>: build time and runtime
  routes/               home, services, pilpod, reqtone, contact, notfound
  i18n/                 en.ts is the source dictionary, fr.ts must match its shape
  ui/                   clock, nav, menu, reveal, standard ledger, pointer lens,
                        theme toggle, contact form
  lib/                  icons, contact-submit (Firestore over REST)
  styles/               tokens (3 themes × 2 modes), base, ambient, nav, controls,
                        transitions, home, product, services, contact, notfound
firestore.rules         who may write to the messages collection
scripts/prerender.mjs   writes dist/index.html, dist/reqtone/index.html, dist/404.html,
                        sitemap.xml, font preloads, CSP
scripts/serve.mjs       local Firebase-like static server
```

### Adding a page

1. Add its strings to `src/i18n/en.ts`, then to `fr.ts` (the build fails until
   French is complete — that is the point).
2. Create `src/routes/<name>.ts` exporting a `Route` with an `id`, a `path`, a
   `theme`, `meta(ctx)`, `render(ctx)` and optionally `mount()`. Read every
   string from `ctx.t` and write links as `ctx.href('/somewhere')`.
3. Add it to `routes` and `prerenderable` in `src/routes/index.ts`.
4. Put its styles in `src/styles/<name>.css` and import that file in `main.ts`.

It is then prerendered in both languages and added to the sitemap, with
hreflang alternates, automatically.

### Changing or adding a language

All copy lives in `src/i18n/`. `en.ts` defines the shape; `fr.ts` is typed as
`Dict`, so a missing key is a compile error rather than an English string
leaking onto a French page. To add a third language, add its file, add the code
to `LANGS` and `PREFIX` in `src/i18n/index.ts`, and everything else — routing,
prerendering, hreflang, the sitemap, the switch — follows.

## Why it was slow, and what changed

Measured with Chrome tracing, using the same scripted session on the old and new
builds (sandbox with no GPU, so absolute numbers are pessimistic; compare the ratios):

| Scenario | Old | New |
|---|---|---|
| Home, idle | 5 fps, worst frame 400 ms | 60 fps, 0 frames over 50 ms |
| Home, scrolling | 5 fps, worst frame 450 ms | 47 fps, 0 frames over 50 ms |
| Home, pointer moving | 6 fps, 162 janky frames | 60 fps, 0 |
| ReqTone (all three) | 9–10 fps | 60 fps, 0 |
| Pipeline CPU while scrolling | 18.4 s | 3.2 s (−82%) |
| Pipeline CPU during pointer sweep | 37.4 s | 4.2 s (−89%) |

Causes, in order of cost:

1. **`filter: blur(120px)` on three viewport-sized glows** that were also
   animating scale. The glows now paint a radial gradient whose stops follow the
   curve that blur produced, fitted from a numerical model of the original. The
   backdrop differs from the old one by 0.5/255 on average.
2. **A four-viewport grain layer with `mix-blend-mode: overlay`** sitting over
   moving layers. It is now viewport-sized, has no blend mode, and is cached.
3. **The pointer light repainted the whole screen on every mouse frame.** It is
   now a fixed-size disc moved with a transform.
4. **Cursor position was broadcast as inherited CSS custom properties**, which
   made the browser repaint the tiled zellige on every pointer frame. JS now
   writes transforms only to the three layers that move.
5. **The hero's pulsing dot animated `box-shadow`**, which repaints the hero
   every frame. It now uses `transform` and `opacity` only.
6. **Scroll handlers forced layout.** The ledger called
   `getBoundingClientRect()` on seven rows every frame. That and the nav state
   are now handled by IntersectionObservers, and the page has no scroll
   listeners at all.
7. **Google Fonts sat on the critical path.** Geist and Geist Mono are now
   self-hosted, content-hashed and preloaded.

The zellige lattice is pixel-identical to the original (verified by diff).

## The contact form

The form on `/contact` writes straight to Firestore over its REST API — one
`fetch`, no SDK. The Firebase JavaScript SDK would have been about 100 kB
gzipped, three times the whole rest of the site, to do one POST.

**To switch it on:**

1. In the Firebase console, create a Firestore database in the `service7-8bd8b`
   project (production mode).
2. Copy `.env.example` to `.env` and paste your Firebase **web API key** into
   `VITE_FIREBASE_API_KEY`. Console → Project settings → General → Your apps →
   Web app → `apiKey`. This key is not a secret; it is visible in every
   Firebase web app and grants nothing on its own.
3. Deploy the rules: `firebase deploy --only firestore:rules`.
4. Rebuild and deploy the site.

Messages land in the `messages` collection and are readable in the Firebase
console. **Until the key is set, the form still works** — it falls back to
opening a pre-filled email to contact@s7.ma instead of storing the message, so
nothing is ever silently lost.

`firestore.rules` is what actually protects the data: a document may be
created only if it has exactly the expected fields, with sane lengths, a
plausible email and a timestamp close to now. Reading, updating and deleting
are refused outright, so nobody can enumerate the messages with the public key.

Spam defences, in order of how much they inconvenience a real person (none of
them do): a hidden honeypot field; a send that is held back until the form has
been open three seconds; length limits enforced twice, in the page and in the
rules.

## Languages

English is served from the root, French from `/fr`. Both are real prerendered
pages with their own canonical URL, so a French link can be shared and Google
indexes each language once.

Which language a visitor gets, strongest signal first:

1. **An explicit `/fr` URL** — they followed a French link, so it is honoured.
2. **A choice they made here before**, kept in `localStorage`.
3. **Their browser's language list**, checked in order.
4. **English.**

Detection happens in the inline script in `<head>`, before first paint, so a
French visitor never sees a flash of English. The URL is corrected with
`replaceState`, so Back still leaves the site instead of bouncing between
languages. With `localStorage` blocked (private mode), detection still works —
the choice just does not outlive the tab.

The French marketing copy is adapted, not translated: "Premium software. Built
to last." is "Des logiciels d'exception. Conçus pour durer." The ReqTone page
is technical writing, so it uses established French developer vocabulary and
leaves the terms the audience actually says in English (REST, streaming,
endpoint, thread, webview) alone.

Both dictionaries ship in the same bundle (~4 kB gzipped for French). That is
deliberate: a visitor detected as French needs the French strings *before*
first paint, and a separate chunk would add a round trip to the one moment
that has to be instant.

## Dark and light

Dark stays the default and is unchanged. Light is a full second palette for
both page themes, selected by `data-mode` on `<html>` alongside `data-theme` —
four token sets in one stylesheet, no extra CSS downloaded.

A saved choice is applied by the inline `<head>` script before first paint, so
a returning light-mode visitor never sees a dark flash. The toggle is
script-only and hides itself without JavaScript; the language switch is a real
link and keeps working.

Overlay tints are written `rgb(var(--fg-rgb) / .06)` rather than a hardcoded
`rgba(242,239,234,…)`, so a wash that lightens the dark surface darkens the
light one instead of disappearing into it.

### A contrast finding you should know about

The light palettes were pitched by measurement: every text token clears WCAG AA
(4.5:1) on its own surface, and the build's test suite asserts it.

**The dark palette does not, and I left it exactly as you designed it.** Carried
over unchanged from the original site:

| Element | Contrast | AA needs |
|---|---|---|
| `.hero-meta`, `.product .kind`, `.pr-n`, `.facts dt`, `.foot-nav h4`, `.foot-bottom` (`--ink-4`) | 1.94:1 | 4.5:1 |
| `.pr-d`, `.label`, `.foot-tag`, `.foot-nav a`, `.eyebrow` (`--ink-3`) | 3.43:1 | 4.5:1 |
| ReqTone `.crumb`, `.spec dt`, `.eng .n`, `.loop-bar` | 3.1–3.4:1 | 4.5:1 |

These are the quiet mono labels, and the low contrast is clearly intentional in
the design. It does mean some visitors cannot read them. If you want to fix it
without touching the layout, raise two numbers in `tokens.css` under
`:root[data-theme='s7']` — `--ink-3` to `0.55` and `--ink-4` to `0.42` — and the
ReqTone equivalents to `#9aa0ad` and `#7b8190`. Say the word and I will do it
and re-run the audit.

## Deliberate differences from the old site

- The 404 page is a route inside the app, so it keeps the nav, the clock and the
  backdrop.
- There is one footer on every page, so the footer on ReqTone is now the studio
  footer (7 px taller).
- The ReqTone favicon moved from `/assets/reqtone.svg` to `/icons/reqtone.svg`.
  `/assets/` now holds only content-hashed files that are cached forever.
- A strict Content-Security-Policy is injected into every page. Only our own
  scripts can run, and the one inline script is pinned by hash.
- The grain overlay is plain noise at 5.5% opacity instead of an overlay blend.
  Raise `.grain { opacity }` in `ambient.css` if it should read stronger.
- The Standard ledger keeps its original 40 px indent. The old stylesheet never
  reset `<ol>`, so that indent came from the browser default. It is now set
  explicitly.
- The nav carries two small controls at its right edge: the language switch and
  the light/dark toggle. With five destinations the links move into a phone
  menu below 860 px; above it, the bar is unchanged.
- PilPod is a **Chrome extension**, and it is **published**. The old card
  described it as a coming-soon desktop app, which is now wrong on both counts.
- Product cards are clickable across their whole surface (a stretched link, so
  the accessible name stays on the "Product overview" link rather than
  swallowing the heading and badge).
- `404.html` is served by Firebase for every unmatched path, so it ships in
  English; the router switches it to French immediately for a French visitor.
  It is `noindex`, so this has no search consequence.

## Migrating the repo

1. Branch first: `git checkout -b webapp`.
2. Delete the old `public/` folder. Its pages now live in `src/routes/`, and
   the new `public/` holds only static files (icons, robots.txt).
3. Copy this project into the repo root, replacing `firebase.json` and
   `.gitignore`.
4. Run `npm install && npm run build && npm run serve:dist`, then click around
   at http://localhost:4173 — try `/fr`, the language switch, and the theme
   toggle.
5. Run `firebase deploy`.
6. In Google Search Console, resubmit `sitemap.xml` — it now lists 10 URLs
   across both languages.
