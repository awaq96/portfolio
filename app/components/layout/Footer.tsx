export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-10 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-center sm:justify-start text-sm text-foreground/40">
        <span>© {new Date().getFullYear()} Asher Waqar</span>
      </div>
    </footer>
  );
}
