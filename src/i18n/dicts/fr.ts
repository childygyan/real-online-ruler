/**
 * fr.ts — le dictionnaire français (natif) de l'interface de Phase 8 i18n.
 *
 * Traduction native du dictionnaire anglais source (en.ts). La marque
 * "Real Online Ruler" et les jetons techniques (px, CSV, TXT, 3×, lettres
 * clavier, {placeholders}, localStorage) restent inchangés.
 */

import type { Dict } from '../dict.js';

export const fr: Dict = {
  skipToContent: 'Aller au contenu',

  header: {
    navAria: 'Principale',
    navMobileAria: 'Principale mobile',
    nav: [
      { label: 'Accueil', href: '/' },
      { label: 'Étalonnage', href: '/#calibration' },
      { label: 'Guide', href: '/#guide' },
      { label: 'FAQ', href: '/#faq' },
    ],
    wordmarkAria: 'Real Online Ruler — accueil',
    themeAria: 'Basculer en mode sombre',
    themeTitle: 'Mode sombre / clair (D)',
    themeSr: 'Changer de thème',
    languageAria: 'Langue',
  },

  footer: {
    tagline:
      'Un outil de mesure gratuit, sans inscription, qui transforme votre écran en règle à taille physique réelle — en centimètres, millimètres, pouces et pixels.',
    explore: 'Explorer',
    exploreLinks: [
      { label: 'Accueil', href: '/' },
      { label: 'Étalonnage', href: '/#calibration' },
      { label: 'Guide de lecture', href: '/#guide' },
      { label: 'FAQ', href: '/#faq' },
    ],
    rulerGuides: 'Guides de la règle',
    guideLinks: [
      { label: 'Étalonner la règle', href: '/how-to-calibrate/' },
      { label: 'Lire la règle', href: '/guide/' },
      { label: 'Règle centimétrique', href: '/cm/' },
      { label: 'Règle en pouces', href: '/inches/' },
      { label: 'Règle millimétrique', href: '/mm/' },
      { label: 'Règle en pixels', href: '/pixels/' },
    ],
    accuracyTitle: 'Note sur la précision',
    accuracyBody:
      'Les mesures à l’écran ne sont précises qu’en fonction de votre étalonnage. Étalonnez une fois votre écran, gardez le zoom du navigateur à 100 %, et la règle restera fidèle à chaque visite.',
    copyright: '© {year} Real Online Ruler. Gratuit pour tous — sans compte, sans téléchargement.',
  },

  layout: {
    breadcrumbHome: 'Accueil',
    breadcrumbAria: 'Fil d’Ariane',
    keepReading: 'Continuer la lecture',
    relatedAria: 'Pages associées',
    ctaTitle: 'Essayez-la sur votre écran dès maintenant',
    ctaBody:
      'La règle interactive est sur la page d’accueil — étalonnée pour votre écran en moins d’une minute.',
    ctaButton: 'Ouvrir la règle',
  },

  toolbar: {
    unitGroup: 'Unité de mesure',
    edgeGroup: 'Bords de la règle',
    edgeTop: 'Haut',
    edgeBottom: 'Bas',
    edgeLeft: 'Gauche',
    edgeRight: 'Droite',
    precisionGroup: 'Outils de précision',
    guides: 'Repères',
    guidesTitle: 'Afficher les lignes de repère (G)',
    crosshair: 'Réticule',
    crosshairTitle: 'Afficher le réticule (C)',
    orientGroup: 'Orientation des nouveaux repères',
    orientHTitle: 'Les nouveaux repères sont horizontaux',
    orientVTitle: 'Les nouveaux repères sont verticaux',
    fullscreen: 'Plein écran',
    fullscreenTitle: 'Plein écran (F)',
    theme: 'Thème',
    themeTitle: 'Changer de thème (D)',
    calibrate: 'Étalonner',
    calibrateTitle: 'Étalonner l’écran',
    advanced: 'Avancés',
    advancedGroup: 'Outils de mesure avancés',
    measure: 'Mesurer',
    measureTitle: 'Glissez sur la zone pour mesurer la distance et l’angle (M)',
    protractor: 'Rapporteur',
    protractorTitle: 'Rapporteur superposé (P)',
    loupe: 'Loupe',
    loupeTitle: 'Loupe grossissante (L)',
    ruler: 'Règle',
    rulerTitle: 'Règle flottante pivotante (R)',
    log: 'Journal',
    logTitle: 'Journal des mesures (O)',
    grid: 'Grille',
    gridTitle: 'Grille superposée (N)',
    gridUnit: 'Unité de grille',
    gridUnitAria: 'Unité des cellules de la grille',
    gridCm: 'cm',
    gridInch: 'pouce',
    help: '? Raccourcis',
    helpTitle: 'Raccourcis clavier (H)',
  },

  stage: {
    aria: 'Zone de mesure',
    hint: 'Activez les bords ci-dessus pour encadrer cette zone de règles. Posez un petit objet contre le bord de mesure surligné de la règle et lisez sa taille.',
    guidesHint:
      'Repères activés : cliquez ici pour placer une ligne de repère ; faites glisser une ligne pour la déplacer, double-cliquez dessus pour la supprimer, Esc efface tous les repères.',
    guideAt: 'Repère à {value}',
  },

  status: {
    loading: 'Chargement de l’étalonnage…',
    uncalibrated: 'Non étalonné — utilisation de la valeur CSS par défaut de 96 px/po.',
    calibrateNow: 'Étalonner maintenant',
    calibrated: '{px} px/po · étalonné par {what}.',
    zoomNote: 'Gardez le zoom du navigateur à 100 % — le zoom redimensionne la règle.',
    shortcutHint: 'Appuyez sur {key} pour voir la liste complète des raccourcis clavier.',
  },

  measure: {
    popupAria: 'Enregistrer la mesure',
    save: 'Enregistrer',
    discard: 'Ignorer',
  },

  protractor: {
    aria: 'Rapporteur superposé : faites glisser le centre pour déplacer, la poignée ambrée pour pivoter, les poignées sarcelle et ambrée des branches pour mesurer un angle',
    moveArmA: 'Faites glisser pour déplacer la branche A',
    moveArmB: 'Faites glisser pour déplacer la branche B',
    rotate: 'Faites glisser pour faire pivoter le rapporteur',
    move: 'Faites glisser pour déplacer le rapporteur',
    caption: 'le centre déplace · l’anneau pivote',
  },

  floatingRuler: {
    aria: 'Règle flottante : faites glisser le corps pour déplacer, la poignée à l’extrémité droite pour pivoter',
    rotateTitle: 'Faites glisser pour pivoter',
  },

  log: {
    panelAria: 'Journal des mesures',
    title: 'Journal des mesures',
    close: 'Fermer',
    closeAria: 'Fermer le journal des mesures',
    empty:
      'Aucune mesure pour l’instant. Activez Mesurer ({key}), glissez sur la zone, puis Enregistrer.',
    labelAria: 'Libellé de la mesure',
    copy: 'Copier',
    delete: 'Supprimer',
    copyAll: 'Tout copier',
    csv: 'CSV',
    txt: 'TXT',
    clear: 'Effacer',
    copied: 'Copié',
    failed: 'Échec',
  },

  help: {
    title: 'Raccourcis clavier',
    close: 'Fermer',
    rows: [
      { keys: ['1', '2', '3', '4'], label: 'Unités : cm, pouce, mm, px' },
      { keys: ['G'], label: 'Activer les lignes de repère' },
      { keys: ['C'], label: 'Activer le réticule' },
      { keys: ['F'], label: 'Plein écran' },
      { keys: ['D'], label: 'Changer de thème' },
      { keys: ['M'], label: 'Mesure par glissement' },
      { keys: ['P'], label: 'Rapporteur superposé' },
      { keys: ['L'], label: 'Loupe grossissante (3×)' },
      { keys: ['R'], label: 'Règle flottante' },
      { keys: ['O'], label: 'Journal des mesures' },
      { keys: ['N'], label: 'Grille superposée' },
      { keys: ['H'], label: 'Cette aide' },
      { keys: ['Esc'], label: 'Annuler le tracé / fermer / effacer les repères' },
    ],
  },

  calibrate: {
    title: 'Étalonner votre écran',
    currentLabel: 'Actuel :',
    defaultReadout: '96 px/po (par défaut)',
    saved: 'Enregistré',
    closeAria: 'Fermer la boîte de dialogue d’étalonnage',
    tablistAria: 'Méthodes d’étalonnage',
    tabs: {
      auto: 'Auto-détection',
      device: 'Choisir un appareil',
      diagonal: 'Diagonale de l’écran',
      card: 'Carte bancaire',
    },
    autoBody:
      'Nous analysons votre navigateur et la résolution de votre écran, les comparons à une base de données intégrée de caractéristiques d’écrans publiées, puis appliquons la densité de pixels d’usine. L’option la plus rapide quand elle trouve votre appareil.',
    detectButton: 'Détecter mon appareil',
    deviceBody:
      'Vous connaissez votre modèle exact ? Sélectionnez-le ci-dessous — nous appliquons sa densité de pixels publiée, ajustée à votre mise à l’échelle d’affichage.',
    categoryLabel: 'Catégorie',
    deviceLabel: 'Appareil',
    diagonalBody:
      'Saisissez la diagonale de votre écran en pouces (elle figure généralement sur l’emballage ou la page de caractéristiques du fabricant — par ex. 15,6 pour un ordinateur portable typique). Nous la combinons avec la résolution de votre écran pour calculer la densité exacte. Gardez le zoom du navigateur à 100 %.',
    diagonalLabel: 'Diagonale (pouces)',
    calculate: 'Calculer',
    cardBody:
      'Posez une carte de crédit, de débit ou d’identité à plat contre votre écran, sur le contour ci-dessous. Faites glisser le curseur jusqu’à ce que le contour corresponde exactement aux bords de la carte, puis utilisez l’étalonnage. Les cartes standard mesurent 85.60 × 53.98 mm.',
    cardSize: '85.60 × 53.98 mm',
    assumedDensity: 'Densité supposée',
    useCalibration: 'Utiliser cet étalonnage',
    footerNote:
      'Enregistré dans ce navigateur uniquement. Réétalonnez si vous changez d’écran ou de mise à l’échelle d’affichage.',
    reset: 'Réinitialiser à 96 PPI',
    methods: {
      auto: 'auto-détection',
      device: 'choix de l’appareil',
      diagonal: 'diagonale de l’écran',
      card: 'carte bancaire',
      default: 'par défaut',
    },
    autoDetected: 'Détecté :',
    factoryPpi: '{ppi} PPI d’usine',
    highConfidence: 'Confiance élevée — correspondance exacte du modèle.',
    mediumConfidence:
      'Confiance moyenne — écran correspondant à des modèles similaires (même densité).',
    computedAtScaling:
      'Densité calculée à votre mise à l’échelle d’affichage : <strong>{px} px/po</strong>',
    pxPerInch: 'px/po',
    recognizedAs:
      'Nous reconnaissons un écran de <strong>{category}</strong>, mais sans identifier le modèle exact.',
    notRecognized:
      'Nous n’avons pas pu reconnaître cet appareil à partir des informations de votre navigateur.',
    tryTabs:
      'Essayez plutôt l’onglet <strong>{a}</strong>, <strong>{b}</strong> ou <strong>{c}</strong>.',
    factoryWord: 'usine',
    atScaling:
      'À votre mise à l’échelle d’affichage actuelle (×{dpr}) : <strong>{px} px/po</strong>',
    invalidDiagonal: 'Veuillez saisir une diagonale valide en pouces.',
    screenIs: 'Écran : {w} × {h} px, diagonale {d} po',
    computedDensity: 'Densité calculée : <strong>{px} px/po</strong>',
    diagonalDeviceName: 'Diagonale de {d} po',
    cardDeviceName: 'Carte 85.60 × 53.98 mm',
  },

  notFound: {
    title: 'Page introuvable — Real Online Ruler',
    description: 'La page que vous cherchiez n’existe pas sur Real Online Ruler.',
    heading: 'Cette graduation n’est pas sur la règle',
    body: 'La page demandée n’existe pas. Revenons à la mesure.',
    cta: 'Retour à la règle',
  },

  home: {
    title: 'Real Online Ruler — Règle d’écran gratuite à taille réelle (cm, mm, pouces, pixels)',
    description:
      'Transformez votre écran en vraie règle. Étalonnez une fois votre écran, puis mesurez de petits objets en centimètres, millimètres, pouces ou pixels — gratuit, sans inscription, sans téléchargement.',
    badge: 'Gratuit · Sans inscription · Sans téléchargement',
    h1Before: 'Votre écran, transformé en ',
    h1Emphasis: 'vraie règle',
    h1After: '.',
    lede: 'Étalonnez une fois votre écran et cette page devient un instrument de mesure à taille physique réelle. Posez une pièce, une vis ou un échantillon contre le bord et lisez-le en centimètres, millimètres, pouces ou pixels.',
    openRuler: 'Ouvrir la règle',
    howCalibration: 'Comment fonctionne l’étalonnage',
    tip: 'Astuce : gardez le zoom du navigateur à 100 % pendant la mesure.',
    workspaceAria: 'Espace de travail de la règle',
    featuresAria: 'Fonctionnalités',
    featuresTitle: 'Une page, un véritable établi de mesure',
    featuresLede:
      'Étalonnez une fois, puis mesurez tout ce qui passe sur votre écran — voici ce que la page peut faire.',
    features: [
      {
        icon: '◎',
        name: 'Étalonnage en quatre méthodes',
        body: 'Détectez automatiquement votre appareil, choisissez-le dans une liste, saisissez la diagonale de votre écran ou ajustez une carte bancaire à l’écran. Un seul étalonnage rend chaque mesure fidèle à la taille réelle.',
      },
      {
        icon: '▦',
        name: 'Des règles sur les quatre bords',
        body: 'Épinglez une règle en haut, en bas, à gauche ou à droite — ou aux quatre bords à la fois — et encadrez tout objet de votre écran dans une grille de mesure en direct.',
      },
      {
        icon: '⇄',
        name: 'cm, mm, pouces et pixels',
        body: 'Changez d’unité instantanément : graduations métriques au millimètre près, fractions de pouce, ou pixels CSS bruts pour le design. Raccourcis clavier inclus.',
      },
      {
        icon: '┼',
        name: 'Lignes de repère',
        body: 'Placez des lignes de référence horizontales et verticales où vous voulez, faites-les glisser en place et lisez les distances entre elles dans l’unité active.',
      },
      {
        icon: '✛',
        name: 'Coordonnées du réticule',
        body: 'Un réticule en direct suit votre curseur et indique sa position X/Y exacte dans l’unité active — pratique pour les mises en page et les contrôles d’alignement.',
      },
      {
        icon: '◈',
        name: 'Plein écran et mode sombre',
        body: 'Déployez l’outil sur tout l’écran pour mesurer d’un bord à l’autre, et passez du thème clair au thème sombre. Vos préférences sont mémorisées.',
      },
    ],
    calibrationAria: 'Comment fonctionne l’étalonnage',
    calibrationTitle: 'Comment fonctionne l’étalonnage',
    calibrationParas: [
      'Chaque écran entasse un nombre différent de pixels physiques dans chaque pouce — un téléphone peut en contenir 460, un écran d’ordinateur plutôt 100. Votre navigateur, lui, dessine la page en <em>pixels CSS</em>, et il ne révèle jamais aux sites leur taille physique réelle.',
      'L’étalonnage comble cet écart. Vous donnez à la page une référence fiable — votre modèle d’appareil, la diagonale de votre écran ou une carte bancaire posée contre l’écran — et elle calcule exactement combien de pixels CSS valent un pouce réel. À partir de ce seul nombre, chaque graduation de chaque règle est placée à sa vraie position.',
    ],
    methods: [
      {
        name: 'Auto-détection',
        body: 'Nous comparons votre appareil à une base de données d’écrans intégrée et appliquons sa densité de pixels d’usine.',
      },
      {
        name: 'Choisir votre appareil',
        body: 'Parcourez les entrées iPhone, iPad, MacBook, Android et écrans, puis sélectionnez votre modèle exact.',
      },
      {
        name: 'Diagonale de l’écran',
        body: 'Saisissez la diagonale de votre écran en pouces ; nous en déduisons la densité à partir de votre résolution.',
      },
      {
        name: 'Carte bancaire',
        body: 'Posez n’importe quelle carte bancaire contre l’écran et faites glisser un curseur jusqu’à ce que le contour à l’écran corresponde.',
      },
    ],
    liveNote:
      'Le panneau d’étalonnage interactif est en direct — ouvrez-le depuis l’espace de travail de la règle ci-dessus pour étalonner par auto-détection, choix d’appareil, diagonale d’écran ou méthode de la carte bancaire.',
    guideAria: 'Guide de lecture',
    guideTitle: 'Comment lire la règle',
    units: [
      {
        name: 'Centimètres',
        body: 'Chaque trait numéroté vaut un centimètre. Les dix petites graduations entre les nombres sont des millimètres — le 4ᵉ petit trait après le 7 vaut donc 7,4 cm.',
      },
      {
        name: 'Pouces',
        body: 'Les traits numérotés sont des pouces entiers. Entre eux, le trait non numéroté le plus long vaut ½ po, puis ¼ et ¾ po, puis les huitièmes — comme sur une règle en bois.',
      },
      {
        name: 'Pixels',
        body: 'Le mode pixels compte les pixels CSS bruts à partir de zéro — l’unité des designers pour l’espacement, les tailles de police et les dimensions des éléments à l’écran.',
      },
    ],
    guideLinksIntro: 'Pour le traitement complet, voir les guides dédiés :',
    guideLinks: [
      { href: '/guide/', label: 'Lire la règle' },
      { href: '/cm/', label: 'Règle centimétrique' },
      { href: '/inches/', label: 'Règle en pouces' },
      { href: '/mm/', label: 'Règle millimétrique' },
      { href: '/pixels/', label: 'Règle en pixels' },
    ],
    faqAria: 'Foire aux questions',
    faqTitle: 'Foire aux questions',
    faqs: [
      {
        q: 'Une règle à l’écran peut-elle vraiment être précise ?',
        a: 'Oui — mais seulement après étalonnage. Votre navigateur dessine en pixels CSS, qui n’ont pas de taille physique fixe. L’étalonnage apprend à la page combien de pixels CSS valent un pouce réel sur votre écran précis. Une fois ce nombre connu, chaque graduation tombe à sa vraie position physique.',
      },
      {
        q: 'Pourquoi dois-je étalonner ? Le site ne peut-il pas connaître la taille de mon écran ?',
        a: 'Les navigateurs cachent délibérément la densité physique exacte de pixels pour protéger votre vie privée : aucun site ne peut donc mesurer votre écran directement. Le site part d’une estimation standard du web de 96 pixels par pouce ; les quatre méthodes d’étalonnage remplacent cette estimation par le vrai nombre de votre écran.',
      },
      {
        q: 'Dois-je étalonner à chaque visite ?',
        a: 'Non. Votre étalonnage est enregistré dans votre navigateur et rechargé automatiquement. Réétalonnez uniquement si vous changez d’écran, modifiez votre mise à l’échelle d’affichage ou remarquez que les mesures dérivent.',
      },
      {
        q: 'Le zoom du navigateur modifie-t-il les mesures ?',
        a: 'Oui. Le zoom redimensionne les pixels CSS : une règle étalonnée à 100 % de zoom lira faux à 110 %. Gardez le zoom de votre navigateur à 100 % pendant la mesure — l’application vous le rappelle.',
      },
      {
        q: 'Que puis-je réellement mesurer avec ?',
        a: 'Tout ce qui est assez petit pour être posé contre votre écran : pièces de monnaie, vis, fermoirs de boucles d’oreille, cartes SD, échantillons imprimés, tailles de bagues. La plus longue mesure droite possible est la largeur ou la hauteur de votre écran.',
      },
      {
        q: 'Ça marche sur téléphones et tablettes ?',
        a: 'Oui. Ouvrez la page dans n’importe quel navigateur mobile, étalonnez avec votre modèle d’appareil ou la méthode de la carte bancaire, et l’écran du téléphone devient une règle de poche — étonnamment pratique pour des vérifications rapides.',
      },
      {
        q: 'Mes données d’étalonnage sont-elles privées ?',
        a: 'Complètement. Votre étalonnage est stocké uniquement dans le stockage local de votre propre navigateur — il n’est jamais téléversé, et il n’y a aucun compte auquel le rattacher. Effacer les données de votre navigateur le supprime.',
      },
      {
        q: 'Puis-je mesurer quelque chose de plus grand que mon écran ?',
        a: 'Par sections. Mesurez la première largeur d’écran, placez un repère au point final, faites glisser l’objet le long, puis additionnez les segments. Les repères gardent votre position pour que les segments s’alignent.',
      },
      {
        q: 'Pourquoi la règle semble fausse sur mon deuxième écran ?',
        a: 'Chaque écran a sa propre densité de pixels : un étalonnage fait sur votre portable ne se transfère donc pas à un écran externe. Étalonnez une fois par écran, avec la fenêtre du navigateur sur l’écran que vous étalonnez.',
      },
      {
        q: 'Quelle méthode d’étalonnage choisir ?',
        a: 'La méthode de la carte bancaire est la plus précise pour la plupart des gens, car elle étalonne contre un objet physique de taille normalisée connue (85,60 mm). Le sélecteur d’appareil est tout aussi bon quand votre modèle exact est listé ; l’auto-détection est le point de départ le plus rapide.',
      },
      {
        q: 'Faut-il étalonner pour la règle en pixels ?',
        a: 'Non. Le mode pixels compte les propres pixels CSS du navigateur, que la page connaît exactement — l’étalonnage ne compte que pour les unités physiques (cm, mm, pouces). La contrepartie est que les lectures en pixels n’ont pas de taille réelle fixe.',
      },
      {
        q: 'Ça marche en plein écran ?',
        a: 'Oui — appuyez sur F ou sur le bouton Plein écran de la barre d’outils. Le plein écran offre la règle la plus longue possible et supprime les éléments du navigateur qui pourraient gêner la mesure.',
      },
    ],
    jsonLdDescription:
      'Une règle d’écran gratuite à taille physique réelle. Étalonnez votre écran, puis mesurez en centimètres, millimètres, pouces et pixels.',
  },

  content: {
    guide: {
      title: 'Comment lire une règle en ligne (cm, mm, pouces, pixels) | Real Online Ruler',
      description:
        'Apprenez à lire la règle à l’écran : graduations en centimètres et millimètres, fractions de pouce jusqu’aux seizièmes, mode pixels, plus les repères, le réticule et six outils de mesure avancés.',
      h1: 'Comment lire la règle',
      lede: 'Quatre unités, un seul écran. Ce guide vous apprend à lire toutes les échelles proposées par la règle — graduations métriques, fractions de pouce et mode pixels — à utiliser les repères et le réticule, et à maîtriser les six outils avancés : mesure par glissement, rapporteur, loupe, règle flottante, journal des mesures et grille.',
      breadcrumb: 'Guide de lecture',
      related: [
        { href: '/how-to-calibrate/', label: 'Étalonner votre règle à l’écran' },
        { href: '/cm/', label: 'Règle centimétrique' },
        { href: '/inches/', label: 'Règle en pouces' },
        { href: '/mm/', label: 'Règle millimétrique' },
        { href: '/pixels/', label: 'Règle en pixels' },
      ],
      faqs: [
        {
          q: 'Comment lire les fractions de pouce sur la règle ?',
          a: 'Trouvez le pouce numéroté le plus proche, puis comptez les petits traits au-delà. Les traits non numérotés les plus longs sont les demis, les suivants les quarts, puis les huitièmes, et les plus courts les seizièmes. Trois petits traits après la marque des 2 pouces, par exemple, valent 2 et 3/16 de pouce.',
        },
        {
          q: 'Quelle est la différence entre les modes cm et mm ?',
          a: 'Ils montrent la même échelle avec des étiquettes différentes. En mode cm, les marques numérotées lisent 1, 2, 3 (centimètres) ; en mode mm, les mêmes marques lisent 10, 20, 30 (millimètres). Utilisez le mode mm quand vous voulez lire une valeur comme 47 mm sans multiplier.',
        },
        {
          q: 'En quoi les lignes de repère aident-elles à mesurer ?',
          a: 'Les repères permettent de marquer des positions sur la zone de mesure sans poser l’objet contre le bord d’une règle. Placez un repère à chaque extrémité de l’objet et lisez la distance entre leurs indications — utile pour les objets qu’on ne peut pas presser à plat contre le bord de l’écran.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Découvrez les quatre unités' },
        {
          kind: 'p',
          html: 'Changez d’unité à tout moment depuis la barre d’outils ou avec les touches <code>1</code> à <code>4</code>. Les graduations sont redessinées à partir de votre étalonnage : changer d’unité ne modifie jamais la taille physique — seulement les étiquettes.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>cm (1)</strong> — centimètres, l’unité métrique du quotidien. Idéal pour mesurer en général.',
            '<strong>mm (2)</strong> — millimètres, pour la précision. Même échelle que les cm, étiquetée en mm.',
            '<strong>in (3)</strong> — pouces avec fractions jusqu’au 1/16 po. Idéal pour les travaux en unités américaines.',
            '<strong>px (4)</strong> — pixels CSS, pour les maquettes de design. Pas une unité physique (voir ci-dessous).',
          ],
        },
        { kind: 'h2', text: 'Lire les centimètres et les millimètres' },
        {
          kind: 'p',
          html: 'En <strong>mode cm</strong>, les longs traits numérotés sont des centimètres (1, 2, 3…) et il y a neuf petits traits entre chaque paire — ce sont des millimètres. Un objet qui s’arrête quatre petits traits après la marque des 5 cm mesure 5,4 cm. En <strong>mode mm</strong>, l’échelle est identique mais les traits numérotés lisent 10, 20, 30 — ce même objet se lit donc directement 54 mm, sans multiplier.',
        },
        {
          kind: 'p',
          html: 'La règle pratique : utilisez les cm quand c’est le nombre de centimètres qui vous intéresse (« environ douze centimètres et demi »), et les mm quand vous voulez un seul nombre précis (« 127 mm »).',
        },
        { kind: 'h2', text: 'Lire les pouces et les fractions' },
        {
          kind: 'p',
          html: 'En <strong>mode pouces</strong>, les traits numérotés sont des pouces entiers. Entre eux, la longueur du trait indique la fraction — plus le trait est long, plus la fraction est simple :',
        },
        {
          kind: 'table',
          head: ['Longueur du trait', 'Fraction', 'Exemple'],
          rows: [
            ['Le plus long non numéroté', '½ pouce', '2½″'],
            ['Le suivant', '¼ de pouce', '1¼″, 1¾″'],
            ['Moyen', '⅛ de pouce', '3⅜″'],
            ['Le plus court', '1/16 de pouce', '5/16″'],
          ],
        },
        {
          kind: 'p',
          html: 'Pour lire une mesure, trouvez le pouce numéroté <em>inférieur</em> le plus proche de l’extrémité de l’objet, puis comptez les petits traits au-delà et retenez le trait le plus long atteint par votre compte. Trois des traits les plus courts après la marque des 2 po valent 2 et 3/16 de pouce. Si l’extrémité de l’objet tombe exactement sur un trait moyen, lisez plutôt les huitièmes — 2 et 6/16, c’est en réalité 2⅜ po, et les menuisiers vous remercieront de simplifier.',
        },
        { kind: 'h2', text: 'Lire les pixels' },
        {
          kind: 'p',
          html: 'Le <strong>mode px</strong> est l’exception : un pixel CSS n’est pas une taille physique, c’est la propre unité du navigateur. La règle en pixels affiche des graduations mineures de 10 pixels et des marques numérotées tous les 100 px. Utilisez-la pour maquetter un design (« ce bouton devrait faire environ 120 px de large »), pas quand vous avez besoin d’une mesure physique — pour cela, restez en cm, mm ou pouces après étalonnage.',
        },
        { kind: 'h2', text: 'Mesurer avec les repères' },
        {
          kind: 'p',
          html: 'Appuyez sur <code>G</code> (ou sur le bouton Repères) et cliquez n’importe où dans la zone de mesure pour placer une ligne de repère — horizontale ou verticale, choisie avec le sélecteur H/V. Chaque repère affiche sa position dans l’unité active. Faites glisser un repère pour le repositionner, double-cliquez pour en supprimer un, et appuyez sur <code>Esc</code> pour tous les effacer.',
        },
        {
          kind: 'p',
          html: 'Les repères excellent quand l’objet ne peut pas reposer contre le bord d’une règle : placez un repère à chaque extrémité de l’objet et soustrayez les deux indications. Les repères indiquent toujours l’unité active : changer d’unité en pleine mesure convertit donc les indications pour vous.',
        },
        { kind: 'h2', text: 'Mesurer avec le réticule' },
        {
          kind: 'p',
          html: 'Appuyez sur <code>C</code> et un réticule en pointillés suit votre pointeur sur la zone de mesure, avec une pastille en direct affichant la position X/Y exacte dans l’unité active. C’est le moyen le plus rapide de vérifier un seul point — le coin d’une photo, le bord d’un widget — sans placer de repères.',
        },
        { kind: 'h2', text: 'Outils avancés' },
        {
          kind: 'p',
          html: 'La rangée <strong>Avancés</strong> de la barre d’outils ajoute six outils qui vont au-delà des règles de bord. Tous mesurent en pixels CSS mis à l’échelle par votre étalonnage, dans l’unité actuellement sélectionnée.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Mesurer (M)</strong> — glissez n’importe où sur la zone pour tracer une ligne de mesure. L’indication en direct montre la distance dans l’unité active et l’angle de la ligne en degrés. Les extrémités s’aimantent aux lignes de repère proches. Relâchez pour obtenir Enregistrer (envoie la lecture au journal) ou Ignorer ; <code>Esc</code> annule pendant le tracé.',
            '<strong>Rapporteur (P)</strong> — un rapporteur circulaire que vous pouvez glisser n’importe où. Faites glisser le centre pour le déplacer, la poignée de l’anneau pour pivoter l’échelle, et les deux poignées des branches pour régler les branches ; l’affichage numérique montre l’angle entre les branches en degrés.',
            '<strong>Loupe (L)</strong> — une loupe 3× qui suit votre curseur, affichant une vue agrandie des règles, des repères et de la zone sous elle pour une lecture précise des graduations.',
            '<strong>Règle (R)</strong> — une règle flottante, indépendante des bords de l’écran. Faites glisser son corps pour la déplacer et la poignée ambrée à son extrémité pour la pivoter à n’importe quel angle ; elle affiche des graduations dans l’unité active sur toute sa longueur, avec une petite pastille indiquant sa rotation.',
            '<strong>Journal (O)</strong> — chaque mesure enregistrée y arrive avec un libellé modifiable. Copiez une entrée seule ou toute la liste, exportez en CSV ou TXT, ou supprimez des entrées. Le journal persiste dans le stockage local de votre navigateur.',
            '<strong>Grille (N)</strong> — une grille superposée discrète pour les travaux d’alignement. Chaque cellule vaut exactement 1 cm (ou 1 pouce — à changer avec le sélecteur d’unité de grille), avec un trait renforcé toutes les 5 cellules.',
          ],
        },
        { kind: 'h2', text: 'Raccourcis clavier' },
        {
          kind: 'p',
          html: 'Appuyez sur <code>H</code> n’importe où dans l’application de la règle pour ouvrir l’aide des raccourcis. La carte complète :',
        },
        {
          kind: 'ul',
          items: [
            '<code>1</code>–<code>4</code> — unités : cm, pouce, mm, px',
            '<code>G</code> repères · <code>C</code> réticule · <code>F</code> plein écran · <code>D</code> thème',
            '<code>M</code> mesure par glissement · <code>P</code> rapporteur · <code>L</code> loupe',
            '<code>R</code> règle flottante · <code>O</code> journal des mesures · <code>N</code> grille',
            '<code>Esc</code> — annuler le tracé en cours, fermer les boîtes de dialogue ou effacer tous les repères',
          ],
        },
        { kind: 'h2', text: 'Conseils pour des mesures fiables' },
        {
          kind: 'ul',
          items: [
            'Mesurez contre le <strong>bord de mesure surligné</strong> de la règle (la ligne de base sarcelle), pas contre le bord extérieur de la barre.',
            'Alignez le <strong>début</strong> de l’objet avec la marque zéro, pas avec le bout de l’écran.',
            'Pour les objets plus longs que la règle, mesurez par sections en marquant chaque segment avec des repères.',
            'Regardez l’écran bien de face ; sous un angle prononcé, la parallaxe déplace l’endroit où le bord semble être.',
            'Chaque outil mesure en pixels CSS mis à l’échelle par votre étalonnage. Le zoom du navigateur, la mise à l’échelle d’affichage du système ou un écran externe avec une densité de pixels différente redimensionnera la règle — gardez le zoom à 100 % et réétalonnez si vous déplacez la fenêtre sur un autre écran.',
            'En cas de doute, revérifiez avec l’<a href="/how-to-calibrate/">étalonnage par carte bancaire</a> — cela prend une minute.',
          ],
        },
      ],
    },
    howToCalibrate: {
      title: 'Étalonner votre règle à l’écran | Real Online Ruler',
      description:
        'Étalonnez votre écran en moins d’une minute avec quatre méthodes : auto-détection, sélecteur d’appareil, diagonale d’écran ou carte bancaire. Découvrez quelle méthode est la plus précise et quand réétalonner.',
      h1: 'Étalonner votre règle à l’écran',
      lede: 'Votre navigateur dessine en pixels CSS, qui n’ont pas de taille physique fixe. L’étalonnage apprend à cette page exactement combien de ces pixels valent un pouce réel sur votre écran — après cela, chaque graduation tombe à sa vraie position physique.',
      breadcrumb: 'Étalonnage',
      related: [
        { href: '/guide/', label: 'Comment lire la règle : cm, mm, pouces et pixels' },
        { href: '/cm/', label: 'Règle centimétrique' },
        { href: '/inches/', label: 'Règle en pouces' },
      ],
      faqs: [
        {
          q: 'Quelle méthode d’étalonnage est la plus précise ?',
          a: 'La méthode de la carte bancaire est généralement la plus précise, car elle étalonne contre un objet physique de taille connue et normalisée (85,60 mm de large) que vous posez contre l’écran. Le sélecteur d’appareil est tout aussi bon quand votre modèle exact est listé. L’auto-détection est un bon point de départ, et la méthode de la diagonale est plutôt un recours.',
        },
        {
          q: 'À quelle fréquence réétalonner ?',
          a: 'Uniquement quand quelque chose change sur votre écran : un nouvel écran, un autre portable, un réglage de mise à l’échelle d’affichage du système modifié, ou une connexion/déconnexion à une station d’accueil. Votre étalonnage est enregistré dans le navigateur : au quotidien, vous n’avez jamais à y toucher.',
        },
        {
          q: 'L’étalonnage fonctionne-t-il sur un deuxième écran ?',
          a: 'Chaque écran a besoin de son propre étalonnage, car la densité de pixels diffère d’un écran à l’autre. Étalonnez une fois par écran ; la valeur enregistrée s’applique à l’écran sur lequel se trouve la fenêtre du navigateur au moment de l’étalonnage. Si vous déplacez la fenêtre sur un autre écran, réétalonnez là-bas.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Pourquoi l’étalonnage change tout' },
        {
          kind: 'p',
          html: 'Une règle physique est fiable parce que ses marques ont été imprimées à des distances connues. Une règle à l’écran n’offre aucune garantie de ce genre : les mêmes 96 pixels CSS peuvent valoir un pouce entier sur un portable et nettement moins sur l’écran haute densité d’un téléphone. Le site part de l’estimation standard du web de 96 pixels par pouce, puis la remplace par le vrai nombre de votre écran. Tout le reste — centimètres, millimètres, fractions de pouce — est de l’arithmétique bâtie sur ce seul nombre : l’obtenir juste compte plus que tout le reste sur ce site.',
        },
        { kind: 'h2', text: 'Les quatre méthodes' },
        {
          kind: 'p',
          html: 'Ouvrez la boîte de dialogue d’étalonnage depuis la barre d’outils de la <a href="/#ruler-app">règle de la page d’accueil</a> et choisissez la méthode qui correspond à ce que vous avez sous la main. Les quatre s’enregistrent automatiquement dans votre navigateur.',
        },
        { kind: 'h3', text: '1. Auto-détection' },
        {
          kind: 'p',
          html: 'L’option la plus rapide. La page lit la résolution de votre écran et la meilleure estimation du rapport de pixels par votre navigateur, puis estime la densité. Elle a étonnamment souvent raison sur les portables et ordinateurs de bureau grand public, et c’est la méthode à essayer en premier. Si les mesures semblent ensuite légèrement fausses, passez à l’une des méthodes manuelles ci-dessous.',
        },
        { kind: 'h3', text: '2. Choisir votre appareil' },
        {
          kind: 'p',
          html: 'Choisissez votre téléphone, tablette, portable ou écran dans la liste intégrée d’écrans connus. Chaque entrée porte la densité de pixels constructeur de ce modèle : le calcul est donc exact pour cet écran. C’est la meilleure méthode sur mobile, où la détection du modèle est fiable — votre téléphone devient une règle de poche en une dizaine de secondes.',
        },
        { kind: 'h3', text: '3. Diagonale de l’écran' },
        {
          kind: 'p',
          html: 'Saisissez la diagonale annoncée de votre écran (13,3 po, 15,6 po, 24 po, 27 po — elle figure sur l’emballage ou la page de caractéristiques du fabricant) et la page en déduit la densité à partir de votre résolution. Rapide et correct, mais seulement aussi précis que le nombre annoncé, qui est parfois arrondi.',
        },
        { kind: 'h3', text: '4. Carte bancaire' },
        {
          kind: 'p',
          html: 'La méthode la plus précise pour la plupart des gens. Posez n’importe quelle carte bancaire ou d’identité standard contre le rectangle à l’écran et faites glisser le curseur jusqu’à ce que les deux correspondent exactement. Les cartes suivent la norme ISO/IEC 7810 ID-1 — 85.60 × 53.98 mm — vous étalonnez donc contre un objet physique de taille connue. Prenez votre temps avec le curseur : un demi-millimètre d’écart ici, c’est toute la marge d’erreur.',
        },
        { kind: 'h2', text: 'Conseils pour une précision maximale' },
        {
          kind: 'ul',
          items: [
            '<strong>Utilisez la méthode de la carte en dernier, pas en premier.</strong> Elle vaut la minute supplémentaire — elle supprime toutes les hypothèses sur votre écran.',
            '<strong>Gardez le zoom du navigateur à 100 %.</strong> Le zoom redimensionne les pixels CSS : une règle étalonnée à 100 % lit faux à 110 %. L’application vous le rappelle dans sa barre d’état.',
            '<strong>Étalonnez sur l’écran où vous mesurerez.</strong> L’écran du portable et l’écran externe ont presque toujours des densités différentes.',
            '<strong>Vérifiez la mise à l’échelle d’affichage du système.</strong> Si vous modifiez le réglage de mise à l’échelle (125 %, 150 %) après avoir étalonné, réétalonnez — la correspondance pixels CSS / taille physique a changé.',
            '<strong>Vérifiez avec quelque chose de connu.</strong> Après l’étalonnage, mesurez votre carte bancaire (85,60 mm de large) ou un quarter américain (24,26 mm de diamètre). Si la lecture est bonne, tout est en ordre.',
          ],
        },
        { kind: 'h2', text: 'Quand réétalonner' },
        {
          kind: 'p',
          html: 'Presque jamais, au quotidien. Votre étalonnage est stocké dans votre navigateur sous <code>ror-calibration</code> et rechargé à chaque visite. Réétalonnez uniquement quand l’écran lui-même change : nouvel écran, autre portable, réglage de mise à l’échelle modifié, ou connexion/déconnexion à une station d’accueil. Si les mesures semblent un jour avoir dérivé, la vérification de deux minutes par carte ci-dessus vous dira la vérité.',
        },
        { kind: 'h2', text: 'Foire aux questions' },
        { kind: 'h3', text: 'Quelle méthode d’étalonnage est la plus précise ?' },
        {
          kind: 'p',
          html: 'La méthode de la carte bancaire est généralement la plus précise, car elle étalonne contre un objet physique de taille connue et normalisée (85,60 mm de large) que vous posez contre l’écran. Le sélecteur d’appareil est tout aussi bon quand votre modèle exact est listé. L’auto-détection est un bon point de départ, et la méthode de la diagonale est plutôt un recours.',
        },
        { kind: 'h3', text: 'À quelle fréquence réétalonner ?' },
        {
          kind: 'p',
          html: 'Uniquement quand quelque chose change sur votre écran : un nouvel écran, un autre portable, un réglage de mise à l’échelle d’affichage du système modifié, ou une connexion/déconnexion à une station d’accueil. Votre étalonnage est enregistré dans le navigateur : au quotidien, vous n’avez jamais à y toucher.',
        },
        { kind: 'h3', text: 'L’étalonnage fonctionne-t-il sur un deuxième écran ?' },
        {
          kind: 'p',
          html: 'Chaque écran a besoin de son propre étalonnage, car la densité de pixels diffère d’un écran à l’autre. Étalonnez une fois par écran ; la valeur enregistrée s’applique à l’écran sur lequel se trouve la fenêtre du navigateur au moment de l’étalonnage. Si vous déplacez la fenêtre sur un autre écran, réétalonnez là-bas.',
        },
      ],
    },
    cm: {
      title: 'Règle centimétrique en ligne — Mesurez en cm à taille réelle | Real Online Ruler',
      description:
        'Une règle centimétrique gratuite à l’écran, à taille physique réelle. Étalonnez une fois, puis mesurez en cm et mm avec des marques centimétriques numérotées et des graduations millimétriques.',
      h1: 'Règle centimétrique',
      lede: 'Le centimètre est le cheval de bataille de la mesure métrique quotidienne — assez grand pour se lire d’un coup d’œil, assez fin pour la plupart des tâches domestiques. Étalonnez votre écran une fois, passez la règle en cm, et les marques numérotées de votre écran sont de vrais centimètres.',
      breadcrumb: 'Règle centimétrique',
      related: [
        { href: '/mm/', label: 'Règle millimétrique' },
        { href: '/inches/', label: 'Règle en pouces' },
        { href: '/guide/', label: 'Comment lire la règle' },
      ],
      faqs: [
        {
          q: 'Combien y a-t-il de millimètres dans un centimètre ?',
          a: 'Dix. Un centimètre est défini comme exactement 10 millimètres, et la règle à l’écran le montre directement : dix petits traits entre chaque paire de marques centimétriques numérotées.',
        },
        {
          q: 'Combien de pouces vaut un centimètre ?',
          a: 'Un centimètre vaut exactement 0,3937 pouce (un pouce est défini comme exactement 2,54 cm). Donc 10 cm valent environ 3,94 pouces — un peu moins de quatre pouces.',
        },
        {
          q: 'Quels objets du quotidien mesurent environ un centimètre ?',
          a: 'Un crayon standard mesure environ 0,7 cm de diamètre, un penny américain environ 1,9 cm de diamètre, et la largeur d’un doigt adulte vaut à peu près 1,5 à 2 cm. Un trombone mesure environ 3 cm de long et une carte bancaire 8,56 cm de large.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Qu’est-ce qu’un centimètre ?' },
        {
          kind: 'p',
          html: 'Un centimètre est un centième de mètre — environ la largeur d’un doigt adulte. Il se situe au point idéal de la mesure quotidienne : plus petit qu’un pouce (2,54 cm), plus grand que les unités submillimétriques délicates. La plupart du monde mesure la vie quotidienne en centimètres : tailles, formats de papier, meubles, diagonales d’écran.',
        },
        { kind: 'h2', text: 'Lire l’échelle des cm' },
        {
          kind: 'p',
          html: 'En mode cm, les <strong>longs traits numérotés sont des centimètres</strong> — 1, 2, 3, et ainsi de suite. Entre chaque paire se trouvent neuf traits plus courts : des <strong>millimètres</strong>. Le trait de longueur moyenne à mi-chemin est le demi-centimètre (5 mm). Un objet qui s’arrête au troisième petit trait après le 7 mesure 7,3 cm. Si vous voulez la valeur purement en millimètres, passez en <a href="/mm/">mode mm</a> et lisez directement 73 mm.',
        },
        { kind: 'h2', text: 'Repères de taille pratiques' },
        {
          kind: 'p',
          html: 'Des objets du quotidien, pour vérifier votre étalonnage ou estimer sans la règle :',
        },
        {
          kind: 'ul',
          items: [
            'Trombone standard — environ <strong>3 cm</strong> de long',
            'Pile AA — environ <strong>5 cm</strong> de long',
            'Carte bancaire — <strong>8,56 cm</strong> de large (une norme exacte, idéale pour vérifier l’étalonnage)',
            'Penny américain — environ <strong>1,9 cm</strong> de diamètre',
            'Largeur d’un smartphone — typiquement <strong>7–8 cm</strong>',
          ],
        },
        { kind: 'h2', text: 'Conversions' },
        {
          kind: 'table',
          head: ['De', 'Vers', 'Multiplier par'],
          rows: [
            ['cm', 'mm', '10'],
            ['cm', 'm', '0.01'],
            ['cm', 'pouces', '0.3937'],
            ['pouces', 'cm', '2.54 (exact)'],
          ],
        },
        {
          kind: 'p',
          html: 'La conversion en pouces est exacte par définition — un pouce est <em>défini</em> comme 2,54 cm — passer la règle des cm aux <a href="/inches/">pouces</a> n’introduit donc jamais d’erreur d’arrondi dans la position des graduations.',
        },
        { kind: 'h2', text: 'Foire aux questions' },
        { kind: 'h3', text: 'Combien y a-t-il de millimètres dans un centimètre ?' },
        {
          kind: 'p',
          html: 'Dix. Un centimètre est défini comme exactement 10 millimètres, et la règle à l’écran le montre directement : dix petits traits entre chaque paire de marques centimétriques numérotées.',
        },
        { kind: 'h3', text: 'Combien de pouces vaut un centimètre ?' },
        {
          kind: 'p',
          html: 'Un centimètre vaut exactement 0,3937 pouce (un pouce est défini comme exactement 2,54 cm). Donc 10 cm valent environ 3,94 pouces — un peu moins de quatre pouces.',
        },
        { kind: 'h3', text: 'Quels objets du quotidien mesurent environ un centimètre ?' },
        {
          kind: 'p',
          html: 'Un crayon standard mesure environ 0,7 cm de diamètre, un penny américain environ 1,9 cm de diamètre, et la largeur d’un doigt adulte vaut à peu près 1,5 à 2 cm. Un trombone mesure environ 3 cm de long et une carte bancaire 8,56 cm de large.',
        },
      ],
    },
    inches: {
      title: 'Règle en pouces en ligne — Mesurez en pouces à taille réelle | Real Online Ruler',
      description:
        'Une règle en pouces gratuite à l’écran, à taille physique réelle, avec fractions jusqu’au 1/16 de pouce. Étalonnez une fois, puis mesurez en pouces entiers et fractionnaires.',
      h1: 'Règle en pouces',
      lede: 'Le pouce reste l’unité quotidienne aux États-Unis — pour le travail du bois, la couture, la quincaillerie et tout ce qui se vend au pied. Étalonnez votre écran une fois, passez la règle en pouces, et lisez des pouces entiers plus des fractions jusqu’au seizième.',
      breadcrumb: 'Règle en pouces',
      related: [
        { href: '/cm/', label: 'Règle centimétrique' },
        { href: '/mm/', label: 'Règle millimétrique' },
        { href: '/guide/', label: 'Comment lire la règle' },
      ],
      faqs: [
        {
          q: 'Combien y a-t-il de seizièmes dans un pouce ?',
          a: 'Seize. La règle en pouces à l’écran divise chaque pouce en 16 traits égaux. Le 8ᵉ trait est le demi-pouce, les 4ᵉ et 12ᵉ sont les quarts de pouce, et les huitièmes impairs (2ᵉ, 6ᵉ, 10ᵉ, 14ᵉ) sont les marques de huitièmes de pouce.',
        },
        {
          q: 'Combien de centimètres vaut un pouce ?',
          a: 'Exactement 2,54 centimètres, par définition internationale. Cela fait environ 0,3937 pouce pour un centimètre.',
        },
        {
          q: 'Pourquoi les règles utilisent-elles des fractions plutôt que des décimales ?',
          a: 'Tradition et divisibilité. Les demis, quarts et huitièmes viennent de la division répétée d’un pouce par deux, facile à faire physiquement et à lire à l’œil. Les pouces décimaux existent aussi — les mécaniciens utilisent les millièmes — mais les pouces fractionnaires restent la norme de la mesure américaine quotidienne.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Qu’est-ce qu’un pouce ?' },
        {
          kind: 'p',
          html: 'Un pouce est une unité américaine (impériale) définie comme <strong>exactement 2,54 centimètres</strong>. Douze pouces font un pied, 36 font un yard. Contrairement aux unités métriques, les pouces se lisent traditionnellement en <strong>fractions</strong> — demis, quarts, huitièmes, seizièmes — plutôt qu’en décimales, et la règle à l’écran est dessinée exactement ainsi.',
        },
        { kind: 'h2', text: 'Lire l’échelle des pouces' },
        {
          kind: 'p',
          html: 'Les traits numérotés sont des pouces entiers. Entre eux, <strong>la longueur du trait code la fraction</strong> — plus le trait est long, plus la fraction est simple :',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Trait non numéroté le plus long</strong> — le demi-pouce (½ po), un par pouce.',
            '<strong>Les suivants</strong> — quarts de pouce (¼ po, ¾ po).',
            '<strong>Traits moyens</strong> — huitièmes de pouce (⅛ po, ⅜ po, ⅝ po, ⅞ po).',
            '<strong>Traits les plus courts</strong> — seizièmes (1/16 po … 15/16 po).',
          ],
        },
        {
          kind: 'p',
          html: 'Lisez à partir du pouce numéroté sous l’extrémité de l’objet et comptez vers l’avant. Deux traits moyens après la marque des 3 po valent 3 et 2/8 — simplifiez en <strong>3¼ po</strong>. Cinq des traits les plus courts après le 1 po valent 1 et 5/16 de pouce. La méthode de lecture complète, avec exemples détaillés, est dans le <a href="/guide/">guide de lecture</a>.',
        },
        { kind: 'h2', text: 'Fractions ↔ décimales ↔ métrique' },
        {
          kind: 'table',
          head: ['Fraction', 'Décimal (po)', 'Métrique'],
          rows: [
            ['1/16″', '0.0625', '1.59 mm'],
            ['⅛″', '0.125', '3.18 mm'],
            ['¼″', '0.25', '6.35 mm'],
            ['½″', '0.5', '12.7 mm'],
            ['1″', '1.0', '25.4 mm (exact)'],
          ],
        },
        { kind: 'h2', text: 'Quand les pouces battent le métrique' },
        {
          kind: 'p',
          html: 'Si la chose que vous mesurez a été <em>fabriquée</em> en pouces — dimensions de bois de charpente, tailles de vis, raccords de tuyauterie, patrons de couture américains — mesurez en pouces et sautez la conversion. Un montant « 2×4 », un boulon de ¼ po ou un moule à gâteau de 9 po ont des nombres ronds en pouces et biscornus en métrique. Accordez la règle à l’unité d’origine de l’objet et les nombres restent sympathiques.',
        },
        { kind: 'h2', text: 'Foire aux questions' },
        { kind: 'h3', text: 'Combien y a-t-il de seizièmes dans un pouce ?' },
        {
          kind: 'p',
          html: 'Seize. La règle en pouces à l’écran divise chaque pouce en 16 traits égaux. Le 8ᵉ trait est le demi-pouce, les 4ᵉ et 12ᵉ sont les quarts de pouce, et les 2ᵉ, 6ᵉ, 10ᵉ et 14ᵉ sont les marques de huitièmes de pouce.',
        },
        { kind: 'h3', text: 'Combien de centimètres vaut un pouce ?' },
        {
          kind: 'p',
          html: 'Exactement 2,54 centimètres, par définition internationale. Un centimètre vaut environ 0,3937 pouce.',
        },
        {
          kind: 'h3',
          text: 'Pourquoi les règles utilisent-elles des fractions plutôt que des décimales ?',
        },
        {
          kind: 'p',
          html: 'Tradition et divisibilité. Les demis, quarts et huitièmes viennent de la division répétée d’un pouce par deux, facile à faire physiquement et à lire à l’œil. Les pouces décimaux existent aussi — les mécaniciens travaillent en millièmes — mais les pouces fractionnaires restent la norme de la mesure américaine quotidienne.',
        },
      ],
    },
    mm: {
      title: 'Règle millimétrique en ligne — Mesurez en mm à taille réelle | Real Online Ruler',
      description:
        'Une règle millimétrique gratuite à l’écran, à taille physique réelle. Étalonnez une fois, puis lisez des mesures millimétriques précises avec des marques de 10 mm étiquetées.',
      h1: 'Règle millimétrique',
      lede: 'Quand les centimètres sont trop grossiers, les millimètres prennent le relais — un dixième de centimètre, assez petit pour les vis, les jeux et les tailles de bagues. Étalonnez une fois, passez en mm, et chaque petit trait de votre écran est un vrai millimètre.',
      breadcrumb: 'Règle millimétrique',
      related: [
        { href: '/cm/', label: 'Règle centimétrique' },
        { href: '/inches/', label: 'Règle en pouces' },
        { href: '/guide/', label: 'Comment lire la règle' },
      ],
      faqs: [
        {
          q: 'Quelle est la taille d’un millimètre ?',
          a: 'Un millimètre est un millième de mètre — à peu près l’épaisseur d’une carte bancaire (0,76 mm) ou un peu moins de la moitié de l’épaisseur d’un dime américain (1,35 mm). C’est la plus petite unité que la plupart des gens mesurent à l’œil.',
        },
        {
          q: 'Dois-je utiliser le mode mm ou le mode cm ?',
          a: 'Ils montrent la même échelle avec des étiquettes différentes. Utilisez le mode mm quand vous voulez un seul nombre précis comme 47 mm ; utilisez le mode cm quand vous pensez en centimètres comme 4,7 cm. Pour tout ce qui fait moins d’environ 5 cm, le mode mm est généralement plus facile à lire.',
        },
        {
          q: 'Quelle est la précision de l’échelle millimétrique à l’écran ?',
          a: 'Aussi précise que votre étalonnage. Avec la méthode de la carte bancaire, attendez-vous à une précision d’environ un demi-millimètre sur un écran typique. Pour les travaux submillimétriques — bijouterie, électronique — utilisez de vrais pieds à coulisse ; une règle à l’écran est une vérification rapide, pas un instrument de métrologie.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Qu’est-ce qu’un millimètre ?' },
        {
          kind: 'p',
          html: 'Un millimètre est un millième de mètre et un dixième de centimètre — la plus petite unité que la plupart des gens mesurent confortablement à l’œil. Tout ce qui est plus fin qu’un millimètre (le papier fait environ 0,1 mm) relève des pieds à coulisse et des micromètres ; tout ce qui va d’environ 1 mm à quelques centimètres est territoire des millimètres.',
        },
        { kind: 'h2', text: 'Lire l’échelle des mm' },
        {
          kind: 'p',
          html: 'En mode mm, <strong>chaque petit trait vaut un millimètre</strong> et les longs traits numérotés arrivent tous les 10 mm, étiquetés 10, 20, 30… Lisez la marque numérotée sous l’extrémité de l’objet, puis comptez les petits traits au-delà : quatre traits après le 40 valent <strong>44 mm</strong>. Le trait de longueur moyenne à chaque 5 est le demi-centimètre — un repère pratique pour compter.',
        },
        {
          kind: 'p',
          html: 'L’échelle est identique au <a href="/cm/">mode cm</a> ; seules les étiquettes diffèrent. Basculez librement — 44 mm et 4,4 cm sont la même marque.',
        },
        { kind: 'h2', text: 'Repères de taille pratiques' },
        {
          kind: 'ul',
          items: [
            'Épaisseur d’une carte bancaire — <strong>0,76 mm</strong> (une norme exacte)',
            'Épaisseur d’un dime américain — environ <strong>1,35 mm</strong>',
            'Épaisseur d’une carte SD — environ <strong>2,1 mm</strong>',
            'Diamètre d’un crayon standard — environ <strong>7 mm</strong>',
            'Diamètre d’un quarter américain — <strong>24,26 mm</strong>',
          ],
        },
        { kind: 'h2', text: 'Conversions' },
        {
          kind: 'table',
          head: ['De', 'Vers', 'Multiplier par'],
          rows: [
            ['mm', 'cm', '0.1'],
            ['mm', 'm', '0.001'],
            ['mm', 'pouces', '0.03937'],
            ['pouces', 'mm', '25.4 (exact)'],
          ],
        },
        { kind: 'h2', text: 'Obtenir des résultats précis' },
        {
          kind: 'ul',
          items: [
            '<strong>Étalonnez avec la méthode de la carte.</strong> La précision au millimètre vit ou meurt de l’étalonnage — la méthode de la carte physique est la plus précise.',
            '<strong>Mettez la page à 100 % de zoom et laissez-la là.</strong> Tout zoom redimensionne les graduations.',
            '<strong>Utilisez des repères pour les petits objets.</strong> Placez un repère à chaque extrémité de l’objet et soustrayez les indications — plus stable que de viser un trait à l’œil.',
            '<strong>Regardez bien de face.</strong> La parallaxe sous un angle peut déplacer un bord apparent d’un millimètre ou plus.',
          ],
        },
        { kind: 'h2', text: 'Foire aux questions' },
        { kind: 'h3', text: 'Quelle est la taille d’un millimètre ?' },
        {
          kind: 'p',
          html: 'Un millimètre est un millième de mètre — à peu près l’épaisseur d’une carte bancaire (0,76 mm) ou un peu moins de la moitié de l’épaisseur d’un dime américain (1,35 mm). C’est la plus petite unité que la plupart des gens mesurent à l’œil.',
        },
        { kind: 'h3', text: 'Dois-je utiliser le mode mm ou le mode cm ?' },
        {
          kind: 'p',
          html: 'Ils montrent la même échelle avec des étiquettes différentes. Utilisez le mode mm quand vous voulez un seul nombre précis comme 47 mm ; utilisez le mode cm quand vous pensez en centimètres comme 4,7 cm. Pour tout ce qui fait moins d’environ 5 cm, le mode mm est généralement plus facile à lire.',
        },
        { kind: 'h3', text: 'Quelle est la précision de l’échelle millimétrique à l’écran ?' },
        {
          kind: 'p',
          html: 'Aussi précise que votre étalonnage. Avec la méthode de la carte bancaire, attendez-vous à une précision d’environ un demi-millimètre sur un écran typique. Pour les travaux submillimétriques — bijouterie, électronique — utilisez de vrais pieds à coulisse ; une règle à l’écran est une vérification rapide, pas un instrument de métrologie.',
        },
      ],
    },
    pixels: {
      title: 'Règle en pixels en ligne — Mesurez en pixels CSS | Real Online Ruler',
      description:
        'Une règle en pixels gratuite à l’écran pour les designers : mesurez en pixels CSS avec des graduations de 10 px et des marques numérotées tous les 100 px. Aucun étalonnage nécessaire — les pixels sont la propre unité du navigateur.',
      h1: 'Règle en pixels',
      lede: 'Les pixels sont l’unité des designers — le langage des maquettes, des boutons et des points de rupture. La règle en px compte les propres pixels CSS de votre navigateur : aucun étalonnage n’est nécessaire. Passez en mode px et mesurez tout ce qui est sur la page dans les mêmes unités que votre feuille de style.',
      breadcrumb: 'Règle en pixels',
      related: [
        { href: '/cm/', label: 'Règle centimétrique' },
        { href: '/inches/', label: 'Règle en pouces' },
        { href: '/guide/', label: 'Comment lire la règle' },
      ],
      faqs: [
        {
          q: 'Quelle est la taille d’un pixel dans la vraie vie ?',
          a: 'Il n’y a pas de réponse fixe. Un pixel CSS n’a pas de taille physique — il ne vaut 1/96ᵉ de pouce que par convention pour l’impression. Sur votre écran, sa taille physique dépend de la densité de l’écran : c’est exactement pourquoi la règle a besoin d’un étalonnage pour les unités physiques, mais pas pour le mode pixels.',
        },
        {
          q: 'La règle en pixels a-t-elle besoin d’un étalonnage ?',
          a: 'Non. Le mode pixels compte les propres pixels CSS du navigateur, que la page connaît exactement sans aucune mesure physique. L’étalonnage ne compte que pour les cm, mm et pouces — les unités qui ont des tailles réelles.',
        },
        {
          q: 'Qu’est-ce que le rapport de pixels de l’appareil (DPR) ?',
          a: 'Le nombre de pixels physiques d’écran utilisés pour dessiner un pixel CSS. Un DPR de 2 (un écran Retina) entasse quatre pixels physiques dans chaque pixel CSS pour un rendu plus net. Le mode pixels de la règle affiche toujours des pixels CSS, ceux avec lesquels travaillent les web designers.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Qu’est-ce qu’un pixel CSS ?' },
        {
          kind: 'p',
          html: 'Un pixel CSS est l’unité abstraite du navigateur — le <code>px</code> de votre feuille de style. Il n’est délibérément <em>pas</em> une taille physique : sur un écran standard, un pixel CSS correspond à un pixel physique, tandis que sur un écran haute densité (« Retina »), plusieurs pixels physiques s’associent pour dessiner un seul pixel CSS plus nettement. Le rapport est le <strong>rapport de pixels de l’appareil (DPR)</strong>. Le web design se fait en pixels CSS, et c’est exactement ce que compte cette règle.',
        },
        { kind: 'h2', text: 'Lire l’échelle des px' },
        {
          kind: 'p',
          html: 'En mode px, les petits traits arrivent tous les <strong>10 px</strong>, les traits moyens tous les 50 px, et les marques numérotées tous les <strong>100 px</strong>. Pour mesurer un bouton : alignez son bord gauche avec le zéro et lisez où tombe le bord droit — disons, juste après 120, soit environ 124 px de large. Pour un travail exact, placez des <a href="/guide/">repères</a> aux deux bords et soustrayez leurs indications.',
        },
        { kind: 'h2', text: 'Pourquoi le mode px n’a besoin d’aucun étalonnage' },
        {
          kind: 'p',
          html: 'L’étalonnage répond à une question physique : « combien de pixels CSS valent un pouce réel sur cet écran ? » Le mode pixels ne pose jamais cette question — il compte simplement les propres unités du navigateur, que la page connaît exactement. C’est aussi pourquoi les mesures en px n’ont aucun sens comme tailles physiques : 100 px valent un nombre différent de millimètres sur chaque écran. Utilisez les px pour le design, et les cm/mm/pouces (après <a href="/how-to-calibrate/">étalonnage</a>) pour le monde physique.',
        },
        { kind: 'h2', text: 'Pixels et points d’impression' },
        {
          kind: 'p',
          html: 'Vous verrez parfois « 1 px = 1/96 de pouce ». C’est une convention <em>d’impression</em> issue du CSS, utilisée pour que les feuilles de style puissent convertir en unités physiques sur papier — elle ne dit rien de votre écran. À l’écran, la seule affirmation honnête est : un pixel CSS est aussi grand que la densité de l’écran le rend, et la règle étalonnée est la façon de le savoir.',
        },
        { kind: 'h2', text: 'Repères pratiques en pixels' },
        {
          kind: 'ul',
          items: [
            'Texte courant typique (16 px), hauteur de capitale — environ <strong>11 px</strong>',
            'Hauteur de bouton courante — <strong>36–48 px</strong>',
            'Favicon — <strong>16 × 16 px</strong>',
            'Largeur de fenêtre Full HD — <strong>1920 px</strong> (px CSS, quel que soit le DPR)',
          ],
        },
        { kind: 'h2', text: 'Foire aux questions' },
        { kind: 'h3', text: 'Quelle est la taille d’un pixel dans la vraie vie ?' },
        {
          kind: 'p',
          html: 'Il n’y a pas de réponse fixe. Un pixel CSS n’a pas de taille physique — il ne vaut 1/96ᵉ de pouce que par convention pour l’impression. Sur votre écran, sa taille physique dépend de la densité de l’écran : c’est exactement pourquoi la règle a besoin d’un étalonnage pour les unités physiques, mais pas pour le mode pixels.',
        },
        { kind: 'h3', text: 'La règle en pixels a-t-elle besoin d’un étalonnage ?' },
        {
          kind: 'p',
          html: 'Non. Le mode pixels compte les propres pixels CSS du navigateur, que la page connaît exactement sans aucune mesure physique. L’étalonnage ne compte que pour les cm, mm et pouces — les unités qui ont des tailles réelles.',
        },
        { kind: 'h3', text: 'Qu’est-ce que le rapport de pixels de l’appareil (DPR) ?' },
        {
          kind: 'p',
          html: 'Le nombre de pixels physiques d’écran utilisés pour dessiner un pixel CSS. Un DPR de 2 (un écran Retina) entasse quatre pixels physiques dans chaque pixel CSS pour un rendu plus net. Le mode pixels de la règle affiche toujours des pixels CSS, ceux avec lesquels travaillent les web designers.',
        },
      ],
    },
  },
};
