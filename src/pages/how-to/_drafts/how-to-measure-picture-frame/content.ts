/**
 * content.ts — "How to Measure a Picture Frame".
 *
 * Draft for the 15-day daily publish program (2026-10-18). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Facts verified via web search 2026-10-04:
 * standard US sizes 4x6, 5x7, 8x10, 11x14, 16x20 (+20x24); frames are sold
 * by the ART size they hold; the rabbet overlaps the art (about 1/4 in per
 * side) so the visible opening is smaller; outer frame size is always
 * larger than the art size.
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-18';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure your art for a picture frame',
    totalTime: 'PT10M',
    tools: ['Tape measure', 'On-screen ruler'],
    steps: [
      {
        name: 'Measure the art itself',
        text: 'Lay the print or photo flat and measure its exact width and height edge to edge. Frames are sold by the art size they hold, so this number picks the frame.',
      },
      {
        name: 'Match to a standard size',
        text: 'Compare your numbers to standard US sizes: 4x6, 5x7, 8x10, 11x14, 16x20. An 8x10 print takes an 8x10 frame — buy the size that equals your art.',
      },
      {
        name: 'Expect the opening to be smaller',
        text: 'The frame’s inner lip (the rabbet) overlaps your art by roughly 1/4 inch per side to hold it in, so the visible opening will be slightly smaller than the frame size. Keep important details away from the edges.',
      },
      {
        name: 'Decide on a mat',
        text: 'A mat’s opening is cut smaller than the art so it overlaps and holds the print. If you want a mat, you can fit a smaller print into a larger standard frame.',
      },
    ],
  },
  {
    name: 'How to measure a frame’s outer dimensions for your wall',
    totalTime: 'PT5M',
    tools: ['Tape measure'],
    steps: [
      {
        name: 'Measure the full outer width',
        text: 'With the frame assembled (or using the listed outer size), measure from the far left edge to the far right edge, including the frame moulding on both sides.',
      },
      {
        name: 'Measure the full outer height',
        text: 'Measure top edge to bottom edge the same way. The outer size is always larger than the art size — an 8x10 frame typically spans about 10x12 inches on the wall.',
      },
      {
        name: 'Check your wall space',
        text: 'Compare the outer dimensions to the space where the frame will hang, leaving breathing room around it. For gallery walls, map the outer sizes on the wall with painter’s tape first.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure a Picture Frame | Real Online Ruler',
  description:
    'Measure a picture frame the right way: frames are sold by the art size they hold. Standard sizes, the rabbet overlap, and outer dimensions.',
  h1: 'How to Measure a Picture Frame',
  lede: 'Here is the rule that saves every framing project: an "8×10 frame" means a frame that holds 8×10-inch art — not a frame that measures 8×10 inches on the outside. Measure the right thing and the frame fits first time.',
  breadcrumb: 'Measure picture frame',
  blocks: [
    {
      kind: 'p',
      html: 'Picture-frame shopping goes wrong the moment people measure the frame instead of the art. Manufacturers size frames by the <strong>artwork they hold</strong>: buy the frame size that equals your print’s dimensions, and the frame’s inner lip takes care of the rest.',
    },
    { kind: 'h2', text: 'Standard US frame sizes' },
    {
      kind: 'p',
      html: 'These are the sizes you will find ready-made in stores. They match standard photo and paper dimensions, which is exactly why odd-sized prints often need a mat or a custom frame.',
    },
    {
      kind: 'table',
      head: ['Frame size', 'Holds art', 'Typical use'],
      rows: [
        ['4 × 6 in', '4 × 6 in photo', 'Desk photos, snapshots'],
        ['5 × 7 in', '5 × 7 in photo', 'Portraits, greeting cards'],
        ['8 × 10 in', '8 × 10 in print', 'Certificates, portraits'],
        ['11 × 14 in', '11 × 14 in print', 'Art prints, posters'],
        ['16 × 20 in', '16 × 20 in print', 'Large art, group photos'],
        ['20 × 24 in', '20 × 24 in print', 'Statement pieces'],
      ],
    },
    { kind: 'h2', text: 'Method 1: Measure your art' },
    {
      kind: 'ul',
      items: [
        '<strong>Lay the art flat</strong> and measure edge to edge — width first, then height.',
        '<strong>Match a standard size.</strong> An 8×10 print takes an 8×10 frame. Do not size up "to be safe"; the frame already accounts for the overlap.',
        '<strong>Measure it yourself</strong> even if the print claims a size — trimmings and printer margins vary.',
        '<strong>Adding a mat?</strong> The mat opening is cut smaller than the art so it overlaps and grips the print — which also lets a smaller print live in a larger standard frame.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-picture-frame/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected, good for checking small print dimensions',
      caption:
        'The on-screen inch ruler — useful for double-checking small prints and mat openings before you buy.',
    },
    { kind: 'h2', text: 'Method 2: Measure the outer frame for wall space' },
    {
      kind: 'p',
      html: 'The outer size — moulding included — is what your wall sees. Measure the assembled frame edge to edge in both directions; an 8×10 frame typically spans roughly 10×12 inches on the wall, more with a wide moulding or mat. Map gallery walls with painter’s tape using these outer numbers before hammering any nails.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-picture-frame/mobile.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen',
      caption:
        'Framing on the go? The inch ruler works on phones — <a href="/how-to-calibrate/">calibrate</a> with a credit card for true size.',
    },
    { kind: 'h2', text: 'The rabbet: why the opening is smaller than the frame size' },
    {
      kind: 'p',
      html: 'The <strong>rabbet</strong> is the inner lip of the frame that grips your art and glazing so nothing falls through the front. It overlaps the artwork by roughly 1/4 inch per side (framers quote 2–10 mm per edge depending on the moulding). That is why the visible opening of an "8×10 frame" is a touch under 8×10 — keep signatures and important details away from the edges.',
    },
    { kind: 'h2', text: 'Non-standard art? You have two good options' },
    {
      kind: 'p',
      html: 'Either choose the next standard size up and fill the gap with a mat (the classic fix), or order a custom frame cut to your exact art dimensions. Never trim a valuable or irreplaceable print to fit a frame.',
    },
  ],
  faqs: [
    {
      q: 'What size frame do I need for an 8x10 photo?',
      a: 'An 8x10 frame. Frames are sold by the art size they hold, so the frame size should equal your print’s dimensions.',
    },
    {
      q: 'Why is the visible opening smaller than the frame size?',
      a: 'The frame’s inner lip (rabbet) overlaps your art by about 1/4 inch per side to hold it in place, so the opening you see is slightly smaller than the nominal size.',
    },
    {
      q: 'How do I measure for a mat?',
      a: 'The mat’s outer size matches the frame; its opening is cut smaller than your art so it overlaps the edges and holds the print. A mat also lets a smaller print fit a larger standard frame.',
    },
    {
      q: 'Should I measure in inches or centimeters?',
      a: 'Inches for US frames — that is how they are sold and labeled. Metric art can be converted: divide centimeters by 2.54.',
    },
    {
      q: 'My art is a non-standard size. What should I do?',
      a: 'Pick the next standard frame size up and use a mat to fill the difference, or have a frame custom-cut to your art. Avoid trimming valuable prints.',
    },
    {
      q: 'How much wall space will the frame actually take?',
      a: 'Measure the frame’s outer dimensions — moulding included — not the art size. An 8x10 frame is typically around 10x12 inches on the wall.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
