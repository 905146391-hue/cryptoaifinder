import Link from "next/link";
import { Calendar, Tag } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export default function BlogCard({ slug, title, excerpt, date, category }: BlogCardProps) {
  const categoryColor =
    category === "Review"
      ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
      : category === "Comparison"
        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
        : "bg-purple-500/10 text-purple-400 border-purple-500/20";

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-[#0d0d14] border border-[#1a1a2e] rounded-2xl p-5 hover:border-cyan-500/30 transition-all"
    >
      <div className="flex items-center gap-2 mb-3">
        <Tag size={12} className="text-[#475569]" />
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColor}`}
        >
          {category}
        </span>
        <span className="text-xs text-[#475569] flex items-center gap-1">
          <Calendar size={10} />
          {date}
        </span>
      </div>
      <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2 mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#64748b] leading-relaxed line-clamp-3">{excerpt}</p>
      <div className="mt-3 flex items-center gap-1 text-xs text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
        Read article →
      </div>
    </Link>
  );
}
