import Reveal from "@/components/Reveal";

export default function Problem() {
  return (
    <section className="border-t border-border">
      <div className="container-x py-16 md:py-24">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">The problem</span>
          <p className="mt-4 text-[clamp(1.5rem,3vw,2.25rem)] font-heading font-semibold leading-tight tracking-[-0.015em] text-text">
            Most agencies are slow, hand you a pretty brochure that gets{" "}
            <span className="text-accent-light">zero enquiries</span>, then
            ghost you after launch.
          </p>
          <p className="mt-4 text-lg text-text-muted">
            You paid for a logo and a homepage. What you needed was leads.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
