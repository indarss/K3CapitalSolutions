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

  // Extract the opening blockquote
  const blockquoteMatch = content.match(/^>\s*(.+?)(?:\n>\s*(.+?))?(?:\n*(?=[^>])|$)/m);
  let blockquote = null;
  let contentWithoutBlockquote = content;
  
  if (blockquoteMatch) {
    const quote = blockquoteMatch[1].trim();
    const attribution = blockquoteMatch[2]?.trim();
    blockquote = { quote, attribution };
    contentWithoutBlockquote = content.replace(/^>\s*(.+?)(?:\n>\s*(.+?))?(?:\n*)/, "").trim();
  }

  return (
    <>
      {/* LEFT SIDEBAR — GOLDEN LINE WITH K3 */}
      <div className="sidebar-k3">
        <div className="sidebar-line"></div>
        <div className="sidebar-text">K3</div>
      </div>

      <main>
      <div className="container" style={{ paddingTop: "20px", paddingBottom: "12px" }}>
      </div>
      <div className="container" style={{ paddingTop: "40px", paddingBottom: "64px" }}>
        <div style={{ 
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px" 
        }}>
          <div style={{ display: "flex", flexDirection: "column", height: "100%", maxWidth: "600px", width: "100%" }}>
            <h1 className="hero-title" style={{ marginBottom: "12px", color: "#0c2d48" }}>
              {data.title}
            </h1>
            {data.date && (
              <p className="meta" style={{ fontSize: "0.85rem", marginBottom: "24px", color: "#0c2d48", fontWeight: "500" }}>
                {new Date(data.date).toLocaleDateString("en-US", { 
                  year: "numeric", 
                  month: "short", 
                  day: "numeric" 
                })}
              </p>
            )}
            <PixabayImage title={data.title} idx={0} slug={params.slug} style={{ marginBottom: "16px", borderRadius: "8px", overflow: "hidden" }} />
          </div>
        </div>

        {/* Opening Quote */}
        {blockquote && (
          <div style={{ 
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px"
          }}>
            <blockquote style={{
              maxWidth: "600px",
              width: "100%",
              textAlign: "center",
              fontSize: "1.3rem",
              fontStyle: "italic",
              color: "#0c2d48",
              borderLeft: "4px solid #d4b99e",
              paddingLeft: "24px",
              margin: "0 0 0 24px",
              lineHeight: "1.6"
            }}>
              <p style={{ marginBottom: "12px", margin: "0 0 12px 0" }}>
                {blockquote.quote}
              </p>
              {blockquote.attribution && (
                <p style={{ fontStyle: "normal", fontSize: "1rem", color: "#0c2d48", margin: "0" }}>
                  {blockquote.attribution}
                </p>
              )}
            </blockquote>
          </div>
        )}

        <article className="service-card">
          <MDXRemote source={contentWithoutBlockquote} />
        </article>
      </div>
    </main>
    </>
  );
}
