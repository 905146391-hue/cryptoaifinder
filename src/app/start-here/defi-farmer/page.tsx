import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeFi Farmer Stack | CryptoFinder",
  description: "For yield farmers, liquidity providers, and chain-hoppers. Too many protocols, too many chains. You need to know where your money is, what is safe, and where the yield actually is",
  openGraph: {
    title: "DeFi Farmer Stack | CryptoFinder",
    description: "Hand-picked tool stack for for yield farmers, liquidity providers, and chain-hoppers",
    url: "https://cryptoaifinder.com/start-here/defi-farmer",
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
          <span className="text-white">DeFi Farmer Stack</span>
        </nav>

        <Link href="/start-here" className="inline-flex items-center gap-1 text-sm text-[#475569] hover:text-cyan-400 mb-6">
          <ArrowLeft size={14} /> All Starter Packs
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">DeFi Farmer Stack</h1>
        <p className="text-lg text-[#64748b] mb-6">For yield farmers, liquidity providers, and chain-hoppers</p>

        <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-cyan-400 mb-2">THE PROBLEM</h2>
          <p className="text-[#94a3b8] leading-relaxed">Too many protocols, too many chains. You need to know where your money is, what is safe, and where the yield actually is. This stack gives you visibility and security.</p>
        </div>

        <h2 className="text-xl font-bold text-white mb-4">Your Tool Stack</h2>
        <div className="space-y-4 mb-10">
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">DeBank</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Position Tracking</p>
              </div>
              <a href="/tools/debank" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 hover:bg-cyan-500/20 transition-all">View DeBank <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">See every DeFi position across all chains in one dashboard. Track debt, collateral, and yield. The DeFi command center.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">1inch</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Best Execution</p>
              </div>
              <a href="/tools/1inch-defi" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 hover:bg-cyan-500/20 transition-all">View 1inch <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">Aggregate liquidity across 400+ DEXs on 12 chains. Split orders across venues for the best price. Essential for any on-chain trade.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">GoPlus Security</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Security Check</p>
              </div>
              <a href="/tools/goplus-security" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 hover:bg-cyan-500/20 transition-all">View GoPlus Security <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">Before you ape into a new protocol, check its contract security. Honeypot detection, rug pull risk, token analysis. Free and fast.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">Nansen</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Smart Money Tracking</p>
              </div>
              <a href="/tools/nansen" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try Nansen <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">See what the smart money is doing. Track whale wallets, protocol flows, and emerging trends before they hit Twitter.</p>
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
