import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
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
    <>
      {/* LEFT SIDEBAR — GOLDEN LINE WITH K3 */}
      <div className="sidebar-k3">
        <div className="sidebar-line"></div>
        <div className="sidebar-text">K3</div>
      </div>

      <main>
      <div className="container" style={{ paddingTop: "20px", paddingBottom: "12px" }}>
        <nav style={{ fontSize: "0.9rem", color: "#666" }}>
          <Link href="/blog" style={{ color: "#1c4e80", textDecoration: "none", fontWeight: "500" }}>
            Blog
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>{data.title}</span>
        </nav>
      </div>
      <div className="container" style={{ paddingTop: "100px", paddingBottom: "64px" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "40px", 
          marginBottom: "40px" 
        }}>
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <h1 className="hero-title" style={{ fontSize: "2rem", marginBottom: "12px" }}>
              {data.title}
            </h1>
            {data.date && (
              <p style={{ fontSize: "0.8rem", opacity: 0.7, marginBottom: "24px", color: "#d4af37" }}>
                {new Date(data.date).toLocaleDateString()}
              </p>
            )}
            <PixabayImage title={data.title} idx={0} style={{ marginBottom: "16px", borderRadius: "8px", overflow: "hidden" }} />
            <p style={{ fontSize: "0.9rem", color: "#d4af37", marginBottom: "0", flex: "1" }}>
              Capital · Character · Conviction
            </p>
          </div>
        </div>
        <article className="service-card">
          <MDXRemote source={content} />
        </article>
      </div>
    </main>
    </>
  );
}
