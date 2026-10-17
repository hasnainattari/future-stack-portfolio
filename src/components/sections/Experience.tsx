import { portfolioData } from "@/data/data";
import type { TimelineItem } from "@/types/portfolio";
import { Section } from "@/components/ui/portfolio-kit";

function List({ title, items }: { title: string; items: TimelineItem[] }) {
  if (!items.length) return null;
  return (
    <div>
      <h3 data-reveal className="eyebrow mb-4">{title}</h3>
      <ol className="border-t border-border">
        {items.map((it) => (
          <li key={it.organization + it.role} data-reveal className="grid gap-2 border-b border-border py-6 md:grid-cols-[1fr_2fr] md:gap-12">
            <span className="font-mono text-xs text-muted-foreground">{it.start} — {it.end}</span>
            <div>
              <p className="font-display text-lg font-semibold">{it.role}</p>
              <p className="text-sm text-muted-foreground">{it.organization}</p>
              <p className="mt-3 text-muted-foreground">{it.description}</p>
              {it.achievements && it.achievements.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  {it.achievements.map((a) => <li key={a}>{a}</li>)}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Experience() {
  const { experience, education, sections } = portfolioData;
  if (!sections.experience.enabled || (!experience.length && !education.length)) return null;
  return (
    <Section copy={sections.experience}>
      <div className="space-y-14">
        <List title="Work" items={experience} />
        <List title="Education" items={education} />
      </div>
    </Section>
  );
}
