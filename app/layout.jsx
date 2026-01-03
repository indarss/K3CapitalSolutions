// app/layout.jsx
import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "K3 Capital Solutions",
  description:
    "Independent investment advisory for sophisticated and high-net-worth clients.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="app-root">

        {/* ===========================================================
             GLOBAL NAVIGATION (must load BEFORE content)
        ============================================================ */}
        <Nav />

        {/* ===========================================================
             SAFE SCROLL-ON-LOAD SCRIPT
        ============================================================ */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const runScroll = () => {
                  try {
                    const params = new URLSearchParams(window.location.search);
                    const target = params.get("scroll");
                    if (!target) return;

                    // Delay ensures layout, CSS and framer-motion animations are ready
                    setTimeout(() => {
                      const el = document.getElementById(target);
                      if (el) {
                        window.scrollTo({
                          top: el.offsetTop,
                          behavior: "smooth"
                        });
                      }
                    }, 400);
                  } catch (err) {
                    console.error("Scroll script error:", err);
                  }
                };

                window.addEventListener("load", runScroll);
                window.addEventListener("popstate", runScroll);
              })();
            `,
          }}
        />

        {/* ===========================================================
             MAIN CONTENT
        ============================================================ */}
        {children}

      </body>
    </html>
  );
}
