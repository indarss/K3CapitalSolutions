// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "K3 Capital Solutions",
  description:
    "Independent investment advisory for sophisticated and high-net-worth clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="app-root">

        {/* ===========================================================
             SAFE SCROLL-ON-LOAD SCRIPT
           =========================================================== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const runScroll = () => {
                  try {
                    const params = new URLSearchParams(window.location.search);
                    const target = params.get("scroll");
                    if (!target) return;

                    // Delay ensures layout, CSS and framer-motion are all hydrated
                    setTimeout(() => {
                      const el = document.getElementById(target);
                      if (el) {
                        window.scrollTo({
                          top: el.offsetTop - 90,
                          behavior: "smooth"
                        });
                      }
                    }, 400);
                  } catch (err) {
                    console.error("Scroll script error:", err);
                  }
                };

                // Run on page load
                window.addEventListener("load", runScroll);

                // Run again on browser back/forward navigation
                window.addEventListener("popstate", runScroll);
              })();
            `,
          }}
        />

        {/* ======================
            MAIN APPLICATION
           ====================== */}
        {children}

      </body>
    </html>
  );
}
