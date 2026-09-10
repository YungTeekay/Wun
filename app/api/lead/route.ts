import { NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  business: z.string().trim().optional().default(""),
  phone: z.string().trim().min(5, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  trade: z.string().trim().min(1, "Please select your trade."),
  // Honeypot: must be empty.
  company_website: z.string().optional().default(""),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = LeadSchema.safeParse(payload);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Please check your details.";
    return NextResponse.json({ ok: false, error: first }, { status: 400 });
  }

  const data = parsed.data;

  // Honeypot tripped — pretend success, do nothing.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: data.name,
    business: data.business,
    phone: data.phone,
    email: data.email,
    trade: data.trade,
    submittedAt: new Date().toISOString(),
  };

  const isDev = process.env.NODE_ENV !== "production";

  // 1) Forward to CRM / automation webhook.
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) {
        console.error("[lead] webhook responded", res.status);
      }
    } catch (err) {
      console.error("[lead] webhook failed", err);
      if (!isDev) {
        return NextResponse.json(
          {
            ok: false,
            error: "We couldn't submit your details. Please try again.",
          },
          { status: 502 },
        );
      }
    }
  } else {
    console.warn("[lead] LEAD_WEBHOOK_URL not set — skipping webhook", lead);
  }

  // 2) Send a notification email via Resend.
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.LEAD_NOTIFY_EMAIL;
  const fromEmail = process.env.LEAD_FROM_EMAIL ?? "leads@wundigital.co.uk";

  if (resendKey && notifyEmail) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Wun Digital Leads <${fromEmail}>`,
          to: [notifyEmail],
          subject: `New lead: ${lead.name}${
            lead.business ? ` (${lead.business})` : ""
          }`,
          text: [
            `Name: ${lead.name}`,
            `Business: ${lead.business || "—"}`,
            `Phone: ${lead.phone}`,
            `Email: ${lead.email}`,
            `Trade: ${lead.trade}`,
            `Submitted: ${lead.submittedAt}`,
          ].join("\n"),
        }),
      });
    } catch (err) {
      // Non-fatal: the lead is already captured via the webhook.
      console.error("[lead] Resend notification failed", err);
    }
  } else {
    console.warn("[lead] Resend not configured — skipping notification email");
  }

  return NextResponse.json({ ok: true });
}
