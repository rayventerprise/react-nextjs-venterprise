"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/app/components/ui/ThemeToggle";
import { SocialLinks } from "@/app/components/ui/SocialLinks";
import { navLinks } from "@/lib/site";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // backdrop-blur-0 + will-change keep the backdrop-filter layer warm from
  // first paint, so scrolling past the threshold flips to backdrop-blur-xl
  // without a one-time layer-promotion stall. transition-colors (not
  // transition-all) means only the tint/border fade — the blur never animates,
  // which would otherwise re-raster the whole bar every frame on first scroll.
  return (
    <header
      className={`sticky top-0 z-50 [will-change:backdrop-filter] transition-colors duration-300 ${
        scrolled
          ? "border-b border-[rgba(var(--border))] bg-[rgb(var(--background))]/80 backdrop-blur-xl"
          : "border-b border-transparent backdrop-blur-0"
      }`}
    >
      <nav className="content-container flex h-24 items-center justify-between">
        <Link
          href="/"
          className="header-font group flex items-center text-lg tracking-tight no-underline"
          onClick={() => setOpen(false)}
        >
          <span className="transition-colors group-hover:text-primary">RAYMOND VANDENBERG</span>
          <span className="ml-1 inline-block h-[1.05em] w-[3px] animate-blink bg-primary" aria-hidden="true" />
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group relative block h-5 overflow-hidden font-mono text-sm uppercase tracking-wide no-underline"
                >
                  <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-5">
                    <span className="flex h-5 items-center">{l.label}</span>
                    <span className="flex h-5 items-center text-primary">{l.label}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mx-1 hidden h-5 w-px bg-[rgba(var(--border))] md:block" aria-hidden="true" />

          <div className="hidden items-center md:flex">
            <SocialLinks itemClassName="inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-primary/10 hover:text-primary" />
          </div>

          <ThemeToggle />

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-primary/10 md:hidden"
          >
            <span className="hamburger" data-open={open}>
              <span className="bar top" />
              <span className="bar mid" />
              <span className="bar bot" />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[rgba(var(--border))] bg-[rgb(var(--background))] transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-80" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="content-container flex flex-col py-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="header-font block py-3 text-xl no-underline transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex items-center gap-3 border-t border-[rgba(var(--border))] pt-4">
            <SocialLinks
              itemClassName="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[rgba(var(--border))] transition-colors hover:border-primary hover:text-primary"
              onNavigate={() => setOpen(false)}
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
