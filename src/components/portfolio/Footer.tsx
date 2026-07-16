import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-black">A</span>
          <span className="font-display text-sm font-semibold">
            aarav<span className="text-gradient-brand">.dev</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aarav Mehta. Designed & built with care.
        </p>
        <div className="flex items-center gap-2">
          {[
            { Icon: Github, href: "https://github.com", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid size-9 place-items-center rounded-full glass hover:bg-white/10"
            >
              <Icon size={14} />
            </a>
          ))}
          <button
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-2 grid size-9 place-items-center rounded-full bg-gradient-brand text-black hover:scale-105"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}