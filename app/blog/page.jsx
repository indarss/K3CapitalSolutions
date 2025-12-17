import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import React from "react";
import { Section } from "../../components/Section";
import { Reveal } from "../../components/Reveal";
import PixabayImage from "../../components/PixabayImage";

const getImageUrl = (title, idx) => {
  const images = [
    "https://pixabay.com/api/?key=45949616-6e9ee3c7eb8d29a4cf9bfd65f&q=stock+market&image_type=photo&per_page=3&safesearch=true&image_type=photo&min_width=400&min_height=250",
    "https://pixabay.com/api/?key=45949616-6e9ee3c7eb8d29a4cf9bfd65f&q=investment+strategy&image_type=photo&per_page=3&safesearch=true&image_type=photo&min_width=400&min_height=250",
    "https://pixabay.com/api/?key=45949616-6e9ee3c7eb8d29a4cf9bfd65f&q=financial+graph&image_type=photo&per_page=3&safesearch=true&image_type=photo&min_width=400&min_height=250",
    "https://pixabay.com/api/?key=45949616-6e9ee3c7eb8d29a4cf9bfd65f&q=global+markets&image_type=photo&per_page=3&safesearch=true&image_type=photo&min_width=400&min_height=250"
  ];
  
  return images[idx % images.length];
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
      const { data, content } = matter(raw);
      // Extract first 150 characters of content as excerpt
      const excerpt = content
        .replace(/^#+\s+/gm, "")
        .trim()
        .substring(0, 150) + "...";
      return {
        slug: file.replace(".mdx", ""),
        title: data.title || file,
        date: data.date || null,
        excerpt: data.description || excerpt
      };
    })
    .sort((a, b) => (a.date && b.date ? (a.date < b.date ? 1 : -1) : 0));

  return (
    <Section id="blog" style={{ paddingTop: "0px", marginTop: "-40px", marginLeft: "-24px" }}>
      <div className="container" style={{ paddingLeft: "24px" }}>
        <Reveal>
          <div className="highlight-bar"></div>
          <span className="hero-eyebrow">Insights and Thoughts from K3 Capital Solutions Perspective</span>
          <h1 className="hero-title">Capital · Character · Conviction</h1>
          <p className="section-intro">
            Long-form reflections, frameworks and perspectives rooted in real-world
            investment experience and disciplined capital stewardship.
          </p>
        </Reveal>

        <div style={{ marginTop: "40px" }}>
          {/* Latest Posts Section */}
          <div style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "32px", color: "var(--text-primary)" }}>
              Latest Posts
            </h2>
            {posts.slice(0, 3).map((post, idx) => (
              <Reveal key={post.slug} delay={0.05 * (idx + 1)}>
                <div style={{ 
                  borderBottom: "1px solid var(--border-color)", 
                  paddingBottom: "24px", 
                  marginBottom: "24px",
                  paddingTop: idx === 0 ? "0px" : "24px"
                }}>
                  <div style={{ marginBottom: "8px" }}>
                    {post.date && (
                      <p className="meta" style={{ fontSize: "0.85rem", marginBottom: "8px", color: "var(--text-secondary)" }}>
                        {new Date(post.date).toLocaleDateString("en-US", { 
                          year: "numeric", 
                          month: "short", 
                          day: "numeric" 
                        })}
                      </p>
                    )}
                  </div>
                  <h3 style={{ marginBottom: "12px" }}>
                    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="meta" style={{ fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "12px", color: "var(--text-secondary)" }}>
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} style={{ 
                    fontSize: "0.9rem", 
                    fontWeight: "500",
                    color: "var(--accent-color)",
                    textDecoration: "none"
                  }}>
                    Read more →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Archive Section */}
          {posts.length > 3 && (
            <div>
              <h2 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "32px", color: "var(--text-primary)" }}>
                Archive
              </h2>
              {posts.slice(3).map((post, idx) => (
                <Reveal key={post.slug} delay={0.05 * (idx + 1)}>
                  <div style={{ 
                    borderBottom: "1px solid var(--border-color)", 
                    paddingBottom: "24px", 
                    marginBottom: "24px",
                    paddingTop: idx === 0 ? "0px" : "24px"
                  }}>
                    <div style={{ marginBottom: "8px" }}>
                      {post.date && (
                        <p className="meta" style={{ fontSize: "0.85rem", marginBottom: "8px", color: "var(--text-secondary)" }}>
                          {new Date(post.date).toLocaleDateString("en-US", { 
                            year: "numeric", 
                            month: "short", 
                            day: "numeric" 
                          })}
                        </p>
                      )}
                    </div>
                    <h3 style={{ marginBottom: "12px" }}>
                      <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="meta" style={{ fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "12px", color: "var(--text-secondary)" }}>
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`} style={{ 
                      fontSize: "0.9rem", 
                      fontWeight: "500",
                      color: "var(--accent-color)",
                      textDecoration: "none"
                    }}>
                      Read more →
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        <p className="meta" style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border-color)", textAlign: "center" }}>
          Capital · Character · Conviction — a perspective from K3 Capital Solutions.
        </p>
      </div>
    </Section>
  );
}
