"use client";

import { useEffect, useRef } from "react";
import { brand } from "@/lib/site";

// An animated vertical "trace" in the left margin — a gently meandering red
// line with a glowing pulse travelling down it, echoing the hero's canvas
// motion. Fixed and decorative; fades in only after the hero has scrolled
// past. Shown on xl+ where the centered content leaves clear left margin.
export function LeftTrace() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let raf = 0;
    let t = 0;

    const xAt = (y: number) => {
      const cx = W * 0.5;
      return (
        cx +
        9 * Math.sin(y * 0.012 + t) +
        4.5 * Math.sin(y * 0.006 - t * 0.6)
      );
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const line = (offset: number, alpha: number, lw: number) => {
      ctx.beginPath();
      for (let y = 0; y <= H; y += 6) {
        const x = xAt(y) + offset;
        if (y === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(${brand.rgb}, ${alpha})`;
      ctx.lineWidth = lw;
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      line(6, 0.12, 1);
      line(0, 0.38, 1.4);

      // Glowing pulse travelling down the main line, looping.
      const py = ((t * 0.05) % 1.2) * H;
      const px = xAt(py);
      const g = ctx.createRadialGradient(px, py, 0, px, py, 9);
      g.addColorStop(0, "rgba(232, 54, 54, 0.9)");
      g.addColorStop(1, "rgba(232, 54, 54, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px, py, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255, 224, 224, 0.95)";
      ctx.beginPath();
      ctx.arc(px, py, 1.7, 0, Math.PI * 2);
      ctx.fill();
    };

    const loop = () => {
      t += 0.03;
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduce) draw();
    else loop();

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  // Fade in once the hero has (nearly) scrolled past
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const hero = document.getElementById("hero");
      const vh = window.innerHeight;
      const heroTop = hero ? hero.offsetTop : 0;
      const heroHeight = hero ? hero.offsetHeight : vh;
      const heroBottom = heroTop + heroHeight;
      // Fade reaches 100% by the hero's halfway point.
      const progress = (window.scrollY - heroTop) / (heroHeight * 0.5);
      el.style.opacity = Math.min(1, Math.max(0, progress)).toFixed(3);
      // Clip the top so the line always starts at the hero's bottom edge.
      const topInset = Math.max(0, heroBottom - window.scrollY);
      el.style.clipPath = `inset(${topInset}px 0 0 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none fixed left-4 top-0 z-[-10] h-screen w-16 opacity-0 sm:left-6"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
