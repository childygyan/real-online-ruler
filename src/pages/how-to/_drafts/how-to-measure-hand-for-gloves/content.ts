/**
 * content.ts — "How to Measure Your Hand for Glove Size".
 *
 * Draft for the 15-day daily publish program (2026-10-13). Procedural article:
 * ships Article + HowTo + FAQPage JSON-LD (index.astro builds it from
 * howToMethods below).
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-13';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure hand circumference for gloves',
    totalTime: 'PT5M',
    tools: ['Soft tape measure or string', 'On-screen ruler'],
    steps: [
      {
        name: 'Use your dominant hand',
        text: 'Measure the hand you write with — it is usually slightly larger, and gloves must fit the bigger hand.',
      },
      {
        name: 'Hold your fingers together, thumb out',
        text: 'Keep your hand flat with fingers together and your thumb held away; the thumb is never included in the measurement.',
      },
      {
        name: 'Wrap the tape around your knuckles',
        text: 'Wrap a soft tape snugly around your hand at the knuckles — the widest part below the fingers — without pulling tight.',
      },
      {
        name: 'Read the circumference',
        text: 'Note the measurement where the tape meets itself. If you used a string, lay it straight and read it on the on-screen centimeter ruler.',
      },
    ],
  },
  {
    name: 'How to measure hand length for gloves',
    totalTime: 'PT5M',
    tools: ['Ruler or tape measure', 'On-screen ruler'],
    steps: [
      {
        name: 'Find your wrist crease',
        text: 'Locate the crease where your palm meets your wrist — that is the base point of the measurement.',
      },
      {
        name: 'Measure to your middle fingertip',
        text: 'Measure in a straight line from the wrist crease to the tip of your middle finger, keeping your hand flat and relaxed.',
      },
      {
        name: 'Take the larger of the two measurements',
        text: 'Compare your circumference and length against the size chart and use whichever measurement points to the larger size.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure Your Hand for Glove Size | Real Online Ruler',
  h1: 'How to Measure Your Hand for Glove Size',
  description:
    'Measure your hand for gloves: knuckle circumference and hand length, in cm or inches — then read any brand’s size chart (charts vary, so check theirs).',
  lede: 'Gloves that are too tight cut circulation; too loose and you lose all grip. Sizing them takes two quick measurements — hand circumference and hand length — and about three minutes. Here’s exactly how.',
  breadcrumb: 'Measure hand for gloves',
  blocks: [
    {
      kind: 'p',
      html: 'Nearly every glove brand sizes from the same two hand measurements — the <strong>circumference around your knuckles</strong> and the <strong>length from wrist to middle fingertip</strong>. Get those two numbers and any size chart becomes readable. One honest warning up front: <strong>charts vary by brand</strong>, so always check the specific brand’s chart before ordering.',
    },
    { kind: 'h2', text: 'Method 1: knuckle circumference' },
    {
      kind: 'p',
      html: 'This is the primary glove measurement — most charts list it first. Use your <strong>dominant hand</strong> (it’s usually slightly larger), hold your fingers together, and keep your thumb out of the way.',
    },
    {
      kind: 'ul',
      items: [
        'Wrap a soft tape around your hand at the knuckles — the widest point just below the fingers.',
        'Keep it snug but not tight; you should be able to slip a finger under the tape.',
        'Exclude the thumb entirely.',
        'No soft tape? Use a string, mark it, then measure the string on the <a href="/cm/">on-screen centimeter ruler</a>.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-hand-for-gloves/desktop.webp',
      alt: 'The Real Online Ruler workspace with the centimeter unit selected for measuring hand size',
      caption:
        'Measured with a string? Lay it straight and read the centimeters on the on-screen ruler.',
    },
    { kind: 'h2', text: 'Method 2: hand length' },
    {
      kind: 'p',
      html: 'With your hand flat and relaxed, measure in a straight line from the <strong>crease at your wrist</strong> (where palm meets wrist) to the <strong>tip of your middle finger</strong>. This catches people with long fingers or wide palms that circumference alone would miss.',
    },
    { kind: 'h2', text: 'Which measurement decides your size?' },
    {
      kind: 'p',
      html: 'Compare <em>both</em> numbers to the chart and <strong>go with the larger size</strong> if they disagree — that’s the standard advice across brands. If you land exactly between two sizes, most brands recommend sizing up; leather gloves also stretch a little with wear, so a slightly snug new leather glove is fine, but a too-tight synthetic one never gets better.',
    },
    { kind: 'h2', text: 'Example size chart (men’s)' },
    {
      kind: 'p',
      html: 'Charts differ — this is a <em>typical</em> men’s chart by knuckle circumference to show how the numbers map. Always confirm against the chart of the brand you’re buying.',
    },
    {
      kind: 'table',
      head: ['Size', 'Knuckle circumference'],
      rows: [
        ['S', '8 – 8½″ (20 – 21.5 cm)'],
        ['M', '8½ – 9″ (21.5 – 23 cm)'],
        ['L', '9 – 9½″ (23 – 24 cm)'],
        ['XL', '9½ – 10″ (24 – 25.5 cm)'],
        ['XXL', '10 – 10½″ (25.5 – 26.5 cm)'],
      ],
    },
    {
      kind: 'p',
      html: 'Women’s, youth, and specialty charts (golf, ski, work, motorcycle) all use the same two measurements but different ranges — and some, like golf gloves, add cadet sizes with shorter fingers. The method never changes; only the chart does.',
    },
    { kind: 'h2', text: 'Tips for an accurate measure' },
    {
      kind: 'ul',
      items: [
        'Measure in the afternoon — hands swell slightly through the day, and you want the larger reading.',
        'If you’ll wear liners under ski or work gloves, measure with the liner on.',
        'Measure twice. A quarter-inch error is a full size on most charts.',
        'Keep the tape level — a diagonal wrap adds phantom length.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-hand-for-gloves/mobile.webp',
      alt: 'The on-screen centimeter ruler on a phone for measuring hand length',
      caption:
        'On the go? The centimeter ruler on your phone handles the hand-length measurement just fine.',
    },
  ],
  faqs: [
    {
      q: 'Should I measure my dominant hand for gloves?',
      a: 'Yes. Your dominant hand is usually slightly larger, and gloves need to fit the bigger hand — measure that one.',
    },
    {
      q: 'What if my measurement falls between two glove sizes?',
      a: 'Size up — that’s the standard advice from most brands. A slightly roomy glove breaks in; a too-tight one doesn’t.',
    },
    {
      q: 'Do I include my thumb when measuring hand circumference?',
      a: 'No. Wrap the tape around the knuckles with fingers together and the thumb excluded — that’s how every size chart defines it.',
    },
    {
      q: 'Are men’s and women’s glove sizes the same?',
      a: 'No, they use separate charts with different ranges, and brands vary on top of that. Always use the chart for the specific glove you’re buying.',
    },
    {
      q: 'Can I use a string instead of a tape measure?',
      a: 'Absolutely. Wrap the string around your knuckles, mark it, lay it straight, and measure it against the on-screen centimeter ruler.',
    },
    {
      q: 'Why do my old gloves say a different size than my measurement?',
      a: 'Leather stretches with wear, and vanity-style sizing differs between brands. Trust a fresh measurement over an old label.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/cm/', label: 'Centimeter ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
