import { portfolioData } from "@/data/data";
import { Section } from "@/components/ui/portfolio-kit";

export function Skills() {
  const { skills, sections } = portfolioData;
  if (!sections.skills.enabled || !skills.length) return null;
  return (
    <Section copy={sections.skills}>
      <div className="grid border-t border-border md:grid-cols-3">
        {skills.map((g) => (
          <div key={g.category} data-reveal className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
            <h3 className="font-display text-xl font-semibold">{g.category}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{g.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-sm bg-secondary px-2.5 py-1 text-sm text-secondary-foreground">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
