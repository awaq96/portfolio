"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Asher Waqar
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-foreground/60 hover:text-foreground transition-colors p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="2" x2="16" y2="16" />
              <line x1="16" y1="2" x2="2" y2="16" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="5" x2="16" y2="5" />
              <line x1="2" y1="9" x2="16" y2="9" />
              <line x1="2" y1="13" x2="16" y2="13" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-foreground/10 bg-background">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4 text-sm">
            {links.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
