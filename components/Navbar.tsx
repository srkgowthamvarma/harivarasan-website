import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Harivarasan Logo"
            width={50}
            height={50}
          />

          <div>
            <h2 className="text-[#003B8F] font-bold text-2xl">
              HARIVARASAN
            </h2>

            <p className="text-xs text-gray-600">
              Systems Pvt Ltd
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-gray-700">

          <a href="/" className="hover:text-[#003B8F] transition">
            Home
          </a>

          <a href="/about" className="hover:text-[#003B8F] transition">
            About
          </a>

          <a href="/services" className="hover:text-[#003B8F] transition">
            Services
          </a>

          <a href="/projects" className="hover:text-[#003B8F] transition">
            Projects
          </a>

          <a href="/contact" className="hover:text-[#003B8F] transition">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}