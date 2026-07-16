import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const roles = ["Full Stack Developer", "React Engineer", "MERN Stack Specialist", "UI Craftsman"];

function useTypewriter() {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = roles[i % roles.length];
    const speed = del ? 40 : 85;
    const t = setTimeout(() => {
      if (!del) {
        const next = cur.slice(0, txt.length + 1);
        setTxt(next);
        if (next === cur) setTimeout(() => setDel(true), 1400);
      } else {
        const next = cur.slice(0, txt.length - 1);
        setTxt(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, i]);
  return txt;
}

function Particles() {
  const dots = Array.from({ length: 26 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 2 + (i % 4);
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i % 10) * 0.4;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{ width: size, height: size, left: `${left}%`, top: `${top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay }}
          />
        );
      })}
    </div>
  );
}

function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />
      <div className="animate-float-y overflow-hidden rounded-3xl glass-strong p-5 shadow-glow">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <span>Developer</span>
          <span>2026</span>
        </div>
        <div className="relative mt-5">
          <div className="absolute inset-0 rounded-2xl bg-gradient-brand blur-md opacity-70" />
          <img
            src={portrait}
            alt="Aarav Mehta portrait"
            width={640}
            height={640}
            className="relative aspect-square w-full rounded-2xl object-cover"
          />
        </div>
        <div className="mt-5 space-y-1 text-center">
          <div className="font-display text-lg font-semibold">Aarav Mehta</div>
          <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Full Stack Developer
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {["React", "TypeScript", "Node.js", "Mongo", "Next.js"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <div>
            <div>ID</div>
            <div className="mt-1 text-foreground">488103</div>
          </div>
          <div className="text-right">
            <div>Access</div>
            <div className="mt-1 text-foreground">All Areas</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const typed = useTypewriter();
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -left-40 top-10 size-[520px] rounded-full bg-[radial-gradient(closest-side,oklch(0.7_0.24_295/0.6),transparent)] blur-3xl animate-blob" />
        <div className="absolute -right-40 top-40 size-[520px] rounded-full bg-[radial-gradient(closest-side,oklch(0.85_0.18_200/0.5),transparent)] blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute bottom-0 left-1/3 size-[420px] rounded-full bg-[radial-gradient(closest-side,oklch(0.75_0.24_340/0.45),transparent)] blur-3xl animate-blob" style={{ animationDelay: "-12s" }} />
        <Particles />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-gradient">Aarav Mehta.</span>
            <span className="block text-gradient-brand animate-gradient-shift">Building the modern web.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I&rsquo;m a Full Stack MERN developer designing and shipping premium
            digital products &mdash; from immersive marketing sites to complex
            SaaS dashboards and checkout systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex h-8 items-center gap-3 text-sm text-muted-foreground"
          >
            <span className="font-mono text-xs text-neon-cyan">{"<role>"}</span>
            <span className="font-mono text-foreground">
              {typed}
              <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-neon-violet align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-black shadow-glow transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-white/10"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { Icon: Github, label: "GitHub", href: "https://github.com" },
              { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              { Icon: Mail, label: "Email", href: "mailto:hi@aarav.dev" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group grid size-10 place-items-center rounded-full glass transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-glow"
              >
                <Icon size={16} className="text-muted-foreground group-hover:text-foreground" />
              </a>
            ))}
          </motion.div>
        </div>

        <HeroCard />
      </div>
    </section>
  );
}