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
    <>
      {/* LEFT SIDEBAR — GOLDEN LINE */}
      <div className="sidebar-k3">
        <div className="sidebar-line"></div>
      </div>

      <Section id="blog" style={{ paddingTop: "0px", marginTop: "0px", marginLeft: "-24px" }}>
      <div className="container" style={{ paddingLeft: "24px" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "40px" }}>
            <div style={{ flex: 1 }}>
              <h1 className="hero-title" style={{ color: "#0c2d48" }}>Capital · Character · Conviction</h1>
              <p className="section-intro">
                Long-form reflections, frameworks and perspectives rooted in real-world
                investment experience and disciplined capital stewardship.
              </p>
            </div>
            <div style={{ flex: "0 0 auto", marginTop: "10px" }}>
              <img 
                src="/img/k3_logo.jpg" 
                alt="K3 Capital Solutions" 
                style={{ width: "180px", height: "auto", borderRadius: "8px" }}
              />
            </div>
          </div>
        </Reveal>

        <div style={{ marginTop: "40px" }}>
          {/* Latest Posts Section - 3 Column Grid */}
          <div style={{ marginBottom: "80px" }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "32px", color: "#0c2d48" }}>
              Latest Posts
            </h2>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
              gap: "32px",
              marginBottom: "40px"
            }}>
              {posts.slice(0, 3).map((post, idx) => (
                <Reveal key={post.slug} delay={0.05 * (idx + 1)}>
                  <div style={{ 
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                  }}>
                    {/* Image */}
                    <div style={{ marginBottom: "16px", borderRadius: "8px", overflow: "hidden" }}>
                      <PixabayImage title={post.title} idx={idx} size="medium" />
                    </div>
                    
                    {/* Date */}
                    {post.date && (
                      <p className="meta" style={{ fontSize: "0.85rem", marginBottom: "8px", color: "#d4af37" }}>
                        {new Date(post.date).toLocaleDateString("en-US", { 
                          year: "numeric", 
                          month: "short", 
                          day: "numeric" 
                        })}
                      </p>
                    )}
                    
                    {/* Title */}
                    <h3 style={{ marginBottom: "12px", fontSize: "1.1rem", lineHeight: "1.4" }}>
                      <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="meta" style={{ fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "12px", color: "#d4af37", flex: "1" }}>
                      {post.excerpt}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Archive Section */}
          {posts.length > 3 && (
            <div style={{ marginBottom: "80px" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "32px", color: "#d4af37" }}>
                Archive
              </h2>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                gap: "32px"
              }}>
                {posts.slice(3).map((post, idx) => (
                  <Reveal key={post.slug} delay={0.05 * (idx + 1)}>
                    <div style={{ 
                      display: "flex",
                      flexDirection: "column",
                      height: "100%"
                    }}>
                      {/* Image */}
                      <div style={{ marginBottom: "16px", borderRadius: "8px", overflow: "hidden" }}>
                        <PixabayImage title={post.title} idx={idx} size="medium" />
                      </div>
                      
                      {/* Date */}
                      {post.date && (
                        <p className="meta" style={{ fontSize: "0.85rem", marginBottom: "8px", color: "#d4af37" }}>
                          {new Date(post.date).toLocaleDateString("en-US", { 
                            year: "numeric", 
                            month: "short", 
                            day: "numeric" 
                          })}
                        </p>
                      )}
                      
                      {/* Title */}
                      <h3 style={{ marginBottom: "12px", fontSize: "1.1rem", lineHeight: "1.4" }}>
                        <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="meta" style={{ fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "12px", color: "#d4af37", flex: "1", textAlign: "justify" }}>
                        {post.excerpt}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ position: "relative" }}>
          <p className="meta" style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border-color)", textAlign: "center", color: "#d4af37" }}>
            Capital · Character · Conviction
          </p>
          <div style={{ 
            position: "absolute", 
            bottom: "-60px", 
            right: "-40px", 
            fontSize: "200px", 
            fontWeight: "bold", 
            color: "rgba(212, 175, 55, 0.15)", 
            lineHeight: "1",
            fontFamily: "serif"
          }}>
            K3
          </div>
        </div>
      </div>
    </Section>
    </>
  );
}
