import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Asher Waqar
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/blog" className="text-foreground/60 hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
            About
          </Link>
          <a href="/resume.pdf" className="text-foreground/60 hover:text-foreground transition-colors">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
