import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/data";
import { prefersReducedMotion } from "@/lib/motion";

/** Small dot + ring cursor for fine pointers only. Never blocks clicks. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!portfolioData.settings.enableCustomCursor) return;
    if (!window.matchMedia("(pointer: fine)").matches || prefersReducedMotion()) return;
    setOn(true);
    document.documentElement.classList.add("has-custom-cursor");
    const p = { x: -100, y: -100, rx: -100, ry: -100 };
    let raf = 0;
    const move = (e: PointerEvent) => {
      p.x = e.clientX;
      p.y = e.clientY;
      const t = e.target as HTMLElement;
      ring.current?.classList.toggle("is-active", !!t.closest("a,button,[data-cursor]"));
    };
    const loop = () => {
      p.rx += (p.x - p.rx) * 0.22;
      p.ry += (p.y - p.ry) * 0.22;
      if (dot.current) dot.current.style.transform = `translate3d(${p.x}px,${p.y}px,0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${p.rx}px,${p.ry}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!on) return null;
  return (
    <>
      <div ref={ring} aria-hidden className="cursor-ring" />
      <div ref={dot} aria-hidden className="cursor-dot" />
    </>
  );
}
