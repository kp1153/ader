import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
export const metadata = {
  title: "ADER GLOBAL",
  description: "Professional Language Translation Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
