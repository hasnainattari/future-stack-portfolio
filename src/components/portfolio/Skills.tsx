import { motion } from "framer-motion";
import { Section } from "./Section";

const skills = [
  { name: "React", level: 95, tag: "Frontend" },
  { name: "TypeScript", level: 92, tag: "Language" },
  { name: "Next.js", level: 90, tag: "Framework" },
  { name: "Node.js", level: 88, tag: "Backend" },
  { name: "Express.js", level: 86, tag: "Backend" },
  { name: "MongoDB", level: 85, tag: "Database" },
  { name: "Firebase", level: 80, tag: "Platform" },
  { name: "Redux Toolkit", level: 88, tag: "State" },
  { name: "Tailwind CSS", level: 95, tag: "Styling" },
  { name: "SCSS", level: 82, tag: "Styling" },
  { name: "Framer Motion", level: 90, tag: "Motion" },
  { name: "JavaScript", level: 96, tag: "Language" },
  { name: "Git / GitHub", level: 92, tag: "Tooling" },
  { name: "Ant Design", level: 78, tag: "UI Kit" },
  { name: "REST APIs", level: 90, tag: "Backend" },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title={<>Tools I use to <span className="text-gradient-brand">build & ship</span></>}
      description="A modern, opinionated toolkit for building performant, delightful web products end to end."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl glass p-4 transition-shadow hover:shadow-glow"
          >
            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -inset-8 bg-gradient-brand opacity-20 blur-2xl" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0 truncate font-display text-sm font-semibold">{s.name}</div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.tag}
              </span>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className="h-full rounded-full bg-gradient-brand"
              />
            </div>
            <div className="mt-2 font-mono text-[10px] text-muted-foreground">{s.level}%</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}