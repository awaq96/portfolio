# waqlabs.ai

Personal portfolio for Asher Waqar. Built from scratch with Next.js 16 App Router and React 19. No component library. Live at [waqlabs.ai](https://waqlabs.ai).

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript 5
- **Styles:** Tailwind CSS v4 — uses `@theme` directive, no `tailwind.config.js`
- **Hosting:** Vercel (Hobby), custom domain via Cloudflare (proxy off)
- **Font:** Geist via `next/font`

## Project Structure

```
app/
  layout.tsx          # Root layout — font, ThemeToggle, Nav, Footer
  page.tsx            # Homepage — all sections assembled here
  globals.css         # @theme tokens, base styles
  components/
    home/             # Section components (Intro, Enterprise, Side, GT)
    ui/               # Shared primitives (ProjectCard, SectionHeading, Nav, Footer)
    layout/           # ThemeToggle
  work/[slug]/        # Enterprise project detail pages (statically generated)
  gt/[slug]/          # GT project detail pages (statically generated)

content/
  projects/
    enterprise.ts     # AT&T project data
    gt.ts             # Georgia Tech project data
    side.ts           # Side project data
```

## Notable Implementation Details

**Dark/light mode without FOUC**
`ThemeToggle` uses `useSyncExternalStore` and a `MutationObserver` on `document.documentElement` to track the active theme class. This lets the toggle read the real DOM state rather than a React state variable, which avoids the flash-of-unstyled-content problem that comes from `useState` initializing on the server before the client theme is known. Both `.dark` and `.light` classes are explicitly set so the OS media query does not override the user's choice.

**Static detail pages**
`/work/[slug]` and `/gt/[slug]` use `generateStaticParams` to pre-render one page per project at build time. Project data lives in plain TypeScript files under `content/` — no CMS, no database. Adding a project means adding an entry to the relevant data file.

**Path alias**
`@/*` resolves to the project root per `tsconfig.json`, so imports use `@/content/...` and `@/app/components/...` regardless of where the importing file sits.

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

All routes are statically generated. The build output shows pre-rendered pages for each enterprise and GT project slug.
