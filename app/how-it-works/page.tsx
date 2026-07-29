import type { Metadata } from "next";
import Link from "next/link";
import StatBand from "@/components/StatBand";
import WhatsAppLoop from "@/components/WhatsAppLoop";
import { CheckIcon } from "@/components/icons";
import { config, scarcityMonth } from "@/lib/config";

export const metadata: Metadata = {
  title: "How it works — Wun",
  description:
    "A pretty website is not a customer. See how Wun builds one machine — site, ads and AI follow-up — that answers every lead in under a minute.",
};

const CHECKS = [
  {
    lead: "Replies instantly",
    rest: "on WhatsApp, email or your website form — whichever way the lead came in.",
  },
  {
    lead: "Qualifies the lead",
    rest: "with the right questions, so you only spend time on people worth your time.",
  },
  {
    lead: "Books it to your calendar",
    rest: "— trial, call or quote — while the interest is still hot.",
  },
];

const METHOD = [
  {
    step: "01 Position",
    day: "Day 1",
    title: "Position",
    body: "We pin down who you want walking through the door and the one offer that gets them to raise their hand.",
    outcome: "A sharp offer and message, agreed before a line is built.",
  },
  {
    step: "02 Build",
    day: "Days 2–4",
    title: "Build",
    body: "Your conversion site and Meta ad campaigns are designed, written and wired together as one funnel.",
    outcome: "A live-ready site and ad set built to turn clicks into enquiries.",
  },
  {
    step: "03 Train",
    day: "Day 5",
    title: "Train",
    body: "We train the AI on your business — what you offer, what you ask, what a good lead looks like — and connect your calendar.",
    outcome: "An assistant that answers and qualifies like your best salesperson.",
  },
  {
    step: "04 Go live",
    day: "Days 6–7",
    title: "Go live",
    body: "We switch the ads on, watch the first real enquiries land, and tune the machine as they come in.",
    outcome: "Live and answering leads — on day 7.",
    accent: true,
  },
];

const INCLUDED = [
  {
    label: "Always on",
    title: "90-day optimisation",
    body: "We don't build it and vanish. For the first 90 days we read the numbers and tune ads, copy and follow-up to lift qualified leads.",
  },
  {
    label: "Get found",
    title: "Google Business Profile",
    body: "Set up and optimised so the people already searching for what you do can find you, call you and land in the same machine.",
  },
  {
    label: "Stay in mind",
    title: "Nurture sequences",
    body: "Leads who aren't ready today don't get forgotten. Automated follow-ups keep you front of mind until they're ready to book.",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pagehero">
        <div className="wrap pagehero__inner">
          <span className="eyebrow">( How it works )</span>
          <h1 className="h1">A pretty website is not a customer.</h1>
          <p className="lead">
            Most businesses lose the sale in the gap between an enquiry landing
            and someone replying. Your competitors don&apos;t win because
            they&apos;re better — they win because they answered first. Wun
            closes that gap to seconds.
          </p>
        </div>
      </section>

      {/* Stat band */}
      <section className="section" style={{ paddingBlock: "clamp(24px,5vw,64px)" }}>
        <StatBand />
      </section>

      {/* The system */}
      <section className="section section--warm">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">( The system )</span>
            <h2 className="h2">One machine. Three parts.</h2>
            <p className="lead">
              Not three services on a menu. Each part feeds the next and all of
              it is run for you.
            </p>
          </div>

          <div className="rows">
            <div className="row">
              <span className="row__num">01</span>
              <div className="row__main">
                <div className="row__title">
                  <h3 className="h3">The Site</h3>
                </div>
                <p className="row__body">
                  A fast, focused conversion site built for one job: turning a
                  click into an enquiry. No bloat, no menu of distractions —
                  just the offer and a clear way to raise a hand.
                </p>
              </div>
            </div>

            <div className="row">
              <span className="row__num">02</span>
              <div className="row__main">
                <div className="row__title">
                  <h3 className="h3">The Ads</h3>
                </div>
                <p className="row__body">
                  Meta campaigns that put the offer in front of the right
                  people and send them straight into the site. Traffic with
                  intent, not vanity reach.
                </p>
              </div>
            </div>

            <div className="row">
              <span className="row__num">03</span>
              <div className="row__main">
                <div className="row__title">
                  <h3 className="h3">The Follow-Up</h3>
                  <span className="pill pill--accent">
                    <span className="live-dot" aria-hidden="true" />
                    The edge
                  </span>
                </div>
                <p className="row__body">
                  An AI that answers every enquiry in under a minute, any hour,
                  qualifies it, and books it to your calendar. This is the part
                  everyone else is missing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See it running */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">( See it running )</span>
            <h2 className="h2">Watch the gap close in real time.</h2>
          </div>

          <div className="running">
            <div className="checklist">
              {CHECKS.map((c) => (
                <div className="checkitem" key={c.lead}>
                  <span className="checkitem__mark" aria-hidden="true">
                    <CheckIcon size={14} />
                  </span>
                  <p className="checkitem__text">
                    <b>{c.lead}</b> {c.rest}
                  </p>
                </div>
              ))}
            </div>

            <WhatsAppLoop />
          </div>
        </div>
      </section>

      {/* The method */}
      <section className="section section--warm">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">( The method )</span>
            <h2 className="h2">Live in 7 days. Answering on day 7.</h2>
            <p className="lead">
              One kickoff call is all we need from you. Everything after that is
              ours to build, run and tune.
            </p>
          </div>

          <div className="methodgrid">
            {METHOD.map((m) => (
              <article
                className={`mcard${m.accent ? " mcard--accent" : ""}`}
                key={m.step}
              >
                <div className="mcard__head">
                  <span className="mcard__step">
                    {m.accent && <span className="live-dot" aria-hidden="true" style={{ display: "inline-block", marginRight: 8, verticalAlign: "middle" }} />}
                    {m.step}
                  </span>
                  <span className="mcard__day">{m.day}</span>
                </div>
                <h3 className="h3">{m.title}</h3>
                <p className="mcard__body">{m.body}</p>
                <p className="mcard__outcome">
                  <b>Outcome:</b> {m.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Included, not extra */}
      <section className="section section--teal">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">( Included, not extra )</span>
            <h2 className="h2">The core is the floor, not the ceiling.</h2>
          </div>
        </div>
        <div className="wrap">
          <div className="hrow" data-hscroll>
            {INCLUDED.map((c) => (
              <article className="hcard" key={c.title}>
                <span className="hcard__label">{c.label}</span>
                <h3 className="h3">{c.title}</h3>
                <p className="hcard__body">{c.body}</p>
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
            If your Lead Machine doesn&apos;t bring at least{" "}
            {config.guaranteeCount} qualified enquiries in its first 30 days
            live, you don&apos;t pay for month two.
          </h2>
          <p className="guarantee__support">
            We only win when the machine works. So we carry the risk with you —
            not just build it and walk away.
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
          <Link href="/contact" className="btn btn--primary">
            Get in contact
          </Link>
        </div>
      </section>
    </main>
  );
}
