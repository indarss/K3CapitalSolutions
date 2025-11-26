import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.formData();
  const name = body.get("name");
  const email = body.get("email");

  const res = await fetch(process.env.SUPABASE_URL + "/rest/v1/subscribers", {
    method: "POST",
    headers: {
      "apikey": process.env.SUPABASE_SERVICE_KEY,
      "Authorization": `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({ name, email })
  });

  if (!res.ok) {
    return NextResponse.json({ error: true }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
