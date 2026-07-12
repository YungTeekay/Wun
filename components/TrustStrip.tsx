import Reveal from "@/components/Reveal";
import LiveEnquiries from "@/components/LiveEnquiries";
import { DEMO_CHIPS } from "@/lib/constants";

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-bg-raised/30">
      <div className="container-x py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Left — credential + demo chips */}
          <Reveal>
            <p className="text-xl font-medium text-text md:text-2xl">
              Ran the ads that brought football clubs real leads.
            </p>
            <p className="mt-3 text-[15px] text-text-muted">
              We&apos;ve done the acquisition work before — now it&apos;s built
              into everything we ship.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {DEMO_CHIPS.map((chip) => (
                <a
                  key={chip.label}
                  href={chip.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-raised px-3 py-1.5 text-[13px] text-text-muted transition-colors hover:border-accent-dark hover:text-text"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                  {chip.label}
                  <span className="text-[11px] uppercase tracking-[0.06em] text-text-faint">
                    Demo
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right — the animated product demo */}
          <Reveal delay={120}>
            <LiveEnquiries />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
