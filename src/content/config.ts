import { defineCollection, z } from 'astro:content';

const imageSchema = z
    .object({
        src: z.string(),
        alt: z.string().optional()
    })
    .optional();
const tagsSchema = z.array(z.string()).default([]);

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: imageSchema,
    pageType: z.enum(['website', 'article']).default('website')
});

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        draft: z.boolean().default(false),
        lastUpdatedAt: z.coerce.date().optional(),
        isFeatured: z.boolean().default(false),
        tags: tagsSchema,
        seo: seoSchema.optional()
    })
});

const pages = defineCollection({
    schema: z.object({
        title: z.string(),
        seo: seoSchema.optional()
    })
});

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.coerce.date(),
        isFeatured: z.boolean().default(false),
        seo: seoSchema.optional()
    })
});

export const collections = { blog, pages, projects };
