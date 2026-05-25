import { Sparkles, TrendingUp, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-500/5 via-emerald-500/3 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-20 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60" />
      <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float opacity-40" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-xs font-medium text-cyan-400">446+ AI-Powered Crypto Tools</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Discover the Best</span>
            <br />
            <span className="gradient-text">AI Tools for Crypto</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            The most comprehensive directory of AI-powered tools for trading, DeFi, analytics, security, and more. Find, compare, and choose the right tools.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {[
            { icon: Zap, value: "446+", label: "AI Tools", color: "cyan" },
            { icon: TrendingUp, value: "11", label: "Categories", color: "emerald" },
            { icon: Shield, value: "384+", label: "Platforms", color: "purple" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 bg-[#0d0d14]/80 border border-[#1a1a2e] rounded-xl px-5 py-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                stat.color === "cyan" ? "bg-cyan-500/10" : stat.color === "emerald" ? "bg-emerald-500/10" : "bg-purple-500/10"
              }`}>
                <stat.icon size={16} className={
                  stat.color === "cyan" ? "text-cyan-400" : stat.color === "emerald" ? "text-emerald-400" : "text-purple-400"
                } />
              </div>
              <div>
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-xs text-[#475569]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Categories Preview */}
        <div className="flex flex-wrap justify-center gap-2 mt-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {["Trading Bots", "DeFi AI", "Analytics", "Security", "Sentiment", "Charting"].map((cat) => (
            <span key={cat} className="px-3 py-1 text-xs text-[#475569] bg-[#0d0d14] border border-[#1a1a2e]/50 rounded-md">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
