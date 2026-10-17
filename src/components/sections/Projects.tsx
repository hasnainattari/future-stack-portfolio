import { portfolioData } from "@/data/data";
import type { Project } from "@/types/portfolio";
import { ArrowLink, Section, Tag } from "@/components/ui/portfolio-kit";
import { cn } from "@/lib/utils";

function Cover({ p, index, large }: { p: Project; index: number; large?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden rounded-md border border-border bg-secondary", large ? "aspect-[16/10]" : "aspect-[4/3]")}>
      {p.image ? (
        <img src={p.image} alt={p.imageAlt ?? p.title} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      ) : (
        <div className="project-placeholder flex size-full items-end p-5 transition-transform duration-700 group-hover:scale-[1.03]">
          <span className="font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-none text-foreground/10">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}

function Card({ p, index, large }: { p: Project; index: number; large?: boolean }) {
  return (
    <article data-reveal data-cursor className="group">
      <Cover p={p} index={index} large={large} />
      <div className="mt-5 flex items-baseline justify-between gap-4 font-mono text-xs text-muted-foreground">
        <span>{p.kind}</span>
        <span>{p.year}</span>
      </div>
      <h3 className={cn("mt-2 font-display font-semibold tracking-tight", large ? "text-3xl" : "text-xl")}>{p.title}</h3>
      <p className="mt-2 max-w-xl text-muted-foreground">{p.summary}</p>
      {p.problem && <p className="mt-3 max-w-xl border-l-2 border-primary pl-3 text-sm">{p.problem}</p>}
      <div className="mt-4 flex flex-wrap gap-1.5">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      {(p.liveUrl || p.sourceUrl) && (
        <div className="mt-5 flex gap-5">
          {p.liveUrl && <ArrowLink href={p.liveUrl}>Live demo</ArrowLink>}
          {p.sourceUrl && <ArrowLink href={p.sourceUrl}>Source code</ArrowLink>}
        </div>
      )}
    </article>
  );
}

export function Projects() {
  const { projects, sections } = portfolioData;
  if (!sections.projects.enabled) return null;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section copy={sections.projects}>
      {projects.length === 0 ? (
        <p className="rounded-md border border-dashed border-border p-10 text-center text-muted-foreground">Projects coming soon.</p>
      ) : (
        <div className="space-y-16">
          {featured.map((p) => (
            <Card key={p.slug} p={p} index={projects.indexOf(p)} large />
          ))}
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Card key={p.slug} p={p} index={projects.indexOf(p)} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
