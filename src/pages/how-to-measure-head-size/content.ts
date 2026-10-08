/**
 * content.ts — "How to Measure Your Head Size".
 *
 * Draft for the 15-day daily publish program (2026-10-08). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Hat-size ranges verified against retailer
 * charts (S ≈ 54–55 cm, M ≈ 56–57, L ≈ 58–59, XL ≈ 60–61); the chart
 * carries a brands-vary disclaimer.
 */
import type { ContentPageDict } from '../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-08';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure head size with a soft tape',
    totalTime: 'PT5M',
    tools: ['Soft measuring tape'],
    steps: [
      {
        name: 'Position the tape',
        text: 'Wrap the tape around your head about 2.5 cm above your eyebrows, passing over the top of your ears.',
      },
      {
        name: 'Find the widest point',
        text: 'Settle the tape on the widest part of the back of your head, keeping it level all the way around.',
      },
      {
        name: 'Read snug, not tight',
        text: 'Pull the tape snug without indenting the skin or compressing your hair, and read the centimeter mark.',
      },
      {
        name: 'Measure twice',
        text: 'Repeat the measurement to confirm — hair thickness and tape angle can shift the reading by a centimeter.',
      },
    ],
  },
  {
    name: 'How to measure head size with string and the on-screen ruler',
    totalTime: 'PT5M',
    tools: ['Non-stretchy string', 'On-screen ruler'],
    steps: [
      {
        name: 'Wrap the string',
        text: 'Wrap a non-stretchy string around your head 2.5 cm above the eyebrows, over the tops of the ears.',
      },
      {
        name: 'Mark the overlap',
        text: 'Mark exactly where the string meets itself, then lay it straight without stretching.',
      },
      {
        name: 'Read against the on-screen ruler',
        text: 'Open the calibrated on-screen ruler in centimeters and read the string end to mark.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure Your Head Size | Real Online Ruler',
  description:
    'Measure your head circumference at home with tape or string and our on-screen cm ruler. Includes a hat-size chart and helmet-fit guidance.',
  h1: 'How to Measure Your Head Size',
  lede: 'One tape measurement — around the widest part of your head — unlocks hat sizes, helmet sizes, and caps that actually fit. Here is how to take it accurately.',
  breadcrumb: 'Measure head size',
  blocks: [
    {
      kind: 'p',
      html: 'Head size is simply your head’s circumference, taken about <strong>2.5 cm above the eyebrows</strong>. Get this one number right and hat shopping becomes a lookup instead of a gamble.',
    },
    { kind: 'h2', text: 'Method 1: Soft tape around the head' },
    {
      kind: 'ul',
      items: [
        'Wrap the tape <strong>2.5 cm above your eyebrows</strong>, over the tops of your ears.',
        'Settle it on the <strong>widest part of the back</strong> of your head, level all around.',
        'Pull it <strong>snug, not tight</strong> — no skin indenting, no squashing your hair flat.',
        'Read the centimeter mark, then <strong>measure twice</strong> to confirm.',
      ],
    },
    { kind: 'h2', text: 'Method 2: String, then the on-screen ruler' },
    {
      kind: 'p',
      html: 'No soft tape? Wrap a non-stretchy string around the same line, mark the overlap, lay it straight, and read it against the <a href="/cm/">calibrated on-screen centimeter ruler</a>. String stretches less than cheap tapes, so this can actually be more accurate.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-head-size/desktop.webp',
      alt: 'The Real Online Ruler workspace with the centimeter unit selected',
      caption:
        'The on-screen centimeter ruler — read your string against it after calibrating.',
    },
    { kind: 'h2', text: 'Find your hat size' },
    {
      kind: 'p',
      html: 'Match your circumference to the closest range. Between two sizes? Most people size up for comfort.',
    },
    {
      kind: 'table',
      head: ['Hat size', 'Head circumference (cm)'],
      rows: [
        ['S', '54–55'],
        ['M', '56–57'],
        ['L', '58–59'],
        ['XL', '60–61'],
      ],
    },
    {
      kind: 'p',
      html: '<strong>Brands vary</strong> — fitted hats follow charts like this closely, while snapbacks and flex-fit caps cover ranges (e.g. S/M 53–57 cm). Always check the maker’s own chart for fitted styles, and note whether the size runs in US, UK, or cm.',
    },
    { kind: 'h2', text: 'Buying a helmet? Read this first' },
    {
      kind: 'p',
      html: 'Helmets use the same circumference measurement, but the stakes are higher. <strong>Measure twice</strong>, use the <a href="/guide/">guide to reading the ruler</a> if you are unsure of a mark, and if you fall between sizes, <strong>size up</strong> — a slightly roomy helmet with its pads and retention dial adjusted beats a tight one that gives you a headache. Then confirm against that exact helmet maker’s chart before buying.',
    },
    { kind: 'h2', text: 'Tips for an accurate measurement' },
    {
      kind: 'ul',
      items: [
        'Keep the tape level — dipping at the back is the most common error.',
        'Do not pull hair flat; measure over your normal hairstyle.',
        'Use centimeters; most hat charts are metric-first.',
        'Re-measure if the two readings differ by more than 0.5 cm.',
        'Keep browser zoom at 100% while reading the on-screen ruler.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-head-size/mobile.webp',
      alt: 'The centimeter ruler on a phone screen',
      caption: 'The cm ruler on a phone — fine for a quick string re-check.',
    },
  ],
  faqs: [
    {
      q: 'Where exactly do I measure my head?',
      a: 'About 2.5 cm above your eyebrows, passing over the tops of your ears and around the widest part of the back of your head. That line is where hats actually sit.',
    },
    {
      q: 'What is the average adult head size?',
      a: 'Most adults fall between 55 and 59 cm — roughly M to L. If you measure far outside 52–62 cm, re-measure; the tape was probably not level.',
    },
    {
      q: 'Should I size up or down between hat sizes?',
      a: 'Size up. A slightly loose hat can be padded or worn comfortably; a tight one causes headaches and hat hair lines.',
    },
    {
      q: 'Is helmet sizing the same as hat sizing?',
      a: 'The measurement is the same, but always use the helmet maker’s own chart — shell shapes differ, and a proper fit is a safety issue, not just comfort.',
    },
    {
      q: 'Does hairstyle affect the measurement?',
      a: 'Yes — thick hair or a bun can add a centimeter. Measure over the hairstyle you will wear with the hat or helmet.',
    },
    {
      q: 'Can I use the on-screen ruler for the string method?',
      a: 'Yes. Mark a non-stretchy string, lay it straight, and read it against the calibrated on-screen cm ruler at 100% browser zoom.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/cm/', label: 'Centimeter ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
