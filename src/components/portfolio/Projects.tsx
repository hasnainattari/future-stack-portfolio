import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github, Star } from "lucide-react";

type Project = {
  title: string;
  category: "Web App" | "Ecommerce" | "SaaS" | "UI/UX";
  desc: string;
  tech: string[];
  featured?: boolean;
  hue: string;
};

const projects: Project[] = [
  {
    title: "Lumen Commerce",
    category: "Ecommerce",
    desc: "Headless commerce platform with real-time inventory, Stripe checkout, and edge-cached storefronts.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    featured: true,
    hue: "linear-gradient(135deg,#7c3aed,#06b6d4)",
  },
  {
    title: "Nebula CRM",
    category: "SaaS",
    desc: "Sales & pipeline suite with realtime collaboration, AI email drafts, and beautiful dashboards.",
    tech: ["React", "Node.js", "Postgres", "Redux"],
    hue: "linear-gradient(135deg,#f43f5e,#8b5cf6)",
  },
  {
    title: "Habit Loop",
    category: "Web App",
    desc: "Personal habit tracker with streaks, insights, and gorgeous animated statistics.",
    tech: ["React", "Framer Motion", "Firebase"],
    hue: "linear-gradient(135deg,#22d3ee,#a78bfa)",
  },
  {
    title: "Atlas Studio",
    category: "UI/UX",
    desc: "Design system & component playground with 120+ variants and full a11y coverage.",
    tech: ["React", "Tailwind", "Storybook"],
    hue: "linear-gradient(135deg,#fb7185,#f59e0b)",
  },
  {
    title: "Signal Analytics",
    category: "SaaS",
    desc: "Cohort analytics + funnel visualizations for product teams. Sub-100ms interactions.",
    tech: ["Next.js", "TypeScript", "Redis"],
    hue: "linear-gradient(135deg,#34d399,#0ea5e9)",
  },
  {
    title: "Verse Journal",
    category: "Web App",
    desc: "Minimal writing app with markdown, cloud sync, and cinematic focus mode.",
    tech: ["React", "Node.js", "Mongo"],
    hue: "linear-gradient(135deg,#e879f9,#38bdf8)",
  },
];

const cats = ["All", "Web App", "Ecommerce", "SaaS", "UI/UX"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);
  const featured = projects.find((p) => p.featured)!;

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Recent <span className="text-gradient-brand">projects</span></>}
      description="A snapshot of what I&rsquo;ve been building lately. Real products, real people, real revenue."
    >
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative mb-10 overflow-hidden rounded-3xl glass-strong p-6 shadow-glow sm:p-10"
      >
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">
              <Star size={10} /> Featured
            </div>
            <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{featured.title}</h3>
            <p className="mt-3 text-muted-foreground">{featured.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-black" href="#">
                <ExternalLink size={14} /> Live Demo
              </a>
              <a className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm" href="#">
                <Github size={14} /> Source
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10" style={{ background: featured.hue }}>
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl glass-strong p-3 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-red-400" />
                <span className="size-2 rounded-full bg-yellow-400" />
                <span className="size-2 rounded-full bg-emerald-400" />
                <span className="ml-2 text-muted-foreground">lumen.app</span>
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      <div className="mb-8 flex flex-wrap items-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`relative rounded-full px-4 py-2 text-xs font-medium transition-colors ${
              filter === c ? "text-black" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter === c && (
              <motion.span
                layoutId="cat-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-brand"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-5"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10" style={{ background: p.hue }}>
                <div className="absolute inset-0 grid-bg opacity-40 transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <span className="shrink-0 rounded-full border border-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  {p.category}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                <a href="#" className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs hover:bg-white/10">
                  <ExternalLink size={12} /> Demo
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs hover:bg-white/10">
                  <Github size={12} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}