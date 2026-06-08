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
    { id: "binance", name: "Binance", description: "World's largest crypto exchange by volume. 600+ coins, low fees, Binance Earn, and Web3 wallet.", category: "exchange", tags: ["Largest", "600+ Coins", "Low Fees"], rating: 4.7, pricing: "0.1% Maker/Taker", featured: true, affiliateUrl: "https://www.binance.com/en/register?ref=affiliate", promoCode: "", rank: 1 },
    { id: "okx", name: "OKX", description: "Top-3 global crypto exchange. Advanced trading tools, Copy Trading, and Web3 ecosystem.", category: "exchange", tags: ["Top-3", "Advanced", "Web3"], rating: 4.6, pricing: "0.1% Maker/Taker", featured: false, affiliateUrl: "https://www.asdfghjklqw.com/join/28774619", promoCode: "", rank: 2 },
    { id: "bybit", name: "Bybit", description: "Fast-growing crypto exchange with derivatives focus. Copy Trading and Launchpad.", category: "exchange", tags: ["Derivatives", "Copy Trading", "Launchpad"], rating: 4.5, pricing: "0.1% Maker/Taker", featured: false, affiliateUrl: "https://www.bybit.com/en/register?affiliate", promoCode: "", rank: 3 },
    { id: "coinbase", name: "Coinbase", description: "US-regulated exchange. Most trusted by institutions. Advanced Trade and Base L2.", category: "exchange", tags: ["US Regulated", "Trusted", "Institutional"], rating: 4.5, pricing: "0.4-0.6% (Advanced: 0.05-0.25%)", featured: false, affiliateUrl: "https://www.coinbase.com/join/affiliate", promoCode: "", rank: 4 },
    { id: "kraken", name: "Kraken", description: "US-based exchange with strong security record. 220+ coins, staking, and futures.", category: "exchange", tags: ["Security", "220+ Coins", "Staking"], rating: 4.5, pricing: "0-0.26% Maker/Taker", featured: false, affiliateUrl: "https://www.kraken.com/referral", promoCode: "", rank: 5 },
    { id: "deribit", name: "Deribit", description: "Leading crypto options and futures exchange. 90%+ options market share.", category: "exchange", tags: ["Options", "Futures", "90% Options"], rating: 4.5, pricing: "0.01-0.04%", featured: false, affiliateUrl: "", promoCode: "", rank: 6 },
    { id: "jupiter", name: "Jupiter (DEX Aggregator)", description: "Leading Solana DEX aggregator. Best price routing across 100+ liquidity sources.", category: "exchange", tags: ["Solana", "Aggregator", "Best Price"], rating: 4.5, pricing: "Protocol Fees", featured: false, affiliateUrl: "", promoCode: "", rank: 7 },
    { id: "gmx-exchange", name: "GMX (Exchange)", description: "Decentralized perpetuals on Arbitrum and Avalanche. Up to 50x leverage.", category: "exchange", tags: ["DeFi", "50x Leverage", "Arbitrum"], rating: 4.4, pricing: "Protocol Fees", featured: false, affiliateUrl: "", promoCode: "", rank: 8 },
    { id: "1inch-v5", name: "1inch v5 (DEX Aggregator)", description: "Latest version of 1inch aggregator. Fusion mode for MEV protection.", category: "exchange", tags: ["Aggregator", "Fusion", "MEV Protection"], rating: 4.4, pricing: "Protocol Fees", featured: false, affiliateUrl: "", promoCode: "", rank: 9 },
    { id: "bitget", name: "Bitget", description: "Derivatives-focused exchange with AI copy trading. 550+ coins and 500M+ users.", category: "exchange", tags: ["Derivatives", "AI Copy", "550+ Coins"], rating: 4.3, pricing: "0.1% Maker/Taker", featured: false, affiliateUrl: "https://www.bitget.com", promoCode: "ygnw", rank: 10 }
  ];

export const metadata: Metadata = {
  title: "Best Crypto Exchanges (2026) | CryptoFinder",
  description: "The best AI-powered crypto exchanges for trading in 2026. Compare CEX and DEX platforms, fees, security, and AI trading features.",
  keywords: "best crypto exchanges, CEX comparison, DEX trading, crypto trading platform, AI exchange features",
  openGraph: {
    title: "Best Crypto Exchanges (2026) | CryptoFinder",
    description: "The best AI-powered crypto exchanges for trading in 2026. Compare CEX and DEX platforms, fees, security, and AI trading features.",
    url: "https://cryptoaifinder.com/best-crypto-exchanges",
    siteName: "CryptoFinder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Exchanges | CryptoFinder",
    description: "The best AI-powered crypto exchanges for trading in 2026. Compare CEX and DEX platforms, fees, security, and AI trading features.",
  },
  alternates: {
    canonical: "https://cryptoaifinder.com/best-crypto-exchanges",
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
    headline: "Best Crypto Exchanges (2026)",
    description: "The best AI-powered crypto exchanges for trading in 2026. Compare CEX and DEX platforms, fees, security, and AI trading features.",
    url: "https://cryptoaifinder.com/best-crypto-exchanges",
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
              Best Crypto Exchanges <span className="text-cyan-400">(2026)</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
              Choosing the right exchange impacts everything from trading fees to asset security. Modern exchanges now integrate AI for smart order routing, risk management, and automated trading strategies. We've ranked the top 10 exchanges based on liquidity, fees, security track record, AI features, and supported assets.
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
