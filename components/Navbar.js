import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/", color: "bg-gradient-to-r from-blue-400 to-blue-600" },
  { name: "Bible", path: "/bible", color: "bg-gradient-to-r from-pink-400 to-pink-600" },
  { name: "Legal", path: "/legal", color: "bg-gradient-to-r from-green-400 to-green-600" },
  { name: "Medical", path: "/medical", color: "bg-gradient-to-r from-yellow-400 to-yellow-600" },
  { name: "Technical", path: "/technical", color: "bg-gradient-to-r from-purple-400 to-purple-600" },
  { name: "Literary", path: "/literary", color: "bg-gradient-to-r from-orange-400 to-orange-600" },
  { name: "Language-pairs", path: "/language-pairs", color: "bg-gradient-to-r from-teal-400 to-teal-600" },
  { name: "Contact", path: "/contact", color: "bg-gradient-to-r from-red-400 to-red-600" },
];

export default function Navbar() {
  return (
    <header className="w-full shadow">
      {/* 🔰 Enlarged Logo and Title - Vertically Stacked */}
      <div className="flex flex-col items-center justify-center bg-amber-700 text-white py-6 px-4">
        <Image
          src="/ader-global.png" // logo file
          alt="ADER GLOBAL Logo"
          width={80}
          height={80}
          className="rounded-full mb-2"
        />
        <h1 className="text-3xl font-extrabold tracking-wide">ADER GLOBAL</h1>
      </div>

      {/* 🔹 Subheading */}
      <div className="bg-gray-100 text-center text-base text-gray-700 py-2 font-medium">
        Translation service provider
      </div>

      {/* 🔗 Navigation Menu */}
      <nav className="flex flex-wrap justify-center gap-3 py-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`${link.color} text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
