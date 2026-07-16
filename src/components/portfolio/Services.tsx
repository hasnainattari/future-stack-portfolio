import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Layout, Server, Plug, Smartphone, Palette } from "lucide-react";

const services = [
  { Icon: Layout, title: "Web Development", body: "Marketing sites, dashboards, and portals engineered for speed and scale." },
  { Icon: Palette, title: "UI / UX Design", body: "Design systems and interfaces that feel effortless and on-brand." },
  { Icon: Code2, title: "Frontend Engineering", body: "React & Next.js experiences with tasteful motion and clean architecture." },
  { Icon: Server, title: "Backend Engineering", body: "Node.js APIs, auth, payments, and databases built to last." },
  { Icon: Plug, title: "API Integration", body: "Stripe, Twilio, OpenAI, Firebase — I wire it up cleanly." },
  { Icon: Smartphone, title: "Responsive Design", body: "Pixel-perfect layouts from 320px to ultrawide, tested obsessively." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>How I can <span className="text-gradient-brand">help you ship</span></>}
      description="From zero-to-one MVPs to redesigns of established products, I&rsquo;ll plug into your team and move fast."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
            <div className="grid size-11 place-items-center rounded-xl bg-gradient-brand text-black">
              <s.Icon size={18} />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}