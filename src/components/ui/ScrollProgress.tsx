import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/data";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (ref.current) ref.current.style.transform = `scaleX(${pct})`;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!portfolioData.settings.enableScrollProgress) return null;
  return <div ref={ref} aria-hidden className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-primary" />;
}
