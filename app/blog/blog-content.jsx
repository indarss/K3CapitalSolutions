"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Section } from "../../components/Section";
import { Reveal } from "../../components/Reveal";
import PixabayImage from "../../components/PixabayImage";

export function BlogContent({ initialPosts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = initialPosts.filter((post) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower)
    );
  });

  const latestPosts = filteredPosts.slice(0, 3);
  const archivePosts = filteredPosts.slice(3);

  return (
    <>
      {/* LEFT SIDEBAR — GOLDEN LINE WITH K3 */}
      <div className="sidebar-k3">
        <div className="sidebar-line"></div>
        <div className="sidebar-text">K3</div>
      </div>

      <Section id="blog" style={{ paddingTop: "0px", marginTop: "0px", marginLeft: "-24px" }}>
        <div className="container" style={{ paddingLeft: "24px" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "40px" }}>
              <div style={{ flex: 1 }}>
                <h1 className="hero-title" style={{ color: "#0c2d48", fontWeight: "bold" }}>Learnings, frameworks, and market notes</h1>
              </div>
              <div style={{ flex: "0 0 auto", marginTop: "0px" }}>
                <img 
                  src="/img/k3_logo.jpg" 
                  alt="K3 Capital Solutions" 
                  style={{ width: "180px", height: "auto", borderRadius: "8px" }}
                />
              </div>
            </div>
          </Reveal>

          {/* Search Box */}
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <input
              type="text"
              placeholder="Search posts…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                maxWidth: "500px",
                padding: "12px 16px",
                fontSize: "1rem",
                border: "1px solid #d4b99e",
                borderRadius: "6px",
                backgroundColor: "#ffffff",
                color: "#0c2d48",
                outline: "none",
                transition: "border-color 0.3s ease",
                fontFamily: "inherit"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#0c2d48";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#d4b99e";
              }}
            />
          </div>

          <div style={{ marginTop: "40px" }}>
            {/* Show results count when searching */}
            {searchTerm && (
              <p style={{ marginBottom: "24px", color: "#555", fontSize: "0.95rem" }}>
                Found {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
              </p>
            )}

            {/* Latest Posts Section - 3 Column Grid */}
            {filteredPosts.length > 0 && (
              <div style={{ marginBottom: "80px" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "32px", color: "#0c2d48" }}>
                  {searchTerm ? "Results" : "Latest Posts"}
                </h2>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                  gap: "32px",
                  marginBottom: "40px"
                }}>
                  {latestPosts.map((post, idx) => (
                    <Reveal key={post.slug} delay={0.05 * (idx + 1)}>
                      <div style={{ 
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                        transition: "box-shadow 0.3s ease"
                      }}>
                        {/* Image */}
                        <div style={{ marginBottom: "0", borderRadius: "0", overflow: "hidden", width: "100%" }}>
                          <PixabayImage title={post.title} idx={idx} size="medium" slug={post.slug} />
                        </div>
                        
                        <div style={{ padding: "20px" }}>
                          {/* Date */}
                          {post.date && (
                            <p className="meta" style={{ fontSize: "0.85rem", marginBottom: "8px", color: "#0c2d48", fontWeight: "500" }}>
                              {new Date(post.date).toLocaleDateString("en-US", { 
                                year: "numeric", 
                                month: "short", 
                                day: "numeric" 
                              })}
                            </p>
                          )}
                          
                          {/* Title */}
                          <h3 style={{ marginBottom: "12px", fontSize: "1.1rem", lineHeight: "1.4", wordWrap: "break-word", overflow: "visible", whiteSpace: "normal" }}>
                            <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                              {post.title}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {/* Archive Section */}
            {archivePosts.length > 0 && (
              <div style={{ marginBottom: "80px" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "32px", color: "#0c2d48" }}>
                  {searchTerm ? "" : "Archive"}
                </h2>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: searchTerm ? "repeat(auto-fit, minmax(280px, 1fr))" : "repeat(3, 1fr)", 
                  gap: "32px",
                  marginBottom: "40px"
                }}>
                  {archivePosts.map((post, idx) => (
                    <Reveal key={post.slug} delay={0.05 * (idx + 1)}>
                      <div style={{ 
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                        transition: "box-shadow 0.3s ease"
                      }}>
                        {/* Image */}
                        <div style={{ marginBottom: "0", borderRadius: "0", overflow: "hidden", width: "100%" }}>
                          <PixabayImage title={post.title} idx={idx} size="medium" slug={post.slug} />
                        </div>
                        
                        <div style={{ padding: "20px" }}>
                          {/* Date */}
                          {post.date && (
                            <p className="meta" style={{ fontSize: "0.85rem", marginBottom: "8px", color: "#0c2d48", fontWeight: "500" }}>
                              {new Date(post.date).toLocaleDateString("en-US", { 
                                year: "numeric", 
                                month: "short", 
                                day: "numeric" 
                              })}
                            </p>
                          )}
                          
                          {/* Title */}
                          <h3 style={{ marginBottom: "12px", fontSize: "1.1rem", lineHeight: "1.4", wordWrap: "break-word", overflow: "visible", whiteSpace: "normal" }}>
                            <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                              {post.title}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {/* No results message */}
            {searchTerm && filteredPosts.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 20px", color: "#555" }}>
                <p style={{ fontSize: "1rem", marginBottom: "8px" }}>No posts found matching "{searchTerm}"</p>
                <p style={{ fontSize: "0.9rem", color: "#999" }}>Try searching with different keywords</p>
              </div>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <h2 className="hero-title" style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #d4b99e", textAlign: "center", color: "#0c2d48", fontWeight: "bold" }}>
              Capital · Character · Conviction
            </h2>
            <div style={{ 
              position: "absolute", 
              bottom: "-40px", 
              right: "-40px", 
              fontSize: "200px", 
              fontWeight: "bold", 
              color: "rgba(212, 175, 55, 0.08)", 
              lineHeight: "1",
              fontFamily: "serif",
              pointerEvents: "none"
            }}>
              K3
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
