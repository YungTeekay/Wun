import Link from "next/link";
import StatBand from "@/components/StatBand";
import { ArrowIcon } from "@/components/icons";
import { config, scarcityMonth } from "@/lib/config";

const BENEFITS = [
  {
    label: "Your time",
    title: "It works while you don't.",
    body: "After the kickoff call you make no decisions. The ads run, the site converts, the AI replies — at night, on weekends, while you're on a job.",
  },
  {
    label: "Speed",
    title: "Every lead answered in under a minute.",
    body: "Not when you next reach your phone. In under sixty seconds, every time — which is the whole difference between a booked customer and a missed one.",
  },
  {
    label: "Revenue",
    title: "Qualified enquiries, not traffic.",
    body: "The AI asks the questions that separate a real buyer from a browser, then books them in. You spend your time on people ready to pay.",
  },
];

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
              Your business should grow <em>while you work.</em>
            </h1>
            <p className="lead">
              We build you one machine. A site that turns visits into
              enquiries, ads that fill it and an AI that answers every lead in
              under a minute. You just have to approve it once and it runs from
              there.
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
            <p
              className="mono"
              style={{ fontSize: 13, color: "var(--muted)", maxWidth: "42ch" }}
            >
              {config.guaranteeCount} qualified enquiries in 30 days — or you
              don&apos;t pay for month two.
            </p>
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
              Wired together and run for you — not three tools added to your
              to-do list.
            </p>
          </div>
        </div>
      </section>

      {/* Speed proof */}
      <section className="section" style={{ paddingBlock: "clamp(24px,5vw,64px)" }}>
        <StatBand />
      </section>

      {/* Why it matters */}
      <section className="section section--warm">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">( Why it matters )</span>
            <h2 className="h2">A website that just sits there is a cost.</h2>
            <p className="lead">
              Most businesses pay for a site, send nothing to it, and answer the
              few enquiries that trickle in whenever a free minute appears. By
              then the customer has booked whoever replied first.
            </p>
          </div>

          <div className="hrow" data-hscroll>
            {BENEFITS.map((b) => (
              <article className="hcard" key={b.title}>
                <span className="hcard__label">{b.label}</span>
                <h3 className="h3">{b.title}</h3>
                <p className="hcard__body">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section section--guarantee">
        <div className="wrap guarantee">
          <span className="pill pill--accent">30-day lead guarantee</span>
          <h2 className="h2">
            {config.guaranteeCount} qualified enquiries in your first 30 days —
            or you don&apos;t pay for month two.
          </h2>
          <p className="guarantee__support">
            We carry the risk with you instead of handing you a site and
            disappearing. The machine only earns its keep if it brings you
            customers.
          </p>
          {config.showScarcity && (
            <div className="guarantee__chips">
              <span className="pill pill--amber">
                {config.slotsLeft} build slots open for {scarcityMonth}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section">
        <div className="wrap ctaband">
          <span className="eyebrow">
            <span className="live-dot" aria-hidden="true" />
            Ready when you are
          </span>
          <h2 className="h2">Let&apos;s build the machine that fills itself.</h2>
          <p className="guarantee__support">
            One short call. We&apos;ll show you what your machine would look
            like and what it takes to have it live in seven days.
          </p>
          <Link href="/contact" className="btn btn--primary">
            Get in contact
          </Link>
        </div>
      </section>
    </main>
  );
}
