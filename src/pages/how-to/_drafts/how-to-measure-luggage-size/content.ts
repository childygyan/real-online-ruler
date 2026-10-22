/**
 * content.ts — "How to Measure Your Luggage Size".
 *
 * Draft for the 3-day ongoing publish program (2026-11-15). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Methods verified via web search 2026-10-19:
 * US carry-on standard 22 x 14 x 9 in INCLUDING wheels and handles;
 * 45 linear inches (L+W+H) used by Delta/American/Air Canada/Southwest;
 * international commonly 55 x 40 x 20 cm (~21.5 x 15.5 x 9 in);
 * checked bags typically 62 linear inches / 50 lb; sizer boxes at gates;
 * manufacturers' "case dimensions" often exclude wheels — use "overall
 * dimensions".
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-11-15';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure a suitcase’s three dimensions',
    totalTime: 'PT10M',
    tools: ['Tape measure'],
    steps: [
      {
        name: 'Stand the bag as it rolls',
        text: 'Set the suitcase upright on its wheels, handle retracted, exactly as it will go through the sizer. Do not measure it lying flat and empty.',
      },
      {
        name: 'Measure height including wheels and handle housing',
        text: 'Run the tape from the floor (bottom of the wheels) to the very top, including the handle housing and any top carry handle. Wheels and handles count — this is where most bags fail.',
      },
      {
        name: 'Measure width and depth at the widest points',
        text: 'Measure across the widest point of the body for width, and front-to-back for depth — including expanded zippers, side pockets, and bumpers that stick out.',
      },
      {
        name: 'Pack it as you will fly, then re-check',
        text: 'An overstuffed soft bag bulges past its frame and can fail the sizer even when the empty bag passes. Pack it full, zip it, and measure the bulged dimensions.',
      },
    ],
  },
  {
    name: 'How to check linear inches against your airline',
    totalTime: 'PT5M',
    tools: ['Your three measurements', 'Airline baggage page'],
    steps: [
      {
        name: 'Add the three sides',
        text: 'Add height + width + depth. That single number is your bag’s linear inches — airlines like Delta, American, Air Canada, and Southwest use it instead of per-side limits.',
      },
      {
        name: 'Compare to the carry-on cap',
        text: 'Most US airlines cap carry-ons at 45 linear inches (the classic 22 + 14 + 9). International carriers commonly allow around 55 x 40 x 20 cm, roughly 46 linear inches — check your airline’s own page before you fly.',
      },
      {
        name: 'Use overall dimensions when shopping',
        text: 'Manufacturers often list "case dimensions" that exclude the wheels. Always compare the "overall dimensions" figure to the airline limit, or measure the bag yourself.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure Your Luggage Size | Real Online Ruler',
  description:
    'Carry-on means 22 x 14 x 9 in including wheels and handles — 45 linear inches total. Measure packed, at the widest points, or risk a gate check.',
  h1: 'How to Measure Your Luggage Size',
  lede: 'The most expensive inch in travel is the one your bag exceeds at the gate. Here is how to measure a suitcase the way airlines do — wheels, handles, bulge and all — before you leave for the airport.',
  breadcrumb: 'Measure luggage size',
  blocks: [
    {
      kind: 'p',
      html: 'Airlines do not care what the luggage tag says. They care whether the bag fits the metal sizer box at the gate — <strong>22 × 14 × 9 inches, wheels and handles included</strong>, on most US carriers. Measure it their way at home and the gate agent never becomes part of your trip.',
    },
    { kind: 'h2', text: 'The numbers that matter' },
    {
      kind: 'ul',
      items: [
        '<strong>US carry-on standard:</strong> 22 × 14 × 9 in (56 × 36 × 23 cm), <em>including</em> wheels, handles, and anything protruding.',
        '<strong>45 linear inches:</strong> length + width + height added together — Delta, American, Air Canada, and Southwest use this single total.',
        '<strong>International:</strong> commonly around 55 × 40 × 20 cm (≈21.5 × 15.5 × 9 in); budget carriers can be stricter.',
        '<strong>Checked bags:</strong> typically 62 linear inches and 50 lb in economy.',
        '<strong>Personal item:</strong> roughly 18 × 14 × 8 in — it must fit under the seat.',
      ],
    },
    { kind: 'h2', text: 'How to measure: the airline way' },
    {
      kind: 'ul',
      items: [
        '<strong>Stand it as it rolls</strong> — upright on its wheels, handle retracted.',
        '<strong>Height from the floor up:</strong> bottom of the wheels to the very top, including the handle housing and top grab handle.',
        '<strong>Width and depth at the widest points</strong> — expanded zippers, side pockets, and bumpers all count.',
        '<strong>Pack it first, then measure.</strong> A bulging soft bag can fail the sizer even when the empty frame passes.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-luggage-size/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected and a drawn measurement line for checking bag dimensions',
      caption:
        'The on-screen inch ruler — handy for double-checking a bag’s longest side against your tape.',
    },
    { kind: 'h2', text: 'Linear inches, explained' },
    {
      kind: 'p',
      html: 'Linear inches = length + width + height, one number. A 22 × 14 × 9 bag is exactly 45 linear inches; a 24 × 14 × 8 bag is 46 — over the limit even though each side looks close. That is why a bag can pass every individual dimension on one airline and still be rejected by another that uses the linear rule. Add the three numbers; there is no other math.',
    },
    { kind: 'h2', text: 'The traps that get bags gate-checked' },
    {
      kind: 'ul',
      items: [
        '<strong>"Case dimensions" vs "overall dimensions":</strong> makers list the shell without wheels. Compare the <em>overall</em> figure to the limit.',
        '<strong>Spinner wheels</strong> stick out further than two-wheel designs — measure them.',
        '<strong>Overpacking bulge</strong> on soft bags defeats an otherwise legal frame.',
        '<strong>Regional jets:</strong> overhead bins are smaller, so even a legal bag can be gate-checked when bins fill.',
        '<strong>Budget carriers</strong> often allow only a personal item free — a full-size carry-on can cost $75+ at the gate.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-luggage-size/mobile.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen with a very short drawn measurement line',
      caption:
        'Shopping for luggage on your phone? The inch ruler settles "is that 22 inches tall?" — <a href="/how-to-calibrate/">calibrate</a> once for true size.',
    },
    { kind: 'h2', text: 'Shipping a bag instead of flying it' },
    {
      kind: 'p',
      html: 'If the bag will not make the cut, mailing it ahead is sometimes cheaper than a checked-bag fee — and the same measuring discipline applies, plus weight. See <a href="/how-to-measure-box-for-shipping/">how to measure a box for shipping</a> for the dimensional-weight math carriers use.',
    },
  ],
  faqs: [
    {
      q: 'Do carry-on measurements include wheels and handles?',
      a: 'Yes — absolutely. The 22 × 14 × 9 inch limit includes wheels, handles, and any protruding pockets. This is the number-one reason bags fail the gate sizer.',
    },
    {
      q: 'What are linear inches for luggage?',
      a: 'Length + width + height added together. Several major airlines cap carry-ons at 45 linear inches instead of checking each side separately.',
    },
    {
      q: 'What is the standard carry-on size for international flights?',
      a: 'Commonly around 55 × 40 × 20 cm (about 21.5 × 15.5 × 9 in), but it varies by airline — always check your carrier’s own baggage page.',
    },
    {
      q: 'Can a bag be 1 inch over and still pass?',
      a: 'Sometimes, if no one checks — but sizer boxes and strict agents do not negotiate, and an overstuffed bag that bulges will fail even if the frame is legal. Do not gamble a trip on it.',
    },
    {
      q: 'How do I measure a duffel bag for carry-on?',
      a: 'Pack it as you will fly, then measure length, width, and height at the widest bulged points — soft bags change shape when full, and the sizer measures the full shape.',
    },
    {
      q: 'What is the personal item size limit?',
      a: 'Typically around 18 × 14 × 8 inches — it must fit completely under the seat in front of you.',
    },
  ],
  related: [
    { href: '/how-to-measure-box-for-shipping/', label: 'Measure a box for shipping' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
