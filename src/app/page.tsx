"use client";

import { useState, useMemo } from "react";
import { tools } from "@/lib/data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import ToolGrid from "./components/ToolGrid";
import Footer from "./components/Footer";
import { BookOpen, ArrowRight } from "lucide-react";

const featuredArticles = [
  {
    title: "3Commas Review 2026: Is It Worth It?",
    url: "https://medium.com/@905146391/3commas-review-2026-is-it-worth-it-a-complete-breakdown-f1313538a663",
    tag: "Review",
    tagColor: "cyan",
  },
  {
    title: "Best AI Crypto Trading Bots 2026",
    url: "https://medium.com/@905146391",
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

        <ToolGrid tools={filteredTools} activeCategory={activeCategory} />
      </main>
      <Footer />
    </div>
  );
}
