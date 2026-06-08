import Link from "next/link";
import { Star, TrendingUp, Shield, Zap, ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

interface BestTool {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  rating: number;
  pricing: string;
  featured: boolean;
  affiliateUrl: string;
  promoCode: string;
  rank: number;
}

const topTools: BestTool[] = [
    { id: "coinstats", name: "CoinStats", description: "Multi-platform portfolio tracking with AI market insights and price alerts. 1M+ users worldwide.", category: "portfolio", tags: ["Tracking", "AI Insights", "Alerts"], rating: 4.5, pricing: "Free / $3.49+/mo", featured: true, affiliateUrl: "https://coinstats.app/r/partner/?utm_source=CoinStatsAffiliate&utm_medium=aff&utm_campaign=inf&utm_id=CoinStatsAffiliate&fpr=zi-chen69", promoCode: "", rank: 1 },
    { id: "debank", name: "DeBank", description: "DeFi portfolio tracking with on-chain activity monitoring. Most comprehensive DeFi dashboard.", category: "portfolio", tags: ["DeFi", "On-Chain", "Dashboard"], rating: 4.5, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 2 },
    { id: "koinly", name: "Koinly", description: "Crypto tax calculator with portfolio tracking. Supports 800+ exchanges and wallets.", category: "portfolio", tags: ["Tax", "Portfolio", "800+ Integrations"], rating: 4.5, pricing: "Free / $49+/mo", featured: false, affiliateUrl: "https://koinly.io/?via=77B460BA&utm_source=friend", promoCode: "", rank: 3 },
    { id: "exodus", name: "Exodus Portfolio", description: "Beautiful multi-asset wallet with built-in portfolio tracking and exchange.", category: "portfolio", tags: ["Wallet", "Multi-Asset", "Beautiful"], rating: 4.5, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 4 },
    { id: "zapper", name: "Zapper", description: "One-stop DeFi aggregator for tokens, DeFi positions, and NFTs with interactive dashboard.", category: "portfolio", tags: ["DeFi", "NFT", "Aggregator"], rating: 4.4, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 5 },
    { id: "cointracker", name: "CoinTracker", description: "Portfolio tracking with tax calculation. Syncs with 500+ wallets and exchanges.", category: "portfolio", tags: ["Tracking", "Tax", "500+ Integrations"], rating: 4.4, pricing: "Free / $59+/mo", featured: false, affiliateUrl: "https://www.cointracker.io/referral", promoCode: "", rank: 6 },
    { id: "rotki", name: "Rotki", description: "Open-source portfolio tracking with privacy focus. Local data storage, no cloud required.", category: "portfolio", tags: ["Open-Source", "Privacy", "Local"], rating: 4.4, pricing: "Free / €12+/mo", featured: false, affiliateUrl: "", promoCode: "", rank: 7 },
    { id: "ledger-live", name: "Ledger Live", description: "Portfolio management for Ledger hardware wallet. Secure tracking with DeFi integration.", category: "portfolio", tags: ["Hardware", "Secure", "DeFi"], rating: 4.4, pricing: "Free with Device", featured: false, affiliateUrl: "", promoCode: "", rank: 8 },
    { id: "fireblocks", name: "Fireblocks", description: "Institutional digital asset custody and transfer platform. Used by 1700+ institutions.", category: "portfolio", tags: ["Institutional", "Custody", "Transfer"], rating: 4.4, pricing: "Enterprise", featured: false, affiliateUrl: "", promoCode: "", rank: 9 },
    { id: "zerion", name: "Zerion", description: "Multi-chain portfolio with DeFi operations and social features. Web3-native experience.", category: "portfolio", tags: ["Multi-Chain", "DeFi", "Social"], rating: 4.3, pricing: "Free / Premium", featured: false, affiliateUrl: "", promoCode: "", rank: 10 }
  ];

export const metadata: Metadata = {
  title: "Best Crypto Portfolio Trackers (2026) | CryptoFinder",
  description: "The best AI-powered crypto portfolio trackers for 2026. Compare multi-wallet tracking, tax reporting, and AI-driven portfolio optimization.",
  keywords: "best crypto portfolio tracker, multi-wallet tracking, crypto tax, AI portfolio management, DeFi tracking",
  openGraph: {
    title: "Best Crypto Portfolio Trackers (2026) | CryptoFinder",
    description: "The best AI-powered crypto portfolio trackers for 2026. Compare multi-wallet tracking, tax reporting, and AI-driven portfolio optimization.",
    url: "https://cryptoaifinder.com/best-crypto-portfolio-trackers",
    siteName: "CryptoFinder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Portfolio Trackers | CryptoFinder",
    description: "The best AI-powered crypto portfolio trackers for 2026. Compare multi-wallet tracking, tax reporting, and AI-driven portfolio optimization.",
  },
  alternates: {
    canonical: "https://cryptoaifinder.com/best-crypto-portfolio-trackers",
  },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`}
        />
      ))}
      <span className="text-sm text-slate-400 ml-1">{rating}</span>
    </span>
  );
}

export default function BestOfPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Crypto Portfolio Trackers (2026)",
    description: "The best AI-powered crypto portfolio trackers for 2026. Compare multi-wallet tracking, tax reporting, and AI-driven portfolio optimization.",
    url: "https://cryptoaifinder.com/best-crypto-portfolio-trackers",
    datePublished: "2026-06-08",
    author: {
      "@type": "Organization",
      name: "CryptoFinder",
      url: "https://cryptoaifinder.com",
    },
    publisher: {
      "@type": "Organization",
      name: "CryptoFinder",
      url: "https://cryptoaifinder.com",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: topTools.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: t.name,
          description: t.description,
          applicationCategory: "FinanceApplication",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: t.rating,
            bestRating: 5,
            ratingCount: 1,
          },
          url: `https://cryptoaifinder.com/tools/${t.id}`,
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
                Top 10
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                2026
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Best Crypto Portfolio Trackers <span className="text-cyan-400">(2026)</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
              Tracking a crypto portfolio across multiple wallets, exchanges, and chains is a nightmare without the right tool. Modern portfolio trackers use AI to optimize allocations, predict tax liabilities, and surface performance insights automatically. We've ranked the top 10 portfolio trackers based on integration breadth, AI features, tax support, and UX.
            </p>
          </div>

          {/* Tools List */}
          <div className="space-y-6 mb-12">
            {topTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Rank Badge */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${tool.rank === 1 ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" : tool.rank <= 3 ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "bg-slate-700/50 text-slate-400 border border-slate-600"}`}>
                      {tool.rank <= 3 ? ["🥇", "🥈", "🥉"][tool.rank - 1] : `#${tool.rank}`}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <Link href={`/tools/${tool.id}`} className="text-xl font-bold hover:text-cyan-400 transition-colors">
                            {tool.name}
                          </Link>
                          {tool.featured && (
                            <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full border border-yellow-500/30">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="mt-1">
                          <StarRating rating={tool.rating} />
                        </div>
                      </div>
                      <span className="text-sm text-slate-400 whitespace-nowrap">{tool.pricing}</span>
                    </div>

                    <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                      {tool.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {tool.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="text-xs bg-slate-700/50 text-slate-400 px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {tool.affiliateUrl ? (
                        <a
                          href={tool.affiliateUrl}
                          target="_blank"
                          rel="sponsored noopener"
                          className="inline-flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                        >
                          Get {tool.name} <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <a
                          href={`/tools/${tool.id}`}
                          className="inline-flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                        >
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <Link
                        href={`/tools/${tool.id}`}
                        className="inline-flex items-center gap-1.5 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Read Review <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      {tool.promoCode && (
                        <span className="inline-flex items-center gap-1 text-xs bg-purple-500/10 text-purple-400 px-2 py-2 rounded-lg border border-purple-500/20">
                          Code: {tool.promoCode}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-slate-700 rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Looking for more tools?</h2>
            <p className="text-slate-400 mb-4">
              Explore our complete directory of 446+ AI-powered crypto tools across 11 categories.
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
