/**
 * id.ts — kamus UI Bahasa Indonesia untuk i18n Fase 8.
 *
 * Terjemahan asli (bukan kata per kata) dari en.ts. Nama merek
 * "Real Online Ruler" dan token teknis (px, PPI, CSV, TXT, DPR, CSS,
 * ISO/IEC 7810 ID-1, 3×, huruf keyboard, {placeholder}) tidak diterjemahkan.
 * Placeholder seperti {name} diisi saat runtime — jangan diubah, tetapi boleh
 * disusun ulang agar sesuai tata bahasa Indonesia.
 */

import type { Dict } from '../dict.js';

export const id: Dict = {
  skipToContent: 'Lewati ke konten',

  header: {
    navAria: 'Utama',
    navMobileAria: 'Utama seluler',
    nav: [
      { label: 'Beranda', href: '/' },
      { label: 'Cara kalibrasi', href: '/#calibration' },
      { label: 'Panduan', href: '/#guide' },
      { label: 'FAQ', href: '/#faq' },
    ],
    wordmarkAria: 'Real Online Ruler — beranda',
    themeAria: 'Alihkan mode gelap',
    themeTitle: 'Alihkan mode gelap / terang (D)',
    themeSr: 'Alihkan tema',
    languageAria: 'Bahasa',
  },

  footer: {
    tagline:
      'Alat ukur gratis tanpa daftar yang mengubah layar Anda menjadi penggaris dengan ukuran fisik sebenarnya — dalam sentimeter, milimeter, inci, dan piksel.',
    explore: 'Jelajahi',
    exploreLinks: [
      { label: 'Beranda', href: '/' },
      { label: 'Cara kalibrasi', href: '/#calibration' },
      { label: 'Panduan membaca', href: '/#guide' },
      { label: 'FAQ', href: '/#faq' },
    ],
    rulerGuides: 'Panduan penggaris',
    guideLinks: [
      { label: 'Cara kalibrasi', href: '/how-to-calibrate/' },
      { label: 'Membaca penggaris', href: '/guide/' },
      { label: 'Penggaris sentimeter', href: '/cm/' },
      { label: 'Penggaris inci', href: '/inches/' },
      { label: 'Penggaris milimeter', href: '/mm/' },
      { label: 'Penggaris piksel', href: '/pixels/' },
    ],
    accuracyTitle: 'Catatan akurasi',
    accuracyBody:
      'Pengukuran di layar hanya seakurat kalibrasi Anda. Kalibrasi sekali untuk tampilan Anda, pertahankan zoom browser di 100%, dan penggaris tetap benar setiap kunjungan.',
    copyright: '© {year} Real Online Ruler. Gratis untuk semua — tanpa akun, tanpa unduhan.',
  },

  layout: {
    breadcrumbHome: 'Beranda',
    breadcrumbAria: 'Navigasi remah roti',
    keepReading: 'Lanjutkan membaca',
    relatedAria: 'Halaman terkait',
    ctaTitle: 'Coba di layar Anda sekarang juga',
    ctaBody:
      'Penggaris interaktif ada di halaman utama — dikalibrasi untuk tampilan Anda dalam waktu kurang dari satu menit.',
    ctaButton: 'Buka penggaris',
  },

  toolbar: {
    unitGroup: 'Satuan pengukuran',
    edgeGroup: 'Sisi penggaris',
    edgeTop: 'Atas',
    edgeBottom: 'Bawah',
    edgeLeft: 'Kiri',
    edgeRight: 'Kanan',
    precisionGroup: 'Alat presisi',
    guides: 'Garis panduan',
    guidesTitle: 'Alihkan garis panduan (G)',
    crosshair: 'Garis bidik',
    crosshairTitle: 'Alihkan garis bidik (C)',
    orientGroup: 'Orientasi garis panduan baru',
    orientHTitle: 'Garis panduan baru bersifat horizontal',
    orientVTitle: 'Garis panduan baru bersifat vertikal',
    fullscreen: 'Layar penuh',
    fullscreenTitle: 'Layar penuh (F)',
    theme: 'Tema',
    themeTitle: 'Alihkan tema (D)',
    calibrate: 'Kalibrasi',
    calibrateTitle: 'Kalibrasi tampilan',
    advanced: 'Lanjutan',
    advancedGroup: 'Alat ukur lanjutan',
    measure: 'Ukur',
    measureTitle: 'Seret pada kanvas untuk mengukur jarak dan sudut (M)',
    protractor: 'Busur derajat',
    protractorTitle: 'Hamparan busur derajat (P)',
    loupe: 'Lup',
    loupeTitle: 'Lup pembesar (L)',
    ruler: 'Penggaris',
    rulerTitle: 'Penggaris mengambang yang dapat diputar (R)',
    log: 'Catatan',
    logTitle: 'Catatan pengukuran (O)',
    grid: 'Kisi',
    gridTitle: 'Hamparan kisi (N)',
    gridUnit: 'Satuan kisi',
    gridUnitAria: 'Satuan sel kisi',
    gridCm: 'cm',
    gridInch: 'inci',
    help: '? Pintasan',
    helpTitle: 'Pintasan keyboard (H)',
  },

  stage: {
    aria: 'Area pengukuran',
    hint: 'Alihkan sisi di atas untuk membingkai area ini dengan penggaris. Tempelkan benda kecil pada sisi ukur penggaris yang disorot dan baca ukurannya.',
    guidesHint:
      'Dengan Garis panduan aktif, klik di mana saja di sini untuk menaruh garis panduan; seret garis untuk memindahkannya, klik dua kali untuk menghapusnya, Esc menghapus semua garis panduan.',
    guideAt: 'Garis panduan pada {value}',
  },

  status: {
    loading: 'Memuat kalibrasi…',
    uncalibrated: 'Belum dikalibrasi — menggunakan bawaan CSS 96 px/in.',
    calibrateNow: 'Kalibrasi sekarang',
    calibrated: '{px} px/in · dikalibrasi dengan {what}.',
    zoomNote: 'Pertahankan zoom browser di 100% — zoom mengubah skala penggaris.',
    shortcutHint: 'Tekan {key} untuk peta pintasan keyboard lengkap.',
  },

  measure: {
    popupAria: 'Simpan pengukuran',
    save: 'Simpan ke catatan',
    discard: 'Buang',
  },

  protractor: {
    aria: 'Hamparan busur derajat: seret bagian tengah untuk memindahkan, gagang kuning untuk memutar, gagang lengan hijau tosca dan kuning untuk mengukur sudut',
    moveArmA: 'Seret untuk memindahkan lengan A',
    moveArmB: 'Seret untuk memindahkan lengan B',
    rotate: 'Seret untuk memutar busur derajat',
    move: 'Seret untuk memindahkan busur derajat',
    caption: 'tengah bergerak · cincin berputar',
  },

  floatingRuler: {
    aria: 'Penggaris mengambang: seret badan untuk memindahkan, gagang di ujung kanan untuk memutar',
    rotateTitle: 'Seret untuk memutar',
  },

  log: {
    panelAria: 'Catatan pengukuran',
    title: 'Catatan pengukuran',
    close: 'Tutup',
    closeAria: 'Tutup catatan pengukuran',
    empty: 'Belum ada pengukuran. Aktifkan Ukur ({key}), seret melintasi kanvas, lalu Simpan.',
    labelAria: 'Label pengukuran',
    copy: 'Salin',
    delete: 'Hapus',
    copyAll: 'Salin semua',
    csv: 'CSV',
    txt: 'TXT',
    clear: 'Bersihkan',
    copied: 'Disalin',
    failed: 'Gagal',
  },

  help: {
    title: 'Pintasan keyboard',
    close: 'Tutup',
    rows: [
      { keys: ['1', '2', '3', '4'], label: 'Satuan: cm, inci, mm, px' },
      { keys: ['G'], label: 'Alihkan garis panduan' },
      { keys: ['C'], label: 'Alihkan garis bidik' },
      { keys: ['F'], label: 'Layar penuh' },
      { keys: ['D'], label: 'Alihkan tema' },
      { keys: ['M'], label: 'Alat ukur seret' },
      { keys: ['P'], label: 'Hamparan busur derajat' },
      { keys: ['L'], label: 'Lup pembesar (3×)' },
      { keys: ['R'], label: 'Penggaris mengambang' },
      { keys: ['O'], label: 'Catatan pengukuran' },
      { keys: ['N'], label: 'Hamparan kisi' },
      { keys: ['H'], label: 'Bantuan pintasan ini' },
      { keys: ['Esc'], label: 'Batalkan gambar / tutup / hapus garis panduan' },
    ],
  },

  calibrate: {
    title: 'Kalibrasi tampilan Anda',
    currentLabel: 'Saat ini:',
    defaultReadout: '96 px/in (bawaan)',
    saved: 'Tersimpan',
    closeAria: 'Tutup dialog kalibrasi',
    tablistAria: 'Metode kalibrasi',
    tabs: {
      auto: 'Deteksi otomatis',
      device: 'Pilih perangkat',
      diagonal: 'Diagonal layar',
      card: 'Kartu kredit',
    },
    autoBody:
      'Kami melihat browser dan resolusi layar Anda, mencocokkannya dengan basis data bawaan berisi spesifikasi tampilan resmi, lalu menerapkan kepadatan piksel pabrik. Pilihan tercepat saat perangkat Anda ditemukan.',
    detectButton: 'Deteksi perangkat saya',
    deviceBody:
      'Tahu model persis Anda? Pilih di bawah — kami menerapkan kepadatan piksel resminya, disesuaikan dengan penskalaan tampilan Anda.',
    categoryLabel: 'Kategori',
    deviceLabel: 'Perangkat',
    diagonalBody:
      'Ketik ukuran diagonal layar Anda dalam inci (biasanya tertera di kemasan atau halaman spesifikasi produsen — misalnya 15.6 untuk laptop pada umumnya). Kami menggabungkannya dengan resolusi layar Anda untuk menghitung kepadatan yang tepat. Pertahankan zoom browser di 100%.',
    diagonalLabel: 'Diagonal (inci)',
    calculate: 'Hitung',
    cardBody:
      'Tempelkan kartu kredit, kartu debit, atau kartu identitas apa pun secara rata pada layar, di atas garis luar di bawah. Seret penggeser hingga garis luar persis menutupi tepi kartu, lalu gunakan kalibrasi tersebut. Kartu standar berukuran 85.60 × 53.98 mm.',
    cardSize: '85.60 × 53.98 mm',
    assumedDensity: 'Kepadatan yang diasumsikan',
    useCalibration: 'Gunakan kalibrasi ini',
    footerNote:
      'Hanya tersimpan di browser ini. Kalibrasi ulang jika Anda mengganti monitor atau penskalaan tampilan.',
    reset: 'Atur ulang ke 96 PPI',
    methods: {
      auto: 'deteksi otomatis',
      device: 'pilihan perangkat',
      diagonal: 'diagonal layar',
      card: 'kartu kredit',
      default: 'bawaan',
    },
    autoDetected: 'Terdeteksi:',
    factoryPpi: '{ppi} PPI pabrik',
    highConfidence: 'Keyakinan tinggi — model persis cocok.',
    mediumConfidence:
      'Keyakinan sedang — cocok dengan tampilan yang dipakai model serupa (kepadatan sama).',
    computedAtScaling:
      'Kepadatan terhitung pada penskalaan tampilan Anda: <strong>{px} px/in</strong>',
    pxPerInch: 'px/in',
    recognizedAs:
      'Kami mengenalinya sebagai tampilan <strong>{category}</strong>, tetapi tidak dapat menentukan model persisnya.',
    notRecognized: 'Kami tidak dapat mengenali perangkat ini dari informasi browser Anda.',
    tryTabs:
      'Coba tab <strong>{a}</strong>, <strong>{b}</strong>, atau <strong>{c}</strong> sebagai gantinya.',
    factoryWord: 'pabrik',
    atScaling: 'Pada penskalaan tampilan saat ini (×{dpr}): <strong>{px} px/in</strong>',
    invalidDiagonal: 'Masukkan diagonal yang valid dalam inci.',
    screenIs: 'Layar: {w} × {h} px, diagonal {d} inci',
    computedDensity: 'Kepadatan terhitung: <strong>{px} px/in</strong>',
    diagonalDeviceName: 'Diagonal {d} inci',
    cardDeviceName: 'Kartu 85.60 × 53.98 mm',
  },

  notFound: {
    title: 'Halaman tidak ditemukan — Real Online Ruler',
    description: 'Halaman yang Anda cari tidak ada di Real Online Ruler.',
    heading: 'Tanda ini tidak ada di penggaris',
    body: 'Halaman yang Anda minta tidak ada. Mari kembali mengukur.',
    cta: 'Kembali ke penggaris',
  },

  home: {
    title: 'Real Online Ruler — Penggaris Layar Ukuran Sebenarnya Gratis (cm, mm, Inci, Piksel)',
    description:
      'Ubah layar Anda menjadi penggaris sungguhan. Kalibrasi sekali untuk tampilan Anda, lalu ukur benda kecil dalam sentimeter, milimeter, inci, atau piksel — gratis, tanpa daftar, tanpa unduhan.',
    badge: 'Gratis · Tanpa daftar · Tanpa unduhan',
    h1Before: 'Layar Anda, diubah menjadi ',
    h1Emphasis: 'penggaris sungguhan',
    h1After: '.',
    lede: 'Kalibrasi sekali untuk tampilan Anda dan halaman ini menjadi alat ukur dengan ukuran fisik sebenarnya. Tempelkan koin, sekrup, atau potongan kain pada sisinya dan baca dalam sentimeter, milimeter, inci, atau piksel.',
    openRuler: 'Buka penggaris',
    howCalibration: 'Cara kerja kalibrasi',
    tip: 'Tips: pertahankan zoom browser di 100% saat mengukur.',
    workspaceAria: 'Ruang kerja penggaris',
    featuresAria: 'Fitur',
    featuresTitle: 'Satu halaman, meja ukur lengkap',
    featuresLede:
      'Kalibrasi sekali, lalu ukur apa pun di layar Anda — inilah yang bisa dilakukan halaman ini.',
    features: [
      {
        icon: '◎',
        name: 'Kalibrasi empat cara',
        body: 'Deteksi perangkat Anda secara otomatis, pilih dari daftar, masukkan diagonal layar, atau cocokkan kartu kredit di layar. Satu kalibrasi membuat setiap pengukuran sesuai ukuran sebenarnya.',
      },
      {
        icon: '▦',
        name: 'Penggaris di keempat sisi',
        body: 'Pasang penggaris di sisi atas, bawah, kiri, atau kanan — atau keempatnya sekaligus — dan bingkai apa pun di layar Anda dalam kisi ukur langsung.',
      },
      {
        icon: '⇄',
        name: 'cm, mm, inci & piksel',
        body: 'Ganti satuan seketika: tanda metrik hingga milimeter, tanda inci pecahan, atau piksel CSS mentah untuk pekerjaan desain. Pintasan keyboard tersedia.',
      },
      {
        icon: '┼',
        name: 'Garis panduan',
        body: 'Taruh garis acuan horizontal dan vertikal di mana saja, seret hingga pas, dan baca jarak di antaranya dalam satuan aktif Anda.',
      },
      {
        icon: '✛',
        name: 'Koordinat garis bidik',
        body: 'Garis bidik langsung mengikuti kursor Anda dan melaporkan posisi X/Y yang tepat dalam satuan aktif — berguna untuk tata letak dan pemeriksaan kesejajaran.',
      },
      {
        icon: '◈',
        name: 'Layar penuh & mode gelap',
        body: 'Bentangkan ke seluruh tampilan untuk pengukuran tepi-ke-tepi, dan beralih antara tema terang dan gelap. Preferensi Anda diingat.',
      },
    ],
    calibrationAria: 'Cara kerja kalibrasi',
    calibrationTitle: 'Cara kerja kalibrasi',
    calibrationParas: [
      'Setiap layar memadatkan jumlah piksel fisik yang berbeda ke dalam tiap inci — ponsel bisa menampung 460, monitor desktop mendekati 100. Namun browser menggambar halaman dalam <em>piksel CSS</em>, dan tidak pernah memberi tahu situs web ukuran fisiknya yang sebenarnya.',
      'Kalibrasi menutup kesenjangan itu. Anda memberikan satu acuan terpercaya ke halaman ini — model perangkat Anda, diagonal layar Anda, atau kartu kredit yang ditempelkan ke tampilan — dan halaman ini menghitung tepat berapa piksel CSS yang setara dengan satu inci nyata. Dari satu angka itu, setiap tanda pada setiap penggaris ditempatkan pada posisi sebenarnya.',
    ],
    methods: [
      {
        name: 'Deteksi otomatis',
        body: 'Kami mencocokkan perangkat Anda dengan basis data tampilan bawaan dan menerapkan kepadatan piksel pabrik.',
      },
      {
        name: 'Pilih perangkat Anda',
        body: 'Jelajahi entri iPhone, iPad, MacBook, Android, dan monitor, lalu pilih model persis Anda.',
      },
      {
        name: 'Diagonal layar',
        body: 'Ketik diagonal layar Anda dalam inci; kami menurunkan kepadatan dari resolusi Anda.',
      },
      {
        name: 'Kartu kredit',
        body: 'Tempelkan kartu bank apa pun ke layar dan seret penggeser hingga garis luar di layar cocok.',
      },
    ],
    liveNote:
      'Panel kalibrasi interaktif sudah aktif — buka dari ruang kerja penggaris di atas untuk kalibrasi dengan deteksi otomatis, pilihan perangkat, diagonal layar, atau metode kartu kredit.',
    guideAria: 'Panduan membaca',
    guideTitle: 'Cara membaca penggaris',
    units: [
      {
        name: 'Sentimeter',
        body: 'Setiap garis bernomor adalah satu sentimeter. Sepuluh tanda kecil di antara angka adalah milimeter — jadi tanda kecil ke-4 setelah 7 adalah 7,4 cm.',
      },
      {
        name: 'Inci',
        body: 'Garis bernomor adalah inci penuh. Di antaranya, garis terpanjang tanpa nomor adalah ½″, lalu ¼″ dan ¾″, lalu seperdelapan — persis seperti penggaris kayu.',
      },
      {
        name: 'Piksel',
        body: 'Mode piksel menghitung piksel CSS mentah dari nol — satuan yang dipakai desainer untuk spasi, ukuran huruf, dan dimensi elemen di layar.',
      },
    ],
    guideLinksIntro: 'Untuk pembahasan lengkapnya, lihat panduan khusus:',
    guideLinks: [
      { href: '/guide/', label: 'Membaca penggaris' },
      { href: '/cm/', label: 'Penggaris sentimeter' },
      { href: '/inches/', label: 'Penggaris inci' },
      { href: '/mm/', label: 'Penggaris milimeter' },
      { href: '/pixels/', label: 'Penggaris piksel' },
    ],
    faqAria: 'Pertanyaan yang sering diajukan',
    faqTitle: 'Pertanyaan yang sering diajukan',
    faqs: [
      {
        q: 'Bisakah penggaris layar benar-benar akurat?',
        a: 'Bisa — tetapi hanya setelah kalibrasi. Browser menggambar dalam piksel CSS, yang tidak memiliki ukuran fisik tetap. Kalibrasi mengajarkan halaman ini berapa piksel CSS yang membentuk satu inci nyata pada tampilan spesifik Anda. Begitu angka itu diketahui, setiap tanda mendarat pada posisi fisik yang sebenarnya.',
      },
      {
        q: 'Mengapa saya perlu kalibrasi? Bukankah situs ini bisa langsung tahu ukuran layar saya?',
        a: 'Browser sengaja menyembunyikan kepadatan piksel fisik yang tepat demi privasi, sehingga tidak ada situs web yang bisa mengukur layar Anda secara langsung. Situs ini mulai dari tebakan standar web yaitu 96 piksel per inci; keempat metode kalibrasi menggantikan tebakan itu dengan angka nyata tampilan Anda.',
      },
      {
        q: 'Apakah saya harus kalibrasi setiap kunjungan?',
        a: 'Tidak. Kalibrasi Anda tersimpan di browser dan dimuat otomatis. Kalibrasi ulang hanya jika Anda mengganti monitor, mengubah penskalaan tampilan, atau melihat pengukuran melenceng.',
      },
      {
        q: 'Apakah zoom browser mengubah pengukuran?',
        a: 'Ya. Zoom mengubah skala piksel CSS, sehingga penggaris yang dikalibrasi pada zoom 100% akan salah baca pada 110%. Pertahankan zoom browser di 100% saat mengukur — aplikasi mengingatkan Anda tentang hal ini.',
      },
      {
        q: 'Apa saja yang benar-benar bisa saya ukur dengannya?',
        a: 'Apa pun yang cukup kecil untuk ditempelkan ke layar: koin, sekrup, tusuk anting, kartu SD, potongan kain cetak, ukuran cincin. Pengukuran lurus terpanjang adalah lebar atau tinggi layar Anda.',
      },
      {
        q: 'Apakah berfungsi di ponsel dan tablet?',
        a: 'Ya. Buka halaman ini di browser seluler apa pun, kalibrasi dengan model perangkat atau metode kartu kredit, dan layar ponsel menjadi penggaris saku — ternyata berguna untuk pemeriksaan cepat.',
      },
      {
        q: 'Apakah data kalibrasi saya bersifat pribadi?',
        a: 'Sepenuhnya. Kalibrasi Anda hanya tersimpan di penyimpanan lokal browser Anda sendiri — tidak pernah diunggah, dan tidak ada akun yang mengaitkannya. Menghapus data browser akan menghilangkannya.',
      },
      {
        q: 'Bisakah saya mengukur sesuatu yang lebih besar dari layar?',
        a: 'Per bagian. Ukur lebar layar pertama, taruh garis panduan di titik akhir, geser benda, dan jumlahkan segmennya. Garis panduan menjaga posisi Anda sehingga segmennya sejajar.',
      },
      {
        q: 'Mengapa penggaris terlihat salah di monitor kedua saya?',
        a: 'Setiap tampilan memiliki kepadatan pikselnya sendiri, sehingga kalibrasi yang dilakukan di laptop tidak berlaku untuk monitor eksternal. Kalibrasi sekali per tampilan, dengan jendela browser berada di tampilan yang sedang dikalibrasi.',
      },
      {
        q: 'Metode kalibrasi mana yang harus saya pilih?',
        a: 'Metode kartu kredit paling akurat untuk kebanyakan orang, karena dikalibrasi terhadap benda fisik berukuran standar yang diketahui (85,60 mm). Pemilih perangkat sama bagusnya bila model persis Anda terdaftar; deteksi otomatis adalah titik awal tercepat.',
      },
      {
        q: 'Apakah saya perlu kalibrasi untuk penggaris piksel?',
        a: 'Tidak. Mode piksel menghitung piksel CSS milik browser sendiri, yang diketahui halaman ini secara pasti — kalibrasi hanya penting untuk satuan fisik (cm, mm, inci). Komprominya adalah bacaan piksel tidak memiliki ukuran dunia nyata yang tetap.',
      },
      {
        q: 'Apakah berfungsi dalam layar penuh?',
        a: 'Ya — tekan F atau tombol Layar penuh di bilah alat. Layar penuh memberi Anda penggaris terpanjang dan menghilangkan bingkai browser yang bisa mengganggu pengukuran.',
      },
    ],
    jsonLdDescription:
      'Penggaris layar gratis dengan ukuran fisik sebenarnya. Kalibrasi tampilan Anda, lalu ukur dalam sentimeter, milimeter, inci, dan piksel.',
  },

  content: {
    guide: {
      title: 'Cara Membaca Penggaris Online (cm, mm, Inci, Piksel) | Real Online Ruler',
      description:
        'Pelajari membaca penggaris di layar: tanda sentimeter dan milimeter, pecahan inci hingga seperenambelas, mode piksel, plus garis panduan, garis bidik, dan enam alat ukur lanjutan.',
      h1: 'Cara membaca penggaris',
      lede: 'Empat satuan, satu layar. Panduan ini mengajarkan Anda membaca setiap skala yang ditawarkan penggaris — tanda metrik, pecahan inci, dan mode piksel — menggunakan garis panduan dan garis bidik, serta menguasai enam alat lanjutan: ukur dengan seret, busur derajat, lup, penggaris mengambang, catatan pengukuran, dan kisi.',
      breadcrumb: 'Panduan membaca',
      related: [
        { href: '/how-to-calibrate/', label: 'Cara mengkalibrasi penggaris layar Anda' },
        { href: '/cm/', label: 'Penggaris sentimeter' },
        { href: '/inches/', label: 'Penggaris inci' },
        { href: '/mm/', label: 'Penggaris milimeter' },
        { href: '/pixels/', label: 'Penggaris piksel' },
      ],
      faqs: [
        {
          q: 'Bagaimana cara membaca pecahan inci pada penggaris?',
          a: 'Temukan inci bernomor terdekat, lalu hitung tanda kecil setelahnya. Tanda terpanjang tanpa nomor adalah setengah, berikutnya adalah seperempat, lalu seperdelapan, dan yang terpendek adalah seperenambelas. Tiga tanda pendek setelah tanda 2 inci, misalnya, adalah 2 dan 3/16 inci.',
        },
        {
          q: 'Apa bedanya mode cm dan mm?',
          a: 'Keduanya menampilkan skala yang sama dengan label berbeda. Dalam mode cm, tanda bernomor dibaca 1, 2, 3 (sentimeter); dalam mode mm, tanda yang sama dibaca 10, 20, 30 (milimeter). Gunakan mode mm bila Anda ingin membaca nilai seperti 47 mm tanpa mengalikan.',
        },
        {
          q: 'Bagaimana garis panduan membantu saya mengukur?',
          a: 'Garis panduan memungkinkan Anda menandai posisi di area pengukuran tanpa menempelkan benda pada sisi penggaris. Taruh garis panduan di setiap ujung benda dan baca jarak antara bacaannya — berguna untuk benda yang tidak bisa ditekan rata pada sisi layar.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Kenali empat satuan' },
        {
          kind: 'p',
          html: 'Ganti satuan kapan saja dari bilah alat atau dengan tombol <code>1</code>–<code>4</code>. Tanda digambar ulang dari kalibrasi Anda, sehingga berganti satuan tidak pernah mengubah ukuran fisik — hanya labelnya.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>cm (1)</strong> — sentimeter, satuan metrik sehari-hari. Terbaik untuk pengukuran umum.',
            '<strong>mm (2)</strong> — milimeter, untuk presisi. Skala sama dengan cm, diberi label dalam mm.',
            '<strong>inci (3)</strong> — inci dengan tanda pecahan hingga 1/16″. Terbaik untuk pekerjaan satuan adat AS.',
            '<strong>px (4)</strong> — piksel CSS, untuk maket desain. Bukan satuan fisik (lihat di bawah).',
          ],
        },
        { kind: 'h2', text: 'Membaca sentimeter dan milimeter' },
        {
          kind: 'p',
          html: 'Dalam <strong>mode cm</strong>, tanda panjang bernomor adalah sentimeter (1, 2, 3…) dan ada sembilan tanda pendek di antara setiap pasangan — itulah milimeter. Benda yang berakhir empat tanda pendek setelah tanda 5 cm berarti panjangnya 5,4 cm. Dalam <strong>mode mm</strong> skalanya identik tetapi tanda bernomor dibaca 10, 20, 30 — sehingga benda yang sama langsung dibaca 54 mm, tanpa mengalikan.',
        },
        {
          kind: 'p',
          html: 'Aturan praktisnya: gunakan cm bila jumlah sentimeter yang Anda pedulikan (“sekitar dua belas setengah sentimeter”), dan mm bila Anda menginginkan satu angka presisi (“127 mm”).',
        },
        { kind: 'h2', text: 'Membaca inci dan pecahan' },
        {
          kind: 'p',
          html: 'Dalam <strong>mode inci</strong>, tanda bernomor adalah inci penuh. Di antaranya, panjang tanda menunjukkan pecahannya — semakin panjang berarti pecahan semakin sederhana:',
        },
        {
          kind: 'table',
          head: ['Panjang tanda', 'Pecahan', 'Contoh'],
          rows: [
            ['Terpanjang tanpa nomor', '½ inci', '2½″'],
            ['Terpanjang berikutnya', '¼ inci', '1¼″, 1¾″'],
            ['Sedang', '⅛ inci', '3⅜″'],
            ['Terpendek', '1/16 inci', '5/16″'],
          ],
        },
        {
          kind: 'p',
          html: 'Untuk membaca pengukuran, temukan inci bernomor <em>di bawah</em> ujung benda, lalu hitung tanda kecil setelahnya dan ambil tanda terpanjang yang dicapai hitungan Anda. Tiga tanda terpendek setelah tanda 2″ adalah 2 dan 3/16 inci. Jika ujung benda tepat mendarat pada tanda sedang, baca seperdelapannya — 2 dan 6/16 sebenarnya adalah 2⅜″, dan tukang kayu akan berterima kasih karena Anda menyederhanakannya.',
        },
        { kind: 'h2', text: 'Membaca piksel' },
        {
          kind: 'p',
          html: '<strong>Mode px</strong> adalah pengecualian: piksel CSS bukan ukuran fisik, melainkan satuan milik browser. Penggaris px menampilkan tanda kecil 10-piksel dan tanda bernomor setiap 100 px. Gunakan saat Anda membuat maket desain (“tombol ini sebaiknya selebar 120 px”), bukan saat Anda butuh pengukuran fisik — untuk itu, tetaplah di cm, mm, atau inci setelah kalibrasi.',
        },
        { kind: 'h2', text: 'Mengukur dengan garis panduan' },
        {
          kind: 'p',
          html: 'Tekan <code>G</code> (atau tombol Garis panduan) dan klik di mana saja di area pengukuran untuk menaruh garis panduan — horizontal atau vertikal, dipilih dengan pemilih H/V. Setiap garis panduan menampilkan posisinya dalam satuan aktif. Seret garis panduan untuk memindahkannya, klik dua kali untuk menghapus satu garis, dan tekan <code>Esc</code> untuk menghapus semuanya.',
        },
        {
          kind: 'p',
          html: 'Garis panduan bersinar saat benda tidak bisa menempel pada sisi penggaris: taruh satu garis panduan di setiap ujung benda dan kurangi kedua bacaannya. Garis panduan selalu melaporkan dalam satuan aktif, sehingga berganti satuan di tengah pengukuran mengubah bacaannya untuk Anda.',
        },
        { kind: 'h2', text: 'Mengukur dengan garis bidik' },
        {
          kind: 'p',
          html: 'Tekan <code>C</code> dan garis bidik putus-putus mengikuti penunjuk Anda di seluruh area pengukuran, dengan lencana langsung yang menampilkan posisi X/Y yang tepat dalam satuan aktif. Inilah cara tercepat memeriksa satu titik — sudut foto, tepi widget — tanpa menaruh garis panduan.',
        },
        { kind: 'h2', text: 'Alat lanjutan' },
        {
          kind: 'p',
          html: 'Baris <strong>Lanjutan</strong> pada bilah alat menambahkan enam alat yang melampaui penggaris tepi. Semuanya mengukur dalam piksel CSS yang diskalakan dengan kalibrasi Anda, dalam satuan yang sedang dipilih.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Ukur (M)</strong> — seret di mana saja pada kanvas untuk menggambar garis pengukuran. Bacaan langsung menampilkan jarak dalam satuan aktif dan sudut garis dalam derajat. Titik akhir menempel ke garis panduan terdekat. Lepaskan untuk mendapatkan Simpan (mengirim bacaan ke catatan) atau Buang; <code>Esc</code> membatalkan saat menggambar.',
            '<strong>Busur derajat (P)</strong> — busur derajat melingkar yang bisa diseret ke mana saja. Seret bagian tengah untuk memindahkannya, gagang cincin untuk memutar skala, dan dua gagang lengan untuk mengatur lengan; bacaan digital menampilkan sudut antara lengan dalam derajat.',
            '<strong>Lup (L)</strong> — pembesar 3× yang mengikuti kursor Anda, menampilkan tampilan zoom penggaris, garis panduan, dan kanvas di bawahnya untuk pembacaan tanda yang presisi.',
            '<strong>Penggaris (R)</strong> — penggaris mengambang, independen dari tepi layar. Seret badannya untuk memindahkan dan gagang kuning di ujungnya untuk memutar ke sudut mana pun; ia menampilkan tanda dalam satuan aktif di sepanjang panjangnya, dengan lencana kecil yang menunjukkan rotasinya.',
            '<strong>Catatan (O)</strong> — setiap pengukuran yang disimpan mendarat di sini dengan label yang bisa disunting. Salin satu entri atau seluruh daftar, ekspor sebagai CSV atau TXT, atau hapus entri. Catatan tersimpan di penyimpanan lokal browser Anda.',
            '<strong>Kisi (N)</strong> — hamparan kisi halus untuk pekerjaan kesejajaran. Setiap sel tepat 1 cm (atau 1 inci — ganti dengan pemilih Satuan kisi), dengan garis lebih tebal setiap 5 sel.',
          ],
        },
        { kind: 'h2', text: 'Pintasan keyboard' },
        {
          kind: 'p',
          html: 'Tekan <code>H</code> di mana saja dalam aplikasi penggaris untuk membuka referensi pintasan. Peta lengkapnya:',
        },
        {
          kind: 'ul',
          items: [
            '<code>1</code>–<code>4</code> — satuan: cm, inci, mm, px',
            '<code>G</code> garis panduan · <code>C</code> garis bidik · <code>F</code> layar penuh · <code>D</code> tema',
            '<code>M</code> ukur dengan seret · <code>P</code> busur derajat · <code>L</code> lup',
            '<code>R</code> penggaris mengambang · <code>O</code> catatan pengukuran · <code>N</code> kisi',
            '<code>Esc</code> — batalkan gambar yang sedang dibuat, tutup dialog, atau hapus semua garis panduan',
          ],
        },
        { kind: 'h2', text: 'Tips untuk pengukuran yang dapat dipercaya' },
        {
          kind: 'ul',
          items: [
            'Ukur terhadap <strong>sisi ukur yang disorot</strong> penggaris (garis dasar hijau tosca), bukan sisi luar batang.',
            'Sejajarkan <strong>awal</strong> benda dengan tanda nol, bukan dengan ujung layar.',
            'Untuk benda yang lebih panjang dari penggaris, ukur per bagian dengan garis panduan menandai setiap segmen.',
            'Lihat layar tegak lurus; pada sudut curam, paralaks menggeser posisi tampak tepi.',
            'Setiap alat mengukur dalam piksel CSS yang diskalakan dengan kalibrasi Anda. Zoom browser, penskalaan tampilan OS, atau monitor eksternal dengan kepadatan piksel berbeda akan mengubah skala penggaris — pertahankan zoom di 100% dan kalibrasi ulang jika Anda memindahkan jendela ke tampilan lain.',
            'Bila ragu, periksa ulang dengan <a href="/how-to-calibrate/">kalibrasi kartu kredit</a> — hanya butuh semenit.',
          ],
        },
      ],
    },
    howToCalibrate: {
      title: 'Cara Mengkalibrasi Penggaris Layar Anda | Real Online Ruler',
      description:
        'Kalibrasi tampilan Anda dalam waktu kurang dari satu menit dengan empat metode: deteksi otomatis, pemilih perangkat, diagonal layar, atau kartu kredit. Pelajari metode mana yang paling akurat dan kapan harus kalibrasi ulang.',
      h1: 'Cara mengkalibrasi penggaris layar Anda',
      lede: 'Browser menggambar dalam piksel CSS, yang tidak memiliki ukuran fisik tetap. Kalibrasi mengajarkan halaman ini tepat berapa banyak piksel itu yang membentuk satu inci nyata pada tampilan Anda — setelah itu, setiap tanda mendarat pada posisi fisik yang sebenarnya.',
      breadcrumb: 'Cara kalibrasi',
      related: [
        { href: '/guide/', label: 'Cara membaca penggaris: cm, mm, inci, dan piksel' },
        { href: '/cm/', label: 'Penggaris sentimeter' },
        { href: '/inches/', label: 'Penggaris inci' },
      ],
      faqs: [
        {
          q: 'Metode kalibrasi mana yang paling akurat?',
          a: 'Metode kartu kredit biasanya paling akurat karena dikalibrasi terhadap benda fisik berukuran standar yang diketahui (lebar 85,60 mm) yang Anda tempelkan ke layar. Pemilih perangkat sama bagusnya bila model persis Anda terdaftar. Deteksi otomatis adalah titik awal yang solid, dan metode diagonal paling baik dipakai sebagai cadangan.',
        },
        {
          q: 'Seberapa sering saya harus kalibrasi ulang?',
          a: 'Hanya bila sesuatu tentang tampilan Anda berubah: monitor baru, laptop berbeda, pengaturan penskalaan tampilan OS yang berubah, atau docking/undocking. Kalibrasi Anda tersimpan di browser, sehingga sehari-hari Anda tidak perlu menyentuhnya.',
        },
        {
          q: 'Apakah kalibrasi berfungsi di monitor kedua?',
          a: 'Setiap tampilan membutuhkan kalibrasinya sendiri, karena kepadatan piksel berbeda antar layar. Kalibrasi sekali per monitor; nilai yang tersimpan berlaku untuk tampilan tempat jendela browser berada saat Anda kalibrasi. Jika Anda memindahkan jendela ke monitor lain, kalibrasi ulang di sana.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Mengapa kalibrasi adalah kunci utama' },
        {
          kind: 'p',
          html: 'Penggaris fisik dapat dipercaya karena tandanya dicetak pada jarak yang diketahui. Penggaris layar tidak memiliki jaminan itu: 96 piksel CSS yang sama bisa menjadi satu inci penuh di satu laptop dan terasa kurang di tampilan ponsel berkepadatan tinggi. Situs ini mulai dari tebakan standar web yaitu 96 piksel per inci, lalu menggantikannya dengan angka nyata tampilan Anda. Segala hal lainnya — sentimeter, milimeter, pecahan inci — adalah aritmetika yang dibangun di atas satu angka itu, sehingga membuatnya benar lebih penting daripada hal lain di situs ini.',
        },
        { kind: 'h2', text: 'Empat metode' },
        {
          kind: 'p',
          html: 'Buka dialog kalibrasi dari bilah alat pada <a href="/#ruler-app">penggaris halaman utama</a> dan pilih metode mana pun yang sesuai dengan yang Anda miliki. Keempatnya tersimpan otomatis ke browser Anda.',
        },
        { kind: 'h3', text: '1. Deteksi otomatis' },
        {
          kind: 'p',
          html: 'Pilihan tercepat. Halaman membaca resolusi layar Anda dan tebakan terbaik browser tentang rasio piksel, lalu memperkirakan kepadatannya. Seringkali tepat pada laptop dan desktop arus utama, dan ini adalah metode yang harus dicoba pertama. Jika pengukuran kemudian terasa sedikit meleset, beralihlah ke salah satu metode manual di bawah.',
        },
        { kind: 'h3', text: '2. Pilih perangkat Anda' },
        {
          kind: 'p',
          html: 'Pilih ponsel, tablet, laptop, atau monitor Anda dari daftar tampilan bawaan yang dikenal. Setiap entri membawa kepadatan piksel pabrikan model tersebut, sehingga hitungannya tepat untuk panel itu. Ini adalah metode terbaik di seluler, di mana deteksi model dapat diandalkan — ponsel Anda menjadi penggaris saku dalam waktu sekitar sepuluh detik.',
        },
        { kind: 'h3', text: '3. Diagonal layar' },
        {
          kind: 'p',
          html: 'Masukkan ukuran diagonal iklan layar Anda (13,3″, 15,6″, 24″, 27″ — tertera di kemasan atau halaman spesifikasi produsen) dan halaman menurunkan kepadatan dari resolusi Anda. Cepat dan lumayan, tetapi hanya seakurat angka iklan, yang terkadang dibulatkan.',
        },
        { kind: 'h3', text: '4. Kartu kredit' },
        {
          kind: 'p',
          html: 'Metode paling akurat untuk kebanyakan orang. Tempelkan kartu bank atau kartu identitas standar apa pun pada persegi layar dan seret penggeser hingga keduanya cocok persis. Kartu mengikuti standar ISO/IEC 7810 ID-1 — 85,60 × 53,98 mm — sehingga Anda kalibrasi terhadap benda fisik berukuran diketahui. Luangkan waktu dengan penggeser; setengah milimeter ketidakcocokan di sini adalah seluruh anggaran kesalahan.',
        },
        { kind: 'h2', text: 'Tips untuk akurasi terbaik' },
        {
          kind: 'ul',
          items: [
            '<strong>Gunakan metode kartu terakhir, bukan pertama.</strong> Sepadan dengan semenit ekstra — ia menghilangkan setiap asumsi tentang tampilan Anda.',
            '<strong>Pertahankan zoom browser di 100%.</strong> Zoom mengubah skala piksel CSS, sehingga penggaris yang dikalibrasi pada 100% salah baca pada 110%. Aplikasi mengingatkan Anda tentang hal ini di bilah statusnya.',
            '<strong>Kalibrasi pada tampilan tempat Anda akan mengukur.</strong> Layar laptop dan monitor eksternal hampir selalu memiliki kepadatan berbeda.',
            '<strong>Periksa penskalaan tampilan OS Anda.</strong> Jika Anda mengubah pengaturan penskalaan (125%, 150%) setelah kalibrasi, kalibrasi ulang — pemetaan piksel-CSS-ke-fisik berubah.',
            '<strong>Uji kewarasan dengan sesuatu yang diketahui.</strong> Setelah kalibrasi, ukur kartu kredit Anda (lebar 85,60 mm) atau seperempat dolar AS (24,26 mm). Jika bacaannya benar, Anda siap.',
          ],
        },
        { kind: 'h2', text: 'Kapan harus kalibrasi ulang' },
        {
          kind: 'p',
          html: 'Hampir tidak pernah, sehari-hari. Kalibrasi Anda tersimpan di browser Anda di bawah <code>ror-calibration</code> dan dimuat ulang setiap kunjungan. Kalibrasi ulang hanya bila tampilannya sendiri berubah: monitor baru, laptop berbeda, pengaturan penskalaan yang berubah, atau docking dan undocking. Jika pengukuran terasa melenceng, pemeriksaan kartu dua menit di atas akan memberi tahu Anda kebenarannya.',
        },
        { kind: 'h2', text: 'Pertanyaan yang sering diajukan' },
        { kind: 'h3', text: 'Metode kalibrasi mana yang paling akurat?' },
        {
          kind: 'p',
          html: 'Metode kartu kredit biasanya paling akurat karena dikalibrasi terhadap benda fisik berukuran standar yang diketahui (lebar 85,60 mm) yang Anda tempelkan ke layar. Pemilih perangkat sama bagusnya bila model persis Anda terdaftar. Deteksi otomatis adalah titik awal yang solid, dan metode diagonal paling baik dipakai sebagai cadangan.',
        },
        { kind: 'h3', text: 'Seberapa sering saya harus kalibrasi ulang?' },
        {
          kind: 'p',
          html: 'Hanya bila sesuatu tentang tampilan Anda berubah: monitor baru, laptop berbeda, pengaturan penskalaan tampilan OS yang berubah, atau docking/undocking. Kalibrasi Anda tersimpan di browser, sehingga sehari-hari Anda tidak perlu menyentuhnya.',
        },
        { kind: 'h3', text: 'Apakah kalibrasi berfungsi di monitor kedua?' },
        {
          kind: 'p',
          html: 'Setiap tampilan membutuhkan kalibrasinya sendiri, karena kepadatan piksel berbeda antar layar. Kalibrasi sekali per monitor; nilai yang tersimpan berlaku untuk tampilan tempat jendela browser berada saat Anda kalibrasi. Jika Anda memindahkan jendela ke monitor lain, kalibrasi ulang di sana.',
        },
      ],
    },
    cm: {
      title:
        'Penggaris Sentimeter Online — Ukur dalam cm dengan Ukuran Sebenarnya | Real Online Ruler',
      description:
        'Penggaris sentimeter di layar gratis dengan ukuran fisik sebenarnya. Kalibrasi sekali, lalu ukur dalam cm dan mm dengan tanda sentimeter bernomor dan tanda milimeter.',
      h1: 'Penggaris sentimeter',
      lede: 'Sentimeter adalah andalan pengukuran metrik sehari-hari — cukup besar untuk dibaca sekilas, cukup halus untuk kebanyakan tugas rumah tangga. Kalibrasi tampilan Anda sekali, alihkan penggaris ke cm, dan tanda bernomor di layar Anda adalah sentimeter sungguhan.',
      breadcrumb: 'Penggaris sentimeter',
      related: [
        { href: '/mm/', label: 'Penggaris milimeter' },
        { href: '/inches/', label: 'Penggaris inci' },
        { href: '/guide/', label: 'Cara membaca penggaris' },
      ],
      faqs: [
        {
          q: 'Berapa milimeter dalam satu sentimeter?',
          a: 'Sepuluh. Satu sentimeter didefinisikan tepat 10 milimeter, dan penggaris di layar menunjukkan ini secara langsung: sepuluh tanda kecil di antara setiap pasangan tanda sentimeter bernomor.',
        },
        {
          q: 'Berapa inci satu sentimeter?',
          a: 'Satu sentimeter sama dengan tepat 0,3937 inci (satu inci didefinisikan tepat 2,54 cm). Jadi 10 cm adalah sekitar 3,94 inci — sedikit di bawah empat inci.',
        },
        {
          q: 'Benda sehari-hari apa yang berukuran sekitar satu sentimeter?',
          a: 'Pensil standar berdiameter sekitar 0,7 cm, penny AS berdiameter sekitar 1,9 cm, dan lebar ujung jari orang dewasa kira-kira 1,5–2 cm. Klip kertas panjangnya sekitar 3 cm dan kartu kredit lebarnya 8,56 cm.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Apa itu sentimeter?' },
        {
          kind: 'p',
          html: 'Sentimeter adalah seperseratus meter — kira-kira selebar ujung jari orang dewasa. Ia berada di titik manis untuk pengukuran sehari-hari: lebih kecil dari satu inci (2,54 cm), lebih besar dari satuan sub-milimeter yang rumit. Sebagian besar dunia mengukur kehidupan sehari-hari dalam sentimeter: tinggi badan, ukuran kertas, furnitur, diagonal layar.',
        },
        { kind: 'h2', text: 'Membaca skala cm' },
        {
          kind: 'p',
          html: 'Dalam mode cm, <strong>tanda panjang bernomor adalah sentimeter</strong> — 1, 2, 3, dan seterusnya. Di antara setiap pasangan ada sembilan tanda lebih pendek: <strong>milimeter</strong>. Tanda berpanjang sedang di tengah adalah setengah sentimeter (5 mm). Benda yang berakhir pada tanda pendek ketiga setelah 7 berukuran 7,3 cm. Jika Anda membutuhkan nilai murni dalam milimeter, alihkan ke <a href="/mm/">mode mm</a> dan baca 73 mm secara langsung.',
        },
        { kind: 'h2', text: 'Referensi ukuran praktis' },
        {
          kind: 'p',
          html: 'Benda sehari-hari, untuk memeriksa kewarasan kalibrasi Anda atau memperkirakan tanpa penggaris:',
        },
        {
          kind: 'ul',
          items: [
            'Klip kertas standar — panjang sekitar <strong>3 cm</strong>',
            'Baterai AA — panjang sekitar <strong>5 cm</strong>',
            'Kartu kredit / bank — lebar <strong>8,56 cm</strong> (standar yang tepat, bagus untuk memeriksa kalibrasi)',
            'Penny AS — berdiameter sekitar <strong>1,9 cm</strong>',
            'Lebar ponsel pintar — umumnya <strong>7–8 cm</strong>',
          ],
        },
        { kind: 'h2', text: 'Konversi' },
        {
          kind: 'table',
          head: ['Dari', 'Ke', 'Kalikan dengan'],
          rows: [
            ['cm', 'mm', '10'],
            ['cm', 'm', '0,01'],
            ['cm', 'inci', '0,3937'],
            ['inci', 'cm', '2,54 (tepat)'],
          ],
        },
        {
          kind: 'p',
          html: 'Konversi inci tepat menurut definisi — satu inci <em>didefinisikan</em> sebagai 2,54 cm — sehingga mengalihkan penggaris antara cm dan <a href="/inches/">inci</a> tidak pernah menimbulkan kesalahan pembulatan pada posisi tanda itu sendiri.',
        },
        { kind: 'h2', text: 'Pertanyaan yang sering diajukan' },
        { kind: 'h3', text: 'Berapa milimeter dalam satu sentimeter?' },
        {
          kind: 'p',
          html: 'Sepuluh. Satu sentimeter didefinisikan tepat 10 milimeter, dan penggaris di layar menunjukkan ini secara langsung: sepuluh tanda kecil di antara setiap pasangan tanda sentimeter bernomor.',
        },
        { kind: 'h3', text: 'Berapa inci satu sentimeter?' },
        {
          kind: 'p',
          html: 'Satu sentimeter sama dengan tepat 0,3937 inci (satu inci didefinisikan tepat 2,54 cm). Jadi 10 cm adalah sekitar 3,94 inci — sedikit di bawah empat inci.',
        },
        { kind: 'h3', text: 'Benda sehari-hari apa yang berukuran sekitar satu sentimeter?' },
        {
          kind: 'p',
          html: 'Pensil standar berdiameter sekitar 0,7 cm, penny AS berdiameter sekitar 1,9 cm, dan lebar ujung jari orang dewasa kira-kira 1,5–2 cm. Klip kertas panjangnya sekitar 3 cm dan kartu kredit lebarnya 8,56 cm.',
        },
      ],
    },
    inches: {
      title: 'Penggaris Inci Online — Ukur dalam Inci dengan Ukuran Sebenarnya | Real Online Ruler',
      description:
        'Penggaris inci di layar gratis dengan ukuran fisik sebenarnya dan tanda pecahan hingga 1/16 inci. Kalibrasi sekali, lalu ukur dalam inci penuh dan pecahan.',
      h1: 'Penggaris inci',
      lede: 'Inci tetap menjadi satuan sehari-hari di seluruh Amerika Serikat — untuk pertukangan kayu, menjahit, perangkat keras, dan apa pun yang dijual per kaki. Kalibrasi tampilan Anda sekali, alihkan penggaris ke inci, dan baca inci penuh plus pecahan hingga seperenambelas.',
      breadcrumb: 'Penggaris inci',
      related: [
        { href: '/cm/', label: 'Penggaris sentimeter' },
        { href: '/mm/', label: 'Penggaris milimeter' },
        { href: '/guide/', label: 'Cara membaca penggaris' },
      ],
      faqs: [
        {
          q: 'Berapa seperenambelas dalam satu inci?',
          a: 'Enam belas. Penggaris inci di layar membagi setiap inci menjadi 16 tanda yang sama. Tanda ke-8 adalah setengah inci, tanda ke-4 dan ke-12 adalah seperempat inci, dan seperdelapan bernomor ganjil (ke-2, ke-6, ke-10, ke-14) adalah tanda seperdelapan inci.',
        },
        {
          q: 'Berapa sentimeter satu inci?',
          a: 'Tepat 2,54 sentimeter, menurut definisi internasional. Itu membuat satu sentimeter sekitar 0,3937 inci.',
        },
        {
          q: 'Mengapa penggaris memakai pecahan, bukan desimal?',
          a: 'Tradisi dan keterbagian. Setengah, seperempat, dan seperdelapan berasal dari membagi dua inci berulang kali, yang mudah dilakukan secara fisik dan dibaca dengan mata. Inci desimal juga ada — masinis memakai seperseribu — tetapi inci pecahan tetap menjadi standar pengukuran sehari-hari di AS.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Apa itu inci?' },
        {
          kind: 'p',
          html: 'Inci adalah satuan adat AS (imperial) yang didefinisikan sebagai <strong>tepat 2,54 sentimeter</strong>. Dua belas inci membentuk satu kaki, 36 membentuk satu yard. Tidak seperti satuan metrik, inci secara tradisional dibaca sebagai <strong>pecahan</strong> — setengah, seperempat, seperdelapan, seperenambelas — bukan desimal, dan penggaris di layar digambar persis seperti itu.',
        },
        { kind: 'h2', text: 'Membaca skala inci' },
        {
          kind: 'p',
          html: 'Tanda bernomor adalah inci penuh. Di antaranya, <strong>panjang tanda mengodekan pecahannya</strong> — semakin panjang tanda, semakin sederhana pecahannya:',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Tanda terpanjang tanpa nomor</strong> — setengah inci (½″), satu per inci.',
            '<strong>Terpanjang berikutnya</strong> — seperempat inci (¼″, ¾″).',
            '<strong>Tanda sedang</strong> — seperdelapan inci (⅛″, ⅜″, ⅝″, ⅞″).',
            '<strong>Tanda terpendek</strong> — seperenambelas (1/16″ … 15/16″).',
          ],
        },
        {
          kind: 'p',
          html: 'Baca dari inci bernomor di bawah ujung benda dan hitung maju. Dua tanda sedang setelah tanda 3″ adalah 3 dan 2/8 — sederhanakan menjadi <strong>3¼″</strong>. Lima tanda terpendek setelah 1″ adalah 1 dan 5/16 inci. Metode baca lengkap, dengan contoh yang dikerjakan, ada di <a href="/guide/">panduan membaca</a>.',
        },
        { kind: 'h2', text: 'Pecahan ↔ desimal ↔ metrik' },
        {
          kind: 'table',
          head: ['Pecahan', 'Desimal (inci)', 'Metrik'],
          rows: [
            ['1/16″', '0,0625', '1,59 mm'],
            ['⅛″', '0,125', '3,18 mm'],
            ['¼″', '0,25', '6,35 mm'],
            ['½″', '0,5', '12,7 mm'],
            ['1″', '1,0', '25,4 mm (tepat)'],
          ],
        },
        { kind: 'h2', text: 'Kapan inci mengalahkan metrik' },
        {
          kind: 'p',
          html: 'Jika benda yang Anda ukur <em>dibuat</em> dalam inci — dimensi kayu, ukuran sekrup, fitting pipa, pola pakaian AS — ukurlah dalam inci dan lewati konversinya. Balok “2×4”, baut ¼″, atau loyang kue 9″ semuanya memiliki angka bulat dalam inci dan angka janggal dalam metrik. Cocokkan penggaris dengan satuan asli benda dan angkanya tetap bersahabat.',
        },
        { kind: 'h2', text: 'Pertanyaan yang sering diajukan' },
        { kind: 'h3', text: 'Berapa seperenambelas dalam satu inci?' },
        {
          kind: 'p',
          html: 'Enam belas. Penggaris inci di layar membagi setiap inci menjadi 16 tanda yang sama. Tanda ke-8 adalah setengah inci, tanda ke-4 dan ke-12 adalah seperempat inci, dan tanda ke-2, ke-6, ke-10, dan ke-14 adalah tanda seperdelapan inci.',
        },
        { kind: 'h3', text: 'Berapa sentimeter satu inci?' },
        {
          kind: 'p',
          html: 'Tepat 2,54 sentimeter, menurut definisi internasional. Satu sentimeter sekitar 0,3937 inci.',
        },
        { kind: 'h3', text: 'Mengapa penggaris memakai pecahan, bukan desimal?' },
        {
          kind: 'p',
          html: 'Tradisi dan keterbagian. Setengah, seperempat, dan seperdelapan berasal dari membagi dua inci berulang kali, yang mudah dilakukan secara fisik dan dibaca dengan mata. Inci desimal juga ada — masinis bekerja dalam seperseribu — tetapi inci pecahan tetap menjadi standar pengukuran sehari-hari di AS.',
        },
      ],
    },
    mm: {
      title:
        'Penggaris Milimeter Online — Ukur dalam mm dengan Ukuran Sebenarnya | Real Online Ruler',
      description:
        'Penggaris milimeter di layar gratis dengan ukuran fisik sebenarnya. Kalibrasi sekali, lalu baca pengukuran milimeter yang presisi dengan tanda 10 mm berlabel.',
      h1: 'Penggaris milimeter',
      lede: 'Saat sentimeter terlalu kasar, milimeter mengambil alih — sepersepuluh sentimeter, cukup kecil untuk sekrup, celah, dan ukuran cincin. Kalibrasi sekali, alihkan ke mm, dan setiap tanda mungil di layar Anda adalah milimeter sungguhan.',
      breadcrumb: 'Penggaris milimeter',
      related: [
        { href: '/cm/', label: 'Penggaris sentimeter' },
        { href: '/inches/', label: 'Penggaris inci' },
        { href: '/guide/', label: 'Cara membaca penggaris' },
      ],
      faqs: [
        {
          q: 'Sekecil apa satu milimeter?',
          a: 'Satu milimeter adalah seperseribu meter — kira-kira setebal kartu kredit (0,76 mm) atau sedikit kurang dari setengah ketebalan dime AS (1,35 mm). Ini adalah satuan terkecil yang kebanyakan orang ukur dengan mata.',
        },
        {
          q: 'Haruskah saya memakai mode mm atau cm?',
          a: 'Keduanya menampilkan skala yang sama dengan label berbeda. Gunakan mode mm bila Anda menginginkan satu angka presisi seperti 47 mm; gunakan mode cm bila Anda berpikir dalam sentimeter seperti 4,7 cm. Untuk apa pun di bawah sekitar 5 cm, mode mm biasanya lebih mudah dibaca.',
        },
        {
          q: 'Seberapa akurat skala milimeter di layar?',
          a: 'Seakurat kalibrasi Anda. Dengan metode kartu kredit, perkirakan akurasi dalam sekitar setengah milimeter pada tampilan umum. Untuk pekerjaan sub-milimeter — perhiasan, elektronik — gunakan jangka sorong yang tepat; penggaris layar adalah pemeriksaan cepat, bukan alat metrologi.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Apa itu milimeter?' },
        {
          kind: 'p',
          html: 'Milimeter adalah seperseribu meter dan sepersepuluh sentimeter — satuan terkecil yang kebanyakan orang nyaman ukur dengan mata. Apa pun yang lebih tipis dari satu milimeter (kertas sekitar 0,1 mm) adalah wilayah jangka sorong dan mikrometer; segala hal dari sekitar 1 mm hingga beberapa sentimeter adalah wilayah milimeter.',
        },
        { kind: 'h2', text: 'Membaca skala mm' },
        {
          kind: 'p',
          html: 'Dalam mode mm, <strong>setiap tanda kecil adalah satu milimeter</strong> dan tanda panjang bernomor hadir setiap 10 mm, berlabel 10, 20, 30… Baca tanda bernomor di bawah ujung benda, lalu hitung tanda kecil setelahnya: empat tanda setelah 40 adalah <strong>44 mm</strong>. Tanda berpanjang sedang pada setiap 5 adalah setengah sentimeter — penanda yang berguna saat menghitung.',
        },
        {
          kind: 'p',
          html: 'Skalanya identik dengan <a href="/cm/">mode cm</a>; hanya labelnya yang berbeda. Bergantilah dengan bebas — 44 mm dan 4,4 cm adalah tanda yang sama.',
        },
        { kind: 'h2', text: 'Referensi ukuran praktis' },
        {
          kind: 'ul',
          items: [
            'Ketebalan kartu kredit / bank — <strong>0,76 mm</strong> (standar yang tepat)',
            'Ketebalan dime AS — sekitar <strong>1,35 mm</strong>',
            'Ketebalan kartu SD — sekitar <strong>2,1 mm</strong>',
            'Diameter pensil standar — sekitar <strong>7 mm</strong>',
            'Diameter seperempat dolar AS — <strong>24,26 mm</strong>',
          ],
        },
        { kind: 'h2', text: 'Konversi' },
        {
          kind: 'table',
          head: ['Dari', 'Ke', 'Kalikan dengan'],
          rows: [
            ['mm', 'cm', '0,1'],
            ['mm', 'm', '0,001'],
            ['mm', 'inci', '0,03937'],
            ['inci', 'mm', '25,4 (tepat)'],
          ],
        },
        { kind: 'h2', text: 'Mendapatkan hasil yang presisi' },
        {
          kind: 'ul',
          items: [
            '<strong>Kalibrasi dengan metode kartu.</strong> Akurasi milimeter hidup atau mati pada kalibrasi — metode kartu fisik paling akurat.',
            '<strong>Zoom halaman ke 100% dan biarkan di sana.</strong> Zoom apa pun mengubah skala tanda.',
            '<strong>Gunakan garis panduan untuk benda kecil.</strong> Taruh garis panduan di setiap ujung benda dan kurangi bacaannya — lebih mantap daripada menaksir tanda dengan mata.',
            '<strong>Lihat tegak lurus.</strong> Paralaks pada sudut dapat menggeser tepi tampak hingga satu milimeter atau lebih.',
          ],
        },
        { kind: 'h2', text: 'Pertanyaan yang sering diajukan' },
        { kind: 'h3', text: 'Sekecil apa satu milimeter?' },
        {
          kind: 'p',
          html: 'Satu milimeter adalah seperseribu meter — kira-kira setebal kartu kredit (0,76 mm) atau sedikit kurang dari setengah ketebalan dime AS (1,35 mm). Ini adalah satuan terkecil yang kebanyakan orang ukur dengan mata.',
        },
        { kind: 'h3', text: 'Haruskah saya memakai mode mm atau cm?' },
        {
          kind: 'p',
          html: 'Keduanya menampilkan skala yang sama dengan label berbeda. Gunakan mode mm bila Anda menginginkan satu angka presisi seperti 47 mm; gunakan mode cm bila Anda berpikir dalam sentimeter seperti 4,7 cm. Untuk apa pun di bawah sekitar 5 cm, mode mm biasanya lebih mudah dibaca.',
        },
        { kind: 'h3', text: 'Seberapa akurat skala milimeter di layar?' },
        {
          kind: 'p',
          html: 'Seakurat kalibrasi Anda. Dengan metode kartu kredit, perkirakan akurasi dalam sekitar setengah milimeter pada tampilan umum. Untuk pekerjaan sub-milimeter — perhiasan, elektronik — gunakan jangka sorong yang tepat; penggaris layar adalah pemeriksaan cepat, bukan alat metrologi.',
        },
      ],
    },
    pixels: {
      title: 'Penggaris Piksel Online — Ukur dalam Piksel CSS | Real Online Ruler',
      description:
        'Penggaris piksel di layar gratis untuk desainer: ukur dalam piksel CSS dengan tanda 10 px dan tanda bernomor 100 px. Tidak perlu kalibrasi — piksel adalah satuan milik browser.',
      h1: 'Penggaris piksel',
      lede: 'Piksel adalah satuan desainer — bahasa maket, tombol, dan breakpoint. Penggaris px menghitung piksel CSS milik browser Anda sendiri, sehingga tidak butuh kalibrasi sama sekali: alihkan ke mode px dan ukur apa pun di halaman dalam satuan yang sama dengan yang dipakai stylesheet Anda.',
      breadcrumb: 'Penggaris piksel',
      related: [
        { href: '/cm/', label: 'Penggaris sentimeter' },
        { href: '/inches/', label: 'Penggaris inci' },
        { href: '/guide/', label: 'Cara membaca penggaris' },
      ],
      faqs: [
        {
          q: 'Seberapa besar satu piksel dalam kehidupan nyata?',
          a: 'Tidak ada jawaban yang tetap. Piksel CSS tidak memiliki ukuran fisik — ia adalah 1/96 inci hanya menurut konvensi untuk cetak. Di layar Anda, ukuran fisiknya bergantung pada kepadatan tampilan, yang persis menjadi alasan penggaris butuh kalibrasi untuk satuan fisik tetapi tidak untuk mode piksel.',
        },
        {
          q: 'Apakah penggaris piksel perlu kalibrasi?',
          a: 'Tidak. Mode piksel menghitung piksel CSS milik browser sendiri, yang diketahui halaman ini secara pasti tanpa pengukuran fisik apa pun. Kalibrasi hanya penting untuk cm, mm, dan inci — satuan dengan ukuran dunia nyata.',
        },
        {
          q: 'Apa itu rasio piksel perangkat (DPR)?',
          a: 'Jumlah piksel fisik layar yang dipakai untuk menggambar satu piksel CSS. DPR 2 (tampilan Retina) memadatkan empat piksel fisik ke dalam setiap piksel CSS untuk rendering yang lebih tajam. Mode piksel penggaris selalu menampilkan piksel CSS, yang merupakan satuan kerja desainer web.',
        },
      ],
      blocks: [
        { kind: 'h2', text: 'Apa itu piksel CSS?' },
        {
          kind: 'p',
          html: 'Piksel CSS adalah satuan abstrak browser — <code>px</code> dalam stylesheet Anda. Ia sengaja <em>bukan</em> ukuran fisik: pada tampilan standar satu piksel CSS dipetakan ke satu piksel fisik, sedangkan pada tampilan berkepadatan tinggi (“Retina”) beberapa piksel fisik bekerja sama menggambar satu piksel CSS dengan lebih tajam. Rasionya adalah <strong>rasio piksel perangkat (DPR)</strong>. Desain web terjadi dalam piksel CSS, yang persis dihitung penggaris ini.',
        },
        { kind: 'h2', text: 'Membaca skala px' },
        {
          kind: 'p',
          html: 'Dalam mode px, tanda kecil hadir setiap <strong>10 px</strong>, tanda sedang setiap 50 px, dan tanda bernomor setiap <strong>100 px</strong>. Mengukur tombol: sejajarkan tepi kirinya dengan nol dan baca tempat tepi kanan mendarat — katakanlah, sedikit setelah 120, yaitu sekitar 124 px lebarnya. Untuk pekerjaan yang tepat, taruh <a href="/guide/">garis panduan</a> di kedua tepi dan kurangi bacaannya.',
        },
        { kind: 'h2', text: 'Mengapa mode px tidak perlu kalibrasi' },
        {
          kind: 'p',
          html: 'Kalibrasi menjawab pertanyaan fisik: “berapa piksel CSS yang membentuk satu inci nyata pada tampilan ini?” Mode piksel tidak pernah menanyakan itu — ia sekadar menghitung satuan milik browser, yang diketahui halaman ini secara pasti. Itu juga alasan pengukuran px tidak bermakna sebagai ukuran fisik: 100 px adalah jumlah milimeter yang berbeda pada setiap tampilan. Gunakan px untuk desain, dan cm/mm/inci (setelah <a href="/how-to-calibrate/">kalibrasi</a>) untuk dunia fisik.',
        },
        { kind: 'h2', text: 'Piksel vs. titik cetak' },
        {
          kind: 'p',
          html: 'Anda kadang melihat “1 px = 1/96 inci.” Itu konvensi <em>cetak</em> dari CSS, dipakai agar stylesheet bisa berkonversi ke satuan fisik di atas kertas — ia tidak mengatakan apa pun tentang layar Anda. Di layar, satu-satunya pernyataan jujur adalah: piksel CSS sebesar apa pun yang dibuat kepadatan tampilan, dan penggaris yang dikalibrasi adalah cara Anda mengetahuinya.',
        },
        { kind: 'h2', text: 'Referensi piksel praktis' },
        {
          kind: 'ul',
          items: [
            'Tinggi huruf khas teks isi (16 px) — kira-kira <strong>11 px</strong>',
            'Tinggi tombol umum — <strong>36–48 px</strong>',
            'Favicon — <strong>16 × 16 px</strong>',
            'Lebar viewport Full HD — <strong>1920 px</strong> (px CSS, terlepas dari DPR)',
          ],
        },
        { kind: 'h2', text: 'Pertanyaan yang sering diajukan' },
        { kind: 'h3', text: 'Seberapa besar satu piksel dalam kehidupan nyata?' },
        {
          kind: 'p',
          html: 'Tidak ada jawaban yang tetap. Piksel CSS tidak memiliki ukuran fisik — ia adalah 1/96 inci hanya menurut konvensi untuk cetak. Di layar Anda, ukuran fisiknya bergantung pada kepadatan tampilan, yang persis menjadi alasan penggaris butuh kalibrasi untuk satuan fisik tetapi tidak untuk mode piksel.',
        },
        { kind: 'h3', text: 'Apakah penggaris piksel perlu kalibrasi?' },
        {
          kind: 'p',
          html: 'Tidak. Mode piksel menghitung piksel CSS milik browser sendiri, yang diketahui halaman ini secara pasti tanpa pengukuran fisik apa pun. Kalibrasi hanya penting untuk cm, mm, dan inci — satuan dengan ukuran dunia nyata.',
        },
        { kind: 'h3', text: 'Apa itu rasio piksel perangkat (DPR)?' },
        {
          kind: 'p',
          html: 'Jumlah piksel fisik layar yang dipakai untuk menggambar satu piksel CSS. DPR 2 (tampilan Retina) memadatkan empat piksel fisik ke dalam setiap piksel CSS untuk rendering yang lebih tajam. Mode piksel penggaris selalu menampilkan piksel CSS, yang merupakan satuan kerja desainer web.',
        },
      ],
    },
  },
};
