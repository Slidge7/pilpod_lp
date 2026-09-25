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
import type { Pair, Feature, Service } from './types';

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
    switchToFrench: 'Passer en français',
    switchToEnglish: 'Switch to English',
  },

  nav: {
    services: 'Services',
    products: 'Products',
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
    tagline: 'ERP integrations and premium software, designed and engineered for permanence.',
    products: 'Products',
    studio: 'Studio',
    madeIn: 'Made in Morocco',
    by: 'Designed &amp; engineered by S7',
  },

  home: {
    meta: {
      title: 'S7 — Sage X3 Integrations & Native Software, Engineered in Morocco',
      description:
        'S7 is an independent software studio from Morocco. We build Java and Rust backends that connect Sage X3 to the rest of your business, and ship our own native desktop tools.',
      ogTitle: 'S7 — Sage X3 Integrations & Native Software',
      ogDescription:
        'Java and Rust backends that connect Sage X3 to e-commerce, CRM and warehouse systems, from an independent studio in Morocco.',
      jsonLdDescription:
        'An independent software studio building Sage X3 integration backends and native desktop software.',
    },
    eyebrow: 'Independent Software Studio',
    h1: 'ERP integrations.<br><span class="muted">Software built to last.</span>',
    sub: 'S7 builds the backends that connect Sage X3 to your e-commerce, CRM and warehouse systems, and ships its own native desktop tools. Designed and engineered in Morocco.',
    ctaContact: 'Start a project',
    ctaServices: 'Our services',
    meta1: 'Est. Morocco',
    meta2: 'Sage X3 integration',
    meta3: 'Java · Rust',
    meta4: 'Remote, worldwide',

    servicesLabel: '01 — Services',
    servicesHeading: 'Integrations that hold under load.',
    servicesLead:
      'Most ERP problems are integration problems: data that arrives late, twice or not at all, and a database that slows down whenever traffic spikes. That is the work we do.',
    services: [
      [
        'Sage X3 integration',
        'Connect X3 to e-commerce, CRM, WMS and finance tools through its web services. Orders, stock, customers and invoices stay in sync without manual exports.',
        'Sage X3 · REST · SOAP',
      ],
      [
        'Integration backends',
        'Services that sit between X3 and the outside world, with queues, retries, validation and logs, so a bad payload never reaches the ERP.',
        'Java · Spring Boot · Rust',
      ],
      [
        'Performance &amp; stabilisation',
        'Integrations that overload the server or lock the ERP database when traffic spikes. We find the cause, redesign the flow and take the load off.',
        'Profiling · SQL Server · caching',
      ],
      [
        'Desktop &amp; internal tools',
        'Native desktop apps and internal tools for teams that need something faster and lighter than another web app.',
        'Rust · Tauri · React',
      ],
    ] as Service[],
    servicesCta: 'Discuss your integration',

    productsLabel: '02 — Products',
    productsHeading: 'One studio. One ecosystem.',
    productsLead:
      'Alongside client work, S7 builds and ships its own software. Every product is built on the same foundations, so they behave the same way and feel like they were made by the same hand.',
    badgeLive: 'Live',
    badgePre: 'Pre-release',
    pilpodKind: 'Browser media control',
    pilpodBody:
      'Every tab playing audio or video in one control panel: volume boost, one-click mute, live tab search. Free, local, no tracking.',
    pilpodLink: 'Visit pilpod.ma',
    reqtoneKind: 'Native API client',
    reqtoneBody:
      'REST, GraphQL and Server-Sent Events in a native desktop shell. Every collection, variable and credential in one local SQLite file you own.',
    productOverview: 'Product overview',

    standardLabel: '03 — The S7 Standard',
    standardHeading: 'Seven commitments behind every release.',
    standardLead:
      'Not a manifesto. A set of engineering constraints we hold ourselves to, because they are what make software still feel good ten years after it shipped.',
    standardCap: '/ 07 — seven, held to',
    principles: [
      ['Fast by Design', 'Performance is a design decision made early, not an optimisation pass added late.'],
      ['Long-Term Maintainability', 'Written to be understood years from now, by whoever opens the file next.'],
      ['Simplicity over Complexity', 'The hard work is deciding what not to build. We do that work before writing code.'],
      ['Minimal Dependencies', 'Every dependency is a liability we inherit. We take on very few, and we choose them slowly.'],
      ['Local First', 'Your data lives on your machine. The network is an enhancement, never a requirement.'],
      ['Privacy First', 'No tracking, no profiling, no quiet collection. What happens on your device stays there.'],
      ['User Ownership', 'Open formats, easy export, no lock-in. You should be able to leave at any moment.'],
    ] as Pair[],

    aboutLabel: '04 — About',
    aboutLead: 'S7 is an independent software studio,<br><em>designed and engineered in Morocco.</em>',
    aboutP1:
      'We build integration backends for companies running Sage X3, and a small catalogue of our own desktop and developer tools, made carefully and maintained for the long term.',
    aboutP2:
      'Independence is the point. No investors setting the roadmap, no growth curve dictating what ships. We build what we would want to use, and we keep building it.',
    facts: [
      ['Studio', 'S7 — Service7'],
      ['Based in', 'Morocco'],
      ['Focus', 'ERP integration · desktop tools'],
      ['Works', 'Remote, worldwide'],
      ['Model', 'Independent'],
    ] as Pair[],

    contactLabel: '05 — Contact',
    contactHeading: 'Have an integration to build or fix?',
    contactBody:
      'Tell us what you are connecting, what breaks, and what it needs to do. A short email is enough to start.',
    contactNote: 'Remote, from Morocco',
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
      ['Version', '0.1.0'],
    ] as Pair[],
    ctaVisit: 'Visit reqtone.com',
    ctaAll: 'All S7 products',
    statusPill: 'Pre-release · v0.1.0 not published',

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
    statusHeading: 'Honest about the stage it is at.',
    statusBody:
      'ReqTone is pre-release at v0.1.0 and has not been published. The application builds, but code signing is the blocker standing between it and a download link — and S7 does not ship unsigned binaries to people who trust it.',
    statusNote: 'Status as published on reqtone.com',
    platforms: [
      ['Windows', 'Builds, not published'],
      ['macOS', 'Build job unverified'],
      ['Linux', 'No pipeline yet'],
      ['Version', 'v0.1.0 — pre-release'],
      ['Built with', 'Rust · Tauri v2 · SQLite'],
    ] as Pair[],
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
