import { Fragment } from "react";

// Small uppercase meta line for project pages, e.g.
// "Amazon · Senior SDE · Feb 2024 – Oct 2025 · Austin, TX".
export function ProjectMeta({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-widest opacity-60">
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && <span aria-hidden="true">·</span>}
          <span>{item}</span>
        </Fragment>
      ))}
    </div>
  );
}
