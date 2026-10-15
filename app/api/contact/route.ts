import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const NAME_MIN = 2;
const MESSAGE_MIN = 10;
const MAX_MESSAGE = 2000;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!key || !to) {
    return NextResponse.json(
      {
        error:
          "Email service not configured. Add RESEND_API_KEY and CONTACT_TO_EMAIL to your environment variables.",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < NAME_MIN) {
    return NextResponse.json({ error: "Please enter a name with at least 2 characters." }, { status: 400 });
  }

  if (typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (typeof message !== "string" || message.trim().length < MESSAGE_MIN) {
    return NextResponse.json({ error: "Please enter a message with at least 10 characters." }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const payload = {
    from,
    to,
    subject: `New portfolio message from ${name.trim()}`,
    reply_to: email.trim(),
    text: `${message.trim()}\n\nFrom: ${name.trim()} <${email.trim()}>`,
  };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let details: unknown;
      try {
        details = await response.json();
      } catch {
        details = await response.text();
      }
      console.error("Resend API error:", details);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form request failed:", error);
    return NextResponse.json(
      { error: "Network error while sending the message." },
      { status: 500 },
    );
  }
}
