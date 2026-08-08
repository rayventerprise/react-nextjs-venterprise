"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Wraps content in a spring that reacts to scroll velocity, giving a gentle
// "floating in the air" bounce: scrolling injects impulse, then it settles
// back to rest. Runs only while in motion; static for reduced-motion.
export function ScrollFloat({
  children,
  intensity = 1,
  className = "",
}: {
  children: ReactNode;
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastY = window.scrollY;
    let offset = 0;
    let vel = 0;
    let raf = 0;
    let running = false;

    const loop = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      vel += -delta * 0.11 * intensity; // scroll pushes the card (lags)
      vel += -offset * 0.1; // spring back toward rest
      vel *= 0.82; // damping
      offset += vel;
      offset = Math.max(-18, Math.min(18, offset));

      if (Math.abs(offset) < 0.08 && Math.abs(vel) < 0.08 && delta === 0) {
        el.style.transform = "";
        running = false;
        return; // settled and idle — stop the loop
      }

      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const ensure = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    window.addEventListener("scroll", ensure, { passive: true });
    return () => {
      window.removeEventListener("scroll", ensure);
      cancelAnimationFrame(raf);
    };
  }, [intensity]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
