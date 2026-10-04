/**
 * content.ts — "How to Measure Your Inseam".
 *
 * Draft for the 15-day daily publish program (2026-10-19). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Methods verified via web search 2026-10-04:
 * body method = barefoot, back to wall, book pressed up under the crotch,
 * mark wall at book top, measure floor to mark; pants method = crotch seam
 * to hem; US pants tags read waist x inseam in inches (e.g. 32x30).
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-19';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure your inseam with the book method',
    totalTime: 'PT10M',
    tools: ['Hardcover book', 'Tape measure', 'Pencil', 'Wall'],
    steps: [
      {
        name: 'Stand barefoot against a wall',
        text: 'Wear thin, form-fitting clothing or underwear. Stand with your back flat against the wall, feet about hip-width apart, posture natural.',
      },
      {
        name: 'Press a book up under your crotch',
        text: 'Slide a hardcover book between your legs and press it firmly upward, spine flat against the wall, as if it were a bike saddle. Keep it level.',
      },
      {
        name: 'Mark the wall at the top of the book',
        text: 'Holding the book steady, make a small pencil mark on the wall exactly at the book’s top edge. Ask a helper if you have one — it is easier.',
      },
      {
        name: 'Measure floor to mark',
        text: 'Step away and measure straight from the floor up to the mark. That distance is your body inseam, in inches for US pants sizing.',
      },
      {
        name: 'Measure twice and average',
        text: 'Repeat the whole thing once more. Shifting your weight slightly changes the reading, so average the two for your working number.',
      },
    ],
  },
  {
    name: 'How to measure inseam from your best-fitting pants',
    totalTime: 'PT5M',
    tools: ['Best-fitting pants', 'Tape measure'],
    steps: [
      {
        name: 'Pick pants with your ideal length',
        text: 'Choose pants that break exactly the way you like — stacked at the ankle or clean. Non-stretch pairs give the truest number.',
      },
      {
        name: 'Lay them flat and smooth',
        text: 'Lay the pants on a bed or floor, smooth out wrinkles, and fold so the inner leg seam is clearly visible.',
      },
      {
        name: 'Measure crotch seam to hem',
        text: 'Run the tape from the crotch seam — where all the seams meet — straight down the inside seam to the bottom edge of the hem.',
      },
      {
        name: 'Use it to read size tags',
        text: 'US pants tags read waist x inseam in inches, so "32x30" means a 32-inch waist with your measured inseam near 30 inches.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure Your Inseam | Real Online Ruler',
  description:
    'Measure your inseam two ways: the book-against-the-wall body method, or from your best-fitting pants. Read 32×30 tags with confidence.',
  h1: 'How to Measure Your Inseam',
  lede: 'Inseam is the number that decides whether pants pool around your shoes or hover above your ankles. It takes five minutes to measure properly — here are the two methods that actually work.',
  breadcrumb: 'Measure inseam',
  blocks: [
    {
      kind: 'p',
      html: 'Your inseam is the distance from your crotch to where you want your pants to end, measured along the inner leg. US pants tags print it right after the waist — <strong>32×30 means a 32-inch waist and a 30-inch inseam</strong> — but like waist sizes, the tag is only trustworthy if you know your real number first.',
    },
    { kind: 'h2', text: 'Method 1: The book-against-the-wall method' },
    {
      kind: 'p',
      html: 'The most accurate do-it-yourself method. It is a little awkward, but it measures your body rather than a garment, so the number transfers between brands.',
    },
    {
      kind: 'ul',
      items: [
        '<strong>Go barefoot</strong> in thin, form-fitting clothing. Back flat against a wall, feet hip-width apart, standing naturally.',
        '<strong>Press a hardcover book firmly upward</strong> between your legs, spine flat against the wall — like a bike saddle.',
        '<strong>Mark the wall</strong> with a pencil exactly at the book’s top edge. A helper makes this much easier.',
        '<strong>Measure floor to mark.</strong> That is your body inseam.',
        '<strong>Do it twice and average.</strong> Even shifting your weight changes the reading slightly.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-inseam/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected, for checking short measurement segments',
      caption:
        'The on-screen inch ruler — useful for double-checking short segments of a tape measurement.',
    },
    { kind: 'h2', text: 'Method 2: Measure your best-fitting pants' },
    {
      kind: 'ul',
      items: [
        '<strong>Pick pants with your ideal break</strong> — how they sit at the ankle is the look you are reproducing. Non-stretch pairs measure truest.',
        '<strong>Lay them flat,</strong> smooth and wrinkle-free, inner leg seam visible.',
        '<strong>Measure from the crotch seam</strong> (where all seams meet) straight down the inside seam to the bottom of the hem.',
        '<strong>That is your target inseam</strong> for shopping. Compare it to size charts rather than trusting the tag alone.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-inseam/mobile.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen',
      caption:
        'Shopping from your phone? The inch ruler is there too — <a href="/how-to-calibrate/">calibrate</a> once for true size.',
    },
    { kind: 'h2', text: 'Reading the tag: what 32×30 means' },
    {
      kind: 'p',
      html: 'US pants sizes are <strong>waist × inseam, both in inches</strong>. So 32×30 = 32-inch waist, 30-inch inseam. European sizes use centimeters for the same two numbers. When a chart lists "short / regular / long" instead of numbers, regular is usually around 30–32 inches — check the chart, because it varies by brand.',
    },
    { kind: 'h2', text: 'Tips for an accurate number' },
    {
      kind: 'ul',
      items: [
        '<strong>Barefoot for the body method.</strong> If you always wear heels or boots with the pants, add that heel height to your number.',
        '<strong>Decide where pants should end first</strong> — ankle bone for a clean break, longer if you like stacking.',
        '<strong>Rise matters too.</strong> Two 32×30 pants can fit differently if one is low-rise and the other high-rise; check the rise measurement on the size chart.',
        '<strong>Verify critical buys physically.</strong> Screens and size charts get you close; a tailor’s tape confirms it.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What exactly is inseam?',
      a: 'The distance along the inner leg from the crotch to the bottom of the pant leg — on your body, from crotch to where you want the hem to fall.',
    },
    {
      q: 'Should I wear shoes when measuring inseam?',
      a: 'Measure barefoot for your base number. If you will always wear the pants with heeled shoes or boots, add the heel height afterward.',
    },
    {
      q: 'Why do two pairs of 32x30 pants fit differently?',
      a: 'Vanity sizing, different cuts, and different rises all shift the fit. The inseam number is the most honest part of the tag, but always check the brand’s size chart too.',
    },
    {
      q: 'Is a bike inseam the same as a pants inseam?',
      a: 'The book-against-the-wall method is shared, but the numbers are used differently: bike fitters derive frame size from it, while pants shopping uses the crotch-to-hem garment measurement.',
    },
    {
      q: 'How accurate is the book method?',
      a: 'Within about half an inch when done carefully — measure twice and average. Good enough for buying pants; a tailor still wins for alterations.',
    },
    {
      q: 'Do I measure to the ankle or the floor?',
      a: 'To wherever you want the hem to end. The body method measures to the floor as a reference; subtract for the break you like, or use the pants method which bakes your preference in.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
