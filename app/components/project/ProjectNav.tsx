import Link from "next/link";
import { ArrowBendUpLeft, ArrowBendUpRight } from "@/app/components/ui/icons";

interface Item {
  label: string;
  title: string;
  href: string;
}

export function ProjectNav({ prev, next }: { prev: Item; next: Item }) {
  return (
    <div className="mt-24 flex items-start justify-between border-t border-[rgba(var(--border))] pt-10">
      <Link href={prev.href} className="group space-y-3 no-underline">
        <div className="text-sm uppercase tracking-widest opacity-60">{prev.label}</div>
        <div className="header-font text-2xl md:text-3xl">{prev.title}</div>
        <ArrowBendUpLeft className="h-16 w-16 text-primary transition-transform duration-300 group-hover:-translate-x-1" />
      </Link>
      <Link href={next.href} className="group space-y-3 text-right no-underline">
        <div className="text-sm uppercase tracking-widest opacity-60">{next.label}</div>
        <div className="header-font text-2xl md:text-3xl">{next.title}</div>
        <div className="flex justify-end">
          <ArrowBendUpRight className="h-16 w-16 text-primary transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
}
