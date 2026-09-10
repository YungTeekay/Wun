import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wun Digital — The Full Diary System",
  description:
    "A done-for-you system that brings UK trades a steady stream of interested local clients and books the work for you — site, ads and automated follow-up. Book a free 15-minute call.",
  openGraph: {
    title: "Wun Digital — The Full Diary System",
    description:
      "A done-for-you system that brings UK trades a steady stream of interested local clients and books the work for you — site, ads and automated follow-up. Book a free 15-minute call.",
    siteName: "Wun Digital",
    type: "website",
    // TODO: add OG image at /public/og.jpg and reference it here.
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f2f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/*
          Archivo (400, 800) — the only typeface.
          Loaded as a browser stylesheet rather than next/font/google because
          build-time font fetching is unavailable in this environment. Swap to
          `next/font/google` if your build has network access at build time.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
