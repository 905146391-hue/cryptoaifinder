"use client";

import { Star, ExternalLink, Tag, Sparkles } from "lucide-react";
import { Tool } from "@/lib/data";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const linkUrl = tool.affiliateUrl || tool.url;

  return (
    <div className="group relative flex flex-col rounded-xl border border-[#1e1e2e] bg-[#111118] p-5 transition-all hover:border-indigo-500/30 hover:bg-[#1a1a24]">
      {/* Featured badge */}
      {tool.featured && (
        <div className="absolute -top-2 -right-2">
          <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-2.5 py-1 text-xs font-medium text-white shadow-lg">
            <Sparkles className="h-3 w-3" />
            Featured
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 text-indigo-400 font-bold text-sm">
            {tool.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
              {tool.name}
            </h3>
            <div className="flex items-center gap-1 mt-0.5">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="text-sm text-[#64748b]">{tool.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#94a3b8] mb-4 flex-1 line-clamp-3">
        {tool.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-md bg-[#0a0a0f] px-2 py-1 text-xs text-[#64748b] border border-[#1e1e2e]"
          >
            <Tag className="h-3 w-3" />
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[#1e1e2e]">
        <span className="text-xs text-[#64748b]">{tool.pricing}</span>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600/10 px-3 py-1.5 text-sm font-medium text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all"
        >
          Visit
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
