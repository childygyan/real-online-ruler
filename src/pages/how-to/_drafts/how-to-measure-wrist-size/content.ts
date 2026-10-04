/**
 * content.ts — "How to Measure Your Wrist Size".
 *
 * Draft for the 15-day daily publish program (2026-10-06). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Bracelet ease values verified against jeweler
 * size guides (snug +0.6–1.3 cm, comfort ≈ +1.5 cm, loose ≈ +2 cm).
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-06';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure wrist size with a paper strip',
    totalTime: 'PT5M',
    tools: ['Strip of paper', 'Pen', 'On-screen ruler'],
    steps: [
      {
        name: 'Cut a narrow strip',
        text: 'Cut a strip of paper about 2 cm wide and long enough to wrap around your wrist with overlap.',
      },
      {
        name: 'Wrap below the wrist bone',
        text: 'Wrap the strip around your wrist just below the wrist bone, snug but not tight, where you would wear a bracelet.',
      },
      {
        name: 'Mark the overlap',
        text: 'Mark the exact point where the end overlaps the strip, then lay the strip flat on a table.',
      },
      {
        name: 'Measure against the on-screen ruler',
        text: 'Open the calibrated on-screen ruler in millimeters and read the strip from its end to your mark.',
      },
      {
        name: 'Add ease for your fit',
        text: 'Add 0.6 to 1.3 cm for a snug bracelet, about 1.5 cm for comfort, or about 2 cm for a loose drape.',
      },
    ],
  },
  {
    name: 'How to measure wrist size with string or a soft tape',
    totalTime: 'PT3M',
    tools: ['String or soft measuring tape', 'On-screen ruler'],
    steps: [
      {
        name: 'Wrap the string snugly',
        text: 'Wrap a non-stretchy string around your wrist just below the wrist bone, snug but not digging in.',
      },
      {
        name: 'Mark and straighten',
        text: 'Pinch or mark where the string meets itself, then lay it straight without stretching it.',
      },
      {
        name: 'Read the length',
        text: 'Measure the string with the calibrated on-screen millimeter ruler and add your preferred ease.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure Your Wrist Size | Real Online Ruler',
  description:
    'Measure your wrist at home with a paper strip and our on-screen mm ruler. Includes bracelet ease chart (snug/comfort/loose) and watch-fit guidance.',
  h1: 'How to Measure Your Wrist Size',
  lede: 'Buying a bracelet or sizing a watch online starts with one number: your wrist circumference. A strip of paper and our free on-screen ruler get you there in minutes.',
  breadcrumb: 'Measure wrist size',
  blocks: [
    {
      kind: 'p',
      html: 'Wrist size is the circumference around your wrist, usually taken just below the wrist bone. It is the starting point for bracelet sizing and a sanity check for watch fit — and it takes less than five minutes to measure well.',
    },
    { kind: 'h2', text: 'Method 1: The paper-strip method' },
    {
      kind: 'p',
      html: 'No soft tape? Paper works just as well, and it does not stretch the way cheap tapes can.',
    },
    {
      kind: 'ul',
      items: [
        'Cut a paper strip about 2 cm wide.',
        'Wrap it <strong>just below the wrist bone</strong>, snug but not tight.',
        'Mark where the end overlaps, then lay the strip flat.',
        'Read end-to-mark with the <a href="/mm/">on-screen millimeter ruler</a> — <a href="/how-to-calibrate/">calibrate first</a> for a true reading.',
      ],
    },
    { kind: 'h2', text: 'Method 2: String or a soft measuring tape' },
    {
      kind: 'p',
      html: 'Wrap a non-stretchy string snugly around the same spot, mark where it meets, lay it straight without pulling, and measure it against the calibrated <a href="/mm/">mm ruler</a>. Measure the wrist you will actually wear the piece on — the dominant wrist is often slightly larger.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-wrist-size/desktop.webp',
      alt: 'The Real Online Ruler workspace with the millimeter unit selected',
      caption:
        'The on-screen millimeter ruler — ideal for reading a paper strip or string precisely.',
    },
    { kind: 'h2', text: 'From wrist size to bracelet size' },
    {
      kind: 'p',
      html: 'Your wrist measurement is not the bracelet size — you add <em>ease</em> for the fit you want. As a rule of thumb, add <strong>1 to 2 cm</strong> depending on fit:',
    },
    {
      kind: 'table',
      head: ['Fit', 'Add to wrist measurement', 'Feels like'],
      rows: [
        ['Snug', '+0.6 to 1 cm', 'Sits close, minimal sliding — good for tennis bracelets'],
        ['Comfort', '+1.5 cm', 'Moves a little — the most popular fit'],
        ['Loose', '+2 to 2.5 cm', 'Drapes and slides — good for chunky chains and cuffs'],
      ],
    },
    {
      kind: 'p',
      html: 'Bracelet styles matter too: bangles and slip-ons must also fit over your hand, so size up if your palm is wide relative to your wrist. When in doubt, check the jeweler’s own chart — ease conventions vary slightly by brand.',
    },
    { kind: 'h2', text: 'Watch fit: how snug is right?' },
    {
      kind: 'p',
      html: 'A watch should sit <strong>snug</strong>: it stays put when you move your arm but is not tight. The classic test is <strong>one finger under the band</strong> — if a finger slides underneath comfortably, the fit is right; if it will not fit, the band is too tight. For metal bracelets, a jeweler removes links to dial this in; for leather or NATO straps, pick the hole that passes the finger test.',
    },
    { kind: 'h2', text: 'Tips for an accurate measurement' },
    {
      kind: 'ul',
      items: [
        'Measure just below the wrist bone, where a bracelet naturally sits.',
        'Keep the strip snug but not tight — no indenting the skin.',
        'Use a non-stretchy string; yarn and elastic lie about length.',
        'Measure twice and average if the readings differ.',
        'Keep browser zoom at 100% while reading the on-screen ruler.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-wrist-size/mobile.webp',
      alt: 'The millimeter ruler on a phone screen',
      caption: 'The mm ruler on a phone — useful for a quick check while shopping.',
    },
  ],
  faqs: [
    {
      q: 'Where exactly do I measure my wrist?',
      a: 'Just below the wrist bone (the bony bump on the pinky side), where a bracelet or watch would naturally sit. Measuring over the bone adds size you do not need.',
    },
    {
      q: 'How much bigger should a bracelet be than my wrist?',
      a: 'Add 0.6 to 1 cm for a snug fit, about 1.5 cm for everyday comfort, or 2 cm and up for a loose drape. Tennis bracelets sit best snug; chunky chains look better loose.',
    },
    {
      q: 'Should I measure my dominant wrist?',
      a: 'Measure the wrist you will wear the piece on. The dominant wrist is often slightly larger, so measuring the wrong one can put you half a size off.',
    },
    {
      q: 'Can I use a regular ruler instead of the on-screen one?',
      a: 'Yes — any millimeter ruler works. The on-screen ruler is handy when you only have the paper strip and a screen nearby; just calibrate it first.',
    },
    {
      q: 'How tight should a watch band be?',
      a: 'Snug enough not to slide around, loose enough to fit one finger underneath. If the watch leaves a deep mark or your hand tingles, it is too tight.',
    },
    {
      q: 'What if I am between bracelet sizes?',
      a: 'Size up for comfort, especially with bangles that must slide over your hand. For expensive pieces, confirm against the jeweler’s own size chart before ordering.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/mm/', label: 'Millimeter ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
