/**
 * content.ts — "How to Measure Your Ring Size at Home" article.
 *
 * English-only article (English-first article strategy): content lives next to
 * the page instead of the shared locale dictionary, so no locale dict needs
 * a matching key. Each article carries its own publish date — never reuse
 * one date across articles.
 */
import type { ContentPageDict } from '../../i18n/content.js';

export const DATE_PUBLISHED = '2026-10-04';

export const article: ContentPageDict = {
  title: 'How to Measure Ring Size at Home Without a Ring Sizer | Real Online Ruler',
  description:
    'Measure your ring size at home with a paper strip or a ring you already own — then check it in millimeters on our free on-screen ruler. Step-by-step methods plus a US/UK/EU ring size chart.',
  h1: 'How to Measure Your Ring Size at Home',
  lede: 'No ring sizer? No problem. With a strip of paper, a pen, and our free on-screen ruler, you can find your ring size in minutes — accurate enough to order with confidence.',
  breadcrumb: 'Measure ring size',
  related: [
    { href: '/mm/', label: 'Millimeter ruler' },
    { href: '/how-to-calibrate/', label: 'How to calibrate' },
    { href: '/guide/', label: 'Reading the ruler' },
  ],
  faqs: [
    {
      q: 'Can I measure my ring size with my phone?',
      a: 'Yes. Open the on-screen ruler on your phone, calibrate it with a credit card, switch to millimeters, and hold your marked paper strip — or a ring that fits — against the screen edge to read the measurement.',
    },
    {
      q: 'Is the paper strip method accurate?',
      a: 'It gets you within about half a US size when done carefully — good enough for most online orders. Measure two or three times and use the average. For expensive rings, confirm with a jeweler before the final purchase.',
    },
    {
      q: 'What should I do if my measurement falls between two sizes?',
      a: 'Go up, not down — a slightly loose ring can be sized down, but a tight ring is unwearable. This matters most for wide bands (6 mm and up), which fit tighter than thin bands in the same size.',
    },
    {
      q: 'Should I measure in inches or millimeters?',
      a: 'Millimeters. The jewelry world runs on millimeters: US, UK, and EU sizes all derive from the ring\u2019s inside diameter or circumference in mm. Inches are too coarse — a quarter size is less than half a millimeter.',
    },
    {
      q: 'Does it matter which finger or hand I measure?',
      a: 'Yes. Measure the exact finger the ring will live on — fingers differ between hands, and your dominant hand\u2019s fingers are usually slightly larger. Size the finger at the end of the day, when it\u2019s at its largest.',
    },
    {
      q: 'Can I use string instead of paper?',
      a: 'Paper is better. String and thread stretch as you pull them, which adds millimeters you don\u2019t have. If you only have string, keep it snug without pulling and double-check against the chart.',
    },
  ],
  blocks: [
    {
      kind: 'p',
      html: 'Jewelers size rings in <strong>millimeters</strong> — the inside diameter of the band, to a tenth of a millimeter. You don\u2019t need a jeweler\u2019s mandrel or a plastic ring sizer to get that number. Two simple methods below get you there with things already in your home, and our <a href="/mm/">on-screen millimeter ruler</a> stands in wherever a physical ruler is called for.',
    },
    { kind: 'h2', text: 'Method 1: The paper strip method (most popular)' },
    {
      kind: 'p',
      html: 'This is the method nearly every jeweler\u2019s sizing guide describes. You wrap a strip of paper around your finger, mark it, then measure the strip.',
    },
    {
      kind: 'ul',
      items: [
        '<strong>Cut a strip of paper</strong> about 10 cm long and 1 cm wide. Use plain paper — not string or thread, which stretch and add phantom millimeters.',
        '<strong>Wrap it around the base of the finger</strong>, snug but comfortable — the way a ring should feel, sliding over the knuckle with slight resistance.',
        '<strong>Mark the overlap</strong> with a pen exactly where the end meets the strip.',
        '<strong>Unwrap and lay it flat.</strong> Measure from the end to your pen mark in <strong>millimeters</strong>. That number is your finger\u2019s circumference.',
        '<strong>Find your size</strong> in the chart below.',
      ],
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-ring-size/ruler-workspace.webp',
      alt: 'The Real Online Ruler workspace showing the unit switcher (cm, mm, in, px) and measuring tools',
      caption:
        'The on-screen ruler workspace. Switch to <strong>mm</strong>, calibrate once, and the screen edge becomes a millimeter ruler.',
    },
    { kind: 'h2', text: 'Method 2: Measure a ring you already own' },
    {
      kind: 'p',
      html: 'If you own a ring that already fits the finger, skip the paper: measure the <strong>inside diameter</strong> of that ring in millimeters — edge to edge across the inner circle, not including the metal. That single number maps straight to the chart. Rings are small enough to hold directly against a laptop or phone screen, which makes this method and the on-screen ruler a natural pair.',
    },
    { kind: 'h2', text: 'No physical ruler? Measure on your screen instead' },
    {
      kind: 'p',
      html: 'Every ring-sizing guide on the internet ends with \u201cnow measure it with a ruler\u201d — and then leaves you to find one. Here\u2019s the part those guides can\u2019t do: <strong>calibrate this site once with a credit card</strong> (any bank card is exactly 85.60 mm wide), open the <a href="/mm/">millimeter ruler</a>, and hold your marked paper strip or your ring against the screen edge. The ticks you see are true millimeters. The full walkthrough is on our <a href="/how-to-calibrate/">calibration page</a> — it takes under a minute.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-ring-size/calibration-methods.webp',
      alt: 'The four calibration methods on Real Online Ruler: auto-detect, device picker, screen diagonal, and credit card',
      caption:
        'Four ways to calibrate: auto-detect, device picker, screen diagonal, or the credit-card method — the most accurate for most people.',
    },
    {
      kind: 'p',
      html: 'On a phone it\u2019s even handier: open the ruler in your mobile browser, calibrate with the card in your wallet, and your phone becomes a pocket millimeter ruler you can hold a ring right up against.',
    },
    {
      kind: 'figure',
      src: '/images/articles/how-to-measure-ring-size/mm-ruler-mobile.webp',
      alt: 'The millimeter ruler page displayed on a phone screen',
      caption: 'The millimeter ruler on a phone — hold a ring or paper strip against the screen edge to read its size.',
    },
    { kind: 'h2', text: 'Ring size chart: US, UK, and EU sizes in millimeters' },
    {
      kind: 'p',
      html: 'Found your <strong>circumference</strong> (Method 1) or <strong>inside diameter</strong> (Method 2)? Read across to your size. Charts vary slightly between jewelers and countries, so treat this as accurate to about a quarter size — and always confirm with the seller\u2019s own chart before ordering.',
    },
    {
      kind: 'table',
      head: ['US size', 'UK size', 'EU size', 'Inside diameter (mm)', 'Circumference (mm)'],
      rows: [
        ['4', 'H\u00bd', '47', '14.9', '46.8'],
        ['4\u00bd', 'I\u00bd', '48', '15.3', '48.1'],
        ['5', 'J\u00bd', '49', '15.7', '49.3'],
        ['5\u00bd', 'K\u00bd', '50', '16.1', '50.6'],
        ['6', 'L\u00bd', '52', '16.5', '51.8'],
        ['6\u00bd', 'M\u00bd', '53', '16.9', '53.1'],
        ['7', 'N\u00bd', '54', '17.3', '54.4'],
        ['7\u00bd', 'O\u00bd', '55', '17.7', '55.6'],
        ['8', 'P\u00bd', '57', '18.1', '56.9'],
        ['8\u00bd', 'Q\u00bd', '58', '18.5', '58.1'],
        ['9', 'R\u00bd', '59', '18.9', '59.4'],
        ['9\u00bd', 'S\u00bd', '60', '19.4', '60.9'],
        ['10', 'T\u00bd', '62', '19.8', '62.2'],
        ['10\u00bd', 'U\u00bd', '63', '20.2', '63.5'],
        ['11', 'V\u00bd', '64', '20.6', '64.7'],
        ['11\u00bd', 'W\u00bd', '66', '21.0', '66.0'],
        ['12', 'X\u00bd', '67', '21.4', '67.2'],
        ['12\u00bd', 'Z', '68', '21.8', '68.5'],
        ['13', 'Z+1', '69', '22.2', '69.7'],
      ],
    },
    { kind: 'h2', text: 'Tips for an accurate measurement' },
    {
      kind: 'ul',
      items: [
        '<strong>Measure at the end of the day.</strong> Fingers are smallest in the cold morning and swell slightly by evening — size for the larger state.',
        '<strong>Warm hands only.</strong> Cold fingers can measure a half size smaller than they really are.',
        '<strong>Wide bands fit tighter.</strong> For bands 6 mm and wider, consider going up a quarter to half size versus a thin band.',
        '<strong>Mind the knuckle.</strong> The ring must slide over your knuckle but sit snug at the base — if your knuckle is much larger than the base, size for the knuckle.',
        '<strong>Repeat two or three times</strong> and average. If the readings disagree by more than half a size, re-measure more carefully.',
        '<strong>Don\u2019t guess the hand.</strong> Your dominant hand\u2019s fingers run slightly larger — measure the exact finger on the exact hand.',
      ],
    },
    { kind: 'h2', text: 'When to double-check with a jeweler' },
    {
      kind: 'p',
      html: 'Home measuring is honest work and plenty accurate for most online orders — but if the ring is expensive, a surprise, or can\u2019t be resized (eternity bands, for example), get a free professional sizing at any jeweler before you buy. Bring the number you measured here; if theirs matches within a quarter size, you measured well.',
    },
  ],
};
