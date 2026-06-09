import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Day Trader Stack | CryptoFinder",
  description: "For active traders who trade daily or weekly. You spend more time switching between tabs than actually trading. Charts here, orders there, tax nightmares later. This ",
  openGraph: {
    title: "Day Trader Stack | CryptoFinder",
    description: "Hand-picked tool stack for for active traders who trade daily or weekly",
    url: "https://cryptoaifinder.com/start-here/day-trader",
  },
};

export default function PackPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <nav className="flex items-center gap-2 text-sm text-[#475569] mb-6">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <span>/</span>
          <Link href="/start-here" className="hover:text-cyan-400">Starter Packs</Link>
          <span>/</span>
          <span className="text-white">Day Trader Stack</span>
        </nav>

        <Link href="/start-here" className="inline-flex items-center gap-1 text-sm text-[#475569] hover:text-cyan-400 mb-6">
          <ArrowLeft size={14} /> All Starter Packs
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Day Trader Stack</h1>
        <p className="text-lg text-[#64748b] mb-6">For active traders who trade daily or weekly</p>

        <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-cyan-400 mb-2">THE PROBLEM</h2>
          <p className="text-[#94a3b8] leading-relaxed">You spend more time switching between tabs than actually trading. Charts here, orders there, tax nightmares later. This stack puts everything in one workflow, so you trade faster and stay compliant.</p>
        </div>

        <h2 className="text-xl font-bold text-white mb-4">Your Tool Stack</h2>
        <div className="space-y-4 mb-10">
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">TradingView</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Charts & Analysis</p>
              </div>
              <a href="/tools/tradingview" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try TradingView <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">The industry standard for technical analysis. Custom indicators, multi-timeframe layouts, and Pine Script for automation. If you trade, you need this open.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">3Commas</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Trade Execution</p>
              </div>
              <a href="/tools/3commas" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try 3Commas <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">Connect your exchange, set up DCA and Grid bots, and let them run 24/7. The SmartTrade terminal handles stop-loss and take-profit across multiple exchanges.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">CoinGlass</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Market Data</p>
              </div>
              <a href="/tools/coinglass" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try CoinGlass <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">Real-time liquidation levels, open interest, funding rates. Know where the market is positioned before you enter a trade.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">Koinly</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Tax Reporting</p>
              </div>
              <a href="/tools/koinly" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try Koinly <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">Every trade is a taxable event. Koinly syncs with your exchanges and generates tax reports in your local format. Do this monthly, not on April 14th.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border border-[#1a1a2e] rounded-xl p-6">
          <h2 className="font-bold text-white mb-2">How to use this stack</h2>
          <ol className="text-sm text-[#94a3b8] space-y-2 list-decimal list-inside">
            <li>Start with tool #1 set it up and get comfortable before adding the next</li>
            <li>Add one new tool per week. Do not install everything at once</li>
            <li>Once all four are running, you have a professional-grade crypto workflow</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
