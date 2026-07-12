import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Wun",
  description:
    "Tell us what's not working. We'll reply within one business day — or chat now on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3 text-[clamp(2.25rem,6vw,3.5rem)]">
            Let&apos;s talk leads.
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            Tell us what&apos;s not working right now. We&apos;ll come back with
            a plan — fast.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-8">
          {/* Left — form */}
          <ContactForm />

          {/* Right — alternate contact */}
          <div className="flex flex-col gap-6">
            <div className="card">
              <h2 className="text-lg font-semibold text-text">
                Prefer WhatsApp?
              </h2>
              <p className="mt-2 text-[15px] text-text-muted">
                Skip the form and message us directly. It&apos;s usually the
                fastest way to reach us.
              </p>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-5 w-full"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-text">Response time</h2>
              <p className="mt-2 text-[15px] text-text-muted">
                We reply to every enquiry within one business day — often much
                sooner.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
