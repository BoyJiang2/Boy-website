import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkStrongInlineCode from './src/utils/remark-strong-inline-code.mjs';

export default defineConfig({
  site: 'https://boy-website.boyjiang2.workers.dev',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMath, remarkStrongInlineCode],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
