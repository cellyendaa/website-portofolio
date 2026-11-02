import useInView from "../hooks/useInView";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

/**
 * StaggerContainer animates its children with a small staggered delay.
 * Each child should have the `.stagger-item` class.
 */
export default function StaggerContainer({
  children,
  as: Tag = "div",
  stagger = 90,
  threshold = 0.18,
  once = true,
  className = "",
  style = {},
}) {
  const [ref, inView] = useInView({ threshold, once });
  const reduced = usePrefersReducedMotion();
  const visible = inView || reduced;

  const motionVars = {
    "--stagger": `${stagger}ms`,
  };

  return (
    <Tag
      ref={ref}
      className={`stagger ${visible ? "is-visible" : ""} ${className}`}
      style={{ ...motionVars, ...style }}
    >
      {children}
    </Tag>
  );
}