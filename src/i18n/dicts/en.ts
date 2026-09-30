/**
 * en.ts — the English (source) UI dictionary for Phase 8 i18n.
 *
 * Every user-visible chrome/app string lives here. Locale dictionaries
 * (es/fr/pt/zh/id) must be natural, native-quality translations of this file —
 * not word-by-word renderings. Keep the brand name "Real Online Ruler" and
 * technical tokens (px, CSV, TXT, 3×, keyboard letters, {placeholders})
 * untranslated. Placeholders like {name} are filled at runtime — keep them
 * intact, you may reorder them to fit your language's grammar.
 *
 * The Dict type is `typeof en`; missing or extra keys fail compilation.
 */

export const en = {
  skipToContent: 'Skip to content',

  header: {
    navAria: 'Primary',
    navMobileAria: 'Primary mobile',
    nav: [
      { label: 'Home', href: '/' },
      { label: 'How to calibrate', href: '/#calibration' },
      { label: 'Guide', href: '/#guide' },
      { label: 'FAQ', href: '/#faq' },
    ],
    wordmarkAria: 'Real Online Ruler — home',
    themeAria: 'Toggle dark mode',
    themeTitle: 'Toggle dark / light mode (D)',
    themeSr: 'Toggle theme',
    languageAria: 'Language',
  },

  footer: {
    tagline:
      'A free, no-signup measuring tool that turns your screen into a ruler at true physical size — in centimeters, millimeters, inches, and pixels.',
    explore: 'Explore',
    exploreLinks: [
      { label: 'Home', href: '/' },
      { label: 'How to calibrate', href: '/#calibration' },
      { label: 'Reading guide', href: '/#guide' },
      { label: 'FAQ', href: '/#faq' },
    ],
    rulerGuides: 'Ruler guides',
    guideLinks: [
      { label: 'How to calibrate', href: '/how-to-calibrate/' },
      { label: 'Reading the ruler', href: '/guide/' },
      { label: 'Centimeter ruler', href: '/cm/' },
      { label: 'Inch ruler', href: '/inches/' },
      { label: 'Millimeter ruler', href: '/mm/' },
      { label: 'Pixel ruler', href: '/pixels/' },
    ],
    accuracyTitle: 'Accuracy note',
    accuracyBody:
      'On-screen measurements are only as accurate as your calibration. Calibrate once for your display, keep browser zoom at 100%, and the ruler stays true on every visit.',
    copyright: '© {year} Real Online Ruler. Free for everyone — no account, no download.',
  },

  layout: {
    breadcrumbHome: 'Home',
    breadcrumbAria: 'Breadcrumb',
    keepReading: 'Keep reading',
    relatedAria: 'Related pages',
    ctaTitle: 'Try it on your screen right now',
    ctaBody: 'The live ruler is on the home page — calibrated to your display in under a minute.',
    ctaButton: 'Open the ruler',
  },

  toolbar: {
    unitGroup: 'Measurement unit',
    edgeGroup: 'Ruler edges',
    edgeTop: 'Top',
    edgeBottom: 'Bottom',
    edgeLeft: 'Left',
    edgeRight: 'Right',
    precisionGroup: 'Precision tools',
    guides: 'Guides',
    guidesTitle: 'Toggle guide lines (G)',
    crosshair: 'Crosshair',
    crosshairTitle: 'Toggle crosshair (C)',
    orientGroup: 'New guide orientation',
    orientHTitle: 'New guides are horizontal',
    orientVTitle: 'New guides are vertical',
    fullscreen: 'Fullscreen',
    fullscreenTitle: 'Fullscreen (F)',
    theme: 'Theme',
    themeTitle: 'Toggle theme (D)',
    calibrate: 'Calibrate',
    calibrateTitle: 'Calibrate display',
    advanced: 'Advanced',
    advancedGroup: 'Advanced measuring tools',
    measure: 'Measure',
    measureTitle: 'Drag on the canvas to measure distance and angle (M)',
    protractor: 'Protractor',
    protractorTitle: 'Protractor overlay (P)',
    loupe: 'Loupe',
    loupeTitle: 'Magnifier loupe (L)',
    ruler: 'Ruler',
    rulerTitle: 'Floating rotatable ruler (R)',
    log: 'Log',
    logTitle: 'Measurement log (O)',
    grid: 'Grid',
    gridTitle: 'Grid overlay (N)',
    gridUnit: 'Grid unit',
    gridUnitAria: 'Grid cell unit',
    gridCm: 'cm',
    gridInch: 'inch',
    help: '? Shortcuts',
    helpTitle: 'Keyboard shortcuts (H)',
  },

  stage: {
    aria: 'Measuring area',
    hint: 'Toggle the edges above to frame this area with rulers. Hold a small object against a ruler’s highlighted measuring edge and read its size.',
    guidesHint:
      'With Guides on, click anywhere here to drop a guide line; drag a line to move it, double-click it to remove it, Esc clears all guides.',
    guideAt: 'Guide at {value}',
  },

  status: {
    loading: 'Loading calibration…',
    uncalibrated: 'Uncalibrated — using the 96 px/in CSS default.',
    calibrateNow: 'Calibrate now',
    calibrated: '{px} px/in · calibrated via {what}.',
    zoomNote: 'Keep browser zoom at 100% — zooming rescales the ruler.',
    shortcutHint: 'Press {key} for the full keyboard shortcut map.',
  },

  measure: {
    popupAria: 'Save measurement',
    save: 'Save to log',
    discard: 'Discard',
  },

  protractor: {
    aria: 'Protractor overlay: drag the center to move, the amber handle to rotate, the teal and amber arm handles to measure an angle',
    moveArmA: 'Drag to move arm A',
    moveArmB: 'Drag to move arm B',
    rotate: 'Drag to rotate the protractor',
    move: 'Drag to move the protractor',
    caption: 'center moves · ring rotates',
  },

  floatingRuler: {
    aria: 'Floating ruler: drag the body to move, the handle at the right end to rotate',
    rotateTitle: 'Drag to rotate',
  },

  log: {
    panelAria: 'Measurement log',
    title: 'Measurement log',
    close: 'Close',
    closeAria: 'Close measurement log',
    empty: 'No measurements yet. Turn on Measure ({key}), drag across the canvas, then Save.',
    labelAria: 'Measurement label',
    copy: 'Copy',
    delete: 'Delete',
    copyAll: 'Copy all',
    csv: 'CSV',
    txt: 'TXT',
    clear: 'Clear',
    copied: 'Copied',
    failed: 'Failed',
  },

  help: {
    title: 'Keyboard shortcuts',
    close: 'Close',
    rows: [
      { keys: ['1', '2', '3', '4'], label: 'Units: cm, in, mm, px' },
      { keys: ['G'], label: 'Toggle guide lines' },
      { keys: ['C'], label: 'Toggle crosshair' },
      { keys: ['F'], label: 'Fullscreen' },
      { keys: ['D'], label: 'Toggle theme' },
      { keys: ['M'], label: 'Drag-to-measure tool' },
      { keys: ['P'], label: 'Protractor overlay' },
      { keys: ['L'], label: 'Magnifier loupe (3×)' },
      { keys: ['R'], label: 'Floating ruler' },
      { keys: ['O'], label: 'Measurement log' },
      { keys: ['N'], label: 'Grid overlay' },
      { keys: ['H'], label: 'This shortcut help' },
      { keys: ['Esc'], label: 'Cancel drawing / close / clear guides' },
    ],
  },

  calibrate: {
    title: 'Calibrate your display',
    currentLabel: 'Current:',
    defaultReadout: '96 px/in (default)',
    saved: 'Saved',
    closeAria: 'Close calibration dialog',
    tablistAria: 'Calibration methods',
    tabs: {
      auto: 'Auto-detect',
      device: 'Pick device',
      diagonal: 'Screen diagonal',
      card: 'Credit card',
    },
    autoBody:
      'We look at your browser and screen resolution, match them against a built-in database of published display specs, and apply the factory pixel density. Fastest option when it finds your device.',
    detectButton: 'Detect my device',
    deviceBody:
      'Know your exact model? Select it below — we apply its published pixel density, adjusted for your display scaling.',
    categoryLabel: 'Category',
    deviceLabel: 'Device',
    diagonalBody:
      'Type your screen’s diagonal size in inches (it’s usually on the box or the manufacturer’s spec page — e.g. 15.6 for a typical laptop). We combine it with your screen resolution to compute the exact density. Keep browser zoom at 100%.',
    diagonalLabel: 'Diagonal (inches)',
    calculate: 'Calculate',
    cardBody:
      'Place any credit card, debit card, or ID card flat against your screen, on top of the outline below. Drag the slider until the outline matches the card’s edges exactly, then use the calibration. Standard cards are 85.60 × 53.98 mm.',
    cardSize: '85.60 × 53.98 mm',
    assumedDensity: 'Assumed density',
    useCalibration: 'Use this calibration',
    footerNote:
      'Saved in this browser only. Re-calibrate if you change monitors or display scaling.',
    reset: 'Reset to 96 PPI',
    methods: {
      auto: 'auto-detect',
      device: 'device pick',
      diagonal: 'screen diagonal',
      card: 'credit card',
      default: 'default',
    },
    autoDetected: 'Detected:',
    factoryPpi: '{ppi} PPI factory',
    highConfidence: 'High confidence — exact model match.',
    mediumConfidence:
      'Medium confidence — matched a display shared by similar models (same density).',
    computedAtScaling: 'Computed density at your display scaling: <strong>{px} px/in</strong>',
    pxPerInch: 'px/in',
    recognizedAs:
      'We recognize this as a <strong>{category}</strong> display, but could not pin down the exact model.',
    notRecognized: 'We could not recognize this device from your browser information.',
    tryTabs:
      'Try the <strong>{a}</strong>, <strong>{b}</strong>, or <strong>{c}</strong> tab instead.',
    factoryWord: 'factory',
    atScaling: 'At your current display scaling (×{dpr}): <strong>{px} px/in</strong>',
    invalidDiagonal: 'Please enter a valid diagonal in inches.',
    screenIs: 'Screen: {w} × {h} px, diagonal {d} in',
    computedDensity: 'Computed density: <strong>{px} px/in</strong>',
    diagonalDeviceName: '{d} in diagonal',
    cardDeviceName: '85.60 × 53.98 mm card',
  },

  notFound: {
    title: 'Page not found — Real Online Ruler',
    description: 'The page you were looking for does not exist on Real Online Ruler.',
    heading: 'This mark isn’t on the ruler',
    body: 'The page you asked for doesn’t exist. Let’s get you back to measuring.',
    cta: 'Back to the ruler',
  },

  home: {
    title: 'Real Online Ruler — Free Actual-Size Screen Ruler (cm, mm, Inches, Pixels)',
    description:
      'Turn your screen into a real ruler. Calibrate once for your display, then measure small objects in centimeters, millimeters, inches, or pixels — free, no signup, no download.',
    badge: 'Free · No signup · No download',
    h1Before: 'Your screen, turned into a ',
    h1Emphasis: 'real ruler',
    h1After: '.',
    lede: 'Calibrate once for your display and this page becomes a measuring tool at true physical size. Hold a coin, a screw, or a swatch against the edge and read it in centimeters, millimeters, inches, or pixels.',
    openRuler: 'Open the ruler',
    howCalibration: 'How calibration works',
    tip: 'Tip: keep browser zoom at 100% while measuring.',
    workspaceAria: 'Ruler workspace',
    featuresAria: 'Features',
    featuresTitle: 'One page, a full measuring bench',
    featuresLede:
      'Calibrate once, then measure anything on your screen — here is what the page can do.',
    features: [
      {
        icon: '◎',
        name: 'Calibrate four ways',
        body: 'Auto-detect your device, pick it from a list, enter your screen diagonal, or match a credit card on screen. One calibration makes every measurement true to size.',
      },
      {
        icon: '▦',
        name: 'Rulers on all four edges',
        body: 'Pin a ruler to the top, bottom, left, or right edge — or all four at once — and frame anything on your screen inside a live measuring grid.',
      },
      {
        icon: '⇄',
        name: 'cm, mm, inches & pixels',
        body: 'Switch units instantly: metric ticks down to the millimeter, fractional inch marks, or raw CSS pixels for design work. Keyboard shortcuts included.',
      },
      {
        icon: '┼',
        name: 'Guide lines',
        body: 'Drop horizontal and vertical reference lines anywhere, drag them into place, and read distances between them in your current unit.',
      },
      {
        icon: '✛',
        name: 'Crosshair coordinates',
        body: 'A live crosshair follows your cursor and reports its exact X/Y position in the active unit — handy for layouts and alignment checks.',
      },
      {
        icon: '◈',
        name: 'Fullscreen & dark mode',
        body: 'Expand to the full display for edge-to-edge measuring, and switch between light and dark themes. Your preferences are remembered.',
      },
    ],
    calibrationAria: 'How calibration works',
    calibrationTitle: 'How calibration works',
    calibrationParas: [
      'Every screen packs a different number of physical pixels into each inch — a phone might hold 460, a desktop monitor closer to 100. Your browser, however, draws the page in <em>CSS pixels</em>, and it never tells websites their true physical size.',
      'Calibration closes that gap. You give the page one trustworthy reference — your device model, your screen’s diagonal, or a credit card held against the display — and it computes exactly how many CSS pixels equal one real inch. From that single number, every tick mark on every ruler is placed at its true position.',
    ],
    methods: [
      {
        name: 'Auto-detect',
        body: 'We match your device against a built-in display database and apply its factory pixel density.',
      },
      {
        name: 'Pick your device',
        body: 'Browse iPhone, iPad, MacBook, Android, and monitor entries and select your exact model.',
      },
      {
        name: 'Screen diagonal',
        body: 'Type your screen’s diagonal in inches; we derive the density from your resolution.',
      },
      {
        name: 'Credit card',
        body: 'Hold any bank card to the screen and drag a slider until the on-screen outline matches it.',
      },
    ],
    liveNote:
      'The interactive calibration panel is live — open it from the ruler workspace above to calibrate with auto-detect, device pick, screen diagonal, or the credit-card method.',
    guideAria: 'Reading guide',
    guideTitle: 'How to read the ruler',
    units: [
      {
        name: 'Centimeters',
        body: 'Each numbered line is one centimeter. The ten small ticks between numbers are millimeters — so the 4th small tick past 7 is 7.4 cm.',
      },
      {
        name: 'Inches',
        body: 'Numbered lines are whole inches. Between them, the longest unticked line is ½″, then ¼″ and ¾″, then eighths — just like a wooden ruler.',
      },
      {
        name: 'Pixels',
        body: 'Pixel mode counts raw CSS pixels from zero — the unit designers use for spacing, type sizes, and element dimensions on screen.',
      },
    ],
    guideLinksIntro: 'For the full treatment, see the dedicated guides:',
    guideLinks: [
      { href: '/guide/', label: 'Reading the ruler' },
      { href: '/cm/', label: 'Centimeter ruler' },
      { href: '/inches/', label: 'Inch ruler' },
      { href: '/mm/', label: 'Millimeter ruler' },
      { href: '/pixels/', label: 'Pixel ruler' },
    ],
    faqAria: 'Frequently asked questions',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'Can a screen ruler really be accurate?',
        a: 'Yes — but only after calibration. Your browser draws in CSS pixels, which have no fixed physical size. Calibration teaches the page how many CSS pixels make one real inch on your specific display. Once that number is known, every tick mark lands at its true physical position.',
      },
      {
        q: 'Why do I need to calibrate? Can’t the site just know my screen size?',
        a: 'Browsers deliberately hide your exact physical pixel density for privacy, so no website can measure your screen directly. The site starts from the web-standard guess of 96 pixels per inch; the four calibration methods replace that guess with your display’s real number.',
      },
      {
        q: 'Do I have to calibrate on every visit?',
        a: 'No. Your calibration is saved in your browser and reloaded automatically. Re-calibrate only if you switch monitors, change your display scaling, or notice measurements drifting.',
      },
      {
        q: 'Does browser zoom change the measurements?',
        a: 'Yes. Zooming rescales CSS pixels, so a ruler calibrated at 100% zoom will read wrong at 110%. Keep your browser zoom at 100% while measuring — the app reminds you of this.',
      },
      {
        q: 'What can I actually measure with it?',
        a: 'Anything small enough to hold against your screen: coins, screws, earring backs, SD cards, printed swatches, ring sizes. The longest straight measurement is your screen’s width or height.',
      },
      {
        q: 'Does it work on phones and tablets?',
        a: 'Yes. Open the page in any mobile browser, calibrate with your device model or the credit-card method, and the phone screen becomes a pocket ruler — surprisingly handy for quick checks.',
      },
      {
        q: 'Is my calibration data private?',
        a: 'Completely. Your calibration is stored only in your own browser’s local storage — it is never uploaded, and there is no account to tie it to. Clearing your browser data removes it.',
      },
      {
        q: 'Can I measure something bigger than my screen?',
        a: 'In sections. Measure the first screen-width, drop a guide at the end point, slide the object along, and add up the segments. The guides keep your place so the segments line up.',
      },
      {
        q: 'Why does the ruler look wrong on my second monitor?',
        a: 'Each display has its own pixel density, so a calibration done on your laptop does not transfer to an external monitor. Calibrate once per display, with the browser window on the display you are calibrating.',
      },
      {
        q: 'Which calibration method should I choose?',
        a: 'The credit-card method is the most accurate for most people, because it calibrates against a physical object of a known standard size (85.60 mm). The device picker is equally good when your exact model is listed; auto-detect is the fastest starting point.',
      },
      {
        q: 'Do I need to calibrate for the pixel ruler?',
        a: 'No. Pixel mode counts the browser’s own CSS pixels, which the page knows exactly — calibration only matters for physical units (cm, mm, inches). The trade-off is that pixel readings have no fixed real-world size.',
      },
      {
        q: 'Does it work in fullscreen?',
        a: 'Yes — press F or the Fullscreen button in the toolbar. Fullscreen gives you the longest possible ruler and removes browser chrome that could distract from measuring.',
      },
    ],
    jsonLdDescription:
      'A free on-screen ruler at true physical size. Calibrate your display, then measure in centimeters, millimeters, inches, and pixels.',
  },

  content: {
    guide: {
      title: 'How to Read an Online Ruler (cm, mm, Inches, Pixels) | Real Online Ruler',
      description:
        'Learn to read the on-screen ruler: centimeter and millimeter ticks, inch fractions down to sixteenths, pixel mode, plus guides, crosshair, and six advanced measuring tools.',
      h1: 'How to read the ruler',
      lede: 'Four units, one screen. This guide teaches you to read every scale the ruler offers — metric ticks, inch fractions, and pixel mode — to use the guides and crosshair, and to master the six advanced tools: drag-to-measure, protractor, loupe, floating ruler, measurement log, and grid.',
      breadcrumb: 'Reading guide',
      related: [
        { href: '/how-to-calibrate/', label: 'How to calibrate your on-screen ruler' },
        { href: '/cm/', label: 'Centimeter ruler' },
        { href: '/inches/', label: 'Inch ruler' },
        { href: '/mm/', label: 'Millimeter ruler' },
        { href: '/pixels/', label: 'Pixel ruler' },
      ],
      faqs: [
        {
          q: 'How do I read fractions of an inch on the ruler?',
          a: 'Find the nearest numbered inch, then count the smaller ticks past it. The longest unnumbered ticks are halves, the next longest are quarters, then eighths, and the shortest are sixteenths. Three short ticks past the 2-inch mark, for example, is 2 and 3/16 inches.',
        },
        {
          q: 'What is the difference between the cm and mm modes?',
          a: 'They show the same scale with different labels. In cm mode the numbered marks read 1, 2, 3 (centimeters); in mm mode the same marks read 10, 20, 30 (millimeters). Use mm mode when you want to read a value like 47 mm without multiplying.',
        },
        {
          q: 'How do guide lines help me measure?',
          a: 'Guides let you mark positions on the measuring area without holding the object against a ruler edge. Drop a guide at each end of the object and read the distance between their readouts — useful for things you cannot press flat against the screen edge.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Meet the four units' },
        {
          kind: 'p',
          html: 'Switch units anytime from the toolbar or with the <code>1</code>–<code>4</code> keys. The tick marks are redrawn from your calibration, so switching never changes the physical size — only the labels.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>cm (1)</strong> — centimeters, the everyday metric unit. Best for general measuring.',
            '<strong>mm (2)</strong> — millimeters, for precision. Same scale as cm, labeled in mm.',
            '<strong>in (3)</strong> — inches with fractional ticks down to 1/16″. Best for US customary work.',
            '<strong>px (4)</strong> — CSS pixels, for design mockups. Not a physical unit (see below).',
          ],
        },
        { kind: 'h2', text: 'Reading centimeters and millimeters' },
        {
          kind: 'p',
          html: 'In <strong>cm mode</strong>, the long numbered ticks are centimeters (1, 2, 3…) and there are nine short ticks between each pair — those are millimeters. An object ending four short ticks past the 5 cm mark is 5.4 cm long. In <strong>mm mode</strong> the scale is identical but the numbered ticks read 10, 20, 30 — so that same object reads 54 mm directly, no multiplying.',
        },
        {
          kind: 'p',
          html: 'The practical rule: use cm when the number of centimeters is what you care about (“about twelve and a half centimeters”), and mm when you want a single precise number (“127 mm”).',
        },
        { kind: 'h2', text: 'Reading inches and fractions' },
        {
          kind: 'p',
          html: 'In <strong>in mode</strong>, numbered ticks are whole inches. Between them, tick length tells you the fraction — longer means a simpler fraction:',
        },
        {
          kind: 'table',
          head: ['Tick length', 'Fraction', 'Example'],
          rows: [
            ['Longest unnumbered', '½ inch', '2½″'],
            ['Next longest', '¼ inch', '1¼″, 1¾″'],
            ['Medium', '⅛ inch', '3⅜″'],
            ['Shortest', '1/16 inch', '5/16″'],
          ],
        },
        {
          kind: 'p',
          html: 'To read a measurement, find the nearest numbered inch <em>below</em> the object’s end, then count the small ticks past it and take the longest tick your count reaches. Three of the shortest ticks past the 2″ mark is 2 and 3/16 inches. If the object’s end lands exactly on a medium tick, read the eighths instead — 2 and 6/16 is really 2⅜″, and woodworkers will thank you for simplifying.',
        },
        { kind: 'h2', text: 'Reading pixels' },
        {
          kind: 'p',
          html: '<strong>px mode</strong> is the odd one out: a CSS pixel is not a physical size, it’s the browser’s own unit. The px ruler shows 10-pixel minor ticks and numbered marks every 100 px. Use it when you’re mocking up a design (“this button should be about 120 px wide”), not when you need a physical measurement — for that, stay in cm, mm, or inches after calibrating.',
        },
        { kind: 'h2', text: 'Measuring with guides' },
        {
          kind: 'p',
          html: 'Press <code>G</code> (or the Guides button) and click anywhere in the measuring area to drop a guide line — horizontal or vertical, chosen with the H/V selector. Each guide shows its position in the current unit. Drag a guide to reposition it, double-click to remove one, and press <code>Esc</code> to clear them all.',
        },
        {
          kind: 'p',
          html: 'Guides shine when the object can’t sit against a ruler’s edge: drop one guide at each end of the object and subtract the two readouts. The guides always report in the active unit, so switching units mid-measurement converts the readouts for you.',
        },
        { kind: 'h2', text: 'Measuring with the crosshair' },
        {
          kind: 'p',
          html: 'Press <code>C</code> and a dashed crosshair follows your pointer across the measuring area, with a live badge showing the exact X/Y position in the current unit. It’s the fastest way to check a single point — the corner of a photo, the edge of a widget — without dropping guides.',
        },
        { kind: 'h2', text: 'Advanced tools' },
        {
          kind: 'p',
          html: 'The toolbar’s <strong>Advanced</strong> row adds six tools that go beyond the edge rulers. All of them measure in CSS pixels scaled by your calibration, in the currently selected unit.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Measure (M)</strong> — drag anywhere on the canvas to draw a measurement line. The live readout shows the distance in the current unit and the line’s angle in degrees. Endpoints snap to nearby guide lines. Release to get Save (sends the reading to the log) or Discard; <code>Esc</code> cancels while drawing.',
            '<strong>Protractor (P)</strong> — a circular protractor you can drag anywhere. Drag the center to move it, the ring handle to rotate the scale, and the two arm handles to set the arms; the digital readout shows the angle between the arms in degrees.',
            '<strong>Loupe (L)</strong> — a 3× magnifier that follows your cursor, showing a zoomed view of the rulers, guides, and canvas beneath it for precise tick reading.',
            '<strong>Ruler (R)</strong> — a floating ruler, independent of the screen edges. Drag its body to move it and the amber handle at its end to rotate it to any angle; it renders ticks in the current unit along its length, with a small badge showing its rotation.',
            '<strong>Log (O)</strong> — every saved measurement lands here with an editable label. Copy a single entry or the whole list, export as CSV or TXT, or delete entries. The log persists in your browser’s local storage.',
            '<strong>Grid (N)</strong> — a subtle overlay grid for alignment work. Each cell is exactly 1 cm (or 1 inch — switch with the Grid unit selector), with a stronger line every 5 cells.',
          ],
        },
        { kind: 'h2', text: 'Keyboard shortcuts' },
        {
          kind: 'p',
          html: 'Press <code>H</code> anywhere in the ruler app to open the shortcut reference. The full map:',
        },
        {
          kind: 'ul',
          items: [
            '<code>1</code>–<code>4</code> — units: cm, in, mm, px',
            '<code>G</code> guides · <code>C</code> crosshair · <code>F</code> fullscreen · <code>D</code> theme',
            '<code>M</code> drag-to-measure · <code>P</code> protractor · <code>L</code> loupe',
            '<code>R</code> floating ruler · <code>O</code> measurement log · <code>N</code> grid',
            '<code>Esc</code> — cancel the current drawing, close dialogs, or clear all guides',
          ],
        },
        { kind: 'h2', text: 'Tips for trustworthy measurements' },
        {
          kind: 'ul',
          items: [
            'Measure against the ruler’s <strong>highlighted measuring edge</strong> (the teal baseline), not the outer edge of the bar.',
            'Line up the object’s <strong>start</strong> with the zero mark, not with the end of the screen.',
            'For objects longer than the ruler, measure in sections with guides marking each segment.',
            'View the screen straight on; at a steep angle, parallax shifts where the edge appears to be.',
            'Every tool measures in CSS pixels scaled by your calibration. Browser zoom, OS display scaling, or an external monitor with a different pixel density will rescale the ruler — keep zoom at 100% and recalibrate if you move the window to another display.',
            'When in doubt, re-check with the <a href="/how-to-calibrate/">credit-card calibration</a> — it takes a minute.',
          ],
        },
      ],
    },
    howToCalibrate: {
      title: 'How to Calibrate Your On-Screen Ruler | Real Online Ruler',
      description:
        'Calibrate your display in under a minute with four methods: auto-detect, device picker, screen diagonal, or a credit card. Learn which method is most accurate and when to recalibrate.',
      h1: 'How to calibrate your on-screen ruler',
      lede: 'Your browser draws in CSS pixels, which have no fixed physical size. Calibration teaches this page exactly how many of those pixels make one real inch on your display — after that, every tick mark lands at its true physical position.',
      breadcrumb: 'How to calibrate',
      related: [
        { href: '/guide/', label: 'How to read the ruler: cm, mm, inches, and pixels' },
        { href: '/cm/', label: 'Centimeter ruler' },
        { href: '/inches/', label: 'Inch ruler' },
      ],
      faqs: [
        {
          q: 'Which calibration method is the most accurate?',
          a: 'The credit-card method is usually the most accurate because it calibrates against a physical object of a known, standardized size (85.60 mm wide) that you hold against the screen. The device picker is equally good when your exact model is listed. Auto-detect is a solid starting point, and the diagonal method is best used as a fallback.',
        },
        {
          q: 'How often should I recalibrate?',
          a: 'Only when something about your display changes: a new monitor, a different laptop, a changed OS display-scaling setting, or docking/undocking. Your calibration is saved in the browser, so day-to-day you never need to touch it.',
        },
        {
          q: 'Does calibration work on a second monitor?',
          a: 'Each display needs its own calibration, because pixel density differs between screens. Calibrate once per monitor; the saved value applies to whichever display the browser window is on when you calibrate. If you move the window to another monitor, recalibrate there.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Why calibration is the whole game' },
        {
          kind: 'p',
          html: 'A physical ruler is trustworthy because its marks were printed at known distances. A screen ruler has no such guarantee: the same 96 CSS pixels can be a full inch on one laptop and noticeably less on a high-density phone display. The site starts from the web-standard guess of 96 pixels per inch, then replaces it with your display’s real number. Everything else — centimeters, millimeters, fractions of an inch — is arithmetic built on that one number, so getting it right matters more than anything else on this site.',
        },
        { kind: 'h2', text: 'The four methods' },
        {
          kind: 'p',
          html: 'Open the calibration dialog from the toolbar on the <a href="/#ruler-app">home page ruler</a> and pick whichever method fits what you have at hand. All four save automatically to your browser.',
        },
        { kind: 'h3', text: '1. Auto-detect' },
        {
          kind: 'p',
          html: 'The fastest option. The page reads your screen’s resolution and your browser’s best guess at the pixel ratio, then estimates the density. It is right surprisingly often on mainstream laptops and desktops, and it is the method to try first. If measurements later feel slightly off, switch to one of the manual methods below.',
        },
        { kind: 'h3', text: '2. Pick your device' },
        {
          kind: 'p',
          html: 'Choose your phone, tablet, laptop, or monitor from the built-in list of known displays. Each entry carries that model’s manufacturer pixel density, so the math is exact for that panel. This is the best method on mobile, where model detection is reliable — your phone becomes a pocket ruler in about ten seconds.',
        },
        { kind: 'h3', text: '3. Screen diagonal' },
        {
          kind: 'p',
          html: 'Enter your screen’s advertised diagonal size (13.3″, 15.6″, 24″, 27″ — it’s on the box or the manufacturer’s spec page) and the page derives the density from your resolution. Quick and decent, but only as accurate as the advertised number, which is sometimes rounded.',
        },
        { kind: 'h3', text: '4. Credit card' },
        {
          kind: 'p',
          html: 'The most accurate method for most people. Hold any standard bank or ID card against the on-screen rectangle and drag the slider until the two match exactly. Cards follow the ISO/IEC 7810 ID-1 standard — 85.60 × 53.98 mm — so you are calibrating against a physical object of a known size. Take your time with the slider; half a millimeter of mismatch here is the whole error budget.',
        },
        { kind: 'h2', text: 'Tips for the best accuracy' },
        {
          kind: 'ul',
          items: [
            '<strong>Use the card method last, not first.</strong> It’s worth the extra minute — it removes every assumption about your display.',
            '<strong>Keep browser zoom at 100%.</strong> Zooming rescales CSS pixels, so a ruler calibrated at 100% reads wrong at 110%. The app reminds you of this in its status bar.',
            '<strong>Calibrate on the display you’ll measure on.</strong> Laptop screen and external monitor almost always have different densities.',
            '<strong>Check your OS display scaling.</strong> If you change the scaling setting (125%, 150%) after calibrating, recalibrate — the CSS-pixel-to-physical mapping changed.',
            '<strong>Sanity-check with something known.</strong> After calibrating, measure your credit card (85.60 mm wide) or a US quarter (24.26 mm across). If it reads right, you’re set.',
          ],
        },
        { kind: 'h2', text: 'When to recalibrate' },
        {
          kind: 'p',
          html: 'Almost never, day to day. Your calibration is stored in your browser under <code>ror-calibration</code> and reloaded on every visit. Recalibrate only when the display itself changes: a new monitor, a different laptop, a changed scaling setting, or docking and undocking. If measurements ever feel like they’ve drifted, the two-minute card check above will tell you the truth.',
        },
        { kind: 'h2', text: 'Frequently asked questions' },
        { kind: 'h3', text: 'Which calibration method is the most accurate?' },
        {
          kind: 'p',
          html: 'The credit-card method is usually the most accurate because it calibrates against a physical object of a known, standardized size (85.60 mm wide) that you hold against the screen. The device picker is equally good when your exact model is listed. Auto-detect is a solid starting point, and the diagonal method is best used as a fallback.',
        },
        { kind: 'h3', text: 'How often should I recalibrate?' },
        {
          kind: 'p',
          html: 'Only when something about your display changes: a new monitor, a different laptop, a changed OS display-scaling setting, or docking/undocking. Your calibration is saved in the browser, so day-to-day you never need to touch it.',
        },
        { kind: 'h3', text: 'Does calibration work on a second monitor?' },
        {
          kind: 'p',
          html: 'Each display needs its own calibration, because pixel density differs between screens. Calibrate once per monitor; the saved value applies to whichever display the browser window is on when you calibrate. If you move the window to another monitor, recalibrate there.',
        },
      ],
    },
    cm: {
      title: 'Online Centimeter Ruler — Measure in cm at True Size | Real Online Ruler',
      description:
        'A free on-screen centimeter ruler at true physical size. Calibrate once, then measure in cm and mm with numbered centimeter marks and millimeter ticks.',
      h1: 'Centimeter ruler',
      lede: 'The centimeter is the workhorse of everyday metric measuring — big enough to read at a glance, fine enough for most household tasks. Calibrate your display once, switch the ruler to cm, and the numbered marks on your screen are true centimeters.',
      breadcrumb: 'Centimeter ruler',
      related: [
        { href: '/mm/', label: 'Millimeter ruler' },
        { href: '/inches/', label: 'Inch ruler' },
        { href: '/guide/', label: 'How to read the ruler' },
      ],
      faqs: [
        {
          q: 'How many millimeters are in a centimeter?',
          a: 'Ten. A centimeter is defined as exactly 10 millimeters, and the on-screen ruler shows this directly: ten small ticks between every pair of numbered centimeter marks.',
        },
        {
          q: 'How many inches is a centimeter?',
          a: 'One centimeter equals exactly 0.3937 inches (one inch is defined as exactly 2.54 cm). So 10 cm is about 3.94 inches — just under four inches.',
        },
        {
          q: 'What everyday objects are about one centimeter?',
          a: 'A standard pencil is about 0.7 cm across, a US penny is about 1.9 cm across, and the width of an adult fingertip is roughly 1.5–2 cm. A paperclip is about 3 cm long and a credit card is 8.56 cm wide.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'What is a centimeter?' },
        {
          kind: 'p',
          html: 'A centimeter is one hundredth of a meter — about the width of an adult fingertip. It sits in the sweet spot for everyday measuring: smaller than an inch (2.54 cm), larger than fiddly sub-millimeter units. Most of the world measures daily life in centimeters: heights, paper sizes, furniture, screen diagonals.',
        },
        { kind: 'h2', text: 'Reading the cm scale' },
        {
          kind: 'p',
          html: 'In cm mode the <strong>long numbered ticks are centimeters</strong> — 1, 2, 3, and so on. Between each pair sit nine shorter ticks: <strong>millimeters</strong>. The medium-length tick halfway between is the half centimeter (5 mm). An object ending at the third short tick past 7 measures 7.3 cm. If you need the value purely in millimeters, switch to <a href="/mm/">mm mode</a> and read 73 mm directly.',
        },
        { kind: 'h2', text: 'Handy size references' },
        {
          kind: 'p',
          html: 'Everyday objects, for sanity-checking your calibration or estimating without the ruler:',
        },
        {
          kind: 'ul',
          items: [
            'Standard paperclip — about <strong>3 cm</strong> long',
            'AA battery — about <strong>5 cm</strong> long',
            'Credit / bank card — <strong>8.56 cm</strong> wide (an exact standard, great for checking calibration)',
            'US penny — about <strong>1.9 cm</strong> across',
            'Smartphone width — typically <strong>7–8 cm</strong>',
          ],
        },
        { kind: 'h2', text: 'Conversions' },
        {
          kind: 'table',
          head: ['From', 'To', 'Multiply by'],
          rows: [
            ['cm', 'mm', '10'],
            ['cm', 'm', '0.01'],
            ['cm', 'inches', '0.3937'],
            ['inches', 'cm', '2.54 (exact)'],
          ],
        },
        {
          kind: 'p',
          html: 'The inch conversion is exact by definition — one inch is <em>defined</em> as 2.54 cm — so switching the ruler between cm and <a href="/inches/">inches</a> never introduces rounding error in the tick positions themselves.',
        },
        { kind: 'h2', text: 'Frequently asked questions' },
        { kind: 'h3', text: 'How many millimeters are in a centimeter?' },
        {
          kind: 'p',
          html: 'Ten. A centimeter is defined as exactly 10 millimeters, and the on-screen ruler shows this directly: ten small ticks between every pair of numbered centimeter marks.',
        },
        { kind: 'h3', text: 'How many inches is a centimeter?' },
        {
          kind: 'p',
          html: 'One centimeter equals exactly 0.3937 inches (one inch is defined as exactly 2.54 cm). So 10 cm is about 3.94 inches — just under four inches.',
        },
        { kind: 'h3', text: 'What everyday objects are about one centimeter?' },
        {
          kind: 'p',
          html: 'A standard pencil is about 0.7 cm across, a US penny is about 1.9 cm across, and the width of an adult fingertip is roughly 1.5–2 cm. A paperclip is about 3 cm long and a credit card is 8.56 cm wide.',
        },
      ],
    },
    inches: {
      title: 'Online Inch Ruler — Measure in Inches at True Size | Real Online Ruler',
      description:
        'A free on-screen inch ruler at true physical size with fractional ticks down to 1/16 inch. Calibrate once, then measure in whole and fractional inches.',
      h1: 'Inch ruler',
      lede: 'The inch remains the everyday unit across the United States — for woodworking, sewing, hardware, and anything sold by the foot. Calibrate your display once, switch the ruler to inches, and read whole inches plus fractions down to a sixteenth.',
      breadcrumb: 'Inch ruler',
      related: [
        { href: '/cm/', label: 'Centimeter ruler' },
        { href: '/mm/', label: 'Millimeter ruler' },
        { href: '/guide/', label: 'How to read the ruler' },
      ],
      faqs: [
        {
          q: 'How many sixteenths are in an inch?',
          a: 'Sixteen. The on-screen inch ruler divides every inch into 16 equal ticks. The 8th tick is the half inch, the 4th and 12th are quarter inches, and the odd-numbered eighths (2nd, 6th, 10th, 14th) are eighth-inch marks.',
        },
        {
          q: 'How many centimeters is an inch?',
          a: 'Exactly 2.54 centimeters, by international definition. That makes one centimeter about 0.3937 inches.',
        },
        {
          q: 'Why do rulers use fractions instead of decimals?',
          a: 'Tradition and divisibility. Halves, quarters, and eighths come from repeatedly halving an inch, which is easy to do physically and to read by eye. Decimal inches exist too — machinists use thousandths — but fractional inches remain the standard for everyday US measuring.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'What is an inch?' },
        {
          kind: 'p',
          html: 'An inch is a US customary (imperial) unit defined as <strong>exactly 2.54 centimeters</strong>. Twelve inches make a foot, 36 make a yard. Unlike metric units, inches are traditionally read as <strong>fractions</strong> — halves, quarters, eighths, sixteenths — rather than decimals, and the on-screen ruler is drawn exactly that way.',
        },
        { kind: 'h2', text: 'Reading the inch scale' },
        {
          kind: 'p',
          html: 'Numbered ticks are whole inches. Between them, <strong>tick length encodes the fraction</strong> — the longer the tick, the simpler the fraction:',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Longest unnumbered tick</strong> — the half inch (½″), one per inch.',
            '<strong>Next longest</strong> — quarter inches (¼″, ¾″).',
            '<strong>Medium ticks</strong> — eighth inches (⅛″, ⅜″, ⅝″, ⅞″).',
            '<strong>Shortest ticks</strong> — sixteenths (1/16″ … 15/16″).',
          ],
        },
        {
          kind: 'p',
          html: 'Read from the numbered inch below the object’s end and count forward. Two medium ticks past the 3″ mark is 3 and 2/8 — simplify it to <strong>3¼″</strong>. Five of the shortest ticks past 1″ is 1 and 5/16 inches. The full reading method, with worked examples, is in the <a href="/guide/">reading guide</a>.',
        },
        { kind: 'h2', text: 'Fraction ↔ decimal ↔ metric' },
        {
          kind: 'table',
          head: ['Fraction', 'Decimal (in)', 'Metric'],
          rows: [
            ['1/16″', '0.0625', '1.59 mm'],
            ['⅛″', '0.125', '3.18 mm'],
            ['¼″', '0.25', '6.35 mm'],
            ['½″', '0.5', '12.7 mm'],
            ['1″', '1.0', '25.4 mm (exact)'],
          ],
        },
        { kind: 'h2', text: 'When inches beat metric' },
        {
          kind: 'p',
          html: 'If the thing you’re measuring was <em>made</em> in inches — lumber dimensions, screw sizes, pipe fittings, US clothing patterns — measure in inches and skip the conversion. A “2×4” stud, a ¼″ bolt, or a 9″ cake pan all have round numbers in inches and awkward ones in metric. Match the ruler to the object’s native unit and the numbers stay friendly.',
        },
        { kind: 'h2', text: 'Frequently asked questions' },
        { kind: 'h3', text: 'How many sixteenths are in an inch?' },
        {
          kind: 'p',
          html: 'Sixteen. The on-screen inch ruler divides every inch into 16 equal ticks. The 8th tick is the half inch, the 4th and 12th are quarter inches, and the 2nd, 6th, 10th, and 14th are eighth-inch marks.',
        },
        { kind: 'h3', text: 'How many centimeters is an inch?' },
        {
          kind: 'p',
          html: 'Exactly 2.54 centimeters, by international definition. One centimeter is about 0.3937 inches.',
        },
        { kind: 'h3', text: 'Why do rulers use fractions instead of decimals?' },
        {
          kind: 'p',
          html: 'Tradition and divisibility. Halves, quarters, and eighths come from repeatedly halving an inch, which is easy to do physically and to read by eye. Decimal inches exist too — machinists work in thousandths — but fractional inches remain the standard for everyday US measuring.',
        },
      ],
    },
    mm: {
      title: 'Online Millimeter Ruler — Measure in mm at True Size | Real Online Ruler',
      description:
        'A free on-screen millimeter ruler at true physical size. Calibrate once, then read precise millimeter measurements with labeled 10 mm marks.',
      h1: 'Millimeter ruler',
      lede: 'When centimeters are too coarse, millimeters take over — one tenth of a centimeter, small enough for screws, gaps, and ring sizes. Calibrate once, switch to mm, and every tiny tick on your screen is a true millimeter.',
      breadcrumb: 'Millimeter ruler',
      related: [
        { href: '/cm/', label: 'Centimeter ruler' },
        { href: '/inches/', label: 'Inch ruler' },
        { href: '/guide/', label: 'How to read the ruler' },
      ],
      faqs: [
        {
          q: 'How small is a millimeter?',
          a: 'A millimeter is one thousandth of a meter — roughly the thickness of a credit card (0.76 mm) or a little less than half the thickness of a US dime (1.35 mm). It is the smallest unit most people measure by eye.',
        },
        {
          q: 'Should I use mm or cm mode?',
          a: 'They show the same scale with different labels. Use mm mode when you want a single precise number like 47 mm; use cm mode when you think in centimeters like 4.7 cm. For anything under about 5 cm, mm mode is usually easier to read.',
        },
        {
          q: 'How accurate is the on-screen millimeter scale?',
          a: 'As accurate as your calibration. With the credit-card method, expect accuracy within about half a millimeter on a typical display. For sub-millimeter work — jewelry, electronics — use proper calipers; a screen ruler is a quick check, not a metrology tool.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'What is a millimeter?' },
        {
          kind: 'p',
          html: 'A millimeter is one thousandth of a meter and one tenth of a centimeter — the smallest unit most people comfortably measure by eye. Anything thinner than a millimeter (paper is about 0.1 mm) belongs to calipers and micrometers; everything from about 1 mm up to a few centimeters is millimeter territory.',
        },
        { kind: 'h2', text: 'Reading the mm scale' },
        {
          kind: 'p',
          html: 'In mm mode, <strong>every small tick is one millimeter</strong> and the long numbered ticks come every 10 mm, labeled 10, 20, 30… Read the numbered mark below the object’s end, then count the small ticks past it: four ticks past 40 is <strong>44 mm</strong>. The medium-length tick at each 5 is the half centimeter — a handy landmark when counting.',
        },
        {
          kind: 'p',
          html: 'The scale is identical to <a href="/cm/">cm mode</a>; only the labels differ. Switch freely — 44 mm and 4.4 cm are the same mark.',
        },
        { kind: 'h2', text: 'Handy size references' },
        {
          kind: 'ul',
          items: [
            'Credit / bank card thickness — <strong>0.76 mm</strong> (an exact standard)',
            'US dime thickness — about <strong>1.35 mm</strong>',
            'SD card thickness — about <strong>2.1 mm</strong>',
            'Standard pencil diameter — about <strong>7 mm</strong>',
            'US quarter diameter — <strong>24.26 mm</strong>',
          ],
        },
        { kind: 'h2', text: 'Conversions' },
        {
          kind: 'table',
          head: ['From', 'To', 'Multiply by'],
          rows: [
            ['mm', 'cm', '0.1'],
            ['mm', 'm', '0.001'],
            ['mm', 'inches', '0.03937'],
            ['inches', 'mm', '25.4 (exact)'],
          ],
        },
        { kind: 'h2', text: 'Getting precise results' },
        {
          kind: 'ul',
          items: [
            '<strong>Calibrate with the card method.</strong> Millimeter accuracy lives or dies on calibration — the physical-card method is the most accurate.',
            '<strong>Zoom the page to 100% and leave it there.</strong> Any zoom rescales the ticks.',
            '<strong>Use guides for small objects.</strong> Drop a guide at each end of the object and subtract the readouts — steadier than eyeballing a tick.',
            '<strong>View straight on.</strong> Parallax at an angle can shift an apparent edge by a millimeter or more.',
          ],
        },
        { kind: 'h2', text: 'Frequently asked questions' },
        { kind: 'h3', text: 'How small is a millimeter?' },
        {
          kind: 'p',
          html: 'A millimeter is one thousandth of a meter — roughly the thickness of a credit card (0.76 mm) or a little less than half the thickness of a US dime (1.35 mm). It is the smallest unit most people measure by eye.',
        },
        { kind: 'h3', text: 'Should I use mm or cm mode?' },
        {
          kind: 'p',
          html: 'They show the same scale with different labels. Use mm mode when you want a single precise number like 47 mm; use cm mode when you think in centimeters like 4.7 cm. For anything under about 5 cm, mm mode is usually easier to read.',
        },
        { kind: 'h3', text: 'How accurate is the on-screen millimeter scale?' },
        {
          kind: 'p',
          html: 'As accurate as your calibration. With the credit-card method, expect accuracy within about half a millimeter on a typical display. For sub-millimeter work — jewelry, electronics — use proper calipers; a screen ruler is a quick check, not a metrology tool.',
        },
      ],
    },
    pixels: {
      title: 'Online Pixel Ruler — Measure in CSS Pixels | Real Online Ruler',
      description:
        'A free on-screen pixel ruler for designers: measure in CSS pixels with 10 px ticks and 100 px numbered marks. No calibration needed — pixels are the browser’s own unit.',
      h1: 'Pixel ruler',
      lede: 'Pixels are the designer’s unit — the language of mockups, buttons, and breakpoints. The px ruler counts your browser’s own CSS pixels, so it needs no calibration at all: switch to px mode and measure anything on the page in the same units your stylesheet uses.',
      breadcrumb: 'Pixel ruler',
      related: [
        { href: '/cm/', label: 'Centimeter ruler' },
        { href: '/inches/', label: 'Inch ruler' },
        { href: '/guide/', label: 'How to read the ruler' },
      ],
      faqs: [
        {
          q: 'How big is a pixel in real life?',
          a: 'There is no fixed answer. A CSS pixel has no physical size — it is 1/96th of an inch only by convention for print. On your screen its physical size depends on the display density, which is exactly why the ruler needs calibration for physical units but not for pixel mode.',
        },
        {
          q: 'Does the pixel ruler need calibration?',
          a: 'No. Pixel mode counts the browser’s own CSS pixels, which the page knows exactly without any physical measurement. Calibration only matters for cm, mm, and inches — the units with real-world sizes.',
        },
        {
          q: 'What is device pixel ratio (DPR)?',
          a: 'The number of physical screen pixels used to draw one CSS pixel. A DPR of 2 (a Retina display) packs four physical pixels into each CSS pixel for sharper rendering. The ruler’s pixel mode always shows CSS pixels, which is what web designers work in.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'What is a CSS pixel?' },
        {
          kind: 'p',
          html: 'A CSS pixel is the browser’s abstract unit — the <code>px</code> in your stylesheet. It is deliberately <em>not</em> a physical size: on a standard display one CSS pixel maps to one physical pixel, while on a high-density (“Retina”) display several physical pixels team up to draw a single CSS pixel more sharply. The ratio is the <strong>device pixel ratio (DPR)</strong>. Web design happens in CSS pixels, which is exactly what this ruler counts.',
        },
        { kind: 'h2', text: 'Reading the px scale' },
        {
          kind: 'p',
          html: 'In px mode, small ticks come every <strong>10 px</strong>, medium ticks every 50 px, and the numbered marks every <strong>100 px</strong>. Measuring a button: line up its left edge with zero and read where the right edge lands — say, just past 120, i.e. about 124 px wide. For exact work, drop <a href="/guide/">guides</a> at both edges and subtract their readouts.',
        },
        { kind: 'h2', text: 'Why px mode needs no calibration' },
        {
          kind: 'p',
          html: 'Calibration answers a physical question: “how many CSS pixels make a real inch on this display?” Pixel mode never asks that question — it simply counts the browser’s own units, which the page knows exactly. That’s also why px measurements are meaningless as physical sizes: 100 px is a different number of millimeters on every display. Use px for design, and cm/mm/inches (after <a href="/how-to-calibrate/">calibration</a>) for the physical world.',
        },
        { kind: 'h2', text: 'Pixels vs. print points' },
        {
          kind: 'p',
          html: 'You’ll sometimes see “1 px = 1/96 inch.” That’s a <em>print</em> convention from CSS, used so stylesheets can convert to physical units on paper — it says nothing about your screen. On screen, the only honest statement is: a CSS pixel is however big the display’s density makes it, and the calibrated ruler is how you find out.',
        },
        { kind: 'h2', text: 'Handy pixel references' },
        {
          kind: 'ul',
          items: [
            'Typical body text (16 px) cap height — roughly <strong>11 px</strong>',
            'Common button height — <strong>36–48 px</strong>',
            'Favicon — <strong>16 × 16 px</strong>',
            'Full HD viewport width — <strong>1920 px</strong> (CSS px, regardless of DPR)',
          ],
        },
        { kind: 'h2', text: 'Frequently asked questions' },
        { kind: 'h3', text: 'How big is a pixel in real life?' },
        {
          kind: 'p',
          html: 'There is no fixed answer. A CSS pixel has no physical size — it is 1/96th of an inch only by convention for print. On your screen its physical size depends on the display density, which is exactly why the ruler needs calibration for physical units but not for pixel mode.',
        },
        { kind: 'h3', text: 'Does the pixel ruler need calibration?' },
        {
          kind: 'p',
          html: 'No. Pixel mode counts the browser’s own CSS pixels, which the page knows exactly without any physical measurement. Calibration only matters for cm, mm, and inches — the units with real-world sizes.',
        },
        { kind: 'h3', text: 'What is device pixel ratio (DPR)?' },
        {
          kind: 'p',
          html: 'The number of physical screen pixels used to draw one CSS pixel. A DPR of 2 (a Retina display) packs four physical pixels into each CSS pixel for sharper rendering. The ruler’s pixel mode always shows CSS pixels, which is what web designers work in.',
        },
      ],
    },
  },
};
