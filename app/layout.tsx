import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wun — The Lead Machine",
  description:
    "A site that turns clicks into enquiries, ads that fill it, and an AI that answers every lead in under a minute. One machine, run for you, live in 7 days.",
  openGraph: {
    title: "Wun — More customers, less of your week.",
    description:
      "A site that turns clicks into enquiries, ads that fill it, and an AI that answers every lead in under a minute. One machine, run for you, live in 7 days.",
    siteName: "Wun",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts via Google Fonts stylesheet (browser-loaded, no build-time fetch).
            Sora 400/600/700/800 · Inter 400/500/600 · JetBrains Mono 400/500/700 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
