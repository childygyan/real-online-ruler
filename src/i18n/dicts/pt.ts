/**
 * pt.ts — dicionário de interface em português brasileiro (pt-BR)
 * para o Real Online Ruler (Fase 8 i18n).
 *
 * Tradução natural de en.ts — não literal. O nome da marca
 * "Real Online Ruler" e os tokens técnicos (px, PPI, CSV, TXT, 3×,
 * letras de teclado, {placeholders}) são mantidos sem tradução.
 */

import type { Dict } from '../dict.js';
import { legalPt } from './legal-pt.js';

export const pt: Dict = {
  skipToContent: 'Pular para o conteúdo',

  header: {
    navAria: 'Principal',
    navMobileAria: 'Menu principal móvel',
    nav: [
      { label: 'Início', href: '/' },
      { label: 'Como calibrar', href: '/#calibration' },
      { label: 'Guia', href: '/#guide' },
      { label: 'Perguntas frequentes', href: '/#faq' },
    ],
    wordmarkAria: 'Real Online Ruler — página inicial',
    themeAria: 'Alternar modo escuro',
    themeTitle: 'Alternar modo escuro / claro (D)',
    themeSr: 'Alternar tema',
    languageAria: 'Idioma',
  },

  footer: {
    tagline:
      'Uma ferramenta de medição gratuita, sem cadastro, que transforma sua tela em uma régua em tamanho real — em centímetros, milímetros, polegadas e pixels.',
    explore: 'Explorar',
    exploreLinks: [
      { label: 'Início', href: '/' },
      { label: 'Como calibrar', href: '/#calibration' },
      { label: 'Guia de leitura', href: '/#guide' },
      { label: 'Perguntas frequentes', href: '/#faq' },
    ],
    rulerGuides: 'Guias de régua',
    guideLinks: [
      { label: 'Como calibrar', href: '/how-to-calibrate/' },
      { label: 'Lendo a régua', href: '/guide/' },
      { label: 'Régua de centímetros', href: '/cm/' },
      { label: 'Régua de polegadas', href: '/inches/' },
      { label: 'Régua de milímetros', href: '/mm/' },
      { label: 'Régua de pixels', href: '/pixels/' },
    ],
    accuracyTitle: 'Nota sobre precisão',
    accuracyBody:
      'As medições na tela só são tão precisas quanto a sua calibração. Calibre uma vez para o seu monitor, mantenha o zoom do navegador em 100% e a régua continua fiel a cada visita.',
    copyright: '© {year} Real Online Ruler. Grátis para todos — sem conta, sem download.',
    legalLabel: 'Legal',
    legalLinks: [
      { label: 'Sobre Nós', href: '/about/' },
      { label: 'Política de Privacidade', href: '/privacy-policy/' },
      { label: 'Termos de Serviço', href: '/terms-of-service/' },
      { label: 'Contato', href: '/contact/' },
    ],
  },

  layout: {
    breadcrumbHome: 'Início',
    breadcrumbAria: 'Caminho de navegação',
    keepReading: 'Continue lendo',
    relatedAria: 'Páginas relacionadas',
    ctaTitle: 'Teste na sua tela agora mesmo',
    ctaBody:
      'A régua ao vivo está na página inicial — calibrada para o seu monitor em menos de um minuto.',
    ctaButton: 'Abrir a régua',
  },

  toolbar: {
    unitGroup: 'Unidade de medida',
    edgeGroup: 'Bordas da régua',
    edgeTop: 'Superior',
    edgeBottom: 'Inferior',
    edgeLeft: 'Esquerda',
    edgeRight: 'Direita',
    precisionGroup: 'Ferramentas de precisão',
    guides: 'Guias',
    guidesTitle: 'Alternar linhas-guia (G)',
    crosshair: 'Mira',
    crosshairTitle: 'Alternar mira (C)',
    orientGroup: 'Orientação da nova guia',
    orientHTitle: 'Novas guias são horizontais',
    orientVTitle: 'Novas guias são verticais',
    fullscreen: 'Tela cheia',
    fullscreenTitle: 'Tela cheia (F)',
    theme: 'Tema',
    themeTitle: 'Alternar tema (D)',
    calibrate: 'Calibrar',
    calibrateTitle: 'Calibrar o monitor',
    advanced: 'Avançado',
    advancedGroup: 'Ferramentas avançadas de medição',
    measure: 'Medir',
    measureTitle: 'Arraste sobre a área para medir distância e ângulo (M)',
    protractor: 'Transferidor',
    protractorTitle: 'Transferidor sobreposto (P)',
    loupe: 'Lupa',
    loupeTitle: 'Lupa de aumento (L)',
    ruler: 'Régua',
    rulerTitle: 'Régua flutuante giratória (R)',
    log: 'Registro',
    logTitle: 'Registro de medições (O)',
    grid: 'Grade',
    gridTitle: 'Grade sobreposta (N)',
    gridUnit: 'Unidade da grade',
    gridUnitAria: 'Unidade da célula da grade',
    gridCm: 'cm',
    gridInch: 'polegada',
    help: '? Atalhos',
    helpTitle: 'Atalhos de teclado (H)',
  },

  stage: {
    aria: 'Área de medição',
    hint: 'Ative as bordas acima para enquadrar esta área com réguas. Encoste um objeto pequeno na borda de medição destacada da régua e leia o tamanho.',
    guidesHint:
      'Com as Guias ativadas, clique em qualquer lugar aqui para soltar uma linha-guia; arraste uma linha para movê-la, clique duas vezes nela para removê-la, Esc apaga todas as guias.',
    guideAt: 'Guia em {value}',
  },

  status: {
    loading: 'Carregando calibração…',
    uncalibrated: 'Não calibrado — usando o padrão CSS de 96 px/in.',
    calibrateNow: 'Calibrar agora',
    calibrated: '{px} px/in · calibrado via {what}.',
    zoomNote: 'Mantenha o zoom do navegador em 100% — aumentar o zoom redimensiona a régua.',
    shortcutHint: 'Pressione {key} para ver o mapa completo de atalhos de teclado.',
  },

  measure: {
    popupAria: 'Salvar medição',
    save: 'Salvar no registro',
    discard: 'Descartar',
  },

  protractor: {
    aria: 'Transferidor sobreposto: arraste o centro para mover, a alça âmbar para girar, as alças azul-petróleo e âmbar dos braços para medir um ângulo',
    moveArmA: 'Arraste para mover o braço A',
    moveArmB: 'Arraste para mover o braço B',
    rotate: 'Arraste para girar o transferidor',
    move: 'Arraste para mover o transferidor',
    caption: 'centro move · anel gira',
  },

  floatingRuler: {
    aria: 'Régua flutuante: arraste o corpo para mover, a alça na extremidade direita para girar',
    rotateTitle: 'Arraste para girar',
  },

  log: {
    panelAria: 'Registro de medições',
    title: 'Registro de medições',
    close: 'Fechar',
    closeAria: 'Fechar registro de medições',
    empty: 'Nenhuma medição ainda. Ative Medir ({key}), arraste sobre a área e depois Salve.',
    labelAria: 'Rótulo da medição',
    copy: 'Copiar',
    delete: 'Excluir',
    copyAll: 'Copiar tudo',
    csv: 'CSV',
    txt: 'TXT',
    clear: 'Limpar',
    copied: 'Copiado',
    failed: 'Falhou',
  },

  help: {
    title: 'Atalhos de teclado',
    close: 'Fechar',
    rows: [
      { keys: ['1', '2', '3', '4'], label: 'Unidades: cm, in, mm, px' },
      { keys: ['G'], label: 'Alternar linhas-guia' },
      { keys: ['C'], label: 'Alternar mira' },
      { keys: ['F'], label: 'Tela cheia' },
      { keys: ['D'], label: 'Alternar tema' },
      { keys: ['M'], label: 'Ferramenta de medir arrastando' },
      { keys: ['P'], label: 'Transferidor sobreposto' },
      { keys: ['L'], label: 'Lupa de aumento (3×)' },
      { keys: ['R'], label: 'Régua flutuante' },
      { keys: ['O'], label: 'Registro de medições' },
      { keys: ['N'], label: 'Grade sobreposta' },
      { keys: ['H'], label: 'Esta ajuda de atalhos' },
      { keys: ['Esc'], label: 'Cancelar desenho / fechar / apagar guias' },
    ],
  },

  calibrate: {
    title: 'Calibre seu monitor',
    currentLabel: 'Atual:',
    defaultReadout: '96 px/in (padrão)',
    saved: 'Salvo',
    closeAria: 'Fechar diálogo de calibração',
    tablistAria: 'Métodos de calibração',
    tabs: {
      auto: 'Detecção automática',
      device: 'Escolher dispositivo',
      diagonal: 'Diagonal da tela',
      card: 'Cartão de crédito',
    },
    autoBody:
      'Analisamos seu navegador e a resolução da tela, comparamos com um banco de dados interno de especificações publicadas de monitores e aplicamos a densidade de pixels de fábrica. É a opção mais rápida quando encontra seu dispositivo.',
    detectButton: 'Detectar meu dispositivo',
    deviceBody:
      'Sabe o modelo exato? Selecione abaixo — aplicamos a densidade de pixels publicada dele, ajustada para a escala do seu monitor.',
    categoryLabel: 'Categoria',
    deviceLabel: 'Dispositivo',
    diagonalBody:
      'Digite o tamanho da diagonal da sua tela em polegadas (geralmente está na caixa ou na página de especificações do fabricante — ex.: 15.6 para um notebook típico). Combinamos com a resolução da sua tela para calcular a densidade exata. Mantenha o zoom do navegador em 100%.',
    diagonalLabel: 'Diagonal (polegadas)',
    calculate: 'Calcular',
    cardBody:
      'Coloque qualquer cartão de crédito, débito ou identidade encostado na tela, sobre o contorno abaixo. Arraste o controle deslizante até o contorno coincidir exatamente com as bordas do cartão e use a calibração. Cartões padrão medem 85.60 × 53.98 mm.',
    cardSize: '85.60 × 53.98 mm',
    assumedDensity: 'Densidade presumida',
    useCalibration: 'Usar esta calibração',
    footerNote:
      'Salvo somente neste navegador. Recalibre se trocar de monitor ou alterar a escala do monitor.',
    reset: 'Redefinir para 96 PPI',
    methods: {
      auto: 'detecção automática',
      device: 'escolha de dispositivo',
      diagonal: 'diagonal da tela',
      card: 'cartão de crédito',
      default: 'padrão',
    },
    autoDetected: 'Detectado:',
    factoryPpi: '{ppi} PPI de fábrica',
    highConfidence: 'Alta confiança — modelo exato encontrado.',
    mediumConfidence:
      'Confiança média — encontramos um monitor compartilhado por modelos semelhantes (mesma densidade).',
    computedAtScaling: 'Densidade calculada na escala do seu monitor: <strong>{px} px/in</strong>',
    pxPerInch: 'px/in',
    recognizedAs:
      'Reconhecemos este como um monitor <strong>{category}</strong>, mas não conseguimos identificar o modelo exato.',
    notRecognized:
      'Não conseguimos reconhecer este dispositivo a partir das informações do seu navegador.',
    tryTabs: 'Tente a aba <strong>{a}</strong>, <strong>{b}</strong> ou <strong>{c}</strong>.',
    factoryWord: 'fábrica',
    atScaling: 'Na escala atual do seu monitor (×{dpr}): <strong>{px} px/in</strong>',
    invalidDiagonal: 'Digite uma diagonal válida em polegadas.',
    screenIs: 'Tela: {w} × {h} px, diagonal de {d} pol',
    computedDensity: 'Densidade calculada: <strong>{px} px/in</strong>',
    diagonalDeviceName: '{d} pol de diagonal',
    cardDeviceName: 'cartão de 85.60 × 53.98 mm',
  },

  notFound: {
    title: 'Página não encontrada — Real Online Ruler',
    description: 'A página que você procurava não existe no Real Online Ruler.',
    heading: 'Esta marca não está na régua',
    body: 'A página que você pediu não existe. Vamos voltar a medir.',
    cta: 'Voltar para a régua',
  },

  home: {
    title: 'Real Online Ruler — Régua de Tela Grátis em Tamanho Real (cm, mm, Polegadas, Pixels)',
    description:
      'Transforme sua tela em uma régua de verdade. Calibre uma vez para o seu monitor e meça objetos pequenos em centímetros, milímetros, polegadas ou pixels — grátis, sem cadastro, sem download.',
    badge: 'Grátis · Sem cadastro · Sem download',
    h1Before: 'Sua tela, transformada em uma ',
    h1Emphasis: 'régua de verdade',
    h1After: '.',
    lede: 'Calibre uma vez para o seu monitor e esta página vira uma ferramenta de medição em tamanho real. Encoste uma moeda, um parafuso ou um retalho na borda e leia em centímetros, milímetros, polegadas ou pixels.',
    openRuler: 'Abrir a régua',
    howCalibration: 'Como funciona a calibração',
    tip: 'Dica: mantenha o zoom do navegador em 100% ao medir.',
    workspaceAria: 'Área de trabalho da régua',
    featuresAria: 'Recursos',
    featuresTitle: 'Uma página, uma bancada de medição completa',
    featuresLede: 'Calibre uma vez e meça qualquer coisa na tela — veja o que a página pode fazer.',
    features: [
      {
        icon: '◎',
        name: 'Calibre de quatro formas',
        body: 'Detecte seu dispositivo automaticamente, escolha-o em uma lista, digite a diagonal da tela ou compare um cartão de crédito na tela. Uma calibração torna todas as medições fiéis ao tamanho real.',
      },
      {
        icon: '▦',
        name: 'Réguas nas quatro bordas',
        body: 'Fixe uma régua na borda superior, inferior, esquerda ou direita — ou nas quatro de uma vez — e enquadre qualquer coisa na tela dentro de uma grade de medição ao vivo.',
      },
      {
        icon: '⇄',
        name: 'cm, mm, polegadas e pixels',
        body: 'Troque de unidade na hora: marcas métricas até o milímetro, marcas fracionárias de polegada ou pixels CSS puros para trabalho de design. Atalhos de teclado incluídos.',
      },
      {
        icon: '┼',
        name: 'Linhas-guia',
        body: 'Solte linhas de referência horizontais e verticais em qualquer lugar, arraste-as para o lugar e leia as distâncias entre elas na unidade atual.',
      },
      {
        icon: '✛',
        name: 'Coordenadas da mira',
        body: 'Uma mira ao vivo segue seu cursor e informa a posição exata X/Y na unidade ativa — útil para layouts e verificações de alinhamento.',
      },
      {
        icon: '◈',
        name: 'Tela cheia e modo escuro',
        body: 'Expanda para o monitor inteiro para medir de borda a borda e alterne entre os temas claro e escuro. Suas preferências são lembradas.',
      },
    ],
    calibrationAria: 'Como funciona a calibração',
    calibrationTitle: 'Como funciona a calibração',
    calibrationParas: [
      'Cada tela concentra um número diferente de pixels físicos em cada polegada — um celular pode ter 460, um monitor de mesa algo perto de 100. Seu navegador, porém, desenha a página em <em>pixels CSS</em>, e nunca informa aos sites seu verdadeiro tamanho físico.',
      'A calibração fecha essa lacuna. Você fornece à página uma referência confiável — o modelo do dispositivo, a diagonal da tela ou um cartão de crédito encostado no monitor — e ela calcula exatamente quantos pixels CSS equivalem a uma polegada real. A partir desse único número, cada marca de cada régua é posicionada em seu lugar verdadeiro.',
    ],
    methods: [
      {
        name: 'Detecção automática',
        body: 'Comparamos seu dispositivo com um banco de dados interno de monitores e aplicamos sua densidade de pixels de fábrica.',
      },
      {
        name: 'Escolha seu dispositivo',
        body: 'Navegue por entradas de iPhone, iPad, MacBook, Android e monitores e selecione seu modelo exato.',
      },
      {
        name: 'Diagonal da tela',
        body: 'Digite a diagonal da sua tela em polegadas; derivamos a densidade da sua resolução.',
      },
      {
        name: 'Cartão de crédito',
        body: 'Encoste qualquer cartão de banco na tela e arraste o controle deslizante até o contorno na tela coincidir com ele.',
      },
    ],
    liveNote:
      'O painel interativo de calibração está ao vivo — abra-o na área de trabalho da régua acima para calibrar com detecção automática, escolha de dispositivo, diagonal da tela ou o método do cartão de crédito.',
    guideAria: 'Guia de leitura',
    guideTitle: 'Como ler a régua',
    units: [
      {
        name: 'Centímetros',
        body: 'Cada linha numerada é um centímetro. Os dez tracinhos entre os números são milímetros — então o 4º tracinho depois do 7 é 7.4 cm.',
      },
      {
        name: 'Polegadas',
        body: 'As linhas numeradas são polegadas inteiras. Entre elas, a linha mais longa sem número é ½″, depois ¼″ e ¾″, depois oitavos — igual a uma régua de madeira.',
      },
      {
        name: 'Pixels',
        body: 'O modo pixel conta pixels CSS puros a partir do zero — a unidade que designers usam para espaçamentos, tamanhos de fonte e dimensões de elementos na tela.',
      },
    ],
    guideLinksIntro: 'Para o tratamento completo, veja os guias dedicados:',
    guideLinks: [
      { href: '/guide/', label: 'Lendo a régua' },
      { href: '/cm/', label: 'Régua de centímetros' },
      { href: '/inches/', label: 'Régua de polegadas' },
      { href: '/mm/', label: 'Régua de milímetros' },
      { href: '/pixels/', label: 'Régua de pixels' },
    ],
    faqAria: 'Perguntas frequentes',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      {
        q: 'Uma régua de tela pode ser mesmo precisa?',
        a: 'Sim — mas só depois da calibração. Seu navegador desenha em pixels CSS, que não têm tamanho físico fixo. A calibração ensina à página quantos pixels CSS formam uma polegada real no seu monitor específico. Quando esse número é conhecido, cada marca cai em sua posição física verdadeira.',
      },
      {
        q: 'Por que preciso calibrar? O site não pode simplesmente saber o tamanho da minha tela?',
        a: 'Os navegadores escondem de propósito sua densidade física exata de pixels por privacidade, então nenhum site consegue medir sua tela diretamente. O site começa do palpite padrão da web de 96 pixels por polegada; os quatro métodos de calibração substituem esse palpite pelo número real do seu monitor.',
      },
      {
        q: 'Preciso calibrar a cada visita?',
        a: 'Não. Sua calibração fica salva no navegador e é carregada automaticamente. Recalibre apenas se trocar de monitor, mudar a escala do monitor ou notar as medições desviando.',
      },
      {
        q: 'O zoom do navegador muda as medições?',
        a: 'Sim. Aumentar o zoom redimensiona os pixels CSS, então uma régua calibrada com 100% de zoom vai ler errado em 110%. Mantenha o zoom do navegador em 100% ao medir — o app lembra você disso.',
      },
      {
        q: 'O que dá para medir de verdade com ela?',
        a: 'Qualquer coisa pequena o bastante para encostar na tela: moedas, parafusos, tarraxas de brinco, cartões SD, retalhos impressos, tamanhos de anel. A medição reta mais longa é a largura ou a altura da sua tela.',
      },
      {
        q: 'Funciona em celulares e tablets?',
        a: 'Sim. Abra a página em qualquer navegador móvel, calibre com o modelo do dispositivo ou o método do cartão de crédito, e a tela do celular vira uma régua de bolso — surpreendentemente útil para verificações rápidas.',
      },
      {
        q: 'Meus dados de calibração são privados?',
        a: 'Totalmente. Sua calibração fica guardada apenas no armazenamento local do seu próprio navegador — nunca é enviada, e não há conta para vinculá-la. Limpar os dados do navegador a remove.',
      },
      {
        q: 'Dá para medir algo maior que a tela?',
        a: 'Em partes. Meça a primeira largura de tela, solte uma guia no ponto final, deslize o objeto e some os segmentos. As guias marcam seu lugar para os segmentos se alinharem.',
      },
      {
        q: 'Por que a régua parece errada no meu segundo monitor?',
        a: 'Cada monitor tem sua própria densidade de pixels, então uma calibração feita no notebook não se transfere para um monitor externo. Calibre uma vez por monitor, com a janela do navegador no monitor que você está calibrando.',
      },
      {
        q: 'Qual método de calibração devo escolher?',
        a: 'O método do cartão de crédito é o mais preciso para a maioria das pessoas, porque calibra contra um objeto físico de tamanho padrão conhecido (85.60 mm). O seletor de dispositivos é igualmente bom quando seu modelo exato está listado; a detecção automática é o ponto de partida mais rápido.',
      },
      {
        q: 'Preciso calibrar para a régua de pixels?',
        a: 'Não. O modo pixel conta os próprios pixels CSS do navegador, que a página conhece exatamente — a calibração só importa para unidades físicas (cm, mm, polegadas). A contrapartida é que leituras em pixels não têm tamanho fixo no mundo real.',
      },
      {
        q: 'Funciona em tela cheia?',
        a: 'Sim — pressione F ou o botão Tela cheia na barra de ferramentas. A tela cheia dá a régua mais longa possível e remove as bordas do navegador que poderiam distrair da medição.',
      },
    ],
    jsonLdDescription:
      'Uma régua de tela gratuita em tamanho real. Calibre seu monitor e meça em centímetros, milímetros, polegadas e pixels.',
  },

  content: {
    legal: legalPt,
    guide: {
      title: 'Como Ler uma Régua Online (cm, mm, Polegadas, Pixels) | Real Online Ruler',
      description:
        'Aprenda a ler a régua na tela: marcas de centímetros e milímetros, frações de polegada até dezesseis avos, modo pixel, além de guias, mira e seis ferramentas avançadas de medição.',
      h1: 'Como ler a régua',
      lede: 'Quatro unidades, uma tela. Este guia ensina você a ler cada escala que a régua oferece — marcas métricas, frações de polegada e modo pixel — a usar as guias e a mira, e a dominar as seis ferramentas avançadas: medir arrastando, transferidor, lupa, régua flutuante, registro de medições e grade.',
      breadcrumb: 'Guia de leitura',
      related: [
        { href: '/how-to-calibrate/', label: 'Como calibrar sua régua de tela' },
        { href: '/cm/', label: 'Régua de centímetros' },
        { href: '/inches/', label: 'Régua de polegadas' },
        { href: '/mm/', label: 'Régua de milímetros' },
        { href: '/pixels/', label: 'Régua de pixels' },
      ],
      faqs: [
        {
          q: 'Como leio frações de polegada na régua?',
          a: 'Encontre a polegada numerada mais próxima e conte os tracinhos menores depois dela. Os traços sem número mais longos são metades, os seguintes são quartos, depois oitavos, e os mais curtos são dezesseis avos. Três tracinhos curtos depois da marca de 2 polegadas, por exemplo, são 2 e 3/16 polegadas.',
        },
        {
          q: 'Qual a diferença entre os modos cm e mm?',
          a: 'Eles mostram a mesma escala com rótulos diferentes. No modo cm, as marcas numeradas leem 1, 2, 3 (centímetros); no modo mm, as mesmas marcas leem 10, 20, 30 (milímetros). Use o modo mm quando quiser ler um valor como 47 mm sem multiplicar.',
        },
        {
          q: 'Como as linhas-guia ajudam a medir?',
          a: 'As guias permitem marcar posições na área de medição sem encostar o objeto na borda da régua. Solte uma guia em cada extremidade do objeto e leia a distância entre as leituras — útil para coisas que você não consegue pressionar contra a borda da tela.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Conheça as quatro unidades' },
        {
          kind: 'p',
          html: 'Troque de unidade a qualquer momento pela barra de ferramentas ou com as teclas <code>1</code>–<code>4</code>. As marcas são redesenhadas a partir da sua calibração, então trocar nunca muda o tamanho físico — só os rótulos.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>cm (1)</strong> — centímetros, a unidade métrica do dia a dia. Ideal para medições gerais.',
            '<strong>mm (2)</strong> — milímetros, para precisão. Mesma escala do cm, rotulada em mm.',
            '<strong>in (3)</strong> — polegadas com marcas fracionárias até 1/16″. Ideal para trabalhos no padrão americano.',
            '<strong>px (4)</strong> — pixels CSS, para mockups de design. Não é uma unidade física (veja abaixo).',
          ],
        },
        { kind: 'h2', text: 'Lendo centímetros e milímetros' },
        {
          kind: 'p',
          html: 'No <strong>modo cm</strong>, os traços longos numerados são centímetros (1, 2, 3…) e há nove tracinhos curtos entre cada par — esses são milímetros. Um objeto que termina quatro tracinhos curtos depois da marca de 5 cm tem 5.4 cm de comprimento. No <strong>modo mm</strong>, a escala é idêntica, mas os traços numerados leem 10, 20, 30 — então esse mesmo objeto lê 54 mm diretamente, sem multiplicar.',
        },
        {
          kind: 'p',
          html: 'A regra prática: use cm quando o número de centímetros é o que importa (“cerca de doze centímetros e meio”), e mm quando você quer um único número preciso (“127 mm”).',
        },
        { kind: 'h2', text: 'Lendo polegadas e frações' },
        {
          kind: 'p',
          html: 'No <strong>modo in</strong>, os traços numerados são polegadas inteiras. Entre eles, o comprimento do traço indica a fração — quanto mais longo, mais simples a fração:',
        },
        {
          kind: 'table',
          head: ['Comprimento do traço', 'Fração', 'Exemplo'],
          rows: [
            ['Mais longo sem número', '½ polegada', '2½″'],
            ['Segundo mais longo', '¼ de polegada', '1¼″, 1¾″'],
            ['Médio', '⅛ de polegada', '3⅜″'],
            ['Mais curto', '1/16 de polegada', '5/16″'],
          ],
        },
        {
          kind: 'p',
          html: 'Para ler uma medição, encontre a polegada numerada <em>abaixo</em> da extremidade do objeto, depois conte os tracinhos depois dela e pegue o traço mais longo que sua contagem alcançar. Três dos tracinhos mais curtos depois da marca de 2″ são 2 e 3/16 polegadas. Se a extremidade do objeto cair exatamente sobre um traço médio, leia os oitavos — 2 e 6/16 é na verdade 2⅜″, e os marceneiros vão agradecer pela simplificação.',
        },
        { kind: 'h2', text: 'Lendo pixels' },
        {
          kind: 'p',
          html: 'O <strong>modo px</strong> é o diferente da turma: um pixel CSS não é um tamanho físico, é a unidade do próprio navegador. A régua de pixels mostra tracinhos menores a cada 10 pixels e marcas numeradas a cada 100 px. Use-o ao montar um design (“este botão deve ter cerca de 120 px de largura”), não quando precisar de uma medição física — para isso, fique em cm, mm ou polegadas depois de calibrar.',
        },
        { kind: 'h2', text: 'Medindo com guias' },
        {
          kind: 'p',
          html: 'Pressione <code>G</code> (ou o botão Guias) e clique em qualquer lugar da área de medição para soltar uma linha-guia — horizontal ou vertical, escolhida com o seletor H/V. Cada guia mostra sua posição na unidade atual. Arraste uma guia para reposicioná-la, clique duas vezes para remover uma e pressione <code>Esc</code> para apagar todas.',
        },
        {
          kind: 'p',
          html: 'As guias brilham quando o objeto não pode ficar contra a borda da régua: solte uma guia em cada extremidade do objeto e subtraia as duas leituras. As guias sempre informam na unidade ativa, então trocar de unidade no meio da medição converte as leituras para você.',
        },
        { kind: 'h2', text: 'Medindo com a mira' },
        {
          kind: 'p',
          html: 'Pressione <code>C</code> e uma mira tracejada segue seu ponteiro pela área de medição, com um selo ao vivo mostrando a posição exata X/Y na unidade atual. É a forma mais rápida de verificar um único ponto — o canto de uma foto, a borda de um widget — sem soltar guias.',
        },
        { kind: 'h2', text: 'Ferramentas avançadas' },
        {
          kind: 'p',
          html: 'A linha <strong>Avançado</strong> da barra de ferramentas adiciona seis ferramentas que vão além das réguas de borda. Todas medem em pixels CSS escalados pela sua calibração, na unidade selecionada no momento.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Medir (M)</strong> — arraste em qualquer lugar da área para desenhar uma linha de medição. A leitura ao vivo mostra a distância na unidade atual e o ângulo da linha em graus. As extremidades se encaixam nas linhas-guia próximas. Solte para obter Salvar (envia a leitura para o registro) ou Descartar; <code>Esc</code> cancela durante o desenho.',
            '<strong>Transferidor (P)</strong> — um transferidor circular que você pode arrastar para qualquer lugar. Arraste o centro para movê-lo, a alça do anel para girar a escala e as duas alças dos braços para posicionar os braços; a leitura digital mostra o ângulo entre os braços em graus.',
            '<strong>Lupa (L)</strong> — uma lupa de 3× que segue seu cursor, mostrando uma visão ampliada das réguas, guias e da área sob ela para leitura precisa dos traços.',
            '<strong>Régua (R)</strong> — uma régua flutuante, independente das bordas da tela. Arraste o corpo para movê-la e a alça âmbar na extremidade para girá-la em qualquer ângulo; ela desenha traços na unidade atual ao longo do comprimento, com um pequeno selo mostrando sua rotação.',
            '<strong>Registro (O)</strong> — toda medição salva cai aqui com um rótulo editável. Copie uma única entrada ou a lista inteira, exporte como CSV ou TXT, ou exclua entradas. O registro persiste no armazenamento local do seu navegador.',
            '<strong>Grade (N)</strong> — uma grade sutil sobreposta para trabalhos de alinhamento. Cada célula tem exatamente 1 cm (ou 1 polegada — troque com o seletor de unidade da Grade), com uma linha mais forte a cada 5 células.',
          ],
        },
        { kind: 'h2', text: 'Atalhos de teclado' },
        {
          kind: 'p',
          html: 'Pressione <code>H</code> em qualquer lugar no app da régua para abrir a referência de atalhos. O mapa completo:',
        },
        {
          kind: 'ul',
          items: [
            '<code>1</code>–<code>4</code> — unidades: cm, in, mm, px',
            '<code>G</code> guias · <code>C</code> mira · <code>F</code> tela cheia · <code>D</code> tema',
            '<code>M</code> medir arrastando · <code>P</code> transferidor · <code>L</code> lupa',
            '<code>R</code> régua flutuante · <code>O</code> registro de medições · <code>N</code> grade',
            '<code>Esc</code> — cancela o desenho atual, fecha diálogos ou apaga todas as guias',
          ],
        },
        { kind: 'h2', text: 'Dicas para medições confiáveis' },
        {
          kind: 'ul',
          items: [
            'Meça contra a <strong>borda de medição destacada</strong> da régua (a linha de base azul-petróleo), não contra a borda externa da barra.',
            'Alinhe o <strong>início</strong> do objeto com a marca zero, não com o fim da tela.',
            'Para objetos mais longos que a régua, meça em partes com guias marcando cada segmento.',
            'Olhe para a tela de frente; em um ângulo muito inclinado, a paralaxe desloca onde a borda parece estar.',
            'Toda ferramenta mede em pixels CSS escalados pela sua calibração. O zoom do navegador, a escala de exibição do sistema ou um monitor externo com densidade de pixels diferente vão redimensionar a régua — mantenha o zoom em 100% e recalibre se mover a janela para outro monitor.',
            'Na dúvida, confira de novo com a <a href="/how-to-calibrate/">calibração pelo cartão de crédito</a> — leva um minuto.',
          ],
        },
      ],
    },
    howToCalibrate: {
      title: 'Como Calibrar Sua Régua de Tela | Real Online Ruler',
      description:
        'Calibre seu monitor em menos de um minuto com quatro métodos: detecção automática, seletor de dispositivos, diagonal da tela ou cartão de crédito. Saiba qual método é mais preciso e quando recalibrar.',
      h1: 'Como calibrar sua régua de tela',
      lede: 'Seu navegador desenha em pixels CSS, que não têm tamanho físico fixo. A calibração ensina a esta página exatamente quantos desses pixels formam uma polegada real no seu monitor — depois disso, cada marca cai em sua posição física verdadeira.',
      breadcrumb: 'Como calibrar',
      related: [
        { href: '/guide/', label: 'Como ler a régua: cm, mm, polegadas e pixels' },
        { href: '/cm/', label: 'Régua de centímetros' },
        { href: '/inches/', label: 'Régua de polegadas' },
      ],
      faqs: [
        {
          q: 'Qual método de calibração é o mais preciso?',
          a: 'O método do cartão de crédito costuma ser o mais preciso porque calibra contra um objeto físico de tamanho conhecido e padronizado (85.60 mm de largura) que você encosta na tela. O seletor de dispositivos é igualmente bom quando seu modelo exato está listado. A detecção automática é um bom ponto de partida, e o método da diagonal funciona melhor como alternativa.',
        },
        {
          q: 'Com que frequência devo recalibrar?',
          a: 'Só quando algo no seu monitor muda: um monitor novo, outro notebook, uma configuração de escala de exibição do sistema alterada, ou ao conectar/desconectar. Sua calibração fica salva no navegador, então no dia a dia você nunca precisa mexer nela.',
        },
        {
          q: 'A calibração funciona em um segundo monitor?',
          a: 'Cada monitor precisa da sua própria calibração, porque a densidade de pixels difere entre as telas. Calibre uma vez por monitor; o valor salvo se aplica ao monitor em que a janela do navegador estiver quando você calibrar. Se mover a janela para outro monitor, recalibre lá.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Por que a calibração é o jogo todo' },
        {
          kind: 'p',
          html: 'Uma régua física é confiável porque suas marcas foram impressas a distâncias conhecidas. Uma régua de tela não tem essa garantia: os mesmos 96 pixels CSS podem ser uma polegada inteira em um notebook e visivelmente menos em um celular de alta densidade. O site começa do palpite padrão da web de 96 pixels por polegada e o substitui pelo número real do seu monitor. Todo o resto — centímetros, milímetros, frações de polegada — é aritmética construída sobre esse único número, então acertá-lo importa mais do que qualquer outra coisa neste site.',
        },
        { kind: 'h2', text: 'Os quatro métodos' },
        {
          kind: 'p',
          html: 'Abra o diálogo de calibração pela barra de ferramentas na <a href="/#ruler-app">régua da página inicial</a> e escolha o método que couber no que você tem em mãos. Os quatro salvam automaticamente no seu navegador.',
        },
        { kind: 'h3', text: '1. Detecção automática' },
        {
          kind: 'p',
          html: 'A opção mais rápida. A página lê a resolução da sua tela e o melhor palpite do navegador sobre a taxa de pixels, e então estima a densidade. Acerta com frequência surpreendente em notebooks e desktops comuns, e é o método para tentar primeiro. Se as medições depois parecerem um pouco erradas, mude para um dos métodos manuais abaixo.',
        },
        { kind: 'h3', text: '2. Escolha seu dispositivo' },
        {
          kind: 'p',
          html: 'Escolha seu celular, tablet, notebook ou monitor na lista interna de monitores conhecidos. Cada entrada traz a densidade de pixels de fabricante daquele modelo, então a conta é exata para aquele painel. Este é o melhor método no celular, onde a detecção de modelo é confiável — seu telefone vira uma régua de bolso em cerca de dez segundos.',
        },
        { kind: 'h3', text: '3. Diagonal da tela' },
        {
          kind: 'p',
          html: 'Digite o tamanho anunciado da diagonal da sua tela (13.3″, 15.6″, 24″, 27″ — está na caixa ou na página de especificações do fabricante) e a página deriva a densidade da sua resolução. Rápido e razoável, mas só tão preciso quanto o número anunciado, que às vezes é arredondado.',
        },
        { kind: 'h3', text: '4. Cartão de crédito' },
        {
          kind: 'p',
          html: 'O método mais preciso para a maioria das pessoas. Encoste qualquer cartão de banco ou identidade padrão contra o retângulo na tela e arraste o controle deslizante até os dois coincidirem exatamente. Os cartões seguem o padrão ISO/IEC 7810 ID-1 — 85.60 × 53.98 mm — então você está calibrando contra um objeto físico de tamanho conhecido. Vá com calma no controle deslizante; meio milímetro de diferença aqui é todo o orçamento de erro.',
        },
        { kind: 'h2', text: 'Dicas para a melhor precisão' },
        {
          kind: 'ul',
          items: [
            '<strong>Use o método do cartão por último, não primeiro.</strong> Vale o minuto extra — ele remove todas as suposições sobre seu monitor.',
            '<strong>Mantenha o zoom do navegador em 100%.</strong> Aumentar o zoom redimensiona os pixels CSS, então uma régua calibrada em 100% lê errado em 110%. O app lembra você disso na barra de status.',
            '<strong>Calibre no monitor em que você vai medir.</strong> Tela de notebook e monitor externo quase sempre têm densidades diferentes.',
            '<strong>Verifique a escala de exibição do sistema.</strong> Se mudar a configuração de escala (125%, 150%) depois de calibrar, recalibre — o mapeamento de pixels CSS para o físico mudou.',
            '<strong>Confira com algo conhecido.</strong> Depois de calibrar, meça seu cartão de crédito (85.60 mm de largura) ou uma moeda de 25 centavos americana (24.26 mm de diâmetro). Se ler certo, está tudo pronto.',
          ],
        },
        { kind: 'h2', text: 'Quando recalibrar' },
        {
          kind: 'p',
          html: 'Quase nunca, no dia a dia. Sua calibração fica guardada no navegador em <code>ror-calibration</code> e é recarregada a cada visita. Recalibre apenas quando o próprio monitor mudar: um monitor novo, outro notebook, uma configuração de escala alterada, ou ao conectar e desconectar. Se as medições algum dia parecerem ter desviado, a verificação de dois minutos com o cartão acima vai dizer a verdade.',
        },
        { kind: 'h2', text: 'Perguntas frequentes' },
        { kind: 'h3', text: 'Qual método de calibração é o mais preciso?' },
        {
          kind: 'p',
          html: 'O método do cartão de crédito costuma ser o mais preciso porque calibra contra um objeto físico de tamanho conhecido e padronizado (85.60 mm de largura) que você encosta na tela. O seletor de dispositivos é igualmente bom quando seu modelo exato está listado. A detecção automática é um bom ponto de partida, e o método da diagonal funciona melhor como alternativa.',
        },
        { kind: 'h3', text: 'Com que frequência devo recalibrar?' },
        {
          kind: 'p',
          html: 'Só quando algo no seu monitor muda: um monitor novo, outro notebook, uma configuração de escala de exibição do sistema alterada, ou ao conectar/desconectar. Sua calibração fica salva no navegador, então no dia a dia você nunca precisa mexer nela.',
        },
        { kind: 'h3', text: 'A calibração funciona em um segundo monitor?' },
        {
          kind: 'p',
          html: 'Cada monitor precisa da sua própria calibração, porque a densidade de pixels difere entre as telas. Calibre uma vez por monitor; o valor salvo se aplica ao monitor em que a janela do navegador estiver quando você calibrar. Se mover a janela para outro monitor, recalibre lá.',
        },
      ],
    },
    cm: {
      title: 'Régua de Centímetros Online — Meça em cm em Tamanho Real | Real Online Ruler',
      description:
        'Uma régua de centímetros gratuita na tela em tamanho real. Calibre uma vez e meça em cm e mm com marcas numeradas de centímetros e traços de milímetros.',
      h1: 'Régua de centímetros',
      lede: 'O centímetro é o cavalo de batalha da medição métrica do dia a dia — grande o bastante para ler de relance, fino o bastante para a maioria das tarefas domésticas. Calibre seu monitor uma vez, mude a régua para cm, e as marcas numeradas na tela são centímetros de verdade.',
      breadcrumb: 'Régua de centímetros',
      related: [
        { href: '/mm/', label: 'Régua de milímetros' },
        { href: '/inches/', label: 'Régua de polegadas' },
        { href: '/guide/', label: 'Como ler a régua' },
      ],
      faqs: [
        {
          q: 'Quantos milímetros há em um centímetro?',
          a: 'Dez. Um centímetro é definido como exatamente 10 milímetros, e a régua na tela mostra isso diretamente: dez tracinhos entre cada par de marcas numeradas de centímetros.',
        },
        {
          q: 'A quantas polegadas equivale um centímetro?',
          a: 'Um centímetro equivale a exatamente 0.3937 polegadas (uma polegada é definida como exatamente 2.54 cm). Então 10 cm são cerca de 3.94 polegadas — pouco menos de quatro polegadas.',
        },
        {
          q: 'Quais objetos do dia a dia têm cerca de um centímetro?',
          a: 'Um lápis comum tem cerca de 0.7 cm de diâmetro, uma moeda de um centavo americana tem cerca de 1.9 cm de diâmetro, e a largura da ponta do dedo de um adulto é de aproximadamente 1.5–2 cm. Um clipe de papel tem cerca de 3 cm de comprimento e um cartão de crédito tem 8.56 cm de largura.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'O que é um centímetro?' },
        {
          kind: 'p',
          html: 'Um centímetro é um centésimo de metro — cerca da largura da ponta do dedo de um adulto. Ele fica no ponto ideal para medições do dia a dia: menor que uma polegada (2.54 cm), maior que unidades submilimétricas complicadas. A maior parte do mundo mede a vida diária em centímetros: alturas, tamanhos de papel, móveis, diagonais de tela.',
        },
        { kind: 'h2', text: 'Lendo a escala de cm' },
        {
          kind: 'p',
          html: 'No modo cm, os <strong>traços longos numerados são centímetros</strong> — 1, 2, 3 e assim por diante. Entre cada par há nove traços mais curtos: <strong>milímetros</strong>. O traço de comprimento médio no meio é o meio centímetro (5 mm). Um objeto que termina no terceiro tracinho curto depois do 7 mede 7.3 cm. Se precisar do valor puramente em milímetros, mude para o <a href="/mm/">modo mm</a> e leia 73 mm diretamente.',
        },
        { kind: 'h2', text: 'Referências úteis de tamanho' },
        {
          kind: 'p',
          html: 'Objetos do dia a dia, para conferir sua calibração ou estimar sem a régua:',
        },
        {
          kind: 'ul',
          items: [
            'Clipe de papel comum — cerca de <strong>3 cm</strong> de comprimento',
            'Pilha AA — cerca de <strong>5 cm</strong> de comprimento',
            'Cartão de crédito / banco — <strong>8.56 cm</strong> de largura (um padrão exato, ótimo para conferir a calibração)',
            'Moeda de um centavo americana — cerca de <strong>1.9 cm</strong> de diâmetro',
            'Largura de smartphone — normalmente <strong>7–8 cm</strong>',
          ],
        },
        { kind: 'h2', text: 'Conversões' },
        {
          kind: 'table',
          head: ['De', 'Para', 'Multiplicar por'],
          rows: [
            ['cm', 'mm', '10'],
            ['cm', 'm', '0.01'],
            ['cm', 'polegadas', '0.3937'],
            ['polegadas', 'cm', '2.54 (exato)'],
          ],
        },
        {
          kind: 'p',
          html: 'A conversão para polegadas é exata por definição — uma polegada é <em>definida</em> como 2.54 cm — então alternar a régua entre cm e <a href="/inches/">polegadas</a> nunca introduz erro de arredondamento nas posições dos traços.',
        },
        { kind: 'h2', text: 'Perguntas frequentes' },
        { kind: 'h3', text: 'Quantos milímetros há em um centímetro?' },
        {
          kind: 'p',
          html: 'Dez. Um centímetro é definido como exatamente 10 milímetros, e a régua na tela mostra isso diretamente: dez tracinhos entre cada par de marcas numeradas de centímetros.',
        },
        { kind: 'h3', text: 'A quantas polegadas equivale um centímetro?' },
        {
          kind: 'p',
          html: 'Um centímetro equivale a exatamente 0.3937 polegadas (uma polegada é definida como exatamente 2.54 cm). Então 10 cm são cerca de 3.94 polegadas — pouco menos de quatro polegadas.',
        },
        { kind: 'h3', text: 'Quais objetos do dia a dia têm cerca de um centímetro?' },
        {
          kind: 'p',
          html: 'Um lápis comum tem cerca de 0.7 cm de diâmetro, uma moeda de um centavo americana tem cerca de 1.9 cm de diâmetro, e a largura da ponta do dedo de um adulto é de aproximadamente 1.5–2 cm. Um clipe de papel tem cerca de 3 cm de comprimento e um cartão de crédito tem 8.56 cm de largura.',
        },
      ],
    },
    inches: {
      title: 'Régua de Polegadas Online — Meça em Polegadas em Tamanho Real | Real Online Ruler',
      description:
        'Uma régua de polegadas gratuita na tela em tamanho real, com marcas fracionárias até 1/16 de polegada. Calibre uma vez e meça em polegadas inteiras e fracionárias.',
      h1: 'Régua de polegadas',
      lede: 'A polegada continua sendo a unidade do dia a dia nos Estados Unidos — para marcenaria, costura, ferragens e tudo vendido por pé. Calibre seu monitor uma vez, mude a régua para polegadas e leia polegadas inteiras mais frações até um dezesseis avos.',
      breadcrumb: 'Régua de polegadas',
      related: [
        { href: '/cm/', label: 'Régua de centímetros' },
        { href: '/mm/', label: 'Régua de milímetros' },
        { href: '/guide/', label: 'Como ler a régua' },
      ],
      faqs: [
        {
          q: 'Quantos dezesseis avos há em uma polegada?',
          a: 'Dezesseis. A régua de polegadas na tela divide cada polegada em 16 traços iguais. O 8º traço é a meia polegada, o 4º e o 12º são quartos de polegada, e os oitavos de número ímpar (2º, 6º, 10º, 14º) são marcas de oitavos de polegada.',
        },
        {
          q: 'A quantos centímetros equivale uma polegada?',
          a: 'Exatamente 2.54 centímetros, por definição internacional. Isso faz um centímetro valer cerca de 0.3937 polegadas.',
        },
        {
          q: 'Por que as réguas usam frações em vez de decimais?',
          a: 'Tradição e divisibilidade. Metades, quartos e oitavos vêm de dividir a polegada pela metade repetidamente, o que é fácil de fazer fisicamente e de ler a olho. Polegadas decimais também existem — mecânicos usam milésimos — mas as polegadas fracionárias continuam sendo o padrão da medição americana do dia a dia.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'O que é uma polegada?' },
        {
          kind: 'p',
          html: 'Uma polegada é uma unidade do sistema americano (imperial) definida como <strong>exatamente 2.54 centímetros</strong>. Doze polegadas formam um pé, 36 formam uma jarda. Diferente das unidades métricas, as polegadas são tradicionalmente lidas como <strong>frações</strong> — metades, quartos, oitavos, dezesseis avos — em vez de decimais, e a régua na tela é desenhada exatamente assim.',
        },
        { kind: 'h2', text: 'Lendo a escala de polegadas' },
        {
          kind: 'p',
          html: 'Os traços numerados são polegadas inteiras. Entre eles, <strong>o comprimento do traço codifica a fração</strong> — quanto mais longo o traço, mais simples a fração:',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Traço mais longo sem número</strong> — a meia polegada (½″), um por polegada.',
            '<strong>Segundo mais longo</strong> — quartos de polegada (¼″, ¾″).',
            '<strong>Traços médios</strong> — oitavos de polegada (⅛″, ⅜″, ⅝″, ⅞″).',
            '<strong>Traços mais curtos</strong> — dezesseis avos (1/16″ … 15/16″).',
          ],
        },
        {
          kind: 'p',
          html: 'Leia a partir da polegada numerada abaixo da extremidade do objeto e conte para frente. Dois traços médios depois da marca de 3″ são 3 e 2/8 — simplifique para <strong>3¼″</strong>. Cinco dos tracinhos mais curtos depois de 1″ são 1 e 5/16 polegadas. O método completo de leitura, com exemplos resolvidos, está no <a href="/guide/">guia de leitura</a>.',
        },
        { kind: 'h2', text: 'Fração ↔ decimal ↔ métrico' },
        {
          kind: 'table',
          head: ['Fração', 'Decimal (pol)', 'Métrico'],
          rows: [
            ['1/16″', '0.0625', '1.59 mm'],
            ['⅛″', '0.125', '3.18 mm'],
            ['¼″', '0.25', '6.35 mm'],
            ['½″', '0.5', '12.7 mm'],
            ['1″', '1.0', '25.4 mm (exato)'],
          ],
        },
        { kind: 'h2', text: 'Quando as polegadas vencem o métrico' },
        {
          kind: 'p',
          html: 'Se a coisa que você está medindo foi <em>feita</em> em polegadas — dimensões de madeira, tamanhos de parafuso, conexões de encanamento, moldes de roupa americanos — meça em polegadas e pule a conversão. Uma viga “2×4”, um parafuso de ¼″ ou uma forma de bolo de 9″ têm números redondos em polegadas e estranhos no métrico. Combine a régua com a unidade nativa do objeto e os números continuam amigáveis.',
        },
        { kind: 'h2', text: 'Perguntas frequentes' },
        { kind: 'h3', text: 'Quantos dezesseis avos há em uma polegada?' },
        {
          kind: 'p',
          html: 'Dezesseis. A régua de polegadas na tela divide cada polegada em 16 traços iguais. O 8º traço é a meia polegada, o 4º e o 12º são quartos de polegada, e o 2º, o 6º, o 10º e o 14º são marcas de oitavos de polegada.',
        },
        { kind: 'h3', text: 'A quantos centímetros equivale uma polegada?' },
        {
          kind: 'p',
          html: 'Exatamente 2.54 centímetros, por definição internacional. Um centímetro vale cerca de 0.3937 polegadas.',
        },
        { kind: 'h3', text: 'Por que as réguas usam frações em vez de decimais?' },
        {
          kind: 'p',
          html: 'Tradição e divisibilidade. Metades, quartos e oitavos vêm de dividir a polegada pela metade repetidamente, o que é fácil de fazer fisicamente e de ler a olho. Polegadas decimais também existem — mecânicos trabalham em milésimos — mas as polegadas fracionárias continuam sendo o padrão da medição americana do dia a dia.',
        },
      ],
    },
    mm: {
      title: 'Régua de Milímetros Online — Meça em mm em Tamanho Real | Real Online Ruler',
      description:
        'Uma régua de milímetros gratuita na tela em tamanho real. Calibre uma vez e leia medições precisas em milímetros com marcas rotuladas a cada 10 mm.',
      h1: 'Régua de milímetros',
      lede: 'Quando os centímetros são grosseiros demais, os milímetros assumem — um décimo de centímetro, pequeno o bastante para parafusos, folgas e tamanhos de anel. Calibre uma vez, mude para mm, e cada tracinho na tela é um milímetro de verdade.',
      breadcrumb: 'Régua de milímetros',
      related: [
        { href: '/cm/', label: 'Régua de centímetros' },
        { href: '/inches/', label: 'Régua de polegadas' },
        { href: '/guide/', label: 'Como ler a régua' },
      ],
      faqs: [
        {
          q: 'Qual o tamanho de um milímetro?',
          a: 'Um milímetro é um milésimo de metro — mais ou menos a espessura de um cartão de crédito (0.76 mm) ou um pouco menos da metade da espessura de uma moeda de dez centavos americana (1.35 mm). É a menor unidade que a maioria das pessoas mede a olho.',
        },
        {
          q: 'Devo usar o modo mm ou cm?',
          a: 'Eles mostram a mesma escala com rótulos diferentes. Use o modo mm quando quiser um único número preciso como 47 mm; use o modo cm quando pensar em centímetros como 4.7 cm. Para qualquer coisa abaixo de uns 5 cm, o modo mm costuma ser mais fácil de ler.',
        },
        {
          q: 'Qual a precisão da escala de milímetros na tela?',
          a: 'Tão precisa quanto sua calibração. Com o método do cartão de crédito, espere precisão de cerca de meio milímetro em um monitor típico. Para trabalhos submilimétricos — joalheria, eletrônica — use um paquímetro de verdade; uma régua de tela é uma verificação rápida, não uma ferramenta de metrologia.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'O que é um milímetro?' },
        {
          kind: 'p',
          html: 'Um milímetro é um milésimo de metro e um décimo de centímetro — a menor unidade que a maioria das pessoas mede confortavelmente a olho. Qualquer coisa mais fina que um milímetro (o papel tem cerca de 0.1 mm) pertence a paquímetros e micrômetros; tudo de cerca de 1 mm até alguns centímetros é território dos milímetros.',
        },
        { kind: 'h2', text: 'Lendo a escala de mm' },
        {
          kind: 'p',
          html: 'No modo mm, <strong>cada tracinho é um milímetro</strong> e os traços longos numerados vêm a cada 10 mm, rotulados 10, 20, 30… Leia a marca numerada abaixo da extremidade do objeto e conte os tracinhos depois dela: quatro traços depois do 40 são <strong>44 mm</strong>. O traço de comprimento médio em cada 5 é o meio centímetro — um marco útil ao contar.',
        },
        {
          kind: 'p',
          html: 'A escala é idêntica à do <a href="/cm/">modo cm</a>; só os rótulos diferem. Alterne à vontade — 44 mm e 4.4 cm são a mesma marca.',
        },
        { kind: 'h2', text: 'Referências úteis de tamanho' },
        {
          kind: 'ul',
          items: [
            'Espessura de cartão de crédito / banco — <strong>0.76 mm</strong> (um padrão exato)',
            'Espessura de moeda de dez centavos americana — cerca de <strong>1.35 mm</strong>',
            'Espessura de cartão SD — cerca de <strong>2.1 mm</strong>',
            'Diâmetro de lápis comum — cerca de <strong>7 mm</strong>',
            'Diâmetro de moeda de 25 centavos americana — <strong>24.26 mm</strong>',
          ],
        },
        { kind: 'h2', text: 'Conversões' },
        {
          kind: 'table',
          head: ['De', 'Para', 'Multiplicar por'],
          rows: [
            ['mm', 'cm', '0.1'],
            ['mm', 'm', '0.001'],
            ['mm', 'polegadas', '0.03937'],
            ['polegadas', 'mm', '25.4 (exato)'],
          ],
        },
        { kind: 'h2', text: 'Obtendo resultados precisos' },
        {
          kind: 'ul',
          items: [
            '<strong>Calibre com o método do cartão.</strong> A precisão em milímetros vive ou morre na calibração — o método do cartão físico é o mais preciso.',
            '<strong>Ajuste o zoom da página para 100% e deixe lá.</strong> Qualquer zoom redimensiona os traços.',
            '<strong>Use guias para objetos pequenos.</strong> Solte uma guia em cada extremidade do objeto e subtraia as leituras — mais firme que estimar um traço a olho.',
            '<strong>Olhe de frente.</strong> A paralaxe em ângulo pode deslocar uma borda aparente em um milímetro ou mais.',
          ],
        },
        { kind: 'h2', text: 'Perguntas frequentes' },
        { kind: 'h3', text: 'Qual o tamanho de um milímetro?' },
        {
          kind: 'p',
          html: 'Um milímetro é um milésimo de metro — mais ou menos a espessura de um cartão de crédito (0.76 mm) ou um pouco menos da metade da espessura de uma moeda de dez centavos americana (1.35 mm). É a menor unidade que a maioria das pessoas mede a olho.',
        },
        { kind: 'h3', text: 'Devo usar o modo mm ou cm?' },
        {
          kind: 'p',
          html: 'Eles mostram a mesma escala com rótulos diferentes. Use o modo mm quando quiser um único número preciso como 47 mm; use o modo cm quando pensar em centímetros como 4.7 cm. Para qualquer coisa abaixo de uns 5 cm, o modo mm costuma ser mais fácil de ler.',
        },
        { kind: 'h3', text: 'Qual a precisão da escala de milímetros na tela?' },
        {
          kind: 'p',
          html: 'Tão precisa quanto sua calibração. Com o método do cartão de crédito, espere precisão de cerca de meio milímetro em um monitor típico. Para trabalhos submilimétricos — joalheria, eletrônica — use um paquímetro de verdade; uma régua de tela é uma verificação rápida, não uma ferramenta de metrologia.',
        },
      ],
    },
    pixels: {
      title: 'Régua de Pixels Online — Meça em Pixels CSS | Real Online Ruler',
      description:
        'Uma régua de pixels gratuita na tela para designers: meça em pixels CSS com traços de 10 px e marcas numeradas de 100 px. Sem calibração — pixels são a unidade do próprio navegador.',
      h1: 'Régua de pixels',
      lede: 'Pixels são a unidade do designer — a língua dos mockups, botões e breakpoints. A régua de px conta os próprios pixels CSS do seu navegador, então não precisa de calibração: mude para o modo px e meça qualquer coisa na página nas mesmas unidades que sua folha de estilos usa.',
      breadcrumb: 'Régua de pixels',
      related: [
        { href: '/cm/', label: 'Régua de centímetros' },
        { href: '/inches/', label: 'Régua de polegadas' },
        { href: '/guide/', label: 'Como ler a régua' },
      ],
      faqs: [
        {
          q: 'Qual o tamanho de um pixel na vida real?',
          a: 'Não há resposta fixa. Um pixel CSS não tem tamanho físico — é 1/96 de polegada só por convenção para impressão. Na tela, seu tamanho físico depende da densidade do monitor, e é exatamente por isso que a régua precisa de calibração para unidades físicas, mas não para o modo pixel.',
        },
        {
          q: 'A régua de pixels precisa de calibração?',
          a: 'Não. O modo pixel conta os próprios pixels CSS do navegador, que a página conhece exatamente sem nenhuma medição física. A calibração só importa para cm, mm e polegadas — as unidades com tamanhos no mundo real.',
        },
        {
          q: 'O que é taxa de pixels do dispositivo (DPR)?',
          a: 'O número de pixels físicos da tela usados para desenhar um pixel CSS. Um DPR de 2 (um monitor Retina) concentra quatro pixels físicos em cada pixel CSS para uma renderização mais nítida. O modo pixel da régua sempre mostra pixels CSS, que é com o que os web designers trabalham.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'O que é um pixel CSS?' },
        {
          kind: 'p',
          html: 'Um pixel CSS é a unidade abstrata do navegador — o <code>px</code> da sua folha de estilos. Ele é deliberadamente <em>não</em> um tamanho físico: em um monitor comum, um pixel CSS corresponde a um pixel físico, enquanto em um monitor de alta densidade (“Retina”) vários pixels físicos se unem para desenhar um único pixel CSS com mais nitidez. A proporção é a <strong>taxa de pixels do dispositivo (DPR)</strong>. O web design acontece em pixels CSS, que é exatamente o que esta régua conta.',
        },
        { kind: 'h2', text: 'Lendo a escala de px' },
        {
          kind: 'p',
          html: 'No modo px, os tracinhos vêm a cada <strong>10 px</strong>, os traços médios a cada 50 px e as marcas numeradas a cada <strong>100 px</strong>. Medindo um botão: alinhe a borda esquerda com o zero e leia onde a borda direita cai — digamos, logo depois do 120, ou seja, cerca de 124 px de largura. Para trabalho exato, solte <a href="/guide/">guias</a> nas duas bordas e subtraia as leituras.',
        },
        { kind: 'h2', text: 'Por que o modo px dispensa calibração' },
        {
          kind: 'p',
          html: 'A calibração responde a uma pergunta física: “quantos pixels CSS formam uma polegada real neste monitor?” O modo pixel nunca faz essa pergunta — ele simplesmente conta as próprias unidades do navegador, que a página conhece exatamente. É também por isso que medições em px não têm sentido como tamanhos físicos: 100 px são um número diferente de milímetros em cada monitor. Use px para design, e cm/mm/polegadas (depois da <a href="/how-to-calibrate/">calibração</a>) para o mundo físico.',
        },
        { kind: 'h2', text: 'Pixels vs. pontos de impressão' },
        {
          kind: 'p',
          html: 'Você às vezes verá “1 px = 1/96 de polegada”. Isso é uma convenção de <em>impressão</em> do CSS, usada para que folhas de estilo convertam para unidades físicas no papel — não diz nada sobre sua tela. Na tela, a única afirmação honesta é: um pixel CSS tem o tamanho que a densidade do monitor lhe dá, e a régua calibrada é como você descobre.',
        },
        { kind: 'h2', text: 'Referências úteis de pixels' },
        {
          kind: 'ul',
          items: [
            'Altura de caixa alta de texto comum (16 px) — cerca de <strong>11 px</strong>',
            'Altura comum de botão — <strong>36–48 px</strong>',
            'Favicon — <strong>16 × 16 px</strong>',
            'Largura de viewport Full HD — <strong>1920 px</strong> (px CSS, independente do DPR)',
          ],
        },
        { kind: 'h2', text: 'Perguntas frequentes' },
        { kind: 'h3', text: 'Qual o tamanho de um pixel na vida real?' },
        {
          kind: 'p',
          html: 'Não há resposta fixa. Um pixel CSS não tem tamanho físico — é 1/96 de polegada só por convenção para impressão. Na tela, seu tamanho físico depende da densidade do monitor, e é exatamente por isso que a régua precisa de calibração para unidades físicas, mas não para o modo pixel.',
        },
        { kind: 'h3', text: 'A régua de pixels precisa de calibração?' },
        {
          kind: 'p',
          html: 'Não. O modo pixel conta os próprios pixels CSS do navegador, que a página conhece exatamente sem nenhuma medição física. A calibração só importa para cm, mm e polegadas — as unidades com tamanhos no mundo real.',
        },
        { kind: 'h3', text: 'O que é taxa de pixels do dispositivo (DPR)?' },
        {
          kind: 'p',
          html: 'O número de pixels físicos da tela usados para desenhar um pixel CSS. Um DPR de 2 (um monitor Retina) concentra quatro pixels físicos em cada pixel CSS para uma renderização mais nítida. O modo pixel da régua sempre mostra pixels CSS, que é com o que os web designers trabalham.',
        },
      ],
    },
  },
};
