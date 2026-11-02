import { useEffect, useState } from "react";

const QUERY = "(hover: hover) and (pointer: fine)";

/**
 * True only on devices with a precise pointer (desktop mouse).
 * Used to gate cursor glow / magnetic hover effects so touch devices
 * never pay for pointer-tracking work.
 */
export default function usePointerFine() {
  const [fine, setFine] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia(QUERY).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;

    const mediaQuery = window.matchMedia(QUERY);
    const handleChange = (event) => setFine(event.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return fine;
}