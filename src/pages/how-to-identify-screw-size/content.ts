/**
 * content.ts — "How to Identify a Screw or Bolt Size".
 *
 * Draft for the 15-day daily publish program (2026-10-09). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Metric labeling (M6 × 30 = 6 mm diameter,
 * 30 mm long) is the ISO standard; the article is honest that thread
 * pitch needs a gauge.
 */
import type { ContentPageDict } from '../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-09';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to identify screw size by measuring diameter and length',
    totalTime: 'PT5M',
    tools: ['The screw or bolt', 'On-screen ruler'],
    steps: [
      {
        name: 'Measure the diameter across the threads',
        text: 'Lay the screw sideways and read the widest point of the threads with the calibrated on-screen millimeter ruler — that is the diameter.',
      },
      {
        name: 'Measure the length correctly',
        text: 'For most screws measure from under the head to the tip; for flat countersunk heads measure the total length including the head.',
      },
      {
        name: 'Read the metric size',
        text: 'A 6 mm diameter with 30 mm length is an M6 × 30 — the number after M is the diameter, the number after × is the length.',
      },
    ],
  },
  {
    name: 'How to identify screw size by matching a known screw',
    totalTime: 'PT5M',
    tools: ['The unknown screw', 'A screw of known size', 'On-screen ruler'],
    steps: [
      {
        name: 'Line the screws up side by side',
        text: 'Place the unknown screw next to one whose size you know, threads aligned, on a flat surface.',
      },
      {
        name: 'Compare diameter first',
        text: 'Hold both against the calibrated on-screen mm ruler — if the thread widths match, the diameters match.',
      },
      {
        name: 'Compare length the same way',
        text: 'Check the lengths with the same under-the-head rule; equal diameter and length means an equal size for buying purposes.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Identify a Screw or Bolt Size | Real Online Ruler',
  description:
    'Identify any screw or bolt at home: measure diameter and length with our on-screen mm ruler, read metric labels like M6 × 30, and match against known screws.',
  h1: 'How to Identify a Screw or Bolt Size',
  lede: 'A screw’s size is just two numbers — diameter and length. Measure them with our free on-screen millimeter ruler and you will know exactly what to buy.',
  breadcrumb: 'Identify screw size',
  blocks: [
    {
      kind: 'p',
      html: 'Screws and bolts are sold by <strong>diameter × length</strong>, both in millimeters for metric hardware. Once you can measure those two numbers, labels like <em>M6 × 30</em> stop being cryptic — that is simply a 6 mm diameter, 30 mm long screw.',
    },
    { kind: 'h2', text: 'Method 1: Measure diameter and length' },
    {
      kind: 'ul',
      items: [
        '<strong>Diameter:</strong> lay the screw sideways and read the <strong>widest point of the threads</strong> with the <a href="/mm/">on-screen millimeter ruler</a> (<a href="/how-to-calibrate/">calibrate first</a>). Measure the threads, not the shank — the threads define the size.',
        '<strong>Length:</strong> for most screws (round, pan, hex heads) measure <strong>from under the head to the tip</strong>. For <strong>flat countersunk heads</strong>, which sit flush, measure the <strong>total length including the head</strong>.',
        'Round each reading to the nearest whole millimeter — metric screws come in whole-mm diameters.',
      ],
    },
    { kind: 'h2', text: 'Method 2: Match against a known screw' },
    {
      kind: 'p',
      html: 'If you have one screw of known size, lay the mystery screw beside it with the threads aligned and compare both against the calibrated <a href="/mm/">mm ruler</a>. Matching diameter <em>and</em> length means you have found your size — no label decoding needed.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-identify-screw-size/desktop.webp',
      alt: 'The Real Online Ruler workspace with the millimeter unit selected',
      caption:
        'The on-screen millimeter ruler — read thread diameter directly against it.',
    },
    { kind: 'h2', text: 'Reading metric labels: what M6 × 30 means' },
    {
      kind: 'p',
      html: 'Metric screws follow the ISO format <strong>M[diameter] × [length]</strong>, both in millimeters:',
    },
    {
      kind: 'table',
      head: ['Label', 'Diameter', 'Length'],
      rows: [
        ['M4 × 16', '4 mm', '16 mm'],
        ['M5 × 20', '5 mm', '20 mm'],
        ['M6 × 30', '6 mm', '30 mm'],
        ['M8 × 40', '8 mm', '40 mm'],
      ],
    },
    {
      kind: 'p',
      html: 'The <strong>M</strong> just means metric. Common small-project sizes are M4, M5, M6, and M8. If a label instead shows a <strong># number</strong> (like #8 × 1"), that is imperial hardware — this guide covers metric, which is standard for furniture, electronics, and most modern kits.',
    },
    { kind: 'h2', text: 'The honest limit: thread pitch' },
    {
      kind: 'p',
      html: 'Diameter and length are what you need to <em>buy</em> a replacement in most cases — but screws also have a <strong>thread pitch</strong> (the distance between threads). Coarse and fine threads of the same diameter are not interchangeable in a tapped hole. Pitch is hard to measure by eye; a <strong>thread gauge</strong> (a few dollars at any hardware store) identifies it in seconds. If a replacement binds or feels loose, pitch mismatch is the likely cause.',
    },
    { kind: 'h2', text: 'Tips for an accurate reading' },
    {
      kind: 'ul',
      items: [
        'Measure across the threads at their widest — that is the nominal diameter.',
        'Clean rust and debris off before measuring.',
        'For length, be consistent: under-the-head for raised heads, total length for flat heads.',
        'Zoom the page to 100% so the on-screen ruler reads true.',
        'When in doubt, bring the old screw to the store and test it in the sizer holes.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-identify-screw-size/mobile.webp',
      alt: 'The millimeter ruler on a phone screen',
      caption: 'The mm ruler on a phone — handy at the hardware store.',
    },
  ],
  faqs: [
    {
      q: 'What does M6 × 30 mean on a screw?',
      a: 'It is a metric screw with a 6 mm thread diameter and a 30 mm length. M stands for metric; the first number is always the diameter, the second the length.',
    },
    {
      q: 'Do I measure screw length including the head?',
      a: 'Usually not — measure from under the head to the tip. The exception is flat countersunk heads, which are measured as total length since the head sits flush with the surface.',
    },
    {
      q: 'How do I measure screw diameter without calipers?',
      a: 'Lay the screw sideways and read the widest point of the threads against a millimeter ruler — a calibrated on-screen mm ruler works fine. Round to the nearest whole millimeter.',
    },
    {
      q: 'What is thread pitch, and do I need it?',
      a: 'Thread pitch is the spacing between threads. Diameter and length are enough to buy most replacements, but if a screw binds in a threaded hole, the pitch is wrong — a thread gauge identifies it precisely.',
    },
    {
      q: 'What is the difference between a screw and a bolt?',
      a: 'For sizing purposes, none — both are identified by diameter and length the same way. Bolts typically pair with nuts; screws usually thread into the material itself.',
    },
    {
      q: 'My measurement falls between two metric sizes. Which do I pick?',
      a: 'Re-measure first — metric diameters are whole millimeters, so a between reading usually means the threads were measured at an angle. If it persists, bring the screw to the store and test it in their sizing holes.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/mm/', label: 'Millimeter ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
