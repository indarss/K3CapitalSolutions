import { NextResponse } from "next/server";
import { Resend } from "resend";
import { welcomeTemplate } from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.formData();
    const name = body.get("name");
    const email = body.get("email");

    // Validate inputs
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
      console.error("Missing Supabase environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/subscribers`, {
      method: "POST",
      headers: {
        "apikey": process.env.SUPABASE_SERVICE_KEY,
        "Authorization": `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({ name, email })
    });

    const responseText = await res.text();

    if (!res.ok) {
      console.error("Supabase error:", {
        status: res.status,
        statusText: res.statusText,
        response: responseText
      });

      // Check for duplicate email error
      if (res.status === 409 || responseText.includes("duplicate key") || responseText.includes("unique")) {
        return NextResponse.json(
          { error: "This email is already subscribed" },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: `Database error: ${res.statusText}` },
        { status: res.status }
      );
    }

    // Send welcome email via Resend
    try {
      await resend.emails.send({
        from: "noreply@k3capitalsolutions.com",
        to: email,
        subject: `Welcome to K3 Capital Solutions, ${name}!`,
        html: welcomeTemplate(name),
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't fail the subscription if email fails, but log it
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: error.message || "Subscription failed" },
      { status: 500 }
    );
  }
}

