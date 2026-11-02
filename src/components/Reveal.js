
import useInView from "../hooks/useInView";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

/**
 * Reveal wraps any element and animates it in (fade + translateY) once it
 * enters the viewport. Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  duration = 700,
  y = 24,
  threshold = 0.18,
  once = true,
  className = "",
  style = {},
}) {
  const [ref, inView] = useInView({ threshold, once });
  const reduced = usePrefersReducedMotion();
  const visible = inView || reduced;

  const motionVars = {
    "--reveal-duration": `${duration}ms`,
    "--reveal-delay": `${delay}ms`,
    "--reveal-y": `${y}px`,
  };

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ ...motionVars, ...style }}
    >
      {children}
    </Tag>
  );
}