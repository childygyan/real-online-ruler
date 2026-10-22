/**
 * content.ts — "How Big Is 2 Inches? See It at Actual Size".
 *
 * Draft for the 3-day ongoing publish program (2026-10-22). Visual article:
 * ships Article + FAQPage JSON-LD only (no howToMethods). True-size bars
 * for 0.5–2 inches plus an AA-battery outline, sized by the visitor's own
 * calibration. Facts verified via web search 2026-10-19: 2 in = 50.8 mm
 * exactly; standard golf tee = 2.125 in (54 mm); AA battery = 50.5 x 14.5 mm
 * (1.99 in) per IEC 60086.
 */
import type { ContentPageDict } from '../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-22';

export const article: ContentPageDict = {
  title: 'How Big Is 2 Inches? See It at Actual Size | Real Online Ruler',
  description:
    'See 2 inches at true physical size on your screen — plus half, one, and one-and-a-half inch bars and an AA-battery outline for scale.',
  h1: 'How Big Is 2 Inches? See It at Actual Size',
  lede: 'Two inches is 50.8 millimeters — small enough to guess wrong every time. The bars below are drawn at true physical size on your screen, using your display’s calibration (or the web-standard 96 px/in approximation until you calibrate).',
  breadcrumb: 'How big 2 inches is',
  blocks: [
    {
      kind: 'p',
      html: 'Two inches sits in an awkward spot: too big to eyeball, too small to bother measuring — so most people just guess, and guess wrong. Stop guessing. The bars below are real, honest inches on <em>your</em> display, and the battery outline gives you a pocket-sized anchor you already own.',
    },
    { kind: 'h2', text: 'Two inches at true size' },
    {
      kind: 'p',
      html: 'Compare against a physical ruler: after <a href="/how-to-calibrate/">calibration</a>, these bars match real life exactly. Uncalibrated, they use the 96 px/in web default — close on many laptops, not exact.',
    },
    {
      kind: 'truesize',
      bars: [
        { label: '½ inch · 12.7 mm', mm: 12.7 },
        { label: '1 inch · 25.4 mm', mm: 25.4 },
        { label: '1½ inches · 38.1 mm', mm: 38.1 },
        { label: '2 inches · 50.8 mm', mm: 50.8 },
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-big-is-2-inches/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected and a drawn measurement line stretching across the ruler',
      caption:
        'The on-screen inch ruler — the same calibration drives the true-size bars above. One tap switches between in, cm, mm, and px.',
    },
    { kind: 'h2', text: 'Everyday things about two inches long' },
    {
      kind: 'p',
      html: 'A standard golf tee is 2.125 inches long — a touch over two inches, and the classic "is this 2 inches?" test object. Even better: an AA battery is 50.5 mm long, which is 1.99 inches — for all practical purposes, an AA battery <em>is</em> two inches. The outline below is drawn at the battery’s true 50.5 × 14.5 mm.',
    },
    {
      kind: 'truesize',
      bars: [],
      shapes: [{ label: 'AA battery · 1.99 × 0.57 in', wMm: 50.5, hMm: 14.5 }],
    },
    { kind: 'h2', text: 'When 2 inches actually matters' },
    {
      kind: 'p',
      html: 'Two inches is the difference between a photo frame that fits and one that swallows the wall, between a screw that bites and one that pokes through. Craft patterns, earring posts, watch lugs, and cabinet hardware all live in the 1–3 inch range — exactly where eyeballing fails. When the tolerance is small, <a href="/how-to-calibrate/">calibrate once</a> and compare on screen instead of guessing.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-big-is-2-inches/mobile.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen with a drawn measurement line',
      caption:
        'Phones work too — calibrate with a credit card and the bars render at physical size on a small screen as well.',
    },
    { kind: 'h2', text: 'How this page compares to a ruler' },
    {
      kind: 'p',
      html: 'If you want the full inch-by-inch picture, start with <a href="/what-does-an-inch-look-like/">what an inch looks like</a> and work up through <a href="/how-big-is-4-inches/">4 inches</a>. Each page uses the same calibration, so the bars stay consistent across the whole series.',
    },
  ],
  faqs: [
    {
      q: 'How many millimeters is 2 inches?',
      a: 'Exactly 50.8 mm (5.08 cm), since one inch is defined as 25.4 mm.',
    },
    {
      q: 'What object is exactly 2 inches long?',
      a: 'An AA battery is 50.5 mm long — 1.99 inches — close enough to use as a two-inch stand-in. A standard golf tee at 2.125 inches is the other classic anchor.',
    },
    {
      q: 'Why don’t the bars match my physical ruler?',
      a: 'You probably haven’t calibrated this browser yet (the page falls back to the 96 px/in approximation), or your browser zoom isn’t at 100%. Calibrate once at full zoom and they will match.',
    },
    {
      q: 'Is 2 inches the same as 5 cm?',
      a: 'Almost — 2 inches is 5.08 cm, so it is 0.8 mm longer than 5 cm. Close enough for rough estimates, not for anything precise.',
    },
    {
      q: 'Can I use these bars to measure a small object?',
      a: 'For a rough check, yes — hold the object against the screen after calibrating. For anything that matters, use a physical ruler or calipers; screens are a reference, not a precision instrument.',
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
