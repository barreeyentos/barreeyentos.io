import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://barreeyentos.io',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
