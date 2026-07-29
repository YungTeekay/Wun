import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="wrap hero__grid">
          {/* Left — copy */}
          <div className="hero__copy">
            <span className="eyebrow">
              <span className="live-dot" aria-hidden="true" />
              Live in 7 days
            </span>
            <h1 className="h1">
              A system that <em>fills itself.</em>
            </h1>
            <p className="lead">
              Website, ads and an AI that answers every enquiry in under a
              minute — built as one machine and live in 7 days.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                Get in contact
              </Link>
              <Link href="/how-it-works" className="textlink">
                See how it works
                <span className="arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>

          {/* Right — one machine, three parts */}
          <div className="machine">
            <p className="machine__label">One machine · Three parts</p>
            <div className="machine__nodes">
              <div className="node">
                <span className="node__num">01</span>
                <span className="node__body">
                  <span className="node__title">Conversion site</span>
                  <span className="node__sub">Built to turn clicks into enquiries</span>
                </span>
              </div>
              <span className="connector" aria-hidden="true" />
              <div className="node">
                <span className="node__num">02</span>
                <span className="node__body">
                  <span className="node__title">Meta ads</span>
                  <span className="node__sub">Putting you in front of buyers</span>
                </span>
              </div>
              <span className="connector" aria-hidden="true" />
              <div className="node node--accent">
                <span className="node__num">03</span>
                <span className="node__body">
                  <span className="node__title">
                    <span className="live-dot" aria-hidden="true" />
                    AI follow-up
                  </span>
                  <span className="node__sub">Answers every one in &lt;60s</span>
                </span>
              </div>
            </div>
            <p className="machine__foot">
              Built and wired as one system — not three tools you have to run
              yourself.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
