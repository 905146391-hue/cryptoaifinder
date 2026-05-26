import ToolCard from "./ToolCard";
import { SlidersHorizontal } from "lucide-react";

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

interface ToolGridProps {
  tools: Tool[];
  activeCategory: string;
}

export default function ToolGrid({ tools, activeCategory }: ToolGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Results header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <SlidersHorizontal size={16} className="text-[#475569]" />
          <span className="text-sm text-[#64748b]">
            Showing <span className="text-white font-medium">{tools.length}</span> tools
            {activeCategory !== "all" && (
              <span> in this category</span>
            )}
          </span>
        </div>
        <div className="text-xs text-[#475569]">
          Featured tools first
        </div>
      </div>

      {/* Grid */}
      {tools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tools
            .sort((a, b) => {
              // Featured tools first, then by rating
              if (a.featured && !b.featured) return -1;
              if (!a.featured && b.featured) return 1;
              return b.rating - a.rating;
            })
            .map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-[#475569] text-lg">No tools found matching your criteria.</p>
          <p className="text-[#333] text-sm mt-2">Try adjusting your search or category filter.</p>
        </div>
      )}
    </section>
  );
}
