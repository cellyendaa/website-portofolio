import { useEffect, useState } from "react";

/**
 * rAF-throttled scroll flag used by the navbar (appearance change) and the
 * back-to-top button. Only stores a boolean so re-renders stay minimal.
 */
export default function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled((previous) => {
        const next = window.scrollY > offset;
        return previous === next ? previous : next;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [offset]);

  return scrolled;
}