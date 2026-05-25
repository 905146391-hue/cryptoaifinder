import { tools, categories } from "@/lib/data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Star, Tag, ArrowLeft, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    id: tool.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const tool = tools.find((t) => t.id === id);
  if (!tool) return { title: "Tool Not Found" };

  const category = categories.find((c) => c.id === tool.category);

  return {
    title: `${tool.name} - Best ${category?.name || "Crypto"} AI Tool | CryptoFinder`,
    description: tool.description,
    keywords: [
      tool.name,
      category?.name || "",
      ...tool.tags,
      "AI crypto tools",
      "crypto",
      "blockchain",
      "DeFi",
    ],
    openGraph: {
      title: `${tool.name} | CryptoFinder`,
      description: tool.description,
      url: `https://cryptoaifinder.com/tools/${tool.id}`,
      siteName: "CryptoFinder",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} | CryptoFinder`,
      description: tool.description,
    },
    alternates: {
      canonical: `https://cryptoaifinder.com/tools/${tool.id}`,
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.round(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-slate-600"
          }`}
        />
      ))}
      <span className="text-sm text-slate-400 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tool = tools.find((t) => t.id === id);
  if (!tool) notFound();

  const category = categories.find((c) => c.id === tool.category);
  const relatedTools = tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 6);
  const currentIndex = tools.findIndex((t) => t.id === tool.id);
  const prevTool = currentIndex > 0 ? tools[currentIndex - 1] : null;
  const nextTool =
    currentIndex < tools.length - 1 ? tools[currentIndex + 1] : null;

  // Generate detailed content for the tool
  const pros = [
    `${tool.rating >= 4.3 ? "Excellent" : "Good"} user ratings (${tool.rating}/5)`,
    `${tool.pricing === "Free" || tool.pricing.startsWith("Free") ? "Free tier available" : `Affordable pricing: ${tool.pricing}`}`,
    `Part of ${category?.name || "crypto"} ecosystem`,
    ...tool.tags.slice(0, 2).map((tag) => `Built-in ${tag} support`),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: category?.name || "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: tool.pricing === "Free" || tool.pricing.startsWith("Protocol Fees")
        ? "0"
        : undefined,
      priceCurrency: "USD",
      description: tool.pricing,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating,
      bestRating: 5,
      worstRating: 1,
    },
    url: tool.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-slate-900 text-white">
        {/* Hero */}
        <div className="border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href={`/?category=${tool.category}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {category?.name || tool.category}
              </Link>
              <span>/</span>
              <span className="text-white">{tool.name}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header Card */}
              <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20">
                        {category?.name}
                      </span>
                      {tool.featured && (
                        <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs font-medium border border-amber-500/20">
                          Featured
                        </span>
                      )}
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                      {tool.name}
                    </h1>
                    <StarRating rating={tool.rating} />
                  </div>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mt-4">
                  {tool.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Review */}
              <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
                <h2 className="text-xl font-bold mb-4">
                  About {tool.name}
                </h2>
                <div className="text-slate-300 leading-relaxed space-y-4">
                  <p>
                    <strong className="text-white">{tool.name}</strong> is a
                    leading tool in the {category?.name?.toLowerCase() || "crypto"}{" "}
                    category. It stands out with its{" "}
                    {tool.tags.slice(0, 2).join(" and ")} capabilities, making
                    it a popular choice among crypto enthusiasts and
                    professionals.
                  </p>
                  <p>
                    With a user rating of{" "}
                    <strong className="text-cyan-400">{tool.rating}/5</strong>,{" "}
                    {tool.name} has proven to be a reliable solution for users
                    looking for{" "}
                    {tool.tags[tool.tags.length - 1]?.toLowerCase() ||
                      "crypto tools"}
                    . The platform offers{" "}
                    {tool.pricing === "Free"
                      ? "a completely free service"
                      : `pricing starting at ${tool.pricing}`}
                    , making it accessible to a wide range of users.
                  </p>
                  <h3 className="text-lg font-semibold text-white pt-2">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {tool.tags.map((tag, i) => (
                      <li key={tag} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                        <span>
                          <strong className="text-white">{tag}</strong> —{" "}
                          {i === 0
                            ? `Advanced ${tag.toLowerCase()} features for enhanced performance`
                            : i === 1
                            ? `Robust ${tag.toLowerCase()} capabilities`
                            : `Integrated ${tag.toLowerCase()} support`}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pros Section */}
              <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
                <h2 className="text-xl font-bold mb-4">Why Choose {tool.name}?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pros.map((pro, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10"
                    >
                      <span className="text-emerald-400 text-lg">✓</span>
                      <span className="text-slate-300 text-sm">{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Schema */}
              <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
                <h2 className="text-xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: `What is ${tool.name}?`,
                      a: tool.description,
                    },
                    {
                      q: `How much does ${tool.name} cost?`,
                      a: `${tool.name} offers ${tool.pricing === "Free" ? "a free service" : `pricing at ${tool.pricing}`}. Check their website for the latest pricing information.`,
                    },
                    {
                      q: `Is ${tool.name} safe to use?`,
                      a: `With a rating of ${tool.rating}/5, ${tool.name} is generally considered ${tool.rating >= 4.3 ? "very safe and reliable" : "safe and reliable"}. Always do your own research before connecting any crypto tool.`,
                    },
                  ].map((faq) => (
                    <div key={faq.q}>
                      <h3 className="text-white font-medium mb-1">{faq.q}</h3>
                      <p className="text-slate-400 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between gap-4 pt-4">
                {prevTool ? (
                  <Link
                    href={`/tools/${prevTool.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">{prevTool.name}</span>
                    <span className="sm:hidden">Previous</span>
                  </Link>
                ) : (
                  <div />
                )}
                {nextTool ? (
                  <Link
                    href={`/tools/${nextTool.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors text-sm"
                  >
                    <span className="hidden sm:inline">{nextTool.name}</span>
                    <span className="sm:hidden">Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Visit Button */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 sticky top-4">
                <a
                  href={tool.affiliateUrl || tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Visit {tool.name}
                  <ExternalLink className="w-4 h-4 inline-block ml-2" />
                </a>

                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Pricing</span>
                    <span className="text-white font-medium">{tool.pricing}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Rating</span>
                    <span className="text-white font-medium">{tool.rating}/5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Category</span>
                    <span className="text-white font-medium">
                      {category?.name}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Website</span>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      Visit ↗
                    </a>
                  </div>
                </div>

                {/* Related Tools */}
                {relatedTools.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-700/50">
                    <h3 className="text-sm font-semibold text-slate-300 mb-3">
                      Related Tools
                    </h3>
                    <div className="space-y-2">
                      {relatedTools.map((related) => (
                        <Link
                          key={related.id}
                          href={`/tools/${related.id}`}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/50 transition-colors group"
                        >
                          <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                            {related.name}
                          </span>
                          <span className="text-xs text-slate-500">
                            {related.rating}/5
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
