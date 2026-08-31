import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shared = {
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
};

const blog = defineCollection({
  loader: glob({ base: './src/content/blogs', pattern: '**/*.{md,mdx}' }),
  schema: z.object(shared),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...shared,
    github: z.string().url(),
  }),
});

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object(shared),
});

const about = defineCollection({
  loader: glob({ base: './src/content/about', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...shared,
    name: z.string(),
    role: z.string(),
    github: z.string().url().optional(),
    email: z.string().email().optional(),
  }),
});

export const collections = { blog, projects, notes, about };
