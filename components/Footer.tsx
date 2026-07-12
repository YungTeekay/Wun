import Link from "next/link";
import { NAV_LINKS, DOMAIN } from "@/lib/constants";

export default function Footer() {
  return (
    // Footer text kept at ≥60% opacity for legible contrast (text-muted, not faint).
    <footer className="border-t border-border bg-bg">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <span className="font-heading text-xl font-bold tracking-tight text-text">
            Wun
          </span>
          <p className="mt-3 text-[15px] text-text-muted">
            AI-powered websites &amp; lead-gen for South African businesses.
            Live in 7 days.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 text-[15px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="text-text-muted transition-colors hover:text-text"
          >
            Contact
          </Link>
        </nav>

        <nav aria-label="Legal" className="flex flex-col gap-3 text-[15px]">
          <Link
            href="/privacy"
            className="text-text-muted transition-colors hover:text-text"
          >
            Privacy
          </Link>
          <Link
            href="/popia"
            className="text-text-muted transition-colors hover:text-text"
          >
            POPIA
          </Link>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6">
          <p className="text-[13px] text-text-muted">
            © {new Date().getFullYear()} Wun · {DOMAIN}
          </p>
        </div>
      </div>
    </footer>
  );
}
