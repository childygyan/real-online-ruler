const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  // Dark mode is toggled via a `dark` class on <html>, set before first paint
  // by an inline script (see src/layouts/BaseLayout.astro). No FOUC.
  darkMode: 'class',
  theme: {
    extend: {
      // "brand" is our own product identity: a deep teal scale derived from
      // Tailwind's cyan — evokes precision instruments, not the reference site.
      colors: {
        brand: colors.cyan,
        accent: colors.amber,
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          '"SF Mono"',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
