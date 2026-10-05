/**
 * content.ts — "How to Measure Your Foot Size at Home".
 *
 * Draft for the 15-day daily publish program (2026-10-05). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Foot-length chart verified against Brannock
 * scale data (foot length in mm/cm → US sizes); brands vary, so the chart
 * carries a disclaimer.
 */
import type { ContentPageDict } from '../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-05';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure foot size with the paper-trace method',
    totalTime: 'PT10M',
    tools: ['Sheet of paper', 'Pen', 'On-screen ruler'],
    steps: [
      {
        name: 'Tape paper to the floor',
        text: 'Tape a sheet of paper to a hard floor against a wall so it cannot slide while you stand on it.',
      },
      {
        name: 'Stand with heel to the wall',
        text: 'Stand on the paper in the socks you plan to wear, heel firmly against the wall, weight evenly on both feet.',
      },
      {
        name: 'Trace around your foot',
        text: 'Have someone trace around your foot holding the pen upright, or carefully trace it yourself without leaning.',
      },
      {
        name: 'Mark heel and longest toe',
        text: 'Draw a straight line at the very back of the heel and another at the tip of the longest toe, which is not always the big toe.',
      },
      {
        name: 'Measure the distance on screen',
        text: 'Open the on-screen ruler in centimeters, calibrate it first, then hold the paper against your screen and read heel to toe in cm.',
      },
      {
        name: 'Repeat for the other foot',
        text: 'Measure both feet and use the larger measurement — most people have one foot slightly bigger than the other.',
      },
    ],
  },
  {
    name: 'How to measure foot size directly',
    totalTime: 'PT5M',
    tools: ['Book or box', 'On-screen ruler'],
    steps: [
      {
        name: 'Stand heel to the wall',
        text: 'Stand barefoot or in socks on a hard floor with your heel touching the wall, late in the day when feet are at their largest.',
      },
      {
        name: 'Place a book at your toes',
        text: 'Slide a book or box against your longest toe, keeping it square to the wall, and mark the floor at its edge.',
      },
      {
        name: 'Read the length on screen',
        text: 'Use the calibrated on-screen ruler in centimeters to read the distance from wall to mark, then add about 0.5 cm of wiggle room.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure Your Foot Size at Home | Real Online Ruler',
  description:
    'Measure your foot length at home with paper and our on-screen cm ruler, then convert to US shoe size with the chart. Includes evening-measure and wiggle-room tips.',
  h1: 'How to Measure Your Foot Size at Home',
  lede: 'No Brannock device? A sheet of paper, a pen, and our free on-screen ruler in centimeters are all you need to find your true foot length — and from there, your US shoe size.',
  breadcrumb: 'Measure foot size',
  blocks: [
    {
      kind: 'p',
      html: 'Shoe sizes are just foot length in disguise. Once you know your heel-to-toe measurement in centimeters, finding your size is a simple lookup — and measuring at home is more accurate than guessing between sizes in a store. Below are two reliable methods, plus a conversion chart.',
    },
    { kind: 'h2', text: 'Method 1: The paper-trace method (most accurate)' },
    {
      kind: 'p',
      html: 'This is the method shoe fitters recommend when there is no Brannock device handy. Do it <strong>in the evening</strong> — feet swell during the day and are at their largest then.',
    },
    {
      kind: 'ul',
      items: [
        'Tape a sheet of paper to a hard floor, flush against a wall.',
        'Stand on it in the socks you will wear, heel against the wall.',
        'Trace around your foot with the pen held upright.',
        'Mark the back of the heel and the tip of the longest toe.',
        'Open the <a href="/cm/">on-screen ruler in centimeters</a> — <a href="/how-to-calibrate/">calibrate it first</a> — and read heel to toe.',
        'Repeat for the other foot and <strong>use the larger measurement</strong>.',
      ],
    },
    { kind: 'h2', text: 'Method 2: Direct measuring against a wall' },
    {
      kind: 'p',
      html: 'Faster, and good enough for most online orders. Stand with your heel to the wall, slide a book square against your longest toe, mark the floor at the book’s edge, and read the wall-to-mark distance with the calibrated <a href="/cm/">centimeter ruler</a>.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-foot-size/desktop.webp',
      alt: 'The Real Online Ruler workspace with the centimeter unit selected',
      caption:
        'The on-screen centimeter ruler — calibrate it once, then read your tracing heel-to-toe.',
    },
    { kind: 'h2', text: 'Convert your measurement to a shoe size' },
    {
      kind: 'p',
      html: 'Add about <strong>0.5 cm of wiggle room</strong> to your foot length (shoes need toe space), then look up the closest length. If you land between two rows, size up.',
    },
    {
      kind: 'table',
      head: ['Foot length (cm)', 'US Men’s', 'US Women’s'],
      rows: [
        ['24.0', '7', '8.5'],
        ['24.5', '7.5', '9'],
        ['25.0', '8', '9.5'],
        ['25.5', '8.5', '10'],
        ['26.0', '9', '10.5'],
        ['26.5', '9.5', '11'],
        ['27.0', '10', '11.5'],
        ['27.5', '10.5', '12'],
        ['28.0', '11', '12.5'],
        ['28.5', '11.5', '13'],
        ['29.0', '12', '13.5'],
      ],
    },
    {
      kind: 'p',
      html: 'These lengths follow the Brannock scale (about 8.5 mm per half size). <strong>Brands vary</strong> — running shoes often run small, dress shoes run long — so always check the brand’s own chart before ordering, and read reviews for fit notes.',
    },
    { kind: 'h2', text: 'Tips for an accurate measurement' },
    {
      kind: 'ul',
      items: [
        'Measure in the evening, when feet are at their largest.',
        'Stand with weight on the foot — sitting shortens it.',
        'Wear the socks you will wear with the shoes.',
        'Keep the pen upright when tracing; angling it adds millimeters.',
        'Keep browser zoom at 100% while reading the on-screen ruler.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-foot-size/mobile.webp',
      alt: 'The centimeter ruler on a phone screen',
      caption: 'The cm ruler works on phones too — handy for a quick re-check in the store.',
    },
  ],
  faqs: [
    {
      q: 'Should I measure my feet in the morning or evening?',
      a: 'Evening. Feet swell during the day, so an evening measurement captures your largest size and prevents buying shoes that feel tight by afternoon.',
    },
    {
      q: 'What if my two feet are different sizes?',
      a: 'That is normal — most people differ by a few millimeters. Always buy for the larger foot; insoles or a snugger lacing can take up slack in the smaller one.',
    },
    {
      q: 'How much extra space should a shoe have?',
      a: 'About 0.5 to 1 cm between your longest toe and the shoe’s front. Add 0.5 cm to your measured foot length before looking it up in the chart.',
    },
    {
      q: 'Do I measure with socks on or off?',
      a: 'Wear the socks you plan to wear with the shoes. Thick hiking socks can add several millimeters versus bare feet.',
    },
    {
      q: 'Why does my size differ between brands?',
      a: 'Brands use different lasts (foot molds) and sizing tolerances. Your measured foot length is the constant — treat the chart as a starting point and check each brand’s own size guide.',
    },
    {
      q: 'Is the on-screen ruler accurate enough for shoe sizing?',
      a: 'Yes, once calibrated — the credit-card method gets you within a fraction of a millimeter, far tighter than the 8.5 mm between half sizes. For expensive shoes, still try them on if you can.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/cm/', label: 'Centimeter ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
