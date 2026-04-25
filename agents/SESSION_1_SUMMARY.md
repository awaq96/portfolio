# Session 1 Summary

## What Was Built

### Homepage Scroll Skeleton
Four section components wired into `app/page.tsx` as a continuous scroll layout:
- `app/components/home/Intro.tsx` — hero section with name, label, bio
- `app/components/home/EnterpriseSection.tsx` — pulls from data file, cards link to detail pages
- `app/components/home/SideProjectsSection.tsx` — placeholder content
- `app/components/home/GTProjectsSection.tsx` — placeholder content

### Layout
- `app/components/layout/Nav.tsx` — sticky top nav (Home, Blog, About, Resume PDF link)
- `app/components/layout/Footer.tsx` — GitHub + LinkedIn links
- `app/layout.tsx` — Nav + Footer wired in, metadata updated, FOUC prevention script in `<head>`, `suppressHydrationWarning` on `<html>`

### Dark/Light Mode Toggle
- `app/components/ui/ThemeToggle.tsx` — fixed bottom-right button, uses `useSyncExternalStore` + MutationObserver pattern (no useState/useEffect to avoid React Compiler warning)
- `app/globals.css` — `.dark` and `.light` class overrides declared after `@media (prefers-color-scheme: dark)` so explicit class always wins the cascade
- FOUC prevention script sets `dark` or `light` class on `<html>` before first paint
- Persists to `localStorage`

### Enterprise Project System
**Data file:** `content/projects/enterprise.ts`
- Typed `EnterpriseProject` interface with `slug`, `title`, `company`, `period`, `description`, `tags`, `metrics`, `sections[]`
- `sections[]` is `{ heading: string; content: string }` — content supports multi-paragraph via `\n\n` split

**Detail page:** `app/work/[slug]/page.tsx`
- Dynamic route with `generateStaticParams` (pre-rendered at build)
- Async params pattern for Next.js 16
- Renders metrics pills, tags, and sections with paragraph splitting
- Back link goes to `/#enterprise`

**ProjectCard** (`app/components/ui/ProjectCard.tsx`):
- Accepts optional `href` — internal paths use `next/link`, external use `<a target="_blank">`
- Optional `metrics` row (pill style, different from `tags`)

---

## Current Content Status

### Intro (`app/components/home/Intro.tsx`)
**REAL content.** User edited directly:
> "Software Engineer with 5+ years building high-throughput, distributed systems at AT&T. M.S. Computer Science (AI) candidate at Georgia Tech. Focused on scalable backend systems and applied AI."
- Label: "Lead Software Engineer"

### Enterprise Projects (`content/projects/enterprise.ts`)
All three AT&T projects have **REAL content**:

1. **Mission-Critical Payment Platform** (`att-payment-platform`)
   - Bulk MA re-association flow for 10K-15K lease documents
   - Excel upload/validate (Apache POI highlighting), async job with dynamic thread pool, push notification, status report download
   - Key numbers: $6B payments, 250K contracts, $3M annual savings, 6 months to 1 month

2. **Real Estate Rights Calculator** (`att-cell-tower-calculator`)
   - RERC: verifies cell tower designs stay within square inch lease allotments
   - Rebuilt from MuleSoft + 1500-line Oracle stored proc to Java Spring Boot
   - Parallelized equipment calculations (1 min to 20 sec), fixed underestimation bugs, Kafka integration replacing DB link to Equipment Catalog
   - Key numbers: 70K+ cell sites, $5M prevented overages, $150K operational savings

3. **Microservices Modernization** (`att-microservices-modernization`)
   - 80 services: Java 8 to 17, Spring Boot 2.x to 3.3 (Java 21 + Spring Boot 4 was original target, ruled out by offshore security policy)
   - AI-assisted: GitHub Copilot in VS Code, 4 targeted prompts (POM, AJSC removal, service layer deprecations, Springfox to springdoc-openapi)
   - 70% automated, 30% manual, shared "missed items" MD file with team
   - Key numbers: 3 months vs. 9-12 estimated, 2-4 days to 4 hours per service

### Side Projects (`app/components/home/SideProjectsSection.tsx`)
**PLACEHOLDER** — two fake entries, link to `https://github.com/asherwaqar`

### GT Projects (`app/components/home/GTProjectsSection.tsx`)
**PLACEHOLDER** — two fake entries, no links (academic integrity)

---

## File Structure Created
```
app/
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Intro.tsx
│   │   ├── EnterpriseSection.tsx
│   │   ├── SideProjectsSection.tsx
│   │   └── GTProjectsSection.tsx
│   └── ui/
│       ├── ProjectCard.tsx
│       ├── SectionHeading.tsx
│       └── ThemeToggle.tsx
├── work/
│   └── [slug]/
│       └── page.tsx
├── layout.tsx         (updated)
├── page.tsx           (updated)
└── globals.css        (updated)

content/
└── projects/
    └── enterprise.ts  (real content, all 3 projects)
```

---

## Key Technical Decisions

- **Tailwind v4** uses `@theme` (not `@theme inline`) so utilities reference CSS variables dynamically — required for theme toggling to work
- **Theme toggle** uses `useSyncExternalStore` + MutationObserver, not `useState`/`useEffect` — avoids React Compiler cascading render warning
- **`.light` class** is required (not just removing `.dark`) because `@media (prefers-color-scheme: dark)` stays active regardless of class removal
- **`suppressHydrationWarning`** on `<html>` — FOUC script modifies class before React hydrates, causing intentional mismatch
- **`@/*` path alias** maps to project root (`./`) per `tsconfig.json`
- **No `src/` directory** — routes and components live in `app/`, data in `content/`

---

## Remaining Build Order (from PROJECT_NOTES.md)

- [ ] Side Projects section — real content (link to GitHub repos)
- [ ] GT Projects section — conceptual descriptions, no code links
- [ ] Blog setup — `@next/mdx`, `gray-matter`, first post (async/throughput topic)
- [ ] About page — bio, photography grid, running section
- [ ] Homepage photo in Intro — user wants small headshot; needs photo file in `public/`
- [ ] Metadata polish — OG image, favicon
- [ ] Vercel Analytics — `npm i @vercel/analytics`
- [ ] `.env.local` setup
- [ ] Polish pass — typography, spacing, animations if desired

## Next Session
Starting with **Side Projects**. Same pattern as enterprise: typed data file at `content/projects/side.ts`, cards link to external GitHub repos (no internal detail pages needed unless desired).
