import { tools, categories } from "@/lib/data";




import type { Metadata } from "next";




import { notFound } from "next/navigation";




import Link from "next/link";




import {




  ExternalLink,




  Star,




  Tag,




  ArrowLeft,




  ArrowRight,




  Check,




  X,




  Zap,




  Users,




  DollarSign,




  HelpCircle,




  Rocket,




  TrendingUp,




  ChevronDown,




} from "lucide-react";









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









  // Resolve alternative tools with their data




  const altTools = tool.detailedContent?.alternatives




    ? tool.detailedContent.alternatives




        .map((altId) => tools.find((t) => t.id === altId))




        .filter(Boolean)




    : [];









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




      ratingCount: 100,




      bestRating: 5,




      worstRating: 1,




    },




    url: tool.url,




  };









  // FAQ Schema for SEO




  const faqJsonLd = tool.detailedContent?.faq




    ? {




        "@context": "https://schema.org",




        "@type": "FAQPage",




        mainEntity: tool.detailedContent.faq.map((f) => ({




          "@type": "Question",




          name: f.question,




          acceptedAnswer: {




            "@type": "Answer",




            text: f.answer,




          },




        })),




      }




    : null;









  return (




    <>




      <script




        type="application/ld+json"




        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}




      />




      {faqJsonLd && (




        <script




          type="application/ld+json"




          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}




        />




      )}




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




                    <div className="flex items-center gap-3 mb-3">




                      <img




                        src={`https://www.google.com/s2/favicons?domain=${new URL(tool.url).hostname}&sz=64`}




                        alt=""




                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain bg-[#0a0a0f] border border-[#1a1a2e]/30"




                        loading="lazy"




                      />




                      <h1 className="text-3xl sm:text-4xl font-bold">




                        {tool.name}




                      </h1>




                    </div>




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









              {/* ========== ENHANCED CONTENT (for tools with detailedContent) ========== */}




              {tool.detailedContent ? (




                <>




                  {/* CTA Banner */}




                  <a




                    href={tool.affiliateUrl || tool.url}




                    target="_blank"




                    rel="noopener noreferrer"




                    className="block bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 rounded-2xl p-6 sm:p-8 text-center transition-all duration-200 transform hover:scale-[1.01] shadow-lg shadow-cyan-500/10"




                  >




                    <Rocket className="w-8 h-8 mx-auto mb-2 text-white/90" />




                    <p className="text-2xl sm:text-3xl font-bold text-white">




                      Start Trading on {tool.name}




                    </p>




                    <p className="text-cyan-100 mt-2">




                      Join 1M+ traders using {tool.name} — click to get started




                    </p>




                    <span className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white font-semibold transition-colors">




                      Get Started Free <ExternalLink className="w-4 h-4" />




                    </span>




                  </a>









                  {/* Detailed Review */}




                  <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">




                    <h2 className="text-2xl font-bold mb-6">




                      What is {tool.name}?




                    </h2>




                    <div className="text-slate-300 leading-relaxed space-y-4 text-[16px]">




                      {tool.detailedContent.longDescription




                        .split("\n\n")




                        .map((paragraph, i) => (




                          <p key={i}>{paragraph}</p>




                        ))}




                    </div>




                  </div>









                  {/* Key Features */}




                  <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">




                    <div className="flex items-center gap-3 mb-6">




                      <Zap className="w-6 h-6 text-cyan-400" />




                      <h2 className="text-2xl font-bold">Key Features</h2>




                    </div>




                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">




                      {tool.detailedContent.features.map((feature, i) => (




                        <div




                          key={i}




                          className="flex items-start gap-3 p-3 bg-cyan-500/5 rounded-xl border border-cyan-500/10"




                        >




                          <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />




                          <span className="text-slate-300 text-sm">{feature}</span>




                        </div>




                      ))}




                    </div>




                  </div>









                  {/* Pricing Plans */}




                  <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">




                    <div className="flex items-center gap-3 mb-6">




                      <DollarSign className="w-6 h-6 text-emerald-400" />




                      <h2 className="text-2xl font-bold">Pricing Plans</h2>




                    </div>




                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">




                      {tool.detailedContent.pricingPlans.map((plan, i) => (




                        <div




                          key={i}




                          className={`rounded-xl p-5 border transition-colors ${




                            plan.highlight




                              ? "bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30"




                              : "bg-slate-700/30 border-slate-700/50"




                          }`}




                        >




                          <div className="flex items-center justify-between mb-3">




                            <h3 className="text-lg font-bold text-white">




                              {plan.name}




                            </h3>




                            {plan.highlight && (




                              <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">




                                Popular




                              </span>




                            )}




                          </div>




                          <p className="text-cyan-400 font-semibold mb-4">




                            {plan.price}




                          </p>




                          <ul className="space-y-2">




                            {plan.features.map((f, j) => (




                              <li




                                key={j}




                                className="flex items-start gap-2 text-sm text-slate-300"




                              >




                                <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />




                                {f}




                              </li>




                            ))}




                          </ul>




                          <a




                            href={tool.affiliateUrl || tool.url}




                            target="_blank"




                            rel="noopener noreferrer"




                            className={`block mt-4 text-center py-2.5 rounded-lg font-medium text-sm transition-colors ${




                              plan.highlight




                                ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-600 hover:to-emerald-600"




                                : "bg-slate-600/50 text-slate-300 hover:bg-slate-600"




                            }`}




                          >




                            Get Started <ExternalLink className="w-3 h-3 inline ml-1" />




                          </a>




                        </div>




                      ))}




                    </div>




                  </div>









                  {/* Best For */}




                  <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">




                    <div className="flex items-center gap-3 mb-6">




                      <Users className="w-6 h-6 text-purple-400" />




                      <h2 className="text-2xl font-bold">Best For</h2>




                    </div>




                    <div className="space-y-3">




                      {tool.detailedContent.bestFor.map((item, i) => (




                        <div




                          key={i}




                          className="flex items-start gap-3 p-3 bg-purple-500/5 rounded-xl border border-purple-500/10"




                        >




                          <Users className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />




                          <span className="text-slate-300">{item}</span>




                        </div>




                      ))}




                    </div>




                  </div>









                  {/* Pros & Cons */}




                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">




                    {/* Pros */}




                    <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">




                      <div className="flex items-center gap-2 mb-4">




                        <TrendingUp className="w-5 h-5 text-emerald-400" />




                        <h2 className="text-xl font-bold text-emerald-400">




                          Pros




                        </h2>




                      </div>




                      <div className="space-y-3">




                        {tool.detailedContent.pros.map((pro, i) => (




                          <div




                            key={i}




                            className="flex items-start gap-3 p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10"




                          >




                            <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />




                            <span className="text-slate-300 text-sm">{pro}</span>




                          </div>




                        ))}




                      </div>




                    </div>




                    {/* Cons */}




                    <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">




                      <div className="flex items-center gap-2 mb-4">




                        <X className="w-5 h-5 text-red-400" />




                        <h2 className="text-xl font-bold text-red-400">Cons</h2>




                      </div>




                      <div className="space-y-3">




                        {tool.detailedContent.cons.map((con, i) => (




                          <div




                            key={i}




                            className="flex items-start gap-3 p-3 bg-red-500/5 rounded-xl border border-red-500/10"




                          >




                            <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />




                            <span className="text-slate-300 text-sm">{con}</span>




                          </div>




                        ))}




                      </div>




                    </div>




                  </div>









                  {/* How to Get Started */}




                  <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">




                    <div className="flex items-center gap-3 mb-6">




                      <Rocket className="w-6 h-6 text-amber-400" />




                      <h2 className="text-2xl font-bold">




                        How to Get Started with {tool.name}




                      </h2>




                    </div>




                    <div className="space-y-6">




                      {tool.detailedContent.gettingStarted.map((step) => (




                        <div key={step.step} className="flex gap-4">




                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center font-bold text-white">




                            {step.step}




                          </div>




                          <div className="flex-1">




                            <h3 className="text-lg font-semibold text-white mb-1">




                              {step.title}




                            </h3>




                            <p className="text-slate-300 leading-relaxed">




                              {step.description}




                            </p>




                          </div>




                        </div>




                      ))}




                    </div>




                    <div className="mt-6 pt-6 border-t border-slate-700/50">




                      <a




                        href={tool.affiliateUrl || tool.url}




                        target="_blank"




                        rel="noopener noreferrer"




                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02]"




                      >




                        Start Now — Create Your {tool.name} Account




                        <ExternalLink className="w-4 h-4" />




                      </a>




                    </div>




                  </div>









                  {/* Alternatives (only tools with affiliate links) */}




                  {altTools.length > 0 && (




                    <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">




                      <h2 className="text-2xl font-bold mb-2">




                        {tool.name} Alternatives




                      </h2>




                      <p className="text-slate-400 text-sm mb-6">




                        Looking for something different? Here are similar tools




                        you might also want to try:




                      </p>




                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">




                        {altTools.map((alt) => (




                          <Link




                            key={alt!.id}




                            href={`/tools/${alt!.id}`}




                            className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 hover:bg-slate-700/50 transition-all group"




                          >




                            <div>




                              <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">




                                {alt!.name}




                              </p>




                              <p className="text-xs text-slate-400 mt-0.5">




                                {alt!.description.slice(0, 60)}...




                              </p>




                            </div>




                            <div className="flex items-center gap-2">




                              <StarRating rating={alt!.rating} />




                              {alt!.affiliateUrl && (




                                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs rounded-full">




                                  Verified




                                </span>




                              )}




                            </div>




                          </Link>




                        ))}




                      </div>




                    </div>




                  )}









                  {/* FAQ */}




                  <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">




                    <div className="flex items-center gap-3 mb-6">




                      <HelpCircle className="w-6 h-6 text-blue-400" />




                      <h2 className="text-2xl font-bold">




                        Frequently Asked Questions




                      </h2>




                    </div>




                    <div className="space-y-6">




                      {tool.detailedContent.faq.map((faq, i) => (




                        <div key={i}>




                          <h3 className="text-white font-semibold text-lg mb-2">




                            {faq.question}




                          </h3>




                          <p className="text-slate-400 leading-relaxed">




                            {faq.answer}




                          </p>




                        </div>




                      ))}




                    </div>




                  </div>









                  {/* Bottom CTA */}




                  <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-2xl p-8 border border-slate-700/50 text-center">




                    <h2 className="text-2xl font-bold mb-2">




                      Ready to Try {tool.name}?




                    </h2>




                    <p className="text-slate-400 mb-6">




                      Start using {tool.name} today and see why {tool.rating}/5




                      users rate it as one of the best{" "}




                      {category?.name?.toLowerCase() || "crypto"} tools




                      available.




                    </p>




                    <a




                      href={tool.affiliateUrl || tool.url}




                      target="_blank"




                      rel="noopener noreferrer"




                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-bold text-lg rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-cyan-500/20"




                    >




                      Visit {tool.name} Now




                      <ExternalLink className="w-5 h-5" />




                    </a>




                  </div>




                </>




              ) : (




                <>




                  {/* ========== DEFAULT CONTENT (for tools without detailedContent) ========== */}









                  {/* Detailed Review */}




                  <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">




                    <h2 className="text-xl font-bold mb-4">




                      About {tool.name}




                    </h2>




                    <div className="text-slate-300 leading-relaxed space-y-4">




                      <p>




                        <strong className="text-white">{tool.name}</strong> is a




                        leading tool in the{" "}




                        {category?.name?.toLowerCase() || "crypto"} category. It




                        stands out with its{" "}




                        {tool.tags.slice(0, 2).join(" and ")} capabilities,




                        making it a popular choice among crypto enthusiasts and




                        professionals.




                      </p>




                      <p>




                        With a user rating of{" "}




                        <strong className="text-cyan-400">




                          {tool.rating}/5




                        </strong>




                        , {tool.name} has proven to be a reliable solution for




                        users looking for{" "}




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




                    <h2 className="text-xl font-bold mb-4">




                      Why Choose {tool.name}?




                    </h2>




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




                          <h3 className="text-white font-medium mb-1">




                            {faq.q}




                          </h3>




                          <p className="text-slate-400 text-sm">{faq.a}</p>




                        </div>




                      ))}




                    </div>




                  </div>




                </>




              )}














                  {/* Compare CTA (P0) */}

                  {(() => {

                    const compareMap: Record<string, string> = {

                      "3commas": "3commas-vs-cryptohopper",

                      "cryptohopper": "3commas-vs-cryptohopper",

                      "tradingview": "tradingview-vs-coinglass",

                      "coinglass": "tradingview-vs-coinglass",

                      "koinly": "koinly-vs-coinstats",

                      "coinstats": "koinly-vs-coinstats",

                      "binance": "binance-vs-okx",

                      "okx": "binance-vs-okx",

                      "ledger": "ledger-vs-trezor",

                      "trezor": "ledger-vs-trezor",

                    };

                    const compareTitles: Record<string, string> = {

                      "3commas-vs-cryptohopper": "3Commas vs Cryptohopper: Which is Better?",

                      "tradingview-vs-coinglass": "TradingView vs Coinglass: Which is Better?",

                      "koinly-vs-coinstats": "Koinly vs CoinStats: Which is Better?",

                      "binance-vs-okx": "Binance vs OKX: Which is Better?",

                      "ledger-vs-trezor": "Ledger vs Trezor: Which is Better?",

                    };

                    const slug = compareMap[tool.id];

                    if (!slug) return null;

                    return (

                      <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-2xl p-8 border border-slate-700/50 text-center">

                        <h2 className="text-2xl font-bold mb-2">

                          {compareTitles[slug] ?? slug}

                        </h2>

                        <p className="text-slate-400 mb-6">

                          Compare {tool.name} with its top alternative and decide which fits you best.

                        </p>

                        <Link

                          href={`/compare/${slug}`}

                          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-purple-500/20"

                        >

                          Read the Comparison

                          <ArrowRight className="w-5 h-5" />

                        </Link>

                      </div>

                    );

                  })()}









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




                    <span className="text-white font-medium">




                      {tool.rating}/5




                    </span>




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





        {/* Compare Cross-Link */}
        {(() => {
          const compareMap: Record<string, string> = {
            "3commas": "/compare/3commas-vs-cryptohopper",
            "cryptohopper": "/compare/3commas-vs-cryptohopper",
            "tradingview": "/compare/tradingview-vs-coinglass",
            "coinglass": "/compare/tradingview-vs-coinglass",
            "koinly": "/compare/koinly-vs-coinstats",
            "coinstats": "/compare/koinly-vs-coinstats",
            "binance": "/compare/binance-vs-okx",
            "okx": "/compare/binance-vs-okx",
            "ledger": "/compare/ledger-vs-trezor",
            "trezor": "/compare/ledger-vs-trezor",
          };
          const compareUrl = compareMap[tool.id];
          if (!compareUrl) return null;
          return (
            <div className="mt-10 bg-slate-800/50 rounded-xl border border-cyan-500/20 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">See how {tool.name} compares</p>
                  <p className="text-xs text-slate-400 mt-1">We've put {tool.name} head-to-head against its top competitor. See which one wins.</p>
                </div>
                <Link href={compareUrl} className="shrink-0 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  View Comparison &rarr;
                </Link>
              </div>
            </div>
          );
        })()}

      </main>




    </>




  );




}




