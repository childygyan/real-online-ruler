/**
 * content.ts — "How to Measure a Necklace or Chain Length".
 *
 * Draft for the 15-day daily publish program (2026-10-10). Procedural article:
 * ships Article + HowTo + FAQPage JSON-LD (index.astro builds it from
 * howToMethods below).
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-10';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure necklace length with a string',
    totalTime: 'PT10M',
    tools: ['Soft string or ribbon', 'Pen', 'On-screen ruler'],
    steps: [
      {
        name: 'Drape the string where the necklace would sit',
        text: 'Hold a soft string around your neck and let it fall exactly where you want the necklace to sit — at the collarbone, below it, or mid-chest.',
      },
      {
        name: 'Mark the meeting point',
        text: 'Pinch the string where the two ends meet and mark that spot with a pen, keeping the drape exactly as you want to wear it.',
      },
      {
        name: 'Lay the string straight',
        text: 'Lay the marked string flat and straight on a table, pulling it taut without stretching it, so the mark is easy to read.',
      },
      {
        name: 'Measure the string in inches',
        text: 'Measure from the end of the string to your mark using the on-screen inch ruler. That number is the necklace length that will sit where you want.',
      },
      {
        name: 'Round to a standard length',
        text: 'Chains are sold in standard lengths (16, 18, 20, 24 inches), so round your measurement to the nearest one.',
      },
    ],
  },
  {
    name: 'How to measure a necklace you already own',
    totalTime: 'PT5M',
    tools: ['The necklace', 'On-screen ruler'],
    steps: [
      {
        name: 'Unclasp the necklace',
        text: 'Open the clasp and lay the necklace out in a straight line on a flat surface, pendant removed if it has one.',
      },
      {
        name: 'Measure end to end',
        text: 'Measure from one end of the chain to the other — clasp to clasp — using the on-screen inch ruler.',
      },
      {
        name: 'Note the pendant separately',
        text: 'If the necklace has a pendant, measure its drop separately; the pendant hangs below the chain line and adds visual length.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure a Necklace or Chain Length | Real Online Ruler',
  description:
    'Measure necklace length at home with a string or a necklace you own — then match it to standard chain lengths (16, 18, 20, 24 in) and where each falls.',
  h1: 'How to Measure a Necklace or Chain Length',
  lede: 'Necklace sizes are just numbers until you know where they land on you. With a piece of string and the on-screen inch ruler, you can find your ideal chain length in minutes — and understand exactly what 16, 18, 20, or 24 inches looks like when worn.',
  breadcrumb: 'Measure necklace length',
  blocks: [
    {
      kind: 'p',
      html: 'Shopping for a necklace online is a gamble when you can’t try it on: will 18 inches sit on the collarbone or choke? The fix is simple — measure the length you want on your own neck first, then buy the chain that matches. No jewelry tools needed.',
    },
    { kind: 'h2', text: 'Method 1: the string method (find your ideal length)' },
    {
      kind: 'p',
      html: 'This is the most reliable way to shop, because it starts from <em>your</em> neck, not a generic chart. Drape a soft string, ribbon, or even a charging cable around your neck and let it settle exactly where you’d want the necklace to sit.',
    },
    {
      kind: 'ul',
      items: [
        'Pinch the string where the ends meet and mark the spot with a pen.',
        'Lay it flat and straight — taut, but not stretched.',
        'Measure from the end to your mark with the <a href="/inches/">on-screen inch ruler</a>.',
        'Round to the nearest standard length: 16, 18, 20, or 24 inches.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-necklace-length/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected, ready to measure a marked string',
      caption:
        'Mark your string, lay it straight, and read the length on the on-screen inch ruler — no tape measure needed.',
    },
    { kind: 'h2', text: 'Method 2: measure a necklace you already own' },
    {
      kind: 'p',
      html: 'Own a necklace that sits perfectly? Measure <em>it</em> and buy the same length. Unclasp it, lay it in a straight line, and measure end to end — clasp to clasp — in inches. If it has a pendant, take the pendant off first: chain length is always the chain alone.',
    },
    { kind: 'h2', text: 'Standard chain lengths — where each one falls' },
    {
      kind: 'p',
      html: 'Chains are sold in standard lengths. Here’s where each typically lands — though neck size and build shift things an inch either way, which is exactly why the string method above beats guessing.',
    },
    {
      kind: 'table',
      head: ['Length', 'Name', 'Where it falls'],
      rows: [
        ['14″', 'Collar', 'Snug around the neck, like a choker'],
        ['16″', 'Choker', 'At the base of the neck'],
        ['18″', 'Princess', 'On the collarbone — the most popular length'],
        ['20″', 'Matinee', 'Just below the collarbone'],
        ['22″', '—', 'Upper chest'],
        ['24″', 'Opera (short)', 'Mid-chest, below the bust line'],
      ],
    },
    {
      kind: 'p',
      html: 'For men, 20 inches is the most common chain length, typically landing at the collarbone; 24 inches gives a looser mid-chest drape.',
    },
    { kind: 'h2', text: 'Don’t forget the pendant' },
    {
      kind: 'p',
      html: 'A pendant hangs <em>below</em> the chain line, so its drop adds to the visual length. A 16-inch chain with a 2-inch pendant reads like an 18-inch necklace on you. When shopping for a pendant necklace, either choose a shorter chain or measure with the pendant’s drop in mind.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-necklace-length/mobile.webp',
      alt: 'The on-screen inch ruler on a phone, useful for measuring a necklace while shopping',
      caption:
        'Shopping on your phone? The inch ruler works there too — measure your string right at the store or on the couch.',
    },
    { kind: 'h2', text: 'Match the length to the neckline' },
    {
      kind: 'p',
      html: 'As a rule of thumb: 16–18 inches flatters crew necks and scoop necks by drawing the eye to the collarbone, while 20–24 inches pairs better with higher necklines and formal wear. When in doubt, 18 inches is the most versatile length — it suits most outfits and most pendants.',
    },
  ],
  faqs: [
    {
      q: 'How do you measure necklace length without a ruler?',
      a: 'Drape a string where you want the necklace to sit, mark where the ends meet, lay it straight, and measure the string against the on-screen inch ruler.',
    },
    {
      q: 'Where is necklace length measured from?',
      a: 'End to end, clasp to clasp, with the chain laid straight and any pendant removed. Chain length never includes the pendant’s drop.',
    },
    {
      q: 'What is the most common necklace length for women?',
      a: '18 inches — it sits on the collarbone, suits most necklines, and works with or without a pendant.',
    },
    {
      q: 'What chain length should a man get?',
      a: '20 inches is the most common men’s length, landing around the collarbone on an average build. Go 22–24 inches for a looser fit, especially with a pendant.',
    },
    {
      q: 'Does a pendant change which chain length I need?',
      a: 'Visually, yes. The pendant’s drop hangs below the chain, so factor it in — a long pendant on an 18-inch chain can look like a 20-inch necklace.',
    },
    {
      q: 'How do I choose between 16 and 18 inches?',
      a: 'Try the string method: drape a string at each length and see which sits better on your neck. Smaller necks and petite frames usually suit 16 inches; most others prefer 18.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
