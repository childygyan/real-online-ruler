/**
 * content.ts — "How Big Is 12 Inches? See It at Actual Size".
 *
 * Draft for the 3-day ongoing publish program (2026-11-18). Visual article:
 * ships Article + FAQPage JSON-LD only (no howToMethods). True-size bars
 * for 3–12 inches, sized by the visitor's own calibration. Facts verified
 * via web search 2026-10-19: 12 in = 304.8 mm exactly (one foot, by
 * definition); the standard long school/desk ruler is 12 in; an LP vinyl
 * record is 12 in across.
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-11-18';

export const article: ContentPageDict = {
  title: 'How Big Is 12 Inches? See It at Actual Size | Real Online Ruler',
  description:
    'See 12 inches — a full foot — at true physical size on your screen, plus 3–9 inch bars. Calibrate once for exact size.',
  h1: 'How Big Is 12 Inches? See It at Actual Size',
  lede: 'Twelve inches is a foot — 304.8 millimeters, the length of the ruler in every desk drawer. The bars below are drawn at true physical size on your screen, using your display’s calibration (or the web-standard 96 px/in approximation until you calibrate).',
  breadcrumb: 'How big 12 inches is',
  blocks: [
    {
      kind: 'p',
      html: 'A foot is the unit your hands already know: the long wooden ruler from school, the span people mean by "about a foot." Twelve inches is also where the whole inch series on this site tops out — from <a href="/what-does-an-inch-look-like/">a single inch</a> all the way here, every bar uses the same calibration.',
    },
    { kind: 'h2', text: 'Twelve inches at true size' },
    {
      kind: 'p',
      html: 'Compare against a physical ruler: after <a href="/how-to-calibrate/">calibration</a>, these bars match real life exactly — the 12-inch bar should line up edge to edge with a real foot-long ruler. Uncalibrated, they use the 96 px/in web default.',
    },
    {
      kind: 'truesize',
      bars: [
        { label: '3 inches · 76.2 mm', mm: 76.2 },
        { label: '6 inches · 152.4 mm', mm: 152.4 },
        { label: '9 inches · 228.6 mm', mm: 228.6 },
        { label: '12 inches · 304.8 mm', mm: 304.8 },
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-big-is-12-inches/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected and a medium-length drawn measurement line across the ruler',
      caption:
        'The on-screen inch ruler — the same calibration drives the true-size bars above. One tap switches between in, cm, mm, and px.',
    },
    { kind: 'h2', text: 'Everyday things twelve inches long' },
    {
      kind: 'p',
      html: 'The standard long ruler is 12 inches — that is the definition most of us learned first. A vinyl LP record measures 12 inches across, which is why "twelve-inch" became shorthand for a full album. And a foot is twelve inches by definition, so your shoe is probably in the neighborhood: most adult shoes run 10–13 inches long.',
    },
    { kind: 'h2', text: '12 inches in metric' },
    {
      kind: 'p',
      html: 'Twelve inches is exactly 304.8 mm, or 30.48 cm — call it 30.5 cm. That is why the long school ruler is sold as both "12 inch" and "30 cm": the two labels describe the same stick, rounded differently.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-big-is-12-inches/mobile.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen with a very short drawn measurement line',
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
      q: 'How many millimeters is 12 inches?',
      a: 'Exactly 304.8 mm (30.48 cm), since one inch is defined as 25.4 mm.',
    },
    {
      q: 'Is 12 inches the same as a foot?',
      a: 'Yes — a foot is defined as exactly 12 inches.',
    },
    {
      q: 'What object is 12 inches long?',
      a: 'A standard long ruler, and a vinyl LP record measures 12 inches across. Most adult shoes are in the 10–13 inch range.',
    },
    {
      q: 'Why don’t the bars match my physical ruler?',
      a: 'You probably haven’t calibrated this browser yet (the page falls back to the 96 px/in approximation), or your browser zoom isn’t at 100%. Calibrate once at full zoom and the 12-inch bar will align exactly with a real ruler.',
    },
    {
      q: 'Is a 12-inch ruler the same as a 30 cm ruler?',
      a: 'For all practical purposes, yes — 12 inches is 30.48 cm, so the "30 cm" label is the same stick rounded down by less than 5 mm.',
    },
    {
      q: 'Do the true-size bars work on my phone?',
      a: 'Yes. Calibrate with a credit card on your phone and the bars render at true physical size there too.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/what-does-an-inch-look-like/', label: 'What an inch looks like' },
  ],
};
