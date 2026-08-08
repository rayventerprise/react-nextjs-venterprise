import type { ReactNode } from "react";

interface Props {
  name: string;
  icon: ReactNode;
  items: string[];
}

export function TechBlock({ name, icon, items }: Props) {
  return (
    <div className="card flex-1 p-6">
      <div className="mb-4 flex items-center gap-2 text-primary">
        {icon}
        <h3 className="header-font text-lg uppercase tracking-wide text-current">{name}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
