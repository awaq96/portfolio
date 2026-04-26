"use client";

import { useSyncExternalStore } from "react";

function subscribe(cb: () => void) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.classList.toggle("light", !isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      onClick={() => applyTheme(!dark)}
      aria-label="Toggle theme"
      className="fixed bottom-6 right-6 z-50 w-9 h-9 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors flex items-center justify-center text-base"
    >
      {dark ? "☀" : "☽"}
    </button>
  );
}
