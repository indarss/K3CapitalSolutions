// Mapping of blog slugs to their image filenames
// The images should be stored in /public/img/blog/
export const blogImageMap = {
  "welcome": "Riding the Market Rollercoaster (Mar 15, 2025)",
  "debunking-alternative-investments": "Debunking the Allure of Alternative Investments (Jun 23, 2024)",
  "Otrais": "When Good Decisions Go Bad (May 3, 2025)",
  "why-investing-isnt-one-size-fits-all": "Why Investing Isn't One-Size-Fits-All (Aug 24, 2024)"
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
