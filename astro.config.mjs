import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap(), tailwind(), solidJs()]
});