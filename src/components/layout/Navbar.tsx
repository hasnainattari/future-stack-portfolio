import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/data";
import { Container } from "@/components/ui/portfolio-kit";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { navigation, navCta, branding } = portfolioData;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navigation.forEach((n) => {
      const el = n.href.startsWith("#") && document.querySelector(n.href);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [navigation]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 font-display text-sm font-semibold">
          <span className="grid size-8 place-items-center rounded-md bg-foreground text-background">
            {branding.initials}
          </span>
          {branding.logoText}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  aria-current={active === n.href ? "true" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground",
                    active === n.href ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {n.label}
                  {active === n.href && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-primary" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={navCta.href}
            className="hidden rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85 sm:inline-flex"
          >
            {navCta.label}
          </a>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-md border border-border md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border md:hidden">
          <Container className="py-4">
            <ul className="flex flex-col">
              {[...navigation, navCta].map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-3 font-display text-lg"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
