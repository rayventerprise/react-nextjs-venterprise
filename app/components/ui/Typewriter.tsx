"use client";

import { useEffect, useState } from "react";

interface Props {
  words: string[];
  className?: string;
}

// Lightweight typewriter that cycles through words, echoing the
// "I work with React./TypeScript./…" effect on the original site.
export function Typewriter({ words, className }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let delay = deleting ? 55 : 110;

    if (!deleting && text === current) {
      delay = 1400; // pause on full word
    } else if (deleting && text === "") {
      delay = 250;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-primary align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}
