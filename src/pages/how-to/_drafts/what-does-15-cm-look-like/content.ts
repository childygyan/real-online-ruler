/**
 * content.ts — "What Does 15 Cm Look Like? Actual Size".
 *
 * Draft for the 3-day ongoing publish program (2026-11-12). Visual article:
 * ships Article + FAQPage JSON-LD only (no howToMethods). True-size bars
 * for 3–15 cm, sized by the visitor's own calibration. Facts verified via
 * web search 2026-10-19: 15 cm = 150 mm = 5.9055 in; the standard short
 * school ruler is 15 cm; a US dollar bill is 15.6 cm long.
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-11-12';

export const article: ContentPageDict = {
  title: 'What Does 15 Cm Look Like? Actual Size | Real Online Ruler',
  description:
    'See 15 cm at true physical size on your screen — plus 3–12 cm bars. The length of a standard school ruler, drawn exactly.',
  h1: 'What Does 15 Cm Look Like? Actual Size',
  lede: 'Fifteen centimeters is the length of the ruler in every school pencil case — 5.91 inches of the most familiar measuring stick on earth. The bars below are drawn at true physical size on your screen, using your display’s calibration (or the web-standard 96 px/in approximation until you calibrate).',
  breadcrumb: 'What 15 cm looks like',
  blocks: [
    {
      kind: 'p',
      html: 'If you grew up anywhere metric, you have held 15 centimeters a thousand times without ever thinking about it: the short plastic ruler that lived in your pencil box. That familiarity makes it the best anchor in the whole metric series — compare anything against it and the size clicks instantly.',
    },
    { kind: 'h2', text: 'Fifteen centimeters at true size' },
    {
      kind: 'p',
      html: 'Compare against a physical ruler: after <a href="/how-to-calibrate/">calibration</a>, these bars match real life exactly — the 15 cm bar should line up edge to edge with a real school ruler. Uncalibrated, they use the 96 px/in web default.',
    },
    {
      kind: 'truesize',
      bars: [
        { label: '3 cm · 30 mm', mm: 30 },
        { label: '6 cm · 60 mm', mm: 60 },
        { label: '9 cm · 90 mm', mm: 90 },
        { label: '12 cm · 120 mm', mm: 120 },
        { label: '15 cm · 150 mm', mm: 150 },
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/what-does-15-cm-look-like/desktop.webp',
      alt: 'The Real Online Ruler workspace with the centimeter unit selected and a medium drawn measurement line across the workspace',
      caption:
        'The on-screen centimeter ruler — the same calibration drives the true-size bars above. One tap switches between in, cm, mm, and px.',
    },
    { kind: 'h2', text: 'Everyday things about fifteen centimeters long' },
    {
      kind: 'p',
      html: 'The obvious one: a standard short school ruler is 15 cm, end to end. A US dollar bill is 15.6 cm long — lay one against the 15 cm bar and you will see the bill run just past it. A large smartphone is usually in the 15–16 cm range, though that varies by model, so treat the phone as an approximation and the ruler as exact.',
    },
    { kind: 'h2', text: '15 cm in inches' },
    {
      kind: 'p',
      html: 'Fifteen centimeters is exactly 5.9055 inches — call it 5.91, or "just under six inches." That puts it one short step below the <a href="/what-does-6-inches-look-like/">6-inch bar</a>, and exactly one and a half times the 10 cm bar. Handy mental anchors: 15 cm is half of a 30 cm ruler, and three times 5 cm.',
    },
    {
      kind: 'figure',
      src: '/images/articles/what-does-15-cm-look-like/mobile.webp',
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
      q: 'How many inches is 15 cm?',
      a: 'Exactly 5.9055 inches — call it 5.91, just under 6 inches.',
    },
    {
      q: 'What object is exactly 15 cm long?',
      a: 'A standard short school ruler — that is literally what it is made to be. A dollar bill at 15.6 cm runs just slightly longer.',
    },
    {
      q: 'Why don’t the bars match my physical ruler?',
      a: 'You probably haven’t calibrated this browser yet (the page falls back to the 96 px/in approximation), or your browser zoom isn’t at 100%. Calibrate once at full zoom and they will match — the 15 cm bar should align exactly with a real 15 cm ruler.',
    },
    {
      q: 'Is 15 cm half of 30 cm?',
      a: 'Yes — 15 cm is exactly half of the standard 30 cm (12-inch) ruler, which is why the short school ruler feels like "half a ruler."',
    },
    {
      q: 'Do the true-size bars work on my phone?',
      a: 'Yes. Calibrate with a credit card on your phone and the bars render at true physical size there too.',
    },
    {
      q: 'How many millimeters is 15 cm?',
      a: 'Exactly 150 mm.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/cm/', label: 'Centimeter ruler' },
    { href: '/mm/', label: 'Millimeter ruler' },
  ],
};
