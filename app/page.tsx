import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import SitePreview from "@/components/SitePreview";
import Problem from "@/components/Problem";
import WhatWeDo from "@/components/WhatWeDo";
import WhoItsFor from "@/components/WhoItsFor";
import Method from "@/components/Method";
import Results from "@/components/Results";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <SitePreview />
        <Problem />
        <WhatWeDo />
        <WhoItsFor />
        <Method />
        <Results />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
