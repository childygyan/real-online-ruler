/**
 * content.ts — "How to Measure a Box for Shipping".
 *
 * Draft for the 15-day daily publish program (2026-10-15). Procedural
 * article: ships Article + HowTo + FAQPage JSON-LD (index.astro builds it
 * from howToMethods below). Carrier limits verified via web search
 * 2026-10-04: girth = (2 x width) + (2 x height); UPS/FedEx max 108 in
 * length and 165 in length+girth; USPS max 130 in length+girth.
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-15';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure a box length x width x height for shipping',
    totalTime: 'PT10M',
    tools: ['Tape measure', 'On-screen ruler'],
    steps: [
      {
        name: 'Pack and seal the box first',
        text: 'Measure the OUTSIDE of the finished, taped-shut box — carriers measure what they handle, not the empty box or the item inside.',
      },
      {
        name: 'Measure the length (longest side)',
        text: 'Find the longest side of the box and measure it end to end. By carrier convention this is always the length, no matter which way the box sits.',
      },
      {
        name: 'Measure the width',
        text: 'Measure the shorter horizontal side, perpendicular to the length. Keep the tape straight and read at the box edge.',
      },
      {
        name: 'Measure the height',
        text: 'Measure the remaining vertical dimension from the table to the top of the box. If the box bulges, measure at the widest point.',
      },
      {
        name: 'Record as L x W x H',
        text: 'Write the three numbers in order, in the unit your carrier form asks for (inches for US carriers). Example: 16 x 12 x 10 in.',
      },
    ],
  },
  {
    name: 'How to measure girth for carrier size limits',
    totalTime: 'PT5M',
    tools: ['Tape measure', 'Calculator'],
    steps: [
      {
        name: 'Take your width and height',
        text: 'Use the outside width and height from your L x W x H measurement, in inches.',
      },
      {
        name: 'Calculate the girth',
        text: 'Girth is the distance around the thickest part: (2 x width) + (2 x height). A 12 x 10 in box has a girth of 44 in.',
      },
      {
        name: 'Add the length',
        text: 'Length + girth is the "total size" carriers check against their limits. For the example box: 16 + 44 = 60 in.',
      },
      {
        name: 'Compare with carrier limits',
        text: 'UPS and FedEx cap parcels at 108 in length and 165 in length+girth; USPS caps at 130 in length+girth. Over the limit means freight or splitting the shipment.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure a Box for Shipping | Real Online Ruler',
  description:
    'Measure any box for shipping: length x width x height plus girth (2W+2H), carrier size limits, and the mistakes that trigger surcharges.',
  h1: 'How to Measure a Box for Shipping',
  lede: 'Carriers charge by size as well as weight, and one wrong number can turn a cheap shipment into a surcharge. Here is exactly what to measure, in what order, and how to check the carrier limits before you book the label.',
  breadcrumb: 'Measure box for shipping',
  blocks: [
    {
      kind: 'p',
      html: 'Every carrier — UPS, FedEx, USPS — prices a parcel from the same three numbers: length, width, and height of the <strong>packed, sealed box</strong>. Get them right and you pay the quoted price; get them wrong and dimensional-weight pricing or an oversize surcharge corrects it for you, at your expense.',
    },
    { kind: 'h2', text: 'What carriers actually measure' },
    {
      kind: 'p',
      html: 'Carriers use one convention worldwide for a rectangular box: <strong>length is the longest side</strong>, width is the side perpendicular to the length, and height is whatever is left. Always measure the <strong>outside</strong> of the finished box — flaps taped, bulges included. A box that bulges 1 inch past your measurement is 1 inch bigger in the carrier system.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-box-for-shipping/desktop.webp',
      alt: 'The Real Online Ruler workspace with the centimeter unit selected, ready to check small box dimensions',
      caption:
        'The on-screen centimeter ruler — handy for double-checking small parcels and box flaps before you measure the full box with a tape.',
    },
    { kind: 'h2', text: 'Method 1: Length x width x height' },
    {
      kind: 'ul',
      items: [
        '<strong>Seal the box first.</strong> Pack it, tape it, then measure. Carriers handle the finished parcel, not your plan for it.',
        '<strong>Length:</strong> the longest side, end to end.',
        '<strong>Width:</strong> the shorter horizontal side, at right angles to the length.',
        '<strong>Height:</strong> table to top of the box. Measure bulges at their widest point.',
        '<strong>Record as L x W x H</strong> in the unit your carrier form asks for — inches for US carriers, e.g. 16 x 12 x 10 in.',
      ],
    },
    { kind: 'h2', text: 'Method 2: Girth, for the carrier size limits' },
    {
      kind: 'p',
      html: 'Carriers also check <strong>length + girth</strong> — the "total size" of your parcel. Girth is the distance around the thickest part of the box: <strong>(2 x width) + (2 x height)</strong>. Add the length to get the number the size-limit tables use.',
    },
    {
      kind: 'table',
      head: ['Carrier', 'Max length', 'Max length + girth'],
      rows: [
        ['UPS / FedEx', '108 in', '165 in'],
        ['USPS', '—', '130 in'],
      ],
    },
    {
      kind: 'p',
      html: 'Example: a 16 x 12 x 10 in box has a girth of (2 x 12) + (2 x 10) = 44 in, so length + girth = 60 in — comfortably inside every limit above. Cross a limit and the parcel stops being a parcel: it becomes freight, or you split the shipment. (Limits change; confirm on the carrier site before shipping anything close to the edge.)',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-box-for-shipping/mobile.webp',
      alt: 'The Real Online Ruler centimeter scale on a phone screen',
      caption:
        'Measuring on the go? The cm ruler works on phones too — <a href="/how-to-calibrate/">calibrate</a> with a credit card for true size.',
    },
    { kind: 'h2', text: 'Mistakes that cost money' },
    {
      kind: 'ul',
      items: [
        '<strong>Measuring the inside</strong> of the box or the item instead of the sealed parcel.',
        '<strong>Ignoring bulges</strong> — measure the widest point, not the box as designed.',
        '<strong>Mixing units</strong> — US carrier forms want inches; a cm number entered as inches under-reports badly.',
        '<strong>Rounding down.</strong> Carriers round up; UPS and FedEx round fractional inches up to the next whole inch for dimensional pricing.',
        '<strong>Forgetting dimensional weight:</strong> carriers bill whichever is greater, actual weight or dimensional weight — a big light box can cost more than a small heavy one.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Do I measure the inside or outside of the box?',
      a: 'The outside, after the box is packed and taped shut. Carriers measure the parcel they handle, including any bulge.',
    },
    {
      q: 'What is girth in shipping?',
      a: 'The distance around the thickest part of the box: (2 x width) + (2 x height). Carriers add it to the length to get the parcel’s "total size."',
    },
    {
      q: 'What are the carrier size limits?',
      a: 'UPS and FedEx cap standard parcels at 108 inches in length and 165 inches in length plus girth; USPS caps at 130 inches combined. Always confirm current limits on the carrier’s site.',
    },
    {
      q: 'What happens if my box is over the size limit?',
      a: 'It can’t go as a standard parcel — you’ll need freight service or to split the contents into smaller boxes.',
    },
    {
      q: 'Should I measure in cm or inches?',
      a: 'Use whatever your carrier’s booking form asks for. US carriers price in inches; measure in inches to avoid conversion errors.',
    },
    {
      q: 'What is dimensional weight?',
      a: 'A pricing method where the carrier charges by the space a box occupies, not just its scale weight. Whichever is higher — actual or dimensional weight — becomes the billable weight, so pack snugly.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/inches/', label: 'Inch ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
