import Link from "next/link";
import { SocialLinks } from "@/app/components/ui/SocialLinks";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-24 border-t border-[rgba(var(--border))] bg-[rgb(var(--background))]">
      <div className="content-container flex flex-col items-center gap-6 py-12 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <Link href="/" className="header-font text-lg no-underline hover:text-primary">
            {siteConfig.name.toUpperCase()}
          </Link>
          <p className="mt-1 text-sm opacity-60">© {year} · Built with Next.js &amp; TypeScript</p>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="link-underline">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SocialLinks itemClassName="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(var(--border))] transition-colors hover:border-primary hover:text-primary" />
        </div>
      </div>
    </footer>
  );
}
