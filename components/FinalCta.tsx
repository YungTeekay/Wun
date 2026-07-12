import Link from "next/link";
import Reveal from "@/components/Reveal";
import { whatsappHref } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section id="cta" className="scroll-mt-20">
      <div className="container-x py-16 md:py-24">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-lg border bg-bg-raised p-8 text-center sm:p-12 md:p-16"
            style={{
              borderColor: "var(--color-accent)",
              boxShadow:
                "0 0 0 1px var(--color-accent), 0 0 60px var(--color-accent-glow)",
            }}
          >
            <span className="inline-block rounded-full border border-border bg-bg/50 px-3 py-1 text-[12px] uppercase tracking-[0.06em] text-accent-light">
              7 days or your setup fee is free
            </span>

            <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)]">
              Let&apos;s build your lead machine.
            </h2>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Chat on WhatsApp
              </a>
              <Link href="/contact" className="btn-ghost">
                Book a Call
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
