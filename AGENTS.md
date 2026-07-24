## This project

Personal portfolio site. Content lives in Markdown collections under
`src/content/` (`projects/`, `work/`); schemas are in `src/content.config.ts`.
See README.md for the frontmatter shape.

Conventions that are easy to get wrong here:

- **Tailwind v4, no config file.** Dark mode is `@custom-variant dark` in
  `src/styles/global.css`, not a JS `darkMode` key. Color tokens live in a
  `@theme inline` block — plain `@theme` would inline the values at build time
  and the `.dark` swap would silently stop working.
- **The theme script must stay `is:inline` and in `<head>`.** Bundling it defers
  execution past first paint and causes a flash on dark loads.
- **Dates are formatted with `timeZone: 'UTC'`** (`src/lib/dates.ts`). Without
  it, `2018-06-01` renders as "May 2018" in EST.
- **Run `npm run build` before pushing** — content schema violations fail the
  build, not `dev`.
- `public/CNAME` pins the custom domain and must not be deleted.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
