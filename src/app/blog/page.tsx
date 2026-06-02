import { blogPosts } from "@/lib/blog-data";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import BlogCard from "./components/BlogCard";

export const metadata: Metadata = {
  title: "Blog — In-Depth Crypto Tool Reviews & Guides | CryptoFinder",
  description:
    "Expert reviews, comparisons, and guides for AI-powered crypto tools. Stay updated with the latest insights on trading bots, portfolio trackers, DeFi tools, and more.",
  openGraph: {
    title: "Blog | CryptoFinder",
    description:
      "Expert reviews, comparisons, and guides for AI-powered crypto tools.",
    url: "https://cryptoaifinder.com/blog",
    siteName: "CryptoFinder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | CryptoFinder",
    description:
      "Expert reviews, comparisons, and guides for AI-powered crypto tools.",
  },
  alternates: {
    canonical: "https://cryptoaifinder.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-full bg-[#06060b] text-[#e2e8f0]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#1a1a2e]/50 bg-[#06060b]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center h-14 gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-[#64748b] hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <div className="flex-1" />
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">CF</span>
            </div>
            <span className="text-sm font-bold text-white">
              Crypto<span className="text-cyan-400">Finder</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Blog header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        <div className="flex items-center gap-2.5 mb-3">
          <BookOpen size={20} className="text-cyan-400" />
          <span className="text-xs font-medium px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
            Blog
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Crypto Tool Reviews & Guides
        </h1>
        <p className="text-sm text-[#64748b] max-w-2xl leading-relaxed">
          In-depth reviews, hands-on comparisons, and practical guides for
          AI-powered cryptocurrency tools. Written by traders, for traders.
        </p>
      </div>

      {/* Article grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-[#475569]">
            {blogPosts.length} articles and counting. New reviews published every week.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1a1a2e]/50 bg-[#06060b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-center">
          <p className="text-xs text-[#333]">
            &copy; {new Date().getFullYear()} CryptoFinder. All rights reserved. Not financial advice. Always DYOR.
          </p>
        </div>
      </footer>
    </div>
  );
}
