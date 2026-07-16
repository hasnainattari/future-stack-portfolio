import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { Quote } from "lucide-react";

const quotes = [
  {
    name: "Priya Shah",
    role: "CEO, Lumen Commerce",
    body: "Aarav rebuilt our storefront in six weeks and doubled our conversion. He’s the rare engineer who cares deeply about design.",
  },
  {
    name: "Marcus Lee",
    role: "CTO, Nebula CRM",
    body: "Every PR is a masterclass. Clean architecture, thoughtful UX, and shipped ahead of schedule.",
  },
  {
    name: "Elena Ruiz",
    role: "Product Lead, Signal",
    body: "Motion, performance, accessibility — Aarav nailed every axis. Our best hire this year.",
  },
  {
    name: "Daniel Okafor",
    role: "Founder, Verse",
    body: "He treated our product like his own. The result feels premium in every interaction.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % quotes.length), 5000);
    return () => clearInterval(t);
  }, []);
  const q = quotes[i];
  return (
    <Section
      id="testimonials"
      eyebrow="Kind Words"
      title={<>What clients <span className="text-gradient-brand">say</span></>}
    >
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
          <Quote className="absolute -right-2 -top-2 size-24 text-white/5" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-xl leading-relaxed sm:text-2xl">{q.body}</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-gradient-brand font-mono text-sm font-bold text-black">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{q.name}</div>
                  <div className="text-xs text-muted-foreground">{q.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-6 flex gap-2">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Show testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-brand" : "w-4 bg-white/15"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}