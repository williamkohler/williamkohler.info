import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * A single role held at one company.
 * `end: null` means "Present" — nullable rather than optional so the frontmatter
 * has to say so explicitly, instead of a forgotten field reading as current.
 */
const role = z.object({
  title: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date().nullable(),
  highlights: z.array(z.string()).default([]),
});

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/[^_]*.md' }),
  schema: z
    .object({
      company: z.string(),
      location: z.string(),
      /** Path under public/, e.g. "/logos/mastercard.svg". */
      logo: z.string().optional(),
      /** Set for dark/black artwork that would disappear on a dark background. */
      invertOnDark: z.boolean().default(false),
      /** Company-level span, so sorting never depends on digging through roles. */
      start: z.coerce.date(),
      end: z.coerce.date().nullable(),
      /** Context line, e.g. "Joined via the SessionM acquisition; promoted twice." */
      note: z.string().optional(),
      /** Mastercard has 3, Kurland 2, Youth Inc 1. min(1) keeps render paths safe. */
      roles: z.array(role).min(1),
      /** 1 = most recent. */
      order: z.number().int(),
    })
    .refine((d) => d.roles.every((r) => r.start >= d.start), {
      message: 'A role starts before the company start date',
    })
    .refine((d) => d.end === null || d.roles.every((r) => r.end !== null), {
      message: 'A past company cannot contain a current (end: null) role',
    }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/[^_]*.md' }),
  schema: z
    .object({
      name: z.string(),
      /** One-line pitch for the card header. */
      tagline: z.string(),
      /** 2-3 sentences shown on the card. */
      summary: z.string(),
      /** Independent: hihat has demo only, goblin/hot-dogs repo only. */
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      /** Explains an absent repo link so it doesn't read as an oversight. */
      repoStatus: z.enum(['public', 'private']).default('public'),
      tech: z.array(z.string()).min(1),
      year: z.string(),
      /** Flagship gets the full-width treatment. */
      /** Two icon paths that cross-fade on hover, e.g. hihat's open/closed marks. */
      icon: z.string().optional(),
      iconHover: z.string().optional(),
      order: z.number().int(),
      highlights: z.array(z.string()).default([]),
    })
    .refine((d) => d.repoStatus !== 'private' || d.repo === undefined, {
      message: 'Private projects must not define a repo URL',
    }),
});

export const collections = { work, projects };
