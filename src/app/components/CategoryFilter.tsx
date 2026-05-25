import { categories } from "@/lib/data";
import Link from "next/link";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <section className="border-y border-[#1a1a2e]/50 bg-[#06060b]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-1.5 sm:gap-2 py-4 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                activeCategory === category.id
                  ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 glow-cyan"
                  : "text-[#64748b] hover:text-white hover:bg-[#0d0d14] border border-transparent"
              }`}
            >
              {category.id === "all" ? "All" : category.name}
              <span className={`text-xs px-1 sm:px-1.5 py-0.5 rounded-md ${
                activeCategory === category.id
                  ? "bg-cyan-500/20 text-cyan-300"
                  : "bg-[#0d0d14] text-[#475569]"
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
