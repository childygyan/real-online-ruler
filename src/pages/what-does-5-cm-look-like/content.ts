/**
 * content.ts — "What Does 5 Cm Look Like? Actual Size".
 *
 * Draft for the 3-day ongoing publish program (2026-10-31). Visual article:
 * ships Article + FAQPage JSON-LD only (no howToMethods). True-size bars
 * for 1–5 cm plus an AA-battery outline, sized by the visitor's own
 * calibration. Facts verified via web search 2026-10-19: 5 cm = 50 mm =
 * 1.9685 in; AA battery = 50.5 x 14.5 mm per IEC 60086; 2 in = 50.8 mm.
 */
import type { ContentPageDict } from '../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-31';

export const article: ContentPageDict = {
  title: 'What Does 5 Cm Look Like? Actual Size | Real Online Ruler',
  description:
    'See 5 cm at true physical size on your screen — plus 1–4 cm bars and an AA-battery outline for scale. Calibrate once for exact size.',
  h1: 'What Does 5 Cm Look Like? Actual Size',
  lede: 'Five centimeters is just under two inches — the length of a battery, a bottle cap’s neighborhood, a dozen daily objects. The bars below are drawn at true physical size on your screen, using your display’s calibration (or the web-standard 96 px/in approximation until you calibrate).',
  breadcrumb: 'What 5 cm looks like',
  blocks: [
    {
      kind: 'p',
      html: 'Five centimeters shows up everywhere: earring drops, keychain charms, the spacing on a shelf bracket, the "about yay big" of a hundred product listings. It is small enough that a rough guess feels safe — and wrong often enough to matter. The bars below remove the guessing.',
    },
    { kind: 'h2', text: 'Five centimeters at true size' },
    {
      kind: 'p',
      html: 'Compare against a physical ruler: after <a href="/how-to-calibrate/">calibration</a>, these bars match real life exactly. Uncalibrated, they use the 96 px/in web default — close on many laptops, not exact.',
    },
    {
      kind: 'truesize',
      bars: [
        { label: '1 cm · 10 mm', mm: 10 },
        { label: '2 cm · 20 mm', mm: 20 },
        { label: '3 cm · 30 mm', mm: 30 },
        { label: '4 cm · 40 mm', mm: 40 },
        { label: '5 cm · 50 mm', mm: 50 },
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/what-does-5-cm-look-like/desktop.webp',
      alt: 'The Real Online Ruler workspace with the centimeter unit selected and a short drawn measurement line across the ruler',
      caption:
        'The on-screen centimeter ruler — the same calibration drives the true-size bars above. One tap switches between in, cm, mm, and px.',
    },
    { kind: 'h2', text: 'Everyday things about five centimeters long' },
    {
      kind: 'p',
      html: 'An AA battery is 50.5 mm long — just half a millimeter over 5 cm, making it the handiest 5 cm anchor in any drawer. A standard golf tee at 54 mm runs a touch longer. The outline below is the battery, drawn at its true 50.5 × 14.5 mm — and it is also, near enough, two inches (50.8 mm).',
    },
    {
      kind: 'truesize',
      bars: [],
      shapes: [{ label: 'AA battery · 50.5 × 14.5 mm', wMm: 50.5, hMm: 14.5 }],
    },
    { kind: 'h2', text: '5 cm in inches' },
    {
      kind: 'p',
      html: 'Five centimeters is exactly 1.9685 inches — call it 1.97, or "a hair under two inches" in conversation. For rough mental math, 5 cm ≈ 2 in works fine; for anything you will cut, drill, or order, use the real numbers.',
    },
    {
      kind: 'figure',
      src: '/images/articles/what-does-5-cm-look-like/mobile.webp',
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
      q: 'How many inches is 5 cm?',
      a: 'Exactly 1.9685 inches — call it 1.97, or just under 2 inches.',
    },
    {
      q: 'What object is 5 cm long?',
      a: 'An AA battery at 50.5 mm is the closest common object — half a millimeter over 5 cm. A golf tee (54 mm) runs slightly longer.',
    },
    {
      q: 'Why don’t the bars match my physical ruler?',
      a: 'You probably haven’t calibrated this browser yet (the page falls back to the 96 px/in approximation), or your browser zoom isn’t at 100%. Calibrate once at full zoom and they will match.',
    },
    {
      q: 'Is 5 cm the same as 2 inches?',
      a: 'Nearly — 2 inches is 50.8 mm, so it is 0.8 mm longer than 5 cm. Fine for estimates, not for precision work.',
    },
    {
      q: 'Do the true-size bars work on my phone?',
      a: 'Yes. Calibrate with a credit card on your phone and the bars render at true physical size there too.',
    },
    {
      q: 'How many millimeters is 5 cm?',
      a: 'Exactly 50 mm — the metric system is decimal, so converting is just moving the decimal point.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/cm/', label: 'Centimeter ruler' },
    { href: '/what-does-an-inch-look-like/', label: 'What an inch looks like' },
  ],
};
