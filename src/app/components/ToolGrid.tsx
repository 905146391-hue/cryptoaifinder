"use client";

import { Tool } from "@/lib/data";
import ToolCard from "./ToolCard";
import { Search } from "lucide-react";

interface ToolGridProps {
  tools: Tool[];
  activeCategory: string;
}

export default function ToolGrid({ tools, activeCategory }: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <section id="tools" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Search className="h-12 w-12 text-[#1e1e2e] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">No tools found</h3>
          <p className="text-[#64748b]">Try adjusting your search or category filter.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="tools" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            {activeCategory === "all" ? "All Tools" : tools[0]?.category}
          </h2>
          <span className="text-sm text-[#64748b]">{tools.length} tools</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
