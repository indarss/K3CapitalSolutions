import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "K3 Capital Solutions — Independent Wealth Advisory",
  description:
    "Independent investment advisory and portfolio strategy for high-net-worth individuals and sophisticated investors."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-root">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
