"use client";

import Image from "next/image";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { ArrowIcon } from "@/app/components/ui/icons";

export interface LightboxImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const LightboxCtx = createContext<{ open: (src: string) => void }>({ open: () => {} });
export const useLightbox = () => useContext(LightboxCtx);

// Wrap any visual to make it open the lightbox at its image.
export function LightboxTrigger({
  src,
  className = "",
  children,
}: {
  src: string;
  className?: string;
  children: ReactNode;
}) {
  const { open } = useLightbox();
  return (
    <button
      type="button"
      onClick={() => open(src)}
      aria-label="Expand image"
      className={`block cursor-zoom-in ${className}`}
    >
      {children}
    </button>
  );
}

// Provides a gallery lightbox for the given ordered images.
export function LightboxProvider({
  images,
  children,
}: {
  images: LightboxImage[];
  children: ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const open = (src: string) => {
    const i = images.findIndex((im) => im.src === src);
    if (i >= 0) setIndex(i);
  };
  const close = () => setIndex(null);
  const step = (d: number) =>
    setIndex((i) => (i === null ? null : (i + d + images.length) % images.length));

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const current = index === null ? null : images[index];
  const arrowBtn =
    "absolute top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20";

  return (
    <LightboxCtx.Provider value={{ open }}>
      {children}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-200 ${
              index === null ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
            aria-hidden={index === null}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={close} />

            {current && (
              <div className="relative z-10 flex items-center justify-center">
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  className="h-auto max-h-[88vh] w-auto max-w-[92vw] rounded-lg shadow-2xl"
                />
              </div>
            )}

            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {images.length > 1 && (
              <>
                <button onClick={() => step(-1)} aria-label="Previous image" className={`${arrowBtn} left-3`}>
                  <ArrowIcon className="h-5 w-5 rotate-180" />
                </button>
                <button onClick={() => step(1)} aria-label="Next image" className={`${arrowBtn} right-3`}>
                  <ArrowIcon className="h-5 w-5" />
                </button>
                <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-sm text-white/70">
                  {(index ?? 0) + 1} / {images.length}
                </div>
              </>
            )}
          </div>,
          document.body,
        )}
    </LightboxCtx.Provider>
  );
}
