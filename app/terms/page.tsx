import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms — Wun Digital",
  description: "The terms that apply to using the Wun Digital website.",
};

export default function TermsPage() {
  return (
    <main className="container legal">
      <h1>Terms</h1>
      <p>
        {/* TODO: replace with full terms of service. */}
        This website is provided for information about Wun Digital&apos;s
        services. Booking a call places you under no obligation, and the details
        we discuss are indicative until confirmed in a written agreement.
      </p>
      <p>
        Questions about these terms? Email{" "}
        <a href="mailto:hello@wundigital.co.uk">hello@wundigital.co.uk</a>.
      </p>
      <a className="back" href="/">
        ← Back to home
      </a>
    </main>
  );
}
