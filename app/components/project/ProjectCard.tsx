import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/app/components/ui/icons";

interface Props {
  href: string;
  gradient: string;
  title: string;
  description: string;
  stack: string[];
  visual: ReactNode;
}

export function ProjectCard({ href, gradient, title, description, stack, visual }: Props) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group relative flex min-h-[420px] flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-10 text-white no-underline shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:flex-row md:p-14`}
    >
      {/* Sheen on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(600px circle at 30% 20%, rgba(255,255,255,0.18), transparent 40%)" }} />

      <div className="relative z-10 max-w-md space-y-6">
        <h3 className="header-font text-4xl uppercase md:text-5xl">{title}</h3>
        <p className="text-lg leading-relaxed text-white/90">{description}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="stack-badge">{s}</span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 pt-2 font-semibold uppercase tracking-wide text-white/90 transition-colors group-hover:text-white">
          View project
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>

      <div className="relative z-10 flex shrink-0 items-center justify-center transition-transform duration-500 group-hover:scale-105">
        {visual}
      </div>
    </Link>
  );
}
