import { blogPosts } from "@/lib/blog-data";
import { markdownToHtml } from "@/lib/markdown";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Tag,
  ExternalLink,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | CryptoFinder Blog`,
    description: post.excerpt,
    keywords: [
      post.title,
      post.category,
      "crypto AI tools",
      "crypto review",
      "crypto comparison",
      "CryptoFinder",
    ],
    openGraph: {
      title: `${post.title} | CryptoFinder`,
      description: post.excerpt,
      url: `https://cryptoaifinder.com/blog/${post.slug}`,
      siteName: "CryptoFinder",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | CryptoFinder`,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://cryptoaifinder.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const htmlContent = markdownToHtml(post.content);

  const categoryColor =
    post.category === "Review"
      ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
      : post.category === "Comparison"
        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
        : "bg-purple-500/10 text-purple-400 border-purple-500/20";

  // JSON-LD Article structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `https://cryptoaifinder.com/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "CryptoFinder",
      url: "https://cryptoaifinder.com",
    },
  };

  return (
    <div className="min-h-full bg-[#06060b] text-[#e2e8f0]">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#1a1a2e]/50 bg-[#06060b]/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center h-14 gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-sm text-[#64748b] hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Blog</span>
          </Link>
          <div className="flex-1" />
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">CF</span>
            </div>
            <span className="text-sm font-bold text-white">
              Crypto<span className="text-cyan-400">Finder</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Article */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Article header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColor}`}
            >
              {post.category}
            </span>
            <span className="text-xs text-[#475569] flex items-center gap-1">
              <Calendar size={12} />
              {post.date}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-3 text-base text-[#94a3b8] leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Article content */}
        <article
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* External links */}
        {(post.mediumUrl || post.devtoUrl) && (
          <div className="mt-10 pt-6 border-t border-[#1a1a2e]">
            <p className="text-sm text-[#475569] mb-3">Also published on:</p>
            <div className="flex flex-wrap gap-3">
              {post.mediumUrl && (
                <a
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0d0d14] border border-[#1a1a2e] rounded-lg text-sm text-[#94a3b8] hover:text-white hover:border-cyan-500/30 transition-all"
                >
                  <ExternalLink size={14} />
                  Medium
                </a>
              )}
              {post.devtoUrl && (
                <a
                  href={post.devtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0d0d14] border border-[#1a1a2e] rounded-lg text-sm text-[#94a3b8] hover:text-white hover:border-cyan-500/30 transition-all"
                >
                  <ExternalLink size={14} />
                  Dev.to
                </a>
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 bg-[#0d0d14] border border-[#1a1a2e] rounded-2xl p-6 text-center">
          <p className="text-sm text-[#64748b] mb-2">Explore more crypto tools</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Browse 455+ AI Crypto Tools
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a2e]/50 bg-[#06060b] mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 text-center">
          <p className="text-xs text-[#333]">
            &copy; {new Date().getFullYear()} CryptoFinder. All rights reserved. Not financial advice. Always DYOR.
          </p>
        </div>
      </footer>
    </div>
  );
}
