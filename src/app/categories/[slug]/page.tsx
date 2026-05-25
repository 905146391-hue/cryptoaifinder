import { tools, categories } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories
    .filter((c) => c.id !== "all")
    .map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);
  if (!category) return {};

  const categoryTools = tools.filter((t) => t.category === slug);
  const title = `${category.name} - Best AI Crypto Tools | CryptoFinder`;
  const description = `Discover ${categoryTools.length}+ AI-powered ${category.name.toLowerCase()} tools for crypto. Compare features, pricing, and find the perfect tool.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://cryptoaifinder.com/categories/${slug}`,
      siteName: "CryptoFinder",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://cryptoaifinder.com/categories/${slug}`,
    },
  };
}

function getCategoryDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    "trading-bots": "AI-powered trading bots automate your crypto trading strategies. From DCA and grid bots to advanced algorithmic trading, these tools use machine learning to optimize entry and exit points, manage risk, and execute trades 24/7 across multiple exchanges.",
    analytics: "On-chain analytics platforms leverage AI to decode blockchain data. Track whale movements, monitor smart money flows, analyze token distribution, and gain deep insights into market trends that aren't visible on traditional charts.",
    portfolio: "AI portfolio management tools help you track, optimize, and rebalance your crypto holdings across multiple wallets and exchanges. Get real-time P&L, tax reporting, and smart allocation suggestions powered by AI.",
    defi: "DeFi AI tools help you navigate the decentralized finance ecosystem. From yield optimization and liquidity management to protocol risk assessment, these tools use AI to maximize your returns while minimizing risks.",
    security: "AI-powered security and audit tools protect your crypto assets and smart contracts. From automated code auditing to real-time threat detection, these tools use machine learning to identify vulnerabilities before they can be exploited.",
    sentiment: "AI sentiment analysis tools aggregate and analyze social media, news, and on-chain data to gauge market sentiment. Understand the crowd's mood and make more informed trading decisions based on real-time sentiment scores.",
    charting: "Advanced charting and technical analysis tools enhanced with AI capabilities. Get automated pattern recognition, predictive indicators, and AI-generated trading signals integrated directly into your charts.",
    wallet: "AI-enhanced wallets and key management tools for secure crypto storage. From hardware wallet management to AI-powered transaction screening, these tools protect your assets while maintaining ease of use.",
    nft: "AI tools for NFT creation, trading, and analysis. From rarity scoring and floor price prediction to automated minting and portfolio management, these tools help you navigate the NFT and gaming ecosystem.",
    exchange: "AI-powered cryptocurrency exchange tools and aggregators. Get the best prices across centralized and decentralized exchanges, automated arbitrage, and AI-driven trading features.",
    "news-data": "AI-powered crypto news aggregators and data feed providers. Get real-time market data, curated news, research reports, and AI-generated insights to stay ahead of market movements.",
  };
  return descriptions[slug] || "Explore the best AI-powered crypto tools in this category.";
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);
  if (!category) return <div>Category not found</div>;

  const categoryTools = tools.filter((t) => t.category === slug);
  const sortedTools = categoryTools.sort((a, b) => b.rating - a.rating);
  const description = getCategoryDescription(slug);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} AI Crypto Tools`,
    description,
    url: `https://cryptoaifinder.com/categories/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "CryptoFinder",
      url: "https://cryptoaifinder.com",
    },
    numberOfItems: categoryTools.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="min-h-screen bg-[#0a0a0f]">
        {/* Header */}
        <div className="border-b border-[#1a1a2e] bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
              ← CryptoFinder
            </Link>
            <div className="flex gap-4 text-sm text-[#64748b]">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-b from-[#0a0a1a] to-[#0a0a0f] border-b border-[#1a1a2e]">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                {categoryTools.length} Tools
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                AI-Powered
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-[#94a3b8] max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="border-b border-[#1a1a2e] bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
              {categories
                .filter((c) => c.id !== "all")
                .map((c) => (
                  <Link
                    key={c.id}
                    href={`/categories/${c.id}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      c.id === slug
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                        : "bg-[#1a1a2e] text-[#64748b] hover:text-white hover:bg-[#1a1a2e]/80"
                    }`}
                  >
                    {c.name}
                    <span className="ml-2 text-xs opacity-60">{c.count}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTools.map((tool, index) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="group bg-[#12121a] border border-[#1a1a2e] rounded-xl p-6 hover:border-cyan-500/30 hover:bg-[#12121a]/80 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center text-lg font-bold text-white">
                      {tool.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-yellow-400 text-sm">★</span>
                        <span className="text-sm text-[#64748b]">{tool.rating}</span>
                      </div>
                    </div>
                  </div>
                  {index === 0 && (
                    <span className="px-2 py-0.5 text-xs bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20">
                      #1
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#94a3b8] mb-4 line-clamp-2">
                  {tool.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tool.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-[#1a1a2e] text-[#64748b] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#1a1a2e]">
                  <span className="text-sm text-[#64748b]">{tool.pricing}</span>
                  <span className="text-sm text-cyan-400 group-hover:translate-x-1 transition-transform">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#1a1a2e] bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">CryptoFinder</h3>
                <p className="text-sm text-[#64748b] mt-1">
                  Discover the best AI tools for crypto
                </p>
              </div>
              <div className="flex gap-6 text-sm text-[#64748b]">
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
