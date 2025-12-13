"use client";

import React from "react";

export default function PixabayImage({ title, idx, size = "medium" }) {
  const [imageUrl, setImageUrl] = React.useState("");

  const sizeConfig = {
    small: { width: 120, height: 90 },
    medium: { width: 300, height: 150 },
    large: { width: 460, height: 300 }
  };

  const config = sizeConfig[size] || sizeConfig.medium;

  React.useEffect(() => {
    // Use Lorem Picsum which provides reliable placeholder images
    // Different seeds for different posts to get variety
    const seeds = [10, 20, 30, 40, 50, 60, 70, 80];
    const seed = seeds[idx % seeds.length];
    
    const url = `https://picsum.photos/${config.width}/${config.height}?random=${seed}`;
    setImageUrl(url);
  }, [idx, config.width, config.height]);

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
