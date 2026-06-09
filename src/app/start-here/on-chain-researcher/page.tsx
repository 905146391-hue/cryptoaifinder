import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "On-Chain Researcher Stack | CryptoFinder",
  description: "For analysts, researchers, and data nerds. You need institutional-grade data but are not running a hedge fund. You want to find alpha before the crowd sees it. Thi",
  openGraph: {
    title: "On-Chain Researcher Stack | CryptoFinder",
    description: "Hand-picked tool stack for for analysts, researchers, and data nerds",
    url: "https://cryptoaifinder.com/start-here/on-chain-researcher",
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
          <span className="text-white">On-Chain Researcher Stack</span>
        </nav>

        <Link href="/start-here" className="inline-flex items-center gap-1 text-sm text-[#475569] hover:text-cyan-400 mb-6">
          <ArrowLeft size={14} /> All Starter Packs
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3">On-Chain Researcher Stack</h1>
        <p className="text-lg text-[#64748b] mb-6">For analysts, researchers, and data nerds</p>

        <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-cyan-400 mb-2">THE PROBLEM</h2>
          <p className="text-[#94a3b8] leading-relaxed">You need institutional-grade data but are not running a hedge fund. You want to find alpha before the crowd sees it. This stack is your research desk.</p>
        </div>

        <h2 className="text-xl font-bold text-white mb-4">Your Tool Stack</h2>
        <div className="space-y-4 mb-10">
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">Messari</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Fundamental Research</p>
              </div>
              <a href="/tools/messari-research" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 hover:bg-cyan-500/20 transition-all">View Messari <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">Deep-dive reports on protocols, sectors, and trends. Governance tracking, quarterly reports, and the best crypto research library.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">Glassnode</h3>
                <p className="text-xs text-cyan-400 mt-0.5">On-Chain Data</p>
              </div>
              <a href="/tools/glassnode" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try Glassnode <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">The gold standard for on-chain metrics. SOPR, MVRV, NUPL every metric that matters for cycle analysis and market timing.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">Dune</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Custom Dashboards</p>
              </div>
              <a href="/tools/dune" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try Dune <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">Write SQL queries against blockchain data. Build custom dashboards for any thesis. The most flexible analytics tool in crypto.</p>
          </div>
          <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">Arkham</h3>
                <p className="text-xs text-cyan-400 mt-0.5">Entity Tracking</p>
              </div>
              <a href="/tools/arkham" target="_blank" rel="sponsored noopener" className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 hover:bg-emerald-500/20 transition-all">Try Arkham <ArrowRight className="w-3 h-3" /></a>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed">De-anonymize blockchain addresses. See which institutions, funds, and whales are moving what. Intelligence that was previously only available to governments.</p>
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
