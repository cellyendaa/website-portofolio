import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently closest to the top of the viewport.
 * Used for the navbar active indicator. Throttled with requestAnimationFrame
 * and only sets state when the value actually changes.
 */
export default function useActiveSection(ids, offset = 140) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!ids || ids.length === 0) return undefined;
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollPosition = window.scrollY + offset;
      let current = "";

      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        if (element.offsetTop <= scrollPosition) current = id;
      });

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 80;
      if (nearBottom) current = ids[ids.length - 1];

      setActiveId((previous) => (previous === current ? previous : current));
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
  }, [ids, offset]);

  return activeId;
}