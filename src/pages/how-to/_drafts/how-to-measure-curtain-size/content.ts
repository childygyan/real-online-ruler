/**
 * content.ts — "How to Measure a Window for Curtains".
 *
 * Draft for the 3-day ongoing publish program (2026-11-03). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Methods verified via web search 2026-10-19:
 * measure frame outside-edge to outside-edge; rod extends 4–6 in past each
 * side (6–12 in for wider/clear-glass setups); rod sits 4–6 in above the
 * frame; fullness = rod width x 1.5 (decorative) / 2 (standard) / 2.5–3
 * (sheers/luxury); lengths: sill (1/2 in above), apron (1 in below), floor
 * (1/2 in above / kiss / puddle 2–6 in extra); ready-made lengths 63/84/96/108 in.
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-11-03';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure curtain width from the rod',
    totalTime: 'PT10M',
    tools: ['Metal tape measure', 'Step stool', 'Pencil and paper'],
    steps: [
      {
        name: 'Measure the window frame edge to edge',
        text: 'Run the tape across the window from outside trim to outside trim and write down the width. This is your starting number, not your final one.',
      },
      {
        name: 'Decide the rod position',
        text: 'Plan the rod 4 to 6 inches above the window frame and extending 4 to 6 inches past each side — more (up to 10–12 inches per side) if you want open curtains to clear the glass fully.',
      },
      {
        name: 'Measure the full rod width',
        text: 'Measure end to end of the rod as it will hang, including finials on a one-piece rod. This rod width is the number the fullness math starts from.',
      },
      {
        name: 'Multiply by your fullness ratio',
        text: 'Multiply the rod width by 1.5 for a tailored minimum, 2 for the standard gathered look, or 2.5 to 3 for sheers or a luxurious gather. That total is the fabric width you need.',
      },
      {
        name: 'Split into panels',
        text: 'Divide the total fabric width by the number of panels — almost always two, parting at the center — and round up to the nearest ready-made panel width.',
      },
    ],
  },
  {
    name: 'How to measure the curtain drop (length)',
    totalTime: 'PT10M',
    tools: ['Metal tape measure', 'Step stool'],
    steps: [
      {
        name: 'Start from where the fabric hangs',
        text: 'Measure from the top of the rod — or from the bottom of the rings or clips if you use them, since hardware changes the drop.',
      },
      {
        name: 'Pick your hem style',
        text: 'Choose where the hem lands: about 1/2 inch above the sill for sill length, 1 inch below the apron, 1/2 inch above the floor (float), just kissing the floor, or 2 to 6 inches pooled on it.',
      },
      {
        name: 'Measure rod to hem point',
        text: 'Run the tape from the rod down to your chosen endpoint and note the inches. This is your finished length.',
      },
      {
        name: 'Round up to a standard length',
        text: 'Ready-made panels come in 63, 84, 96, and 108 inches. Buy the next size up from your measurement — you can hem a long curtain shorter, but you cannot stretch a short one.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure a Window for Curtains | Real Online Ruler',
  description:
    'Measure width from the rod (not the window) and multiply by 1.5–2 for fullness, then measure the drop. Rod 4–6 in above and past the frame.',
  h1: 'How to Measure a Window for Curtains',
  lede: 'The number-one curtain mistake is measuring the window instead of the rod. Get the rod position right, multiply for fullness, pick a hem style — and the panels you buy will actually fit.',
  breadcrumb: 'Measure window for curtains',
  blocks: [
    {
      kind: 'p',
      html: 'Curtains look expensive when they hang high, wide, and full — and cheap when they are too narrow or too short. All three qualities are decided by the tape measure before you spend anything. Here is the sequence professionals use: rod first, then width, then length.',
    },
    { kind: 'h2', text: 'Step 1: Position the rod' },
    {
      kind: 'p',
      html: 'Measure the window frame from outside trim to outside trim. Then plan the rod <strong>4 to 6 inches above the frame</strong> — higher makes ceilings feel taller — and <strong>extending 4 to 6 inches past each side</strong>. Go wider (up to 10–12 inches per side) if you want open curtains to stack fully clear of the glass instead of covering it.',
    },
    { kind: 'h2', text: 'Step 2: Width — measure the rod, multiply for fullness' },
    {
      kind: 'ul',
      items: [
        '<strong>Measure the rod end to end</strong> as it will hang, including finials. This is the base number — not the window width.',
        '<strong>Multiply for fullness:</strong> ×1.5 is the tailored minimum (decorative panels that never close), ×2 is the standard gathered look, ×2.5–3 suits sheers and luxury gathers.',
        '<strong>Split into panels:</strong> almost always two, parting at the center. Divide the total fabric width by two and round up to the nearest ready-made width.',
        '<strong>Example:</strong> a 60-inch rod × 2 = 120 inches of fabric, or two 60-inch panels. Two standard 52-inch panels cover about 40 inches of rod handsomely.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-curtain-size/desktop.webp',
      alt: 'The Real Online Ruler workspace with the inch unit selected and a long drawn measurement line for checking rod widths',
      caption:
        'The on-screen inch ruler — handy for sanity-checking rod and panel widths against your tape.',
    },
    { kind: 'h2', text: 'Step 3: Length — measure the drop' },
    {
      kind: 'p',
      html: 'Measure from the top of the rod — or from the bottom of the rings/clips if you use them — down to where you want the hem. The classic choices: <strong>½ inch above the sill</strong> (sill length), <strong>1 inch below the apron</strong>, <strong>½ inch above the floor</strong> (float), <strong>just kissing the floor</strong>, or <strong>2–6 inches pooled</strong> (puddle, for formal rooms). Ready-made panels come in 63, 84, 96, and 108 inches — buy the next size up; hemming shorter is easy, stretching longer is impossible.',
    },
    { kind: 'h2', text: 'The mistakes that ruin the look' },
    {
      kind: 'ul',
      items: [
        '<strong>Hanging the rod at the frame:</strong> it makes the window look smaller and the ceiling lower.',
        '<strong>Skipping fullness:</strong> closed curtains should look gathered, not stretched — flat panels are the classic giveaway.',
        '<strong>Measuring before the rug is down:</strong> a thick rug changes your floor clearance.',
        '<strong>Forgetting the hardware:</strong> rings, hooks, and finials all change the final drop, so measure from where the fabric actually hangs.',
        '<strong>Using a cloth tape:</strong> fabric tapes stretch — a metal tape is the honest tool here.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-curtain-size/mobile.webp',
      alt: 'The Real Online Ruler inch scale on a phone screen with a drawn measurement line',
      caption:
        'Measuring at the window? The inch ruler on your phone covers the quick double-checks — <a href="/how-to-calibrate/">calibrate</a> once for true size.',
    },
    { kind: 'h2', text: 'A worked example' },
    {
      kind: 'p',
      html: 'A 36-inch window frame: rod planned 6 inches past each side = 48-inch rod. Standard fullness ×2 = 96 inches of fabric, so two 48–52-inch panels. Rod mounted 5 inches above the frame in an 8-foot room, float hem ½ inch above the floor: the drop measures about 84 inches, so you buy 84-inch panels. Same math, every window — which is why <a href="/how-to-measure-picture-frame/">measuring frames carefully</a> is a skill that pays off all over the house.',
    },
  ],
  faqs: [
    {
      q: 'How much wider than the window should the curtain rod be?',
      a: 'Extend the rod 4 to 6 inches past each side of the frame as a baseline, or 6 to 12 inches per side if you want open curtains to clear the glass completely.',
    },
    {
      q: 'How wide should curtains be compared to the window?',
      a: 'Measure the rod (not the window) and multiply by 1.5 for a flat tailored look, 2 for the standard gathered look, or 2.5–3 for sheers or a luxurious gather.',
    },
    {
      q: 'Where should curtains end — floor, sill, or pooled?',
      a: 'Floor length (½ inch above the floor, or just kissing it) suits most rooms. Sill length works over radiators and in kitchens; pooling 2–6 inches is for formal, low-traffic spaces.',
    },
    {
      q: 'What are standard ready-made curtain sizes?',
      a: 'Common lengths are 63, 84, 96, and 108 inches; common panel widths are 42, 52, and 54 inches. Buy the next size up from your measurement.',
    },
    {
      q: 'Should I measure the window or the rod for curtain width?',
      a: 'The rod. The fullness ratio is calculated from rod width, since the rod extends beyond the frame — measuring the window alone gives you flat, skimpy curtains.',
    },
    {
      q: 'How high above the window should a curtain rod go?',
      a: '4 to 6 inches above the frame is the standard; mounting closer to the ceiling makes the room feel taller.',
    },
  ],
  related: [
    { href: '/how-to-measure-picture-frame/', label: 'Measure a picture frame' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
