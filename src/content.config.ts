import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const courses = defineCollection({
  loader: glob({ base: './src/content/courses', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    course: z.string(),
    period: z.string(),
    duration: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const papers = defineCollection({
  loader: glob({ base: './src/content/papers', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['读完', '精读中', '待读']).default('待读'),
    order: z.number(),
  }),
});

export const collections = { courses, papers };
