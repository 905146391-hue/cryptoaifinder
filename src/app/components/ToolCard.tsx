import Link from "next/link";
import { Star, ExternalLink, Tag } from "lucide-react";

interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  affiliateUrl?: string;
  pricing: string;
  rating: number;
  featured?: boolean;
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "trading-bots": "from-blue-500/20 to-blue-600/10 text-blue-400 border-blue-500/20",
    analytics: "from-purple-500/20 to-purple-600/10 text-purple-400 border-purple-500/20",
    portfolio: "from-emerald-500/20 to-emerald-600/10 text-emerald-400 border-emerald-500/20",
    defi: "from-yellow-500/20 to-yellow-600/10 text-yellow-400 border-yellow-500/20",
    security: "from-red-500/20 to-red-600/10 text-red-400 border-red-500/20",
    sentiment: "from-pink-500/20 to-pink-600/10 text-pink-400 border-pink-500/20",
    charting: "from-indigo-500/20 to-indigo-600/10 text-indigo-400 border-indigo-500/20",
    wallet: "from-orange-500/20 to-orange-600/10 text-orange-400 border-orange-500/20",
    nft: "from-violet-500/20 to-violet-600/10 text-violet-400 border-violet-500/20",
    exchange: "from-cyan-500/20 to-cyan-600/10 text-cyan-400 border-cyan-500/20",
    "news-data": "from-teal-500/20 to-teal-600/10 text-teal-400 border-teal-500/20",
  };
  return colors[category] || "from-gray-500/20 to-gray-600/10 text-gray-400 border-gray-500/20";
}

function getDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
}

function getCategoryName(category: string): string {
  const names: Record<string, string> = {
    "trading-bots": "Trading Bot",
    analytics: "Analytics",
    portfolio: "Portfolio",
    defi: "DeFi",
    security: "Security",
    sentiment: "Sentiment",
    charting: "Charting",
    wallet: "Wallet",
    nft: "NFT",
    exchange: "Exchange",
    "news-data": "News",
  };
  return names[category] || category;
}

export default function ToolCard({ tool }: { tool: Tool }) {
  const categoryColor = getCategoryColor(tool.category);
  const categoryName = getCategoryName(tool.category);

  return (
    <Link href={`/tools/${tool.id}`} className="group block">
      <div className="h-full bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-5 hover:border-[#2a2a3e] hover:bg-[#0d0d14]/80 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {getDomain(tool.url) ? (
              <img
                src={`https://www.google.com/s2/favicons?domain=${getDomain(tool.url)}&sz=64`}
                alt=""
                className="w-10 h-10 rounded-lg object-contain bg-[#0a0a0f] border border-[#1a1a2e]/30"
                loading="lazy"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.replaceWith(Object.assign(document.createElement('span'), {
                    className: 'w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center border text-white font-bold text-sm',
                    textContent: tool.name.charAt(0).toUpperCase(),
                  }));
                }}
              />
            ) : (
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${categoryColor.split(' ').slice(0,2).join(' ')} flex items-center justify-center border`}>
                <span className="text-white font-bold text-sm">{tool.name.charAt(0).toUpperCase()}</span>
              </div>
            )}
            <div>
              <h3 className="font-semibold text-white text-sm group-hover:text-cyan-400 transition-colors">
                {tool.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs text-[#64748b]">{tool.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          {tool.featured && (
            <span className="px-2 py-0.5 text-[10px] font-medium bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20">
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-[#64748b] mb-4 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-md bg-gradient-to-r ${categoryColor} border`}>
            {categoryName}
          </span>
          {tool.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] text-[#475569] bg-[#0a0a12] rounded-md border border-[#1a1a2e]/50"
            >
              <Tag size={8} />
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#1a1a2e]/50">
          <span className="text-xs text-[#475569]">{tool.pricing}</span>
          <span className="flex items-center gap-1 text-xs text-cyan-400/70 group-hover:text-cyan-400 transition-colors">
            View
            <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
