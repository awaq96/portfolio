# Portfolio Project Notes

Personal portfolio site for Asher Waqar. Live at [waqlabs.ai](https://waqlabs.ai).

---

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript 5
- **Styling:** Tailwind CSS v4 — uses `@theme` (not `@theme inline`), no `tailwind.config.js`
- **Blog:** `next-mdx-remote` + `gray-matter` (MDX files in `content/blog/`)
- **OG Image:** `next/og` `ImageResponse` with `runtime = "edge"`
- **Hosting:** Vercel (Hobby tier), auto-deploys from `main`
- **Domain / DNS:** Cloudflare — DNS only (grey cloud, proxy OFF)
- **Source control:** GitHub (public repo)
- **Path alias:** `@/*` maps to project root per `tsconfig.json`
- **No `src/` directory** — routes in `app/`, data in `content/`, utilities in `lib/`

---

## Deployment

- Push to any branch → Vercel preview deployment at a unique URL
- Push/merge to `main` → production deploy to waqlabs.ai
- Failed builds do NOT update production
- Rollback: Vercel dashboard → Deployments → "Promote to Production"
- `www.waqlabs.ai` → 308 permanent redirect → `waqlabs.ai`
- **Cloudflare proxy must stay OFF (grey cloud)** — orange cloud causes SSL/redirect issues with Vercel

---

## Current Status: v1.0.0 Live

All core pages shipped. Versioning: `v1.x.0` for features, `v1.0.x` for fixes.

### What's built
- Homepage continuous scroll: Intro, Enterprise projects, Side projects, GT projects
- Dark/light mode toggle (persists to localStorage, no FOUC)
- Enterprise project detail pages (`/work/[slug]`) — 3 AT&T projects with full content
- Side projects section — real content, links to GitHub repos
- About page — bio, profile photo, hobby photo grid, contact
- Blog — index (`/blog`) + post pages (`/blog/[slug]`) via MDX
- First blog post: *How I Used AI to Migrate a Legacy Java Codebase*
- Open Graph image (auto-shown when URL is shared on iMessage, WhatsApp, etc.)
- Mobile nav with icons for Blog and About links

### Remaining
- **GT projects section** — still placeholder; conceptual descriptions only (no code links)
- **Favicon** — still default Next.js; replace via realfavicongenerator.net, drop in `public/`
- **Vercel Analytics** — `npm i @vercel/analytics`, add `<Analytics />` to `app/layout.tsx`
- **Homepage headshot** — Intro section has no photo yet

---

## File Structure

```
app/
├── components/
│   ├── layout/         Nav.tsx, Footer.tsx
│   ├── home/           Intro, EnterpriseSection, SideProjectsSection, GTProjectsSection
│   └── ui/             ProjectCard, SectionHeading, ThemeToggle
├── work/[slug]/        page.tsx — enterprise project detail pages
├── about/              page.tsx
├── blog/
│   ├── page.tsx        index
│   └── [slug]/         page.tsx — MDX post renderer
├── opengraph-image.tsx
├── layout.tsx
├── page.tsx
└── globals.css

content/
├── projects/
│   ├── enterprise.ts   typed data for AT&T projects
│   └── side.ts         typed data for side projects
└── blog/
    └── *.mdx           one file per post

lib/
└── blog.ts             reads content/blog/, parses frontmatter, returns sorted posts

public/
└── photos/
    ├── profile.jpg
    ├── hobby-1.JPG – hobby-3.JPG   (uppercase — must match exactly in code)
    └── hobby-4.jpg – hobby-6.jpg
```

---

## Key Technical Decisions

**Tailwind v4:** uses `@theme` (not `@theme inline`) so utilities reference CSS variables dynamically. Required for theme toggling to work correctly.

**Theme toggle:** uses `useSyncExternalStore` + MutationObserver, not `useState`/`useEffect` — avoids React Compiler cascading render warning.

**`.light` class is required** (not just removing `.dark`) because `@media (prefers-color-scheme: dark)` stays active regardless of class removal. Both `.dark` and `.light` must be declared in `globals.css`.

**`suppressHydrationWarning` on `<html>`:** FOUC prevention script modifies the class before React hydrates, causing an intentional mismatch.

**Blog uses `next-mdx-remote/rsc`** not `@next/mdx` plugin — posts live in `content/blog/`, not in `app/`. The plugin approach expects MDX files to be the routes themselves.

**Image case sensitivity:** macOS is case-insensitive; Vercel/Linux is not. Files committed as `.JPG` will 404 in production if referenced as `.jpg` in code. Always match casing exactly.

**Project data in typed `.ts` files** under `content/projects/`, not hardcoded in JSX. Adding a project = one-file edit to the data file.

**Blog frontmatter shape:**
```
---
title: "..."
date: "YYYY-MM-DD"
description: "..."
readTime: "X min read"
---
```

**Enterprise project `sections[]`** is `{ heading: string; content: string }` — content supports multi-paragraph via `\n\n` split in the detail page renderer.

---

## Important Constraints

- **GT code is NOT public.** Academic integrity policy. Describe GT projects conceptually only — no repo links, no code.
- **AT&T code is NOT public.** Describe by problem/outcome/scale. Numbers make it memorable; sanitize before publishing.
- **No secrets in git.** `.env.local` for local config, Vercel dashboard for production env vars.

---

## Useful Commands

```bash
npm run dev        # local dev at localhost:3000
npm run build      # production build check
npx tsc --noEmit   # type check without building
```
