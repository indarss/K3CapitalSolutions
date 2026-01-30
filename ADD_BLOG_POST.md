# How to Add a New Blog Post

This guide is for non-technical users. Follow these simple steps to publish a new blog post on the K3 Capital Solutions website.

---

## Overview

Blog posts are stored as **text files** with the `.mdx` extension. The website automatically picks them up and displays them on the blog page.

---

## Step-by-Step Instructions

### **Step 1: Open Your File Manager**
1. Navigate to the project folder on your computer
2. Go to: `app/blog/posts/`
3. You'll see existing blog posts here (like `welcome.mdx`, `debunking-alternative-investments.mdx`, etc.)

### **Step 2: Create a New File**
1. Right-click in the empty space → **New File**
2. Name it something descriptive, using **hyphens** instead of spaces
   - ✅ Good: `investment-strategies.mdx`
   - ❌ Bad: `Investment Strategies.mdx` or `investment_strategies.mdx`
3. Make sure it ends with `.mdx`

### **Step 3: Open the File in a Text Editor**
1. Right-click the new file → **Open With** → Choose any text editor (Notepad, VS Code, etc.)
2. You now have a blank file ready for your content

---

## Step 4: Add the Post Information (Header)

Copy and paste this template at the very top of your file:

```
---
title: "Your Blog Post Title Here"
date: "2025-01-29"
---
```

**What to fill in:**
- `title`: The headline of your blog post (keep it engaging)
- `date`: Today's date in the format `YYYY-MM-DD` (for example, `2025-01-29`)

**Example:**
```
---
title: "Why Diversification Matters in 2025"
date: "2025-01-29"
---
```

---

## Step 5: (Optional) Add an Opening Quote

If you want to start with an inspiring quote, add it right after the header:

```
> "Your quote goes here"
> 
> — Author Name
```

**Example:**
```
> "The best time to plant a tree was 20 years ago. The second best time is now."
> 
> — Chinese Proverb
```

---

## Step 6: Write Your Blog Post

Now write your actual content. Use these simple formatting rules:

### **Headings** (Section Titles)
```
## Main Section Title
### Subsection Title
#### Sub-subsection Title
```

### **Regular Text**
Just type normally. Line breaks happen automatically.

### **Bold Text**
```
**This text will be bold**
```

### **Italic Text**
```
*This text will be italic*
```

### **Bullet Points**
```
- First point
- Second point
- Third point
```

### **Numbered Lists**
```
1. First step
2. Second step
3. Third step
```

### **Paragraphs**
Just leave a blank line between paragraphs — the website will format them automatically.

---

## Step 7: Complete Example

Here's what a full blog post looks like:

```
---
title: "Smart Investing in Uncertain Times"
date: "2025-01-29"
---

> "In the middle of difficulty lies opportunity."
> 
> — Albert Einstein

## Introduction

The current economic landscape presents both challenges and opportunities for investors.

## Key Strategies

- Diversify across multiple asset classes
- Maintain a long-term perspective
- Stay informed about market trends

## The Importance of Patience

Successful investing requires patience. Markets go up and down, but historically have trended upward over time.

## Conclusion

By following these principles, you can build a resilient investment portfolio that withstands market volatility.
```

---

## Step 8: Save Your File

1. Press **Ctrl + S** (or **Cmd + S** on Mac) to save
2. Close the text editor

---

## Step 9: The Blog Post Appears Automatically!

That's it! The website will automatically:
- ✅ Pick up your new post
- ✅ Display it on the blog page
- ✅ Add a featured image (based on your title)
- ✅ Show it in the correct date order (newest first)

---

## Things to Remember

✅ **Do:**
- Use `.mdx` file extension
- Use hyphens in filenames: `my-post.mdx`
- Use the date format: `YYYY-MM-DD` (2025-01-29)
- Keep titles engaging and descriptive
- Save the file in `app/blog/posts/` folder

❌ **Don't:**
- Use spaces in filenames
- Use special characters (except hyphens)
- Forget the header section with title and date
- Use file extensions other than `.mdx`

---

## Formatting Cheat Sheet

| What You Want | How to Write It |
|---|---|
| **Bold text** | `**your text**` |
| *Italic text* | `*your text*` |
| Heading 1 | `## Your Heading` |
| Heading 2 | `### Your Heading` |
| Bullet list | `- Item one`<br>`- Item two` |
| Numbered list | `1. Item one`<br>`2. Item two` |
| Line break | Leave a blank line |

---

## Need Help?

If something doesn't look right:
1. Double-check the file name (no spaces, ends with `.mdx`)
2. Make sure the header is formatted correctly with the three dashes `---` above and below
3. Try looking at an existing post like `welcome.mdx` to see how it's formatted
4. Ask a technical team member to review your file

---

## That's All!

You're now ready to publish blog posts. The process is simple:
1. Create file in `app/blog/posts/`
2. Add header (title & date)
3. Write your content
4. Save
5. Done!

Enjoy sharing your insights with your audience! 🎉
