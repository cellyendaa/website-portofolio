import { useEffect, useRef } from "react";
import usePointerFine from "../hooks/usePointerFine";

/**
 * MagneticButton adds a subtle magnetic pull toward the cursor on desktop
 * only. On touch devices it behaves like a normal button.
 */
export default function MagneticButton({
  children,
  as: Tag = "a",
  strength = 0.35,
  className = "",
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const fine = usePointerFine();

  useEffect(() => {
    if (!fine) return;
    const el = ref.current;
    if (!el) return undefined;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const onLeave = () => {
      el.style.transform = "";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [fine, strength]);

  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}