import { Download, MapPin } from "lucide-react";
import { portfolioData } from "@/data/data";
import { ButtonLink, Section } from "@/components/ui/portfolio-kit";

export function About() {
  const { personal, about, sections } = portfolioData;
  if (!sections.about.enabled) return null;
  return (
    <Section copy={{ ...sections.about, title: about.heading }}>
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
        <dl data-reveal className="space-y-5 text-sm">
          <div>
            <dt className="eyebrow">Based in</dt>
            <dd className="mt-1 flex items-center gap-1.5"><MapPin size={14} className="text-primary" />{personal.location}</dd>
          </div>
          <div>
            <dt className="eyebrow">Status</dt>
            <dd className="mt-1">{personal.availability}</dd>
          </div>
          {personal.resumeUrl && (
            <ButtonLink href={personal.resumeUrl} variant="outline" external>
              <Download size={14} /> Resume
            </ButtonLink>
          )}
        </dl>
        <div>
          {personal.bio.map((p) => (
            <p key={p} data-reveal className="mb-5 max-w-2xl text-lg leading-relaxed text-foreground/85">{p}</p>
          ))}
          {about.expertise.length > 0 && (
            <ul data-reveal className="mt-8 grid grid-cols-1 border-t border-border sm:grid-cols-2">
              {about.expertise.map((e, i) => (
                <li key={e} className="flex items-baseline gap-3 border-b border-border py-4">
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  {e}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
}
