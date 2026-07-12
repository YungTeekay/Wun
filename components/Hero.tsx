import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{ background: "var(--color-accent-glow)" }}
      />

      <div className="container-x py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* 7-day delivery badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-raised px-3.5 py-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-accent-light"
              aria-hidden="true"
            >
              <path d="M13 2L4.09 12.11a.5.5 0 00.38.82H11l-1 9 8.91-10.11a.5.5 0 00-.38-.82H12l1-9z" />
            </svg>
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-text">
              7-Day Delivery
            </span>
          </div>

          <h1 className="mt-6 text-[clamp(2.25rem,6vw,4.25rem)]">
            We Don&apos;t Build Pretty Websites.{" "}
            <span className="text-accent-light">We Build Lead Machines.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-text-muted md:text-xl">
            AI-powered websites + lead-gen for South African businesses — live
            in 7 days. You get enquiries, not just a logo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Book a Call
            </Link>
            <a href="#preview" className="btn-ghost">
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
