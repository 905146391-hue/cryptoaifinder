import Link from "next/link";
import { ArrowRight, Zap, Shield, TrendingUp, Search, Rocket, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Tool Starter Packs | CryptoFinder",
  description: "Stop browsing 400+ tools. Pick your goal and get a hand-picked tool stack that actually works together.",
};

const packs = [
  {
    id: "day-trader",
    title: "Day Trader Stack",
    who: "For active traders who trade daily or weekly",
    tools: "TradingView + 3Commas + CoinGlass + Koinly",
    problem: "Your tabs are out of control. Charts, orders, taxes — all in separate windows. This stack unifies them.",
    solution: "A battle-tested stack covering charting, execution, data, and tax in one workflow.",
    icon: "TrendingUp",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "long-term-holder",
    title: "Long-Term Holder Stack",
    who: "For investors who buy and hold, not trade",
    tools: "Ledger + CoinStats + Koinly + MetaMask",
    problem: "Crypto scattered across wallets and exchanges. No idea of real P&L. Tax season is panic.",
    solution: "Lock it down, track everything, handle taxes without the headache.",
    icon: "Shield",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: "defi-farmer",
    title: "DeFi Farmer Stack",
    who: "For yield farmers, liquidity providers, and chain-hoppers",
    tools: "DeBank + 1inch + GoPlus + Nansen",
    problem: "Too many protocols, too many chains. Need to track positions, find routes, and stay safe.",
    solution: "Track all positions, find the best routes, stay secure.",
    icon: "Zap",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "crypto-beginner",
    title: "Crypto Beginner Stack",
    who: "For anyone who just bought their first crypto",
    tools: "Coinbase + MetaMask + CoinGecko + Ledger",
    problem: "Just bought ETH. Where to store it? How to track it? What is happening?",
    solution: "One exchange, one wallet, one research tool, one hardware backup.",
    icon: "BookOpen",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "on-chain-researcher",
    title: "On-Chain Researcher Stack",
    who: "For analysts, researchers, and data nerds",
    tools: "Messari + Glassnode + Dune + Arkham",
    problem: "Need institutional-grade data without the hedge fund budget. Want alpha before the crowd.",
    solution: "Research, on-chain data, dashboards, entity tracking — your research desk.",
    icon: "Search",
    color: "from-yellow-500 to-amber-500",
  },
];

const iconMap: Record<string, any> = { TrendingUp, Shield, Zap, BookOpen, Search };

export default function StartHerePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <nav className="flex items-center gap-2 text-sm text-[#475569] mb-6">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <span>/</span>
          <span className="text-white">Starter Packs</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Stop Browsing. <span className="text-cyan-400">Start Using.</span>
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed max-w-3xl">
            446 tools is too many. You do not need all of them. You need the right ones that work together.
            Pick your goal below and get a battle-tested tool stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {packs.map((pack) => (
            <Link
              key={pack.id}
              href={"/start-here/" + pack.id}
              className="group bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-6 hover:border-cyan-500/30 transition-all"
            >
              <div className={"w-10 h-10 rounded-lg bg-gradient-to-br " + pack.color + " flex items-center justify-center mb-3"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400">{pack.title}</h3>
              <p className="text-xs text-[#475569] mb-3">{pack.who}</p>
              <p className="text-sm text-[#64748b] mb-2">Tools: {pack.tools}</p>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{pack.solution}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
