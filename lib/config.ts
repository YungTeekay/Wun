// ─────────────────────────────────────────────────────────────
// Wun — single typed site config. Change these, not the JSX.
// Env overrides are optional; defaults match the brief.
// ─────────────────────────────────────────────────────────────

export type SiteConfig = {
  /** Raw WhatsApp number — digits and non-digits tolerated; stripped for wa.me. */
  whatsappNumber: string;
  /** Build slots remaining, shown in the scarcity chip. */
  slotsLeft: number;
  /** Toggle the amber scarcity chip on the guarantee band. */
  showScarcity: boolean;
  /** Minimum qualified enquiries promised in the 30-day guarantee. */
  guaranteeCount: number;
};

export const config: SiteConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27662657046",
  slotsLeft: Number(process.env.NEXT_PUBLIC_SLOTS_LEFT ?? 3),
  showScarcity: (process.env.NEXT_PUBLIC_SHOW_SCARCITY ?? "true") !== "false",
  guaranteeCount: Number(process.env.NEXT_PUBLIC_GUARANTEE_COUNT ?? 10),
};

/** Digits only, for the wa.me deep link. */
export const whatsappDigits = config.whatsappNumber.replace(/\D/g, "");

/** wa.me deep link, optionally with a prefilled message. */
export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${whatsappDigits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Human-readable, e.g. +27662657046. */
export const whatsappDisplay = `+${whatsappDigits}`;

/** The (next) month shown in the scarcity chip — derived, not hardcoded. */
function nextMonthName(): string {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return next.toLocaleString("en-US", { month: "long" });
}
export const scarcityMonth = nextMonthName();
