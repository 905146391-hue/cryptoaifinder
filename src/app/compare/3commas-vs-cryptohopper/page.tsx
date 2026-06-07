import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, Check, X, ArrowRight, BarChart3, Wallet, TrendingUp, LineChart } from "lucide-react";
import { tools } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "3commas-vs-cryptohopper" },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug: _slug } = await params;
  return {
    title: "3Commas vs Cryptohopper: Which Trading Bot Wins in 2026? | CryptoFinder",
    description: "Both platforms dominate the crypto trading bot space. This head-to-head comparison breaks down pricing, features, ease of use, and supported exchanges to help you choose.",
    keywords: ["crypto", "trading bots", "3Commas", "Cryptohopper", "comparison"],
    openGraph: {
      title: "3Commas vs Cryptohopper | CryptoFinder",
      description: "Head-to-head comparison of the top two crypto trading bot platforms.",
      url: "https://cryptoaifinder.com/compare/3commas-vs-cryptohopper",
      type: "article",
    },
    alternates: {
      canonical: "https://cryptoaifinder.com/compare/3commas-vs-cryptohopper",
    },
  };
}

export default async function ComparePage({ params }: PageProps) {
  const { slug: _slug } = await params;
  const tool1 = tools.find(t => t.id === "3commas");
  const tool2 = tools.find(t => t.id === "cryptohopper");

  if (!tool1 || !tool2) notFound();

  const comparisonRows = [
    { label: "Rating", t1: tool1.rating, t2: tool2.rating, isRating: true },
    { label: "Pricing", t1: tool1.pricing, t2: tool2.pricing },
    { label: "Category", t1: tool1.category, t2: tool2.category },
    { label: "Featured", t1: tool1.featured ? "Yes" : "No", t2: tool2.featured ? "Yes" : "No" },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-cyan-400">Tools</Link>
          <span>/</span>
          <span className="text-slate-300">Compare</span>
        </nav>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          3Commas <span className="text-cyan-400">vs</span> Cryptohopper
        </h1>
        <p className="text-slate-400 mb-8 text-lg">
          Both platforms dominate the crypto trading bot space, but they target different trader profiles. 3Commas focuses on smart terminals and grid/DCA bots with a polished UI, while Cryptohopper offers a strategy marketplace and cloud-based backtesting. This head-to-head comparison breaks down pricing, features, ease of use, and supported exchanges to help you choose.
        </p>

        {/* Comparison Table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-10">
          <div className="grid grid-cols-3 bg-slate-700/50 px-6 py-3 font-semibold text-sm text-slate-300">
            <div>Feature</div>
            <div className="text-center">{tool1.name}</div>
            <div className="text-center">{tool2.name}</div>
          </div>
          {comparisonRows.map((row, i) => (
            <div key={i} className="grid grid-cols-3 px-6 py-4 border-b border-slate-700/50 items-center">
              <div className="text-slate-300 font-medium">{row.label}</div>
              <div className="text-center">
                {row.isRating ? (
                  <span className="inline-flex items-center gap-1">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className={`w-4 h-4 ${star <= Math.round(row.t1) ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`} />
                    ))}
                    <span className="text-sm text-slate-400 ml-1">{row.t1}</span>
                  </span>
                ) : (
                  <span className="text-slate-200">{row.t1}</span>
                )}
              </div>
              <div className="text-center">
                {row.isRating ? (
                  <span className="inline-flex items-center gap-1">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className={`w-4 h-4 ${star <= Math.round(row.t2) ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`} />
                    ))}
                    <span className="text-sm text-slate-400 ml-1">{row.t2}</span>
                  </span>
                ) : (
                  <span className="text-slate-200">{row.t2}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tool Detail Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[tool1, tool2].map((tool) => (
            <div key={tool.id} className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">{tool.name}</h3>
                {tool.featured && <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">Featured</span>}
              </div>
              <p className="text-slate-400 text-sm mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {tool.affiliateUrl ? (
                  <a href={tool.affiliateUrl} target="_blank" rel="sponsored noopener" className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white text-center py-2 rounded-lg text-sm font-semibold transition-colors">
                    Get {tool.name} &rarr;
                  </a>
                ) : (
                  <a href={tool.url} target="_blank" rel="noopener" className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-center py-2 rounded-lg text-sm font-semibold transition-colors">
                    Visit {tool.name} &rarr;
                  </a>
                )}
                <Link href={`/tools/${tool.id}`} className="flex-1 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 text-center py-2 rounded-lg text-sm font-semibold transition-colors">
                  Read Review
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Summary */}
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mb-10">
          <h2 className="text-xl font-bold mb-4">Which One Should You Choose?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-cyan-400 mb-2">Choose {tool1.name} if...</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span>You want an all-in-one smart trading terminal with grid and DCA bots</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span>Multi-exchange support with a polished, beginner-friendly UI</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Choose {tool2.name} if...</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span>You want a strategy marketplace and visual strategy designer</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span>Cloud-based backtesting is important for your workflow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-4">Ready to pick a tool?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {tool1.affiliateUrl && (
              <a href={tool1.affiliateUrl} target="_blank" rel="sponsored noopener" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Try {tool1.name} &rarr;
              </a>
            )}
            {tool2.affiliateUrl && (
              <a href={tool2.affiliateUrl} target="_blank" rel="sponsored noopener" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Try {tool2.name} &rarr;
              </a>
            )}
          </div>
        </div>
      </div>
          {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `Which is better, ${tool1.name} or ${tool2.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `${tool1.name} excels with ${tool1.tags.slice(0, 3).join(", ")} features. ${tool2.name} focuses on ${tool2.tags.slice(0, 3).join(", ")}. Your choice depends on your specific needs.`
                }
              },
              {
                "@type": "Question",
                "name": "How much does each platform cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `${tool1.name}: ${tool1.pricing}. ${tool2.name}: ${tool2.pricing}. Check each official site for the latest pricing and promotions.`
                }
              }
            ]
          })
        }}
      />

</main>
  );
}
