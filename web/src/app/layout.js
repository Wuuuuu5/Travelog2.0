import "./globals.css";
import Navbar from "@/components/navbar.jsx";

export const metadata = {
  title: "Travelog",
  description: "Compare New Zealand hotel prices in one search.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
