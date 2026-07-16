import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    company: "Northstar Labs",
    role: "Senior Full-Stack Engineer",
    duration: "2023 — Present",
    desc: "Owning the React + Node platform. Rebuilt the checkout, cut LCP by 62%, mentored 4 engineers.",
  },
  {
    company: "Pixel Foundry",
    role: "MERN Developer",
    duration: "2021 — 2023",
    desc: "Delivered 20+ client projects: SaaS dashboards, storefronts, custom CMS integrations.",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    duration: "2019 — 2021",
    desc: "Partnered with agencies to ship marketing sites, e-commerce and micro-SaaS products.",
  },
  {
    company: "University of Mumbai",
    role: "B.Sc. Computer Science",
    duration: "2017 — 2021",
    desc: "Graduated with distinction. Built my first SaaS during senior year.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title={<>A short <span className="text-gradient-brand">timeline</span></>}
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent sm:left-1/2" />
        <ul className="space-y-10">
          {items.map((it, i) => {
            const left = i % 2 === 0;
            return (
              <motion.li
                key={it.company + it.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative grid grid-cols-[24px_1fr] gap-4 sm:grid-cols-2 sm:gap-10"
              >
                <span className="absolute left-4 top-2 size-3 -translate-x-1/2 rounded-full bg-gradient-brand shadow-glow sm:left-1/2" />
                <div className={`${left ? "sm:pr-10 sm:text-right" : "sm:col-start-2 sm:pl-10"} col-start-2 sm:col-start-auto`}>
                  <div className="rounded-2xl glass p-5">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-neon-cyan">
                      {it.duration}
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold">{it.role}</div>
                    <div className="text-sm text-muted-foreground">{it.company}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}