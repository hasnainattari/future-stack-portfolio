import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] glass-strong px-6 py-14 text-center sm:px-14 sm:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,oklch(0.5_0.2_295/0.35),transparent_55%),radial-gradient(circle_at_80%_85%,oklch(0.6_0.16_200/0.3),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 -top-24 -z-10 h-48 rounded-full bg-gradient-brand opacity-20 blur-3xl"
          />

          <div className="mx-auto inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            <Sparkles size={11} className="text-neon-cyan" />
            Open for new work
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Have an idea? Let&rsquo;s turn it into{" "}
            <span className="text-gradient-brand">something amazing.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            From first sketch to production deploy — I partner with founders and teams to ship
            products that feel effortless and perform beautifully.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-black shadow-glow sm:w-auto"
            >
              Start a Project <ArrowUpRight size={15} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:hasnainattari096@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white/10 sm:w-auto"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
