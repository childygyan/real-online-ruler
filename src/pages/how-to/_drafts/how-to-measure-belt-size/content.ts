/**
 * content.ts — "How to Measure Your Belt Size".
 *
 * Draft for the 3-day ongoing publish program (2026-10-28). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Methods verified via web search 2026-10-19:
 * belt size = pants waist + 2 in (jeans +3 to +4); measure from buckle fold
 * to the hole you use (ideally the middle hole), never tip to tip; round to
 * the nearest even inch; between sizes, size up; EU belts sized in cm in
 * 5 cm steps.
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-28';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure belt size from a belt you own',
    totalTime: 'PT5M',
    tools: ['Belt that fits well', 'Tape measure'],
    steps: [
      {
        name: 'Lay the belt flat',
        text: 'Unbuckle the belt and lay it out straight on a table, smoothing the strap so there are no curves throwing off the measurement.',
      },
      {
        name: 'Measure from the buckle fold to the hole you use',
        text: 'Hook your tape at the fold where the leather meets the buckle — not the tip of the buckle — and run it to the hole you actually fasten. That number, in inches, is your belt size.',
      },
      {
        name: 'Aim for the middle hole',
        text: 'A well-fitting belt fastens on the middle of its (usually five) holes, leaving room to adjust either way. If you use the first or last hole, your size is off.',
      },
      {
        name: 'Round to the nearest even inch',
        text: 'Belt sizes come in even numbers. A 35-inch measurement means buying a 36 — when between sizes, always size up, since adding a hole is easy and adding leather is not.',
      },
    ],
  },
  {
    name: 'How to work out belt size from your pants size',
    totalTime: 'PT5M',
    tools: ['Trousers that fit', 'Soft measuring tape', 'On-screen ruler'],
    steps: [
      {
        name: 'Take your trouser waist size',
        text: 'Use the waist number from trousers that fit you well right now. Note that vanity sizing means the tag can run 1–2 inches under the real waistband.',
      },
      {
        name: 'Add 2 inches',
        text: 'Add 2 inches to the trouser size: 34 pants means a 36 belt. The extra covers the belt looping over fabric and puts the buckle on the middle hole.',
      },
      {
        name: 'Add more for low-rise jeans',
        text: 'Jeans sit lower on the hips than dress trousers, so add 3 to 4 inches to a jean waist size instead of 2. A 34 jean usually wants a 37 or 38 belt.',
      },
      {
        name: 'Double-check against a tape if unsure',
        text: 'If you are between trouser sizes or the brand runs odd, wrap a soft tape through your belt loops over the trousers and read that number directly.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure Your Belt Size | Real Online Ruler',
  description:
    'Your belt size is not your waist size — it is usually 2 inches bigger. Measure a belt you own or add 2 to your trouser size.',
  h1: 'How to Measure Your Belt Size',
  lede: 'Belts are sized by length, not by your waist — and the two numbers almost never match. Here is how to get the right number the first time, whether you measure a belt you own or work it out from your trousers.',
  breadcrumb: 'Measure belt size',
  blocks: [
    {
      kind: 'p',
      html: 'The single most useful rule in belt shopping: <strong>your belt size is your trouser waist size plus 2 inches.</strong> Wear 34 pants, buy a 36 belt. The gap exists because a belt wraps around trousers (not bare skin) and because belt length is measured to the middle hole, not the tip.',
    },
    { kind: 'h2', text: 'Method 1: Measure a belt that fits (most accurate)' },
    {
      kind: 'ul',
      items: [
        '<strong>Lay it flat</strong> — unbuckled, straight, no curves.',
        '<strong>Measure from the buckle fold</strong> (where the leather meets the buckle) to the hole you actually fasten. Do not include the buckle, and do not measure tip to tip — the tail varies by brand.',
        '<strong>That number is your size.</strong> 35.5 inches of fold-to-hole means a 36 belt.',
        '<strong>Middle hole check:</strong> a correct size fastens on the middle hole of a five-hole belt. First or last hole means the size is wrong.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-belt-size/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected and a drawn measurement line for checking belt hole spacing',
      caption:
        'The on-screen inch ruler — handy for sanity-checking short measurements like hole spacing against your tape.',
    },
    { kind: 'h2', text: 'Method 2: Add 2 to your trouser size' },
    {
      kind: 'ul',
      items: [
        '<strong>Take the waist number</strong> from trousers that fit you now — not your body measurement. (<a href="/how-to-measure-waist-size/">Measure your waist properly</a> if the tag cannot be trusted.)',
        '<strong>Add 2 inches:</strong> 32 pants → 34 belt, 34 → 36, 36 → 38.',
        '<strong>Jeans need more:</strong> low-rise jeans sit on the hips, so add 3 to 4 inches to a jean waist size.',
        '<strong>Round to an even number</strong> and size up when between sizes.',
      ],
    },
    { kind: 'h2', text: 'Why the +2 rule works' },
    {
      kind: 'p',
      html: 'Three things stack up: the belt rides over trouser fabric (not skin), pants tags are often vanity-sized 1–2 inches under the real waistband, and belt makers measure to the center hole. Together they reliably add up to about two inches. Brands differ on exactly which hole they measure to, so the maker’s own size chart beats the label when in doubt.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-belt-size/mobile.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen with a drawn measurement line',
      caption:
        'On your phone? The inch ruler works there too — <a href="/how-to-calibrate/">calibrate</a> once for true size.',
    },
    { kind: 'h2', text: 'Women’s belts and EU sizes' },
    {
      kind: 'p',
      html: 'Women’s belts are often sold as S/M/L or by waist number rather than the +2 system, so check the brand’s chart instead of applying the men’s rule blindly. EU belts are sized in centimeters in 5 cm steps — a 36-inch belt is roughly a 90–95 cm belt; divide inches by 2.54 only as a rough guide, since the step rounding differs.',
    },
  ],
  faqs: [
    {
      q: 'Is belt size the same as waist size?',
      a: 'No. Belt size is normally 2 inches larger than your trouser waist size — 34 pants take a 36 belt — because the belt wraps over fabric and is measured to the middle hole.',
    },
    {
      q: 'Where exactly do you measure a belt from?',
      a: 'From the fold where the strap meets the buckle to the hole you use most. Do not include the buckle itself and do not measure tip to tip.',
    },
    {
      q: 'What belt size do I need for 32-inch waist jeans?',
      a: 'Usually a 34 or 36. Jeans sit lower on the hips, so add 3 to 4 inches to a jean waist size rather than the standard 2.',
    },
    {
      q: 'What if I am between belt sizes?',
      a: 'Size up. Punching an extra hole in a slightly long belt is easy; stretching a short one is impossible.',
    },
    {
      q: 'How do EU belt sizes convert from inches?',
      a: 'EU belts are sold in centimeters in 5 cm steps. Divide your inch size by 2.54 and round to the nearest 5 cm — a 36-inch belt lands around 90–95 cm.',
    },
    {
      q: 'Should a belt fasten on the middle hole?',
      a: 'Yes, ideally. The middle hole of a five-hole belt gives you adjustment room in both directions as weight and clothing layers change.',
    },
  ],
  related: [
    { href: '/how-to-measure-waist-size/', label: 'Measure waist size' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
