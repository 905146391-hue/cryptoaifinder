import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Beginner Stack | CryptoFinder",
  description: "For anyone who just bought their first crypto. You just bought some ETH. Where do you store it? How do you track it? What is even happening? Start here. These four too",
  openGraph: {
    title: "Crypto Beginner Stack | CryptoFinder",
    description: "Hand-picked tool stack for for anyone who just bought their first crypto",
    url: "https://cryptoaifinder.com/start-here/crypto-beginner",
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
          <span className="text-white">Crypto Beginner Stack</span>
        </nav>

        <Link href="/start-here" className="inline-flex items-center gap-1 text-sm text-[#475569] hover:text-cyan-400 mb-6">
          <ArrowLeft size={14} /> All Starter Packs
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Crypto Beginner Stack</h1>
        <p className="text-lg text-[#64748b] mb-6">For anyone who just bought their first crypto</p>

        <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-cyan-400 mb-2">THE PROBLEM</h2>
          <p className="text-[#94a3b8] leading-relaxed">You just bought some ETH. Where do you store it? How do you track it? What is even happening? Start here. These four tools are all you need for the first 6 months.</p>
        </div>

        <h2 className="text-xl font-bold text-white mb-4">Your Tool Stack</h2>
        <div className="space-y-4 mb-10">
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">Coinbase</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Your First Exchange</p>
              </div>
              <a href="/tools/coinbase" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try Coinbase <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">The most beginner-friendly exchange. Clean UI, strong security, and FDIC-insured USD balances. Buy, sell, and learn here first.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">MetaMask</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Your First Wallet</p>
              </div>
              <a href="/tools/metamask" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 hover:bg-cyan-500/20 transition-all">View MetaMask <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">The standard Web3 wallet. Once you outgrow holding on Coinbase, move funds here. Connect to dApps, stake, and explore.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">CoinGecko</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Market Research</p>
              </div>
              <a href="/tools/coingecko" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 hover:bg-cyan-500/20 transition-all">View CoinGecko <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">Check any coin price, market cap, trading volume, and social activity. Free, comprehensive, and the first tab you open every morning.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">Ledger Nano</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Long-Term Security</p>
              </div>
              <a href="/tools/ledger-nano" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try Ledger Nano <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">Once your holdings exceed $1000, get a hardware wallet. Ledger keeps your keys offline. Peace of mind for $79.</p>
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
