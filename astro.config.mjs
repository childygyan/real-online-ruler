// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// Production domain: TBD (Firoz has not chosen a custom domain yet).
// Temporary Pages origin used for sitemap/canonical generation.
export default defineConfig({
  site: 'https://real-online-ruler-30y.pages.dev',
  output: 'static',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // /404/ is an error page, not content — keep it out of the sitemap.
      filter: (page) => !/\/404\//.test(page),
    }),
  ],
});
