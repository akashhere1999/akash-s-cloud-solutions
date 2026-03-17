import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const useCountUp = (end: string, duration = 2000) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(end);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part
    const numMatch = end.match(/[\d.]+/);
    if (!numMatch) {
      setDisplay(end);
      return;
    }

    const numEnd = parseFloat(numMatch[0]);
    const prefix = end.slice(0, end.indexOf(numMatch[0]));
    const suffix = end.slice(end.indexOf(numMatch[0]) + numMatch[0].length);
    const isDecimal = numMatch[0].includes(".");
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = numEnd * eased;
      setDisplay(`${prefix}${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { ref, display };
};
