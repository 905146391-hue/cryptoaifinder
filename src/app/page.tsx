"use client";

import { useState, useMemo } from "react";
import { tools } from "@/lib/data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import ToolGrid from "./components/ToolGrid";
import Footer from "./components/Footer";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";

const featuredArticles = [
  {
    title: "3Commas Review 2026: Is It Worth It?",
    url: "https://medium.com/@905146391/3commas-review-2026-is-it-worth-it-a-complete-breakdown-f1313538a663",
    tag: "Review",
    tagColor: "cyan",
  },
  {
    title: "Best AI Crypto Trading Bots 2026",
    url: "https://medium.com/@905146391/best-ai-crypto-trading-bots-in-2026-tested-and-compared-fb80fde78730",
    tag: "Roundup",
    tagColor: "emerald",
  },
  {
    title: "Best Crypto Portfolio Trackers 2026",
    url: "https://medium.com/@905146391",
    tag: "Roundup",
    tagColor: "purple",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  function getDomain(url: string) {
    try { return new URL(url).hostname; } catch { return ''; }
  }

  const recentTools = useMemo(() => {
    return tools.slice(-6).reverse();
  }, []);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        activeCategory === "all" || tool.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex flex-col min-h-full">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="flex-1">
        <Hero />
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* From Our Blog banner */}
        {activeCategory === "all" && !searchQuery && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
            <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-cyan-400" />
                  <span className="text-sm font-semibold text-white">From Our Blog</span>
                  <span className="text-xs px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">In-depth Reviews</span>
                </div>
                <a
                  href="https://medium.com/@905146391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-[#475569] hover:text-cyan-400 transition-colors"
                >
                  View all on Medium <ArrowRight size={12} />
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {featuredArticles.map((article) => (
                  <a
                    key={article.title}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-3 rounded-xl bg-[#06060b] border border-[#1a1a2e] hover:border-cyan-500/30 transition-all"
                  >
                    <div className={`mt-0.5 shrink-0 w-1.5 h-1.5 rounded-full ${
                      article.tagColor === "cyan" ? "bg-cyan-400" :
                      article.tagColor === "emerald" ? "bg-emerald-400" : "bg-purple-400"
                    }`} />
                    <div className="min-w-0">
                      <span className={`text-xs font-medium px-1.5 py-0.5 rounded mb-1.5 inline-block ${
                        article.tagColor === "cyan" ? "bg-cyan-500/10 text-cyan-400" :
                        article.tagColor === "emerald" ? "bg-emerald-500/10 text-emerald-400" : "bg-purple-500/10 text-purple-400"
                      }`}>
                        {article.tag}
                      </span>
                      <p className="text-sm text-[#94a3b8] group-hover:text-white transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Free Tools - Calculators */}
        {activeCategory === "all" && !searchQuery && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
            <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-yellow-400" />
                  <span className="text-sm font-semibold text-white">Free Tools</span>
                  <span className="text-xs px-2 py-0.5 bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20">Calculators</span>
                </div>
                <span className="text-xs text-[#475569]">For crypto traders</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "profit-calculator", name: "Profit Calculator", desc: "Calculate P&L, ROI & coin quantity from buy/sell prices", icon: "📊", color: "#0d9488" },
                  { id: "staking-calculator", name: "Staking Calculator", desc: "Estimate staking rewards & APY with compounding", icon: "💰", color: "#7c3aed" },
                  { id: "gas-tracker", name: "Gas Fee Tracker", desc: "Real-time gas prices across Ethereum, BSC, Polygon & Arbitrum", icon: "⛽", color: "#ea580c" },
                ].map((tool) => (
                  <a key={tool.id} href={`/tools/${tool.id}`}
                     className="group flex items-center gap-3 p-3 rounded-xl bg-[#06060b] border border-[#1a1a2e] hover:border-cyan-500/30 transition-all">
                    <span className="text-2xl shrink-0" style={{ filter: "drop-shadow(0 0 6px " + tool.color + ")" }}>{tool.icon}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">{tool.name}</p>
                      <p className="text-xs text-[#475569] mt-0.5 leading-snug">{tool.desc}</p>
                    </div>
                    <svg className="w-4 h-4 ml-auto shrink-0 opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recently Added */}
        {activeCategory === "all" && !searchQuery && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-yellow-400" />
              <span className="text-base font-semibold text-white">Recently Added</span>
              <span className="text-xs text-[#475569]">— latest tools on CryptoFinder</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {recentTools.map((tool) => (
                <a
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="group flex flex-col items-center gap-2 p-4 bg-[#0d0d14] border border-[#1a1a2e] rounded-xl hover:border-cyan-500/30 transition-all text-center"
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${getDomain(tool.url)}&sz=32`}
                    alt=""
                    className="w-8 h-8 rounded-md object-contain bg-[#06060b]"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-[#475569] px-1.5 py-0.5 bg-[#06060b] rounded-full">
                    {tool.category}
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        <ToolGrid tools={filteredTools} activeCategory={activeCategory} />
      </main>
      <Footer />
    </div>
  );
}
