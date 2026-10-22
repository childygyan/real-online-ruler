/**
 * content.ts — "What Does 10 Cm Look Like? Actual Size".
 *
 * Draft for the 3-day ongoing publish program (2026-10-25). Visual article:
 * ships Article + FAQPage JSON-LD only (no howToMethods). True-size bars
 * for 2–10 cm plus a two-AA-battery outline, sized by the visitor's own
 * calibration. Facts verified via web search 2026-10-19: 10 cm = 100 mm =
 * 3.937 in; AA battery = 50.5 x 14.5 mm (two end-to-end = 101 mm); US
 * quarter diameter = 24.26 mm (four in a row = 97.04 mm).
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-25';

export const article: ContentPageDict = {
  title: 'What Does 10 Cm Look Like? Actual Size | Real Online Ruler',
  description:
    'See 10 cm at true physical size on your screen — plus 2–8 cm bars and a two-AA-battery outline for scale. Calibrate once for exact size.',
  h1: 'What Does 10 Cm Look Like? Actual Size',
  lede: 'Ten centimeters is 3.94 inches — the length people picture least accurately. The bars below are drawn at true physical size on your screen, using your display’s calibration (or the web-standard 96 px/in approximation until you calibrate).',
  breadcrumb: 'What 10 cm looks like',
  blocks: [
    {
      kind: 'p',
      html: 'Centimeters are the unit of online shopping specs, craft patterns, and phone dimensions — and almost nobody outside metric countries can picture one. Ten centimeters is roughly four inches, but "roughly" is where mistakes live. The bars below are exact, and the battery outline is something you can hold in your hand right now.',
    },
    { kind: 'h2', text: 'Ten centimeters at true size' },
    {
      kind: 'p',
      html: 'Compare against a physical ruler: after <a href="/how-to-calibrate/">calibration</a>, these bars match real life exactly. Uncalibrated, they use the 96 px/in web default — close on many laptops, not exact.',
    },
    {
      kind: 'truesize',
      bars: [
        { label: '2 cm · 20 mm', mm: 20 },
        { label: '4 cm · 40 mm', mm: 40 },
        { label: '6 cm · 60 mm', mm: 60 },
        { label: '8 cm · 80 mm', mm: 80 },
        { label: '10 cm · 100 mm', mm: 100 },
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/what-does-10-cm-look-like/desktop.webp',
      alt: 'The Real Online Ruler workspace with the centimeter unit selected and a long drawn measurement line across the workspace',
      caption:
        'The on-screen centimeter ruler — the same calibration drives the true-size bars above. One tap switches between in, cm, mm, and px.',
    },
    { kind: 'h2', text: 'Everyday things about ten centimeters long' },
    {
      kind: 'p',
      html: 'Two AA batteries laid end to end measure 101 mm — just a millimeter over 10 cm, close enough to use as a pocket reference. Four US quarters in a row span 97 mm, a touch under. A standard playing card stands about 8.9 cm tall, so picture a card plus a fingernail. The outline below is the two-battery anchor, drawn at its true 101 × 14.5 mm.',
    },
    {
      kind: 'truesize',
      bars: [],
      shapes: [{ label: 'Two AA batteries end-to-end · ~10.1 cm', wMm: 101, hMm: 14.5 }],
    },
    { kind: 'h2', text: '10 cm in inches' },
    {
      kind: 'p',
      html: 'Ten centimeters is exactly 3.937 inches — call it 3.94. That is just under four inches, so if you think in imperial, picture the <a href="/how-big-is-4-inches/">4-inch bar</a> and shave off a hair. A handy rule of thumb: 2.5 cm ≈ 1 inch, so 10 cm ≈ 4 inches.',
    },
    {
      kind: 'figure',
      src: '/images/articles/what-does-10-cm-look-like/mobile.webp',
      alt: 'The Real Online Ruler centimeter scale on a phone screen with a drawn measurement line',
      caption:
        'Phones work too — calibrate with a credit card and the bars render at physical size on a small screen as well.',
    },
    { kind: 'h2', text: 'Get true size in under a minute' },
    {
      kind: 'p',
      html: 'Grab any credit card (85.60 mm wide), open <a href="/how-to-calibrate/">How to Calibrate</a>, and follow the three steps. The calibration is saved in your browser, so the bars above stay true to size on your next visit. Keep browser zoom at 100% while comparing.',
    },
  ],
  faqs: [
    {
      q: 'How many inches is 10 cm?',
      a: 'Exactly 3.937 inches — call it 3.94. The rough rule is 2.5 cm per inch, which gives 4 inches.',
    },
    {
      q: 'What object is 10 cm long?',
      a: 'Two AA batteries end to end (101 mm) is the closest common object. Four US quarters in a row (97 mm) and a standard playing card’s height (about 8.9 cm) are good rough anchors.',
    },
    {
      q: 'Why don’t the bars match my physical ruler?',
      a: 'You probably haven’t calibrated this browser yet (the page falls back to the 96 px/in approximation), or your browser zoom isn’t at 100%. Calibrate once at full zoom and they will match.',
    },
    {
      q: 'Is 10 cm the same as 100 mm?',
      a: 'Yes — the metric system is decimal, so 10 cm is exactly 100 mm.',
    },
    {
      q: 'Do the true-size bars work on my phone?',
      a: 'Yes. Calibrate with a credit card on your phone and the bars render at true physical size there too.',
    },
    {
      q: 'What is 10 cm used for in everyday life?',
      a: 'It shows up in phone and gadget dimensions, craft and sewing patterns, and parcel size bands — anywhere small metric lengths matter.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/cm/', label: 'Centimeter ruler' },
    { href: '/what-does-an-inch-look-like/', label: 'What an inch looks like' },
  ],
};
