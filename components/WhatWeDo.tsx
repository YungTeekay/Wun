import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    title: "Websites in 7 Days",
    body: "A fast, conversion-built site — designed, written and live inside a week.",
    icon: (
      <path d="M13 2L4.09 12.11a.5.5 0 00.38.82H11l-1 9 8.91-10.11a.5.5 0 00-.38-.82H12l1-9z" />
    ),
  },
  {
    title: "Lead-Gen Ads Built In",
    body: "Targeted ads wired to your site from day one, so traffic actually converts.",
    icon: (
      <path d="M3 11l18-8-8 18-2.5-7.5L3 11z" />
    ),
  },
  {
    title: "AI Follow-Up That Answers Every Enquiry",
    body: "An AI assistant replies in under a minute, every time — no lead left cold.",
    icon: (
      <path d="M4 5h16v11H8l-4 4V5z" />
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border">
      <div className="container-x py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)]">
            Three things, done properly.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="h-full">
              <div className="card flex h-full flex-col">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-bg-raised-2 text-accent-light">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {item.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-xl font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] text-text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
