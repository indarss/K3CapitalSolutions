import { Resend } from "resend";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { slug } = await req.json();

  const postPath = path.join(process.cwd(), "app/blog/posts", slug + ".mdx");
  const raw = fs.readFileSync(postPath, "utf8");
  const { content, data } = matter(raw);

  const subsRes = await fetch(
    process.env.SUPABASE_URL + "/rest/v1/subscribers?select=email,name",
    {
      headers: {
        apikey: process.env.SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`
      }
    }
  );
  const subscribers = await subsRes.json();

  await Promise.all(
    subscribers.map((sub) =>
      resend.emails.send({
       // from: "K3 Capital Solutions <no-reply@k3capitalsolutions.com>",
        from: "K3 Capital Solutions <no-reply@resend.dev>",
        to: sub.email,
        subject: data.title,
        html: `
          <h1>${data.title}</h1>
          <p>Hello ${sub.name || ""},</p>
          <p>A new article is available at K3 Capital Solutions.</p>
          <hr/>
          <div>${content.replace(/\n/g, "<br/>")}</div>
          <br/>
          <a href="https://k3-capital-solutions.vercel.app/blog/${slug}">Read online</a>
        `
      })
    )
  );

  return Response.json({ success: true });
}
