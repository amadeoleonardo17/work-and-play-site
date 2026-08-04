import { Link } from "@tanstack/react-router";
import profileAsset from "@/assets/profile.png.asset.json";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme";

const links = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Achievements", href: "#achievements" },
  { label: "Call", href: "#discovery-call" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="press-fx flex items-center gap-3">
          <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary/60 shadow-[var(--shadow-glow)]">
            <img
              src={profileAsset.url}
              alt={`${profile.name} portrait logo`}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden font-mono text-sm tracking-[0.2em] text-foreground sm:inline">
            {profile.name.toUpperCase()}
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#discovery-call"
            className="press-fx border border-primary/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-glow)]"
          >
            Establish Link
          </a>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>
          <span className="text-primary">&gt;</span> {profile.name} — {profile.role}
        </span>
        <span>© {new Date().getFullYear()} · connection stable</span>
      </div>
    </footer>
  );
}
