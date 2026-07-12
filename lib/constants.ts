// ─────────────────────────────────────────────────────────────
// Wun — central content constants.
// Everything "Demo" / "Placeholder" lives here so it's find-and-replace
// easy once real clients, logos and numbers exist.
// ─────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27000000000";

export const WHATSAPP_PREFILL =
  "Hi Wun — I'd like to talk about a lead-generating website for my business.";

export function whatsappHref(message: string = WHATSAPP_PREFILL): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DOMAIN = "wunacquisition.co.za";

// In-page anchors
export const NAV_LINKS = [
  { label: "What we do", href: "#services" },
  { label: "Method", href: "#method" },
  { label: "Results", href: "#results" },
] as const;

// Trust-strip demo chips — swap for real client logos once they exist.
export const DEMO_CHIPS = [
  { label: "Football Club", href: "#niches" },
  { label: "Sports Venue", href: "#niches" },
  { label: "Solar Installer", href: "#niches" },
] as const;

// Results band — swap for real numbers once live.
export const RESULTS_STATS = [
  { figure: "7 days", label: "Site to launch" },
  { figure: "×3", label: "Enquiries vs. old site" },
  { figure: "<1 min", label: "AI response time" },
] as const;

// Riverside FC — placeholder preview of a real Wun-built site.
export const PREVIEW_CLUB = {
  name: "Riverside FC",
  headline: "Join the Club Winning on and off the Pitch",
  subline: "Trials open for the 2026 season — book your spot in minutes.",
} as const;
