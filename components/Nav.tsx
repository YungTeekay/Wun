"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Link href="/" className="nav__brand" aria-label="Wun — home">
          <span className="live-dot" aria-hidden="true" />
          wun
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav__link nav__link--hideable"
              data-current={isCurrent(l.href)}
              aria-current={isCurrent(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="nav__link nav__link--cta"
            data-current={isCurrent("/contact")}
            aria-current={isCurrent("/contact") ? "page" : undefined}
          >
            <span className="live-dot" aria-hidden="true" />
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
