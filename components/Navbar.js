// /components/Navbar.js
import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/", color: "bg-gradient-to-r from-blue-400 to-blue-600" },
  { name: "Bible", path: "/bible", color: "bg-gradient-to-r from-pink-400 to-pink-600" },
  { name: "Legal", path: "/legal", color: "bg-gradient-to-r from-green-400 to-green-600" },
  { name: "Medical", path: "/medical", color: "bg-gradient-to-r from-yellow-400 to-yellow-600" },
  { name: "Technical", path: "/technical", color: "bg-gradient-to-r from-purple-400 to-purple-600" },
  { name: "Literary", path: "/literary", color: "bg-gradient-to-r from-orange-400 to-orange-600" },
  { name: "Language-pairs", path: "/language-pairs", color: "bg-gradient-to-r from-teal-400 to-teal-600" },
];

export default function Navbar() {
  return (
    <header className="w-full shadow">
      <div className="bg-amber-700 text-white text-center py-4 text-3xl font-extrabold tracking-wide">
        ADER GLOBAL
      </div>
      <div className="bg-gray-100 text-center text-base text-gray-700 py-2 font-medium">
        Translation service provider based in India
      </div>
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
