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
      const { data } = matter(raw);
      return {
        slug: file.replace(".mdx", ""),
        title: data.title || file,
        date: data.date || null
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

        <div className="service-grid" style={{ marginTop: "30px" }}>
          {posts.map((post, idx) => (
            <Reveal key={post.slug} delay={0.05 * (idx + 1)} className="service-card" style={{ position: "relative", paddingRight: "187px" }}>
              <div>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.date && (
                  <p className="meta" style={{ fontSize: "0.8rem", marginBottom: "6px" }}>
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                )}
              </div>
              <div style={{ position: "absolute", top: "4px", right: "22px", width: "150px", height: "90px", overflow: "hidden" }}>
                <PixabayImage title={post.title} idx={idx} size="small" />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="meta" style={{ marginTop: "20px", textAlign: "center" }}>
          Capital · Character · Conviction — a perspective from K3 Capital Solutions.
        </p>
      </div>
    </Section>
  );
}
