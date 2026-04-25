export interface SideProject {
  title: string;
  description: string;
  tags: string[];
  href: string;
  metrics?: string[];
}

export const sideProjects: SideProject[] = [
  {
    title: "Financials.AI",
    description:
      "AI-powered personal finance tool. Upload a Chase credit card CSV and get a structured spending breakdown — categories, recommendations, and warnings — backed by a pluggable LLM layer that supports Claude, OpenAI, and Gemini with no code changes between providers.",
    tags: ["Python", "FastAPI", "React", "Vite", "Tailwind CSS", "Claude API"],
    href: "https://github.com/awaq96/Financials.AI",
    metrics: ["3 LLM providers", "FastAPI backend", "React + Vite frontend"],
  },
  {
    title: "This Portfolio",
    description:
      "Hand-built with Next.js 16 App Router and React 19. No component library — custom dark/light mode toggle using useSyncExternalStore and a MutationObserver to avoid FOUC without useState. Static-generated detail pages for each project.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"],
    href: "https://github.com/awaq96/portfolio",
  },
];
