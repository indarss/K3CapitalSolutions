import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { testTemplate } from "@/lib/email-templates";

const SECRET = process.env.INTERNAL_API_SECRET;

export async function POST(req: Request) {
  const auth = req.headers.get("authorization");
  if (!SECRET || auth !== `Bearer ${SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await sendEmail({
      to: "you@example.com",
      subject: "Template test",
      html: testTemplate(),
    });

    return NextResponse.json({ ok: true, result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}