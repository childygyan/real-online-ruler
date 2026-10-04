/**
 * content.ts — "How to Measure Your Waist Size".
 *
 * Draft for the 15-day daily publish program (2026-10-17). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Methods verified via web search 2026-10-04:
 * natural waist = narrowest part of torso (bend-to-side crease); tape snug
 * not tight, breathe normally; jeans = button, lay flat, measure across
 * waistband, double.
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-17';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure your natural waist with a tape',
    totalTime: 'PT5M',
    tools: ['Soft measuring tape', 'Mirror'],
    steps: [
      {
        name: 'Find your natural waistline',
        text: 'Stand relaxed and bend slightly to one side — the crease that forms is your natural waist, the narrowest part of your torso, usually above the hips and near the navel.',
      },
      {
        name: 'Wrap the tape level around your waist',
        text: 'Circle the tape around the crease, keeping it parallel to the floor all the way around. Use a mirror to check it is not riding up at the back.',
      },
      {
        name: 'Keep it snug, not tight',
        text: 'The tape should sit flat against your skin with room to slip one finger underneath. Pulling tight shaves off inches you will miss when the pants arrive.',
      },
      {
        name: 'Breathe normally and read',
        text: 'Stand straight, relax your stomach, and breathe normally — do not suck in. Read the number where the tape meets itself and note it in inches.',
      },
    ],
  },
  {
    name: 'How to measure waist size from your best-fitting jeans',
    totalTime: 'PT5M',
    tools: ['Best-fitting jeans', 'Tape measure', 'On-screen ruler'],
    steps: [
      {
        name: 'Button the jeans and lay them flat',
        text: 'Fasten every button and zip, then lay the jeans on a flat surface. Smooth the waistband so the front edge lines up with the back edge.',
      },
      {
        name: 'Measure straight across the waistband',
        text: 'Run the tape from one edge of the waistband to the other, keeping it straight. Do not stretch the denim.',
      },
      {
        name: 'Double the number',
        text: 'Multiply the flat measurement by two for the full waist circumference. 16 inches across means roughly a 32-inch garment waist.',
      },
      {
        name: 'Compare garment to garment',
        text: 'When shopping online, compare this number to the seller’s garment measurements — not to the size on your tag. Vanity sizing makes tags unreliable.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure Your Waist Size | Real Online Ruler',
  description:
    'Measure your waist two ways: around your natural waistline with a tape, or across your best-fitting jeans. Plus why the tag size lies.',
  h1: 'How to Measure Your Waist Size',
  lede: 'Pants sizes lie — the tape does not. Whether you are buying jeans online or tracking fitness progress, here are the two reliable ways to get your real waist measurement in minutes.',
  breadcrumb: 'Measure waist size',
  blocks: [
    {
      kind: 'p',
      html: 'A "size 32" in one brand can be a 34 in another — that is vanity sizing, and it is why online pants shopping feels like gambling. The fix is simple: measure your actual waist once, write it down, and compare <em>garment measurements</em> instead of tag sizes.',
    },
    { kind: 'h2', text: 'First, find your natural waist' },
    {
      kind: 'p',
      html: 'Your natural waist is the narrowest part of your torso, usually just above the hips and around navel level. Stand in front of a mirror and bend slightly to one side: the crease that forms marks the spot. Note that low-rise pants sit below this point, so if a size chart specifies a different waistband position, measure there too.',
    },
    { kind: 'h2', text: 'Method 1: Tape around your natural waist' },
    {
      kind: 'ul',
      items: [
        '<strong>Use a soft tape</strong> (fabric or vinyl) — a metal tape will not follow your curves.',
        '<strong>Wrap it level</strong> around the crease, parallel to the floor. Check in the mirror that it is not riding up at the back.',
        '<strong>Snug, not tight:</strong> flat against the skin with room for one finger underneath.',
        '<strong>Breathe normally.</strong> Stand straight, relax your stomach, do not suck in — the number has to match you on a normal day.',
        '<strong>Read in inches</strong> for US pants sizing.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-waist-size/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected, useful for checking short tape segments',
      caption:
        'The on-screen inch ruler — handy for sanity-checking short measurements against your tape.',
    },
    { kind: 'h2', text: 'Method 2: Measure your best-fitting jeans' },
    {
      kind: 'ul',
      items: [
        '<strong>Button and zip</strong> the jeans completely, then lay them flat.',
        '<strong>Line up the waistband:</strong> front edge even with the back edge, wrinkles smoothed, no stretching.',
        '<strong>Measure straight across</strong> from one edge of the waistband to the other.',
        '<strong>Double it.</strong> 16 inches across ≈ a 32-inch garment waist.',
        '<strong>Compare garment-to-garment</strong> when shopping: match this number to the seller’s listed garment measurements.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-waist-size/mobile.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen',
      caption:
        'On your phone? The inch ruler works there too — <a href="/how-to-calibrate/">calibrate</a> once for true size.',
    },
    { kind: 'h2', text: 'Vanity sizing: trust the tape, not the tag' },
    {
      kind: 'p',
      html: 'Brands routinely label a 34-inch waist as "32" to flatter buyers, and stretch denim adds more drift. That is why two "size 32" jeans can fit completely differently. Your tape measurement and the garment’s flat measurements are the only numbers that travel honestly between brands.',
    },
    { kind: 'h2', text: 'Inches or centimeters?' },
    {
      kind: 'p',
      html: 'US pants are sized in inches, so measure in inches when shopping American brands. Most size charts list both — just never mix units mid-comparison. If you only have a centimeter tape, divide by 2.54.',
    },
  ],
  faqs: [
    {
      q: 'Where exactly is the natural waist?',
      a: 'The narrowest part of your torso, between your ribcage and hips. Bend to one side and the crease that forms marks it precisely.',
    },
    {
      q: 'Should I suck in my stomach when measuring?',
      a: 'No. Stand relaxed and breathe normally. A sucked-in number produces pants you cannot comfortably wear all day.',
    },
    {
      q: 'Why does the tag size differ from my tape measurement?',
      a: 'Vanity sizing: brands label generously to flatter customers, and the amount varies by brand. Trust your tape and the garment’s actual measurements.',
    },
    {
      q: 'How tight should the measuring tape be?',
      a: 'Snug enough to stay in place, loose enough to slip one finger underneath. Tight enough to dent the skin will under-measure you.',
    },
    {
      q: 'Can I measure over my clothes?',
      a: 'A thin layer is fine, but bulky clothing adds inches. For the most accurate number, measure on skin or over thin undergarments.',
    },
    {
      q: 'What is the difference between waist and hip measurements?',
      a: 'The waist is the narrowest point of your torso; the hips are measured around the widest part of your buttocks. Pants need the waist; many skirts and dresses need both.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
