/**
 * content.ts — "How Big Is a 55-Inch TV? Actual Screen Dimensions".
 *
 * Draft for the 15-day daily publish program (2026-10-14). Visual article:
 * ships Article + FAQPage JSON-LD only (no howToMethods). The 16:9 dimensions
 * below are verified against published TV size charts (width = diagonal ×
 * 16/√337, height = diagonal × 9/√337).
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-14';

export const article: ContentPageDict = {
  title: 'How Big Is a 55-Inch TV? Actual Screen Dimensions | Real Online Ruler',
  description:
    'A 55-inch TV screen is 47.9 × 27.0 in (121.8 × 68.5 cm) — see the true size on your screen, plus a 43/50/55/65-inch comparison table.',
  h1: 'How Big Is a 55-Inch TV? Actual Screen Dimensions',
  lede: '“55-inch” is the diagonal — not the width. The actual 16:9 screen is about 47.9 inches wide and 27 inches tall, and the bars below draw it at true physical size on your screen.',
  breadcrumb: 'How big is a 55-inch TV',
  blocks: [
    {
      kind: 'p',
      html: 'TV sizes describe the <strong>diagonal of the display area</strong>, never the width. That single convention confuses almost everyone buying a TV — so before you measure your wall, see what 55 inches really means in width and height.',
    },
    { kind: 'h2', text: 'The 55-inch screen at true size' },
    {
      kind: 'p',
      html: 'For a standard 16:9 screen, a 55-inch diagonal works out to <strong>47.9 × 27.0 inches</strong> (121.8 × 68.5 cm) of actual picture. The bars below are drawn at true physical size on <em>your</em> display using your calibration — the width bar is wider than most screens, so scroll it sideways: that’s the honest scale of the thing.',
    },
    {
      kind: 'truesize',
      bars: [
        { label: '55″ screen width · 47.9 in (121.8 cm)', mm: 1217.7 },
        { label: '55″ screen height · 27.0 in (68.5 cm)', mm: 684.9 },
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-big-is-55-inch-tv/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected for measuring TV dimensions',
      caption:
        'Planning the wall? Measure your available space against the on-screen inch ruler before you buy.',
    },
    { kind: 'h2', text: 'Common TV sizes compared (16:9 screen only)' },
    {
      kind: 'p',
      html: 'Width and height follow the same 16:9 math for every size — width ≈ diagonal × 0.872, height ≈ diagonal × 0.490. Here are the popular living-room sizes:',
    },
    {
      kind: 'table',
      head: ['Advertised size (diagonal)', 'Screen width', 'Screen height'],
      rows: [
        ['43″', '37.5″ (95.2 cm)', '21.1″ (53.6 cm)'],
        ['50″', '43.6″ (110.7 cm)', '24.5″ (62.3 cm)'],
        ['55″', '47.9″ (121.8 cm)', '27.0″ (68.5 cm)'],
        ['65″', '56.7″ (143.9 cm)', '31.9″ (80.9 cm)'],
      ],
    },
    { kind: 'h2', text: 'The diagonal trick — and the bezel' },
    {
      kind: 'p',
      html: 'Two things the “55-inch” label doesn’t tell you. First, it measures <strong>only the display area</strong> — the bezel and frame add roughly <strong>1–2 cm</strong> to the TV’s total width, so the box on your wall is a little bigger than the screen. Second, the stand or feet add their own height and have their own footprint: check the model’s full spec sheet for the exact outer dimensions before committing to a cabinet.',
    },
    { kind: 'h2', text: 'Measure your space first' },
    {
      kind: 'p',
      html: 'For a 55-inch TV, you want at least <strong>~125 cm of clear wall width</strong> (screen plus bezel plus a little breathing room), and a stand or mount rated for the size. Measure your wall or unit with a tape — or hold the width bar above against the space if your screen is big enough — and leave margin for cables behind the set.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-big-is-55-inch-tv/mobile.webp',
      alt: 'The on-screen inch ruler on a phone for checking TV space measurements',
      caption:
        'In the store? The inch ruler on your phone helps you sanity-check widths against the spec sheet.',
    },
    { kind: 'h2', text: 'Does resolution change the size?' },
    {
      kind: 'p',
      html: 'No. A 55-inch 4K TV and a 55-inch 1080p TV have the <strong>same physical screen</strong> — resolution changes pixel density, not inches. Same for OLED vs LED: the panel technology doesn’t change the dimensions, though premium models often have slimmer bezels.',
    },
  ],
  faqs: [
    {
      q: 'Is a 55-inch TV 55 inches wide?',
      a: 'No — 55 inches is the diagonal. The 16:9 screen itself is about 47.9 inches wide and 27 inches tall; the whole TV is roughly 1–2 cm wider once the bezel is included.',
    },
    {
      q: 'How much wall space do I need for a 55-inch TV?',
      a: 'Allow at least ~125 cm of clear width for the screen, bezel, and a little margin — and check the stand or mount’s footprint separately in the spec sheet.',
    },
    {
      q: 'Do bezels count in the advertised 55 inches?',
      a: 'No. The advertised size is the diagonal of the display area only. Bezels, the frame, and the stand are extra.',
    },
    {
      q: 'Are all 55-inch TVs the same width?',
      a: 'The screens are — every 55-inch 16:9 panel is ~47.9 inches wide. Total TV width varies slightly because bezel thickness differs by model.',
    },
    {
      q: 'How tall is a 55-inch TV with the stand?',
      a: 'The screen is 27 inches tall; with the stand, most models reach about 30 inches total, but stand height varies a lot — check the model’s spec sheet.',
    },
    {
      q: 'What’s the screen size in centimeters?',
      a: 'A 55-inch 16:9 screen measures about 121.8 × 68.5 cm (width × height), display area only.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
