/**
 * content.ts — "How Big Is 4 Inches? See It at Actual Size".
 *
 * Draft for the 15-day daily publish program (2026-10-07). Visual article:
 * ships Article + FAQPage JSON-LD only (no howToMethods — a visual
 * reference, not a procedure). True-size bars for 1–4 inches plus
 * everyday-object outlines, sized by the visitor's calibration.
 * Facts: 4 in = 101.6 mm exactly; two AA batteries ≈ 101 mm; a credit
 * card is 85.6 mm ≈ 3.37 in.
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-07';

export const article: ContentPageDict = {
  title: 'How Big Is 4 Inches? See It at Actual Size | Real Online Ruler',
  description:
    'See exactly how big 4 inches is — drawn at true size on your screen, with 1–3 inch bars and everyday objects (AA batteries, credit card) for scale.',
  h1: 'How Big Is 4 Inches? See It at Actual Size',
  lede: 'Four inches is 101.6 millimeters — but numbers do not show size. The bars and objects below are drawn at true physical size on your screen, using your display’s calibration.',
  breadcrumb: 'How big is 4 inches',
  blocks: [
    {
      kind: 'p',
      html: '“About four inches long” means nothing until you see it. Hold a ruler to your screen and check: after <a href="/how-to-calibrate/">calibration</a>, the longest bar below is a genuine four inches.',
    },
    { kind: 'h2', text: '1 to 4 inches at true size' },
    {
      kind: 'p',
      html: 'Each bar is drawn at its real physical length on <em>your</em> display — calibrated if you have calibrated, otherwise the web-standard 96 px/in approximation.',
    },
    {
      kind: 'truesize',
      bars: [
        { label: '1 inch · 25.4 mm', mm: 25.4 },
        { label: '2 inches · 50.8 mm', mm: 50.8 },
        { label: '3 inches · 76.2 mm', mm: 76.2 },
        { label: '4 inches · 101.6 mm', mm: 101.6 },
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-big-is-4-inches/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected',
      caption:
        'The on-screen inch ruler — the same calibration powers the true-size bars above.',
    },
    { kind: 'h2', text: 'Everyday things about 4 inches long' },
    {
      kind: 'p',
      html: 'Two AA batteries laid end to end measure about 101 mm — essentially 4 inches. A credit card, at 85.6 mm wide, is about 3.37 inches: just short of the mark.',
    },
    {
      kind: 'truesize',
      bars: [],
      shapes: [
        { label: 'Two AA batteries end to end · ≈ 101 mm', wMm: 101, hMm: 14.5 },
        { label: 'Credit card · 85.6 mm ≈ 3.37 in', wMm: 85.6, hMm: 54 },
      ],
    },
    { kind: 'h2', text: '4 inches in other units' },
    {
      kind: 'ul',
      items: [
        '<strong>101.6 mm</strong> — exactly, since one inch is defined as 25.4 mm.',
        '<strong>10.16 cm</strong> — just over ten centimeters.',
        'About <strong>one third of a 12-inch ruler</strong>.',
      ],
    },
    { kind: 'h2', text: 'Why it may not look like 4 inches yet' },
    {
      kind: 'p',
      html: 'Browsers define an “inch” as 96 pixels regardless of your screen, so uncalibrated bars are approximations. <a href="/how-to-calibrate/">Calibrate with a credit card</a> (exactly 85.60 mm wide) and the bars become true to size. Keep zoom at 100% while comparing. Our <a href="/what-does-an-inch-look-like/">inch visualizer</a> explains the same idea for 1–3 inches.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-big-is-4-inches/mobile.webp',
      alt: 'The inch ruler on a phone screen',
      caption: 'The inch ruler on a phone — calibrate there too for true size.',
    },
  ],
  faqs: [
    {
      q: 'How many centimeters is 4 inches?',
      a: 'Exactly 10.16 cm, since one inch is defined as 2.54 cm. Four times 2.54 gives 10.16.',
    },
    {
      q: 'How many millimeters is 4 inches?',
      a: 'Exactly 101.6 mm. One inch equals 25.4 mm by definition, so 4 × 25.4 = 101.6.',
    },
    {
      q: 'What everyday object is 4 inches long?',
      a: 'Two AA batteries end to end are about 101 mm — essentially 4 inches. A credit card (85.6 mm) is close at about 3.37 inches, and a standard sticky note is 3 inches square.',
    },
    {
      q: 'Why does 4 inches look different on my phone vs my laptop?',
      a: 'Screens have different pixel densities, and browsers call 96 pixels an “inch” on all of them. Calibrate each device and the bars will match a physical ruler on both.',
    },
    {
      q: 'Can I print this page to see 4 inches?',
      a: 'No — printers rescale pages to fit paper, so printed bars are never reliable. Compare on screen after calibrating instead.',
    },
    {
      q: 'How do I measure 4 inches precisely?',
      a: 'Open the on-screen inch ruler, calibrate it, and count four major inch marks — subdivisions go down to 1/16 of an inch for finer work.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/what-does-an-inch-look-like/', label: 'What an inch looks like' },
  ],
};
