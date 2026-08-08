// Subtle ambient dot texture that adapts to the theme (foreground-tinted).
// Absolutely positioned to fill its (relative) parent.
export function DotPattern({
  className = "",
  size = 22,
  opacity = 0.06,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(rgba(var(--foreground), ${opacity}) 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
      aria-hidden="true"
    />
  );
}
