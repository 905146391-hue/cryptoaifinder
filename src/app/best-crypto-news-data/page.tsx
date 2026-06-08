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
    { id: "the-block", name: "The Block", description: "Institutional-grade crypto news and research. Deep analysis with data-driven journalism.", category: "news-data", tags: ["Institutional", "Research", "Data-Driven"], rating: 4.5, pricing: "Free / $125-500+/yr", featured: true, affiliateUrl: "", promoCode: "", rank: 1 },
    { id: "delphi-digital", name: "Delphi Digital", description: "Premium crypto research firm. Deep protocol analysis and investment thesis.", category: "news-data", tags: ["Premium", "Protocol Analysis", "Investment"], rating: 4.6, pricing: "Enterprise", featured: false, affiliateUrl: "", promoCode: "", rank: 2 },
    { id: "messari-research", name: "Messari Research", description: "Comprehensive crypto research platform. Protocol reports, sector analysis, and governance.", category: "news-data", tags: ["Protocol Reports", "Sector Analysis", "Governance"], rating: 4.5, pricing: "$29-1000+/mo", featured: false, affiliateUrl: "", promoCode: "", rank: 3 },
    { id: "glassnode-research", name: "Glassnode Research", description: "On-chain research and insights. Weekly insights and institutional-grade reports.", category: "news-data", tags: ["On-Chain", "Weekly", "Institutional"], rating: 4.5, pricing: "Premium", featured: false, affiliateUrl: "", promoCode: "", rank: 4 },
    { id: "coindesk", name: "CoinDesk", description: "Leading crypto news publication since 2013. Market data, indices, and Consensus events.", category: "news-data", tags: ["Leading", "Since 2013", "Consensus"], rating: 4.4, pricing: "Free / $149+/yr", featured: false, affiliateUrl: "", promoCode: "", rank: 5 },
    { id: "bitcoin-magazine", name: "Bitcoin Magazine", description: "Oldest Bitcoin publication founded by Vitalik Buterin and Mihai Alisie in 2012.", category: "news-data", tags: ["Bitcoin", "Oldest", "Since 2012"], rating: 4.4, pricing: "Free / $99/yr", featured: false, affiliateUrl: "", promoCode: "", rank: 6 },
    { id: "bankless", name: "Bankless", description: "Ethereum-focused media and education. Podcast, newsletter, and premium research.", category: "news-data", tags: ["Ethereum", "Podcast", "Premium Research"], rating: 4.4, pricing: "Free / $15+/mo", featured: false, affiliateUrl: "", promoCode: "", rank: 7 },
    { id: "a16z-crypto", name: "a16z Crypto", description: "Andreessen Horowitz crypto research. Industry thought leadership and regulatory insights.", category: "news-data", tags: ["VC", "Thought Leadership", "Regulation"], rating: 4.4, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 8 },
    { id: "coinmetrics", name: "Coin Metrics", description: "Crypto data and research for institutions. Network data, market data, and indices.", category: "news-data", tags: ["Data", "Institutional", "Indices"], rating: 4.4, pricing: "Enterprise", featured: false, affiliateUrl: "", promoCode: "", rank: 9 },
    { id: "decrypt", name: "Decrypt", description: "Award-winning crypto media with beginner-friendly explainers and deep dives.", category: "news-data", tags: ["Award-Winning", "Beginner-Friendly", "Explainers"], rating: 4.3, pricing: "Free / Premium", featured: false, affiliateUrl: "", promoCode: "", rank: 10 }
  ];

export const metadata: Metadata = {
  title: "Best Crypto News & Data Tools (2026) | CryptoFinder",
  description: "The best AI-powered crypto news aggregators and data platforms for 2026. Compare real-time news, research reports, and AI-curated market insights.",
  keywords: "best crypto news, crypto data feeds, AI news aggregation, crypto research, market data tools",
  openGraph: {
    title: "Best Crypto News & Data Tools (2026) | CryptoFinder",
    description: "The best AI-powered crypto news aggregators and data platforms for 2026. Compare real-time news, research reports, and AI-curated market insights.",
    url: "https://cryptoaifinder.com/best-crypto-news-data",
    siteName: "CryptoFinder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto News & Data Tools | CryptoFinder",
    description: "The best AI-powered crypto news aggregators and data platforms for 2026. Compare real-time news, research reports, and AI-curated market insights.",
  },
  alternates: {
    canonical: "https://cryptoaifinder.com/best-crypto-news-data",
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
    headline: "Best Crypto News & Data Tools (2026)",
    description: "The best AI-powered crypto news aggregators and data platforms for 2026. Compare real-time news, research reports, and AI-curated market insights.",
    url: "https://cryptoaifinder.com/best-crypto-news-data",
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
              Best Crypto News & Data Tools <span className="text-cyan-400">(2026)</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
              Staying informed in crypto requires filtering through an avalanche of noise. AI-powered news and data tools now curate, summarize, and surface the signals that matter. From institutional-grade research to real-time sentiment analysis, we've ranked the top 10 platforms based on data quality, AI curation, speed, and depth.
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
