/**
 * es.ts — the Spanish (es) UI dictionary for Phase 8 i18n.
 *
 * Native-quality, neutral Latin American Spanish translation of en.ts.
 * Brand name "Real Online Ruler" and technical tokens (px, PPI, CSV, TXT,
 * DPR, CSS, ISO/IEC 7810 ID-1, 3×, keyboard letters, {placeholders},
 * href paths, numbers, unit symbols) are kept untranslated per the
 * translation contract. The Dict type is `typeof en`; the key structure
 * matches the English source exactly.
 */

import type { Dict } from '../dict.js';
import { legalEs } from './legal-es.js';

export const es: Dict = {
  skipToContent: 'Ir al contenido',

  header: {
    navAria: 'Principal',
    navMobileAria: 'Principal móvil',
    nav: [
      { label: 'Inicio', href: '/' },
      { label: 'Cómo calibrar', href: '/#calibration' },
      { label: 'Guía', href: '/#guide' },
      { label: 'Preguntas frecuentes', href: '/#faq' },
    ],
    wordmarkAria: 'Real Online Ruler — inicio',
    themeAria: 'Cambiar entre modo oscuro y claro',
    themeTitle: 'Cambiar entre modo oscuro y claro (D)',
    themeSr: 'Cambiar tema',
    languageAria: 'Idioma',
  },

  footer: {
    tagline:
      'Una herramienta de medición gratuita, sin registro, que convierte tu pantalla en una regla de tamaño real: en centímetros, milímetros, pulgadas y píxeles.',
    explore: 'Explorar',
    exploreLinks: [
      { label: 'Inicio', href: '/' },
      { label: 'Cómo calibrar', href: '/#calibration' },
      { label: 'Guía de lectura', href: '/#guide' },
      { label: 'Preguntas frecuentes', href: '/#faq' },
    ],
    rulerGuides: 'Guías de regla',
    guideLinks: [
      { label: 'Cómo calibrar', href: '/how-to-calibrate/' },
      { label: 'Cómo leer la regla', href: '/guide/' },
      { label: 'Regla de centímetros', href: '/cm/' },
      { label: 'Regla de pulgadas', href: '/inches/' },
      { label: 'Regla de milímetros', href: '/mm/' },
      { label: 'Regla de píxeles', href: '/pixels/' },
    ],
    accuracyTitle: 'Nota sobre la precisión',
    accuracyBody:
      'Las mediciones en pantalla son tan precisas como tu calibración. Calibra una vez para tu pantalla, mantén el zoom del navegador al 100 % y la regla se mantendrá fiel en cada visita.',
    copyright: '© {year} Real Online Ruler. Gratis para todos: sin cuenta, sin descargas.',
    legalLabel: 'Legal',
    legalLinks: [
      { label: 'Quiénes somos', href: '/about/' },
      { label: 'Política de Privacidad', href: '/privacy-policy/' },
      { label: 'Términos del Servicio', href: '/terms-of-service/' },
      { label: 'Contacto', href: '/contact/' },
    ],
  },

  layout: {
    breadcrumbHome: 'Inicio',
    breadcrumbAria: 'Migas de pan',
    keepReading: 'Seguir leyendo',
    relatedAria: 'Páginas relacionadas',
    ctaTitle: 'Pruébalo en tu pantalla ahora mismo',
    ctaBody:
      'La regla interactiva está en la página principal: se calibra para tu pantalla en menos de un minuto.',
    ctaButton: 'Abrir la regla',
  },

  toolbar: {
    unitGroup: 'Unidad de medida',
    edgeGroup: 'Bordes de la regla',
    edgeTop: 'Superior',
    edgeBottom: 'Inferior',
    edgeLeft: 'Izquierdo',
    edgeRight: 'Derecho',
    precisionGroup: 'Herramientas de precisión',
    guides: 'Guías',
    guidesTitle: 'Mostrar u ocultar guías (G)',
    crosshair: 'Retícula',
    crosshairTitle: 'Mostrar u ocultar retícula (C)',
    orientGroup: 'Orientación de las guías nuevas',
    orientHTitle: 'Las guías nuevas son horizontales',
    orientVTitle: 'Las guías nuevas son verticales',
    fullscreen: 'Pantalla completa',
    fullscreenTitle: 'Pantalla completa (F)',
    theme: 'Tema',
    themeTitle: 'Cambiar tema (D)',
    calibrate: 'Calibrar',
    calibrateTitle: 'Calibrar la pantalla',
    advanced: 'Avanzado',
    advancedGroup: 'Herramientas avanzadas de medición',
    measure: 'Medir',
    measureTitle: 'Arrastra sobre el lienzo para medir distancia y ángulo (M)',
    protractor: 'Transportador',
    protractorTitle: 'Transportador superpuesto (P)',
    loupe: 'Lupa',
    loupeTitle: 'Lupa de aumento (L)',
    ruler: 'Regla',
    rulerTitle: 'Regla flotante giratoria (R)',
    log: 'Registro',
    logTitle: 'Registro de mediciones (O)',
    grid: 'Cuadrícula',
    gridTitle: 'Cuadrícula superpuesta (N)',
    gridUnit: 'Unidad de la cuadrícula',
    gridUnitAria: 'Unidad de celda de la cuadrícula',
    gridCm: 'cm',
    gridInch: 'pulgada',
    help: '? Atajos',
    helpTitle: 'Atajos de teclado (H)',
  },

  stage: {
    aria: 'Área de medición',
    hint: 'Activa los bordes de arriba para enmarcar esta área con reglas. Sostén un objeto pequeño contra el borde de medición resaltado de una regla y lee su tamaño.',
    guidesHint:
      'Con las guías activadas, haz clic en cualquier lugar para colocar una línea guía; arrastra una línea para moverla, haz doble clic para eliminarla; Esc borra todas las guías.',
    guideAt: 'Guía en {value}',
  },

  status: {
    loading: 'Cargando calibración…',
    uncalibrated: 'Sin calibrar: se usa el valor predeterminado de 96 px/in de CSS.',
    calibrateNow: 'Calibrar ahora',
    calibrated: '{px} px/in · calibrado con {what}.',
    zoomNote: 'Mantén el zoom del navegador al 100 %: hacer zoom cambia la escala de la regla.',
    shortcutHint: 'Pulsa {key} para ver el mapa completo de atajos de teclado.',
  },

  measure: {
    popupAria: 'Guardar medición',
    save: 'Guardar en el registro',
    discard: 'Descartar',
  },

  protractor: {
    aria: 'Transportador superpuesto: arrastra el centro para moverlo, el tirador ámbar para girarlo y los tiradores ámbar y verde azulado de los brazos para medir un ángulo',
    moveArmA: 'Arrastra para mover el brazo A',
    moveArmB: 'Arrastra para mover el brazo B',
    rotate: 'Arrastra para girar el transportador',
    move: 'Arrastra para mover el transportador',
    caption: 'el centro se mueve · el anillo gira',
  },

  floatingRuler: {
    aria: 'Regla flotante: arrastra el cuerpo para moverla y el tirador del extremo derecho para girarla',
    rotateTitle: 'Arrastra para girar',
  },

  log: {
    panelAria: 'Registro de mediciones',
    title: 'Registro de mediciones',
    close: 'Cerrar',
    closeAria: 'Cerrar el registro de mediciones',
    empty:
      'Aún no hay mediciones. Activa Medir ({key}), arrastra sobre el lienzo y luego pulsa Guardar.',
    labelAria: 'Etiqueta de la medición',
    copy: 'Copiar',
    delete: 'Eliminar',
    copyAll: 'Copiar todo',
    csv: 'CSV',
    txt: 'TXT',
    clear: 'Borrar',
    copied: 'Copiado',
    failed: 'Falló',
  },

  help: {
    title: 'Atajos de teclado',
    close: 'Cerrar',
    rows: [
      { keys: ['1', '2', '3', '4'], label: 'Unidades: cm, in, mm, px' },
      { keys: ['G'], label: 'Mostrar u ocultar guías' },
      { keys: ['C'], label: 'Mostrar u ocultar retícula' },
      { keys: ['F'], label: 'Pantalla completa' },
      { keys: ['D'], label: 'Cambiar tema' },
      { keys: ['M'], label: 'Herramienta de medición por arrastre' },
      { keys: ['P'], label: 'Transportador superpuesto' },
      { keys: ['L'], label: 'Lupa de aumento (3×)' },
      { keys: ['R'], label: 'Regla flotante' },
      { keys: ['O'], label: 'Registro de mediciones' },
      { keys: ['N'], label: 'Cuadrícula superpuesta' },
      { keys: ['H'], label: 'Esta ayuda de atajos' },
      { keys: ['Esc'], label: 'Cancelar dibujo / cerrar / borrar guías' },
    ],
  },

  calibrate: {
    title: 'Calibra tu pantalla',
    currentLabel: 'Actual:',
    defaultReadout: '96 px/in (predeterminado)',
    saved: 'Guardado',
    closeAria: 'Cerrar el diálogo de calibración',
    tablistAria: 'Métodos de calibración',
    tabs: {
      auto: 'Detección automática',
      device: 'Elige tu dispositivo',
      diagonal: 'Diagonal de la pantalla',
      card: 'Tarjeta de crédito',
    },
    autoBody:
      'Revisamos tu navegador y la resolución de tu pantalla, las comparamos con una base de datos integrada de especificaciones publicadas de pantallas y aplicamos la densidad de píxeles de fábrica. Es la opción más rápida cuando encuentra tu dispositivo.',
    detectButton: 'Detectar mi dispositivo',
    deviceBody:
      '¿Conoces tu modelo exacto? Selecciónalo abajo: aplicamos su densidad de píxeles publicada, ajustada a la escala de tu pantalla.',
    categoryLabel: 'Categoría',
    deviceLabel: 'Dispositivo',
    diagonalBody:
      'Escribe el tamaño de la diagonal de tu pantalla en pulgadas (suele estar en la caja o en la página de especificaciones del fabricante; por ejemplo, 15.6 en una laptop típica). Lo combinamos con la resolución de tu pantalla para calcular la densidad exacta. Mantén el zoom del navegador al 100 %.',
    diagonalLabel: 'Diagonal (pulgadas)',
    calculate: 'Calcular',
    cardBody:
      'Coloca cualquier tarjeta de crédito, débito o identificación contra tu pantalla, sobre el contorno de abajo. Arrastra el deslizador hasta que el contorno coincida exactamente con los bordes de la tarjeta y luego usa la calibración. Las tarjetas estándar miden 85.60 × 53.98 mm.',
    cardSize: '85.60 × 53.98 mm',
    assumedDensity: 'Densidad supuesta',
    useCalibration: 'Usar esta calibración',
    footerNote:
      'Se guarda solo en este navegador. Vuelve a calibrar si cambias de monitor o de escala de pantalla.',
    reset: 'Restablecer a 96 PPI',
    methods: {
      auto: 'detección automática',
      device: 'elección de dispositivo',
      diagonal: 'diagonal de pantalla',
      card: 'tarjeta de crédito',
      default: 'predeterminado',
    },
    autoDetected: 'Detectado:',
    factoryPpi: '{ppi} PPI de fábrica',
    highConfidence: 'Alta confianza: coincidencia exacta del modelo.',
    mediumConfidence:
      'Confianza media: coincide con una pantalla compartida por modelos similares (misma densidad).',
    computedAtScaling:
      'Densidad calculada con la escala de tu pantalla: <strong>{px} px/in</strong>',
    pxPerInch: 'px/in',
    recognizedAs:
      'Reconocemos esto como una pantalla <strong>{category}</strong>, pero no pudimos identificar el modelo exacto.',
    notRecognized: 'No pudimos reconocer tu dispositivo a partir de la información del navegador.',
    tryTabs:
      'Prueba en su lugar la pestaña <strong>{a}</strong>, <strong>{b}</strong> o <strong>{c}</strong>.',
    factoryWord: 'fábrica',
    atScaling: 'Con la escala actual de tu pantalla (×{dpr}): <strong>{px} px/in</strong>',
    invalidDiagonal: 'Ingresa una diagonal válida en pulgadas.',
    screenIs: 'Pantalla: {w} × {h} px, diagonal {d} in',
    computedDensity: 'Densidad calculada: <strong>{px} px/in</strong>',
    diagonalDeviceName: '{d} in de diagonal',
    cardDeviceName: 'tarjeta de 85.60 × 53.98 mm',
  },

  notFound: {
    title: 'Página no encontrada — Real Online Ruler',
    description: 'La página que buscas no existe en Real Online Ruler.',
    heading: 'Esta marca no está en la regla',
    body: 'La página que pediste no existe. Volvamos a lo importante: medir.',
    cta: 'Volver a la regla',
  },

  home: {
    title:
      'Real Online Ruler — Regla de pantalla gratuita de tamaño real (cm, mm, pulgadas, píxeles)',
    description:
      'Convierte tu pantalla en una regla de verdad. Calibra una vez para tu pantalla y luego mide objetos pequeños en centímetros, milímetros, pulgadas o píxeles: gratis, sin registro, sin descargas.',
    badge: 'Gratis · Sin registro · Sin descargas',
    h1Before: 'Tu pantalla, convertida en una ',
    h1Emphasis: 'regla de verdad',
    h1After: '.',
    lede: 'Calibra una vez para tu pantalla y esta página se convierte en una herramienta de medición de tamaño real. Sostén una moneda, un tornillo o una muestra de tela contra el borde y léela en centímetros, milímetros, pulgadas o píxeles.',
    openRuler: 'Abrir la regla',
    howCalibration: 'Cómo funciona la calibración',
    tip: 'Consejo: mantén el zoom del navegador al 100 % mientras mides.',
    workspaceAria: 'Espacio de trabajo de la regla',
    featuresAria: 'Características',
    featuresTitle: 'Una página, un banco de medición completo',
    featuresLede:
      'Calibra una vez y luego mide lo que sea en tu pantalla: esto es lo que la página puede hacer.',
    features: [
      {
        icon: '◎',
        name: 'Calibra de cuatro maneras',
        body: 'Detecta tu dispositivo automáticamente, elígelo de una lista, ingresa la diagonal de tu pantalla o empareja una tarjeta de crédito en pantalla. Una calibración hace que cada medición sea de tamaño real.',
      },
      {
        icon: '▦',
        name: 'Reglas en los cuatro bordes',
        body: 'Fija una regla al borde superior, inferior, izquierdo o derecho, o a los cuatro a la vez, y enmarca lo que sea en tu pantalla dentro de una cuadrícula de medición en vivo.',
      },
      {
        icon: '⇄',
        name: 'cm, mm, pulgadas y píxeles',
        body: 'Cambia de unidad al instante: marcas métricas hasta el milímetro, pulgadas fraccionarias o píxeles CSS puros para trabajo de diseño. Incluye atajos de teclado.',
      },
      {
        icon: '┼',
        name: 'Líneas guía',
        body: 'Coloca líneas de referencia horizontales y verticales donde quieras, arrástralas a su lugar y lee las distancias entre ellas en tu unidad actual.',
      },
      {
        icon: '✛',
        name: 'Coordenadas con retícula',
        body: 'Una retícula en vivo sigue tu cursor e informa su posición X/Y exacta en la unidad activa: ideal para diseños y comprobaciones de alineación.',
      },
      {
        icon: '◈',
        name: 'Pantalla completa y modo oscuro',
        body: 'Expande a toda la pantalla para medir de borde a borde y cambia entre temas claro y oscuro. Tus preferencias se recuerdan.',
      },
    ],
    calibrationAria: 'Cómo funciona la calibración',
    calibrationTitle: 'Cómo funciona la calibración',
    calibrationParas: [
      'Cada pantalla concentra una cantidad distinta de píxeles físicos en cada pulgada: un teléfono puede tener 460, un monitor de escritorio unos 100. Tu navegador, sin embargo, dibuja la página en <em>píxeles CSS</em> y nunca le dice a los sitios web su tamaño físico real.',
      'La calibración cierra esa brecha. Le das a la página una referencia confiable — tu modelo de dispositivo, la diagonal de tu pantalla o una tarjeta de crédito contra la pantalla — y esta calcula exactamente cuántos píxeles CSS equivalen a una pulgada real. A partir de ese único número, cada marca de cada regla se coloca en su posición real.',
    ],
    methods: [
      {
        name: 'Detección automática',
        body: 'Comparamos tu dispositivo con una base de datos integrada de pantallas y aplicamos su densidad de píxeles de fábrica.',
      },
      {
        name: 'Elige tu dispositivo',
        body: 'Explora entradas de iPhone, iPad, MacBook, Android y monitores, y selecciona tu modelo exacto.',
      },
      {
        name: 'Diagonal de la pantalla',
        body: 'Escribe la diagonal de tu pantalla en pulgadas; derivamos la densidad de tu resolución.',
      },
      {
        name: 'Tarjeta de crédito',
        body: 'Sostén cualquier tarjeta bancaria contra la pantalla y arrastra un deslizador hasta que el contorno en pantalla coincida con ella.',
      },
    ],
    liveNote:
      'El panel de calibración interactivo está en vivo: ábrelo desde el espacio de trabajo de la regla de arriba para calibrar con detección automática, elección de dispositivo, diagonal de la pantalla o el método de la tarjeta de crédito.',
    guideAria: 'Guía de lectura',
    guideTitle: 'Cómo leer la regla',
    units: [
      {
        name: 'Centímetros',
        body: 'Cada línea numerada es un centímetro. Las diez marcas pequeñas entre números son milímetros: así que la cuarta marca pequeña después del 7 es 7.4 cm.',
      },
      {
        name: 'Pulgadas',
        body: 'Las líneas numeradas son pulgadas enteras. Entre ellas, la línea más larga sin numerar es ½″, luego ¼″ y ¾″, luego los octavos: igual que una regla de madera.',
      },
      {
        name: 'Píxeles',
        body: 'El modo de píxeles cuenta píxeles CSS puros desde cero: la unidad que usan los diseñadores para espaciados, tamaños de letra y dimensiones de elementos en pantalla.',
      },
    ],
    guideLinksIntro: 'Para el tratamiento completo, mira las guías dedicadas:',
    guideLinks: [
      { href: '/guide/', label: 'Cómo leer la regla' },
      { href: '/cm/', label: 'Regla de centímetros' },
      { href: '/inches/', label: 'Regla de pulgadas' },
      { href: '/mm/', label: 'Regla de milímetros' },
      { href: '/pixels/', label: 'Regla de píxeles' },
    ],
    faqAria: 'Preguntas frecuentes',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Una regla de pantalla puede ser realmente precisa?',
        a: 'Sí, pero solo después de calibrar. Tu navegador dibuja en píxeles CSS, que no tienen un tamaño físico fijo. La calibración le enseña a la página cuántos píxeles CSS forman una pulgada real en tu pantalla específica. Una vez conocido ese número, cada marca cae en su posición física real.',
      },
      {
        q: '¿Por qué tengo que calibrar? ¿El sitio no puede conocer el tamaño de mi pantalla?',
        a: 'Los navegadores ocultan deliberadamente tu densidad de píxeles física exacta por privacidad, así que ningún sitio web puede medir tu pantalla directamente. El sitio parte del valor web estándar de 96 píxeles por pulgada; los cuatro métodos de calibración reemplazan ese valor con el número real de tu pantalla.',
      },
      {
        q: '¿Tengo que calibrar en cada visita?',
        a: 'No. Tu calibración se guarda en tu navegador y se carga automáticamente. Vuelve a calibrar solo si cambias de monitor, cambias la escala de tu pantalla o notas que las mediciones se desvían.',
      },
      {
        q: '¿El zoom del navegador cambia las mediciones?',
        a: 'Sí. Hacer zoom cambia la escala de los píxeles CSS, así que una regla calibrada al 100 % de zoom leerá mal al 110 %. Mantén el zoom de tu navegador al 100 % mientras mides: la aplicación te lo recuerda.',
      },
      {
        q: '¿Qué puedo medir con esto?',
        a: 'Todo lo que sea lo suficientemente pequeño para sostener contra tu pantalla: monedas, tornillos, seguros de aretes, tarjetas SD, muestras impresas, tallas de anillos. La medición recta más larga es el ancho o el alto de tu pantalla.',
      },
      {
        q: '¿Funciona en teléfonos y tabletas?',
        a: 'Sí. Abre la página en cualquier navegador móvil, calibra con tu modelo de dispositivo o con el método de la tarjeta de crédito, y la pantalla del teléfono se convierte en una regla de bolsillo: sorprendentemente útil para comprobaciones rápidas.',
      },
      {
        q: '¿Mis datos de calibración son privados?',
        a: 'Por completo. Tu calibración se guarda solo en el almacenamiento local de tu propio navegador: nunca se sube a ningún servidor y no hay cuenta a la que vincularla. Borrar los datos de tu navegador la elimina.',
      },
      {
        q: '¿Puedo medir algo más grande que mi pantalla?',
        a: 'Por partes. Mide el primer ancho de pantalla, coloca una guía en el punto final, desliza el objeto y suma los segmentos. Las guías te guardan el lugar para que los segmentos se alineen.',
      },
      {
        q: '¿Por qué la regla se ve mal en mi segundo monitor?',
        a: 'Cada pantalla tiene su propia densidad de píxeles, así que una calibración hecha en tu laptop no se transfiere a un monitor externo. Calibra una vez por pantalla, con la ventana del navegador en la pantalla que estás calibrando.',
      },
      {
        q: '¿Qué método de calibración debo elegir?',
        a: 'El método de la tarjeta de crédito es el más preciso para la mayoría de las personas, porque calibra contra un objeto físico de un tamaño estándar conocido (85.60 mm). El selector de dispositivo es igual de bueno cuando tu modelo exacto está en la lista; la detección automática es el punto de partida más rápido.',
      },
      {
        q: '¿Necesito calibrar para la regla de píxeles?',
        a: 'No. El modo de píxeles cuenta los píxeles CSS del propio navegador, que la página conoce exactamente: la calibración solo importa para las unidades físicas (cm, mm, pulgadas). La desventaja es que las lecturas en píxeles no tienen un tamaño real fijo.',
      },
      {
        q: '¿Funciona en pantalla completa?',
        a: 'Sí: pulsa F o el botón de Pantalla completa en la barra de herramientas. La pantalla completa te da la regla más larga posible y elimina los elementos del navegador que podrían distraer de la medición.',
      },
    ],
    jsonLdDescription:
      'Una regla gratuita en pantalla de tamaño físico real. Calibra tu pantalla y luego mide en centímetros, milímetros, pulgadas y píxeles.',
  },

  content: {
    legal: legalEs,
    guide: {
      title: 'Cómo leer una regla en línea (cm, mm, pulgadas, píxeles) | Real Online Ruler',
      description:
        'Aprende a leer la regla en pantalla: marcas de centímetros y milímetros, fracciones de pulgada hasta dieciseisavos, modo de píxeles, además de guías, retícula y seis herramientas avanzadas de medición.',
      h1: 'Cómo leer la regla',
      lede: 'Cuatro unidades, una pantalla. Esta guía te enseña a leer cada escala que ofrece la regla — marcas métricas, fracciones de pulgada y modo de píxeles —, a usar las guías y la retícula, y a dominar las seis herramientas avanzadas: medición por arrastre, transportador, lupa, regla flotante, registro de mediciones y cuadrícula.',
      breadcrumb: 'Guía de lectura',
      related: [
        { href: '/how-to-calibrate/', label: 'Cómo calibrar tu regla en pantalla' },
        { href: '/cm/', label: 'Regla de centímetros' },
        { href: '/inches/', label: 'Regla de pulgadas' },
        { href: '/mm/', label: 'Regla de milímetros' },
        { href: '/pixels/', label: 'Regla de píxeles' },
      ],
      faqs: [
        {
          q: '¿Cómo leo fracciones de pulgada en la regla?',
          a: 'Encuentra la pulgada numerada más cercana y luego cuenta las marcas más pequeñas después de ella. Las marcas sin numerar más largas son los medios, las siguientes más largas son los cuartos, luego los octavos y las más cortas son los dieciseisavos. Tres marcas cortas después de la marca de 2 pulgadas, por ejemplo, son 2 pulgadas y 3/16.',
        },
        {
          q: '¿Cuál es la diferencia entre los modos cm y mm?',
          a: 'Muestran la misma escala con etiquetas distintas. En el modo cm, las marcas numeradas se leen 1, 2, 3 (centímetros); en el modo mm, las mismas marcas se leen 10, 20, 30 (milímetros). Usa el modo mm cuando quieras leer un valor como 47 mm sin multiplicar.',
        },
        {
          q: '¿Cómo me ayudan las líneas guía a medir?',
          a: 'Las guías te permiten marcar posiciones en el área de medición sin sostener el objeto contra el borde de una regla. Coloca una guía en cada extremo del objeto y lee la distancia entre sus lecturas: útil para cosas que no puedes presionar planas contra el borde de la pantalla.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Conoce las cuatro unidades' },
        {
          kind: 'p',
          html: 'Cambia de unidad en cualquier momento desde la barra de herramientas o con las teclas <code>1</code> a <code>4</code>. Las marcas se redibujan a partir de tu calibración, así que cambiar nunca altera el tamaño físico: solo las etiquetas.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>cm (1)</strong>: centímetros, la unidad métrica de todos los días. Ideal para mediciones generales.',
            '<strong>mm (2)</strong>: milímetros, para precisión. Misma escala que cm, etiquetada en mm.',
            '<strong>in (3)</strong>: pulgadas con marcas fraccionarias hasta 1/16″. Ideal para trabajo en unidades estadounidenses.',
            '<strong>px (4)</strong>: píxeles CSS, para maquetas de diseño. No es una unidad física (ver abajo).',
          ],
        },
        { kind: 'h2', text: 'Cómo leer centímetros y milímetros' },
        {
          kind: 'p',
          html: 'En el <strong>modo cm</strong>, las marcas largas numeradas son centímetros (1, 2, 3…) y hay nueve marcas cortas entre cada par: esos son <strong>milímetros</strong>. Un objeto que termina cuatro marcas cortas después de la marca de 5 cm mide 5.4 cm de largo. En el <strong>modo mm</strong> la escala es idéntica, pero las marcas numeradas se leen 10, 20, 30: así ese mismo objeto se lee directamente como 54 mm, sin multiplicar.',
        },
        {
          kind: 'p',
          html: 'La regla práctica: usa cm cuando lo que te importe sea el número de centímetros («unos doce centímetros y medio») y mm cuando quieras un número único y preciso («127 mm»).',
        },
        { kind: 'h2', text: 'Cómo leer pulgadas y fracciones' },
        {
          kind: 'p',
          html: 'En el <strong>modo in</strong>, las marcas numeradas son pulgadas enteras. Entre ellas, la longitud de la marca indica la fracción: cuanto más larga, más simple la fracción:',
        },
        {
          kind: 'table',
          head: ['Longitud de la marca', 'Fracción', 'Ejemplo'],
          rows: [
            ['La más larga sin numerar', '½ pulgada', '2½″'],
            ['La siguiente más larga', '¼ de pulgada', '1¼″, 1¾″'],
            ['Mediana', '⅛ de pulgada', '3⅜″'],
            ['La más corta', '1/16 de pulgada', '5/16″'],
          ],
        },
        {
          kind: 'p',
          html: 'Para leer una medición, encuentra la pulgada numerada <em>anterior</em> al extremo del objeto, luego cuenta las marcas pequeñas después de ella y toma la marca más larga que alcance tu conteo. Tres de las marcas más cortas después de la marca de 2″ son 2 pulgadas y 3/16. Si el extremo del objeto cae exactamente en una marca mediana, lee los octavos: 2 y 6/16 son en realidad 2⅜″, y los carpinteros te lo agradecerán.',
        },
        { kind: 'h2', text: 'Cómo leer píxeles' },
        {
          kind: 'p',
          html: '<strong>El modo px</strong> es la excepción: un píxel CSS no es un tamaño físico, es la unidad propia del navegador. La regla de píxeles muestra marcas menores cada 10 píxeles y marcas numeradas cada 100 px. Úsala cuando estés maquetando un diseño («este botón debería medir unos 120 px de ancho»), no cuando necesites una medición física: para eso, quédate en cm, mm o pulgadas después de calibrar.',
        },
        { kind: 'h2', text: 'Medir con guías' },
        {
          kind: 'p',
          html: 'Pulsa <code>G</code> (o el botón de Guías) y haz clic en cualquier lugar del área de medición para colocar una línea guía: horizontal o vertical, elegida con el selector H/V. Cada guía muestra su posición en la unidad actual. Arrastra una guía para reposicionarla, haz doble clic para eliminar una y pulsa <code>Esc</code> para borrarlas todas.',
        },
        {
          kind: 'p',
          html: 'Las guías brillan cuando el objeto no puede apoyarse contra el borde de una regla: coloca una guía en cada extremo del objeto y resta las dos lecturas. Las guías siempre informan en la unidad activa, así que cambiar de unidad en medio de una medición convierte las lecturas por ti.',
        },
        { kind: 'h2', text: 'Medir con la retícula' },
        {
          kind: 'p',
          html: 'Pulsa <code>C</code> y una retícula punteada sigue tu puntero por el área de medición, con una etiqueta en vivo que muestra la posición X/Y exacta en la unidad actual. Es la forma más rápida de comprobar un solo punto — la esquina de una foto, el borde de un widget — sin colocar guías.',
        },
        { kind: 'h2', text: 'Herramientas avanzadas' },
        {
          kind: 'p',
          html: 'La fila <strong>Avanzado</strong> de la barra de herramientas agrega seis herramientas que van más allá de las reglas de borde. Todas miden en píxeles CSS escalados por tu calibración, en la unidad seleccionada.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Medir (M)</strong>: arrastra en cualquier lugar del lienzo para dibujar una línea de medición. La lectura en vivo muestra la distancia en la unidad actual y el ángulo de la línea en grados. Los extremos se ajustan a las líneas guía cercanas. Al soltar obtienes Guardar (envía la lectura al registro) o Descartar; <code>Esc</code> cancela mientras dibujas.',
            '<strong>Transportador (P)</strong>: un transportador circular que puedes arrastrar a donde quieras. Arrastra el centro para moverlo, el tirador del anillo para girar la escala y los dos tiradores de los brazos para fijar los brazos; la lectura digital muestra el ángulo entre los brazos en grados.',
            '<strong>Lupa (L)</strong>: una lupa de 3× que sigue tu cursor y muestra una vista ampliada de las reglas, las guías y el lienzo debajo de ella para leer las marcas con precisión.',
            '<strong>Regla (R)</strong>: una regla flotante, independiente de los bordes de la pantalla. Arrastra su cuerpo para moverla y el tirador ámbar de su extremo para girarla a cualquier ángulo; dibuja marcas en la unidad actual a lo largo de su longitud, con una pequeña etiqueta que muestra su rotación.',
            '<strong>Registro (O)</strong>: cada medición guardada llega aquí con una etiqueta editable. Copia una sola entrada o toda la lista, exporta como CSV o TXT, o elimina entradas. El registro persiste en el almacenamiento local de tu navegador.',
            '<strong>Cuadrícula (N)</strong>: una cuadrícula superpuesta sutil para trabajo de alineación. Cada celda mide exactamente 1 cm (o 1 pulgada: cámbialo con el selector de unidad de la cuadrícula), con una línea más fuerte cada 5 celdas.',
          ],
        },
        { kind: 'h2', text: 'Atajos de teclado' },
        {
          kind: 'p',
          html: 'Pulsa <code>H</code> en cualquier lugar de la aplicación de la regla para abrir la referencia de atajos. El mapa completo:',
        },
        {
          kind: 'ul',
          items: [
            '<code>1</code>–<code>4</code>: unidades: cm, in, mm, px',
            '<code>G</code> guías · <code>C</code> retícula · <code>F</code> pantalla completa · <code>D</code> tema',
            '<code>M</code> medición por arrastre · <code>P</code> transportador · <code>L</code> lupa',
            '<code>R</code> regla flotante · <code>O</code> registro de mediciones · <code>N</code> cuadrícula',
            '<code>Esc</code>: cancela el dibujo actual, cierra diálogos o borra todas las guías',
          ],
        },
        { kind: 'h2', text: 'Consejos para mediciones confiables' },
        {
          kind: 'ul',
          items: [
            'Mide contra el <strong>borde de medición resaltado</strong> de la regla (la línea base verde azulada), no contra el borde exterior de la barra.',
            'Alinea el <strong>inicio</strong> del objeto con la marca de cero, no con el extremo de la pantalla.',
            'Para objetos más largos que la regla, mide por secciones con guías que marquen cada segmento.',
            'Mira la pantalla de frente; en un ángulo pronunciado, el paralaje desplaza donde parece estar el borde.',
            'Cada herramienta mide en píxeles CSS escalados por tu calibración. El zoom del navegador, la escala de pantalla del sistema operativo o un monitor externo con una densidad de píxeles distinta cambiarán la escala de la regla: mantén el zoom al 100 % y vuelve a calibrar si mueves la ventana a otra pantalla.',
            'En caso de duda, verifica de nuevo con la <a href="/how-to-calibrate/">calibración con tarjeta de crédito</a>: toma un minuto.',
          ],
        },
      ],
    },
    howToCalibrate: {
      title: 'Cómo calibrar tu regla en pantalla | Real Online Ruler',
      description:
        'Calibra tu pantalla en menos de un minuto con cuatro métodos: detección automática, selector de dispositivo, diagonal de la pantalla o una tarjeta de crédito. Aprende cuál método es el más preciso y cuándo volver a calibrar.',
      h1: 'Cómo calibrar tu regla en pantalla',
      lede: 'Tu navegador dibuja en píxeles CSS, que no tienen un tamaño físico fijo. La calibración le enseña a esta página exactamente cuántos de esos píxeles forman una pulgada real en tu pantalla: después de eso, cada marca cae en su posición física real.',
      breadcrumb: 'Cómo calibrar',
      related: [
        { href: '/guide/', label: 'Cómo leer la regla: cm, mm, pulgadas y píxeles' },
        { href: '/cm/', label: 'Regla de centímetros' },
        { href: '/inches/', label: 'Regla de pulgadas' },
      ],
      faqs: [
        {
          q: '¿Cuál método de calibración es el más preciso?',
          a: 'El método de la tarjeta de crédito suele ser el más preciso porque calibra contra un objeto físico de un tamaño conocido y estandarizado (85.60 mm de ancho) que sostienes contra la pantalla. El selector de dispositivo es igual de bueno cuando tu modelo exacto está en la lista. La detección automática es un buen punto de partida y el método de la diagonal se usa mejor como alternativa.',
        },
        {
          q: '¿Con qué frecuencia debo volver a calibrar?',
          a: 'Solo cuando algo de tu pantalla cambie: un monitor nuevo, una laptop distinta, un cambio en la configuración de escala de pantalla del sistema operativo o al conectar y desconectar de una base. Tu calibración se guarda en el navegador, así que en el día a día nunca necesitas tocarla.',
        },
        {
          q: '¿La calibración funciona en un segundo monitor?',
          a: 'Cada pantalla necesita su propia calibración, porque la densidad de píxeles difiere entre pantallas. Calibra una vez por monitor; el valor guardado aplica a la pantalla en la que esté la ventana del navegador al calibrar. Si mueves la ventana a otro monitor, vuelve a calibrar ahí.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Por qué la calibración lo es todo' },
        {
          kind: 'p',
          html: 'Una regla física es confiable porque sus marcas se imprimieron a distancias conocidas. Una regla de pantalla no tiene esa garantía: los mismos 96 píxeles CSS pueden ser una pulgada completa en una laptop y notablemente menos en una pantalla de teléfono de alta densidad. El sitio parte del valor web estándar de 96 píxeles por pulgada y luego lo reemplaza con el número real de tu pantalla. Todo lo demás — centímetros, milímetros, fracciones de pulgada — es aritmética construida sobre ese único número, así que acertarlo importa más que cualquier otra cosa en este sitio.',
        },
        { kind: 'h2', text: 'Los cuatro métodos' },
        {
          kind: 'p',
          html: 'Abre el diálogo de calibración desde la barra de herramientas en la <a href="/#ruler-app">regla de la página principal</a> y elige el método que se ajuste a lo que tengas a la mano. Los cuatro se guardan automáticamente en tu navegador.',
        },
        { kind: 'h3', text: '1. Detección automática' },
        {
          kind: 'p',
          html: 'La opción más rápida. La página lee la resolución de tu pantalla y la mejor estimación del navegador sobre la relación de píxeles, y luego estima la densidad. Acierta sorprendentemente a menudo en laptops y computadoras de escritorio convencionales, y es el método que debes probar primero. Si las mediciones luego se sienten un poco desviadas, cambia a uno de los métodos manuales de abajo.',
        },
        { kind: 'h3', text: '2. Elige tu dispositivo' },
        {
          kind: 'p',
          html: 'Elige tu teléfono, tableta, laptop o monitor de la lista integrada de pantallas conocidas. Cada entrada lleva la densidad de píxeles de fábrica de ese modelo, así que las matemáticas son exactas para ese panel. Este es el mejor método en móvil, donde la detección de modelos es confiable: tu teléfono se convierte en una regla de bolsillo en unos diez segundos.',
        },
        { kind: 'h3', text: '3. Diagonal de la pantalla' },
        {
          kind: 'p',
          html: 'Ingresa el tamaño anunciado de la diagonal de tu pantalla (13.3″, 15.6″, 24″, 27″: está en la caja o en la página de especificaciones del fabricante) y la página deriva la densidad de tu resolución. Rápido y decente, pero solo tan preciso como el número anunciado, que a veces está redondeado.',
        },
        { kind: 'h3', text: '4. Tarjeta de crédito' },
        {
          kind: 'p',
          html: 'El método más preciso para la mayoría de las personas. Sostén cualquier tarjeta bancaria o de identificación estándar contra el rectángulo en pantalla y arrastra el deslizador hasta que los dos coincidan exactamente. Las tarjetas siguen el estándar ISO/IEC 7810 ID-1: 85.60 × 53.98 mm, así que estás calibrando contra un objeto físico de un tamaño conocido. Tómate tu tiempo con el deslizador; medio milímetro de desajuste aquí es todo el margen de error.',
        },
        { kind: 'h2', text: 'Consejos para la mejor precisión' },
        {
          kind: 'ul',
          items: [
            '<strong>Usa el método de la tarjeta al final, no al principio.</strong> Vale el minuto extra: elimina toda suposición sobre tu pantalla.',
            '<strong>Mantén el zoom del navegador al 100 %.</strong> Hacer zoom cambia la escala de los píxeles CSS, así que una regla calibrada al 100 % lee mal al 110 %. La aplicación te recuerda esto en su barra de estado.',
            '<strong>Calibra en la pantalla en la que medirás.</strong> La pantalla de la laptop y el monitor externo casi siempre tienen densidades distintas.',
            '<strong>Revisa la escala de pantalla de tu sistema operativo.</strong> Si cambias la configuración de escala (125 %, 150 %) después de calibrar, vuelve a calibrar: el mapeo de píxeles CSS a tamaño físico cambió.',
            '<strong>Comprueba con algo conocido.</strong> Después de calibrar, mide tu tarjeta de crédito (85.60 mm de ancho) o una moneda estadounidense de 25 centavos (24.26 mm de diámetro). Si lee bien, estás listo.',
          ],
        },
        { kind: 'h2', text: 'Cuándo volver a calibrar' },
        {
          kind: 'p',
          html: 'Casi nunca, en el día a día. Tu calibración se guarda en tu navegador bajo <code>ror-calibration</code> y se recarga en cada visita. Vuelve a calibrar solo cuando la pantalla misma cambie: un monitor nuevo, una laptop distinta, un cambio en la configuración de escala o al conectar y desconectar de una base. Si las mediciones alguna vez se sienten desviadas, la comprobación de dos minutos con la tarjeta de arriba te dirá la verdad.',
        },
        { kind: 'h2', text: 'Preguntas frecuentes' },
        { kind: 'h3', text: '¿Cuál método de calibración es el más preciso?' },
        {
          kind: 'p',
          html: 'El método de la tarjeta de crédito suele ser el más preciso porque calibra contra un objeto físico de un tamaño conocido y estandarizado (85.60 mm de ancho) que sostienes contra la pantalla. El selector de dispositivo es igual de bueno cuando tu modelo exacto está en la lista. La detección automática es un buen punto de partida y el método de la diagonal se usa mejor como alternativa.',
        },
        { kind: 'h3', text: '¿Con qué frecuencia debo volver a calibrar?' },
        {
          kind: 'p',
          html: 'Solo cuando algo de tu pantalla cambie: un monitor nuevo, una laptop distinta, un cambio en la configuración de escala de pantalla del sistema operativo o al conectar y desconectar de una base. Tu calibración se guarda en el navegador, así que en el día a día nunca necesitas tocarla.',
        },
        { kind: 'h3', text: '¿La calibración funciona en un segundo monitor?' },
        {
          kind: 'p',
          html: 'Cada pantalla necesita su propia calibración, porque la densidad de píxeles difiere entre pantallas. Calibra una vez por monitor; el valor guardado aplica a la pantalla en la que esté la ventana del navegador al calibrar. Si mueves la ventana a otro monitor, vuelve a calibrar ahí.',
        },
      ],
    },
    cm: {
      title: 'Regla de centímetros en línea: mide en cm a tamaño real | Real Online Ruler',
      description:
        'Una regla gratuita de centímetros en pantalla a tamaño físico real. Calibra una vez y luego mide en cm y mm con marcas de centímetros numeradas y marcas de milímetros.',
      h1: 'Regla de centímetros',
      lede: 'El centímetro es el caballo de batalla de la medición métrica cotidiana: lo suficientemente grande para leerlo de un vistazo, lo suficientemente fino para la mayoría de las tareas del hogar. Calibra tu pantalla una vez, cambia la regla a cm y las marcas numeradas de tu pantalla son centímetros reales.',
      breadcrumb: 'Regla de centímetros',
      related: [
        { href: '/mm/', label: 'Regla de milímetros' },
        { href: '/inches/', label: 'Regla de pulgadas' },
        { href: '/guide/', label: 'Cómo leer la regla' },
      ],
      faqs: [
        {
          q: '¿Cuántos milímetros hay en un centímetro?',
          a: 'Diez. Un centímetro se define como exactamente 10 milímetros, y la regla en pantalla lo muestra directamente: diez marcas pequeñas entre cada par de marcas de centímetros numeradas.',
        },
        {
          q: '¿A cuántas pulgadas equivale un centímetro?',
          a: 'Un centímetro equivale exactamente a 0.3937 pulgadas (una pulgada se define como exactamente 2.54 cm). Así que 10 cm son unas 3.94 pulgadas: poco menos de cuatro pulgadas.',
        },
        {
          q: '¿Qué objetos cotidianos miden alrededor de un centímetro?',
          a: 'Un lápiz estándar mide unos 0.7 cm de diámetro, una moneda de un centavo de EE. UU. mide unos 1.9 cm de diámetro y el ancho de la yema de un dedo adulto es aproximadamente 1.5–2 cm. Un clip mide unos 3 cm de largo y una tarjeta de crédito mide 8.56 cm de ancho.',
        },
      ],
      blocks: [
        { kind: 'h2', text: '¿Qué es un centímetro?' },
        {
          kind: 'p',
          html: 'Un centímetro es la centésima parte de un metro: más o menos el ancho de la yema de un dedo adulto. Está en el punto ideal para la medición cotidiana: más pequeño que una pulgada (2.54 cm), más grande que las fastidiosas unidades submilimétricas. La mayor parte del mundo mide la vida diaria en centímetros: estaturas, tamaños de papel, muebles, diagonales de pantalla.',
        },
        { kind: 'h2', text: 'Cómo leer la escala de cm' },
        {
          kind: 'p',
          html: 'En el modo cm, las <strong>marcas largas numeradas son centímetros</strong> (1, 2, 3…) y entre cada par hay nueve marcas más cortas: <strong>milímetros</strong>. La marca de longitud media a la mitad es el medio centímetro (5 mm). Un objeto que termina en la tercera marca corta después del 7 mide 7.3 cm. Si necesitas el valor puramente en milímetros, cambia al <a href="/mm/">modo mm</a> y lee 73 mm directamente.',
        },
        { kind: 'h2', text: 'Referencias de tamaño útiles' },
        {
          kind: 'p',
          html: 'Objetos cotidianos, para comprobar tu calibración o estimar sin la regla:',
        },
        {
          kind: 'ul',
          items: [
            'Clip estándar: unos <strong>3 cm</strong> de largo',
            'Pila AA: unos <strong>5 cm</strong> de largo',
            'Tarjeta de crédito o débito: <strong>8.56 cm</strong> de ancho (un estándar exacto, ideal para comprobar la calibración)',
            'Moneda de un centavo de EE. UU.: unos <strong>1.9 cm</strong> de diámetro',
            'Ancho de un smartphone: típicamente <strong>7–8 cm</strong>',
          ],
        },
        { kind: 'h2', text: 'Conversiones' },
        {
          kind: 'table',
          head: ['De', 'A', 'Multiplica por'],
          rows: [
            ['cm', 'mm', '10'],
            ['cm', 'm', '0.01'],
            ['cm', 'pulgadas', '0.3937'],
            ['pulgadas', 'cm', '2.54 (exacto)'],
          ],
        },
        {
          kind: 'p',
          html: 'La conversión a pulgadas es exacta por definición: una pulgada <em>se define</em> como 2.54 cm, así que cambiar la regla entre cm y <a href="/inches/">pulgadas</a> nunca introduce error de redondeo en las posiciones de las marcas.',
        },
        { kind: 'h2', text: 'Preguntas frecuentes' },
        { kind: 'h3', text: '¿Cuántos milímetros hay en un centímetro?' },
        {
          kind: 'p',
          html: 'Diez. Un centímetro se define como exactamente 10 milímetros, y la regla en pantalla lo muestra directamente: diez marcas pequeñas entre cada par de marcas de centímetros numeradas.',
        },
        { kind: 'h3', text: '¿A cuántas pulgadas equivale un centímetro?' },
        {
          kind: 'p',
          html: 'Un centímetro equivale exactamente a 0.3937 pulgadas (una pulgada se define como exactamente 2.54 cm). Así que 10 cm son unas 3.94 pulgadas: poco menos de cuatro pulgadas.',
        },
        { kind: 'h3', text: '¿Qué objetos cotidianos miden alrededor de un centímetro?' },
        {
          kind: 'p',
          html: 'Un lápiz estándar mide unos 0.7 cm de diámetro, una moneda de un centavo de EE. UU. mide unos 1.9 cm de diámetro y el ancho de la yema de un dedo adulto es aproximadamente 1.5–2 cm. Un clip mide unos 3 cm de largo y una tarjeta de crédito mide 8.56 cm de ancho.',
        },
      ],
    },
    inches: {
      title: 'Regla de pulgadas en línea: mide en pulgadas a tamaño real | Real Online Ruler',
      description:
        'Una regla gratuita de pulgadas en pantalla a tamaño físico real, con marcas fraccionarias hasta 1/16 de pulgada. Calibra una vez y luego mide en pulgadas enteras y fraccionarias.',
      h1: 'Regla de pulgadas',
      lede: 'La pulgada sigue siendo la unidad cotidiana en Estados Unidos: para carpintería, costura, ferretería y todo lo que se vende por pies. Calibra tu pantalla una vez, cambia la regla a pulgadas y lee pulgadas enteras más fracciones hasta un dieciseisavo.',
      breadcrumb: 'Regla de pulgadas',
      related: [
        { href: '/cm/', label: 'Regla de centímetros' },
        { href: '/mm/', label: 'Regla de milímetros' },
        { href: '/guide/', label: 'Cómo leer la regla' },
      ],
      faqs: [
        {
          q: '¿Cuántos dieciseisavos hay en una pulgada?',
          a: 'Dieciséis. La regla de pulgadas en pantalla divide cada pulgada en 16 marcas iguales. La octava marca es la media pulgada, la cuarta y la duodécima son marcas de cuartos de pulgada, y los octavos impares (segunda, sexta, décima, decimocuarta) son marcas de octavo de pulgada.',
        },
        {
          q: '¿A cuántos centímetros equivale una pulgada?',
          a: 'Exactamente 2.54 centímetros, por definición internacional. Eso hace que un centímetro sea unas 0.3937 pulgadas.',
        },
        {
          q: '¿Por qué las reglas usan fracciones en lugar de decimales?',
          a: 'Tradición y divisibilidad. Los medios, cuartos y octavos vienen de dividir repetidamente una pulgada a la mitad, lo cual es fácil de hacer físicamente y de leer a simple vista. Los decimales de pulgada también existen: los mecánicos usan milésimas, pero las pulgadas fraccionarias siguen siendo el estándar para la medición cotidiana en EE. UU.',
        },
      ],
      blocks: [
        { kind: 'h2', text: '¿Qué es una pulgada?' },
        {
          kind: 'p',
          html: 'Una pulgada es una unidad estadounidense (imperial) definida como <strong>exactamente 2.54 centímetros</strong>. Doce pulgadas forman un pie, 36 forman una yarda. A diferencia de las unidades métricas, las pulgadas se leen tradicionalmente como <strong>fracciones</strong> — medios, cuartos, octavos, dieciseisavos — en lugar de decimales, y la regla en pantalla está dibujada exactamente así.',
        },
        { kind: 'h2', text: 'Cómo leer la escala de pulgadas' },
        {
          kind: 'p',
          html: 'Las marcas numeradas son pulgadas enteras. Entre ellas, <strong>la longitud de la marca codifica la fracción</strong>: cuanto más larga la marca, más simple la fracción:',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Marca más larga sin numerar</strong>: la media pulgada (½″), una por pulgada.',
            '<strong>La siguiente más larga</strong>: cuartos de pulgada (¼″, ¾″).',
            '<strong>Marcas medianas</strong>: octavos de pulgada (⅛″, ⅜″, ⅝″, ⅞″).',
            '<strong>Marcas más cortas</strong>: dieciseisavos (1/16″ … 15/16″).',
          ],
        },
        {
          kind: 'p',
          html: 'Lee desde la pulgada numerada anterior al extremo del objeto y cuenta hacia adelante. Dos marcas medianas después de la marca de 3″ son 3 y 2/8: simplifícalo a <strong>3¼″</strong>. Cinco de las marcas más cortas después de 1″ son 1 pulgada y 5/16. El método completo de lectura, con ejemplos resueltos, está en la <a href="/guide/">guía de lectura</a>.',
        },
        { kind: 'h2', text: 'Fracción ↔ decimal ↔ métrico' },
        {
          kind: 'table',
          head: ['Fracción', 'Decimal (in)', 'Métrico'],
          rows: [
            ['1/16″', '0.0625', '1.59 mm'],
            ['⅛″', '0.125', '3.18 mm'],
            ['¼″', '0.25', '6.35 mm'],
            ['½″', '0.5', '12.7 mm'],
            ['1″', '1.0', '25.4 mm (exacto)'],
          ],
        },
        { kind: 'h2', text: 'Cuándo las pulgadas le ganan al sistema métrico' },
        {
          kind: 'p',
          html: 'Si lo que estás midiendo se <em>fabricó</em> en pulgadas — dimensiones de madera, tamaños de tornillos, accesorios de tubería, patrones de costura de EE. UU. — mide en pulgadas y olvídate de la conversión. Un listón de «2×4», un perno de ¼″ o un molde de pastel de 9″ tienen números redondos en pulgadas y torpes en métrico. Iguala la regla con la unidad nativa del objeto y los números se mantienen amigables.',
        },
        { kind: 'h2', text: 'Preguntas frecuentes' },
        { kind: 'h3', text: '¿Cuántos dieciseisavos hay en una pulgada?' },
        {
          kind: 'p',
          html: 'Dieciséis. La regla de pulgadas en pantalla divide cada pulgada en 16 marcas iguales. La octava marca es la media pulgada, la cuarta y la duodécima son marcas de cuartos de pulgada, y la segunda, sexta, décima y decimocuarta son marcas de octavo de pulgada.',
        },
        { kind: 'h3', text: '¿A cuántos centímetros equivale una pulgada?' },
        {
          kind: 'p',
          html: 'Exactamente 2.54 centímetros, por definición internacional. Un centímetro es unas 0.3937 pulgadas.',
        },
        { kind: 'h3', text: '¿Por qué las reglas usan fracciones en lugar de decimales?' },
        {
          kind: 'p',
          html: 'Tradición y divisibilidad. Los medios, cuartos y octavos vienen de dividir repetidamente una pulgada a la mitad, lo cual es fácil de hacer físicamente y de leer a simple vista. Los decimales de pulgada también existen: los mecánicos trabajan en milésimas, pero las pulgadas fraccionarias siguen siendo el estándar para la medición cotidiana en EE. UU.',
        },
      ],
    },
    mm: {
      title: 'Regla de milímetros en línea: mide en mm a tamaño real | Real Online Ruler',
      description:
        'Una regla gratuita de milímetros en pantalla a tamaño físico real. Calibra una vez y luego lee mediciones precisas en milímetros con marcas etiquetadas cada 10 mm.',
      h1: 'Regla de milímetros',
      lede: 'Cuando los centímetros son demasiado gruesos, entran los milímetros: una décima de centímetro, lo suficientemente pequeña para tornillos, ranuras y tallas de anillos. Calibra una vez, cambia a mm y cada pequeña marca de tu pantalla es un milímetro real.',
      breadcrumb: 'Regla de milímetros',
      related: [
        { href: '/cm/', label: 'Regla de centímetros' },
        { href: '/inches/', label: 'Regla de pulgadas' },
        { href: '/guide/', label: 'Cómo leer la regla' },
      ],
      faqs: [
        {
          q: '¿Qué tan pequeño es un milímetro?',
          a: 'Un milímetro es la milésima parte de un metro: aproximadamente el grosor de una tarjeta de crédito (0.76 mm) o un poco menos de la mitad del grosor de una moneda de diez centavos de EE. UU. (1.35 mm). Es la unidad más pequeña que la mayoría de las personas mide a simple vista.',
        },
        {
          q: '¿Debo usar el modo mm o el modo cm?',
          a: 'Muestran la misma escala con etiquetas distintas. Usa el modo mm cuando quieras un número único y preciso como 47 mm; usa el modo cm cuando pienses en centímetros como 4.7 cm. Para todo lo que esté por debajo de unos 5 cm, el modo mm suele ser más fácil de leer.',
        },
        {
          q: '¿Qué tan precisa es la escala de milímetros en pantalla?',
          a: 'Tan precisa como tu calibración. Con el método de la tarjeta de crédito, espera una precisión de alrededor de medio milímetro en una pantalla típica. Para trabajo submilimétrico — joyería, electrónica — usa calibradores adecuados; una regla de pantalla es una comprobación rápida, no una herramienta de metrología.',
        },
      ],
      blocks: [
        { kind: 'h2', text: '¿Qué es un milímetro?' },
        {
          kind: 'p',
          html: 'Un milímetro es la milésima parte de un metro y la décima parte de un centímetro: la unidad más pequeña que la mayoría de las personas mide cómodamente a simple vista. Todo lo que sea más delgado que un milímetro (el papel mide unos 0.1 mm) pertenece a calibradores y micrómetros; todo lo que esté entre 1 mm y unos pocos centímetros es territorio de milímetros.',
        },
        { kind: 'h2', text: 'Cómo leer la escala de mm' },
        {
          kind: 'p',
          html: 'En el modo mm, <strong>cada marca pequeña es un milímetro</strong> y las marcas largas numeradas vienen cada 10 mm, etiquetadas 10, 20, 30… Lee la marca numerada anterior al extremo del objeto y luego cuenta las marcas pequeñas después de ella: cuatro marcas después del 40 son <strong>44 mm</strong>. La marca de longitud media en cada 5 es el medio centímetro: un punto de referencia útil al contar.',
        },
        {
          kind: 'p',
          html: 'La escala es idéntica al <a href="/cm/">modo cm</a>; solo difieren las etiquetas. Cambia libremente: 44 mm y 4.4 cm son la misma marca.',
        },
        { kind: 'h2', text: 'Referencias de tamaño útiles' },
        {
          kind: 'ul',
          items: [
            'Grosor de una tarjeta de crédito o débito: <strong>0.76 mm</strong> (un estándar exacto)',
            'Grosor de una moneda de diez centavos de EE. UU.: unos <strong>1.35 mm</strong>',
            'Grosor de una tarjeta SD: unos <strong>2.1 mm</strong>',
            'Diámetro de un lápiz estándar: unos <strong>7 mm</strong>',
            'Diámetro de una moneda de 25 centavos de EE. UU.: <strong>24.26 mm</strong>',
          ],
        },
        { kind: 'h2', text: 'Conversiones' },
        {
          kind: 'table',
          head: ['De', 'A', 'Multiplica por'],
          rows: [
            ['mm', 'cm', '0.1'],
            ['mm', 'm', '0.001'],
            ['mm', 'pulgadas', '0.03937'],
            ['pulgadas', 'mm', '25.4 (exacto)'],
          ],
        },
        { kind: 'h2', text: 'Cómo obtener resultados precisos' },
        {
          kind: 'ul',
          items: [
            '<strong>Calibra con el método de la tarjeta.</strong> La precisión en milímetros vive o muere con la calibración: el método de la tarjeta física es el más preciso.',
            '<strong>Ajusta la página al 100 % de zoom y déjala ahí.</strong> Cualquier zoom cambia la escala de las marcas.',
            '<strong>Usa guías para objetos pequeños.</strong> Coloca una guía en cada extremo del objeto y resta las lecturas: más estable que calcular una marca a ojo.',
            '<strong>Mira de frente.</strong> El paralaje en ángulo puede desplazar un borde aparente un milímetro o más.',
          ],
        },
        { kind: 'h2', text: 'Preguntas frecuentes' },
        { kind: 'h3', text: '¿Qué tan pequeño es un milímetro?' },
        {
          kind: 'p',
          html: 'Un milímetro es la milésima parte de un metro: aproximadamente el grosor de una tarjeta de crédito (0.76 mm) o un poco menos de la mitad del grosor de una moneda de diez centavos de EE. UU. (1.35 mm). Es la unidad más pequeña que la mayoría de las personas mide a simple vista.',
        },
        { kind: 'h3', text: '¿Debo usar el modo mm o el modo cm?' },
        {
          kind: 'p',
          html: 'Muestran la misma escala con etiquetas distintas. Usa el modo mm cuando quieras un número único y preciso como 47 mm; usa el modo cm cuando pienses en centímetros como 4.7 cm. Para todo lo que esté por debajo de unos 5 cm, el modo mm suele ser más fácil de leer.',
        },
        { kind: 'h3', text: '¿Qué tan precisa es la escala de milímetros en pantalla?' },
        {
          kind: 'p',
          html: 'Tan precisa como tu calibración. Con el método de la tarjeta de crédito, espera una precisión de alrededor de medio milímetro en una pantalla típica. Para trabajo submilimétrico — joyería, electrónica — usa calibradores adecuados; una regla de pantalla es una comprobación rápida, no una herramienta de metrología.',
        },
      ],
    },
    pixels: {
      title: 'Regla de píxeles en línea: mide en píxeles CSS | Real Online Ruler',
      description:
        'Una regla gratuita de píxeles en pantalla para diseñadores: mide en píxeles CSS con marcas cada 10 px y marcas numeradas cada 100 px. No necesita calibración: los píxeles son la unidad propia del navegador.',
      h1: 'Regla de píxeles',
      lede: 'Los píxeles son la unidad del diseñador: el lenguaje de las maquetas, los botones y los puntos de interrupción. La regla de px cuenta los píxeles CSS de tu propio navegador, así que no necesita calibración alguna: cambia al modo px y mide lo que sea en la página en las mismas unidades que usa tu hoja de estilos.',
      breadcrumb: 'Regla de píxeles',
      related: [
        { href: '/cm/', label: 'Regla de centímetros' },
        { href: '/inches/', label: 'Regla de pulgadas' },
        { href: '/guide/', label: 'Cómo leer la regla' },
      ],
      faqs: [
        {
          q: '¿Qué tamaño tiene un píxel en la vida real?',
          a: 'No hay una respuesta fija. Un píxel CSS no tiene tamaño físico: es 1/96 de pulgada solo por convención para impresión. En tu pantalla, su tamaño físico depende de la densidad de la pantalla, que es exactamente por lo que la regla necesita calibración para las unidades físicas pero no para el modo de píxeles.',
        },
        {
          q: '¿La regla de píxeles necesita calibración?',
          a: 'No. El modo de píxeles cuenta los píxeles CSS del propio navegador, que la página conoce exactamente sin ninguna medición física. La calibración solo importa para cm, mm y pulgadas: las unidades con tamaños reales.',
        },
        {
          q: '¿Qué es la relación de píxeles del dispositivo (DPR)?',
          a: 'El número de píxeles físicos de la pantalla que se usan para dibujar un píxel CSS. Un DPR de 2 (una pantalla Retina) concentra cuatro píxeles físicos en cada píxel CSS para un renderizado más nítido. El modo de píxeles de la regla siempre muestra píxeles CSS, que es en lo que trabajan los diseñadores web.',
        },
      ],
      blocks: [
        { kind: 'h2', text: '¿Qué es un píxel CSS?' },
        {
          kind: 'p',
          html: 'Un píxel CSS es la unidad abstracta del navegador: el <code>px</code> de tu hoja de estilos. Deliberadamente <em>no</em> es un tamaño físico: en una pantalla estándar, un píxel CSS se asigna a un píxel físico, mientras que en una pantalla de alta densidad («Retina») varios píxeles físicos se unen para dibujar un solo píxel CSS con más nitidez. La relación es la <strong>relación de píxeles del dispositivo (DPR)</strong>. El diseño web ocurre en píxeles CSS, que es exactamente lo que cuenta esta regla.',
        },
        { kind: 'h2', text: 'Cómo leer la escala de px' },
        {
          kind: 'p',
          html: 'En el modo px, las marcas pequeñas vienen cada <strong>10 px</strong>, las marcas medianas cada 50 px y las marcas numeradas cada <strong>100 px</strong>. Para medir un botón: alinea su borde izquierdo con cero y lee dónde cae el borde derecho; digamos, justo después del 120, es decir, unos 124 px de ancho. Para trabajo exacto, coloca <a href="/guide/">guías</a> en ambos bordes y resta sus lecturas.',
        },
        { kind: 'h2', text: 'Por qué el modo px no necesita calibración' },
        {
          kind: 'p',
          html: 'La calibración responde una pregunta física: «¿cuántos píxeles CSS forman una pulgada real en esta pantalla?». El modo de píxeles nunca hace esa pregunta: simplemente cuenta las unidades propias del navegador, que la página conoce exactamente. Esa es también la razón por la que las mediciones en px carecen de sentido como tamaños físicos: 100 px son un número distinto de milímetros en cada pantalla. Usa px para diseño, y cm/mm/pulgadas (después de la <a href="/how-to-calibrate/">calibración</a>) para el mundo físico.',
        },
        { kind: 'h2', text: 'Píxeles frente a puntos de impresión' },
        {
          kind: 'p',
          html: 'A veces verás «1 px = 1/96 de pulgada». Esa es una convención de <em>impresión</em> de CSS, usada para que las hojas de estilos puedan convertir a unidades físicas en papel: no dice nada sobre tu pantalla. En pantalla, la única afirmación honesta es: un píxel CSS es tan grande como la densidad de la pantalla lo haga, y la regla calibrada es cómo lo descubres.',
        },
        { kind: 'h2', text: 'Referencias útiles en píxeles' },
        {
          kind: 'ul',
          items: [
            'Altura de las mayúsculas del texto del cuerpo típico (16 px): aproximadamente <strong>11 px</strong>',
            'Altura común de un botón: <strong>36–48 px</strong>',
            'Favicon: <strong>16 × 16 px</strong>',
            'Ancho de viewport Full HD: <strong>1920 px</strong> (px CSS, sin importar el DPR)',
          ],
        },
        { kind: 'h2', text: 'Preguntas frecuentes' },
        { kind: 'h3', text: '¿Qué tamaño tiene un píxel en la vida real?' },
        {
          kind: 'p',
          html: 'No hay una respuesta fija. Un píxel CSS no tiene tamaño físico: es 1/96 de pulgada solo por convención para impresión. En tu pantalla, su tamaño físico depende de la densidad de la pantalla, que es exactamente por lo que la regla necesita calibración para las unidades físicas pero no para el modo de píxeles.',
        },
        { kind: 'h3', text: '¿La regla de píxeles necesita calibración?' },
        {
          kind: 'p',
          html: 'No. El modo de píxeles cuenta los píxeles CSS del propio navegador, que la página conoce exactamente sin ninguna medición física. La calibración solo importa para cm, mm y pulgadas: las unidades con tamaños reales.',
        },
        { kind: 'h3', text: '¿Qué es la relación de píxeles del dispositivo (DPR)?' },
        {
          kind: 'p',
          html: 'El número de píxeles físicos de la pantalla que se usan para dibujar un píxel CSS. Un DPR de 2 (una pantalla Retina) concentra cuatro píxeles físicos en cada píxel CSS para un renderizado más nítido. El modo de píxeles de la regla siempre muestra píxeles CSS, que es en lo que trabajan los diseñadores web.',
        },
      ],
    },
  },
};
