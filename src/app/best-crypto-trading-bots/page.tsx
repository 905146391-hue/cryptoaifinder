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
    { id: "3commas", name: "3Commas", description: "All-in-one trading platform with smart terminals and AI bots. Supports DCA, Grid, and Options strategies with automated risk management.", category: "trading-bots", tags: ["DCA", "Grid", "Options", "Smart Terminal"], rating: 4.5, pricing: "Free / $29-99/mo", featured: true, affiliateUrl: "https://app.3commas.io/auth/registration?utm_source=referral&utm_medium=cabinet&c=tc2230167", promoCode: "", rank: 1 },
    { id: "pionex", name: "Pionex", description: "Built-in free AI trading bots with grid and arbitrage strategies. No subscription fees for bot usage.", category: "trading-bots", tags: ["Grid", "Arbitrage", "Free Bots"], rating: 4.3, pricing: "Free", featured: true, affiliateUrl: "https://pionex.com/en/signup?r=affiliate", promoCode: "", rank: 2 },
    { id: "cryptohopper", name: "Cryptohopper", description: "Cloud-based AI strategy designer with backtesting, simulation, and marketplace for trading strategies and signals.", category: "trading-bots", tags: ["Backtest", "Strategy Market", "Cloud"], rating: 4.4, pricing: "$19-99/mo", featured: false, affiliateUrl: "https://www.cryptohopper.com/?atid=40720", promoCode: "", rank: 3 },
    { id: "haasonline", name: "HaasOnline", description: "Advanced custom scripting with backtesting and high-frequency automation for professional traders.", category: "trading-bots", tags: ["Scripting", "HFT", "Professional"], rating: 4.3, pricing: "$9.99-99.99/mo", featured: false, affiliateUrl: "", promoCode: "", rank: 4 },
    { id: "bitsgap", name: "Bitsgap", description: "Unified dashboard for multi-exchange management with AI grid bots and arbitrage detection.", category: "trading-bots", tags: ["Grid", "Arbitrage", "Multi-Exchange"], rating: 4.2, pricing: "$29-149/mo", featured: false, affiliateUrl: "https://bitsgap.com/?ref=167106a", promoCode: "", rank: 5 },
    { id: "cornix", name: "Cornix", description: "Telegram-integrated trading bot that auto-executes signals. Perfect for signal groups and copy trading.", category: "trading-bots", tags: ["Telegram", "Signal", "Auto-Execute"], rating: 4.2, pricing: "$24-59/mo", featured: false, affiliateUrl: "", promoCode: "", rank: 6 },
    { id: "mudrex", name: "Mudrex", description: "Curated bot marketplace with verified strategies. No coding required, copytrading enabled.", category: "trading-bots", tags: ["Marketplace", "Verified", "No-Code"], rating: 4.2, pricing: "$10-100/mo", featured: false, affiliateUrl: "", promoCode: "", rank: 7 },
    { id: "signalstack", name: "SignalStack", description: "Converts TradingView alerts into automated orders. No coding required.", category: "trading-bots", tags: ["TradingView", "Alerts", "No-Code"], rating: 4.2, pricing: "$99+/mo", featured: false, affiliateUrl: "", promoCode: "", rank: 8 },
    { id: "pionex-grid", name: "Pionex Grid Bot", description: "Specialized grid trading bot from Pionex. Optimized for sideways and volatile markets.", category: "trading-bots", tags: ["Grid", "Sideways", "Volatile"], rating: 4.2, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 9 },
    { id: "coinrule", name: "Coinrule", description: "No-code strategy builder with visual rule creation. Perfect for beginners who want automation without coding.", category: "trading-bots", tags: ["No-Code", "Visual Builder", "Beginner"], rating: 4.1, pricing: "$0-499/mo", featured: false, affiliateUrl: "https://web.coinrule.com/coupon/25REFERRALDISCOUNT?tobilling=true&fpr=9ay8xe", promoCode: "", rank: 10 }
  ];

export const metadata: Metadata = {
  title: "Best Crypto Trading Bots (2026) | CryptoFinder",
  description: "The best AI-powered crypto trading bots for automated trading in 2026. Compare features, pricing, and supported exchanges to find the right bot for your strategy.",
  keywords: "best crypto trading bots, automated crypto trading, AI trading bots, crypto bot comparison",
  openGraph: {
    title: "Best Crypto Trading Bots (2026) | CryptoFinder",
    description: "The best AI-powered crypto trading bots for automated trading in 2026. Compare features, pricing, and supported exchanges to find the right bot for your strategy.",
    url: "https://cryptoaifinder.com/best-crypto-trading-bots",
    siteName: "CryptoFinder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Trading Bots | CryptoFinder",
    description: "The best AI-powered crypto trading bots for automated trading in 2026. Compare features, pricing, and supported exchanges to find the right bot for your strategy.",
  },
  alternates: {
    canonical: "https://cryptoaifinder.com/best-crypto-trading-bots",
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
    headline: "Best Crypto Trading Bots (2026)",
    description: "The best AI-powered crypto trading bots for automated trading in 2026. Compare features, pricing, and supported exchanges to find the right bot for your strategy.",
    url: "https://cryptoaifinder.com/best-crypto-trading-bots",
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
              Best Crypto Trading Bots <span className="text-cyan-400">(2026)</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
              Crypto trading bots have become essential for serious traders who want to execute strategies 24/7 without being glued to charts. From grid trading and DCA to AI-powered signal bots, the right bot can mean the difference between catching every move and missing out. We've ranked the top 10 trading bots based on features, ease of use, exchange support, and real user reviews.
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
