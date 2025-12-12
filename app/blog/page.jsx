import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Section } from "../../components/Section";
import { Reveal } from "../../components/Reveal";

const getImageSearchTerms = (title) => {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes("market") || titleLower.includes("rollercoaster")) {
    return "stock market graph finance";
  } else if (titleLower.includes("emerging") || titleLower.includes("developed")) {
    return "global market investment international";
  } else if (titleLower.includes("alternative") || titleLower.includes("investment")) {
    return "alternative investments portfolio";
  } else if (titleLower.includes("size") || titleLower.includes("fit")) {
    return "investment strategy financial planning";
  }
  
  return "finance investment stock market";
};

export const metadata = {
  title: "Blog — K3 Capital Solutions",
  description:
    "Capital · Character · Conviction — insights and reflections from K3 Capital Solutions."
};

export default function BlogIndex() {
  const postsDir = path.join(process.cwd(), "app/blog/posts");
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
      const { data } = matter(raw);
      return {
        slug: file.replace(".mdx", ""),
        title: data.title || file,
        date: data.date || null
      };
    })
    .sort((a, b) => (a.date && b.date ? (a.date < b.date ? 1 : -1) : 0));

  return (
    <Section id="blog">
      <div className="container">
        <Reveal>
          <div className="highlight-bar"></div>
          <p className="eyebrow">Capital · Character · Conviction</p>
          <h1 className="hero-title">Insights & Articles</h1>
          <p className="section-intro">
            Long-form reflections, frameworks and perspectives rooted in real-world
            investment experience and disciplined capital stewardship.
          </p>
        </Reveal>

        <div className="service-grid" style={{ marginTop: "30px" }}>
          {posts.map((post, idx) => (
            <Reveal key={post.slug} delay={0.05 * (idx + 1)} className="service-card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "center" }}>
              <div>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.date && (
                  <p className="meta" style={{ fontSize: "0.8rem", marginBottom: "6px" }}>
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                )}
                <p className="meta">
                  Capital · Character · Conviction — a perspective from K3 Capital
                  Solutions.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px", backgroundColor: "var(--surface-alt)", borderRadius: "8px", overflow: "hidden" }}>
                <img 
                  src={`https://source.unsplash.com/400x250/?${getImageSearchTerms(post.title)}`}
                  alt={post.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
