/**
 * content.ts — "What Does an Inch Look Like? Actual Size on Your Screen".
 *
 * Third English-only article (2026-10-10). Instead of describing sizes in
 * words, this page DRAWS them at true physical size: interactive bars and
 * everyday-object outlines sized by the visitor's own calibration
 * (localStorage "ror-calibration" → pxPerInch, 96 px/in fallback). No
 * howToMethods — this is a visual reference, so it ships Article + FAQPage
 * schema only.
 */
import type { ContentPageDict } from '../../i18n/content.js';

/** Publish date — must stay unique across articles (tests enforce it). */
export const DATE_PUBLISHED = '2026-10-10';

export const article: ContentPageDict = {
  title: 'What Does an Inch Look Like? Actual Size on Your Screen | Real Online Ruler',
  description:
    'See 1, 2, and 3 inches — plus 5 and 10 cm — drawn at true physical size on your screen, with everyday objects for scale. Calibrate once for exact size.',
  h1: 'What Does an Inch Actually Look Like?',
  lede: 'Forget vague comparisons like "about the length of your thumb." The bars and objects below are drawn at true physical size on your screen — using your display’s calibration, or the web-standard 96 px/in approximation until you calibrate.',
  breadcrumb: 'What an inch looks like',
  blocks: [
    {
      kind: 'p',
      html: 'Text can tell you that an inch is 25.4 millimeters, but it can’t <em>show</em> you. Photos are worse — they lie about scale every time. The only honest way to answer “what does 3 inches look like?” on a screen is to draw 3 real inches. That’s what this page does: every bar and outline below is sized in true physical millimeters on <em>your</em> display.',
    },
    { kind: 'h2', text: 'Common sizes at true size' },
    {
      kind: 'p',
      html: 'Hold a physical ruler against your screen and check — after <a href="/how-to-calibrate/">calibration</a>, these bars match real life. If you haven’t calibrated yet, they use the web-standard 96 px/in approximation, which is close on many laptops but not exact.',
    },
    {
      kind: 'truesize',
      bars: [
        { label: '1 inch · 25.4 mm', mm: 25.4 },
        { label: '2 inches · 50.8 mm', mm: 50.8 },
        { label: '3 inches · 76.2 mm', mm: 76.2 },
        { label: '5 cm · 50 mm', mm: 50 },
        { label: '10 cm · 100 mm', mm: 100 },
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/what-does-an-inch-look-like/inch-ruler-desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected, showing the inch scale',
      caption:
        'The on-screen inch ruler — the same calibration that powers the true-size bars above. Tap a unit to switch between cm, mm, in, and px.',
    },
    { kind: 'h2', text: 'Everyday objects at actual size' },
    {
      kind: 'p',
      html: 'Abstract numbers become concrete next to things you already know. These outlines are drawn at the objects’ real dimensions — credit cards follow the ISO/IEC 7810 standard, so they’re identical worldwide.',
    },
    {
      kind: 'truesize',
      bars: [],
      shapes: [
        { label: 'Credit card · 85.6 × 54 mm', wMm: 85.6, hMm: 54 },
        { label: 'AA battery · 50.5 × 14.5 mm', wMm: 50.5, hMm: 14.5 },
        { label: 'US quarter · 24.3 mm across', wMm: 24.26, hMm: 24.26, round: true },
      ],
    },
    { kind: 'h2', text: 'Why “1 inch” on screen usually isn’t an inch' },
    {
      kind: 'p',
      html: 'Here’s the uncomfortable truth: by web definition, a CSS “inch” is exactly 96 pixels — no matter what screen you’re on. On a typical laptop those 96 pixels land near a real inch, but on a dense phone display the same 96 pixels are a small fraction of one. Your browser has no idea how big its pixels physically are. That’s why uncalibrated on-screen rulers are approximations — and why a one-minute <a href="/how-to-calibrate/">calibration</a> makes everything on this site, including the bars above, genuinely true to size.',
    },
    { kind: 'h2', text: 'Get true size in under a minute' },
    {
      kind: 'p',
      html: 'Grab any credit card (they’re all 85.60 mm wide), open <a href="/how-to-calibrate/">How to Calibrate</a>, and follow the three steps. Your calibration is saved in your browser, so the bars above — and every ruler on the site — stay true to size on your next visit too. And keep your browser zoom at 100% while comparing: zooming rescales everything on the page.',
    },
    {
      kind: 'figure',
      src: '/images/articles/what-does-an-inch-look-like/inch-ruler-phone.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen',
      caption:
        'It works on phones too — calibrate with a credit card and the bars render at physical size on a small screen as well.',
    },
  ],
  faqs: [
    {
      q: 'Is a CSS inch the same as a real inch?',
      a: 'No. CSS defines 1in as exactly 96 pixels, regardless of the display. A real inch is 25.4 mm of physical length. Until your screen is calibrated, anything a webpage calls an “inch” is just 96 pixels wide — close on some laptops, far off on dense phone screens.',
    },
    {
      q: 'Why don’t the bars match my physical ruler?',
      a: 'Two usual causes: you haven’t calibrated this browser yet (so the page falls back to the 96 px/in approximation), or your browser zoom isn’t at 100%. Calibrate once at 100% zoom and the bars will match a physical ruler held against the screen.',
    },
    {
      q: 'Can I print this page to check sizes?',
      a: 'No — printers rescale pages to fit the paper, so printed bars are never trustworthy for measurement. Compare on screen after calibrating, or use the on-screen ruler directly.',
    },
    {
      q: 'Do the true-size bars work on my phone?',
      a: 'Yes. Phones just have denser pixels, which is exactly what calibration measures. Calibrate with a credit card on your phone and the bars render at true physical size there too.',
    },
    {
      q: 'What if I need a size that isn’t shown here?',
      a: 'Open the on-screen ruler and switch it to inches — every whole inch is marked, with subdivisions down to 1/16″, so you can visualize any length up to your screen’s width.',
    },
    {
      q: 'How accurate are the bars after calibration?',
      a: 'They inherit your calibration’s accuracy. With the credit-card method (cards are exactly 85.60 mm wide), on-screen sizes typically land within a fraction of a millimeter — plenty for visualizing, comparing, and rough measuring. For anything critical, always verify with a physical ruler.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/inches/', label: 'Online ruler in inches' },
    { href: '/how-to-measure-ring-size/', label: 'How to measure ring size' },
  ],
};
