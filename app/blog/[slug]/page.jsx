import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

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
        <h1 className="hero-title" style={{ fontSize: "2rem", marginBottom: "12px" }}>
          {data.title}
        </h1>
        {data.date && (
          <p style={{ fontSize: "0.8rem", opacity: 0.7, marginBottom: "24px" }}>
            {new Date(data.date).toLocaleDateString()}
          </p>
        )}
        <article className="service-card">
          <MDXRemote source={content} />
        </article>
      </div>
    </main>
  );
}
