import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Zap, BarChart3, Wallet, Building2, PieChart, FileText, Newspaper, Bot } from "lucide-react";
import type { Metadata } from "next";

const categories = [
  {
    slug: "best-crypto-trading-bots",
    title: "Crypto Trading Bots",
    description: "Automated trading with AI strategies. Grid, DCA, arbitrage — find the best bot for your style.",
    icon: Bot,
    count: 10,
    color: "from-cyan-500 to-blue-500",
  },
  {
    slug: "best-defi-tools",
    title: "DeFi Tools",
    description: "Decentralized exchanges, lending protocols, and yield aggregators ranked by TVL and usability.",
    icon: TrendingUp,
    count: 10,
    color: "from-emerald-500 to-green-500",
  },
  {
    slug: "best-crypto-analytics-tools",
    title: "Crypto Analytics Tools",
    description: "On-chain data, smart money tracking, and market intelligence for data-driven decisions.",
    icon: BarChart3,
    count: 10,
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "best-crypto-security-tools",
    title: "Crypto Security Tools",
    description: "Smart contract audits, multi-sig wallets, and blockchain security platforms to protect your assets.",
    icon: Shield,
    count: 10,
    color: "from-red-500 to-orange-500",
  },
  {
    slug: "best-crypto-charting-tools",
    title: "Crypto Charting Tools",
    description: "Professional-grade charting platforms with AI indicators and custom scripting.",
    icon: BarChart3,
    count: 10,
    color: "from-yellow-500 to-amber-500",
  },
  {
    slug: "best-crypto-wallets",
    title: "Crypto Wallets",
    description: "Hardware, software, and multi-sig wallets ranked by security, UX, and chain support.",
    icon: Wallet,
    count: 10,
    color: "from-blue-500 to-indigo-500",
  },
  {
    slug: "best-crypto-exchanges",
    title: "Crypto Exchanges",
    description: "Centralized and decentralized exchanges compared by fees, liquidity, and supported assets.",
    icon: Building2,
    count: 10,
    color: "from-teal-500 to-cyan-500",
  },
  {
    slug: "best-crypto-portfolio-trackers",
    title: "Portfolio Trackers",
    description: "Track your entire crypto portfolio across chains and exchanges with AI-powered insights.",
    icon: PieChart,
    count: 10,
    color: "from-violet-500 to-purple-500",
  },
  {
    slug: "best-crypto-tax-software",
    title: "Crypto Tax Software",
    description: "Automate crypto tax reporting with AI. DeFi, NFT, and multi-chain transaction support.",
    icon: FileText,
    count: 8,
    color: "from-rose-500 to-red-500",
  },
  {
    slug: "best-crypto-news-data",
    title: "Crypto News & Data",
    description: "Institutional-grade research, real-time news, and on-chain data feeds for market edge.",
    icon: Newspaper,
    count: 10,
    color: "from-sky-500 to-blue-500",
  },
  {
    slug: "best-ai-crypto-tools",
    title: "AI Crypto Tools",
    description: "AI-powered tools across all categories — from autonomous agents to intelligent analytics.",
    icon: Zap,
    count: 10,
    color: "from-fuchsia-500 to-cyan-500",
  },
];

export const metadata: Metadata = {
  title: "Best Crypto Tools (2026) | CryptoFinder",
  description: "Hand-picked rankings of the best crypto tools in every category. Trading bots, DeFi, analytics, security, wallets, exchanges — find the top tools for your needs.",
  keywords: "best crypto tools, crypto rankings, top crypto tools, best trading bots, best defi tools, best crypto wallets",
  openGraph: {
    title: "Best Crypto Tools (2026) | CryptoFinder",
    description: "Hand-picked rankings of the best crypto tools in every category.",
    url: "https://cryptoaifinder.com/best",
    siteName: "CryptoFinder",
    type: "article",
  },
  alternates: {
    canonical: "https://cryptoaifinder.com/best",
  },
};

export default function BestIndexPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Best Crypto Tools (2026)",
    description: "Hand-picked rankings of the best crypto tools in every category.",
    url: "https://cryptoaifinder.com/best",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categories.map((cat, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Article",
          name: `Best ${cat.title} (2026)`,
          url: `https://cryptoaifinder.com/${cat.slug}`,
          description: cat.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Best Of</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                11 Categories
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                2026
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Best Crypto Tools <span className="text-cyan-400">(2026)</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
              Every category, hand-ranked. We test and compare hundreds of crypto tools so you don't have to.
              Pick a category below to see the top 8-10 tools with honest ratings, pricing, and direct links.
            </p>
          </div>

          {/* How We Choose */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-white mb-3">How We Pick the Best Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-400">
              <div>
                <p className="text-white font-medium mb-1">1. We Test Them Ourselves</p>
                <p>Every tool on this list has been reviewed by a real person. We sign up, kick the tires, and compare features side by side. No AI-generated summaries — our rankings come from actual usage.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">2. We Rank by What Matters</p>
                <p>Pricing, ease of use, feature depth, community trust, and real user reviews. We weigh these so you do not have to. A tool with a flashy website but poor support will not make the list.</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">3. We Are Transparent About Money</p>
                <p>Some links on this page earn us a commission if you sign up — at zero extra cost to you. This never influences our rankings. We recommend tools we would use ourselves, period.</p>
              </div>
            </div>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{cat.count} tools ranked</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-slate-700 rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Want to explore everything?</h2>
            <p className="text-slate-400 mb-4">
              Browse our complete directory of 446+ AI-powered crypto tools across 11 categories.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse All Tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
