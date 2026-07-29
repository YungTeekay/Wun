import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, InfoIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing — Wun",
  description:
    "Two parts, quoted on the call: a one-time build and the machine running monthly. Ad spend is paid to Meta separately.",
};

const BUILD = [
  "Conversion site built to turn clicks into enquiries",
  "Meta ad campaign setup, wired to the site",
  "AI follow-up build & training on your business",
  "Google Business Profile set up and optimised",
  "Live in 7 days",
];

const MACHINE = [
  "Ads run & optimised every week",
  "AI follow-up managed and improved",
  "Hosting & reporting handled for you",
  "90-day optimisation to lift qualified leads",
  "30-day lead guarantee",
];

export default function PricingPage() {
  return (
    <main>
      <section className="pagehero">
        <div className="wrap pagehero__inner">
          <span className="eyebrow">( Pricing )</span>
          <h1 className="h1">Two parts. Quoted on the call.</h1>
          <p className="lead">
            One machine, priced in two parts: a one-time build to stand it up,
            and a monthly to keep it running and improving. We quote both on a
            short call once we understand your business.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="pricegrid">
            {/* The Build */}
            <article className="pcard">
              <div className="pcard__head">
                <span className="pcard__type">One-time</span>
                <h2 className="h3" style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)" }}>
                  The Build
                </h2>
                <p style={{ color: "var(--text)", fontSize: 15 }}>
                  Everything designed, built and wired into one working machine.
                </p>
              </div>
              <ul className="plist">
                {BUILD.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pcard__foot">
                <span className="pcard__invest">Investment</span>
                <span className="pcard__price">Quoted on the call</span>
              </div>
            </article>

            {/* The Machine, running */}
            <article className="pcard pcard--accent">
              <div className="pcard__head">
                <span className="pcard__type">Monthly</span>
                <h2 className="h3" style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)" }}>
                  The Machine, running
                </h2>
                <p style={{ color: "var(--text)", fontSize: 15 }}>
                  We run and improve it every week — this is where the guarantee
                  lives.
                </p>
                <span className="pill pill--accent" style={{ alignSelf: "flex-start" }}>
                  <span className="live-dot" aria-hidden="true" />
                  Guarantee lives here
                </span>
              </div>
              <ul className="plist">
                {MACHINE.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pcard__foot">
                <span className="pcard__invest">Investment</span>
                <span className="pcard__price">Quoted on the call</span>
              </div>
            </article>
          </div>

          <div className="pricenote">
            <InfoIcon />
            <span>
              Ad spend is separate. You pay Meta directly for the ads that run —
              we never touch your ad budget, and you keep full control of it.
            </span>
          </div>

          <div className="ctaband mt-block" style={{ marginTop: "clamp(48px,7vw,88px)" }}>
            <h2 className="h2">Get your two numbers.</h2>
            <Link href="/contact" className="btn btn--primary">
              Get in contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
