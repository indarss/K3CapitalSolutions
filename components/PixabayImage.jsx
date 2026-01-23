"use client";

import React from "react";
import { getBlogImagePath } from "../lib/blog-images";

export default function PixabayImage({ title, idx, size = "medium", slug }) {
  const [imageUrl, setImageUrl] = React.useState("");

  const sizeConfig = {
    small: { width: 150, height: 90 },
    medium: { width: 300, height: 150 },
    large: { width: 460, height: 300 }
  };

  const config = sizeConfig[size] || sizeConfig.medium;

  React.useEffect(() => {
    // If a slug is provided, try to use the static blog image
    if (slug) {
      const blogImagePath = getBlogImagePath(slug);
      if (blogImagePath) {
        setImageUrl(blogImagePath);
        return;
      }
    }

    // Fallback to Lorem Picsum placeholder images
    // Different seeds for different posts to get variety
    const seeds = [10, 20, 30, 40, 50, 60, 70, 80];
    const seed = seeds[idx % seeds.length];
    
    const url = `https://picsum.photos/${config.width}/${config.height}?random=${seed}`;
    setImageUrl(url);
  }, [idx, slug, config.width, config.height]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: `${config.width}px`, height: `${config.height}px`, backgroundColor: "var(--surface-alt)", borderRadius: "8px", overflow: "hidden" }}>
      {imageUrl && (
        <img 
          src={imageUrl}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
    </div>
  );
}
