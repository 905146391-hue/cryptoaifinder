import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Long-Term Holder Stack | CryptoFinder",
  description: "For investors who buy and hold, not trade. Your crypto is scattered across wallets and exchanges. You do not know your real P&L, and tax season is a scramble. This",
  openGraph: {
    title: "Long-Term Holder Stack | CryptoFinder",
    description: "Hand-picked tool stack for for investors who buy and hold, not trade",
    url: "https://cryptoaifinder.com/start-here/long-term-holder",
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
          <span className="text-white">Long-Term Holder Stack</span>
        </nav>

        <Link href="/start-here" className="inline-flex items-center gap-1 text-sm text-[#475569] hover:text-cyan-400 mb-6">
          <ArrowLeft size={14} /> All Starter Packs
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Long-Term Holder Stack</h1>
        <p className="text-lg text-[#64748b] mb-6">For investors who buy and hold, not trade</p>

        <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-cyan-400 mb-2">THE PROBLEM</h2>
          <p className="text-[#94a3b8] leading-relaxed">Your crypto is scattered across wallets and exchanges. You do not know your real P&L, and tax season is a scramble. This stack locks it down, tracks everything, and keeps you organized.</p>
        </div>

        <h2 className="text-xl font-bold text-white mb-4">Your Tool Stack</h2>
        <div className="space-y-4 mb-10">
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">Ledger Nano</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Cold Storage</p>
              </div>
              <a href="/tools/ledger-nano" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try Ledger Nano <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">The most trusted hardware wallet. Store your long-term holdings offline. If your crypto is on an exchange, it is not your crypto.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">CoinStats</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Portfolio Tracking</p>
              </div>
              <a href="/tools/coinstats" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try CoinStats <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">Connect everything wallets, exchanges, DeFi and see your real net worth in one dashboard. Stop checking 5 apps.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">Koinly</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Tax Reporting</p>
              </div>
              <a href="/tools/koinly" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try Koinly <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">Even holders have taxable events (staking rewards, airdrops, occasional sales). Koinly tracks it all and generates your tax forms.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">MetaMask</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Web3 Access</p>
              </div>
              <a href="/tools/metamask" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 hover:bg-cyan-500/20 transition-all">View MetaMask <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">The gateway to Ethereum and EVM chains. For staking, governance voting, and occasional DeFi interactions.</p>
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
