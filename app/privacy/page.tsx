import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { DOMAIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — Wun",
  description: "How Wun collects and uses your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="container-x py-16 md:py-24">
        <div className="prose-wun max-w-2xl">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-3 text-[clamp(2.25rem,6vw,3.5rem)]">Privacy Policy</h1>
          <p className="mt-6 text-[15px] text-text-muted">
            This is a placeholder policy stub — replace with your finalised
            wording before launch.
          </p>

          <div className="mt-8 flex flex-col gap-6 text-text-muted">
            <section>
              <h2 className="text-xl font-semibold text-text">What we collect</h2>
              <p className="mt-2 text-[15px]">
                When you submit an enquiry we collect your name, phone/WhatsApp
                number, business type and any message you send.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-text">How we use it</h2>
              <p className="mt-2 text-[15px]">
                We use your details only to respond to your enquiry and discuss
                working together. We don&apos;t sell or share your data.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-text">Your rights</h2>
              <p className="mt-2 text-[15px]">
                You can ask us to access or delete your information at any time
                by contacting us via {DOMAIN}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
