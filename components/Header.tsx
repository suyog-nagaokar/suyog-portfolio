"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#ask", label: "Ask the AI" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base/90 backdrop-blur border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight text-ink flex items-center gap-2">
          <span className="text-amber">▸</span>
          <span className="font-medium">suyog<span className="text-ink-faint">.nagaokar</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] text-ink-dim">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-amber transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:suyognn@gmail.com"
          className="font-mono text-[13px] px-4 py-2 border border-hairline-bright hover:border-amber hover:text-amber transition-colors text-ink-dim"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
