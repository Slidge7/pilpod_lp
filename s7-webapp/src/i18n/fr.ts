import type { Dict } from './en';
import type { Pair, Feature, Triple, DocSection } from './types';
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

  x3: {
    nav: {
      label: 'X3Companion',
      overview: 'Présentation',
      features: 'Fonctionnalités',
      docs: 'Documentation',
      privacy: 'Confidentialité',
      cta: 'Demander une démo',
    },

    common: {
      ctaDemo: 'Demander une démo',
      closeHeading: 'Voyez-le dans votre propre Sage X3.',
      closeBody:
        "Un premier échange sur votre Sage suffit pour savoir ce que X3Companion peut changer pour vos équipes — et ce que cela demande.",
      legal:
        "X3Companion est un produit indépendant de S7. Il n'est ni conçu, ni parrainé, ni approuvé par Sage. Sage et Sage X3 sont des marques de The Sage Group plc ou de ses concédants.",
    },

    home: {
      meta: {
        title: 'X3Companion — Modifiez tout dans Sage X3, sans toucher à son code | S7',
        description:
          "X3Companion permet de modifier n'importe quel écran Sage X3, d'ajouter de nouveaux écrans et fonctionnalités, de contrôler ce que chaque utilisateur voit et fait, et de parler à Sage X3 en langage courant — sans toucher au code de Sage X3. Sur votre propre réseau.",
        ogTitle: 'X3Companion — Modifiez tout dans Sage X3, sans toucher à son code',
        ogDescription:
          'Modifiez les écrans, ajoutez des fonctionnalités, contrôlez chaque utilisateur et parlez à vos données — dans Sage X3, avec zéro ligne de code X3.',
        jsonLdDescription:
          "Une couche pour Sage X3 qui modifie les écrans existants, ajoute de nouveaux écrans et fonctionnalités, contrôle ce que chaque utilisateur voit et fait, et ajoute un assistant IA — dans le client web Sage X3, sans modifier le code de Sage X3.",
      },
      kind: 'Modifiez tout dans Sage X3 — sans toucher à son code',
      lead: "Chaque modification de Sage X3 veut généralement dire du L4G, un développeur X3 rare, un dossier de développement, un patch — et du travail en plus à la prochaine mise à jour. X3Companion est une couche au-dessus de Sage : <b>modifiez n'importe quel écran, ajoutez-en de nouveaux, décidez de ce que chaque utilisateur voit et fait, et parlez à vos données — le tout intégré directement dans Sage X3, sans une seule ligne de code X3.</b>",
      specs: [
        ['Code X3 modifié', 'Aucun'],
        ['Fonctionne dans', 'Sage X3, tel que vos équipes le connaissent'],
        ['Hébergement', 'Sur votre propre réseau'],
        ['Développé en', 'React · Java · Rust'],
      ] as Pair[],
      ctaFeatures: 'Découvrir les fonctionnalités',
      statusPill: 'Pilote · déployé par S7',

      pillarsLabel: 'Ce que ça change',
      pillarsHeading: 'Une couche. Trois choses que Sage ne savait pas faire.',
      pillars: [
        ["Modifiez n'importe quel écran. Ajoutez-en.", "Changez ce qu'affichent les écrans Sage X3, ajoutez des sections, des colonnes et des boutons, ou créez des écrans et des fonctionnalités entièrement nouveaux — dans Sage.", 'Écrans & fonctionnalités'],
        ['Contrôlez chaque utilisateur.', "Décidez de ce que chacun voit et de ce qu'il peut faire, et donnez à chacun une page d'accueil pensée pour son métier.", 'Contrôle des utilisateurs'],
        ['Parlez à Sage X3.', 'Posez une question en langage courant et obtenez la réponse à partir de vos propres données, en tableau ou en graphique.', "L'IA dans Sage X3"],
      ] as Triple[],

      whyLabel: 'Pourquoi',
      whyHeading: 'Sage X3 est un ERP solide. Le modifier est une autre histoire.',
      whyLead:
        "La façon habituelle de modifier X3, c'est de développer à l'intérieur. Ce choix décide du langage, de qui peut faire le travail, de la façon de tester, de livrer — et de ce qui se passe à chaque mise à jour de Sage.",
      whyCols: ['', 'Développer dans X3', 'Avec X3Companion'],
      whyRows: [
        ['Langage', 'L4G X3, maîtrisé par peu de développeurs', 'React, Java, Rust — ce que les développeurs modernes utilisent déjà'],
        ['Qui peut le faire', 'Un développeur X3 spécialisé, difficile à trouver et à remplacer', "N'importe quel développeur full-stack"],
        ['Où vit le travail', 'Dans Sage, dans le dictionnaire et les traitements du dossier', 'Hors de Sage, dans son propre dépôt, sous gestion de versions'],
        ['Tests', 'À la main, dans un dossier de test Sage', 'Tests automatisés en quelques secondes, sans toucher à Sage'],
        ['Livraison', 'Patchs, recette, fenêtre de maintenance', "Publié depuis X3Companion ; Sage n'est pas touché"],
        ['Mises à jour Sage', 'Du spécifique à revoir, reprendre et retester', 'Aucun code X3 à reprendre ; seules les définitions de tables sont revérifiées'],
        ['En cas de bug', "Il peut bloquer l'écran où l'on saisit les commandes", 'La nouvelle fonctionnalité affiche une erreur ; Sage continue de fonctionner'],
      ] as Triple[],

      shotLabel: 'Dans Sage',
      shotHeading: 'Développé hors de Sage. Affiché dedans.',
      shotLead:
        "Mêmes polices, mêmes sections, mêmes critères et le même vocabulaire que vos équipes lisent toute la journée. Les utilisateurs ne savent pas — et n'ont pas besoin de savoir — que rien de tout cela n'est du code X3.",
      shotCaption: "Récap devis — un nouvel écran ajouté à Sage X3 : tous les devis d'une période, avec leur statut de commande, de livraison et de facturation.",
      shotAlt: "L'écran Récap devis dans Sage X3 : critères de période, puis un tableau des devis avec statut commandé, livré et facturé.",
      shotNote: 'Données fictives',
      shotLink: 'Toutes les fonctionnalités',

      flowLabel: 'Fonctionnement',
      flowHeading: 'Sage reste tel quel. Tout le nouveau vient par-dessus.',
      flowLead:
        "X3Companion tourne sur une machine à côté de Sage, sur votre réseau. Il lit Sage, applique vos règles, et intègre les nouveaux écrans et fonctionnalités dans Sage X3 pour chaque utilisateur. Aucune modification dans X3, et aucun cloud S7 au milieu.",
      flow: [
        ['Intact', 'Sage X3', "Votre dossier, votre code, votre paramétrage — exactement tels qu'aujourd'hui."],
        ['Votre réseau', 'X3Companion', 'Lit Sage en toute sécurité et porte chaque nouvel écran, fonctionnalité et règle.'],
        ['Vos règles', 'Par utilisateur, par rôle', "Qui voit quoi, qui peut faire quoi, ce qu'affiche la page d'accueil de chacun."],
        ['Vos utilisateurs', 'Sage X3, augmenté', "Les nouveaux écrans et fonctionnalités s'affichent dans Sage, comme en faisant partie."],
      ] as Triple[],
      flowLink: 'Lire la présentation technique',

      trustLabel: 'Pourquoi la DSI dit oui',
      trust: [
        ['Zéro ligne de code X3', "Rien n'est ajouté au dictionnaire du dossier — aucun traitement, aucun écran, aucun patch. Retirez X3Companion et Sage est exactement comme avant."],
        ['Les mises à jour ne sont plus un projet', 'Tout ce qui est construit dépend des tables, pas du code X3. Une mise à jour Sage, c’est revérifier des définitions, pas reprendre des programmes.'],
        ['Vos données restent chez vous', "Il tourne sur votre réseau, lit via un compte en lecture seule, et n'envoie rien à S7 — jamais."],
      ] as Pair[],
    },

    features: {
      meta: {
        title: 'Fonctionnalités — X3Companion pour Sage X3 | S7',
        description:
          "Modifiez n'importe quel écran Sage X3, ajoutez de nouveaux écrans et fonctionnalités, contrôlez ce que chaque utilisateur voit et fait avec des pages d'accueil par rôle, et parlez à Sage X3 avec un assistant IA — sans toucher au code de Sage X3.",
        ogTitle: "Fonctionnalités X3Companion — écrans, contrôle des utilisateurs et IA dans Sage X3",
        ogDescription: "Ce que X3Companion ajoute à Sage X3, avec des exemples : nouveaux écrans et fonctionnalités, couche de contrôle des utilisateurs, et IA.",
      },
      label: 'Fonctionnalités',
      h1: "Tout ce qu'il ajoute à Sage X3.",
      lead: "Trois familles de fonctionnalités, toutes intégrées dans les écrans Sage X3 que vos équipes utilisent déjà — et aucune n'est écrite en X3.",

      screensLabel: '01 — Écrans & fonctionnalités',
      screensHeading: "Modifiez n'importe quel écran. Ajoutez des écrans et des fonctionnalités.",
      screensLead:
        "Tout ce que vos équipes exportent encore dans Excel, demandent à l'informatique ou font à la main entre trois écrans peut vivre dans Sage X3 lui-même — à côté des écrans qu'elles utilisent déjà.",
      screensGroups: [
        [
          'Modifier les écrans existants',
          [
            "<b>Ajouter une section</b> — tous les devis, commandes et factures d'un client sur sa fiche",
            "<b>Ajouter une colonne ou un indicateur</b> — l'encours du client sur l'écran de commande",
            '<b>Renommer les libellés</b> avec le vocabulaire de votre entreprise',
            '<b>Masquer les champs</b> que personne ne remplit chez vous',
            "<b>Mettre en avant l'essentiel</b> — factures échues en rouge, clients bloqués signalés",
          ],
        ],
        [
          'Ajouter de nouveaux écrans',
          [
            '<b>Des récaps</b> des devis et des commandes, avec leur statut de livraison et de facturation',
            '<b>Des tableaux de bord</b> par représentant, par site, par famille de produits',
            '<b>Le suivi du recouvrement</b> — qui doit quoi, depuis quand',
            "<b>Des vues de stock</b> par dépôt, avec le réservé et l'attendu",
            '<b>Des analyses</b> de transformation, de marges et de délais, comparées à la période précédente',
          ],
        ],
        [
          'Ajouter de nouvelles fonctionnalités',
          [
            "<b>L'historique complet</b> de n'importe quel document, du devis à la facture, en un clic",
            '<b>Les délais</b> mesurés entre chaque étape du cycle de vente',
            "<b>Des exports</b> Excel ou CSV depuis n'importe quel nouvel écran",
            '<b>Des boutons et des raccourcis</b> qui mènent directement là où il faut',
            "<b>Des alertes</b> quand quelque chose demande l'attention de quelqu'un",
          ],
        ],
      ] as Feature[],
      shotsHeading: 'Déjà en service dans Sage X3',
      shots: [
        ['Récap devis', "Un nouvel écran : tous les devis d'une période, avec représentant, commande, et statut livré et facturé — totaux et export CSV.", "L'écran Récap devis dans Sage X3 : critères de période, puis un tableau des devis avec statut commandé, livré et facturé."],
        ['Délais', 'Une nouvelle fonctionnalité sur chaque commande : le temps entre chaque étape, du devis à la facture.', "L'onglet Délais d'une commande : durées devis → commande, commande → livraison et livraison → facture, barre du cycle et chronologie."],
        ['Récap commande', 'Un nouvel écran : toutes les commandes, avec leur créateur, leur devis, leurs livraisons et leurs factures.', "L'écran Récap commande dans Sage X3 : un tableau des commandes avec statut de livraison et de facturation."],
      ] as Triple[],
      shotsNote: 'Écrans présentés avec des données fictives · mêmes polices, sections et critères que Sage',

      usersLabel: '02 — Contrôle des utilisateurs',
      usersHeading: 'Une couche de contrôle pour chaque utilisateur.',
      usersLead:
        "Dans Sage X3, les droits se règlent écran par écran, au fond du paramétrage. X3Companion ajoute une couche au-dessus : décidez, utilisateur par utilisateur ou rôle par rôle, de ce qui s'affiche et de ce qui est permis — depuis un seul endroit, appliqué en moins d'une minute.",
      usersGroups: [
        [
          'Ce que chacun voit',
          [
            '<b>Masquer les prix de revient et les marges</b> aux commerciaux',
            '<b>Ne montrer à chaque représentant que ses</b> clients, devis et chiffres',
            "<b>Masquer les colonnes et les sections</b> qui ne regardent pas quelqu'un",
            '<b>Simplifier les écrans</b> des utilisateurs occasionnels : seulement les champs utiles',
          ],
        ],
        [
          'Ce que chacun peut faire',
          [
            '<b>Autoriser ou bloquer</b> un écran, un bouton ou un export, par utilisateur',
            '<b>Un accès en lecture seule</b> pour un stagiaire, un auditeur ou un nouvel arrivant',
            '<b>Activer une fonctionnalité</b> pour une équipe avant les autres',
            "<b>Couper l'accès immédiatement</b> quand quelqu'un part",
          ],
        ],
      ] as Feature[],
      homesHeading: "Une page d'accueil pour chaque métier",
      homesLead: "Au lieu du même menu Sage pour tout le monde, chaque utilisateur ouvre Sage X3 sur ce qu'il traite vraiment.",
      homes: [
        ['Commercial', ['Mes devis à relancer', 'Mes commandes non livrées', 'Mon mois par rapport à l’objectif']],
        ['Comptable', ['Factures échues, par ancienneté', 'Livraisons non facturées', 'Règlements du jour']],
        ['Directeur commercial', ["Transformation de l'équipe ce trimestre", 'Plus gros devis en cours', 'Délais, représentant par représentant']],
        ['Logistique', ['Expéditions du jour', 'Commandes en attente de stock', 'Livraisons en retard']],
      ] as Feature[],

      aiLabel: "03 — L'IA dans Sage X3",
      aiHeading: 'Parlez à Sage X3.',
      aiLead:
        "Un assistant sur chaque écran Sage. Posez votre question en langage courant — en français, en anglais ou les deux — et obtenez la réponse à partir de vos propres données, en phrase, en tableau ou en graphique. Aucun rapport à demander, aucun export à refaire.",
      aiChatBar: 'Assistant · dans Sage X3',
      aiQ1: 'Quels devis de plus de 50 000 MAD du mois dernier ne sont pas encore devenus des commandes ?',
      aiA1: 'Quatre devis, 286 400 MAD au total. Le plus ancien date de 27 jours.',
      aiTableHead: ['Devis', 'Client', 'Représentant', 'Montant HT'],
      aiTableRows: [
        ['DE2618231', 'ATLAS NEGOCE', 'N. Berrada', '98 200'],
        ['DE2618254', 'RIF DISTRIBUTION', 'K. Tazi', '74 650'],
        ['DE2618270', 'OCEAN TRADING', 'S. Alami', '61 300'],
        ['DE2618288', 'SOUSS AGRI', 'K. Tazi', '52 250'],
      ],
      aiQ2: "Et compare le taux de transformation de Karim avec celui de l'équipe ce trimestre.",
      aiA2: "Karim a transformé 38 % de ses devis ce trimestre, contre 44 % pour l'équipe. Graphique ci-dessous.",
      aiChatNote: 'Exemple fictif',
      aiPoints: [
        ['Vos données, votre vocabulaire', 'Apprenez-lui comment parle votre entreprise — « REP_0 est le représentant », « notre devise est le MAD » — une fois, pour tous.'],
        ['Les chiffres viennent de Sage', "Chaque chiffre d'une réponse vient directement de votre base. L'IA choisit quoi chercher ; elle n'invente jamais le résultat."],
        ['Il lit, il ne touche à rien', "L'assistant ne peut que lire, avec les mêmes garde-fous que toutes les autres fonctionnalités, et vous décidez qui peut l'utiliser."],
      ] as Pair[],

      statusLabel: 'Où en est-il',
      statusHeading: 'Ce qui est en service, et ce qui est construit pour vous.',
      statusBody:
        "X3Companion est en pilote sur Sage X3 V12 avec SQL Server. Les nouveaux écrans et l'assistant fonctionnent aujourd'hui. La couche de contrôle des utilisateurs et les pages d'accueil sont mises en place pour chaque entreprise lors du déploiement — et si vous avez besoin d'un écran que Sage n'a pas, nous le construisons sur X3Companion.",
      platforms: [
        ['Sage X3', 'V12 · SQL Server'],
        ['Code X3 modifié', 'Aucun'],
        ['Nouveaux écrans & fonctionnalités', 'En service · pilote'],
        ['Assistant IA', 'En service · optionnel'],
        ["Contrôle des utilisateurs & pages d'accueil", 'Construits pour chaque entreprise'],
        ['Tarif', 'Sur demande'],
      ] as Pair[],
      ctaDocs: 'Documentation technique',
    },

    docs: {
      meta: {
        title: 'Documentation — Comment X3Companion fonctionne avec Sage X3 | S7',
        description:
          "Présentation technique de X3Companion pour Sage X3 : architecture, prérequis, déploiement, définitions de tables, sécurité, assistant IA, mises à jour et FAQ.",
        ogTitle: 'Documentation X3Companion — architecture, prérequis et sécurité',
        ogDescription: "Comment X3Companion ajoute des fonctionnalités à Sage X3 sans toucher à son code : ce qui tourne où, ce dont la DSI a besoin, et comment il reste sûr.",
      },
      label: 'Documentation',
      h1: 'Comment fonctionne X3Companion.',
      lead: "La présentation technique pour les équipes informatiques et les administrateurs Sage : ce qui tourne où, ce qu'il faut, comment il est déployé, et pourquoi il ne peut pas nuire à Sage.",
      toc: 'Sur cette page',

      s: {
        overview: 'Vue d’ensemble',
        arch: 'Architecture',
        req: 'Prérequis',
        deploy: 'Déploiement',
        defs: 'Définitions de tables',
        security: 'Sécurité',
        ai: 'Assistant IA',
        upgrades: 'Mises à jour & compatibilité',
        faq: 'FAQ',
      },

      overview: [
        "X3Companion ajoute des écrans, des fonctionnalités, des règles par utilisateur et un assistant IA à Sage X3 <b>sans modifier Sage X3</b> : rien n'est ajouté au dictionnaire du dossier, aucun L4G n'est écrit, aucun patch n'est installé.",
        "Il intervient à deux endroits. Une application serveur, à côté de Sage, lit la base Sage X3 et conserve tout ce que vous paramétrez. Dans le navigateur de chaque utilisateur, X3Companion pour Chrome ajoute les nouveaux écrans et fonctionnalités au client web Sage X3, sur votre adresse Sage uniquement. Les deux communiquent sur votre réseau local.",
      ],

      archLead: 'Quatre briques, dont trois existent déjà chez vous. Seuls X3Companion Server et X3Companion pour Chrome sont ajoutés.',
      flow: [
        ['Intact', 'Base Sage X3', 'SQL Server, votre dossier Sage. Lue via un compte dédié en lecture seule.'],
        ['Votre réseau', 'X3Companion Server', 'Une application Windows. Lit Sage via les définitions de tables, conserve réglages et règles, fait tourner l’assistant.'],
        ['Même machine', 'API REST', "Sert les données et les réglages. Authentifiée par poste approuvé ou par jeton."],
        ['Postes utilisateurs', 'X3Companion pour Chrome', 'Ajoute les nouveaux écrans et fonctionnalités au client web Sage X3.'],
      ] as Triple[],
      archHead: ['Brique', 'Tourne sur', 'Rôle'],
      archRows: [
        ['X3Companion Server', 'Un PC ou serveur Windows sur votre réseau', "Se connecte à la base Sage X3, la lit via les définitions de tables, applique vos réglages, expose l'API REST et fait tourner l'assistant IA optionnel. Écrit en Rust."],
        ['API REST', 'La même machine, un port TCP (47821 par défaut)', "Chaque écran et fonctionnalité y prend ses données. Documentée, versionnée (<code>/v1</code>), et utilisable par d'autres clients — un portail, une application mobile, un outil de reporting."],
        ['X3Companion pour Chrome', 'Google Chrome sur le poste de chaque utilisateur', "Ne s'exécute que sur votre adresse Sage X3. Ajoute aux pages Sage les nouveaux écrans, sections, entrées de menu et l'assistant, dans le style de Sage."],
        ["Application d'administration", 'La machine serveur', "C'est là qu'un administrateur connecte la base, approuve les postes, et choisit les fonctionnalités, colonnes et mises en page de chacun."],
      ],

      reqLead: "Rien n'est installé dans Sage X3. Voici tout ce dont X3Companion a besoin autour.",
      reqHead: ['Quoi', 'Requis'],
      reqRows: [
        ['Sage X3', 'Version 12 sur Microsoft SQL Server (Oracle pas encore pris en charge)'],
        ['Machine serveur', 'Windows 10, 11 ou Windows Server, avec Microsoft Edge WebView2 (inclus dans Windows 10 et 11)'],
        ['Accès à la base', 'Un compte SQL Server avec <code>SELECT</code> sur le schéma du dossier Sage — rien de plus'],
        ['Réseau', 'Un port TCP sur le serveur, ouvert dans le pare-feu Windows pour les postes des utilisateurs seulement'],
        ['Postes utilisateurs', 'Google Chrome'],
        ['Internet', "Aucun — sauf <code>api.anthropic.com</code> si vous activez l'assistant IA (proxy HTTP pris en charge)"],
        ['Licences Sage', 'Aucune licence de développement Sage, aucun utilisateur Sage supplémentaire'],
      ],

      deployLead: 'S7 déploie X3Companion avec votre équipe informatique. Un déploiement type suit six étapes.',
      deploySteps: [
        ['Installer', "X3Companion Server sur une machine Windows qui accède au SQL Server de Sage."],
        ['Connecter', 'avec un compte SQL en lecture seule, créé par un script fourni. La connexion est testée avant d’être enregistrée.'],
        ['Vérifier', 'les définitions de tables sur votre dossier Sage et sur des chiffres que vos équipes connaissent déjà.'],
        ['Relier', 'X3Companion pour Chrome à votre adresse Sage X3 et à votre serveur, et l’installer sur les postes des utilisateurs.'],
        ['Approuver', "chaque poste depuis l'application d'administration : le poste affiche un code d'appairage, l'administrateur le vérifie et approuve."],
        ['Choisir', 'les écrans, fonctionnalités, colonnes et mises en page de chaque équipe. Les changements arrivent chez les utilisateurs en moins d’une minute.'],
      ] as Pair[],

      defs: [
        "X3Companion ne code jamais les tables Sage en dur. Il les lit via des <b>définitions de tables</b> : de petits fichiers JSON qui décrivent une table, ses colonnes et leurs liens (clients, devis, commandes, livraisons, factures, représentants…).",
        "Les définitions intégrées viennent de Sage X3 V12, et chacune est marquée vérifiée une fois contrôlée sur une vraie base. Quand le Sage d'une entreprise diffère — une colonne spécifique, un champ renommé — une copie de la définition est ajustée pour cette entreprise seulement, sans toucher au code.",
        "Le dossier Sage (<code>PROD</code>, <code>SEED</code>…) est un réglage. Seules les tables et colonnes présentes dans une définition validée peuvent atteindre une requête.",
      ],

      securityLead: "X3Companion est installé à côté du système qui fait tourner votre entreprise. Ces règles sont appliquées dans le code et couvertes par des tests.",
      securityGroups: [
        [
          'Base de données',
          [
            "<b>Lecture seule par conception</b> — seules des requêtes <code>SELECT</code> sont construites, avec <code>ApplicationIntent=ReadOnly</code>, sur un compte qui ne peut que lire",
            "<b>Aucun SQL venu du texte</b> — noms de tables et de colonnes issus uniquement de définitions validées ; chaque valeur est un paramètre lié",
            "<b>Ne bloque jamais Sage</b> — lectures en <code>NOLOCK</code> par défaut ; chaque connexion et requête a un délai maximal",
          ],
        ],
        [
          'Accès',
          [
            "<b>Local par défaut</b> — l'API écoute sur <code>127.0.0.1</code> tant qu'un administrateur ne l'ouvre pas au réseau",
            "<b>Chaque poste approuvé</b> — chaque poste crée sa propre clé non exportable, affiche un code d'appairage et attend l'approbation ; l'accès est révocable à tout moment",
            '<b>Sessions courtes</b> — défis à usage unique et jetons de poste de 15 minutes, vérifiés contre le statut du poste à chaque requête',
            '<b>Les copies ne marchent pas</b> — une installation copiée s’enregistre comme un nouveau poste, non approuvé',
          ],
        ],
        [
          'Secrets',
          [
            "<b>Gestionnaire d'identification Windows</b> — le mot de passe de la base, le jeton de l'API et la clé IA ne touchent jamais un fichier de configuration",
            "<b>Rien sur les postes utilisateurs</b> — les utilisateurs ne voient jamais le mot de passe de la base ni le jeton de l'API",
            "<b>Aucun cloud S7</b> — rien n'est envoyé à S7 ; aucune télémétrie",
          ],
        ],
      ] as Feature[],

      ai: [
        "L'assistant est optionnel et désactivé tant qu'un administrateur ne l'active pas avec une clé d'API Anthropic. Il apparaît sous forme de bouton sur chaque page Sage.",
        "<b>L'IA n'écrit jamais de SQL.</b> Elle demande les données via une requête structurée — quelle table, quels filtres, quels totaux — que le serveur vérifie contre les définitions de tables et construit lui-même, avec les mêmes garde-fous en lecture seule que toutes les autres fonctionnalités.",
        "<b>Les chiffres viennent de la base, pas du modèle.</b> Les tableaux et graphiques d'une réponse sont construits à partir des données renvoyées par le serveur ; le modèle ne recopie jamais les chiffres.",
        "<b>Ce qui sort de votre réseau :</b> la question, le contexte de l'écran ouvert et les données nécessaires à la réponse, envoyés par le serveur au fournisseur d'IA (actuellement Anthropic), sous le compte de votre entreprise. Les conversations sont conservées sur votre serveur.",
        "<b>Votre vocabulaire :</b> les instructions métier (« REP_0 est le représentant », « notre devise est le MAD ») sont saisies une fois par l'administrateur et utilisées pour chaque question.",
      ],

      upgrades: [
        "Comme rien n'est écrit dans Sage X3, une mise à jour de Sage n'a rien de X3Companion à casser ou à reprendre. Après une mise à jour, les définitions de tables sont revérifiées ; si Sage a modifié une table, la définition est mise à jour — aucun programme n'est réécrit.",
        "Aujourd'hui, X3Companion prend en charge <b>Sage X3 V12 sur SQL Server</b>. La couche base de données est construite derrière une interface pour qu'Oracle puisse être ajouté ; les autres versions de X3 sont une affaire de définitions de tables.",
        'Désinstaller X3Companion le retire complètement et laisse Sage exactement tel qu’il était.',
      ],

      faq: [
        ['X3Companion modifie-t-il Sage X3 ?', "Non. Aucune modification du dictionnaire, aucun L4G, aucun patch, aucun nouvel écran Sage. Il lit la base et ajoute ses fonctionnalités dans le navigateur."],
        ['Peut-il modifier des données dans Sage ?', "Pas aujourd'hui : chaque fonctionnalité ne fait que lire, via un compte qui n'a aucun droit d'écriture."],
        ['Faut-il un développeur Sage ?', "Non. Les fonctionnalités sont développées avec un stack web standard. Il faut quelqu'un qui connaît vos données Sage — ce que S7 apporte lors du déploiement."],
        ['Que se passe-t-il quand on met Sage à jour ?', "Rien ne casse dans Sage, puisque rien de nous n'y est. Les définitions de tables sont revérifiées et ajustées si une table a changé."],
        ['Des données sont-elles envoyées à S7 ?', "Non. X3Companion tourne sur votre réseau. Seul l'assistant IA optionnel envoie des données à l'extérieur, au fournisseur d'IA, sous votre propre compte."],
        ['Fonctionne-t-il dans d’autres navigateurs ?', 'Les utilisateurs ont besoin de Google Chrome pour les écrans et fonctionnalités ajoutés à Sage. Sage X3 lui-même continue de fonctionner dans tout navigateur.'],
        ["D'autres outils peuvent-ils utiliser les données ?", "Oui. L'API REST est générale : un portail, une application mobile ou un outil de reporting peuvent lire les mêmes données Sage de la même façon sûre."],
      ] as Pair[],
    },

    privacy: {
      meta: {
        title: 'Politique de confidentialité — X3Companion | S7',
        description:
          "Comment X3Companion et X3Companion pour Chrome traitent les données : ce qu'ils lisent, ce qui est conservé, où les données sont envoyées, et ce qui n'est jamais fait.",
        ogTitle: 'Politique de confidentialité X3Companion',
        ogDescription: "Ce que X3Companion lit, conserve et envoie — et ce qu'il ne fait jamais.",
      },
      label: 'Confidentialité',
      h1: 'Politique de confidentialité.',
      updated: 'X3Companion et X3Companion pour Chrome · Dernière mise à jour : 16 octobre 2026',
      extNote: "Vous examinez l'extension Chrome ? Sa politique dédiée détaille chaque autorisation et type de données.",
      extLink: "Politique de confidentialité de l'extension Chrome",
      toc: 'Sections',
      sections: [
        {
          id: 'short',
          title: 'En bref',
          paras: [
            "X3Companion fonctionne uniquement dans le client web Sage X3 de votre organisation et ne communique qu'avec le serveur X3Companion Server de votre organisation, sur son réseau local. <b>S7 ne reçoit aucune donnée.</b> Aucune statistique d'usage, aucun suivi, aucune publicité.",
          ],
          list: [],
        },
        {
          id: 'controller',
          title: 'Responsable des données',
          paras: [
            "X3Companion est déployé par des organisations qui exploitent Sage X3 et X3Companion Server sur leur propre réseau. L'organisation exploite ce serveur, décide qui peut utiliser X3Companion et est responsable des données métier qui y sont traitées. S7 fournit le logiciel et n'a jamais accès à ce serveur ni à ses données.",
          ],
          list: [],
        },
        {
          id: 'reads',
          title: 'Ce que X3Companion lit',
          paras: ['X3Companion pour Chrome, dans le navigateur de chaque utilisateur, lit :'],
          list: [
            "<b>L'écran Sage X3 ouvert, uniquement sur l'adresse Sage de votre organisation</b> — le client ou le document affiché — et le menu de navigation de Sage, pour afficher les informations correspondantes, ajouter ses écrans au menu de Sage et donner le contexte à l'assistant.",
            "<b>Les données métier renvoyées par le serveur de votre organisation</b> — clients, représentants, devis, commandes, livraisons, factures, montants et dates de création, ainsi que le nom des utilisateurs Sage qui ont créé ou modifié chaque document — pour afficher les écrans de X3Companion et les réponses de l'assistant.",
            "<b>Les questions saisies dans l'assistant</b>, pour y répondre.",
          ],
        },
        {
          id: 'not-read',
          title: "Ce qu'il ne lit pas",
          paras: [
            "X3Companion pour Chrome ne s'exécute sur aucun autre site, ne lit ni n'enregistre aucun autre site, et ne collecte pas l'historique de navigation. Il ne lit aucun mot de passe. X3Companion Server lit la base Sage X3 via un compte en lecture seule, et uniquement les tables et colonnes décrites dans ses définitions de tables.",
          ],
          list: [],
        },
        {
          id: 'stored',
          title: 'Ce qui est conservé, et où',
          paras: [],
          list: [
            "<b>Sur le poste de chaque utilisateur</b>, dans le stockage du navigateur réservé à X3Companion : l'interrupteur Actif/Inactif, l'enregistrement du poste auprès de votre serveur (identifiant, code d'approbation, clé du poste et jeton de session servant à l'authentifier, nom d'utilisateur attribué par l'administrateur) et les préférences d'affichage (taille de page, filtres, conversation ouverte avec l'assistant). Supprimer X3Companion pour Chrome les efface.",
            "<b>Sur le serveur de votre organisation</b> : les réglages de X3Companion, la liste des postes approuvés, les conversations enregistrées de l'assistant, et les secrets (mot de passe de la base, jeton de l'API, clé IA) dans le Gestionnaire d'identification Windows.",
          ],
        },
        {
          id: 'sent',
          title: 'Où les données sont envoyées',
          paras: [
            "Uniquement au serveur X3Companion Server de votre organisation, à l'adresse configurée pour elle, sur son réseau local. Rien n'est envoyé à S7 ni à aucun autre service.",
            "<b>Assistant IA.</b> Si votre organisation active l'assistant, son serveur envoie votre question, le contexte de l'écran ouvert et les données nécessaires à la réponse au fournisseur d'IA qu'elle a configuré (actuellement Anthropic), sous le compte et les conditions de votre organisation. Le navigateur ne contacte jamais ce fournisseur directement.",
          ],
          list: [],
        },
        {
          id: 'never',
          title: "Ce qui n'est jamais fait",
          paras: [],
          list: [
            "Aucune vente de données, aucune publicité, aucun profilage, aucun usage pour l'évaluation de crédit.",
            "Aucun script de statistiques ou de suivi, aucun code chargé depuis l'extérieur.",
            'Aucune modification des données de Sage X3 : X3Companion ne fait que lire.',
          ],
        },
        {
          id: 'limited-use',
          title: 'Chrome Web Store — usage limité',
          paras: [
            "L'utilisation des informations reçues par X3Companion pour Chrome respecte la politique relative aux données utilisateur du Chrome Web Store, y compris les exigences d'usage limité (Limited Use).",
          ],
          list: [],
        },
        {
          id: 'choices',
          title: 'Vos choix',
          paras: [
            "Vous pouvez désactiver X3Companion depuis son bouton dans la barre d'outils à tout moment, ou le retirer de Chrome. Votre administrateur peut révoquer votre poste. Pour accéder aux données conservées sur le serveur de votre organisation, ou les faire supprimer — y compris les conversations de l'assistant — contactez l'administrateur de votre organisation.",
          ],
          list: [],
        },
        {
          id: 'contact',
          title: 'Modifications et contact',
          paras: [
            "Si cette politique change, la nouvelle version est publiée sur cette page avec une nouvelle date, et les utilisateurs sont informés dans X3Companion lorsque le traitement des données change. Questions : <a href=\"mailto:contact@s7.ma\">contact@s7.ma</a>.",
          ],
          list: [],
        },
      ] as DocSection[],
    },
    extPrivacy: {
      meta: {
        title: 'Extension Chrome X3Companion — Politique de confidentialité | S7',
        description:
          "Politique de confidentialité de l'extension Chrome X3Companion : son objectif unique, les autorisations utilisées, les données traitées, leur destination, et l'engagement d'usage limité du Chrome Web Store.",
        ogTitle: 'Extension Chrome X3Companion — Politique de confidentialité',
        ogDescription: "Ce que l'extension Chrome X3Companion lit, conserve et envoie — et ce qu'elle ne fait jamais.",
      },
      label: 'Confidentialité · extension Chrome',
      h1: 'X3Companion pour Chrome — politique de confidentialité.',
      updated: 'Extension Chrome « X3Companion » · Éditeur : S7 (Service7), Maroc · Dernière mise à jour : 16 octobre 2026',
      toc: 'Sections',
      back: "Politique de confidentialité de l'ensemble de X3Companion",
      before: [
        {
          id: 'short',
          title: 'En bref',
          paras: [
            "L'extension Chrome X3Companion fonctionne uniquement sur l'adresse web Sage X3 de votre organisation, et ne communique qu'avec le serveur X3Companion Server de votre organisation, sur son réseau local. <b>L'éditeur, S7, ne reçoit aucune donnée de l'extension — aucune.</b> Aucune statistique, aucun suivi, aucune publicité, et aucun code chargé hors du paquet de l'extension.",
          ],
          list: [],
        },
        {
          id: 'purpose',
          title: 'Objectif unique',
          paras: [
            "L'extension ajoute au client web Sage X3 d'une organisation des vues commerciales en lecture seule — documents du client, récap des devis et des commandes, suivi du devis à la facture, analyse des devis — et un assistant sur les données. Toutes ses données viennent du serveur X3Companion Server de cette organisation, et n'y retournent que là.",
          ],
          list: [],
        },
        {
          id: 'controller',
          title: 'Responsable des données',
          paras: [
            "L'extension est installée par des organisations qui exploitent Sage X3 et X3Companion Server sur leur propre réseau. Chaque organisation exploite son serveur, décide quels utilisateurs et quels postes peuvent utiliser l'extension, et est responsable des données métier qui y sont traitées. S7 publie l'extension et n'a jamais accès au serveur ni aux données d'une organisation.",
          ],
          list: [],
        },
      ] as DocSection[],

      permsTitle: 'Autorisations et pourquoi elles sont nécessaires',
      permsLead: "L'extension demande ces autorisations à Chrome et ne les utilise que comme décrit.",
      permsHead: ['Autorisation', 'Utilisation'],
      permsRows: [
        ['<code>storage</code>', "Conserve, sur ce poste uniquement, l'interrupteur Actif/Inactif, l'enregistrement du poste auprès du serveur de votre organisation et les préférences d'affichage."],
        ['<code>scripting</code>', "Quand l'extension est active, enregistre un script inclus dans l'extension sur l'adresse Sage X3 de votre organisation uniquement, pour savoir quel client ou document Sage affiche. Il est retiré quand l'extension est désactivée."],
        ['Votre adresse Sage X3', "Le seul site sur lequel l'extension s'exécute : elle y ajoute ses vues (section Documents, Récap devis, Analyse devis, Récap commande, l'assistant)."],
        ['Votre adresse X3Companion Server', "Le seul endroit auquel l'extension envoie des requêtes, pour obtenir les données qu'elle affiche. C'est le serveur de votre organisation, sur son réseau local."],
      ],

      dataTitle: "Données traitées par l'extension",
      dataLead: "Tout ce qui suit vient des systèmes de votre organisation et s'affiche à l'utilisateur dans Sage X3.",
      dataHead: ['Type de données', 'Précisément', 'Pourquoi'],
      dataRows: [
        ['Informations permettant d’identifier une personne', "Noms et codes des clients Sage, noms des représentants, noms des utilisateurs Sage qui ont créé ou modifié les documents, et nom d'utilisateur attribué au poste par l'administrateur", 'Afficher les clients, les représentants et le créateur de chaque document'],
        ['Informations financières', 'Montants des devis, commandes, livraisons et factures lus dans Sage', 'Afficher les récaps, les totaux et les analyses'],
        ["Informations d'authentification", "Une clé de poste et un jeton de session de courte durée, pour que le serveur de votre organisation reconnaisse ce poste. Aucun mot de passe n'est lu ni conservé", 'Garantir que seuls les postes approuvés reçoivent des données'],
        ['Contenu de site web', "Sur votre adresse Sage X3 uniquement : le numéro du client ou du document à l'écran, et le menu de Sage", "Afficher les données correspondantes et ajouter les écrans de l'extension au menu de Sage"],
        ["Questions à l'assistant", "Ce que l'utilisateur saisit dans l'assistant", 'Y répondre'],
      ],
      dataNot:
        "L'extension ne collecte <b>pas</b> d'informations de santé, de communications personnelles, de localisation, d'historique de navigation ni d'activité de l'utilisateur, et ne s'exécute sur aucun autre site que l'adresse Sage X3 de votre organisation, ne le lit ni ne l'enregistre.",

      after: [
        {
          id: 'stored',
          title: 'Ce qui est conservé sur votre poste',
          paras: [
            "Dans le stockage Chrome réservé à cette extension uniquement : l'interrupteur Actif/Inactif ; l'enregistrement du poste auprès du serveur de votre organisation (identifiant, code d'approbation, clé du poste et jeton de session servant à l'authentifier, nom d'utilisateur attribué par l'administrateur) ; et les préférences d'affichage (taille de page, filtres, conversation ouverte avec l'assistant). <b>Supprimer l'extension efface tout.</b>",
          ],
          list: [],
        },
        {
          id: 'sent',
          title: 'Où les données sont envoyées',
          paras: [
            "Uniquement au serveur X3Companion Server de votre organisation, à l'adresse configurée pour elle, sur son réseau local. L'extension n'envoie rien à S7 ni à aucun autre service.",
            "<b>Assistant.</b> Si votre organisation active l'assistant, son <b>serveur</b> envoie la question, le contexte de l'écran ouvert et les données nécessaires à la réponse au fournisseur d'IA qu'elle a configuré (actuellement Anthropic), sous le compte et les conditions de votre organisation. L'extension ne contacte jamais ce fournisseur directement.",
          ],
          list: [],
        },
        {
          id: 'never',
          title: "Ce qui n'est jamais fait",
          paras: [],
          list: [
            'Aucune vente ni transfert de données utilisateur à des tiers, en dehors des usages décrits ici.',
            "Aucun usage ni transfert de données utilisateur sans rapport avec l'objectif unique de l'extension.",
            "Aucun usage ni transfert de données utilisateur pour évaluer la solvabilité ou accorder un crédit.",
            'Aucune publicité, aucun profilage, aucun script de statistiques ou de suivi.',
            "Aucun code distant : tout le JavaScript est dans le paquet de l'extension ; le serveur ne renvoie que des données.",
            "Aucune modification des données de Sage X3 : l'extension ne fait que lire.",
          ],
        },
        {
          id: 'limited-use',
          title: 'Règles du Chrome Web Store — usage limité',
          paras: [
            "L'utilisation des informations reçues par l'extension X3Companion respecte la <a href=\"https://developer.chrome.com/docs/webstore/program-policies/user-data-faq\" rel=\"noopener\">politique relative aux données utilisateur du Chrome Web Store</a>, y compris les exigences d'usage limité (Limited Use).",
          ],
          list: [],
        },
        {
          id: 'security',
          title: 'Sécurité',
          paras: [
            "Chaque poste crée sa propre clé, non exportable, et ne fonctionne qu'après approbation par l'administrateur de votre organisation. Les jetons de session durent 15 minutes et sont vérifiés contre l'approbation du poste à chaque requête. L'administrateur peut révoquer un poste à tout moment, et un profil de navigateur copié est traité comme un nouveau poste, non approuvé.",
          ],
          list: [],
        },
        {
          id: 'choices',
          title: 'Vos choix et vos données',
          paras: [
            "Vous pouvez désactiver l'extension depuis son bouton dans la barre d'outils à tout moment, ou la retirer de Chrome, ce qui efface tout ce qu'elle a conservé sur votre poste. Votre administrateur peut révoquer votre poste. Pour accéder aux données conservées sur le serveur de votre organisation, les corriger ou les faire supprimer — y compris les conversations de l'assistant — contactez l'administrateur de votre organisation, qui contrôle ces données.",
          ],
          list: [],
        },
        {
          id: 'contact',
          title: 'Modifications et contact',
          paras: [
            "Si cette politique change, la nouvelle version est publiée à cette adresse avec une nouvelle date, et les utilisateurs sont informés dans l'extension lorsque le traitement des données change.",
            'Éditeur : S7 (Service7), Maroc — <a href="mailto:contact@s7.ma">contact@s7.ma</a>.',
          ],
          list: [],
        },
      ] as DocSection[],
    },

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
