import type { Dict } from './en';
import type { Pair, Feature } from './types';
import { REQTONE_VERSION } from '../app/releases';

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
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    switchToFrench: 'Passer en français',
    switchToEnglish: 'Switch to English',
  },

  nav: {
    products: 'Produits',
    services: 'Services',
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
    tagline: "Des logiciels d'exception, conçus et développés pour durer.",
    products: 'Produits',
    studio: 'Studio',
    madeIn: 'Fabriqué au Maroc',
    by: 'Conçu et développé par S7',
  },

  home: {
    meta: {
      title: "S7 — Des logiciels d'exception, conçus et développés au Maroc",
      description:
        "S7 est un studio logiciel indépendant qui conçoit des applications de bureau, des outils pour développeurs et des logiciels de productivité haut de gamme. Priorité au local, respect de la vie privée, rapidité par conception.",
      ogTitle: "S7 — Des logiciels d'exception, conçus et développés au Maroc",
      ogDescription:
        "Un studio logiciel indépendant qui conçoit des applications de bureau, des outils pour développeurs et des logiciels de productivité haut de gamme.",
      jsonLdDescription:
        "Un studio logiciel indépendant qui conçoit des applications de bureau, des outils pour développeurs et des logiciels de productivité haut de gamme.",
    },
    eyebrow: 'Studio logiciel indépendant',
    h1: "Des logiciels d'exception.<br><span class=\"muted\">Conçus pour durer.</span>",
    sub: "S7 conçoit et développe des applications de bureau et des outils pour développeurs : rapides, fonctionnant d'abord en local, et dont les données n'appartiennent qu'à vous — depuis le Maroc, pour le monde entier.",
    ctaProducts: 'Découvrir nos produits',
    ctaStandard: 'Le Standard S7',
    meta1: 'Basé au Maroc',
    meta2: 'Priorité au local',
    meta3: 'Respect de la vie privée',
    meta4: 'Deux produits publiés',

    productsLabel: '01 — Produits',
    productsHeading: 'Un studio. Un écosystème.',
    productsLead:
      "Tous les produits S7 reposent sur les mêmes fondations : mêmes comportements, mêmes limites respectées, et cette impression qu'ils ont été façonnés par la même main.",
    badgeSoon: 'Bientôt disponible',
    badgePre: 'Préversion',
    badgeLive: 'Disponible',
    pilpodKind: 'Contrôle multimédia du navigateur',
    pilpodBody:
      "Tous les onglets multimédias de votre navigateur sur un seul panneau — volume, timeline, coupure du son et Picture-in-Picture, d'où que vienne le son.",
    reqtoneKind: 'Client API natif',
    reqtoneBody:
      'REST, GraphQL et Server-Sent Events dans une application de bureau native. Chaque collection, variable et identifiant dans un seul fichier SQLite local qui vous appartient.',
    productOverview: 'Présentation du produit',

    standardLabel: '02 — Le Standard S7',
    standardHeading: 'Sept engagements derrière chaque version.',
    standardLead:
      "Ce n'est pas un manifeste, mais un ensemble de contraintes d'ingénierie que nous nous imposons — parce que ce sont elles qui font qu'un logiciel reste agréable dix ans après sa sortie.",
    standardCap: '/ 07 — sept, tenus',
    principles: [
      ["Le local d'abord", "Vos données vivent sur votre machine. Le réseau est un plus, jamais une condition."],
      ["La vie privée d'abord", "Aucun traçage, aucun profilage, aucune collecte silencieuse. Ce qui se passe sur votre appareil y reste."],
      ['Rapide par conception', "La performance est une décision de conception prise tôt, pas une optimisation ajoutée à la fin."],
      ['Un minimum de dépendances', "Chaque dépendance est un passif dont nous héritons. Nous en prenons très peu, et nous les choisissons lentement."],
      ['Maintenable sur la durée', "Écrit pour être compris dans des années, par celui ou celle qui ouvrira le fichier ensuite."],
      ["L'utilisateur est propriétaire", "Formats ouverts, export simple, aucun verrouillage. Vous devez pouvoir partir à tout moment."],
      ['La simplicité plutôt que la complexité', "Le vrai travail consiste à décider ce que l'on ne construira pas. Nous le faisons avant d'écrire la moindre ligne."],
    ] as Pair[],

    aboutLabel: '03 — À propos',
    aboutLead: 'S7 est un studio logiciel indépendant,<br><em>conçu et développé au Maroc.</em>',
    aboutP1:
      "Nous créons des applications de bureau haut de gamme, des outils pour développeurs et des logiciels de productivité — un catalogue restreint, façonné avec soin et maintenu sur le long terme.",
    aboutP2:
      "L'indépendance est un choix. Aucun investisseur pour dicter la feuille de route, aucune courbe de croissance pour décider de ce qui sort. Nous construisons ce que nous aurions envie d'utiliser, et nous continuons de le faire.",
    facts: [
      ['Studio', 'S7 — Service7'],
      ['Implanté au', 'Maroc'],
      ['Spécialité', 'Applications de bureau et outils dev'],
      ['Modèle', 'Indépendant'],
    ] as Pair[],
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
      ['Version', REQTONE_VERSION],
    ] as Pair[],
    ctaDownload: 'Télécharger pour Windows',
    ctaVisit: 'Visiter reqtone.com',
    ctaAll: 'Tous les produits S7',
    statusPill: `Disponible · v${REQTONE_VERSION} pour Windows · gratuit`,

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
    statusHeading: 'Disponible sur Windows. Transparent sur le reste.',
    statusBody:
      `ReqTone v${REQTONE_VERSION} est publié pour Windows 10 et 11 — gratuit, sans compte. L'installeur n'est pas encore signé : Windows SmartScreen affiche donc un avertissement avant de le lancer. La page de téléchargement sur reqtone.com montre les deux clics pour passer cet avertissement et le SHA-256 pour vérifier le fichier avant. macOS et Linux ne sont pas encore publiés.`,
    statusNote: 'État tel que publié sur reqtone.com',
    platforms: [
      ['Windows', 'Publié — installeur .exe, pas encore signé'],
      ['macOS', 'Chaîne de build non vérifiée'],
      ['Linux', 'Pas encore de pipeline'],
      ['Version', `v${REQTONE_VERSION}`],
      ['Prix', 'Gratuit — sans compte'],
      ['Construit avec', 'Rust · Tauri v2 · SQLite'],
    ] as Pair[],
  },

  pilpod: {
    meta: {
      title: 'PilPod — Le centre de commande multimédia de votre navigateur | S7',
      description:
        "PilPod est une extension Chrome qui réunit tous vos onglets multimédias dans un seul panneau de contrôle : volume précis, navigation dans la timeline, coupure globale, Picture-in-Picture et recherche instantanée. Gratuit, entièrement local, sans compte. Un produit S7.",
      ogTitle: 'PilPod — Le centre de commande multimédia de votre navigateur',
      ogDescription:
        'Tous les onglets multimédias dans un seul panneau de contrôle. Gratuit, 100 % local, aucune télémétrie.',
      jsonLdDescription:
        "Une extension Chrome qui réunit tous les onglets multimédias dans un seul panneau de contrôle, avec réglage précis du volume, navigation dans la timeline, coupure globale et Picture-in-Picture.",
    },
    crumbProducts: 'Produits S7',
    crumbCurrent: '01 — PilPod',
    kind: 'Contrôle multimédia du navigateur — Extension Chrome (MV3)',
    lead: "Douze onglets font du bruit et <b>c'est l'un d'eux que vous cherchez</b>. PilPod réunit tous les onglets multimédias — YouTube, YouTube Music, tout ce qui joue de l'audio ou de la vidéo — dans un seul panneau de contrôle : volume, timeline, coupure du son, Picture-in-Picture et recherche instantanée.",
    specs: [
      ['Enveloppe', 'Extension Chrome (MV3)'],
      ['Cœur', "Service worker + registre d'onglets"],
      ['Audio', 'Web Audio API'],
      ['Version', '2.1.0'],
    ] as Pair[],
    ctaInstall: 'Ajouter à Chrome — gratuit',
    ctaSite: 'Visiter pilpod.ma',
    ctaAll: 'Tous les produits S7',
    statusPill: 'Disponible · v2.1.0 · gratuit, sans compte',

    productLabel: 'Le produit',
    productHeading: 'Chaque onglet qui fait du bruit, sur un seul panneau.',
    productP1:
      "Le multimédia ne reste pas où on l'a laissé. Une vidéo dans une fenêtre, une playlist dans une autre, une publicité qui démarre toute seule quelque part où vous ne la trouvez pas. La solution habituelle consiste à fouiller les onglets jusqu'à ce que le bruit s'arrête.",
    productP2:
      "<b>PilPod les réunit tous sur un seul panneau.</b> Chaque onglet en lecture obtient sa ligne, avec son volume et sa timeline. La recherche en direct vous amène directement à l'onglet ou au flux. Un clic coupe le son ou met tout en pause.",
    productP3:
      "Tout fonctionne à l'intérieur de votre navigateur. Aucun compte, aucun abonnement, et rien ne quitte la machine.",
    panelBar: 'dans le panneau',
    panel: [
      ['Trouver', 'recherche en direct dans tous les onglets en lecture'],
      ['Contrôler', 'volume, timeline et coupure du son, onglet par onglet'],
      ['Regarder', 'Picture-in-Picture sans quitter la page'],
      ['Mettre en veille', 'endormir les onglets inactifs, les réveiller au retour'],
    ] as Pair[],

    engineeringLabel: 'Ingénierie',
    engineeringHeading: 'Pensé pour les utilisateurs exigeants. Conçu pour durer.',
    engineeringLead:
      "Un contrôleur multimédia est facile à simuler avec des raccourcis clavier. Le faire correctement suppose de dialoguer avec la page.",
    decisions: [
      [
        'Un registre en direct, pas une supposition',
        `Un service worker Manifest V3 tient à jour un registre de chaque onglet
         possédant un élément multimédia. Le panneau montre ce qui joue
         maintenant — pas ce qui jouait au moment où vous l'avez ouvert.`,
      ],
      [
        'Dialogue direct avec le lecteur natif',
        `PilPod pilote <code>HTMLMediaElement</code> et la Web Audio API
         directement : les contrôles sont ceux de la page elle-même, et non un
         raccourci envoyé au hasard. Les amplifications de volume jusqu'à 400 %
         empruntent le même chemin, ce qui explique qu'elles fonctionnent sur des
         sites qui ignorent le mixeur système.`,
      ],
      [
        'Veille et réveil des onglets',
        `Les onglets multimédias inactifs sont libérés via
         <code>chrome.tabs.discard</code> puis restaurés à la demande : un mur
         d'onglets ouverts cesse de payer pour une mémoire qu'il n'utilise pas.`,
      ],
      [
        'Une application compagnon, optionnelle et désactivée',
        `Une application compagnon Windows peut faire le pont avec l'audio
         système. Elle fonctionne en loopback uniquement, reste désactivée par
         défaut, et l'extension est complète sans elle — un ajout pour qui le
         souhaite, jamais une dépendance.`,
      ],
      [
        'Un seul hub, deux secondes',
        `Un clic coupe le son ou met tout en pause ; un seul champ cherche dans
         tous les onglets. Le panneau est fait pour être ouvert, utilisé et
         refermé avant que vous ne perdiez le fil de ce que vous faisiez.`,
      ],
    ] as Pair[],

    privacyLabel: 'Vie privée',
    privacyHeading: "Votre navigateur. Vos données. Rien qu'à vous.",
    privacyBody:
      "PilPod n'a aucun serveur où envoyer quoi que ce soit. Aucune télémétrie, aucune analyse d'audience, aucun script tiers, aucun compte à créer. Chaque réglage reste dans le stockage de votre navigateur.",
    privacyPoints: [
      ['Aucune télémétrie', "Rien n'est mesuré, donc rien ne peut être envoyé."],
      ['Aucun tiers', 'Aucune analyse, aucun contenu intégré, aucun script externe.'],
      ['Traitement local', "L'audio et l'état des onglets ne quittent jamais le navigateur."],
    ] as Pair[],

    statusLabel: 'Où en est le projet',
    statusHeading: 'Publié, et gratuit.',
    statusBody:
      "PilPod est sur le Chrome Web Store en v2.1.0 — gratuit, sans compte et sans abonnement. L'application compagnon Windows est un téléchargement séparé et facultatif.",
    statusNote: 'État tel que publié sur pilpod.ma',
    platforms: [
      ['Chrome', 'Publié — Chrome Web Store'],
      ['Compagnon Windows', 'Téléchargement optionnel'],
      ['Version', 'v2.1.0'],
      ['Prix', 'Gratuit — sans compte'],
      ['Construit avec', 'Manifest V3 · Web Audio API'],
    ] as Pair[],
  },

  services: {
    meta: {
      title: 'Services — Développement sur mesure, intégration Sage X3 et performance Rust | S7',
      description:
        "S7 développe des logiciels sur mesure pour les entreprises au Maroc et ailleurs : systèmes full-stack Java Spring Boot et React intégrés à Sage X3, backends Rust haute performance pour le traitement de gros volumes, et outils pour développeurs.",
      ogTitle: 'Services — S7',
      ogDescription:
        'Développement sur mesure, intégration Sage X3, backends Rust et outils pour développeurs, au Standard S7.',
      jsonLdDescription:
        "Développement de logiciels sur mesure, intégration Sage X3 avec Java Spring Boot et React, backends Rust haute performance et outils pour développeurs.",
    },
    label: 'Services',
    h1: 'Des logiciels taillés pour<br><span class="muted">l\'entreprise que vous dirigez.</span>',
    lead: "S7 développe des logiciels sur mesure pour les entreprises que leurs tableurs et leurs outils standards ne suffisent plus à servir — et les relie proprement aux systèmes dont elles dépendent déjà.",
    ctaStart: 'Démarrer un projet',
    ctaStandard: 'Le Standard S7',
    stat1: 'Développement sur mesure',
    stat2: 'Intégration Sage X3',
    stat3: 'Optimisation Rust',
    stat4: 'Outils pour développeurs',

    offerLabel: '01 — Ce que nous faisons',
    offerHeading: 'Quatre types de missions.',
    offerLead:
      'Des problèmes différents, un seul standard. Quoi que nous construisions, vous repartez propriétaire du code, du schéma et du déploiement.',
    offers: [
      [
        'Développement de logiciels sur mesure',
        "Applications de bureau, web et internes, développées selon votre cahier des charges et selon le Standard S7 : rapides par conception, compréhensibles des années plus tard, et entièrement à vous — code, données et tout le reste.",
      ],
      [
        'Intégration Sage X3',
        "Des systèmes full-stack Java (Spring Boot) et React qui lisent et écrivent dans Sage X3. Stocks, commandes, facturation et reporting, présentés dans une interface que vos équipes utiliseront vraiment — sans se battre avec l'ERP ni attendre le traitement de nuit.",
      ],
      [
        'Backends haute performance en Rust',
        "Quand le service JVM devient le goulot d'étranglement, le chemin critique passe en Rust : un binaire unique de moins de 3 Mo, une fraction du CPU, et une mémoire qui se compte en mégaoctets plutôt qu'en gigaoctets — sur les mêmes données Sage, aux mêmes volumes, avec les mêmes règles métier.",
      ],
      [
        'Outils et automatisation pour développeurs',
        "Outils internes, utilitaires en ligne de commande, extensions de navigateur et intégrations : le travail qui retire une heure récurrente à la semaine d'une équipe, chaque semaine. C'est de là que viennent PilPod et ReqTone.",
      ],
    ] as Pair[],

    processLabel: '02 — Comment se déroule le travail',
    processHeading: 'Quatre étapes, et aucune surprise à la démo.',
    processLead:
      'Toujours la même séquence, parce que les erreurs coûteuses se produisent toutes avant la première ligne de code.',
    process: [
      ['Comprendre', "Nous commençons par le processus, pas par le logiciel : ce qui est réellement lent, qui cela bloque, et à quoi ressemblerait « terminé » pour vous."],
      ['Prototyper', "Quelque chose de cliquable dès les premières semaines, sur vos vraies données, pour que la discussion sur le périmètre ait lieu tôt et à moindre coût."],
      ['Construire', "Des cycles courts, un logiciel qui fonctionne à la fin de chacun, et une démo dont vous avez déjà vu la forme."],
      ['Transmettre', "Code, schéma, déploiement et documentation. Vous pouvez continuer sans nous — c'est la mesure d'un travail terminé."],
    ] as Pair[],

    stackLabel: '03 — Technologies',
    stackHeading: 'Ce avec quoi nous construisons.',
    stackLead:
      "Choisies lentement, et conservées. Chacune tourne en production chez nous ; ce ne sont pas des expériences isolées.",
    stack: [
      ['Backend', 'Java · Spring Boot · Rust · PostgreSQL · SQLite'],
      ['Frontend', 'React · TypeScript · Vite'],
      ['Bureau', 'Tauri · Rust'],
      ['ERP', 'Sage X3 — intégration REST et base de données'],
    ] as Pair[],

    closeHeading: 'Dites-nous ce qui ralentit votre activité.',
    closeBody:
      "Quelques lignes suffisent pour commencer. Nous vous dirons honnêtement si nous sommes le bon studio pour ce projet — y compris quand ce n'est pas le cas.",
  },

  contact: {
    meta: {
      title: 'Contact — S7',
      description:
        "Parlez-nous de votre projet. Logiciels sur mesure, intégration Sage X3, optimisation Rust et outils pour développeurs, depuis le Maroc.",
      ogTitle: 'Contact — S7',
      ogDescription: 'Parlez-nous de votre projet. Nous répondons à chaque message.',
    },
    label: 'Contact',
    h1: 'Parlez-nous de votre projet.',
    lead: "Quelques lignes suffisent pour commencer. Nous lisons chaque message et nous répondons — y compris lorsque la réponse est que nous ne sommes pas le bon studio.",
    emailLabel: 'E-mail',
    email: 'contact@s7.ma',
    details: [
      ['Basé au', "Maroc — GMT, toute l'année"],
      ['Délai de réponse', 'Sous deux jours ouvrés'],
      ['Nous travaillons avec', 'Des équipes au Maroc, en Europe et au-delà'],
      ['Langues', 'Français · English · العربية'],
    ] as Pair[],

    formTitle: 'Envoyer un message',
    fName: 'Votre nom',
    fEmail: 'E-mail',
    fCompany: 'Société',
    fCompanyHint: 'facultatif',
    fTopic: "De quoi s'agit-il",
    fMessage: 'Message',
    fMessageHint: 'Ce que vous construisez, ce qui bloque, et toute échéance qui compte.',
    topics: [
      'Logiciel sur mesure',
      'Intégration Sage X3',
      'Performance / Rust',
      'Outils pour développeurs',
      'Autre sujet',
    ],
    submit: 'Envoyer le message',
    sending: 'Envoi…',
    successTitle: 'Message envoyé.',
    successBody: "Merci — nous l'avons bien reçu et nous répondrons sous deux jours ouvrés.",
    successAgain: 'Envoyer un autre message',
    errorTitle: "L'envoi a échoué.",
    errorBody:
      "Quelque chose s'est mal passé en chemin. Écrivez-nous directement à contact@s7.ma et nous reprendrons là.",
    vRequired: 'Ce champ est obligatoire.',
    vEmail: "Cela ne ressemble pas à une adresse e-mail.",
    vMessage: "Un peu plus de détail, s'il vous plaît — 20 caractères au minimum.",
    privacyNote:
      "Ce que vous envoyez est stocké dans notre propre base de données et sert uniquement à vous répondre. Pas de newsletter, aucun tiers, aucun traçage.",
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
