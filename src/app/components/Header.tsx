import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/data";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1a1a2e]/50 bg-[#06060b]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CF</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                Crypto<span className="text-cyan-400">Finder</span>
              </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569]" />
              <input
                type="text"
                placeholder={`Search ${categories.find((c) => c.id === "all")?.count ?? 0}+ AI crypto tools...`}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#0d0d14] border border-[#1a1a2e] rounded-lg text-sm text-white placeholder-[#475569] focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
              />
            </div>
          </div>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/about" className="px-3 py-1.5 text-sm text-[#64748b] hover:text-white rounded-md hover:bg-[#0d0d14] transition-all">
              About
            </Link>
            <Link href="/contact" className="px-3 py-1.5 text-sm text-[#64748b] hover:text-white rounded-md hover:bg-[#0d0d14] transition-all">
              Contact
            </Link>
            <Link
              href="https://github.com/905146391-hue/cryptoaifinder"
              target="_blank"
              className="px-3 py-1.5 text-sm text-[#64748b] hover:text-white rounded-md hover:bg-[#0d0d14] transition-all"
            >
              GitHub
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#64748b] hover:text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569]" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#0d0d14] border border-[#1a1a2e] rounded-lg text-sm text-white placeholder-[#475569] focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1a1a2e] bg-[#06060b]">
          <div className="px-4 py-3 space-y-1">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-[#64748b] hover:text-white rounded-md hover:bg-[#0d0d14]">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-[#64748b] hover:text-white rounded-md hover:bg-[#0d0d14]">
              Contact
            </Link>
            <Link
              href="https://github.com/905146391-hue/cryptoaifinder"
              target="_blank"
              className="block px-3 py-2 text-sm text-[#64748b] hover:text-white rounded-md hover:bg-[#0d0d14]"
            >
              GitHub
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
