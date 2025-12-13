"use client";

import React from "react";

export default function PixabayImage({ title, idx }) {
  const [imageUrl, setImageUrl] = React.useState("");

  React.useEffect(() => {
    const titleLower = title.toLowerCase();
    
    // Map blog titles to Unsplash search terms
    let searchTerm = "finance,market";
    if (titleLower.includes("market") || titleLower.includes("rollercoaster")) {
      searchTerm = "stock,market,graph";
    } else if (titleLower.includes("emerging") || titleLower.includes("developed")) {
      searchTerm = "global,investment,international";
    } else if (titleLower.includes("alternative")) {
      searchTerm = "portfolio,investment,alternative";
    } else if (titleLower.includes("size") || titleLower.includes("fit")) {
      searchTerm = "financial,planning,strategy";
    }
    
    // Create a seed from the title for consistent images
    const seed = title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const imageId = Math.abs(seed % 1000);
    
    // Use Unsplash with financial search terms
    const url = `https://source.unsplash.com/300x150/?${searchTerm}&sig=${imageId}`;
    setImageUrl(url);
  }, [title, idx]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100px", backgroundColor: "var(--surface-alt)", borderRadius: "8px", overflow: "hidden" }}>
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
