/**
 * content.ts — "What Does 6 Inches Look Like? Actual Size".
 *
 * Draft for the 15-day daily publish program (2026-10-16). Visual article:
 * ships Article + FAQPage JSON-LD only (no howToMethods). True-size bars
 * for 1-6 inches plus a dollar-bill outline, sized by the visitor's own
 * calibration. Facts verified via web search 2026-10-04: 6 in = 152.4 mm
 * exactly; US dollar bill is 6.14 x 2.61 in; typical smartphones are
 * roughly 6 in tall (varies by model).
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-16';

export const article: ContentPageDict = {
  title: 'What Does 6 Inches Look Like? Actual Size | Real Online Ruler',
  description:
    'See 6 inches at true physical size on your screen — plus 1–5 inch bars and a dollar-bill outline for scale. Calibrate once for exact size.',
  h1: 'What Does 6 Inches Look Like? Actual Size',
  lede: 'Six inches is 152.4 millimeters — a number that means nothing until you see it. The bars below are drawn at true physical size on your screen, using your display’s calibration (or the web-standard 96 px/in approximation until you calibrate).',
  breadcrumb: 'What 6 inches looks like',
  blocks: [
    {
      kind: 'p',
      html: 'Nobody can picture "152.4 millimeters" in their head. But hold a real six inches against your screen and the number becomes obvious. That is what this page does: every bar below is six — or fewer — genuine inches on <em>your</em> display.',
    },
    { kind: 'h2', text: 'Six inches at true size' },
    {
      kind: 'p',
      html: 'Compare against a physical ruler: after <a href="/how-to-calibrate/">calibration</a>, these bars match real life exactly. Uncalibrated, they use the 96 px/in web default — close on many laptops, not exact.',
    },
    {
      kind: 'truesize',
      bars: [
        { label: '1 inch · 25.4 mm', mm: 25.4 },
        { label: '2 inches · 50.8 mm', mm: 50.8 },
        { label: '3 inches · 76.2 mm', mm: 76.2 },
        { label: '4 inches · 101.6 mm', mm: 101.6 },
        { label: '5 inches · 127 mm', mm: 127 },
        { label: '6 inches · 152.4 mm', mm: 152.4 },
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/what-does-6-inches-look-like/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected, showing the inch scale',
      caption:
        'The on-screen inch ruler — the same calibration drives the true-size bars above. One tap switches between in, cm, mm, and px.',
    },
    { kind: 'h2', text: 'Everyday things about six inches long' },
    {
      kind: 'p',
      html: 'A US dollar bill is 6.14 inches long — just a hair over six inches, close enough to use as a rough real-world anchor. A typical smartphone is roughly six inches tall, though that varies by model. The outline below is the bill, drawn at its true 156.1 × 66.3 mm.',
    },
    {
      kind: 'truesize',
      bars: [],
      shapes: [{ label: 'US dollar bill · 6.14 × 2.61 in', wMm: 156.06, hMm: 66.29 }],
    },
    { kind: 'h2', text: 'Why screen inches lie' },
    {
      kind: 'p',
      html: 'A CSS "inch" is defined as exactly 96 pixels — on every screen, no matter its real pixel density. On a laptop those 96 pixels land near a true inch; on a dense phone display they are a fraction of one. Your browser cannot know how big its pixels are until you <a href="/how-to-calibrate/">calibrate</a> it.',
    },
    { kind: 'h2', text: 'Get true size in under a minute' },
    {
      kind: 'p',
      html: 'Grab any credit card (85.60 mm wide), open <a href="/how-to-calibrate/">How to Calibrate</a>, and follow the three steps. The calibration is saved in your browser, so the bars above stay true to size on your next visit. Keep browser zoom at 100% while comparing.',
    },
    {
      kind: 'figure',
      src: '/images/articles/what-does-6-inches-look-like/mobile.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen',
      caption:
        'Phones work too — calibrate with a credit card and the bars render at physical size on a small screen as well.',
    },
  ],
  faqs: [
    {
      q: 'How many millimeters is 6 inches?',
      a: 'Exactly 152.4 mm (15.24 cm), since one inch is defined as 25.4 mm.',
    },
    {
      q: 'Is a dollar bill exactly 6 inches long?',
      a: 'No — it is 6.14 inches long, just over six. It is a handy rough anchor, not a ruler; a worn bill can also be very slightly off spec.',
    },
    {
      q: 'Why don’t the bars match my physical ruler?',
      a: 'You probably haven’t calibrated this browser yet (the page falls back to the 96 px/in approximation), or your browser zoom isn’t at 100%. Calibrate once at full zoom and they will match.',
    },
    {
      q: 'Can I print this page to check sizes?',
      a: 'No — printers rescale pages to fit the paper, so printed bars are never trustworthy for measurement. Compare on screen after calibrating.',
    },
    {
      q: 'Do the true-size bars work on my phone?',
      a: 'Yes. Calibrate with a credit card on your phone and the bars render at true physical size there too.',
    },
    {
      q: 'What everyday objects are about 6 inches?',
      a: 'A dollar bill (6.14 in long) is the classic one, and most smartphones stand roughly six inches tall — though phone heights vary by model, so treat that as approximate.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/what-does-an-inch-look-like/', label: 'What an inch looks like' },
  ],
};
