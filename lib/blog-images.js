// Mapping of blog slugs to their image filenames
// The images should be stored in /public/img/blog/
export const blogImageMap = {
  "welcome": "Riding the Market Rollercoaster 2025-03-15",
  "debunking-alternative-investments": "Debunking the Allure of Alternative Investments: A Critical Look at Returns and Risk 2025-06-23",
  "Otrais": "When Good Decisions Go Bad: Investing Across Developed and Emerging Markets 2025-05-03",
  "why-investing-isnt-one-size-fits-all": "Why Investing Isn't One-Size-Fits-All: Adapting Your Portfolio Through Life and Hype 2025-08-24"
};

// Function to get the image path for a blog post
export function getBlogImagePath(slug) {
  const filename = blogImageMap[slug];
  if (filename) {
    // Try common image extensions
    const extensions = ['.webp', '.jpg', '.png', '.jpeg'];
    for (const ext of extensions) {
      return `/img/blog/${filename}${ext}`;
    }
  }
  return null;
}
