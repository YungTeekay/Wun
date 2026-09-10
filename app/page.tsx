import LeadForm from "./LeadForm";

const PROBLEMS = [
  {
    title: "Getting clients is all on you",
    body: "Between quoting, invoicing and the actual work, there's no time left to market yourself. New jobs only turn up when someone happens to pass your name on.",
  },
  {
    title: "You're invisible to people ready to buy",
    body: "The locals who need your trade this week are searching and asking around — but nothing points them your way. So they hire whoever shows up first.",
  },
  {
    title: "Feast or famine",
    body: "Some months you're turning work away, others you're wondering where the next job's coming from. There's no steady system you can rely on to keep the diary full.",
  },
];

const SOLUTION = [
  {
    n: "01",
    title: "A site that turns visitors into interested clients",
    body: "A fast, sharp site built for one job: make the right local person want to hire you, and make it effortless to reach out. Live within a few days.",
  },
  {
    n: "02",
    title: "Ads that put you in front of locals ready to buy",
    body: "Meta ads that find the people who need your trade now and send them straight to your site — targeted and managed for you, from day one.",
  },
  {
    n: "03",
    title: "A system that wins and books the work for you",
    body: "The moment someone's interested, it answers, qualifies them and books the job into your diary — automatically, on WhatsApp, email or form. You just turn up.",
  },
];

const FAQ = [
  {
    q: "How quickly is the site live?",
    a: "Within a few days of your call. The site is built for one job, turning a visitor into an enquiry, so there's no long design process to sit through.",
  },
  {
    q: "Do I have to run the ads myself?",
    a: "No. We set up and manage the Meta ads, targeted at local people who need your trade this week, and wire them to your site from day one.",
  },
  {
    q: "Do I have to deal with the enquiries myself?",
    a: "No — that's the point. The system answers each interested person, asks the questions you'd ask (what's the job, where, when) and books it into your diary for you, on WhatsApp, email or your form. You can see every conversation and step in whenever you like, but you don't have to.",
  },
  {
    q: "I already have a website. Can I keep it?",
    a: "Yes, if it converts. On the call we'll look at it honestly. If it's doing the job we'll wire the ads and the booking system straight to it; if it isn't, we'll replace it.",
  },
  {
    q: "What does it cost?",
    a: "It depends on your trade, area and ad budget, so we price it on the call. You'll leave the 15 minutes with a clear number and no pressure to decide on the spot.",
  },
];

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <span id="top" />

      {/* 1. Nav */}
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top">
            Wun Digital
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a className="navlink" href="#problem">
              The problem
            </a>
            <a className="navlink" href="#solution">
              How it works
            </a>
            <a className="navlink" href="#faq">
              FAQ
            </a>
            <a className="btn btn-primary btn-sm" href="#book">
              Book a free call
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* 2. Hero */}
        <section className="section hero-section">
          <div className="container hero-grid">
            <div>
              <h1 className="h1">
                <span>A system that brings you clients.</span>
                <span>
                  It finds them, wins them, and books them in — while you stay
                  on the tools.
                </span>
              </h1>
              <p className="hero-sub">
                One system that finds the right local people, turns them into
                booked jobs, and runs without you — so you can get on with the
                work you&apos;re good at.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#book">
                  Book a free 15-minute call
                </a>
                <a className="btn btn-secondary" href="#solution">
                  See how it works
                </a>
              </div>
            </div>
            <div className="hero-media">
              {/* TODO: real photo at /public/hero.jpg */}
              <div className="hero-placeholder">Tradesperson on site</div>
            </div>
          </div>
        </section>

        {/* 3. Problem */}
        <section className="section" id="problem">
          <div className="container">
            <span className="kicker">The problem</span>
            <h2 className="h2 problem-h2">
              Work comes in when you&apos;ve got time to chase it, and dries up
              when you don&apos;t. Finding clients is a job on top of your job.
            </h2>
            <div className="cards">
              {PROBLEMS.map((p) => (
                <div className="card" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Solution */}
        <section className="section" id="solution">
          <div className="container">
            <span className="kicker">The Full Diary System</span>
            <h2 className="h2">Three parts. One job: a full diary, run for you.</h2>
            <div className="rows">
              {SOLUTION.map((r) => (
                <div className="srow" key={r.n}>
                  <div className="srow-index">
                    <span className="square" aria-hidden="true" />
                    <span>{r.n}</span>
                  </div>
                  <div className="srow-body">
                    <h3>{r.title}</h3>
                    <p>{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Book / lead form */}
        <section className="section" id="book">
          <div className="container book-grid">
            <div>
              <span className="kicker">Book a free call</span>
              <h2 className="h2 book-h2">
                15 minutes. We&apos;ll show you the system and what it would
                take to keep your diary full.
              </h2>
              <p className="book-copy">
                Leave your details and we&apos;ll call you back at a time that
                suits. No pitch deck, no obligation.
              </p>
              <ul className="checklist">
                <li>
                  <span className="square" aria-hidden="true" />
                  <span>How the system would bring you clients in your area</span>
                </li>
                <li>
                  <span className="square" aria-hidden="true" />
                  <span>
                    The kind of work it could put in your diary each month
                  </span>
                </li>
                <li>
                  <span className="square" aria-hidden="true" />
                  <span>
                    A straight answer on whether it fits your trade
                  </span>
                </li>
              </ul>
            </div>
            <LeadForm />
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="section" id="faq">
          <div className="container faq-grid">
            <div>
              <span className="kicker">Questions</span>
              <h2 className="h2">Straight answers before you book.</h2>
            </div>
            <div className="faq-list">
              {FAQ.map((item, i) => (
                <details key={item.q}>
                  <summary>
                    <span className="faq-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item.q}</span>
                  </summary>
                  <div className="faq-answer">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Closing banner */}
        <section className="banner">
          <div className="container">
            <h2>Keep your diary full — without lifting a finger.</h2>
            <div className="banner-actions">
              <a className="btn btn-outline" href="#book">
                Book a free 15-minute call
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">Wun Digital</div>
              <p>
                The Full Diary System for local trades: a site that converts,
                ads that fill it, and a system that books the work for you.
              </p>
            </div>
            <div>
              <h4>Site</h4>
              <ul>
                <li>
                  <a href="#problem">The problem</a>
                </li>
                <li>
                  <a href="#solution">How it works</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#book">Book a call</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:hello@wundigital.co.uk">
                    hello@wundigital.co.uk
                  </a>
                </li>
                <li>
                  {/* TODO: real WhatsApp number */}
                  <a
                    href="https://wa.me/44"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
                <li>
                  <a href="/terms">Terms</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Wun Digital. All rights reserved.
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
