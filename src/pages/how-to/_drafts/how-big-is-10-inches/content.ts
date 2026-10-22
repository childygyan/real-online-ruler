/**
 * content.ts — "How Big Is 10 Inches? See It at Actual Size".
 *
 * Draft for the 3-day ongoing publish program (2026-11-06). Visual article:
 * ships Article + FAQPage JSON-LD only (no howToMethods). True-size bars
 * for 2–10 inches plus a US-letter-paper outline, sized by the visitor's
 * own calibration. Facts verified via web search 2026-10-19: 10 in =
 * 254 mm exactly; US Letter paper = 8.5 x 11 in (215.9 x 279.4 mm).
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-11-06';

export const article: ContentPageDict = {
  title: 'How Big Is 10 Inches? See It at Actual Size | Real Online Ruler',
  description:
    'See 10 inches at true physical size on your screen — plus 2–8 inch bars and a sheet-of-paper outline for scale. Calibrate once for exact size.',
  h1: 'How Big Is 10 Inches? See It at Actual Size',
  lede: 'Ten inches is 254 millimeters — the size of tablets, dinner plates, and a hundred "will it fit?" questions. The bars below are drawn at true physical size on your screen, using your display’s calibration (or the web-standard 96 px/in approximation until you calibrate).',
  breadcrumb: 'How big 10 inches is',
  blocks: [
    {
      kind: 'p',
      html: 'Ten inches is where "about a foot" starts to feel real. It is the most common tablet screen diagonal, the neighborhood of a dinner plate, and the number on a thousand product listings. Hold it against your screen below and the abstraction disappears.',
    },
    { kind: 'h2', text: 'Ten inches at true size' },
    {
      kind: 'p',
      html: 'Compare against a physical ruler: after <a href="/how-to-calibrate/">calibration</a>, these bars match real life exactly. Uncalibrated, they use the 96 px/in web default — close on many laptops, not exact.',
    },
    {
      kind: 'truesize',
      bars: [
        { label: '2 inches · 50.8 mm', mm: 50.8 },
        { label: '4 inches · 101.6 mm', mm: 101.6 },
        { label: '6 inches · 152.4 mm', mm: 152.4 },
        { label: '8 inches · 203.2 mm', mm: 203.2 },
        { label: '10 inches · 254 mm', mm: 254 },
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-big-is-10-inches/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected and a wide drawn measurement line across the workspace',
      caption:
        'The on-screen inch ruler — the same calibration drives the true-size bars above. One tap switches between in, cm, mm, and px.',
    },
    { kind: 'h2', text: 'Everyday things about ten inches' },
    {
      kind: 'p',
      html: 'A standard sheet of US printer paper stands 11 inches tall — just one inch more than the 10-inch bar, so picture a sheet with the top inch folded away. That makes paper the perfect desk-side anchor. The outline below is a real Letter sheet, drawn at its true 215.9 × 279.4 mm.',
    },
    {
      kind: 'truesize',
      bars: [],
      shapes: [{ label: 'US letter paper · 8.5 × 11 in', wMm: 215.9, hMm: 279.4 }],
    },
    { kind: 'h2', text: 'When 10 inches is the number that matters' },
    {
      kind: 'p',
      html: 'Tablet screen sizes, picture-frame openings, the width of a carry-on’s narrow side — 10 inches is a decision size. If you are sizing something against it, <a href="/how-to-calibrate/">calibrate once</a> and compare directly; a "close enough" guess at this scale is how frames and shelves come home wrong.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-big-is-10-inches/mobile.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen with a short drawn measurement line',
      caption:
        'Phones work too — calibrate with a credit card and the bars render at physical size on a small screen as well.',
    },
    { kind: 'h2', text: 'The rest of the inch series' },
    {
      kind: 'p',
      html: 'Work up from <a href="/what-does-an-inch-look-like/">what an inch looks like</a> through <a href="/what-does-6-inches-look-like/">6 inches</a> — every page uses the same calibration, so the bars stay consistent across the whole series.',
    },
  ],
  faqs: [
    {
      q: 'How many millimeters is 10 inches?',
      a: 'Exactly 254 mm (25.4 cm), since one inch is defined as 25.4 mm.',
    },
    {
      q: 'What object is 10 inches long?',
      a: 'A sheet of US Letter printer paper is 11 inches tall — just an inch over. Ten inches is also the classic tablet screen diagonal and roughly a dinner plate’s width.',
    },
    {
      q: 'Why don’t the bars match my physical ruler?',
      a: 'You probably haven’t calibrated this browser yet (the page falls back to the 96 px/in approximation), or your browser zoom isn’t at 100%. Calibrate once at full zoom and they will match.',
    },
    {
      q: 'Is 10 inches the same as 25 cm?',
      a: 'Very close — 10 inches is 25.4 cm, so it runs 4 mm longer than 25 cm.',
    },
    {
      q: 'Do the true-size bars work on my phone?',
      a: 'Yes. Calibrate with a credit card on your phone and the bars render at true physical size there too.',
    },
    {
      q: 'Can I measure an object against the 10-inch bar?',
      a: 'For a rough check, yes — hold the object against the screen after calibrating. For anything that matters, use a physical ruler; screens are a reference, not a precision instrument.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/what-does-6-inches-look-like/', label: 'What 6 inches looks like' },
  ],
};
