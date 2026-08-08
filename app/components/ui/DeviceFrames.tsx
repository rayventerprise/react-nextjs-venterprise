import Image from "next/image";

interface FrameProps {
  src: string;
  alt: string;
  // Tailwind width class controlling overall frame width, e.g. "w-[190px]".
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
}

// Wraps a screenshot in a browser-window chrome (traffic lights + address bar)
// so app UIs look framed and product-like.
export function BrowserFrame({ src, alt, className = "", width, height, priority }: FrameProps) {
  return (
    <div className={`overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-neutral-100 px-3 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-green-400" aria-hidden="true" />
        <span className="ml-3 hidden h-5 flex-1 rounded-md bg-white/90 ring-1 ring-black/5 sm:block" aria-hidden="true" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
        priority={priority}
      />
    </div>
  );
}
