/**
 * English — the source dictionary.
 *
 * Its shape defines the contract: `fr.ts` is typed as `Dict`, so a missing or
 * misspelled French key fails the build rather than silently falling back to
 * English at runtime.
 *
 * Strings may contain inline markup (<b>, <code>, <br>, <em>). They are
 * interpolated into templates, so anything added here is trusted content —
 * never put user input in a dictionary.
 */
import type { Pair, Feature } from './types';
import { REQTONE_VERSION } from '../app/releases';

export const en = {
  /** BCP-47 tag for <html lang> and Intl. */
  htmlLang: 'en',
  dir: 'ltr',
  label: 'English',
  short: 'EN',

  a11y: {
    skip: 'Skip to content',
    home: 'S7 — home',
    primaryNav: 'Primary',
    pageLoaded: (title: string) => `${title} — page loaded`,
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    language: 'Language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchToFrench: 'Passer en français',
    switchToEnglish: 'Switch to English',
  },

  nav: {
    products: 'Products',
    services: 'Services',
    standard: 'The Standard',
    about: 'About',
    contact: 'Contact',
  },

  clock: {
    stripLabel: 'Morocco time (GMT) and world clocks',
    badgeLabel: 'Morocco time, GMT',
    badgeTitle: 'Morocco · official time is GMT (GMT+0)',
    sameAsMorocco: 'same time as Morocco',
    ahead: 'ahead of Morocco',
    behind: 'behind Morocco',
    hour: 'h',
    minute: 'min',
    cities: {
      losAngeles: 'Los Angeles',
      chicago: 'Chicago',
      newYork: 'New York',
      saoPaulo: 'São Paulo',
      london: 'London',
      paris: 'Paris',
      dubai: 'Dubai',
      tokyo: 'Tokyo',
    },
  },

  footer: {
    tagline: 'Premium software, designed and engineered for permanence.',
    products: 'Products',
    studio: 'Studio',
    madeIn: 'Made in Morocco',
    by: 'Designed &amp; engineered by S7',
  },

  home: {
    meta: {
      title: 'S7 — Premium Software, Designed & Engineered in Morocco',
      description:
        'S7 is an independent software studio building premium desktop applications, developer tools and productivity software. Local-first, privacy-conscious, fast by design.',
      ogTitle: 'S7 — Premium Software, Designed & Engineered in Morocco',
      ogDescription:
        'An independent software studio building premium desktop applications, developer tools and productivity software.',
      jsonLdDescription:
        'An independent software studio building premium desktop applications, developer tools and productivity software.',
    },
    eyebrow: 'Independent Software Studio',
    h1: 'Premium software.<br><span class="muted">Built to last.</span>',
    sub: 'S7 designs and engineers desktop applications and developer tools that are fast, local-first and privately yours — from Morocco, for everyone.',
    ctaProducts: 'Explore products',
    ctaStandard: 'The S7 Standard',
    meta1: 'Est. Morocco',
    meta2: 'Local-first',
    meta3: 'Privacy-conscious',
    meta4: 'Two products shipped',

    productsLabel: '01 — Products',
    productsHeading: 'One studio. One ecosystem.',
    productsLead:
      'Every S7 product is built on the same foundations, so they behave the same way, respect the same boundaries, and feel like they were made by the same hand.',
    badgeSoon: 'Coming soon',
    badgePre: 'Pre-release',
    badgeLive: 'Live',
    pilpodKind: 'Browser media control',
    pilpodBody:
      'Every media tab in your browser on one panel — volume, timeline, mute and Picture-in-Picture, wherever the sound is coming from.',
    reqtoneKind: 'Native API client',
    reqtoneBody:
      'REST, GraphQL and Server-Sent Events in a native desktop shell. Every collection, variable and credential in one local SQLite file you own.',
    productOverview: 'Product overview',

    standardLabel: '02 — The S7 Standard',
    standardHeading: 'Seven commitments behind every release.',
    standardLead:
      'Not a manifesto. A set of engineering constraints we hold ourselves to, because they are what make software still feel good ten years after it shipped.',
    standardCap: '/ 07 — seven, held to',
    principles: [
      ['Local First', 'Your data lives on your machine. The network is an enhancement, never a requirement.'],
      ['Privacy First', 'No tracking, no profiling, no quiet collection. What happens on your device stays there.'],
      ['Fast by Design', 'Performance is a design decision made early, not an optimisation pass added late.'],
      ['Minimal Dependencies', 'Every dependency is a liability we inherit. We take on very few, and we choose them slowly.'],
      ['Long-Term Maintainability', 'Written to be understood years from now, by whoever opens the file next.'],
      ['User Ownership', 'Open formats, easy export, no lock-in. You should be able to leave at any moment.'],
      ['Simplicity over Complexity', 'The hard work is deciding what not to build. We do that work before writing code.'],
    ] as Pair[],

    aboutLabel: '03 — About',
    aboutLead: 'S7 is an independent software studio,<br><em>designed and engineered in Morocco.</em>',
    aboutP1:
      'We build premium desktop applications, developer tools and productivity software — a small catalogue, made carefully, maintained for the long term.',
    aboutP2:
      'Independence is the point. No investors setting the roadmap, no growth curve dictating what ships. We build what we would want to use, and we keep building it.',
    facts: [
      ['Studio', 'S7 — Service7'],
      ['Based in', 'Morocco'],
      ['Focus', 'Desktop &amp; developer tools'],
      ['Model', 'Independent'],
    ] as Pair[],
  },

  reqtone: {
    meta: {
      title: 'ReqTone — Native, local-first API client | S7',
      description:
        'ReqTone is a native desktop API client for REST, GraphQL and Server-Sent Events. Tauri v2, Rust and reqwest, and every collection, variable and credential in one local SQLite file you own. An S7 product.',
      ogTitle: 'ReqTone — Native, local-first API client',
      ogDescription:
        "REST, GraphQL and Server-Sent Events in a native desktop shell. One local SQLite file, no account, nothing in anyone else's cloud.",
      jsonLdDescription:
        'A native, local-first desktop API client for REST, GraphQL and Server-Sent Events, built with Rust and Tauri v2.',
    },
    crumbProducts: 'S7 Products',
    crumbCurrent: '02 — ReqTone',
    kind: 'Native API client — REST · GraphQL · SSE',
    lead: 'A desktop API client for people who would rather not run <b>a browser inside a browser</b>. The shell is native, the networking is Rust on a real thread, and everything you build lives in one local SQLite file that belongs to you.',
    specs: [
      ['Shell', 'Tauri v2'],
      ['Core', 'Rust + reqwest'],
      ['Storage', 'SQLite'],
      ['Version', REQTONE_VERSION],
    ] as Pair[],
    ctaDownload: 'Download for Windows',
    ctaVisit: 'Visit reqtone.com',
    ctaAll: 'All S7 products',
    statusPill: `Available · v${REQTONE_VERSION} for Windows · free`,

    productLabel: 'The product',
    productHeading: 'Built for the loop you actually run.',
    productP1:
      'Send, read, tweak, send again — a few hundred times a day. That loop is the whole job, and most API clients treat it as an afterthought behind a sync service, a login screen and a workspace invitation.',
    productP2:
      "<b>ReqTone is built around the loop and nothing else.</b> Projects, folders and requests nest as deep as the service does. Tabs carry their project's colour so a wall of open endpoints still reads at a glance. An edited URL, header or body raises a dirty marker before you can lose it, and reopening the app brings back every tab, sub-tab and draft body exactly as you left it.",
    productP3:
      'It is for developers and teams who work against APIs all day and want the tool to be fast, quiet, and entirely theirs.',
    loopBar: 'the loop',
    loop: [
      ['Send', 'one path, streaming by default'],
      ['Read', 'status, latency, size, frames as they land'],
      ['Tweak', 'Monaco, live validation, scoped variables'],
      ['Again', 'replay from a searchable history'],
    ] as Pair[],

    engineeringLabel: 'Engineering',
    engineeringHeading: 'Six decisions, with the trade-offs attached.',
    engineeringLead:
      'Each one of these cost something, which is the only kind of decision worth writing down.',
    decisions: [
      [
        'A native shell, not a bundled browser',
        `ReqTone renders in the webview the operating system already provides and
         does its networking in Rust with <code>reqwest</code>, on a real thread,
         instead of shipping a browser engine and a JavaScript runtime alongside
         the app. The cost: the UI inherits whatever webview the OS gives it —
         which is why both themes are tested on all three platforms rather than
         assumed.`,
      ],
      [
        'Your data is a file you own',
        `Collections, project trees, environments, auth profiles and history are
         rows in an ordinary SQLite database in your application directory. Copy
         it, diff it, back it up, keep it on an encrypted volume, point the app at
         a different one, or open it in any SQLite browser. Export to JSON or
         Postman format is there too, so leaving is a file operation rather than a
         support ticket.`,
      ],
      [
        'Nothing waits on the network to start',
        `No account, no licence check, no auto-updater — and a standing rule that
         nothing on the startup path may block on a network call. The app opens
         with the cable out. What it does contact is the endpoint in your request,
         an OAuth token URL you configured, and your own sync server if you turn
         one on.`,
      ],
      [
        'Streaming is the default path, not a mode',
        `Every request goes down the same streaming code, so a response renders as
         it is written and the window stays usable while the stream is open. There
         is no separate event-stream request type to switch into and no second
         implementation to diverge — which also means a <code>POST</code> with a
         JSON body streams, which is what most LLM endpoints need.`,
      ],
      [
        'Scopes resolve one way',
        `A variable resolves request first, then project, then global. A staging
         token and a sandbox token can both be called <code>{{token}}</code>
         without either surprising you, and the manager shows which values are
         unused and whether a value lands in params, body or headers.`,
      ],
      [
        'Getting work in and out is a file operation',
        `Postman Collection v2.1, OpenAPI and Swagger 3.0 in JSON or YAML, raw
         cURL commands and <code>.reqtone</code> archives all import — bringing
         folder trees, headers, query params, auth profiles and bodies with them.
         Export runs the same way. Scripts are the known gap: pre-request and test
         scripts written in JavaScript do not transfer.`,
      ],
    ] as Pair[],

    featuresLabel: 'Features',
    featuresHeading: 'Everything in the window.',
    featuresLead:
      'Every subsystem below exists to take a step out of that loop, not to fill a comparison chart.',
    features: [
      [
        'Workspace',
        [
          '<b>Projects → folders → requests</b>, nested as deep as you like',
          "<b>Project colour accents</b> — the active tab carries its parent project's border colour",
          '<b>Dirty-state dots</b> — an edited URL, header or body raises a marker',
          '<b>Session restore</b> — every tab, sub-tab and draft body comes back',
        ],
      ],
      [
        'Streaming',
        [
          '<b>One send path</b> — no streaming mode to switch into',
          '<b>Live chunks and an elapsed timer</b> — usable while the stream is open',
          '<b>Inspectable frames</b> — events, data and errors categorised as they land',
          '<b>Copy any chunk</b> straight out of the frame list',
        ],
      ],
      [
        'Editors',
        [
          '<b>Dual-pane GraphQL</b> — query above, variables below, separate Monaco instances',
          '<b>Operation names resolved</b> so a variables typo never reads as a query error',
          '<b>Live JSON validation</b> — inline markers and a valid/invalid pill',
          '<b>Form and multipart</b> — key-value grids, file attachments, boundaries handled',
        ],
      ],
      [
        'Auth',
        [
          '<b>Bearer, API key, Basic and OAuth2</b> profiles',
          '<b>Set once at the project</b>, inherited by everything beneath it',
          '<b>Per-endpoint override</b> without disturbing its siblings',
          '<b>Variables interpolate in auth headers</b> too',
        ],
      ],
      [
        'Variables',
        [
          '<b>Three scopes</b> — request beats project, project beats global',
          '<b>Unused values flagged</b> in the manager',
          '<b>Usage shown per row</b> — params, body or headers',
          '<b>Space N</b> promotes a selection into a scoped variable, <b>Space V</b> inserts one',
        ],
      ],
      [
        'Storage',
        [
          '<b>One <code>db.sqlite</code></b> — collections, environments, auth, history',
          '<b>One-click workspace switching</b> — separate databases, separate blast radius',
          '<b>No startup network call</b> — no licence check, no update beacon',
          '<b>Portable</b> — copy the file, or export clean JSON / Postman format',
        ],
      ],
      [
        'Inspection',
        [
          '<b>Status, latency and size</b> in one pill row above the body',
          '<b>Fuzzy header filter</b> — find <code>set-cookie</code> in a 40-header response',
          '<b>Cookies with domain, path and flags</b> laid out',
          '<b>Binary rendering and PDF preview</b> in the response pane',
        ],
      ],
      [
        'History',
        [
          '<b>Every run written</b> to a searchable drawer in a background transaction',
          '<b>Replay</b> — restore a past payload and headers in one click',
          '<b>Filter by method or status</b> to narrow to the failures that matter',
          '<b>Grouped search</b> across the whole drawer',
        ],
      ],
      [
        'Set-up',
        [
          '<b>Imports</b> Postman v2.1, OpenAPI / Swagger 3.0, raw cURL, <code>.reqtone</code>',
          '<b>An agent can write the collection</b> — a ready-made prompt, no configuration',
          '<b>Your tree, not a flat dump</b> — controllers become folders',
          '<b>Example bodies from your own DTOs</b> rather than empty strings',
        ],
      ],
    ] as Feature[],

    statusLabel: 'Where it stands',
    statusHeading: 'Out on Windows. Honest about the rest.',
    statusBody:
      `ReqTone v${REQTONE_VERSION} is published for Windows 10 and 11 — free, with no account. The installer is not code-signed yet, so Windows SmartScreen warns before it runs; the download page on reqtone.com shows the two clicks past that warning and the SHA-256 to check the file against first. macOS and Linux are not published yet.`,
    statusNote: 'Status as published on reqtone.com',
    platforms: [
      ['Windows', 'Published — setup .exe, not yet signed'],
      ['macOS', 'Build job unverified'],
      ['Linux', 'No pipeline yet'],
      ['Version', `v${REQTONE_VERSION}`],
      ['Price', 'Free — no account'],
      ['Built with', 'Rust · Tauri v2 · SQLite'],
    ] as Pair[],
  },

  pilpod: {
    meta: {
      title: "PilPod — Your browser's media command center | S7",
      description:
        'PilPod is a Chrome extension that gathers every media tab into one control panel: precision volume, timeline scrubbing, global mute, Picture-in-Picture and instant search. Free, entirely local, no account. An S7 product.',
      ogTitle: "PilPod — Your browser's media command center",
      ogDescription:
        'Every media tab in one precision control panel. Free, 100% local, zero telemetry.',
      jsonLdDescription:
        'A Chrome extension that consolidates every media tab into a single control panel, with precision volume control, timeline scrubbing, global mute and Picture-in-Picture.',
    },
    crumbProducts: 'S7 Products',
    crumbCurrent: '01 — PilPod',
    kind: 'Browser media control — Chrome Extension (MV3)',
    lead: 'Twelve tabs are making noise and <b>one of them is the one you want</b>. PilPod gathers every media tab — YouTube, YouTube Music, anything playing audio or video — into a single control panel: volume, timeline, mute, Picture-in-Picture and instant search.',
    specs: [
      ['Shell', 'Chrome Extension (MV3)'],
      ['Core', 'Service worker + tab registry'],
      ['Audio', 'Web Audio API'],
      ['Version', '2.1.0'],
    ] as Pair[],
    ctaInstall: 'Add to Chrome — free',
    ctaSite: 'Visit pilpod.ma',
    ctaAll: 'All S7 products',
    statusPill: 'Live · v2.1.0 · free, no account',

    productLabel: 'The product',
    productHeading: 'Every tab that makes a sound, on one panel.',
    productP1:
      'Media does not stay where you put it. A video in one window, a playlist in another, an advert autoplaying somewhere you cannot find. The usual fix is hunting through tabs until the noise stops.',
    productP2:
      '<b>PilPod puts all of them on a single panel.</b> Each playing tab gets a row with its own volume and its own timeline. Live search jumps straight to the tab or the stream. One click mutes or pauses everything at once.',
    productP3:
      'It runs entirely inside your browser. No account, no subscription, and nothing leaves the machine.',
    panelBar: 'in the panel',
    panel: [
      ['Find', 'live search across every playing tab'],
      ['Control', 'volume, timeline and mute, per tab'],
      ['Watch', 'Picture-in-Picture without leaving the page'],
      ['Rest', 'sleep idle tabs, wake them on return'],
    ] as Pair[],

    engineeringLabel: 'Engineering',
    engineeringHeading: 'Built for the power user. Engineered for the long haul.',
    engineeringLead:
      'A media controller is easy to fake with keyboard shortcuts. Doing it properly means talking to the page.',
    decisions: [
      [
        'A live registry, not a guess',
        `A Manifest V3 service worker keeps a running registry of every tab that
         owns a media element. The panel shows what is playing now — not what
         happened to be playing when you opened it.`,
      ],
      [
        'Native player bridging',
        `PilPod drives <code>HTMLMediaElement</code> and the Web Audio API
         directly, so the controls are the page's own controls rather than a
         shortcut fired in hope. Volume boosts of up to 400% ride the same path,
         which is why they work on sites that ignore the system mixer.`,
      ],
      [
        'Tab sleep and wake',
        `Idle media tabs are discarded through <code>chrome.tabs.discard</code>
         and restored on demand, so a wall of open tabs stops paying for memory
         it is not using.`,
      ],
      [
        'A desktop companion, optional and off',
        `A Windows companion can bridge system-level audio. It is loopback only,
         disabled by default, and the extension is complete without it — an
         addition for people who want it, never a dependency.`,
      ],
      [
        'One hub, two seconds',
        `One click mutes or pauses everything; one field searches every tab. The
         panel is built to be opened, used and dismissed before you lose your
         place in what you were doing.`,
      ],
    ] as Pair[],

    privacyLabel: 'Privacy',
    privacyHeading: 'Your browser. Your data. Yours alone.',
    privacyBody:
      'PilPod has no servers to send anything to. No telemetry, no analytics, no third-party script, and no account to create. Every setting stays in your browser’s own storage.',
    privacyPoints: [
      ['Zero telemetry', 'Nothing is measured, so nothing can be sent.'],
      ['No third parties', 'No analytics, no embeds, no external scripts.'],
      ['Local processing', 'Audio and tab state never leave the browser.'],
    ] as Pair[],

    statusLabel: 'Where it stands',
    statusHeading: 'Published, and free.',
    statusBody:
      'PilPod is on the Chrome Web Store at v2.1.0 — free, with no account and no subscription. The Windows companion is a separate, optional download.',
    statusNote: 'Status as published on pilpod.ma',
    platforms: [
      ['Chrome', 'Published — Chrome Web Store'],
      ['Windows companion', 'Optional download'],
      ['Version', 'v2.1.0'],
      ['Price', 'Free — no account'],
      ['Built with', 'Manifest V3 · Web Audio API'],
    ] as Pair[],
  },

  services: {
    meta: {
      title: 'Services — Custom software, Sage X3 integration and Rust performance | S7',
      description:
        'S7 builds custom software for companies in Morocco and beyond: full-stack Java Spring Boot and React systems integrated with Sage X3, high-performance Rust backends for heavy data processing, and developer tooling.',
      ogTitle: 'Services — S7',
      ogDescription:
        'Custom software, Sage X3 integration, Rust backends and developer tooling, built to the S7 Standard.',
      jsonLdDescription:
        'Custom software development, Sage X3 integration with Java Spring Boot and React, high-performance Rust backends, and developer tooling.',
    },
    label: 'Services',
    h1: 'Software that fits the business<br><span class="muted">you actually run.</span>',
    lead: 'S7 builds custom software for companies that have outgrown their spreadsheets and their off-the-shelf tools — and connects it properly to the systems they already depend on.',
    ctaStart: 'Start a project',
    ctaStandard: 'The S7 Standard',
    stat1: 'Custom software',
    stat2: 'Sage X3 integration',
    stat3: 'Rust performance work',
    stat4: 'Developer tooling',

    offerLabel: '01 — What we do',
    offerHeading: 'Four kinds of work.',
    offerLead:
      'Different problems, one standard. Whatever we build, you end up owning the source, the schema and the deployment.',
    offers: [
      [
        'Custom software development',
        'Desktop, web and internal applications built to your brief and to the S7 Standard: fast by design, understandable years later, and entirely yours — source, data and all.',
      ],
      [
        'Sage X3 integration',
        'Full-stack Java (Spring Boot) and React systems that read from and write to Sage X3. Stock, orders, invoicing and reporting, surfaced in an interface your team will actually use — without fighting the ERP or waiting on the nightly batch.',
      ],
      [
        'High-performance backends in Rust',
        'When the JVM service becomes the bottleneck, the hot path moves to Rust: a single binary under 3 MB, a fraction of the CPU, and memory measured in megabytes instead of gigabytes — on the same Sage data, at the same volumes, with the same business rules.',
      ],
      [
        'Developer tooling & automation',
        'Internal tools, command-line utilities, browser extensions and integrations: the work that takes a recurring hour out of a team’s week, every week. It is where PilPod and ReqTone came from.',
      ],
    ] as Pair[],

    processLabel: '02 — How the work runs',
    processHeading: 'Four steps, and no surprises at the demo.',
    processLead:
      'The same sequence every time, because the expensive mistakes all happen before any code is written.',
    process: [
      ['Understand', 'We start with the process, not the software: what is actually slow, who it blocks, and what "finished" would look like for you.'],
      ['Prototype', 'Something you can click within the first weeks, running against your real data, so the scope conversation happens early and cheaply.'],
      ['Build', 'Short cycles, working software at the end of each one, and a demo you have already seen the shape of.'],
      ['Hand over', 'Source, schema, deployment and documentation. You can carry on without us — that is the measure of a finished job.'],
    ] as Pair[],

    stackLabel: '03 — Stack',
    stackHeading: 'What we build with.',
    stackLead: 'Chosen slowly, and kept. Every one of these is something we maintain in production, not something we tried once.',
    stack: [
      ['Backend', 'Java · Spring Boot · Rust · PostgreSQL · SQLite'],
      ['Frontend', 'React · TypeScript · Vite'],
      ['Desktop', 'Tauri · Rust'],
      ['ERP', 'Sage X3 — REST and database integration'],
    ] as Pair[],

    closeHeading: 'Tell us what is slowing the business down.',
    closeBody:
      'A short description is enough to start. We will tell you honestly whether we are the right studio for it — including when we are not.',
  },

  contact: {
    meta: {
      title: 'Contact — S7',
      description:
        'Tell S7 about your project. Custom software, Sage X3 integration, Rust performance work and developer tooling, from Morocco.',
      ogTitle: 'Contact — S7',
      ogDescription: 'Tell S7 about your project. We answer every message.',
    },
    label: 'Contact',
    h1: 'Tell us about the project.',
    lead: 'A few lines are enough to start. We read every message and we answer — including when the answer is that we are not the right studio for it.',
    emailLabel: 'Email',
    email: 'contact@s7.ma',
    details: [
      ['Based in', 'Morocco — GMT, all year round'],
      ['Reply time', 'Within two business days'],
      ['Working with', 'Teams in Morocco, Europe and beyond'],
      ['Languages', 'English · Français · العربية'],
    ] as Pair[],

    formTitle: 'Send a message',
    fName: 'Your name',
    fEmail: 'Email',
    fCompany: 'Company',
    fCompanyHint: 'optional',
    fTopic: 'What is it about',
    fMessage: 'Message',
    fMessageHint: 'What you are building, what is in the way, and any deadline that matters.',
    topics: [
      'Custom software',
      'Sage X3 integration',
      'Performance / Rust',
      'Developer tooling',
      'Something else',
    ],
    submit: 'Send message',
    sending: 'Sending…',
    successTitle: 'Message sent.',
    successBody: 'Thank you — we have it, and we will reply within two business days.',
    successAgain: 'Send another',
    errorTitle: 'That did not send.',
    errorBody:
      'Something went wrong on the way. Please email us directly at contact@s7.ma and we will pick it up there.',
    vRequired: 'This one is required.',
    vEmail: 'That does not look like an email address.',
    vMessage: 'A little more detail, please — at least 20 characters.',
    privacyNote:
      'What you send is stored in our own database and used only to answer you. No newsletter, no third parties, no tracking.',
  },

  notFound: {
    meta: {
      title: 'Page not found — S7',
      description: 'The address you followed does not lead anywhere on this site.',
    },
    code: 'Error 404',
    h1: 'This page<br><span class="muted">does not exist.</span>',
    body: 'The address you followed does not lead anywhere on this site — it may have moved, or it may never have been here at all.',
    ctaHome: 'Back to S7',
    ctaProducts: 'Products',
    mark: 'S7 — Service7 · Made in Morocco',
  },
};

/** The shape every language must satisfy. */
export type Dict = typeof en;
