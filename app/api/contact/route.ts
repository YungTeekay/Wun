import { NextResponse } from "next/server";

// Stub contact handler. Logs the enquiry server-side for now.
// Swap the body of this route for Resend/Formspree/email once a backend exists.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, businessType, message } = body ?? {};

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Name and phone are required." },
        { status: 400 }
      );
    }

    // TODO: wire to a real handler (Resend email / CRM). For now, log it.
    console.log("[contact] new enquiry", {
      name,
      phone,
      businessType,
      message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
