/**
 * content.ts — "How to Find Your Glasses Frame Size".
 *
 * Draft for the 15-day daily publish program (2026-10-12). Procedural article:
 * ships Article + HowTo + FAQPage JSON-LD (index.astro builds it from
 * howToMethods below).
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-12';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to read your glasses size from the temple arm',
    totalTime: 'PT3M',
    tools: ['Your current glasses', 'Good light or a magnifier'],
    steps: [
      {
        name: 'Look inside the temple arm',
        text: 'Open the glasses and look at the inside of one arm (temple). The size is printed or engraved there in tiny numbers.',
      },
      {
        name: 'Find the three-number code',
        text: 'Look for a code like 52-18-140 — three numbers separated by dashes. That is the frame size in millimeters.',
      },
      {
        name: 'Read lens width, bridge, temple in order',
        text: 'The first number is the lens width (52 mm), the second is the bridge width (18 mm), and the third is the temple arm length (140 mm).',
      },
      {
        name: 'Write all three numbers down',
        text: 'Note the full code — when you shop for new frames, match all three numbers to your well-fitting pair.',
      },
    ],
  },
  {
    name: 'How to measure your glasses frames with a ruler',
    totalTime: 'PT10M',
    tools: ['Your current glasses', 'On-screen millimeter ruler'],
    steps: [
      {
        name: 'Measure one lens at its widest point',
        text: 'Hold one lens against the on-screen millimeter ruler and measure its horizontal width in millimeters — that is the lens width.',
      },
      {
        name: 'Measure the bridge between the lenses',
        text: 'Measure the shortest distance between the two lenses, across the bridge that sits on your nose, in millimeters.',
      },
      {
        name: 'Measure the temple arm from hinge to tip',
        text: 'Measure one arm from the hinge to the very end tip in millimeters — that is the temple length.',
      },
      {
        name: 'Compare with the size you want to buy',
        text: 'Online listings show the same three numbers. Aim to match within 1–2 mm on each for a familiar fit.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Find Your Glasses Frame Size | Real Online Ruler',
  description:
    'Find your glasses frame size: read the 3-number code on the temple arm (lens–bridge–temple in mm) or measure your frames with the on-screen mm ruler.',
  h1: 'How to Find Your Glasses Frame Size',
  lede: 'Every pair of glasses carries its size printed on the inside of the arm — a short code like 52-18-140 that tells you everything about the fit. Learn to read it once, and you’ll never gamble on eyewear sizes again.',
  breadcrumb: 'Find glasses frame size',
  blocks: [
    {
      kind: 'p',
      html: 'Buying glasses online feels risky because you can’t try them on — but frames are one of the few things you can size <em>exactly</em>. The industry prints three millimeter measurements on nearly every pair. Here’s how to find them and what they mean.',
    },
    { kind: 'h2', text: 'Method 1: read the numbers on your frames' },
    {
      kind: 'p',
      html: 'Open your glasses and look at the <strong>inside of one temple arm</strong> — the part that runs along your head. In good light (a phone flashlight helps) you’ll find tiny engraved numbers. Some frames print them on the bridge instead, between the lenses.',
    },
    {
      kind: 'p',
      html: 'You’re looking for a code like <strong>52-18-140</strong>: three numbers separated by dashes. That’s the whole frame size, in millimeters, in a fixed order:',
    },
    {
      kind: 'ul',
      items: [
        '<strong>52 — lens width:</strong> the horizontal width of one lens at its widest point, in mm.',
        '<strong>18 — bridge width:</strong> the distance between the two lenses, where the frame sits on your nose.',
        '<strong>140 — temple length:</strong> the arm length from the hinge to the tip that hooks over your ear.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-find-glasses-frame-size/desktop.webp',
      alt: 'The Real Online Ruler workspace with the millimeter unit selected for measuring glasses frames',
      caption:
        'No readable numbers? Measure the frame yourself with the on-screen millimeter ruler — same three measurements.',
    },
    { kind: 'h2', text: 'Method 2: measure your current frames' },
    {
      kind: 'p',
      html: 'If the engraving has worn off (or was never there), measure a pair that fits you well. Hold each part against the <a href="/mm/">on-screen millimeter ruler</a>: one lens at its widest point, the bridge gap between the lenses, and one temple arm from hinge to tip. Write down all three in millimeters.',
    },
    { kind: 'h2', text: 'What each number controls' },
    {
      kind: 'p',
      html: 'Knowing which number does what helps you troubleshoot fit problems — and shop smarter:',
    },
    {
      kind: 'table',
      head: ['Number', 'Controls', 'Typical range'],
      rows: [
        ['Lens width (e.g. 52 mm)', 'How wide the frames look; bigger lenses suit larger faces', '48–58 mm'],
        ['Bridge width (e.g. 18 mm)', 'How the frame sits on your nose — too narrow pinches, too wide slides', '14–24 mm'],
        ['Temple length (e.g. 140 mm)', 'Whether the arms reach your ears without pressing or slipping', '120–150 mm'],
      ],
    },
    {
      kind: 'p',
      html: 'Glasses sliding down your nose? The bridge is probably too wide. Arms digging behind your ears? The temple length is too short. Match the number that was right on your old pair and change only the one that wasn’t.',
    },
    { kind: 'h2', text: 'Buying the same size online' },
    {
      kind: 'p',
      html: 'Here’s the golden rule: <strong>if a pair fits you well, buy the same three numbers</strong>. Online listings always show the measurements — compare them to your code and aim to match within <strong>1–2 mm</strong> on each number. More than that and the fit will feel noticeably different.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-find-glasses-frame-size/mobile.webp',
      alt: 'The on-screen millimeter ruler on a phone for checking glasses frame measurements',
      caption:
        'Comparing two listings on your phone? Pull up the mm ruler and sanity-check the numbers before you order.',
    },
    { kind: 'h2', text: 'Frame size is not your PD' },
    {
      kind: 'p',
      html: 'One thing the numbers don’t tell you: your <strong>pupillary distance (PD)</strong> — the distance between your pupils in millimeters. It’s not printed on frames, but most prescription orders ask for it. If you need it, <a href="/how-to-measure-pupillary-distance/">measure your PD at home</a> with our guide.',
    },
  ],
  faqs: [
    {
      q: 'Where are glasses size numbers printed?',
      a: 'On the inside of one temple arm (the part that runs along your head), engraved in tiny print. Some frames put them on the bridge between the lenses instead.',
    },
    {
      q: 'What does 52-18-140 mean on glasses?',
      a: 'Lens width 52 mm, bridge width 18 mm, temple arm length 140 mm — the three frame measurements in millimeters, always in that order.',
    },
    {
      q: 'Is frame size the same as PD (pupillary distance)?',
      a: 'No. Frame size describes the glasses; PD is the distance between your pupils. You need both when ordering prescription glasses online.',
    },
    {
      q: 'My glasses have no size numbers — what now?',
      a: 'Measure a well-fitting pair yourself: one lens width, the bridge gap, and one temple arm from hinge to tip, all in millimeters with the on-screen mm ruler.',
    },
    {
      q: 'How closely do the numbers need to match when buying online?',
      a: 'Aim for within 1–2 mm on each of the three numbers. Larger differences will feel noticeably different on your face.',
    },
    {
      q: 'What do I do if the size code has more numbers?',
      a: 'Some frames add lens height or the model/color code nearby. The size is always the three-number group in the lens–bridge–temple order.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/mm/', label: 'Millimeter ruler' },
    { href: '/how-to-measure-pupillary-distance/', label: 'Measure your PD' },
  ],
};
