"use client";

import { Globe, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] bg-[#0a0a0f] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400">
                <span className="text-sm font-bold text-white">AI</span>
              </div>
              <span className="text-lg font-bold">
                <span className="text-white">Crypto</span>
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Finder
                </span>
              </span>
            </div>
            <p className="text-sm text-[#64748b]">
              The most comprehensive directory of AI-powered tools for cryptocurrency.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#tools" className="text-sm text-[#64748b] hover:text-white transition-colors">
                  All Tools
                </a>
              </li>
              <li>
                <a href="#categories" className="text-sm text-[#64748b] hover:text-white transition-colors">
                  Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111118] border border-[#1e1e2e] text-[#64748b] hover:text-white hover:border-indigo-500/30 transition-all"
                aria-label="Twitter"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111118] border border-[#1e1e2e] text-[#64748b] hover:text-white hover:border-indigo-500/30 transition-all"
                aria-label="GitHub"
              >
                <Link className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1e1e2e] text-center">
          <p className="text-sm text-[#64748b]">
            © 2026 Crypto AI Finder. All rights reserved. Some links are affiliate links.
          </p>
        </div>
      </div>
    </footer>
  );
}
