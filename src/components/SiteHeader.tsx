import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Αρχική" },
  { to: "/products", label: "Προϊόντα" },
  { to: "/about", label: "Το κατάστημα" },
  { to: "/contact", label: "Επικοινωνία" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-warm)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3c-1.5 2-3 3-3 6a3 3 0 0 0 6 0c0-3-1.5-4-3-6z" fill="currentColor" />
              <path d="M5 13c0-2 2-4 7-4s7 2 7 4c0 4-3 8-7 8s-7-4-7-8z" fill="currentColor" opacity="0.85" />
              <path d="M12 9c1-1 2-1.5 3.5-1.5" opacity="0.6" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-foreground">ΤΖΑΦΕΡΗΣ</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">φρούτα & λαχανικά</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:2381024884"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            2381 024884
          </a>
          <button
            className="md:hidden rounded-full p-2 hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Μενού"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground/80"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
