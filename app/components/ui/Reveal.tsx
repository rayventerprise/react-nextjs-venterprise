"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  // Stagger delay in ms
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}

// Wraps content in a scroll-reveal. Adds `is-visible` when it enters
// the viewport, triggering the fade-up animation defined in globals.css.
export function Reveal({ children, className = "", delay = 0, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
