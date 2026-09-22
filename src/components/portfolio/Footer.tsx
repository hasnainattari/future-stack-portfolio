import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { Icon: Github, href: "https://github.com/hasnainattari", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/hasnain-the-dev/", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:hasnainattari096@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-black">
                H
              </span>
              <span className="font-display text-sm font-semibold">
                Hasnain<span className="text-gradient-brand">.dev</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Full Stack MERN developer crafting fast, elegant products for founders and teams —
              from first idea to production.
            </p>
          </div>

          <nav aria-label="Footer" className="md:pt-1">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:pt-1">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Elsewhere
            </h2>
            <div className="mt-4 flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full glass transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-glow"
                >
                  <Icon size={15} />
                </a>
              ))}
              <button
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="ml-1 grid size-10 place-items-center rounded-full bg-gradient-brand text-black transition-transform hover:-translate-y-0.5"
              >
                <ArrowUp size={15} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Hasnain. All rights reserved.</p>
          <p>Designed &amp; built with passion in Karachi.</p>
        </div>
      </div>
    </footer>
  );
}
