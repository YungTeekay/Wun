import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import LiveClock from "@/components/LiveClock";
import { WhatsAppIcon, PinIcon, ClockIcon } from "@/components/icons";
import { whatsappHref, whatsappDisplay } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact — Wun",
  description:
    "Your next customer is already looking. Start your Lead Machine — message us on WhatsApp or send an enquiry.",
};

const WA_MESSAGE =
  "Hi Wun — I'd like to talk about building a Lead Machine for my business.";

export default function ContactPage() {
  return (
    <main>
      <section className="section section--contact" style={{ paddingTop: "clamp(64px,10vw,128px)" }}>
        <div className="wrap contact">
          {/* Left */}
          <div className="contact__left">
            <span className="eyebrow">
              <span className="live-dot" aria-hidden="true" />
              Start here
            </span>
            <h1 className="h1">Your next customer is already looking.</h1>
            <p className="lead">
              The only question is whether they find you or someone who answered
              faster. Tell us about your business and we&apos;ll show you the
              machine that catches them first.
            </p>

            <div className="contact__actions">
              <a
                className="btn btn--whatsapp"
                href={whatsappHref(WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>

            <ul className="details">
              <li>
                <WhatsAppIcon size={18} />
                <span>
                  <span className="details__label">WhatsApp</span>
                  {whatsappDisplay}
                </span>
              </li>
              <li>
                <PinIcon />
                <span>
                  <span className="details__label">Where / when</span>
                  South Africa · <LiveClock />
                </span>
              </li>
              <li>
                <ClockIcon />
                <span>
                  <span className="details__label">Response</span>
                  Replies within one business day
                </span>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
