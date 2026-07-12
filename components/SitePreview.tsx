import Reveal from "@/components/Reveal";
import { PREVIEW_CLUB, DOMAIN } from "@/lib/constants";

const FEATURES = [
  { title: "Book a Trial", body: "Pick a slot in under a minute." },
  { title: "Fixtures & News", body: "Kept fresh, automatically." },
  { title: "Join the Club", body: "Membership sign-up, online." },
];

export default function SitePreview() {
  return (
    <section id="preview" className="scroll-mt-20">
      <div className="container-x py-16 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">See it live</span>
          <h2 className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)]">
            A real Wun site, not a mockup pitch.
          </h2>
          <p className="mt-4 text-text-muted">
            Here&apos;s the kind of lead-generating site we ship for a football
            club. Built to turn visitors into booked enquiries.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-4xl">
          {/* Browser chrome */}
          <div className="overflow-hidden rounded-lg border border-border bg-bg-raised shadow-lg">
            <div className="flex items-center gap-3 border-b border-border bg-bg-raised-2 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-border" />
                <span className="h-3 w-3 rounded-full bg-border" />
                <span className="h-3 w-3 rounded-full bg-border" />
              </div>
              <div className="mx-auto flex w-full max-w-sm items-center justify-center rounded-md border border-border bg-bg px-3 py-1 text-[12px] text-text-faint">
                riversidefc.{DOMAIN}
              </div>
            </div>

            {/* Site body */}
            <div className="p-5 sm:p-8">
              {/* Drop-in slot: replace this block with a real screenshot (<img>) */}
              <div
                className="relative flex min-h-[220px] flex-col items-start justify-center overflow-hidden rounded-md border border-border p-6 sm:min-h-[280px] sm:p-10"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-section) 0%, var(--color-bg-raised) 100%)",
                }}
              >
                <span className="mb-4 inline-block rounded-full border border-border bg-bg/60 px-2.5 py-1 text-[11px] uppercase tracking-[0.06em] text-text-muted sm:absolute sm:right-3 sm:top-3 sm:mb-0">
                  Placeholder preview
                </span>

                <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-accent-light">
                  {PREVIEW_CLUB.name}
                </span>
                <h3 className="mt-3 max-w-md text-2xl font-bold text-text sm:text-3xl">
                  {PREVIEW_CLUB.headline}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] text-text-muted">
                  {PREVIEW_CLUB.subline}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="btn-primary pointer-events-none text-[14px]">
                    Book a Trial
                  </span>
                  <span className="btn-ghost pointer-events-none text-[14px]">
                    View Fixtures
                  </span>
                </div>
              </div>

              {/* 3-up feature strip */}
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-md border border-border bg-bg-raised-2 p-4"
                  >
                    <p className="text-sm font-semibold text-text">{f.title}</p>
                    <p className="mt-1 text-[13px] text-text-muted">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
