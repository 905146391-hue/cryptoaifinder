import type { Metadata } from "next";
import Link from "next/link";
import { Shield, RefreshCw, Mail, Users, Star, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About CryptoFinder - AI-Powered Crypto Tools Directory",
  description: "CryptoFinder is the most comprehensive directory of AI-powered crypto tools. We help traders, developers, and investors discover the best tools for trading, DeFi, analytics, security, and more.",
  openGraph: {
    title: "About CryptoFinder - AI-Powered Crypto Tools Directory",
    description: "Discover 446+ AI-powered crypto tools across 11 categories. Your trusted guide to the best AI tools in crypto.",
    url: "https://cryptoaifinder.com/about",
    siteName: "CryptoFinder",
    type: "website",
  },
  alternates: {
    canonical: "https://cryptoaifinder.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="border-b border-[#1a1a2e] bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
            CryptoFinder
          </Link>
          <div className="flex gap-4 text-sm text-[#64748b]">
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">About CryptoFinder</h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-6">
          <p className="text-[#94a3b8] text-lg leading-relaxed">
            CryptoFinder is the most comprehensive directory of AI-powered tools for the cryptocurrency ecosystem. Our mission is to help traders, developers, investors, and enthusiasts discover the best tools that leverage artificial intelligence to navigate the complex world of crypto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">446+</div>
              <div className="text-sm text-[#64748b]">AI-Powered Tools</div>
            </div>
            <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">11</div>
              <div className="text-sm text-[#64748b]">Categories</div>
            </div>
            <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Weekly</div>
              <div className="text-sm text-[#64748b]">Updated</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {[
              { name: "Trading Bots", desc: "Automated trading strategies powered by AI and machine learning" },
              { name: "On-Chain Analytics", desc: "Blockchain data analysis tools for whale tracking and smart money insights" },
              { name: "Portfolio Management", desc: "AI-driven portfolio tracking, rebalancing, and tax reporting" },
              { name: "DeFi Tools", desc: "Yield optimization, liquidity management, and protocol analysis" },
              { name: "Security & Audit", desc: "Smart contract auditing, threat detection, and vulnerability scanning" },
              { name: "Sentiment Analysis", desc: "Social media and news sentiment tracking for market intelligence" },
              { name: "Charting & TA", desc: "AI-enhanced charting tools with pattern recognition and predictions" },
              { name: "Wallets & Key Management", desc: "Secure storage solutions with AI-powered security features" },
              { name: "NFT & Gaming", desc: "NFT analytics, rarity scoring, and gaming marketplace tools" },
              { name: "Exchanges", desc: "AI-powered CEX and DEX tools, aggregators, and arbitrage" },
              { name: "News & Data Feeds", desc: "Real-time market data, news aggregation, and research reports" },
            ].map((item) => (
              <div key={item.name} className="bg-[#12121a] border border-[#1a1a2e] rounded-lg p-4">
                <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                <p className="text-sm text-[#64748b]">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Our Methodology</h2>
          <p className="text-[#94a3b8] leading-relaxed">
            Every tool listed on CryptoFinder goes through our evaluation process. We assess each tool based on functionality, user experience, security practices, pricing transparency, and community feedback. Our ratings are updated regularly to reflect changes in each tool&apos;s offering.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Editorial Independence</h2>
          <p className="text-[#94a3b8] leading-relaxed">
            CryptoFinder maintains editorial independence. While we may earn commissions through affiliate links, our listings and reviews are not influenced by compensation. We list tools based on their merit and relevance to the crypto community.
          </p>

          {/* Trust Elements */}
          <h2 className="text-2xl font-bold text-white mt-12">Why Trust CryptoFinder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-5 flex items-start gap-4">
              <RefreshCw size={20} className="text-cyan-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Weekly Updates</h3>
                <p className="text-sm text-[#64748b]">Our directory is refreshed every week. We add new tools, update pricing, verify affiliate links, and remove discontinued services to keep information accurate.</p>
              </div>
            </div>
            <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-5 flex items-start gap-4">
              <Star size={20} className="text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Hand-Curated, Not Automated</h3>
                <p className="text-sm text-[#64748b]">Every tool is manually reviewed and categorized by real crypto traders — not scraped by bots. We test tools ourselves before listing them.</p>
              </div>
            </div>
            <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-5 flex items-start gap-4">
              <Shield size={20} className="text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Transparent Monetization</h3>
                <p className="text-sm text-[#64748b]">We earn through affiliate partnerships (clearly marked). No paid placements. No sponsored rankings. You always see our honest ratings — affiliate status does not affect scores.</p>
              </div>
            </div>
            <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-5 flex items-start gap-4">
              <Users size={20} className="text-purple-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-1">Built by Traders, for Traders</h3>
                <p className="text-sm text-[#64748b]">CryptoFinder is built and maintained by active cryptocurrency traders who use these tools daily. We understand what matters because we are users too.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Data Sources &amp; Methodology</h2>
          <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-6 my-6">
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              Our ratings are based on a multi-factor evaluation system:
            </p>
            <ul className="space-y-2 text-sm text-[#64748b]">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">-</span>
                <span><strong className="text-[#94a3b8]">Functionality (30%)</strong> — Does the tool deliver on its core promise? Is it reliable and well-maintained?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">-</span>
                <span><strong className="text-[#94a3b8]">User Experience (25%)</strong> — How intuitive is the interface? Is onboarding smooth?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">-</span>
                <span><strong className="text-[#94a3b8]">Pricing &amp; Value (20%)</strong> — Is the pricing fair relative to competitors? Does the free tier offer real utility?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">-</span>
                <span><strong className="text-[#94a3b8]">Community &amp; Support (15%)</strong> — Active community? Responsive support? Good documentation?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">-</span>
                <span><strong className="text-[#94a3b8]">Security &amp; Trust (10%)</strong> — Track record? Security audits? Transparent team?</span>
              </li>
            </ul>
          </div>

          {/* Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AboutPage",
                name: "About CryptoFinder",
                description: "CryptoFinder is the most comprehensive directory of AI-powered crypto tools. We help traders, developers, and investors discover the best tools for trading, DeFi, analytics, security, and more.",
                url: "https://cryptoaifinder.com/about",
                publisher: {
                  "@type": "Organization",
                  name: "CryptoFinder",
                  url: "https://cryptoaifinder.com",
                },
              }),
            }}
          />

          <h2 className="text-2xl font-bold text-white mt-12">Contact Us</h2>
          <p className="text-[#94a3b8] leading-relaxed">
            Have a tool you&apos;d like us to list? Found an error? Want to collaborate? We&apos;d love to hear from you. Visit our <Link href="/contact" className="text-cyan-400 hover:text-cyan-300">contact page</Link> to get in touch.
          </p>
        </div>
      </div>
    </main>
  );
}
