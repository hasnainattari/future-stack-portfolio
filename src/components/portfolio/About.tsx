import { motion } from "framer-motion";
import { Section, Counter } from "./Section";
import portraitAsset from "@/assets/portrait.png.asset.json";
const portrait = portraitAsset.url;
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

const timeline = [
  {
    Icon: Briefcase,
    title: "Senior Full-Stack Engineer",
    sub: "Northstar Labs · 2023 — Present",
    body: "Leading React & Node platforms serving 500k+ monthly users.",
  },
  {
    Icon: Briefcase,
    title: "MERN Developer",
    sub: "Pixel Foundry · 2021 — 2023",
    body: "Shipped 20+ production apps, from checkout systems to admin dashboards.",
  },
  {
    Icon: GraduationCap,
    title: "B.Sc. Computer Science",
    sub: "University of Karachi · 2017 — 2021",
    body: "Graduated with distinction. Focused on distributed systems & UX.",
  },
];

const facts = [
  { n: 5, s: "+", label: "Years Experience" },
  { n: 42, s: "+", label: "Projects Shipped" },
  { n: 28, s: "+", label: "Happy Clients" },
  { n: 1200, s: "+", label: "GitHub Stars" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineering with <span className="text-gradient-brand">craft & clarity</span></>}
      description="I care about the fine details — the ones you feel more than see. Fast interfaces, thoughtful motion, resilient backends."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-brand opacity-40 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] glass-strong p-2">
            <img
              src={portrait}
              alt="Portrait"
              width={800}
              height={800}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-2xl glass-strong px-4 py-3 shadow-glow">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Based in
            </div>
            <div className="mt-0.5 font-display text-sm font-semibold">Karachi · Remote</div>
          </div>
        </motion.div>

        <div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&rsquo;m a Full Stack MERN developer with a soft spot for typography,
            motion, and clean architecture. I&rsquo;ve helped startups launch
            faster, scaled products past their first million users, and rebuilt
            legacy stacks into something the team is proud to open every morning.
          </p>

          <ol className="mt-8 space-y-4">
            {timeline.map((t, i) => (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl glass p-4"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-black">
                  <t.Icon size={16} />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-base font-semibold">{t.title}</div>
                  <div className="mt-0.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {t.sub}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl glass p-4 text-center">
                <div className="font-display text-3xl font-bold text-gradient-brand">
                  <Counter to={f.n} suffix={f.s} />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {f.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles size={14} className="text-neon-cyan" />
            Fun fact: I&rsquo;ve shipped code from 11 countries and 3 continents.
          </div>
        </div>
      </div>
    </Section>
  );
}