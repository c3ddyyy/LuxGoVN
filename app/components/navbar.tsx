import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col tracking-widest text-left">
          <span className="font-serif text-2xl font-bold text-zinc-900 tracking-[0.25em] uppercase">
            LuxGo
          </span>
          <span className="text-[9px] text-zinc-500 tracking-[0.6em] uppercase -mt-1 pl-0.5">
            Vietnam
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-10 text-xs tracking-widest uppercase font-semibold text-zinc-700">
          <Link
            href="xethue"
            className="hover:text-black transition-colors duration-300"
          >
            Dòng Xe Cho Thuê
          </Link>
          <Link
            href="thuvien"
            className="hover:text-black transition-colors duration-300"
          >
            Thư Viện Ảnh
          </Link>
        </nav>

        {/* Quick Access CTAs */}
        <div className="hidden lg:flex items-center space-x-6 text-sm">
          <a
            href="https://zalo.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-[#00A1FF] transition-colors duration-300 font-medium"
          >
            <span className="text-xs uppercase tracking-wider border-b border-zinc-400 pb-0.5">
              Chat Zalo
            </span>
          </a>
          <a
            href="https://facebook.com"
            className="bg-black text-white text-xs uppercase tracking-widest px-5 py-2.5 font-bold hover:bg-zinc-800 transition-all duration-300"
          >
            Liên Hệ Ngay
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-800 hover:text-black focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-6 transition-all duration-300 shadow-lg">
          <nav className="flex flex-col space-y-4 text-sm tracking-widest uppercase font-bold text-zinc-800">
            <Link
              href="xethue"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-black py-2"
            >
              Dòng Xe Cho Thuê
            </Link>
            <Link
              href="thuvien"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-black py-2"
            >
              Thư Viện Ảnh
            </Link>
            <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-zinc-100 border border-zinc-300 text-zinc-900 text-xs uppercase tracking-widest py-3 hover:bg-zinc-200 transition font-bold"
              >
                Chat Zalo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
