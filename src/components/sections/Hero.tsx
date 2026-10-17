import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, ArrowRight } from "lucide-react";
import { activeSocials, portfolioData } from "@/data/data";
import { ButtonLink, Container, SocialLinks } from "@/components/ui/portfolio-kit";
import { TopoShader } from "@/components/ui/TopoShader";
import { prefersReducedMotion } from "@/lib/motion";

export function Hero() {
  const { hero, personal, settings } = portfolioData;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion() || !settings.enableScrollAnimations) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero='line'] > span", { yPercent: 110, duration: 1, stagger: 0.12 })
        .from("[data-hero='fade']", { y: 16, opacity: 0, duration: 0.7, stagger: 0.08 }, "-=0.6")
        .from("[data-hero='visual']", { clipPath: "inset(100% 0 0 0)", duration: 1.1, ease: "power4.out" }, 0.2);
    }, ref);
    return () => ctx.revert();
  }, [settings.enableScrollAnimations]);

  return (
    <section id="top" ref={ref} className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
      <Container className="grid items-end gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <p data-hero="fade" className="flex items-center gap-2 text-sm text-muted-foreground">
            {personal.available && <span className="size-2 rounded-full bg-primary" aria-hidden />}
            {personal.availability}
          </p>
          <h1 className="mt-6 font-display text-display-xl font-semibold tracking-tight">
            <span data-hero="line" className="block overflow-hidden pb-1"><span className="block">{hero.headingLead}</span></span>
            <span data-hero="line" className="block overflow-hidden pb-2">
              <span className="block font-serif font-normal italic text-primary">{hero.headingAccent}</span>
            </span>
          </h1>
          <p data-hero="fade" className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I&rsquo;m {personal.name}, a {personal.title.toLowerCase()} in {personal.location.split(",").slice(-2).join(",").trim()}. {hero.description}
          </p>
          <div data-hero="fade" className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={hero.primaryCta.href}>
              {hero.primaryCta.label} <ArrowRight size={15} />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline">{hero.secondaryCta.label}</ButtonLink>
          </div>
          <div data-hero="fade" className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-muted-foreground">
              {hero.focus.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <SocialLinks links={activeSocials} />
          </div>
        </div>

        <div data-hero="visual" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-border bg-card">
            {settings.enableShader && <TopoShader className="absolute inset-0 size-full" />}
            {personal.avatar && (
              <img
                src={personal.avatar}
                alt={personal.avatarAlt}
                width={640}
                height={800}
                fetchPriority="high"
                className="absolute inset-x-8 bottom-0 top-10 mx-auto h-[calc(100%-2.5rem)] w-[calc(100%-4rem)] rounded-t-md object-cover"
              />
            )}
          </div>
          <div className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <span>{personal.name}</span>
            <span>{personal.location.split(",").pop()?.trim()}</span>
          </div>
        </div>
      </Container>
      <Container className="mt-14 hidden sm:block">
        <a href={portfolioData.navigation[0]?.href ?? "#"} className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
          <ArrowDown size={14} className="animate-bounce motion-reduce:animate-none" /> Scroll
        </a>
      </Container>
    </section>
  );
}
