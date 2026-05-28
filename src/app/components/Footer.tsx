import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a2e]/50 bg-[#06060b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CF</span>
              </div>
              <span className="text-lg font-bold text-white">
                Crypto<span className="text-cyan-400">Finder</span>
              </span>
            </Link>
            <p className="text-sm text-[#475569] max-w-sm leading-relaxed">
              The most comprehensive directory of AI-powered tools for cryptocurrency. Discover, compare, and choose the best tools for your crypto journey.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/905146391-hue/cryptoaifinder" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[#0d0d14] border border-[#1a1a2e] flex items-center justify-center text-[#475569] hover:text-white hover:border-[#2a2a3e] transition-all">
                <Globe size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Directory</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Trading Bots", slug: "trading-bots" },
                { label: "DeFi AI", slug: "defi" },
                { label: "Analytics", slug: "analytics" },
                { label: "Security", slug: "security" },
                { label: "Charting", slug: "charting" },
                { label: "Wallets", slug: "wallet" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={`/categories/${item.slug}`} className="text-sm text-[#475569] hover:text-cyan-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources / Blog */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://medium.com/@905146391/3commas-review-2026-is-it-worth-it-a-complete-breakdown-f1313538a663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#475569] hover:text-cyan-400 transition-colors"
                >
                  3Commas Review 2026
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@905146391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#475569] hover:text-cyan-400 transition-colors"
                >
                  Best AI Trading Bots 2026
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@905146391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#475569] hover:text-cyan-400 transition-colors"
                >
                  Best Portfolio Trackers 2026
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@905146391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#475569] hover:text-cyan-400 transition-colors"
                >
                  CoinStats Review 2026
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@905146391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-400/60 hover:text-cyan-400 transition-colors"
                >
                  More on Medium →
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-[#475569] hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-[#475569] hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-[#475569] hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-[#475569] hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 pt-6 border-t border-[#1a1a2e]/50">
          <p className="text-xs text-[#475569] leading-relaxed">
            <strong className="text-[#64748b]">Affiliate Disclosure:</strong> Some links on CryptoFinder are affiliate links. If you click through and make a purchase or sign up, we may earn a commission at no extra cost to you. This helps us keep the directory free and continuously updated. Our reviews and rankings are never influenced by affiliate partnerships — we only recommend tools we genuinely believe provide value. For more details, see our{" "}
            <Link href="/privacy" className="text-cyan-400/70 hover:text-cyan-400 transition-colors underline">Privacy Policy</Link>.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-[#1a1a2e]/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#333]">
            &copy; {new Date().getFullYear()} CryptoFinder. All rights reserved.
          </p>
          <p className="text-xs text-[#333]">
            Not financial advice. Always DYOR.
          </p>
        </div>
      </div>
    </footer>
  );
}
