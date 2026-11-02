import { useEffect, useState } from "react";

/** 0 → 1 progress of the whole document. Used by the top scroll bar. */
export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    let last = 0;

    const update = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const next = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      // Skip sub-percent changes to avoid needless renders.
      if (Math.abs(next - last) < 0.004 && next !== 0 && next !== 1) return;
      last = next;
      setProgress(next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return progress;
}