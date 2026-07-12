"use client";

import { useState } from "react";
import Link from "next/link";
import { whatsappHref } from "@/lib/constants";

const BUSINESS_TYPES = [
  "Football club",
  "Sports venue",
  "Solar installer",
  "Other",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [businessType, setBusinessType] =
    useState<(typeof BUSINESS_TYPES)[number]>("Football club");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      businessType,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-raised-2 text-accent-light">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-text">Thanks — got it.</h2>
        <p className="mt-2 text-[15px] text-text-muted">
          We&apos;ll be in touch within one business day. Want to skip the wait?
        </p>
        <a
          href={whatsappHref("Hi Wun — I just sent an enquiry through your site.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6"
        >
          Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-md border border-border bg-bg px-3.5 py-3 text-[15px] text-text placeholder:text-text-faint focus:border-accent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text">
          Phone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="w-full rounded-md border border-border bg-bg px-3.5 py-3 text-[15px] text-text placeholder:text-text-faint focus:border-accent"
          placeholder="+27 …"
        />
      </div>

      {/* Business type — segmented control */}
      <div>
        <span className="mb-1.5 block text-sm font-medium text-text">
          Business type
        </span>
        <div
          role="radiogroup"
          aria-label="Business type"
          className="grid grid-cols-2 gap-2 sm:grid-cols-4"
        >
          {BUSINESS_TYPES.map((type) => {
            const active = businessType === type;
            return (
              <button
                key={type}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setBusinessType(type)}
                className={`min-h-[44px] rounded-md border px-3 py-2 text-[13px] font-medium transition-colors ${
                  active
                    ? "border-accent bg-bg-raised-2 text-accent-light"
                    : "border-border text-text-muted hover:border-text-faint hover:text-text"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
          Message <span className="text-text-faint">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full resize-y rounded-md border border-border bg-bg px-3.5 py-3 text-[15px] text-text placeholder:text-text-faint focus:border-accent"
          placeholder="What's not working right now?"
        />
      </div>

      {status === "error" && (
        <p className="text-[14px] text-accent-light" role="alert">
          Something went wrong sending that. Please try again, or message us on
          WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>

      <p className="text-[13px] text-text-muted">
        By sending this, you agree we can use your details to respond to your
        enquiry, in line with our{" "}
        <Link href="/privacy" className="text-accent-light underline underline-offset-2">
          privacy policy
        </Link>{" "}
        (POPIA-compliant). We won&apos;t use them for anything else.
      </p>
    </form>
  );
}
