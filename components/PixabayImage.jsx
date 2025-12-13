"use client";

import React from "react";

export default function PixabayImage({ title, idx }) {
  const [imageUrl, setImageUrl] = React.useState("");

  React.useEffect(() => {
    const urls = [
      "https://picsum.photos/400/250?random=1",
      "https://picsum.photos/400/250?random=2",
      "https://picsum.photos/400/250?random=3",
      "https://picsum.photos/400/250?random=4"
    ];
    setImageUrl(urls[idx % urls.length]);
  }, [idx]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px", backgroundColor: "var(--surface-alt)", borderRadius: "8px", overflow: "hidden" }}>
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
