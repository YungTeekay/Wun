import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — Wun Digital",
  description: "How Wun Digital handles the details you share with us.",
};

export default function PrivacyPage() {
  return (
    <main className="container legal">
      <h1>Privacy</h1>
      <p>
        {/* TODO: replace with a full privacy policy. */}
        Wun Digital only uses the details you submit through our booking form to
        arrange and follow up on your free call. We do not add you to a mailing
        list, sell your information, or share it with third parties beyond the
        tools we use to contact you.
      </p>
      <p>
        To ask what we hold about you, or to have it removed, email{" "}
        <a href="mailto:hello@wundigital.co.uk">hello@wundigital.co.uk</a>.
      </p>
      <a className="back" href="/">
        ← Back to home
      </a>
    </main>
  );
}
