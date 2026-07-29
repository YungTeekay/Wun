"use client";

import { useState } from "react";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";
import { whatsappHref } from "@/lib/config";

const WA_MESSAGE =
  "Hi Wun — I'd like to talk about building a Lead Machine for my business.";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const payload = {
      name: data.get("name"),
      business: data.get("business"),
      contact: data.get("contact"),
      message: data.get("message"),
    };

    // TODO: POST to your endpoint
    void payload;

    setSent(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (sent) {
    return (
      <div className="formcard">
        <div className="success">
          <span className="success__check" aria-hidden="true">
            <CheckIcon size={30} />
          </span>
          <h2 className="h3">Got it — thank you.</h2>
          <p>
            Your enquiry is in. We reply within one business day — usually much
            sooner. Want to jump the queue?
          </p>
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
      </div>
    );
  }

  return (
    <div className="formcard">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">
            Name <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
          />
        </div>

        <div className="field">
          <label htmlFor="business">Business</label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            placeholder="What you do"
          />
        </div>

        <div className="field">
          <label htmlFor="contact">
            Phone or email <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            autoComplete="email"
            placeholder="How we reach you"
          />
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Anything you'd like us to know (optional)"
          />
        </div>

        <button type="submit" className="btn btn--primary">
          Send enquiry
        </button>
      </form>
    </div>
  );
}
