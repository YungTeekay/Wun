import Link from "next/link";
import LiveClock from "./LiveClock";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <Link href="/" className="footer__brand">
          <span className="live-dot" aria-hidden="true" />
          wun
        </Link>

        <nav className="footer__links" aria-label="Footer">
          <Link href="/how-it-works">How it works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <p className="footer__clock">
          <LiveClock /> · © {year} WUN
        </p>
      </div>
    </footer>
  );
}
