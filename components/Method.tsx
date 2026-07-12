import Reveal from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Capture",
    body: "A fast site built to turn visitors into enquiries.",
  },
  {
    n: "02",
    title: "Attract",
    body: "Targeted ads that send the right people to it.",
  },
  {
    n: "03",
    title: "Convert",
    body: "AI follow-up that answers and books every lead.",
  },
];

export default function Method() {
  return (
    <section id="method" className="scroll-mt-20 border-t border-border">
      <div className="container-x py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Our method</span>
          <h2 className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)]">
            Capture → Attract → Convert.
          </h2>
        </Reveal>

        <div className="relative mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {/* Connecting line (desktop only, decorative) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 100} className="relative">
              <div className="flex flex-col">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-bg font-heading text-lg font-semibold text-accent-light">
                  {step.n}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] text-text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
