// Mapping of blog slugs to their image filenames
// The images should be stored in /public/img/blog/
export const blogImageMap = {
  "welcome": "Riding the Market Rollercoaster (Mar 14, 2025).png",
  "debunking-alternative-investments": "Debunking the Allure of Alternative Investments (Jun 22, 2025).png",
  "Otrais": "When Good Decisions Go Bad (May 2, 2025).png",
  "why-investing-isnt-one-size-fits-all": "Why Investing Isn't One-Size-Fits-All (Aug 23, 2025).png"
};

// Function to get the image path for a blog post
export function getBlogImagePath(slug) {
  const filename = blogImageMap[slug];
  if (filename) {
    return `/img/blog/${filename}`;
  }
  return null;
}
