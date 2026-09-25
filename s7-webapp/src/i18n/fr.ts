import type { Dict } from './en';
import type { Pair, Feature, Service } from './types';

/**
 * Français.
 *
 * Typed as `Dict`, so this file cannot fall behind `en.ts`: a missing key is a
 * build error, not an English string leaking into a French page.
 *
 * The marketing copy is adapted rather than translated — "Premium software.
 * Built to last." becomes "Des logiciels d'exception. Conçus pour durer.",
 * which is what that line means to a French reader, not what it says
 * word-for-word. The ReqTone page is the opposite discipline: it is technical
 * writing, so established French developer vocabulary is used and the terms
 * the audience actually says in English (REST, streaming, endpoint, thread,
 * webview) are left alone.
 */
export const fr: Dict = {
  htmlLang: 'fr',
  dir: 'ltr',
  label: 'Français',
  short: 'FR',

  a11y: {
    skip: 'Aller au contenu',
    home: 'S7 — accueil',
    primaryNav: 'Principale',
    pageLoaded: (title: string) => `${title} — page chargée`,
    themeToDark: 'Passer au thème sombre',
    themeToLight: 'Passer au thème clair',
    language: 'Langue',
    switchToFrench: 'Passer en français',
    switchToEnglish: 'Switch to English',
  },

  nav: {
    services: 'Services',
    products: 'Produits',
    standard: 'Le Standard',
    about: 'À propos',
    contact: 'Contact',
  },

  clock: {
    stripLabel: 'Heure du Maroc (GMT) et horloges mondiales',
    badgeLabel: 'Heure du Maroc, GMT',
    badgeTitle: "Maroc · l'heure officielle est GMT (GMT+0)",
    sameAsMorocco: "même heure qu'au Maroc",
    ahead: "d'avance sur le Maroc",
    behind: 'de retard sur le Maroc',
    hour: 'h',
    minute: 'min',
    cities: {
      losAngeles: 'Los Angeles',
      chicago: 'Chicago',
      newYork: 'New York',
      saoPaulo: 'São Paulo',
      london: 'Londres',
      paris: 'Paris',
      dubai: 'Dubaï',
      tokyo: 'Tokyo',
    },
  },

  footer: {
    tagline: "Intégrations ERP et logiciels d'exception, conçus et développés pour durer.",
    products: 'Produits',
    studio: 'Studio',
    madeIn: 'Fabriqué au Maroc',
    by: 'Conçu et développé par S7',
  },

  home: {
    meta: {
      title: 'S7 — Intégrations Sage X3 et logiciels natifs, développés au Maroc',
      description:
        "S7 est un studio logiciel indépendant basé au Maroc. Nous développons en Java et en Rust les backends qui relient Sage X3 au reste de votre activité, et nous éditons nos propres outils de bureau natifs.",
      ogTitle: 'S7 — Intégrations Sage X3 et logiciels natifs',
      ogDescription:
        "Des backends Java et Rust qui relient Sage X3 à vos systèmes e-commerce, CRM et logistique, par un studio indépendant basé au Maroc.",
      jsonLdDescription:
        "Un studio logiciel indépendant qui développe des backends d'intégration Sage X3 et des logiciels de bureau natifs.",
    },
    eyebrow: 'Studio logiciel indépendant',
    h1: "Intégrations ERP.<br><span class=\"muted\">Des logiciels conçus pour durer.</span>",
    sub: "S7 développe les backends qui relient Sage X3 à vos systèmes e-commerce, CRM et logistique, et édite ses propres outils de bureau natifs. Conçu et développé au Maroc.",
    ctaContact: 'Démarrer un projet',
    ctaServices: 'Nos services',
    meta1: 'Basé au Maroc',
    meta2: 'Intégration Sage X3',
    meta3: 'Java · Rust',
    meta4: 'À distance, partout',

    servicesLabel: '01 — Services',
    servicesHeading: 'Des intégrations qui tiennent la charge.',
    servicesLead:
      "La plupart des problèmes d'ERP sont des problèmes d'intégration : des données qui arrivent en retard, en double ou jamais, et une base qui ralentit dès que le trafic monte. C'est notre métier.",
    services: [
      [
        'Intégration Sage X3',
        "Relier X3 à vos outils e-commerce, CRM, WMS et finance via ses web services. Commandes, stocks, clients et factures restent synchronisés, sans export manuel.",
        'Sage X3 · REST · SOAP',
      ],
      [
        "Backends d'intégration",
        "Des services placés entre X3 et le monde extérieur, avec files d'attente, reprises, validation et journaux, pour qu'aucune donnée invalide n'atteigne l'ERP.",
        'Java · Spring Boot · Rust',
      ],
      [
        'Performance et stabilisation',
        "Des intégrations qui surchargent le serveur ou bloquent la base de l'ERP lors des pics de trafic. Nous trouvons la cause, repensons le flux et allégeons la charge.",
        'Profilage · SQL Server · cache',
      ],
      [
        'Outils de bureau et internes',
        "Des applications de bureau natives et des outils internes pour les équipes qui ont besoin de plus rapide et plus léger qu'une énième application web.",
        'Rust · Tauri · React',
      ],
    ] as Service[],
    servicesCta: 'Parlons de votre intégration',

    productsLabel: '02 — Produits',
    productsHeading: 'Un studio. Un écosystème.',
    productsLead:
      "En parallèle du travail client, S7 conçoit et publie ses propres logiciels. Tous reposent sur les mêmes fondations : mêmes comportements, et cette impression qu'ils ont été façonnés par la même main.",
    badgeLive: 'Disponible',
    badgePre: 'Préversion',
    pilpodKind: 'Contrôle multimédia du navigateur',
    pilpodBody:
      "Tous les onglets qui lisent du son ou de la vidéo, dans un seul panneau : volume amplifié, sourdine en un clic, recherche d'onglets en direct. Gratuit, local, sans traçage.",
    pilpodLink: 'Voir pilpod.ma',
    reqtoneKind: 'Client API natif',
    reqtoneBody:
      'REST, GraphQL et Server-Sent Events dans une application de bureau native. Chaque collection, variable et identifiant dans un seul fichier SQLite local qui vous appartient.',
    productOverview: 'Présentation du produit',

    standardLabel: '03 — Le Standard S7',
    standardHeading: 'Sept engagements derrière chaque version.',
    standardLead:
      "Ce n'est pas un manifeste, mais un ensemble de contraintes d'ingénierie que nous nous imposons — parce que ce sont elles qui font qu'un logiciel reste agréable dix ans après sa sortie.",
    standardCap: '/ 07 — sept, tenus',
    principles: [
      ['Rapide par conception', "La performance est une décision de conception prise tôt, pas une optimisation ajoutée à la fin."],
      ['Maintenable sur la durée', "Écrit pour être compris dans des années, par celui ou celle qui ouvrira le fichier ensuite."],
      ['La simplicité plutôt que la complexité', "Le vrai travail consiste à décider ce que l'on ne construira pas. Nous le faisons avant d'écrire la moindre ligne."],
      ['Un minimum de dépendances', "Chaque dépendance est un passif dont nous héritons. Nous en prenons très peu, et nous les choisissons lentement."],
      ["Le local d'abord", "Vos données vivent sur votre machine. Le réseau est un plus, jamais une condition."],
      ["La vie privée d'abord", "Aucun traçage, aucun profilage, aucune collecte silencieuse. Ce qui se passe sur votre appareil y reste."],
      ["L'utilisateur est propriétaire", "Formats ouverts, export simple, aucun verrouillage. Vous devez pouvoir partir à tout moment."],
    ] as Pair[],

    aboutLabel: '04 — À propos',
    aboutLead: 'S7 est un studio logiciel indépendant,<br><em>conçu et développé au Maroc.</em>',
    aboutP1:
      "Nous développons des backends d'intégration pour les entreprises qui utilisent Sage X3, ainsi qu'un catalogue restreint de nos propres outils de bureau et pour développeurs, façonnés avec soin et maintenus sur le long terme.",
    aboutP2:
      "L'indépendance est un choix. Aucun investisseur pour dicter la feuille de route, aucune courbe de croissance pour décider de ce qui sort. Nous construisons ce que nous aurions envie d'utiliser, et nous continuons de le faire.",
    facts: [
      ['Studio', 'S7 — Service7'],
      ['Implanté au', 'Maroc'],
      ['Spécialité', 'Intégration ERP · outils de bureau'],
      ['Travail', 'À distance, partout'],
      ['Modèle', 'Indépendant'],
    ] as Pair[],

    contactLabel: '05 — Contact',
    contactHeading: 'Une intégration à construire ou à réparer ?',
    contactBody:
      "Dites-nous ce que vous connectez, ce qui casse et ce que le système doit faire. Un court e-mail suffit pour commencer.",
    contactNote: 'À distance, depuis le Maroc',
  },

  reqtone: {
    meta: {
      title: 'ReqTone — Client API natif et local-first | S7',
      description:
        "ReqTone est un client API de bureau natif pour REST, GraphQL et Server-Sent Events. Tauri v2, Rust et reqwest, et chaque collection, variable et identifiant dans un seul fichier SQLite local qui vous appartient. Un produit S7.",
      ogTitle: 'ReqTone — Client API natif et local-first',
      ogDescription:
        "REST, GraphQL et Server-Sent Events dans une application de bureau native. Un seul fichier SQLite local, aucun compte, rien dans le cloud de qui que ce soit.",
      jsonLdDescription:
        "Un client API de bureau natif et local-first pour REST, GraphQL et Server-Sent Events, construit avec Rust et Tauri v2.",
    },
    crumbProducts: 'Produits S7',
    crumbCurrent: '02 — ReqTone',
    kind: 'Client API natif — REST · GraphQL · SSE',
    lead: "Un client API de bureau pour ceux qui préfèrent ne pas faire tourner <b>un navigateur dans un navigateur</b>. L'enveloppe est native, le réseau est en Rust sur un vrai thread, et tout ce que vous construisez tient dans un fichier SQLite local qui vous appartient.",
    specs: [
      ['Enveloppe', 'Tauri v2'],
      ['Cœur', 'Rust + reqwest'],
      ['Stockage', 'SQLite'],
      ['Version', '0.1.0'],
    ] as Pair[],
    ctaVisit: 'Visiter reqtone.com',
    ctaAll: 'Tous les produits S7',
    statusPill: 'Préversion · v0.1.0 non publiée',

    productLabel: 'Le produit',
    productHeading: 'Pensé pour la boucle que vous faites vraiment.',
    productP1:
      "Envoyer, lire, ajuster, renvoyer — quelques centaines de fois par jour. Cette boucle, c'est tout le métier ; et la plupart des clients API la relèguent derrière un service de synchronisation, un écran de connexion et une invitation à rejoindre un espace de travail.",
    productP2:
      "<b>ReqTone est construit autour de cette boucle, et de rien d'autre.</b> Projets, dossiers et requêtes s'imbriquent aussi profondément que votre service. Chaque onglet porte la couleur de son projet, pour qu'un mur d'endpoints ouverts reste lisible d'un coup d'œil. Une URL, un en-tête ou un corps modifié affiche un marqueur avant que vous ne puissiez rien perdre, et la réouverture de l'application restaure chaque onglet, sous-onglet et brouillon exactement comme vous les aviez laissés.",
    productP3:
      "Il s'adresse aux développeurs et aux équipes qui travaillent toute la journée avec des API et veulent un outil rapide, discret et entièrement à eux.",
    loopBar: 'la boucle',
    loop: [
      ['Envoyer', 'un seul chemin, streaming par défaut'],
      ['Lire', 'statut, latence, taille, trames au fil de leur arrivée'],
      ['Ajuster', 'Monaco, validation en direct, variables à portée'],
      ['Recommencer', 'rejouer depuis un historique consultable'],
    ] as Pair[],

    engineeringLabel: 'Ingénierie',
    engineeringHeading: 'Six décisions, avec leurs compromis assumés.',
    engineeringLead:
      "Chacune a coûté quelque chose — c'est le seul genre de décision qui mérite d'être consigné.",
    decisions: [
      [
        'Une enveloppe native, pas un navigateur embarqué',
        `ReqTone s'affiche dans la webview que le système d'exploitation fournit
         déjà et gère son réseau en Rust avec <code>reqwest</code>, sur un vrai
         thread, plutôt que d'embarquer un moteur de navigateur et un
         environnement JavaScript avec l'application. Le coût : l'interface hérite
         de la webview que le système lui donne — c'est pourquoi les deux thèmes
         sont testés sur les trois plateformes plutôt que supposés corrects.`,
      ],
      [
        'Vos données sont un fichier qui vous appartient',
        `Collections, arborescences de projets, environnements, profils
         d'authentification et historique sont des lignes dans une base SQLite
         ordinaire, rangée dans votre dossier applicatif. Copiez-la, comparez-la,
         sauvegardez-la, gardez-la sur un volume chiffré, pointez l'application
         vers une autre, ou ouvrez-la dans n'importe quel explorateur SQLite.
         L'export en JSON ou au format Postman est là aussi : partir relève de la
         manipulation de fichiers, pas du ticket d'assistance.`,
      ],
      [
        "Rien n'attend le réseau au démarrage",
        `Pas de compte, pas de vérification de licence, pas de mise à jour
         automatique — et une règle permanente : rien sur le chemin de démarrage
         ne doit dépendre d'un appel réseau. L'application s'ouvre câble
         débranché. Elle ne contacte que l'endpoint de votre requête, l'URL de
         jeton OAuth que vous avez configurée, et votre propre serveur de
         synchronisation si vous en activez un.`,
      ],
      [
        'Le streaming est le chemin par défaut, pas un mode',
        `Toutes les requêtes empruntent le même code de streaming : une réponse
         s'affiche à mesure qu'elle s'écrit et la fenêtre reste utilisable tant
         que le flux est ouvert. Il n'y a pas de type de requête « event-stream »
         à activer, ni de seconde implémentation qui pourrait diverger — ce qui
         signifie aussi qu'un <code>POST</code> avec un corps JSON est diffusé en
         flux, exactement ce dont la plupart des endpoints de LLM ont besoin.`,
      ],
      [
        'Les portées se résolvent dans un seul sens',
        `Une variable se résout d'abord au niveau de la requête, puis du projet,
         puis du global. Un jeton de préproduction et un jeton de bac à sable
         peuvent tous deux s'appeler <code>{{token}}</code> sans jamais vous
         surprendre, et le gestionnaire indique quelles valeurs sont inutilisées
         et si une valeur atterrit dans les paramètres, le corps ou les en-têtes.`,
      ],
      [
        'Importer et exporter relève du fichier',
        `Les collections Postman v2.1, OpenAPI et Swagger 3.0 en JSON ou YAML, les
         commandes cURL brutes et les archives <code>.reqtone</code> s'importent
         toutes — avec leurs arborescences de dossiers, en-têtes, paramètres de
         requête, profils d'authentification et corps. L'export fonctionne de la
         même manière. La limite connue, ce sont les scripts : les scripts de
         pré-requête et de test écrits en JavaScript ne sont pas transférés.`,
      ],
    ] as Pair[],

    featuresLabel: 'Fonctionnalités',
    featuresHeading: 'Tout dans la fenêtre.',
    featuresLead:
      "Chaque sous-système ci-dessous existe pour retirer une étape à cette boucle, pas pour remplir un tableau comparatif.",
    features: [
      [
        'Espace de travail',
        [
          '<b>Projets → dossiers → requêtes</b>, imbriqués aussi profondément que vous le souhaitez',
          "<b>Couleurs par projet</b> — l'onglet actif porte la couleur de bordure de son projet parent",
          '<b>Marqueurs de modification</b> — une URL, un en-tête ou un corps modifié lève un indicateur',
          '<b>Restauration de session</b> — chaque onglet, sous-onglet et brouillon revient',
        ],
      ],
      [
        'Streaming',
        [
          "<b>Un seul chemin d'envoi</b> — aucun mode streaming à activer",
          '<b>Fragments en direct et chronomètre</b> — utilisable tant que le flux est ouvert',
          '<b>Trames inspectables</b> — événements, données et erreurs classés à leur arrivée',
          "<b>Copier n'importe quel fragment</b> directement depuis la liste des trames",
        ],
      ],
      [
        'Éditeurs',
        [
          '<b>GraphQL en deux volets</b> — la requête au-dessus, les variables en dessous, deux instances Monaco distinctes',
          "<b>Noms d'opération résolus</b> : une faute dans les variables ne passe jamais pour une erreur de requête",
          '<b>Validation JSON en direct</b> — marqueurs en ligne et pastille valide/invalide',
          '<b>Formulaires et multipart</b> — grilles clé-valeur, pièces jointes, délimiteurs gérés',
        ],
      ],
      [
        'Authentification',
        [
          "Profils <b>Bearer, clé d'API, Basic et OAuth2</b>",
          '<b>Définie une fois au niveau du projet</b>, héritée par tout ce qui se trouve en dessous',
          '<b>Surcharge par endpoint</b> sans perturber les autres',
          "<b>Les variables s'interpolent aussi dans les en-têtes d'authentification</b>",
        ],
      ],
      [
        'Variables',
        [
          '<b>Trois portées</b> — la requête prime sur le projet, le projet sur le global',
          '<b>Valeurs inutilisées signalées</b> dans le gestionnaire',
          '<b>Usage affiché par ligne</b> — paramètres, corps ou en-têtes',
          '<b>Espace N</b> transforme une sélection en variable à portée, <b>Espace V</b> en insère une',
        ],
      ],
      [
        'Stockage',
        [
          '<b>Un seul <code>db.sqlite</code></b> — collections, environnements, authentification, historique',
          "<b>Changement d'espace de travail en un clic</b> — bases distinctes, risques cloisonnés",
          '<b>Aucun appel réseau au démarrage</b> — pas de vérification de licence, pas de balise de mise à jour',
          '<b>Portable</b> — copiez le fichier, ou exportez en JSON propre ou au format Postman',
        ],
      ],
      [
        'Inspection',
        [
          '<b>Statut, latence et taille</b> sur une ligne de pastilles au-dessus du corps',
          '<b>Filtre approximatif des en-têtes</b> — trouvez <code>set-cookie</code> dans une réponse de 40 en-têtes',
          '<b>Cookies avec domaine, chemin et attributs</b> présentés clairement',
          '<b>Rendu binaire et aperçu PDF</b> dans le volet de réponse',
        ],
      ],
      [
        'Historique',
        [
          '<b>Chaque exécution enregistrée</b> dans un tiroir consultable, par une transaction en arrière-plan',
          '<b>Rejeu</b> — restaurez un ancien corps et ses en-têtes en un clic',
          '<b>Filtrage par méthode ou statut</b> pour isoler les échecs qui comptent',
          '<b>Recherche groupée</b> dans tout le tiroir',
        ],
      ],
      [
        'Mise en route',
        [
          '<b>Importe</b> Postman v2.1, OpenAPI / Swagger 3.0, cURL brut, <code>.reqtone</code>',
          "<b>Un agent peut écrire la collection</b> — un prompt prêt à l'emploi, sans configuration",
          '<b>Votre arborescence, pas un vidage à plat</b> — les contrôleurs deviennent des dossiers',
          '<b>Des corps d’exemple issus de vos propres DTO</b> plutôt que des chaînes vides',
        ],
      ],
    ] as Feature[],

    statusLabel: 'Où en est le projet',
    statusHeading: 'Transparent sur son état d’avancement.',
    statusBody:
      "ReqTone est en préversion 0.1.0 et n'a pas encore été publié. L'application se compile, mais la signature de code reste le seul obstacle entre elle et un lien de téléchargement — et S7 ne distribue pas de binaires non signés à ceux qui lui font confiance.",
    statusNote: 'État tel que publié sur reqtone.com',
    platforms: [
      ['Windows', 'Compile, non publié'],
      ['macOS', 'Chaîne de build non vérifiée'],
      ['Linux', 'Pas encore de pipeline'],
      ['Version', 'v0.1.0 — préversion'],
      ['Construit avec', 'Rust · Tauri v2 · SQLite'],
    ] as Pair[],
  },

  notFound: {
    meta: {
      title: 'Page introuvable — S7',
      description: "L'adresse que vous avez suivie ne mène nulle part sur ce site.",
    },
    code: 'Erreur 404',
    h1: 'Cette page<br><span class="muted">n’existe pas.</span>',
    body: "L'adresse que vous avez suivie ne mène nulle part sur ce site — elle a peut-être changé, ou n'a jamais existé.",
    ctaHome: 'Retour à S7',
    ctaProducts: 'Produits',
    mark: 'S7 — Service7 · Fabriqué au Maroc',
  },
};
