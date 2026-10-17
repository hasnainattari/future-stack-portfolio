import { activeSocials, portfolioData } from "@/data/data";
import { Container, SocialLinks } from "@/components/ui/portfolio-kit";

export function Footer() {
  const { branding, footer, navigation, personal } = portfolioData;
  return (
    <footer className="border-t border-border py-14">
      <Container className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <a href="#top" className="font-display text-lg font-semibold">{branding.logoText}</a>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{footer.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow">Elsewhere</p>
          <SocialLinks links={activeSocials} className="mt-4" />
        </div>
      </Container>
      <Container className="mt-12 flex flex-col justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
        <span>{footer.note}</span>
      </Container>
    </footer>
  );
}
