"use client";

import { Sparkles, TrendingUp, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300 mb-8">
          <Sparkles className="h-4 w-4" />
          <span>446+ AI-Powered Crypto Tools Curated</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Discover the Best{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            AI Tools
          </span>{" "}
          for Crypto
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-[#64748b] mb-10">
          Your comprehensive directory of AI-powered tools for trading, DeFi, 
          on-chain analytics, and portfolio management. Find, compare, and choose 
          the right tools for your crypto journey.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#tools"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
          >
            <TrendingUp className="h-4 w-4" />
            Explore Tools
          </a>
          <a
            href="#categories"
            className="inline-flex items-center gap-2 rounded-lg border border-[#1e1e2e] bg-[#111118] px-6 py-3 text-sm font-medium text-[#e2e8f0] hover:bg-[#1a1a24] transition-colors"
          >
            <Shield className="h-4 w-4" />
            Browse Categories
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">446+</div>
            <div className="text-sm text-[#64748b] mt-1">AI Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">11</div>
            <div className="text-sm text-[#64748b] mt-1">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">20+</div>
            <div className="text-sm text-[#64748b] mt-1">With Affiliate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
