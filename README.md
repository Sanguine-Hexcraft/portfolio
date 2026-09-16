# Portfolio

Personal portfolio site — a single scrollable page served at [witmer.dev](https://witmer.dev).

Built with **Nuxt 3** in static-site mode (SSG) and **Tailwind CSS**, deployed to GitHub Pages
automatically on every push to `main`.

## Quick start

```bash
npm install
npm run dev       # dev server at localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload at `localhost:3000` |
| `npm run generate` | Build the static site into `.output/public/` |
| `npm run preview` | Serve the generated output locally — use this to sanity-check a build before pushing |
| `npm run build` | SSR build. Not used for deployment; `generate` is the one that matters |

## How the site is structured

Everything renders from one page. There is no router, no CMS, and no API — the nav links are
plain anchor scrolls.

```
pages/index.vue          the entire site: stacks the sections in order
content/*.ts             all copy and data (the only files you edit to change text)
components/sections/     one component per page section
components/ui/           NavBar, Footer, SectionLabel
assets/css/main.css      global styles
public/                  copied verbatim into the build output
```

`pages/index.vue` composes the page as:

```
NavBar → CharacterHeader → About → Experience → Projects → Skills → Footer
```

Components are auto-imported. `nuxt.config.ts` registers `components/sections` and
`components/ui` with `pathPrefix: false`, so `<AboutSection />` works in a template with no
import statement.

### Theming

Dark mode is applied globally and is not toggleable — `nuxt.config.ts` sets
`app.head.htmlAttrs: { class: 'dark' }` on `<html>`, and `tailwind.config.ts` uses Tailwind's
`darkMode: 'class'` strategy. The accent color is violet, `#7c3aed`.

## Editing content

All copy lives in typed TypeScript files under `content/`. Components import these directly, so
adding an entry to an array is the whole edit — no template changes needed.

| File | Exports | Shape |
| --- | --- | --- |
| `content/experience.ts` | `experience` | `role`, `company`, `location`, `startDate`, `endDate` (`null` = current), `description`, `bullets[]`, `skills[]` |
| `content/projects.ts` | `projects` | `title`, `description`, `tags[]`, `url`, `repo`, `featured` |
| `content/skills.ts` | `skillGroups` | `category`, `skills[]` |
| `content/interests.ts` | `interests` | `label`, `emoji` |

To add a job or project: open the matching file, append an object to the array, commit, push.

> **Note:** `content/interests.ts` and `components/sections/InterestsSection.vue` both exist but
> `InterestsSection` is not currently rendered in `pages/index.vue`. Add it to the template to
> bring the section back.

Images go in `public/images/` and are referenced from root, e.g. `/images/me.png`.

## Deployment

Push to `main`. That's the entire process.

```bash
git push origin main
```

`.github/workflows/deploy.yml` then runs on GitHub Actions:

1. Checkout, set up Node 20, `npm ci`
2. `npm run generate` with `NUXT_APP_BASE_URL=/`
3. Publish `.output/public/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`

The workflow can also be triggered manually from the Actions tab (`workflow_dispatch`).

Nitro's `github-pages` preset handles the Pages-specific build details. `gh-pages` is a generated
branch — never commit to it by hand, since each deploy replaces it.

## Custom domain

Three pieces have to line up. Two of them live in this repo:

**1. `public/CNAME`** contains the bare domain. Nuxt copies `public/` verbatim into the build
output, so this file lands at the root of every deploy. It has to be committed here: because each
deploy replaces the `gh-pages` branch wholesale, a CNAME that only exists in GitHub's Pages
settings gets wiped on the next push.

**2. `baseURL: '/'`** in `nuxt.config.ts`, matched by `NUXT_APP_BASE_URL: /` in the workflow. A
project site served from `<user>.github.io/<repo>/` needs the repo name as an asset prefix; an
apex domain serves from root, so that prefix would break every CSS and JS path. Both values must
agree.

**3. DNS at the registrar** — not in this repo, and the part you would have to re-enter by hand:

- Apex (`witmer.dev`) → `A` records pointing at GitHub's published Pages IP addresses
  (see [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) for the current set)
- `www` → `CNAME` pointing at the `github.io` host for this account

Verify what is currently live with:

```bash
dig +short witmer.dev A
dig +short www.witmer.dev CNAME
```

`public/.nojekyll` tells GitHub Pages to skip Jekyll processing, which would otherwise ignore
build files and directories beginning with an underscore.

## Troubleshooting

**Unstyled page or 404s on CSS/JS after deploy** — `baseURL` and `NUXT_APP_BASE_URL` have
diverged, or one of them regained a `/portfolio/` prefix. Both should be `/`.

**Custom domain reset to `github.io` after a deploy** — `public/CNAME` is missing or was not
copied into the build. Confirm it exists and run `npm run generate`, then check for
`.output/public/CNAME`.

**A content change does not appear** — confirm the section component is actually rendered in
`pages/index.vue`, then check the Actions tab for a failed deploy run.
