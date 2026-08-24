import { motion } from "framer-motion";
import { Section } from "./Section";
import { Layout, Server, Wrench } from "lucide-react";

const groups = [
  {
    label: "Frontend",
    Icon: Layout,
    blurb: "Pixel-accurate, accessible interfaces with motion that feels alive.",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
  },
  {
    label: "Backend",
    Icon: Server,
    blurb: "Reliable APIs, clean data models and auth that scales quietly.",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "Mongoose", "PostgreSQL", "JWT Auth", "Firebase"],
  },
  {
    label: "Design & Tools",
    Icon: Wrench,
    blurb: "The workflow that keeps shipping fast without breaking things.",
    items: ["Figma", "Git", "GitHub", "VS Code", "Postman", "Vercel", "Vite", "Jest"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title={<>Tools I use to <span className="text-gradient-brand">build & ship</span></>}
      description="A modern, opinionated toolkit for building performant, delightful web products end to end."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {groups.map((g, i) => (
          <motion.article
            key={g.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl glass p-7 transition-shadow hover:shadow-glow"
          >
            <div className="pointer-events-none absolute -inset-16 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="size-full bg-gradient-brand opacity-15 blur-3xl" />
            </div>

            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl glass-strong text-neon-cyan transition-transform duration-300 group-hover:scale-110">
                <g.Icon size={18} />
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight">{g.label}</h3>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{g.blurb}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-neon-violet/40 hover:bg-white/10 hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
