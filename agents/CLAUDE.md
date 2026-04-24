@AGENTS.md

# Portfolio

## Stack
- Next.js 16 (App Router), React 19, TypeScript 5
- Tailwind CSS v4 (via `@tailwindcss/postcss` — no `tailwind.config.js`)
- No testing framework yet

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build check
- `npm run lint` — ESLint

## Conventions
- All routes live in `app/`; shared UI goes in `app/components/` (create if needed)
- Default to Server Components — only add `"use client"` when interactivity requires it
- No API routes unless there's a clear reason; prefer server actions for mutations
- Fonts are loaded via `next/font/google` in `app/layout.tsx`

## Known issues
- Project lives on Google Drive — if native bindings break, delete `node_modules`, `package-lock.json`, and `.next`, then `npm install`
