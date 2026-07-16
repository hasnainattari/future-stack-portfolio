import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-28 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
              <span className="size-1 rounded-full bg-neon-cyan" />
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}