"use client";

import { useState } from "react";

const TRADES = [
  "Plumber / heating engineer",
  "Electrician",
  "Roofer",
  "Builder",
  "Landscaper",
  "Painter / decorator",
  "Other local trade",
];

type Status = "idle" | "pending" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("pending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMsg(
          json?.error ??
            "Something went wrong. Please check your details and try again.",
        );
        return;
      }

      setFirstName(String(data.name ?? "").trim().split(" ")[0] || "there");
      setDone(true);
    } catch {
      setStatus("error");
      setErrorMsg(
        "We couldn't reach the server. Please try again in a moment.",
      );
    }
  }

  if (done) {
    return (
      <div className="form-panel success" aria-live="polite">
        <span className="square" aria-hidden="true" />
        <h3>Thanks, {firstName}.</h3>
        <p>
          We&apos;ll call you within one working day to set up your 15 minutes.
          Keep an eye on your phone.
        </p>
      </div>
    );
  }

  return (
    <form className="form-panel" onSubmit={onSubmit} noValidate>
      {/* Honeypot */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company_website">Do not fill this in</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
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
          <label htmlFor="business">Business name</label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            placeholder="e.g. Smith Plumbing &amp; Heating"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="07700 900000"
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.co.uk"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="trade">Trade</label>
        <select id="trade" name="trade" required defaultValue="">
          <option value="" disabled>
            Select your trade
          </option>
          {TRADES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="form-error" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={status === "pending"}
      >
        {status === "pending" ? "Sending…" : "Book my free call"}
      </button>

      <p className="smallprint">
        We&apos;ll only use your details to arrange the call. No mailing list, no
        spam.
      </p>
    </form>
  );
}
