import { portfolioData } from "@/data/data";
import { Section } from "@/components/ui/portfolio-kit";

export function Services() {
  const { services, sections } = portfolioData;
  if (!sections.services.enabled || !services.length) return null;
  return (
    <Section copy={sections.services}>
      <ol className="border-t border-border">
        {services.map((s, i) => (
          <li
            key={s.title}
            data-reveal
            className="group grid gap-2 border-b border-border py-7 transition-colors hover:bg-card sm:grid-cols-[4rem_1fr_1.4fr] sm:items-baseline sm:gap-8 sm:px-3"
          >
            <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">{s.title}</h3>
            <p className="text-muted-foreground">{s.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Testimonials() {
  const { testimonials, sections } = portfolioData;
  if (!sections.testimonials.enabled || !testimonials.length) return null;
  return (
    <Section copy={sections.testimonials}>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} data-reveal className="border-l-2 border-primary pl-6">
            <blockquote className="font-serif text-2xl italic leading-snug">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">{t.name} · {t.role}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
