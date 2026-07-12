import Reveal from "@/components/Reveal";
import { RESULTS_STATS } from "@/lib/constants";

export default function Results() {
  return (
    <section
      id="results"
      className="relative scroll-mt-20 overflow-hidden border-y border-border"
      style={{ backgroundColor: "var(--color-section)" }}
    >
      {/* Loud saturated band — the one place the accent floods. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full blur-[100px]"
        style={{ background: "var(--color-section-glow)" }}
      />

      <div className="container-x relative py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <span className="inline-block rounded-full border border-accent-dark/60 bg-bg/30 px-3 py-1 text-[12px] uppercase tracking-[0.06em] text-accent-light">
            Placeholder · swap once live
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] text-text">
            The numbers we build toward.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {RESULTS_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div>
                <div className="font-heading text-[clamp(2.5rem,7vw,4rem)] font-bold leading-none text-text">
                  {stat.figure}
                </div>
                <p className="mt-3 text-[15px] text-text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
