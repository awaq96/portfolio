# Portfolio Project Notes

Personal portfolio site for Asher Waqar. Live at [waqlabs.ai](https://waqlabs.ai).

---

## Stack

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (Hobby tier)
- **Domain registrar / DNS:** Cloudflare
- **Source control:** GitHub (public repo: `portfolio`)
- **Editor:** VS Code with Claude Code extension
- **Runtime:** Node.js LTS via nvm, on Apple Silicon Mac

---

## Infrastructure Status: Done

### Local environment
- [x] Homebrew installed
- [x] Node.js (LTS) via nvm
- [x] Git configured with GitHub identity
- [x] GitHub CLI (`gh`) authenticated
- [x] VS Code + Claude Code extension

### Project bootstrapped
- [x] `npx create-next-app@latest portfolio` with TypeScript, ESLint, Tailwind, `src/`, App Router, Turbopack
- [x] Hello World rendered at `src/app/page.tsx`
- [x] Pushed to public GitHub repo

### Deployment pipeline
- [x] Vercel account connected to GitHub
- [x] Project imported and auto-deploying
- [x] Production URL: `waqlabs.ai`
- [x] `www.waqlabs.ai` → 308 permanent redirect → `waqlabs.ai`
- [x] HTTPS auto-provisioned by Vercel (Let's Encrypt), HTTP auto-upgrades
- [x] Cloudflare DNS records set to **DNS only** (grey cloud, not proxied)

### CI/CD behavior
- Push to any branch → Vercel builds a **preview deployment** at a unique URL
- Push to `main` → Vercel builds and deploys to **production** (waqlabs.ai)
- Failed builds (TypeScript errors, etc.) do NOT update production
- Rollback: Vercel dashboard → Deployments → "Promote to Production" on a previous good build

---

## Immediate Next Steps

### 1. Set up `.env.local` (current task)
- Create `.env.local` at project root (NOT in `src/`)
- Confirm `.env*.local` is in `.gitignore` (Next.js default — verify with `cat .gitignore`)
- Even with no secrets yet, establish the file as the home for any future config
- Reference env vars in code via `process.env.VARIABLE_NAME`
- For client-side exposure, prefix with `NEXT_PUBLIC_` (be careful — these ship to the browser)
- After deploying anything that needs env vars, also add them in Vercel: Project Settings → Environment Variables

### 2. Polish basics (small, high-value)
- Replace default favicon (use realfavicongenerator.net, drop files in `public/`)
- Add `metadata` export in `src/app/layout.tsx` (title, description, OpenGraph image at `public/og-image.png`)
- Install Vercel Analytics: `npm i @vercel/analytics`, add `<Analytics />` to root layout
- Update `README.md` (replace Next.js boilerplate with: what it is, stack, local dev instructions, link to live site)

### 3. Decide content strategy
- AT&T experience bullets (highest-leverage thing on the whole site)
- Side project descriptions (link to public GitHub repos)
- GT project descriptions (**conceptual only — do NOT publish GT code, academic integrity policy**)
- Bio for `/about` page
- First blog post topic: async functions / throughput optimization

---

## Planned Site Structure

```
/                 → continuous scroll: intro, enterprise projects, side projects, GT projects
/about            → bio + photography + running
/blog             → post list
/blog/[slug]      → individual posts (MDX)
```

Nav: Home, Blog, About, Resume (PDF link)

### Folder structure to build toward
```
src/
├── app/
│   ├── layout.tsx           # nav, footer, metadata, fonts
│   ├── page.tsx             # home (composes scroll sections)
│   ├── globals.css
│   ├── about/page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── layout/              # Nav, Footer
│   ├── home/                # Intro, EnterpriseSection, SideProjectsSection, GTProjectsSection
│   ├── about/               # Bio, PhotoGrid, RunningSection
│   └── ui/                  # ProjectCard, SectionHeading, Tag
├── content/
│   ├── projects/            # typed data: enterprise.ts, side.ts, gt.ts
│   └── blog/                # *.mdx files with frontmatter
└── lib/
    ├── blog.ts              # MDX loading + frontmatter parsing
    └── types.ts             # shared interfaces (Project, Post)
```

**Key principle:** project data lives in typed `.ts` files under `src/content/projects/`, NOT hardcoded in JSX. Each section component imports the array and maps over `<ProjectCard />`. Adding a project later = one-file edit.

---

## Build Order (after env setup)

1. **Homepage scroll skeleton** — four section components with placeholder content, deploy, confirm visual on real domain
2. **Real content for Intro + Enterprise** — highest-leverage writing
3. **Blog setup** — `@next/mdx`, `gray-matter` for frontmatter, one real post (async/throughput)
4. **About page** — bio + photography grid (use Next `<Image>`)
5. **Side projects + GT projects sections** — fill in real content
6. **Running section** — last, most optional
7. **Polish pass** — typography, spacing, dark mode toggle if desired, animations if desired

---

## Things to Skip on v1

- CMS (use MDX files in repo)
- Contact form backend (use `mailto:` link)
- Custom cursor / 3D hero / heavy animations
- Comments on blog posts
- Newsletter signup
- Image CDN (use `public/` until library grows past ~50 photos)
- Custom email at @waqlabs.ai (set up later via Cloudflare Email Routing if wanted)
- Tests, monitoring, observability (overkill at this scale)

---

## Important Constraints

- **GT code is NOT public.** Academic integrity policy. Describe GT projects conceptually only; do not link repos or paste code.
- **AT&T code is NOT public.** Describe by problem/scale/tech/outcome. Numbers (latency, throughput, users) make bullets memorable — sanitize as needed.
- **No secrets in git.** `.env.local` for local secrets, Vercel dashboard for deployment secrets.
- **Cloudflare proxy stays OFF (grey cloud)** for all records pointing at Vercel. Orange cloud causes SSL/redirect issues.

---

## Useful Commands

```bash
# Local dev
npm run dev                          # localhost:3000

# Git workflow
git checkout -b feature-name
git add . && git commit -m "..."
git push                             # auto-creates Vercel preview
# merge to main → auto-deploys to production

# DNS sanity checks
dig waqlabs.ai +short
dig www.waqlabs.ai +short
dig @1.1.1.1 waqlabs.ai +short       # query Cloudflare directly, bypass local cache

# Flush macOS DNS cache
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

---

## Handoff Note for Claude Code

When opening this project in Claude Code for the first time, consider generating a `CLAUDE.md` file at the repo root with project conventions, stack info, and goals so context isn't rediscovered every session. This `PROJECT_NOTES.md` can serve as the seed.
