"use client";

import React from "react";

export default function PixabayImage({ title, idx }) {
  const [imageUrl, setImageUrl] = React.useState("");

  React.useEffect(() => {
    // Use Lorem Picsum which provides reliable placeholder images
    // Different seeds for different posts to get variety
    const seeds = [10, 20, 30, 40, 50, 60, 70, 80];
    const seed = seeds[idx % seeds.length];
    
    const url = `https://picsum.photos/300/150?random=${seed}`;
    setImageUrl(url);
  }, [idx]);

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
