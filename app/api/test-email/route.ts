import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const result = await resend.emails.send({
      from: "noreply@k3capitalsolutions.com",
      to: ["kristseiduks3@gmail.com"],
      cc: ["sparnins@hotmail.com"],
      subject: "Resend test from Vercel",
      html: `
        <h2>Success 🎉</h2>
        <p>This email was sent from your Vercel app using Resend.</p>
      `,
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}