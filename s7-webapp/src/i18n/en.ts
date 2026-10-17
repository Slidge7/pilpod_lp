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
import type { Pair, Feature, Triple, DocSection } from './types';
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

  x3: {
    nav: {
      label: 'X3Companion',
      overview: 'Overview',
      features: 'Features',
      docs: 'Docs',
      privacy: 'Privacy',
      cta: 'Request a demo',
    },

    common: {
      ctaDemo: 'Request a demo',
      closeHeading: 'See it inside your own Sage X3.',
      closeBody:
        'A first call about your Sage is enough to know what X3Companion can change for your team — and what it would take.',
      legal:
        'X3Companion is an independent product by S7. It is not made, sponsored or endorsed by Sage. Sage and Sage X3 are trademarks of The Sage Group plc or its licensors.',
    },

    /* --------------------------------------------------------- overview -- */
    home: {
      meta: {
        title: 'X3Companion — Change anything in Sage X3, without touching its code | S7',
        description:
          'X3Companion lets you edit any Sage X3 screen, add new screens and features, control what each user sees and does, and talk to Sage X3 in plain language — all without touching the Sage X3 code base. On your own network.',
        ogTitle: 'X3Companion — Change anything in Sage X3, without touching its code',
        ogDescription:
          'Edit any screen, add new features, control every user and talk to your data — inside Sage X3, with zero lines of X3 code.',
        jsonLdDescription:
          'A layer for Sage X3 that edits existing screens, adds new screens and features, controls what each user sees and does, and adds an AI assistant — inside the Sage X3 web client, without modifying the Sage X3 code base.',
      },
      kind: 'Change anything in Sage X3 — without touching its code',
      lead: 'Every change to Sage X3 usually means 4GL, a scarce X3 developer, a development folder, a patch — and more work at the next upgrade. X3Companion is a layer on top of Sage: <b>edit any screen, add new ones, decide what each user sees and does, and talk to your data — all streamed into Sage X3, without a single line of X3 code.</b>',
      specs: [
        ['X3 code changed', 'None'],
        ['Works in', 'Sage X3, as your users know it'],
        ['Hosted', 'On your own network'],
        ['Built with', 'React · Java · Rust'],
      ] as Pair[],
      ctaFeatures: 'Explore the features',
      statusPill: 'Pilot · deployed by S7',

      pillarsLabel: 'What it unlocks',
      pillarsHeading: 'One layer. Three things Sage could not do before.',
      pillars: [
        ['Edit any screen. Add new ones.', 'Change what Sage X3 screens show, add sections, columns and buttons, or create entire new screens and features — inside Sage.', 'Screens & features'],
        ['Control every user.', 'Decide what each user sees and what they can do, and give each one a home page made for their job.', 'User control'],
        ['Talk to Sage X3.', 'Ask a question in plain language and get the answer from your own data, as a table or a chart.', 'AI in Sage X3'],
      ] as Triple[],

      whyLabel: 'Why it exists',
      whyHeading: 'Sage X3 is a solid ERP. It is a hard place to change.',
      whyLead:
        'The usual way to change X3 is to develop inside it. That choice decides the language, who can do the work, how it is tested, how it ships — and what happens every time Sage is updated.',
      whyCols: ['', 'Developing inside X3', 'With X3Companion'],
      whyRows: [
        ['Language', 'X3 4GL, known by few developers', 'React, Java, Rust — what modern developers already use'],
        ['Who can build it', 'A specialised X3 developer, hard to find and to replace', 'Any full-stack developer'],
        ['Where the work lives', 'Inside Sage, in the folder’s dictionary and scripts', 'Outside Sage, in its own repository, under version control'],
        ['Testing', 'By hand, in a Sage test folder', 'Automated tests in seconds, without touching Sage'],
        ['Shipping', 'Patches, validation, a maintenance window', 'Published from X3Companion; Sage is not touched'],
        ['Sage upgrades', 'Specific code to review, re-port and re-test', 'No X3 code to port; only the table definitions are re-checked'],
        ['When something breaks', 'It can break the screen people enter orders in', 'The new feature shows an error; Sage keeps working'],
      ] as Triple[],

      shotLabel: 'In Sage',
      shotHeading: 'Built outside Sage. Shown inside it.',
      shotLead:
        'Same fonts, same sections, same filters and the same French your team reads all day. Users do not know — or need to know — that none of it is X3 code.',
      shotCaption: 'Récap devis — a new screen added to Sage X3: every quote for a period, with its order, delivery and invoicing status.',
      shotAlt: 'The Récap devis screen inside Sage X3: period filters, then a table of quotes with ordered, delivered and invoiced status.',
      shotNote: 'Invented data',
      shotLink: 'All the features',

      flowLabel: 'How it works',
      flowHeading: 'Sage stays as it is. Everything new is added on top.',
      flowLead:
        'X3Companion runs on a machine next to Sage, on your network. It reads Sage, applies your rules, and streams the new screens and features into Sage X3 for each user. No change inside X3, and no S7 cloud in the middle.',
      flow: [
        ['Untouched', 'Sage X3', 'Your folder, your code, your setup — exactly as they are today.'],
        ['Your network', 'X3Companion', 'Reads Sage safely and holds every new screen, feature and rule.'],
        ['Your rules', 'Per user, per role', 'Who sees what, who can do what, whose home page shows what.'],
        ['Your users', 'Sage X3, upgraded', 'The new screens and features appear inside Sage, as part of it.'],
      ] as Triple[],
      flowLink: 'Read the technical overview',

      trustLabel: 'Why IT says yes',
      trust: [
        ['Zero lines of X3 code', 'Nothing added to the folder’s dictionary — no script, no screen, no patch. Remove X3Companion and Sage is exactly as it was.'],
        ['Upgrades stop being a project', 'Everything built depends on tables, not on X3 code. A Sage update means re-checking definitions, not re-porting programs.'],
        ['Your data stays home', 'It runs on your network, reads through a read-only login, and sends nothing to S7 — ever.'],
      ] as Pair[],
    },

    /* --------------------------------------------------------- features -- */
    features: {
      meta: {
        title: 'Features — X3Companion for Sage X3 | S7',
        description:
          'Edit any Sage X3 screen, add new screens and features, control what each user sees and does with per-role home pages, and talk to Sage X3 with an AI assistant — without touching the Sage X3 code base.',
        ogTitle: 'X3Companion features — screens, user control and AI in Sage X3',
        ogDescription: 'What X3Companion adds to Sage X3, with examples: new screens and features, a user control layer, and AI.',
      },
      label: 'Features',
      h1: 'Everything it adds to Sage X3.',
      lead: 'Three families of features, all streamed into the Sage X3 screens your team already uses — and none of them written in X3.',

      screensLabel: '01 — Screens & features',
      screensHeading: 'Edit any screen. Add new screens and features.',
      screensLead:
        'Whatever your team keeps exporting to Excel, asking IT for, or doing by hand between three screens can live inside Sage X3 itself — next to the screens they already use.',
      screensGroups: [
        [
          'Change existing screens',
          [
            '<b>Add a section</b> — all of a customer’s quotes, orders and invoices on the customer screen',
            '<b>Add a column or an indicator</b> — the customer’s open balance on the order screen',
            '<b>Rename labels</b> in your company’s own vocabulary',
            '<b>Hide the fields</b> nobody in your company fills in',
            '<b>Highlight what matters</b> — overdue invoices in red, blocked customers flagged',
          ],
        ],
        [
          'Add new screens',
          [
            '<b>Recaps</b> of quotes and orders, with their delivery and invoicing status',
            '<b>Dashboards</b> per sales rep, per site, per product family',
            '<b>Collections follow-up</b> — who owes what, since when',
            '<b>Stock views</b> by warehouse, with what is reserved and what is coming',
            '<b>Analyses</b> of conversion, margins and delays, against last period',
          ],
        ],
        [
          'Add new features',
          [
            '<b>The full trail</b> of any document, quote to invoice, in one click',
            '<b>Delays</b> measured between every step of the sales cycle',
            '<b>Exports</b> to Excel or CSV from any new screen',
            '<b>Buttons and shortcuts</b> that take users straight where they need to go',
            '<b>Alerts</b> when something needs someone’s attention',
          ],
        ],
      ] as Feature[],
      shotsHeading: 'Already running in Sage X3',
      shots: [
        ['Récap devis', 'A new screen: every quote for a period, with its rep, its order, and whether it was delivered and invoiced — with totals and CSV export.', 'The Récap devis screen inside Sage X3: period filters, then a table of quotes with ordered, delivered and invoiced status.'],
        ['Délais', 'A new feature on any order: the time between each step, from quote to invoice.', 'An order’s Délais tab: quote to order, order to delivery and delivery to invoice durations, a cycle bar and a timeline.'],
        ['Récap commande', 'A new screen: every order with who created it, its quote, deliveries and invoices.', 'The Récap commande screen inside Sage X3: a table of orders with delivery and invoicing status.'],
      ] as Triple[],
      shotsNote: 'Screens shown with invented data · same fonts, sections and filters as Sage',

      usersLabel: '02 — User control',
      usersHeading: 'A control layer for every user.',
      usersLead:
        'Sage X3 rights are set screen by screen, deep in its setup. X3Companion adds a layer above them: decide, user by user or role by role, what appears and what is allowed — from one place, applied within a minute.',
      usersGroups: [
        [
          'What each user sees',
          [
            '<b>Hide cost prices and margins</b> from sales reps',
            '<b>Show each rep only their own</b> customers, quotes and figures',
            '<b>Mask columns and sections</b> that are not someone’s business',
            '<b>Simplify screens</b> for occasional users: only the fields they need',
          ],
        ],
        [
          'What each user can do',
          [
            '<b>Allow or block</b> a screen, a button or an export, per user',
            '<b>Read-only access</b> for interns, auditors or a new hire',
            '<b>Turn a feature on</b> for one team before everyone else',
            '<b>Revoke access at once</b> when someone leaves',
          ],
        ],
      ] as Feature[],
      homesHeading: 'A home page made for each job',
      homesLead: 'Instead of the same Sage menu for everyone, each user opens Sage X3 on what they actually work on.',
      homes: [
        ['Sales rep', ['My quotes to follow up', 'My orders not yet delivered', 'My month against target']],
        ['Accountant', ['Invoices overdue, by age', 'Deliveries not yet invoiced', 'Today’s payments']],
        ['Sales manager', ['Team conversion this quarter', 'Biggest open quotes', 'Delays, rep by rep']],
        ['Warehouse', ['Today’s shipments', 'Orders waiting on stock', 'Late deliveries']],
      ] as Feature[],

      aiLabel: '03 — AI in Sage X3',
      aiHeading: 'Talk to Sage X3.',
      aiLead:
        'An assistant on every Sage screen. Ask in plain language — French, English or both — and get the answer from your own data, as a sentence, a table or a chart. No report to request, no export to rebuild.',
      aiChatBar: 'Assistant · in Sage X3',
      aiQ1: 'Which quotes over 50,000 MAD from last month have not become orders yet?',
      aiA1: 'Four quotes, 286,400 MAD in total. The oldest is 27 days old.',
      aiTableHead: ['Quote', 'Customer', 'Rep', 'Amount excl. tax'],
      aiTableRows: [
        ['DE2618231', 'ATLAS NEGOCE', 'N. Berrada', '98,200'],
        ['DE2618254', 'RIF DISTRIBUTION', 'K. Tazi', '74,650'],
        ['DE2618270', 'OCEAN TRADING', 'S. Alami', '61,300'],
        ['DE2618288', 'SOUSS AGRI', 'K. Tazi', '52,250'],
      ],
      aiQ2: 'And compare Karim’s conversion rate with the team this quarter.',
      aiA2: 'Karim converted 38% of his quotes this quarter, against 44% for the team. Chart below.',
      aiChatNote: 'Invented example',
      aiPoints: [
        ['Your data, your vocabulary', 'Teach it how your company talks — “REP_0 is the sales rep”, “our currency is MAD” — once, for everyone.'],
        ['Numbers from Sage, not invented', 'Every figure in an answer comes straight from your database. The AI chooses what to look up; it never makes up the result.'],
        ['It reads, it does not touch', 'The assistant can only read, through the same safeguards as every other feature, and you decide who can use it.'],
      ] as Pair[],

      statusLabel: 'Where it stands',
      statusHeading: 'What is live, and what is built for you.',
      statusBody:
        'X3Companion is in pilot on Sage X3 V12 over SQL Server. New screens and the assistant are running today. The user control layer and home pages are set up for each company during deployment — and if you need a screen Sage does not have, we build it on X3Companion.',
      platforms: [
        ['Sage X3', 'V12 · SQL Server'],
        ['X3 code changed', 'None'],
        ['New screens & features', 'Live in pilot'],
        ['AI assistant', 'Live · optional'],
        ['User control & home pages', 'Built for each company'],
        ['Price', 'On request'],
      ] as Pair[],
      ctaDocs: 'Technical docs',
    },

    /* ------------------------------------------------------------- docs -- */
    docs: {
      meta: {
        title: 'Docs — How X3Companion works with Sage X3 | S7',
        description:
          'Technical overview of X3Companion for Sage X3: architecture, requirements, deployment, table definitions, security, the AI assistant, upgrades and FAQ.',
        ogTitle: 'X3Companion docs — architecture, requirements and security',
        ogDescription: 'How X3Companion adds features to Sage X3 without touching its code: what runs where, what IT needs, and how it stays safe.',
      },
      label: 'Docs',
      h1: 'How X3Companion works.',
      lead: 'The technical overview for IT teams and Sage administrators: what runs where, what it needs, how it is deployed, and why it cannot hurt Sage.',
      toc: 'On this page',

      s: {
        overview: 'Overview',
        arch: 'Architecture',
        req: 'Requirements',
        deploy: 'Deployment',
        defs: 'Table definitions',
        security: 'Security',
        ai: 'AI assistant',
        upgrades: 'Upgrades & compatibility',
        faq: 'FAQ',
      },

      overview: [
        'X3Companion adds screens, features, per-user rules and an AI assistant to Sage X3 <b>without modifying Sage X3</b>: nothing is added to the folder’s dictionary, no 4GL is written, no patch is installed.',
        'It works in two places. A server application next to Sage reads the Sage X3 database and holds everything you configure. In each user’s browser, X3Companion for Chrome adds the new screens and features to the Sage X3 web client, on your Sage address only. The two talk over your local network.',
      ],

      archLead: 'Four components, three of them yours already. Only X3Companion Server and X3Companion for Chrome are added.',
      flow: [
        ['Untouched', 'Sage X3 database', 'SQL Server, your Sage folder. Read through a dedicated read-only login.'],
        ['Your network', 'X3Companion Server', 'A Windows application. Reads Sage through table definitions, holds settings and rules, runs the assistant.'],
        ['Same machine', 'REST API', 'Serves the data and the settings. Authenticated by approved device or by token.'],
        ['Users’ PCs', 'X3Companion for Chrome', 'Adds the new screens and features to the Sage X3 web client.'],
      ] as Triple[],
      archHead: ['Component', 'Runs on', 'Role'],
      archRows: [
        ['X3Companion Server', 'A Windows PC or server on your network', 'Connects to the Sage X3 database, reads it through table definitions, applies your settings, serves the REST API and runs the optional AI assistant. Written in Rust.'],
        ['REST API', 'The same machine, one TCP port (47821 by default)', 'Every screen and feature gets its data here. Documented, versioned (<code>/v1</code>), and usable by other clients — a portal, a mobile app, a reporting tool.'],
        ['X3Companion for Chrome', 'Google Chrome on each user’s PC', 'Runs only on your Sage X3 address. Adds the new screens, sections, menu entries and the assistant to the Sage pages, styled like Sage.'],
        ['Admin app', 'The server machine', 'Where an administrator connects the database, approves PCs, and chooses which features, columns and layouts users get.'],
      ],

      reqLead: 'Nothing is installed in Sage X3. This is everything X3Companion needs around it.',
      reqHead: ['What', 'Needed'],
      reqRows: [
        ['Sage X3', 'Version 12 on Microsoft SQL Server (Oracle not supported yet)'],
        ['Server machine', 'Windows 10, 11 or Windows Server, with Microsoft Edge WebView2 (built into Windows 10 and 11)'],
        ['Database access', 'A SQL Server login with <code>SELECT</code> on the Sage folder’s schema — nothing else'],
        ['Network', 'One TCP port on the server, opened in Windows Firewall for the users’ PCs only'],
        ['Users’ PCs', 'Google Chrome'],
        ['Internet', 'None — except <code>api.anthropic.com</code> if you turn on the AI assistant (an HTTP proxy is supported)'],
        ['Sage licences', 'No Sage development licence, no extra Sage user'],
      ],

      deployLead: 'S7 deploys X3Companion with your IT team. A typical deployment follows six steps.',
      deploySteps: [
        ['Install', 'X3Companion Server on a Windows machine that can reach Sage’s SQL Server.'],
        ['Connect', 'with a read-only SQL login, created by a script we provide. The connection is tested before it is saved.'],
        ['Check', 'the table definitions against your Sage folder and against figures your team already knows.'],
        ['Link', 'X3Companion for Chrome to your Sage X3 address and to your server, and install it on the users’ PCs.'],
        ['Approve', 'each PC from the admin app: the PC shows a pairing code, the administrator checks it and approves.'],
        ['Choose', 'the screens, features, columns and layouts each team gets. Changes reach users within a minute.'],
      ] as Pair[],

      defs: [
        'X3Companion never hard-codes Sage tables. It reads them through <b>table definitions</b>: small JSON files that describe a table, its columns and how they relate (customers, quotes, orders, deliveries, invoices, sales reps…).',
        'Built-in definitions come from Sage X3 V12, and each one is marked as verified once checked against a real database. When a company’s Sage differs — a custom column, a renamed field — a copy of the definition is adjusted for that company only, without touching any code.',
        'The Sage folder (<code>PROD</code>, <code>SEED</code>…) is a setting. Only tables and columns that appear in a validated definition can ever reach a query.',
      ],

      securityLead: 'X3Companion sits next to the system your company runs on. These rules are enforced in the code and covered by tests.',
      securityGroups: [
        [
          'Database',
          [
            '<b>Read-only by design</b> — only <code>SELECT</code> statements are built, with <code>ApplicationIntent=ReadOnly</code>, on a login that can only read',
            '<b>No SQL from text</b> — table and column names come only from validated definitions; every value is a bound parameter',
            '<b>Never blocks Sage</b> — reads use <code>NOLOCK</code> by default; every connection and query has a timeout',
          ],
        ],
        [
          'Access',
          [
            '<b>Local by default</b> — the API listens on <code>127.0.0.1</code> until an administrator opens it to the network',
            '<b>Every PC approved</b> — each PC creates its own non-exportable key, shows a pairing code and waits for approval; access can be revoked at any time',
            '<b>Short-lived sessions</b> — single-use challenges and 15-minute device tokens, checked against the PC’s status on every request',
            '<b>Copies do not work</b> — a copied installation registers as a new, unapproved PC',
          ],
        ],
        [
          'Secrets',
          [
            '<b>Windows Credential Manager</b> — the database password, the API token and the AI key never touch a config file',
            '<b>Nothing on users’ PCs</b> — users never see the database password or the API token',
            '<b>No S7 cloud</b> — nothing is sent to S7; there is no telemetry',
          ],
        ],
      ] as Feature[],

      ai: [
        'The assistant is optional and off until an administrator turns it on with an Anthropic API key. It appears as a button on every Sage page.',
        '<b>The AI never writes SQL.</b> It asks for data through a structured request — which table, which filters, which totals — that the server checks against the table definitions and builds itself, with the same read-only safeguards as every other feature.',
        '<b>Numbers come from the database, not from the model.</b> Tables and charts in an answer are built from the data the server returned; the model never re-types the figures.',
        '<b>What leaves your network:</b> the question, the current screen’s context, and the data needed to answer it, sent from the server to the AI provider (currently Anthropic) under your company’s own account. Conversations are stored on your server.',
        '<b>Your vocabulary:</b> business instructions (“REP_0 is the sales rep”, “our currency is MAD”) are set once by the administrator and used for every question.',
      ],

      upgrades: [
        'Because nothing is written inside Sage X3, a Sage update has nothing of X3Companion’s to break or to port. After an update, the table definitions are re-checked; if Sage changed a table, the definition is updated — no program is rewritten.',
        'Today X3Companion supports <b>Sage X3 V12 on SQL Server</b>. The database layer is built behind an interface so Oracle can be added; other X3 versions are a matter of table definitions.',
        'Uninstalling X3Companion removes it completely and leaves Sage exactly as it was.',
      ],

      faq: [
        ['Does X3Companion modify Sage X3?', 'No. No dictionary change, no 4GL, no patch, no new Sage screen. It reads the database and adds its features in the browser.'],
        ['Can it change data in Sage?', 'Not today: every feature reads only, through a login that has no right to write.'],
        ['Do we need a Sage developer?', 'No. Features are built with a standard web stack. You need someone who knows your Sage data — which S7 provides during deployment.'],
        ['What happens when we update Sage?', 'Nothing breaks inside Sage, because nothing of ours is in it. The table definitions are re-checked and adjusted if a table changed.'],
        ['Is any data sent to S7?', 'No. X3Companion runs on your network. Only the optional AI assistant sends data outside, to the AI provider, under your own account.'],
        ['Does it work in other browsers?', 'Users need Google Chrome for the screens and features added to Sage. Sage X3 itself keeps working in any browser.'],
        ['Can other tools use the data?', 'Yes. The REST API is general: a portal, a mobile app or a reporting tool can read the same Sage data the same safe way.'],
      ] as Pair[],
    },

    /* ---------------------------------------------------------- privacy -- */
    privacy: {
      meta: {
        title: 'Privacy policy — X3Companion | S7',
        description:
          'How X3Companion and X3Companion for Chrome handle data: what they read, what is stored, where data is sent, and what is never done.',
        ogTitle: 'X3Companion privacy policy',
        ogDescription: 'What X3Companion reads, stores and sends — and what it never does.',
      },
      label: 'Privacy',
      h1: 'Privacy policy.',
      updated: 'X3Companion and X3Companion for Chrome · Last updated 16 October 2026',
      extNote: 'Submitting or reviewing the Chrome extension? Its own policy lists every permission and data type.',
      extLink: 'Chrome extension privacy policy',
      toc: 'Sections',
      sections: [
        {
          id: 'short',
          title: 'In short',
          paras: [
            'X3Companion works only inside your organization’s Sage X3 web client and talks only to your organization’s own X3Companion Server on its local network. <b>S7 receives no data at all.</b> There is no analytics, no tracking and no advertising.',
          ],
          list: [],
        },
        {
          id: 'controller',
          title: 'Who is responsible for the data',
          paras: [
            'X3Companion is deployed by organizations that run Sage X3 and X3Companion Server on their own network. The organization operates that server, decides who may use X3Companion, and is responsible for the business data processed there. S7 provides the software and never has access to that server or its data.',
          ],
          list: [],
        },
        {
          id: 'reads',
          title: 'What X3Companion reads',
          paras: ['X3Companion for Chrome, in each user’s browser, reads:'],
          list: [
            '<b>The open Sage X3 screen, on your organization’s Sage address only</b> — which customer or document is displayed — and Sage’s navigation menu, to show the matching information, add its screens to Sage’s menu and give context to the assistant.',
            '<b>Business data returned by your organization’s server</b> — customers, sales reps, quotes, orders, deliveries, invoices, their amounts and creation times, and the names of the Sage users who created or last changed each document — to display X3Companion’s screens and the assistant’s answers.',
            '<b>Questions typed in the assistant</b>, to answer them.',
          ],
        },
        {
          id: 'not-read',
          title: 'What it does not read',
          paras: [
            'X3Companion for Chrome does not run on, read or record any other website, and does not collect browsing history. It reads no passwords. X3Companion Server reads the Sage X3 database through a read-only login, and only the tables and columns described in its table definitions.',
          ],
          list: [],
        },
        {
          id: 'stored',
          title: 'What is stored, and where',
          paras: [],
          list: [
            '<b>On each user’s PC</b>, in the browser’s storage for X3Companion only: the on/off switch, the PC’s registration with your server (a device id, an approval code, a device key and a session token used to authenticate the PC, and the user name your administrator assigned), and display preferences such as page size, filters and the open assistant conversation. Removing X3Companion for Chrome deletes them.',
            '<b>On your organization’s server</b>: X3Companion’s settings, the list of approved PCs, saved assistant conversations, and secrets (database password, API token, AI key) in Windows Credential Manager.',
          ],
        },
        {
          id: 'sent',
          title: 'Where data is sent',
          paras: [
            'Only to your organization’s X3Companion Server, at the address configured for your organization, on its local network. Nothing is sent to S7 or to any other service.',
            '<b>AI assistant.</b> If your organization turns the assistant on, its server sends your question, the current screen’s context and the data needed to answer it to the AI provider your organization configured (currently Anthropic), under your organization’s own account and terms. The browser never contacts the AI provider directly.',
          ],
          list: [],
        },
        {
          id: 'never',
          title: 'What is never done',
          paras: [],
          list: [
            'No sale of data, no advertising, no profiling, no use for creditworthiness or lending.',
            'No analytics or tracking scripts, and no code loaded from elsewhere.',
            'No change to data in Sage X3: X3Companion only reads.',
          ],
        },
        {
          id: 'limited-use',
          title: 'Chrome Web Store — Limited Use',
          paras: [
            'The use of information received by X3Companion for Chrome adheres to the Chrome Web Store User Data Policy, including the Limited Use requirements.',
          ],
          list: [],
        },
        {
          id: 'choices',
          title: 'Your choices',
          paras: [
            'You can switch X3Companion off from its toolbar button at any time, or remove it from Chrome. Your administrator can revoke your PC. For access to, or deletion of, data held on your organization’s server — including saved assistant conversations — contact your organization’s administrator.',
          ],
          list: [],
        },
        {
          id: 'contact',
          title: 'Changes and contact',
          paras: [
            'If this policy changes, the new version is published on this page with a new date, and users are informed in X3Companion when data handling changes. Questions: <a href="mailto:contact@s7.ma">contact@s7.ma</a>.',
          ],
          list: [],
        },
      ] as DocSection[],
    },
    extPrivacy: {
      meta: {
        title: 'X3Companion Chrome extension — Privacy policy | S7',
        description:
          'Privacy policy of the X3Companion Chrome extension: its single purpose, the permissions it uses, the data it handles, where that data goes, and the Chrome Web Store Limited Use commitment.',
        ogTitle: 'X3Companion Chrome extension — Privacy policy',
        ogDescription: 'What the X3Companion Chrome extension reads, stores and sends — and what it never does.',
      },
      label: 'Privacy · Chrome extension',
      h1: 'X3Companion for Chrome — privacy policy.',
      updated: 'Chrome extension “X3Companion” · Publisher: S7 (Service7), Morocco · Last updated 16 October 2026',
      toc: 'Sections',
      back: 'Privacy policy for the whole of X3Companion',
      before: [
        {
          id: 'short',
          title: 'In short',
          paras: [
            'The X3Companion Chrome extension works only on your organization’s Sage X3 web address, and talks only to your organization’s own X3Companion Server on its local network. <b>The publisher, S7, receives no data from the extension — none.</b> There is no analytics, no tracking, no advertising, and no code loaded from outside the extension package.',
          ],
          list: [],
        },
        {
          id: 'purpose',
          title: 'Single purpose',
          paras: [
            'The extension adds read-only sales views — customer documents, quote and order recaps, the quote-to-invoice trail, quote analytics — and a data assistant to an organization’s own Sage X3 web client. All of its data comes from, and goes only to, that organization’s X3Companion Server.',
          ],
          list: [],
        },
        {
          id: 'controller',
          title: 'Who is responsible for the data',
          paras: [
            'The extension is installed by organizations that run Sage X3 and X3Companion Server on their own network. Each organization operates its server, decides which users and PCs may use the extension, and is responsible for the business data processed there. S7 publishes the extension and never has access to an organization’s server or data.',
          ],
          list: [],
        },
      ] as DocSection[],

      permsTitle: 'Permissions and why they are needed',
      permsLead: 'The extension asks Chrome for these permissions and uses them only as described.',
      permsHead: ['Permission', 'What it is used for'],
      permsRows: [
        ['<code>storage</code>', 'Keeps, on this PC only, the on/off switch, this PC’s registration with your organization’s server, and display preferences.'],
        ['<code>scripting</code>', 'While the extension is switched on, registers one script packaged in the extension on your organization’s Sage X3 address only, so it knows which customer or document Sage has open. It is unregistered when the extension is switched off.'],
        ['Your Sage X3 address', 'The only website the extension runs on: it adds its views (Documents section, Récap devis, Analyse devis, Récap commande, the assistant) to these pages.'],
        ['Your X3Companion Server address', 'The only place the extension sends requests to, to fetch the data it displays. It is your organization’s own server, on its local network.'],
      ],

      dataTitle: 'Data the extension handles',
      dataLead: 'Everything below comes from your organization’s own systems and is displayed to the user inside Sage X3.',
      dataHead: ['Type of data', 'What exactly', 'Why'],
      dataRows: [
        ['Personally identifiable information', 'Sage customer names and codes, sales reps’ names, names of the Sage users who created or changed documents, and the user name the administrator assigns to the PC', 'To show customers, reps and who created each document'],
        ['Financial information', 'Quote, order, delivery and invoice amounts read from Sage', 'To show recaps, totals and analytics'],
        ['Authentication information', 'A device key and a short-lived session token, so your organization’s server can recognise this PC. No passwords are read or stored', 'To make sure only approved PCs receive data'],
        ['Website content', 'On your Sage X3 address only: the customer or document number on the open screen, and Sage’s own menu', 'To show the matching data and add the extension’s screens to Sage’s menu'],
        ['Assistant questions', 'What the user types in the assistant', 'To answer it'],
      ],
      dataNot:
        'The extension does <b>not</b> collect health information, personal communications, location, web browsing history or user activity, and does not run on, read or record any website other than your organization’s Sage X3 address.',

      after: [
        {
          id: 'stored',
          title: 'What is stored on your PC',
          paras: [
            'In Chrome’s storage for this extension only: the on/off switch; this PC’s registration with your organization’s server (a device id, an approval code, a device key and a session token used to authenticate the PC, and the user name your administrator assigned); and display preferences such as page size, filters and the open assistant conversation. <b>Removing the extension deletes all of it.</b>',
          ],
          list: [],
        },
        {
          id: 'sent',
          title: 'Where data is sent',
          paras: [
            'Only to your organization’s X3Companion Server, at the address configured for your organization, on its local network. The extension sends nothing to S7 or to any other service.',
            '<b>Assistant.</b> If your organization turns the assistant on, its <b>server</b> sends the question, the current screen’s context and the data needed to answer it to the AI provider your organization configured (currently Anthropic), under your organization’s own account and terms. The extension itself never contacts the AI provider.',
          ],
          list: [],
        },
        {
          id: 'never',
          title: 'What is never done',
          paras: [],
          list: [
            'No sale or transfer of user data to third parties, outside the uses described here.',
            'No use or transfer of user data for purposes unrelated to the extension’s single purpose.',
            'No use or transfer of user data to determine creditworthiness or for lending.',
            'No advertising, no profiling, no analytics or tracking scripts.',
            'No remote code: all JavaScript is inside the extension package; the server returns data only.',
            'No change to data in Sage X3: the extension only reads.',
          ],
        },
        {
          id: 'limited-use',
          title: 'Chrome Web Store User Data Policy — Limited Use',
          paras: [
            'The use of information received by the X3Companion extension adheres to the <a href="https://developer.chrome.com/docs/webstore/program-policies/user-data-faq" rel="noopener">Chrome Web Store User Data Policy</a>, including the Limited Use requirements.',
          ],
          list: [],
        },
        {
          id: 'security',
          title: 'Security',
          paras: [
            'Each PC creates its own key, which cannot be exported, and works only after your organization’s administrator approves it. Session tokens last 15 minutes and are checked against the PC’s approval on every request. The administrator can revoke a PC at any time, and a copied browser profile is treated as a new, unapproved PC.',
          ],
          list: [],
        },
        {
          id: 'choices',
          title: 'Your choices and your data',
          paras: [
            'You can switch the extension off from its toolbar button at any time, or remove it from Chrome, which deletes everything it stored on your PC. Your administrator can revoke your PC. For access to, correction or deletion of data held on your organization’s server — including saved assistant conversations — contact your organization’s administrator, who controls that data.',
          ],
          list: [],
        },
        {
          id: 'contact',
          title: 'Changes and contact',
          paras: [
            'If this policy changes, the new version is published at this address with a new date, and users are informed in the extension when the way it handles data changes.',
            'Publisher: S7 (Service7), Morocco — <a href="mailto:contact@s7.ma">contact@s7.ma</a>.',
          ],
          list: [],
        },
      ] as DocSection[],
    },

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
