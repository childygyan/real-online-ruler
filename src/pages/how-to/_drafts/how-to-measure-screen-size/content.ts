/**
 * content.ts — "How to Measure Your Screen Size".
 *
 * Draft for the 15-day daily publish program (2026-10-11). Procedural article:
 * ships Article + HowTo + FAQPage JSON-LD (index.astro builds it from
 * howToMethods below).
 */
import type { ContentPageDict } from '../../../../i18n/content.js';

/** Publish date — from queue.ts; keep in sync. */
export const DATE_PUBLISHED = '2026-10-11';

/** Step-by-step methods for HowTo structured data (mirrors the article body). */
export interface HowToMethod {
  name: string;
  totalTime: string; // ISO 8601 duration, e.g. 'PT10M'
  tools: string[];
  steps: { name: string; text: string }[];
}

export const howToMethods: HowToMethod[] = [
  {
    name: 'How to measure screen size with a tape measure',
    totalTime: 'PT5M',
    tools: ['Tape measure or ruler', 'On-screen ruler (for small screens)'],
    steps: [
      {
        name: 'Find the display area — not the bezel',
        text: 'Look for where the picture actually starts and ends. The plastic or metal frame around it (the bezel) is never part of the screen size.',
      },
      {
        name: 'Start at the bottom-left corner of the picture',
        text: 'Place the end of your tape exactly at the corner where the lit display area begins.',
      },
      {
        name: 'Stretch diagonally to the top-right corner',
        text: 'Pull the tape straight and taut across to the opposite corner of the display area — diagonal, never horizontal or vertical.',
      },
      {
        name: 'Read the measurement in inches',
        text: 'The diagonal inches you read are the screen size — a 24-inch monitor measures about 24 inches corner to corner.',
      },
      {
        name: 'Round to the nearest standard size',
        text: 'Screens are sold in whole-inch sizes, so round your reading: 23.6 inches means you have a 24-inch screen.',
      },
    ],
  },
  {
    name: 'How to check screen size in your system settings',
    totalTime: 'PT3M',
    tools: ['Your computer or phone'],
    steps: [
      {
        name: 'Open your display settings',
        text: 'On Windows, open Settings → System → Display; on macOS, open About This Mac → More Info → Displays.',
      },
      {
        name: 'Find the display name or resolution',
        text: 'Settings often list the display model or its resolution, which you can match to the manufacturer’s listed screen size.',
      },
      {
        name: 'Check the manufacturer specs for the exact size',
        text: 'Search your device or monitor model number online — the official spec sheet lists the exact diagonal screen size.',
      },
    ],
  },
];

export const article: ContentPageDict = {
  title: 'How to Measure Your Screen Size | Real Online Ruler',
  description:
    'Measure any monitor, laptop, or TV screen: diagonal of the display area only (never the bezel), in inches — plus how to check size in system settings.',
  h1: 'How to Measure Your Screen Size',
  lede: 'Screen size is one number — the diagonal of the part that lights up, in inches. Measure it wrong (most people include the frame) and you’ll buy the wrong monitor arm, the wrong case, or the wrong replacement panel. Here’s how to get it right.',
  breadcrumb: 'Measure screen size',
  blocks: [
    {
      kind: 'p',
      html: 'Whether it’s a monitor, a laptop, a TV, or a phone, the industry measures screens exactly one way: the <strong>diagonal of the viewable display area, in inches</strong>. Learn that one rule and you can size any screen in under a minute.',
    },
    { kind: 'h2', text: 'Method 1: measure the diagonal with a tape' },
    {
      kind: 'p',
      html: 'Power the screen off first — the dark display makes the edge of the picture area easier to see. Then measure from the <strong>bottom-left corner of the picture</strong> to the <strong>top-right corner</strong>, keeping the tape straight and taut.',
    },
    {
      kind: 'ul',
      items: [
        'Measure only the part that lights up — never include the bezel or frame.',
        'Measure diagonally. Horizontal or vertical measurements are not screen sizes.',
        'Read in inches; screen sizes are almost always specified in inches.',
        'Round to the nearest whole inch — that’s the marketed size.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-screen-size/desktop.webp',
      alt: 'The Real Online Ruler workspace with the centimeter unit selected for measuring screen dimensions',
      caption:
        'No tape handy? Use the on-screen centimeter ruler to measure small screens and convert — 1 inch = 2.54 cm.',
    },
    { kind: 'h2', text: 'Method 2: check it in your system settings' },
    {
      kind: 'p',
      html: 'No tape at all? Your device usually knows. On <strong>Windows</strong>, go to Settings → System → Display; on <strong>macOS</strong>, open About This Mac → More Info → Displays. Note the display or device model, then look up its official spec sheet — manufacturers list the exact diagonal there.',
    },
    {
      kind: 'p',
      html: 'On phones and tablets, the spec sheet is the only sane route — measuring a 6-inch display with a tape is fiddly, and the listed size is what cases and screen protectors are sold by.',
    },
    { kind: 'h2', text: 'Why the diagonal — and never the bezel' },
    {
      kind: 'p',
      html: 'The diagonal is the one measurement that stays comparable across <strong>aspect ratios</strong>. A 27-inch 16:9 monitor and a 27-inch 21:9 ultrawide share the same diagonal but have very different widths — the diagonal is the common language. The bezel is excluded because it’s just packaging: two “24-inch” monitors can have totally different outer dimensions if one has chunky frames and the other is nearly borderless.',
    },
    { kind: 'h2', text: 'Aspect ratio changes the shape, not the size' },
    {
      kind: 'p',
      html: 'Most TVs and monitors today are <strong>16:9</strong> widescreen; many laptops are 16:10; gaming and productivity ultrawides are often <strong>21:9</strong>. Same diagonal, wider ratio, wider (and shorter) screen — so when a screen needs to fit a desk or a wall, always check the actual width and height too, not just the diagonal.',
    },
    {
      kind: 'table',
      head: ['Device', 'Typical sizes (diagonal)'],
      rows: [
        ['Phones', '6–7″'],
        ['Tablets', '8–13″'],
        ['Laptops', '13.3″, 14″, 15.6″, 16″, 17.3″'],
        ['Desktop monitors', '22″, 24″, 27″, 32″, 34″ ultrawide'],
        ['TVs', '43″, 50″, 55″, 65″, 75″'],
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-screen-size/mobile.webp',
      alt: 'The on-screen centimeter ruler on a phone screen',
      caption:
        'Measuring a small display? The centimeter ruler on your phone gets you close — then convert to inches.',
    },
    { kind: 'h2', text: 'Watch out for marketing rounding' },
    {
      kind: 'p',
      html: 'Advertised sizes are rounded. A laptop sold as “14-inch” might use a 14.0, 14.2, or 14.5-inch panel, and a “15-inch” laptop might be 15.6. For buying a monitor arm or a TV stand it hardly matters — but if you’re ordering a <em>replacement</em> laptop screen, always match the exact panel model number, never just the advertised size.',
    },
  ],
  faqs: [
    {
      q: 'Do you include the bezel when measuring a TV or monitor?',
      a: 'No. Screen size is the diagonal of the viewable display area only. The bezel and frame are never counted — measure only the part that shows the picture.',
    },
    {
      q: 'Why are screens measured diagonally instead of width?',
      a: 'The diagonal is a single number that stays comparable across aspect ratios. A width-only number couldn’t describe both a 16:9 and a 21:9 screen fairly.',
    },
    {
      q: 'Is a 27-inch 16:9 monitor the same as a 27-inch 21:9 ultrawide?',
      a: 'Same diagonal, different shape. The ultrawide is wider and shorter, with more total screen area — so check width and height when it needs to fit a space.',
    },
    {
      q: 'How do I find my laptop screen size without a tape measure?',
      a: 'Check About This Mac or Windows Display settings for the model, then look up the manufacturer’s spec sheet — it lists the exact diagonal size.',
    },
    {
      q: 'My tape says 23.6 inches but it was sold as 24 — is that normal?',
      a: 'Yes. Marketed sizes are rounded to whole inches, and panels vary slightly. 23.6 inches diagonal is a 24-inch screen.',
    },
    {
      q: 'Can I measure a curved monitor the same way?',
      a: 'Yes — measure the diagonal of the display area corner to corner. Use a flexible tape so it follows the curve rather than bridging across it.',
    },
  ],
  related: [
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/cm/', label: 'Centimeter ruler' },
    { href: '/how-to/', label: 'All how-to guides' },
  ],
};
