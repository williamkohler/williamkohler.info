# williamkohler.info

Personal site and portfolio. Astro + Tailwind CSS v4, statically generated,
deployed to GitHub Pages on every push to `main`.

## Updating content

Content is Markdown — no code changes needed.

**Add a project:** create `src/content/projects/<name>.md`.

```yaml
---
name: project-name
tagline: One-line pitch.
summary: >-
  Two or three sentences.
repo: https://github.com/williamkohler/example   # omit if private
demo: https://example.com                        # omit if none
repoStatus: public                               # or: private
tech: [Elixir, Phoenix]
year: "2026"          # must be quoted — bare numbers fail the schema
order: 5              # display order, low first
highlights:
  - Something notable.
---
```

**Add a job:** create `src/content/work/<company>.md`. A company holds an array
of `roles`, so promotions live in one file (see `mastercard.md` for three).
Use `end: null` for a current role — it renders as "Present".

Two YAML rules worth remembering, both of which fail the build loudly:
- Quote any bullet containing `: ` (colon-space), or YAML reads it as a key.
- Quote `year` values — bare `2026` is a number, and the schema wants a string.

## Commands

| Command | Action |
| :-- | :-- |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` (schema errors surface here) |
| `npm run preview` | Serve the built site locally |
| `node scripts/make-og.mjs` | Regenerate the social card image |

Run `npm run build` before pushing — content schema violations fail the build,
not the dev server, so CI is otherwise the first place you'd find out.

## Deployment

Push to `main` and the workflow in `.github/workflows/deploy.yml` builds and
publishes. `public/CNAME` pins the custom domain and must stay in the repo —
without it GitHub clears the domain setting on each deploy.
