# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at localhost:3000
npm run generate  # build static site to .output/public/
npm run build     # build for SSR (not used for deploy)
npm run preview   # preview the generated static site
```

## Architecture

Single-page portfolio built with **Nuxt 3 (SSG)** + **Tailwind CSS**. All content lives on one scrollable page (`pages/index.vue`) with anchor-based navigation.

**Content data** lives in `content/*.ts` — typed TypeScript files that are the only place to edit copy, job history, projects, and interests. Components import directly from these files; there is no CMS or API.

**Components** are split into:
- `components/sections/` — one file per page section (Hero, About, Experience, Projects, Interests)
- `components/ui/` — shared layout pieces (NavBar, Footer)

Nuxt auto-imports all components, so no explicit imports are needed in templates.

**Dark theme** is applied globally via `class="dark"` on `<html>` (set in `nuxt.config.ts` → `app.head.htmlAttrs`). Tailwind's `darkMode: 'class'` strategy is configured in `tailwind.config.ts`. The accent color is `#7c3aed` (violet).

**Deployment** uses the `github-pages` Nitro preset — `npm run generate` outputs to `.output/public/`. The GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on push to `main` and deploys that directory to the `gh-pages` branch via `peaceiris/actions-gh-pages`.
