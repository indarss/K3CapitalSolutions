import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Section } from "../../components/Section";
import { Reveal } from "../../components/Reveal";
import "../../app/globals.css";

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
          <p className="eyebrow">Capital · Character · Conviction</p>
          <h1 className="hero-title">Insights & Articles</h1>
          <p className="section-intro">
            Long-form reflections, frameworks and perspectives rooted in real-world
            investment experience and disciplined capital stewardship.
          </p>
        </Reveal>

        <div className="service-grid" style={{ marginTop: "30px" }}>
          {posts.map((post, idx) => (
            <Reveal key={post.slug} delay={0.05 * (idx + 1)} className="service-card">
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
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
