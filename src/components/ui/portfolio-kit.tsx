import type { ReactNode } from "react";
import { ArrowUpRight, Github, Globe, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import type { SectionCopy, SocialLink, SocialPlatform } from "@/types/portfolio";
import { useReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  copy,
  children,
  className,
  aside,
}: {
  copy: SectionCopy;
  children: ReactNode;
  className?: string;
  aside?: ReactNode;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={copy.id} ref={ref} className={cn("scroll-mt-20 border-t border-border py-20 sm:py-28", className)}>
      <Container>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
          <div data-reveal>
            <p className="eyebrow">{copy.eyebrow}</p>
          </div>
          <div>
            <h2 data-reveal className="font-display text-display-md font-semibold tracking-tight">
              {copy.title}
            </h2>
            {copy.description && (
              <p data-reveal className="mt-4 max-w-xl text-muted-foreground">
                {copy.description}
              </p>
            )}
            {aside}
          </div>
        </div>
        <div className="mt-12 sm:mt-16">{children}</div>
      </Container>
    </section>
  );
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-border bg-card text-foreground hover:border-foreground/30",
  ghost: "text-foreground underline-offset-4 hover:underline",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}

const icons: Record<SocialPlatform, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
  Instagram: Instagram,
  Email: Mail,
  Website: Globe,
};

export function SocialLinks({ links, className }: { links: SocialLink[]; className?: string }) {
  if (!links.length) return null;
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {links.map((l) => {
        const Icon = icons[l.platform];
        const external = !l.url.startsWith("mailto:");
        return (
          <li key={l.platform}>
            <a
              href={l.url}
              aria-label={l.platform}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Icon size={16} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary"
    >
      {children}
      <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
