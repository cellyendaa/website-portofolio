import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

/**
 * FadeIn is a simple opacity-only reveal. Lighter than Reveal, useful for
 * small inline elements where translateY would be too much.
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 600,
  className = "",
  style = {},
}) {
  const reduced = usePrefersReducedMotion();

  const motionVars = {
    "--fade-duration": `${duration}ms`,
    "--fade-delay": `${delay}ms`,
  };

  return (
    <div
      className={`fade-in ${reduced ? "is-visible" : ""} ${className}`}
      style={{ ...motionVars, ...style }}
    >
      {children}
    </div>
  );
}