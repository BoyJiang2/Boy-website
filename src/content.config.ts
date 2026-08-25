import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shared = {
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
};

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ ...shared }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ ...shared }),
});

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ ...shared }),
});

export const collections = { blog, projects, notes };
