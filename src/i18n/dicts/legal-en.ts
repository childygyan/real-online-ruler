/**
 * legal-en.ts — English legal-page copy for Real Online Ruler.
 *
 * Original content (not copied from any other site). All six locale files
 * must keep exactly the same shape: Dict is `typeof en`, and the
 * dictionary-parity test enforces identical key paths.
 */
export const legalEn = {
  about: {
    title: 'About Us | Real Online Ruler',
    description:
      'Real Online Ruler is a free actual-size on-screen ruler made by independent maker Firoz Khan (FK Digital Media). Learn what the tool does and the principles behind it.',
    h1: 'About Us',
    lede: 'A free measuring tool that turns your screen into a ruler at true physical size — built by an independent maker, for everyone.',
    breadcrumb: 'About Us',
    photoAlt: 'Firoz Khan, independent maker behind FK Digital Media',
    makerName: 'Firoz Khan',
    makerOrg: 'FK Digital Media',
    whoTitle: 'Who we are',
    whoBody: [
      'Real Online Ruler is made by Firoz Khan, an independent maker working under the name FK Digital Media. Firoz builds free, practical web tools that anyone can use without signing up, downloading anything, or paying.',
      'The idea behind this site is simple: the web is full of moments when you need a quick measurement and no physical ruler is at hand. This site fills that gap — a ruler that lives in your browser and measures in centimeters, millimeters, inches, and pixels.',
    ],
    whatTitle: 'What the site does',
    whatBody: [
      'The centerpiece is an on-screen ruler rendered at true physical size. Because screens report different pixel densities, the site includes a calibration flow — automatic detection, a device database, screen-diagonal math, and a credit-card reference — so the ruler matches a real ruler held against your display.',
      'Around the ruler you will find precision extras: a drag-to-measure tool with distance and angle readouts, a protractor, a magnifier loupe, a floating rotatable ruler, a measurement log with export, and a grid overlay. Everything runs locally in your browser; nothing you measure ever leaves your device.',
    ],
    principlesTitle: 'Our principles',
    principles: [
      {
        t: 'Free for everyone',
        d: 'Every tool on this site is free, with no account and no download. Useful software should not have a gate in front of it.',
      },
      {
        t: 'Your data stays yours',
        d: "Measurements and calibration settings are stored only in your own browser. We don't run accounts, analytics, or tracking scripts.",
      },
      {
        t: 'Honest about accuracy',
        d: 'An on-screen ruler is only as accurate as its calibration. We say that plainly and give you the tools to verify it yourself.',
      },
    ],
    connectTitle: 'Connect',
    connectBody:
      'Questions, suggestions, or a bug to report? The fastest way to reach Firoz is through his public profiles:',
  },
  privacy: {
    title: 'Privacy Policy | Real Online Ruler',
    description:
      'Privacy Policy for Real Online Ruler: what data the site collects (none), how calibration settings are stored locally in your browser, and your rights.',
    h1: 'Privacy Policy',
    lede: 'Short version: this site collects nothing about you. Everything happens in your browser.',
    breadcrumb: 'Privacy Policy',
    updated: 'Last updated: September 30, 2026',
    intro: [
      'Real Online Ruler is a free tool that runs entirely in your web browser. This policy explains, in plain language, what information the site does and does not handle.',
    ],
    sections: [
      {
        h: 'Information we collect',
        body: [
          'None. The site has no accounts, no sign-up, no contact forms that transmit data, no analytics, and no advertising or tracking scripts. We do not see, store, or transmit anything you measure.',
        ],
      },
      {
        h: 'Information stored on your device',
        body: [
          "Your calibration settings (for example, pixels-per-inch and your preferred units) are saved in your browser's local storage so the ruler stays calibrated between visits. This data never leaves your device — it is not sent to us or to any third party. Clearing your browser's site data removes it.",
        ],
      },
      {
        h: 'Cookies',
        body: [
          'The site does not set tracking cookies. The only stored values are the functional preferences described above, kept in local storage rather than cookies.',
        ],
      },
      {
        h: 'Third-party services',
        body: [
          "The site is hosted on Cloudflare Pages, which may process standard technical data (such as IP addresses) to deliver pages securely — this is governed by Cloudflare's own privacy policy. Apart from hosting, no third-party services are embedded in the site.",
        ],
      },
      {
        h: 'Children',
        body: [
          'The site is a general-purpose measuring tool with no age-gated content and no data collection. If you are a parent or guardian with a question, you can reach out through the contact page.',
        ],
      },
      {
        h: 'Changes to this policy',
        body: [
          'If this policy ever changes, the updated version will be posted on this page with a new revision date. Because we collect no contact information, we cannot notify you directly — check back here if it matters to you.',
        ],
      },
      {
        h: 'Contact',
        body: ['Questions about this policy? See the contact page for how to reach us.'],
      },
    ],
  },
  terms: {
    title: 'Terms of Service | Real Online Ruler',
    description:
      'Terms of Service for Real Online Ruler: free use, accuracy expectations for on-screen measurement, and acceptable use.',
    h1: 'Terms of Service',
    lede: 'The plain-language rules for using this free tool.',
    breadcrumb: 'Terms of Service',
    updated: 'Last updated: September 30, 2026',
    intro: [
      "By using Real Online Ruler (the “Site”), you agree to these terms. If you don't agree, please don't use the Site.",
    ],
    sections: [
      {
        h: 'The service',
        body: [
          'The Site provides a free on-screen ruler and related measuring tools. Use of the Site is free, requires no account, and is provided on an “as is” basis.',
        ],
      },
      {
        h: 'Accuracy',
        body: [
          "On-screen measurements depend on your display's calibration. The Site provides calibration tools, but we cannot guarantee that measurements match a physical ruler to any particular tolerance. Do not rely on the Site for measurements where an error could cause harm — medical, engineering, safety, or legal decisions. For critical work, always verify with a physical measuring instrument.",
        ],
      },
      {
        h: 'Acceptable use',
        body: [
          "You agree not to misuse the Site: don't attempt to disrupt it, don't scrape it aggressively, and don't present the Site or its output as your own product. The design, text, and code are the work of FK Digital Media.",
        ],
      },
      {
        h: 'Intellectual property',
        body: [
          "The Site's original content, design, and code are owned by FK Digital Media. You may use the measuring tools freely for personal and commercial measurement tasks; you may not copy the Site's design or text wholesale to create a competing service.",
        ],
      },
      {
        h: 'No warranties',
        body: [
          'The Site is provided without warranties of any kind, express or implied, including accuracy, reliability, or fitness for a particular purpose.',
        ],
      },
      {
        h: 'Limitation of liability',
        body: [
          'To the maximum extent permitted by law, FK Digital Media is not liable for any loss or damage arising from your use of — or inability to use — the Site, including decisions made on the basis of on-screen measurements.',
        ],
      },
      {
        h: 'Changes',
        body: [
          'These terms may be updated from time to time; continued use of the Site after changes are posted constitutes acceptance of the new terms.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact | Real Online Ruler',
    description:
      'Contact Real Online Ruler: reach Firoz Khan (FK Digital Media) through his public profiles for questions, suggestions, or bug reports.',
    h1: 'Contact',
    lede: "Questions, suggestions, or a bug to report? Here's how to reach us.",
    breadcrumb: 'Contact',
    intro: [
      'Real Online Ruler is a one-person project. There is no support desk — but messages sent through the profiles below do get read. The fastest way to get a helpful response is to mention what you were measuring and which browser and device you use.',
    ],
    socialTitle: 'Reach Firoz',
    socialBody: 'Public profiles (fastest response):',
    emailTitle: 'Email us',
    email: 'support@realonlineruler.online',
    noteTitle: 'Before you write',
    noteBody:
      'If your question is about accuracy, try the calibration page first — most accuracy questions are resolved by recalibrating with the browser zoom at 100%.',
  },
};
