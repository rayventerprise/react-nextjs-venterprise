"use client";

import { useEffect, useRef } from "react";
import { brand } from "@/lib/site";

interface Particle {
  x: number;
  y: number;
  life: number;
}

// Flow field: particles drift along an invisible sine-based vector field,
// leaving fading ribbon trails that form organic streams. Trails fade via
// destination-out compositing so nothing tints the page in either theme.
// Decorative: behind the hero, ignores pointer events, static for
// reduced-motion.
export function HeroFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let t = 0;
    let particles: Particle[] = [];

    const field = (x: number, y: number) =>
      (Math.sin(x * 0.006) + Math.cos(y * 0.006) + Math.sin((x + y) * 0.004 + t)) * Math.PI;

    const spawn = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      life: 60 + Math.random() * 90,
    });

    const seed = () => {
      const count = Math.max(120, Math.min(320, Math.round((width * height) / 6500)));
      particles = Array.from({ length: count }, spawn);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      seed();
    };

    const step = () => {
      // Fade previous frame toward transparent (trail effect).
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      ctx.strokeStyle = `rgba(${brand.rgb}, 0.42)`;
      ctx.lineWidth = 1;
      const speed = 1.3;

      for (const p of particles) {
        const a = field(p.x, p.y);
        const nx = p.x + Math.cos(a) * speed;
        const ny = p.y + Math.sin(a) * speed;

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx;
        p.y = ny;
        p.life -= 1;

        if (p.life <= 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          Object.assign(p, spawn());
        }
      }
    };

    const loop = () => {
      t += 0.0015;
      step();
      raf = requestAnimationFrame(loop);
    };

    const drawStatic = () => {
      // One short streak per particle, no motion.
      ctx.strokeStyle = `rgba(${brand.rgb}, 0.3)`;
      ctx.lineWidth = 1;
      for (const p of particles) {
        const a = field(p.x, p.y);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + Math.cos(a) * 10, p.y + Math.sin(a) * 10);
        ctx.stroke();
      }
    };

    resize();
    if (reduce) drawStatic();
    else loop();

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) drawStatic();
    });
    ro.observe(parent);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
