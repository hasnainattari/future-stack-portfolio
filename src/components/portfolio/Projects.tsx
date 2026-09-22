import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight, ExternalLink, Github, Star } from "lucide-react";

type Project = {
  no: string;
  title: string;
  category: string;
  desc: string;
  problem: string;
  tech: string[];
  hue: string;
  domain: string;
  demo: string;
  code: string;
};

const featured: Project = {
  no: "01",
  title: "Lumen Commerce",
  category: "E-commerce",
  desc: "Headless commerce platform with real-time inventory, Stripe checkout and edge-cached storefronts.",
  problem:
    "The old store lost sales to 6-second page loads, so I rebuilt the storefront on the edge and cut it to under one second.",
  tech: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
  hue: "linear-gradient(135deg,#7c3aed,#06b6d4)",
  domain: "lumen.app",
  demo: "#",
  code: "#",
};

const projects: Project[] = [
  {
    no: "02",
    title: "Nebula CRM",
    category: "SaaS",
    desc: "Sales and pipeline suite with realtime collaboration, AI email drafts and clear dashboards.",
    problem: "Reps juggled four tools; now one workspace keeps every deal in sync.",
    tech: ["React", "Node.js", "PostgreSQL", "Redux"],
    hue: "linear-gradient(135deg,#f43f5e,#8b5cf6)",
    domain: "nebula.crm",
    demo: "#",
    code: "#",
  },
  {
    no: "03",
    title: "Habit Loop",
    category: "Web App",
    desc: "Habit tracker with streaks, insights and animated statistics that make progress feel good.",
    problem: "Users quit tracking after a week, so streak feedback became the core of the UI.",
    tech: ["React", "Framer Motion", "Firebase"],
    hue: "linear-gradient(135deg,#22d3ee,#a78bfa)",
    domain: "habitloop.io",
    demo: "#",
    code: "#",
  },
  {
    no: "04",
    title: "Signal Analytics",
    category: "SaaS",
    desc: "Cohort analytics and funnel visualisation for product teams, with sub-100ms interactions.",
    problem: "Reports took minutes to load; pre-aggregation made them instant.",
    tech: ["Next.js", "TypeScript", "Redis"],
    hue: "linear-gradient(135deg,#34d399,#0ea5e9)",
    domain: "signal.dev",
    demo: "#",
    code: "#",
  },
  {
    no: "05",
    title: "Atlas Studio",
    category: "Design System",
    desc: "Component playground with 120+ accessible variants and living documentation.",
    problem: "Three teams shipped three different buttons — one system ended the drift.",
    tech: ["React", "Tailwind", "Storybook"],
    hue: "linear-gradient(135deg,#fb7185,#f59e0b)",
    domain: "atlas.design",
    demo: "#",
    code: "#",
  },
];

function Thumb({ p, className = "" }: { p: Project; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 ${className}`}
      style={{ background: p.hue }}
    >
      <div className="absolute inset-0 grid-bg opacity-40 transition-transform duration-[900ms] ease-out group-hover:scale-110" />
      <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/35" />
      <div className="absolute bottom-4 left-4 right-4 rounded-xl glass-strong p-3 font-mono text-xs">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-yellow-400" />
          <span className="size-2 rounded-full bg-emerald-400" />
          <span className="ml-2 truncate text-muted-foreground">{p.domain}</span>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 flex translate-y-[-8px] items-center justify-end gap-2 p-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
        <a
          href={p.demo}
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1.5 text-xs font-semibold text-black"
        >
          <ExternalLink size={12} /> Live
        </a>
        <a
          href={p.code}
          className="inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-xs"
        >
          <Github size={12} /> Code
        </a>
      </div>
    </div>
  );
}

function Tech({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Recent <span className="text-gradient-brand">projects</span></>}
      description="A snapshot of what I've been building lately — real products, real users, real results."
    >
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="group relative mb-6 overflow-hidden rounded-[2rem] glass-strong p-6 shadow-glow sm:p-10"
      >
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">
                <Star size={10} /> Featured
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {featured.no} · {featured.category}
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{featured.desc}</p>
            <p className="mt-4 border-l-2 border-neon-violet/60 pl-4 text-sm leading-relaxed text-foreground/80">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Problem solved —{" "}
              </span>
              {featured.problem}
            </p>
            <Tech items={featured.tech} />
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
                href={featured.demo}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm transition-colors hover:bg-white/10"
                href={featured.code}
              >
                <Github size={14} /> Case Study
              </a>
            </div>
          </div>
          <Thumb p={featured} className="aspect-[4/3]" />
        </div>
      </motion.article>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
        {projects.map((p, i) => {
          const wide = i % 3 === 0;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl glass p-5 transition-shadow hover:shadow-glow sm:p-6 ${
                wide ? "md:col-span-4" : "md:col-span-2"
              }`}
            >
              <Thumb p={p} className={wide ? "aspect-[16/9]" : "aspect-[4/3]"} />

              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {p.no} · {p.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </div>

              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Problem solved —{" "}
                </span>
                {p.problem}
              </p>
              <Tech items={p.tech} />
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
