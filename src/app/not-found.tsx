import Link from "next/link";
import { Search, Home, TrendingUp, Shield, Bot, BarChart3 } from "lucide-react";

const popularTools = [
  { name: "TradingView", href: "/tools/tradingview", icon: BarChart3 },
  { name: "3Commas", href: "/tools/3commas", icon: Bot },
  { name: "Binance", href: "/tools/binance", icon: TrendingUp },
  { name: "Ledger", href: "/tools/ledger-nano", icon: Shield },
  { name: "CoinStats", href: "/tools/coinstats", icon: BarChart3 },
  { name: "CoinGlass", href: "/tools/coinglass", icon: TrendingUp },
];

const popularPages = [
  { name: "Trading Bot Comparison", href: "/compare/3commas-vs-cryptohopper" },
  { name: "Exchange Comparison", href: "/compare/binance-vs-okx" },
  { name: "Hardware Wallet Comparison", href: "/compare/ledger-vs-trezor" },
  { name: "Gas Fee Tracker", href: "/tools/gas-tracker" },
  { name: "Profit Calculator", href: "/tools/profit-calculator" },
  { name: "Staking Calculator", href: "/tools/staking-calculator" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-xl text-[#94a3b8] mt-4">
            This page doesn&apos;t exist — but plenty of great crypto tools do.
          </p>
        </div>

        {/* Search-like CTA */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-cyan-500/20"
          >
            <Search size={18} />
            Browse All 446+ Tools
          </Link>
        </div>

        {/* Popular Tools */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-[#64748b] uppercase tracking-wider mb-4">
            Popular Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {popularTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex items-center gap-2 bg-[#12121a] border border-[#1a1a2e] hover:border-cyan-500/30 rounded-lg p-3 text-left transition-all group"
              >
                <tool.icon size={16} className="text-[#475569] group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm text-[#94a3b8] group-hover:text-white transition-colors">
                  {tool.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-[#64748b] uppercase tracking-wider mb-4">
            Popular Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="text-sm text-[#64748b] hover:text-cyan-400 transition-colors text-left py-1"
              >
                {page.name} &rarr;
              </Link>
            ))}
          </div>
        </div>

        {/* Home link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-white transition-colors"
        >
          <Home size={14} />
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
