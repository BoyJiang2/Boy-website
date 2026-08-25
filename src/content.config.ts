import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shared = {
  title: z.string(),
  summary: z.string(),
  published: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
};

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ ...shared }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...shared,
    status: z.string().default('进行中'),
    link: z.string().optional(),
    repo: z.string().optional(),
    order: z.number().default(99),
  }),
});

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...shared,
    type: z.enum(['课程', '论文', '技术', '工具']).default('技术'),
    series: z.string().optional(),
    order: z.number().default(99),
    course: z.string().optional(),
    period: z.string().optional(),
    duration: z.string().optional(),
    authors: z.string().optional(),
    venue: z.string().optional(),
    year: z.number().optional(),
    status: z.string().optional(),
  }),
});

export const collections = { blog, projects, notes };
