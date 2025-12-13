import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import PixabayImage from "../../../components/PixabayImage";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "app/blog/posts");
  const files = fs.readdirSync(postsDir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(".mdx", "") }));
}

export default function BlogPost({ params }) {
  const postsDir = path.join(process.cwd(), "app/blog/posts");
  const filePath = path.join(postsDir, params.slug + ".mdx");
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return (
    <main>
      <div className="container" style={{ paddingTop: "120px", paddingBottom: "64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "40px", alignItems: "flex-start", marginBottom: "40px" }}>
          <div>
            <h1 className="hero-title" style={{ fontSize: "2rem", marginBottom: "12px" }}>
              {data.title}
            </h1>
            {data.date && (
              <p style={{ fontSize: "0.8rem", opacity: 0.7, marginBottom: "24px" }}>
                {new Date(data.date).toLocaleDateString()}
              </p>
            )}
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0" }}>
              Capital · Character · Conviction — a perspective from K3 Capital Solutions.
            </p>
          </div>
          <PixabayImage title={data.title} idx={0} />
        </div>
        <article className="service-card">
          <MDXRemote source={content} />
        </article>
      </div>
    </main>
  );
}
