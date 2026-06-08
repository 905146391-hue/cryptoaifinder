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
    { id: "goplus", name: "GoPlus Security", description: "Most integrated Web3 security API. Built into CoinGecko, OKX, Trust Wallet. Honey pot and blacklist detection.", category: "security", tags: ["API", "Honey Pot", "Blacklist"], rating: 4.4, pricing: "Free / API Credits", featured: true, affiliateUrl: "", promoCode: "", rank: 1 },
    { id: "openzeppelin", name: "OpenZeppelin", description: "Security platform with Contracts library, Defender, and audit services. Industry standard.", category: "security", tags: ["Library", "Contracts", "Defender"], rating: 4.8, pricing: "Free / Enterprise", featured: false, affiliateUrl: "", promoCode: "", rank: 2 },
    { id: "gnosis-safe", name: "Safe (Gnosis Safe)", description: "Most trusted multi-sig wallet. $100B+ secured across Web3.", category: "security", tags: ["Multi-Sig", "Trusted", "$100B+ Secured"], rating: 4.8, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 3 },
    { id: "slowmist", name: "SlowMist", description: "Leading Chinese blockchain security firm. Smart contract audits and incident response.", category: "security", tags: ["Audit", "Incident Response", "Chinese"], rating: 4.7, pricing: "Enterprise", featured: false, affiliateUrl: "", promoCode: "", rank: 4 },
    { id: "foundry", name: "Foundry", description: "Blazing fast Ethereum development toolkit. Forge for testing, Cast for RPC.", category: "security", tags: ["Fast", "Testing", "Rust-Based"], rating: 4.7, pricing: "Free (Open-Source)", featured: false, affiliateUrl: "", promoCode: "", rank: 5 },
    { id: "revoke-cash", name: "Revoke.cash", description: "Token approval auditing and malicious approval revocation. Essential wallet hygiene tool.", category: "security", tags: ["Approval", "Revoke", "Wallet"], rating: 4.6, pricing: "Free", featured: false, affiliateUrl: "", promoCode: "", rank: 6 },
    { id: "consensys-diligence", name: "ConsenSys Diligence", description: "Smart contract security audits by ConsenSys. MythX automated analysis tool.", category: "security", tags: ["Audit", "MythX", "ConsenSys"], rating: 4.6, pricing: "Enterprise", featured: false, affiliateUrl: "", promoCode: "", rank: 7 },
    { id: "slither", name: "Slither (Trail of Bits)", description: "Static analysis framework for Solidity. Fast and accurate vulnerability detection.", category: "security", tags: ["Static Analysis", "Solidity", "Fast"], rating: 4.6, pricing: "Free (Open-Source)", featured: false, affiliateUrl: "", promoCode: "", rank: 8 },
    { id: "immunefi", name: "Immunefi", description: "Largest Web3 bug bounty platform. $150M+ in bounties paid to white-hats.", category: "security", tags: ["Bug Bounty", "$150M+ Paid", "White-Hat"], rating: 4.6, pricing: "Free / Platform Fee", featured: false, affiliateUrl: "", promoCode: "", rank: 9 },
    { id: "hardhat", name: "Hardhat", description: "Ethereum development environment with testing and debugging. Plugin ecosystem.", category: "security", tags: ["Development", "Testing", "Debugging"], rating: 4.6, pricing: "Free (Open-Source)", featured: false, affiliateUrl: "", promoCode: "", rank: 10 }
  ];

export const metadata: Metadata = {
  title: "Best Crypto Security Tools (2026) | CryptoFinder",
  description: "The best AI-powered security and audit tools for crypto in 2026. Compare smart contract auditors, threat detection, and wallet security solutions.",
  keywords: "best crypto security tools, smart contract audit, blockchain security, crypto threat detection, wallet security",
  openGraph: {
    title: "Best Crypto Security Tools (2026) | CryptoFinder",
    description: "The best AI-powered security and audit tools for crypto in 2026. Compare smart contract auditors, threat detection, and wallet security solutions.",
    url: "https://cryptoaifinder.com/best-crypto-security-tools",
    siteName: "CryptoFinder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Security Tools | CryptoFinder",
    description: "The best AI-powered security and audit tools for crypto in 2026. Compare smart contract auditors, threat detection, and wallet security solutions.",
  },
  alternates: {
    canonical: "https://cryptoaifinder.com/best-crypto-security-tools",
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
    headline: "Best Crypto Security Tools (2026)",
    description: "The best AI-powered security and audit tools for crypto in 2026. Compare smart contract auditors, threat detection, and wallet security solutions.",
    url: "https://cryptoaifinder.com/best-crypto-security-tools",
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
              Best Crypto Security Tools <span className="text-cyan-400">(2026)</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
              Security is non-negotiable in crypto. With billions lost to hacks and exploits annually, having the right security tools is critical. AI-powered auditors can now scan contracts in minutes, while real-time threat detection monitors your assets around the clock. We've ranked the top 10 security tools based on audit quality, detection speed, and track record.
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
