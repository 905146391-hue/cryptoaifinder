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
    { id: "safe-wallet", name: "Safe Wallet (Gnosis Safe)", description: "Most trusted multi-sig wallet. $100B+ secured across Web3. Essential for teams.", category: "wallet", tags: ["Multi-Sig", "$100B+", "Teams"], rating: 4.8, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 1 },
    { id: "ledger-nano", name: "Ledger Nano (Hardware)", description: "Most popular hardware wallet. Secure offline storage with Ledger Live app.", category: "wallet", tags: ["Hardware", "Offline", "Secure"], rating: 4.7, pricing: "$79-399 one-time", featured: false, affiliateUrl: "", promoCode: "", rank: 2 },
    { id: "phantom", name: "Phantom", description: "Leading Solana wallet with in-app staking and NFT management. Sleek UI.", category: "wallet", tags: ["Solana", "Staking", "NFT"], rating: 4.6, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 3 },
    { id: "trezor", name: "Trezor (Hardware)", description: "First hardware wallet. Open-source firmware with Trezor Suite app.", category: "wallet", tags: ["Hardware", "Open-Source", "First"], rating: 4.6, pricing: "$69-219 one-time", featured: false, affiliateUrl: "", promoCode: "", rank: 4 },
    { id: "metamask", name: "MetaMask", description: "Leading Ethereum wallet with 650K+ assets supported. AI transaction monitoring and smart gas prediction.", category: "wallet", tags: ["Ethereum", "dApp", "Gas"], rating: 4.5, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 5 },
    { id: "rainbow", name: "Rainbow", description: "Beautiful Ethereum wallet with DeFi integration. Best UI/UX in Web3.", category: "wallet", tags: ["Ethereum", "DeFi", "Beautiful UI"], rating: 4.5, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 6 },
    { id: "exodus", name: "Exodus", description: "Beautiful multi-asset wallet with built-in exchange. 260+ assets supported, human support.", category: "wallet", tags: ["Multi-Asset", "Beautiful", "Human Support"], rating: 4.5, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 7 },
    { id: "walletconnect", name: "WalletConnect", description: "Open-source protocol for connecting wallets to dApps. Universal QR code standard.", category: "wallet", tags: ["Protocol", "Open-Source", "QR Code"], rating: 4.5, pricing: "Free (Protocol)", featured: false, affiliateUrl: "", promoCode: "", rank: 8 },
    { id: "trust-wallet", name: "Trust Wallet", description: "Open-source multi-chain wallet with NFT support. AI portfolio performance and smart trading suggestions.", category: "wallet", tags: ["Multi-Chain", "NFT", "Open Source"], rating: 4.4, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 9 },
    { id: "uniswap-wallet", name: "Uniswap Wallet", description: "Official Uniswap wallet with built-in swap and DeFi access. Open-source.", category: "wallet", tags: ["Uniswap", "DeFi", "Open-Source"], rating: 4.4, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 10 }
  ];

export const metadata: Metadata = {
  title: "Best Crypto Wallets (2026) | CryptoFinder",
  description: "The best AI-enhanced crypto wallets for secure storage in 2026. Compare hardware wallets, multi-chain wallets, and AI-powered security features.",
  keywords: "best crypto wallets, hardware wallet, multi-chain wallet, crypto storage, AI wallet security",
  openGraph: {
    title: "Best Crypto Wallets (2026) | CryptoFinder",
    description: "The best AI-enhanced crypto wallets for secure storage in 2026. Compare hardware wallets, multi-chain wallets, and AI-powered security features.",
    url: "https://cryptoaifinder.com/best-crypto-wallets",
    siteName: "CryptoFinder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Wallets | CryptoFinder",
    description: "The best AI-enhanced crypto wallets for secure storage in 2026. Compare hardware wallets, multi-chain wallets, and AI-powered security features.",
  },
  alternates: {
    canonical: "https://cryptoaifinder.com/best-crypto-wallets",
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
    headline: "Best Crypto Wallets (2026)",
    description: "The best AI-enhanced crypto wallets for secure storage in 2026. Compare hardware wallets, multi-chain wallets, and AI-powered security features.",
    url: "https://cryptoaifinder.com/best-crypto-wallets",
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
              Best Crypto Wallets <span className="text-cyan-400">(2026)</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
              Your wallet is the foundation of your crypto security. Modern wallets go beyond simple storage with AI-powered transaction screening, multi-chain support, DeFi integrations, and hardware-grade security. We've ranked the top 10 wallets based on security, chain support, UX, and AI-enhanced features.
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
