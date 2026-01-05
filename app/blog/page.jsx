import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogContent } from "./blog-content";

export const metadata = {
  title: "Blog — K3 Capital Solutions",
  description:
    "Capital · Character · Conviction — insights and reflections from K3 Capital Solutions."
};

function getPosts() {
  try {
    const postsDir = path.join(process.cwd(), "app/blog/posts");
    const files = fs.readdirSync(postsDir);

    const posts = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
        const { data, content } = matter(raw);
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

    return posts;
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
}

export default function BlogIndex() {
  const posts = getPosts();
  
  return <BlogContent initialPosts={posts} />;
}
