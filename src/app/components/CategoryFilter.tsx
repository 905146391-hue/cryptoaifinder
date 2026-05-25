"use client";

import { categories } from "@/lib/data";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <section id="categories" className="py-8 border-b border-[#1e1e2e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold text-white">Categories</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white"
                  : "bg-[#111118] text-[#64748b] border border-[#1e1e2e] hover:border-indigo-500/50 hover:text-white"
              }`}
            >
              {cat.name}
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  activeCategory === cat.id
                    ? "bg-indigo-500/30 text-indigo-200"
                    : "bg-[#1a1a24] text-[#64748b]"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
