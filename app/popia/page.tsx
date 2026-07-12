import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { DOMAIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "POPIA — Wun",
  description: "Wun's approach to the Protection of Personal Information Act.",
};

export default function PopiaPage() {
  return (
    <>
      <Nav />
      <main className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-3 text-[clamp(2.25rem,6vw,3.5rem)]">
            POPIA Compliance
          </h1>
          <p className="mt-6 text-[15px] text-text-muted">
            This is a placeholder stub — replace with your finalised POPIA
            statement before launch.
          </p>

          <div className="mt-8 flex flex-col gap-6 text-text-muted">
            <section>
              <h2 className="text-xl font-semibold text-text">
                Lawful processing
              </h2>
              <p className="mt-2 text-[15px]">
                In line with South Africa&apos;s Protection of Personal
                Information Act (POPIA), we process your personal information
                lawfully and only for the purpose you gave it to us: responding
                to your enquiry.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-text">
                Consent &amp; minimality
              </h2>
              <p className="mt-2 text-[15px]">
                We collect only what we need to reply, keep it no longer than
                necessary, and never use it for unrelated marketing without your
                consent.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-text">
                Requests &amp; queries
              </h2>
              <p className="mt-2 text-[15px]">
                To access, correct or delete your information, contact us via{" "}
                {DOMAIN}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
