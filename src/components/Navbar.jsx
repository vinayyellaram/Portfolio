import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { ModeToggle } from "@components/mode-toggle";

const links = [
  { href: "#about",    label: "About"   },
  { href: "#projects", label: "Work"    },
  { href: "#skills",   label: "Stack"   },
  { href: "#services", label: "Services"},
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [progress,  setProgress]  = useState(0);

  useEffect(() => {
    const handler = () => {
      const el  = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(pct);
      setScrolled(el.scrollTop > 40);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#top"
          className="text-base font-black tracking-tighter text-foreground select-none hover:opacity-60 transition-opacity duration-200"
        >
          VY
        </a>

        {/* Nav links — hidden on mobile */}
        <nav className="flex items-center gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="group relative hidden md:inline-flex px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {label}
              <span className="absolute bottom-1.5 left-4 right-4 h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
            </a>
          ))}

          {/* Hire me CTA */}
          <a
            href="#contact"
            className="md:ml-3 inline-flex items-center gap-1.5 rounded-full border border-foreground/30 px-4 py-1.5 md:px-5 md:py-2 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200"
          >
            Hire me
            <ArrowUpRight className="size-3.5" />
          </a>

          <div className="ml-1.5">
            <ModeToggle />
          </div>
        </nav>
      </div>

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-transparent overflow-hidden">
        <div
          className="h-full bg-foreground/25 transition-[width] duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
