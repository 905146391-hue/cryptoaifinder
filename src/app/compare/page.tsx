import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Tool Comparisons 2026 | CryptoFinder",
  description: "Head-to-head comparisons of the best crypto tools. Trading bots, exchanges, wallets, tax software, and charting platforms — find the right tool for your needs.",
  keywords: ["crypto", "comparison", "trading bots", "exchanges", "wallets", "tools"],
  openGraph: {
    title: "Crypto Tool Comparisons | CryptoFinder",
    description: "Head-to-head comparisons of the best crypto tools.",
  },
};

const COMPARISONS = [
  {
    slug: "3commas-vs-cryptohopper",
    tool1: "3Commas",
    tool2: "Cryptohopper",
    title: "3Commas vs Cryptohopper: Which Trading Bot Wins?",
    description: "Both platforms dominate the crypto trading bot space. This head-to-head comparison breaks down pricing, features, ease of use, and supported exchanges.",
    category: "Trading Bots",
  },
  {
    slug: "tradingview-vs-coinglass",
    tool1: "TradingView",
    tool2: "CoinGlass",
    title: "TradingView vs CoinGlass: Charting & Data Showdown",
    description: "TradingView is the undisputed king of charting. CoinGlass is the go-to for derivatives data. Which tool belongs in your stack?",
    category: "Charting & Data",
  },
  {
    slug: "koinly-vs-coinstats",
    tool1: "Koinly",
    tool2: "CoinStats",
    title: "Koinly vs CoinStats: Tax vs Portfolio Tracking",
    description: "Koinly is purpose-built for crypto tax reporting. CoinStats is a portfolio tracker with AI insights. Find the right fit for your workflow.",
    category: "Tax & Portfolio",
  },
  {
    slug: "binance-vs-okx",
    tool1: "Binance",
    tool2: "OKX",
    title: "Binance vs OKX: Top Crypto Exchanges Compared",
    description: "Binance is the world's largest exchange with 600+ coins. OKX is the top choice for derivatives. This comparison covers fees, security, and unique features.",
    category: "Exchanges",
  },
  {
    slug: "ledger-vs-trezor",
    tool1: "Ledger",
    tool2: "Trezor",
    title: "Ledger vs Trezor: Hardware Wallet Security Face-Off",
    description: "Ledger and Trezor are the two most trusted hardware wallet brands. Covers security, supported coins, and pricing.",
    category: "Hardware Wallets",
  },
];

export default function CompareIndexPage() {
  return (
    <div className="min-h-screen bg-[#06060a] text-white">
      {/* Hero */}
      <section className="relative py-16 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6">
            <Scale className="w-4 h-4" />
            Tool Comparisons
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Crypto Tool Comparisons
          </h1>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Honest, head-to-head comparisons of the best crypto tools. Trading bots, exchanges, wallets, tax software — find the right tool for your needs.
          </p>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {COMPARISONS.map((item) => (
              <Link
                key={item.slug}
                href={`/compare/${item.slug}`}
                className="group block bg-[#0a0a10] border border-white/[0.06] rounded-xl p-6 hover:border-purple-500/30 hover:bg-[#0d0d18] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        {item.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {item.tool1}{" "}
                      <span className="text-[#475569] font-normal">vs</span>{" "}
                      {item.tool2}
                    </h2>
                    <p className="text-[#94a3b8] text-sm leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400 group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium whitespace-nowrap">Read Comparison</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-3">More Comparisons Coming Soon</h2>
          <p className="text-[#94a3b8] mb-0">
            We are adding new tool comparisons every week. Got a matchup you would like to see?{" "}
            <Link href="/contact" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
              Let us know
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
