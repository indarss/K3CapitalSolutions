export function baseTemplate(innerHtml: string) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px;">
      ${innerHtml}
      <hr style="border: none; border-top: 1px solid #d4af37; margin: 30px 0;">
      <p style="color: #666; font-size: 12px;">
        <strong>K3 Capital Solutions</strong><br>
        Independent portfolio architecture and strategic management<br>
        <a href="https://www.k3capitalsolutions.com" style="color: #d4af37; text-decoration: none;">Visit our website</a>
      </p>
    </div>
  `;
}

export function testTemplate() {
  return baseTemplate("<h2>Success</h2><p>Email service is working.</p>");
}

export function welcomeTemplate(name: string) {
  const innerHtml = `
    <h2 style="color: #d4af37;">Welcome, ${name}!</h2>
    <p style="color: #333;">
      Thank you for subscribing to K3 Capital Solutions' insights. You'll now receive our latest research, market analysis, and perspective on capital allocation.
    </p>
    <p style="color: #333;">
      We look forward to sharing our thoughts on markets, risk, and long-term portfolio construction with you.
    </p>
  `;
  return baseTemplate(innerHtml);
}

export function blogPostTemplate(blogTitle: string, blogSlug: string, excerpt: string) {
  const blogUrl = `https://www.k3capitalsolutions.com/blog/${blogSlug}`;
  const innerHtml = `
    <h2 style="color: #d4af37;">New Insight Published</h2>
    <h3 style="color: #333; margin: 20px 0 10px 0;">${blogTitle}</h3>
    <p style="color: #666; font-style: italic; margin-bottom: 15px;">
      ${excerpt}
    </p>
    <div style="text-align: center; margin: 25px 0;">
      <a href="${blogUrl}" style="background-color: #d4af37; color: #1e3a52; padding: 12px 28px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
        Read Full Article
      </a>
    </div>
    <p style="color: #333; font-size: 14px;">
      New content from K3 Capital Solutions on markets, risk, and portfolio construction.
    </p>
  `;
  return baseTemplate(innerHtml);
}
