import "./globals.css";

export const metadata = {
  title: "K3 Capital Solutions — Independent Wealth Advisory",
  description:
    "Independent investment advisory and portfolio strategy for high-net-worth individuals and sophisticated investors, based in Latvia and serving international clients."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-root">{children}</body>
    </html>
  );
}
