import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shared = {
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
};

const articleMeta = {
  published: z.coerce.date().optional(),
  updated: z.coerce.date().optional(),
};

const blog = defineCollection({
  loader: glob({ base: './src/content/blogs', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ ...shared, ...articleMeta }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...shared,
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ ...shared, ...articleMeta }),
});

export const collections = { blog, projects, notes };
