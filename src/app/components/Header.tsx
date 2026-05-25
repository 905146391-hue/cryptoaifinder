"use client";

import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1e1e2e] bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400">
              <span className="text-sm font-bold text-white">AI</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Crypto</span>
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Finder
              </span>
            </span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
              <input
                type="text"
                placeholder="Search AI crypto tools..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full rounded-lg border border-[#1e1e2e] bg-[#111118] py-2 pl-10 pr-4 text-sm text-[#e2e8f0] placeholder-[#64748b] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#tools" className="text-sm text-[#64748b] hover:text-white transition-colors">
              Tools
            </a>
            <a href="#categories" className="text-sm text-[#64748b] hover:text-white transition-colors">
              Categories
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#64748b] hover:text-white transition-colors"
            >
              GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#64748b] hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Search & Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
              <input
                type="text"
                placeholder="Search AI crypto tools..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full rounded-lg border border-[#1e1e2e] bg-[#111118] py-2 pl-10 pr-4 text-sm text-[#e2e8f0] placeholder-[#64748b] focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <nav className="flex flex-col gap-2">
              <a href="#tools" className="text-sm text-[#64748b] hover:text-white py-2">Tools</a>
              <a href="#categories" className="text-sm text-[#64748b] hover:text-white py-2">Categories</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#64748b] hover:text-white py-2">GitHub</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
