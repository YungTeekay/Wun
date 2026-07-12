import Link from "next/link";
import Reveal from "@/components/Reveal";

// Cards anchor to the final CTA band for now. Built as <Link>s so swapping to
// dedicated routes (/football-clubs etc.) later is a one-line href change.
const NICHES = [
  {
    title: "Football Clubs",
    body: "Fill trials, memberships and events — turn supporters into sign-ups.",
    href: "#cta",
    icon: (
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4l2.6 1.9-1 3.1H10.4l-1-3.1L12 6zM5.5 9.5l2.4.2 1 3.1-1.8 1.5-2.4-1.8.8-3zm13 0l.8 3-2.4 1.8-1.8-1.5 1-3.1 2.4-.2zM8.7 18l-1-2.4 1.8-1.5h3l1.8 1.5-1 2.4H8.7z" />
    ),
  },
  {
    title: "Sports Venues",
    body: "Keep courts and pitches booked with online enquiries and bookings.",
    href: "#cta",
    icon: (
      <path d="M4 4h16v16H4zM4 9h16M9 4v16" stroke="currentColor" strokeWidth="1.6" fill="none" />
    ),
  },
  {
    title: "Solar Installers",
    body: "Capture quote requests and follow up instantly while intent is hot.",
    href: "#cta",
    icon: (
      <path d="M12 6a6 6 0 100 12 6 6 0 000-12zM12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    ),
  },
];

export default function WhoItsFor() {
  return (
    <section id="niches" className="scroll-mt-20 border-t border-border bg-bg-raised/30">
      <div className="container-x py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Who it&apos;s for</span>
          <h2 className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)]">
            Built for businesses that live on leads.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {NICHES.map((niche, i) => (
            <Reveal key={niche.title} delay={i * 90} className="h-full">
              <Link
                href={niche.href}
                className="card card-hover flex h-full flex-col"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-bg-raised-2 text-accent-light">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {niche.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-xl font-semibold text-text">
                  {niche.title}
                </h3>
                <p className="mt-2 text-[15px] text-text-muted">{niche.body}</p>
                {/* Pinned to the bottom so the link aligns across all three cards */}
                <span className="mt-auto pt-5 text-[15px] font-medium text-accent-light">
                  See how it works →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
