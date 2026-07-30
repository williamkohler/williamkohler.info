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
      /** Path under public/, e.g. "/icons/spinbook.png". */
      icon: z.string().optional(),
      /** Optional second mark that cross-fades on hover — only hihat has a pair. */
      iconHover: z.string().optional(),
      /* Spins the mark while the card is hovered, mirroring the blade rotation in
         spinbook itself. Only reads as intentional on a radially symmetric icon,
         so it stays opt-in rather than applying to every project. */
      iconSpinOnHover: z.boolean().default(false),
      /* Inverts a mark that would otherwise vanish on dark — the default suits
         black line art. Anything carrying its own colour (the gold hihats, goblin,
         spinbook) must opt out, or the hue inverts along with the lightness. */
      iconInvertOnDark: z.boolean().default(true),
      /* One filename under src/assets/projects/ (e.g. "spinbook.png"), or several
         for a gallery. Both forms coerce to an array so the card renders one path.
         hihat ships three shots; the single-image projects keep the scalar form. */
      screenshot: z
        .union([z.string(), z.array(z.string()).min(1)])
        .transform((v) => (typeof v === 'string' ? [v] : v))
        .optional(),
      /** Required alongside `screenshot`, one alt per image — see the refines below. */
      screenshotAlt: z
        .union([z.string(), z.array(z.string()).min(1)])
        .transform((v) => (typeof v === 'string' ? [v] : v))
        .optional(),
      order: z.number().int(),
      highlights: z.array(z.string()).default([]),
    })
    .refine((d) => d.repoStatus !== 'private' || d.repo === undefined, {
      message: 'Private projects must not define a repo URL',
    })
    .refine((d) => d.iconHover === undefined || d.icon !== undefined, {
      message: 'iconHover requires icon',
      path: ['iconHover'],
    })
    .refine((d) => !d.iconSpinOnHover || d.icon !== undefined, {
      message: 'iconSpinOnHover requires icon',
      path: ['iconSpinOnHover'],
    })
    /* Both effects fire on the same hover: the mark would spin while cross-fading
       into a second mark that is also spinning. Nothing reads clearly. */
    .refine((d) => !d.iconSpinOnHover || d.iconHover === undefined, {
      message: 'iconSpinOnHover and iconHover cannot both be set',
      path: ['iconSpinOnHover'],
    })
    .refine((d) => d.screenshot === undefined || d.screenshotAlt !== undefined, {
      message: 'A project with a screenshot must also define screenshotAlt',
    })
    /* Counts must match, otherwise a gallery image renders with no alt text — the
       kind of gap that only shows up in a screen reader, never in the browser. */
    .refine((d) => d.screenshot === undefined || d.screenshot.length === d.screenshotAlt!.length, {
      message: 'screenshot and screenshotAlt must have the same number of entries',
      path: ['screenshotAlt'],
    }),
});

export const collections = { work, projects };
