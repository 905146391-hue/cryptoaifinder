import { tools, categories } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Tools with detailedContent are more valuable → higher priority & fresher lastmod
const RICH_PRIORITY = 0.8;
const BASIC_PRIORITY = 0.6;
const RICH_LASTMOD = "2025-06-07";
const BASIC_LASTMOD = "2025-01-01";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cryptoaifinder.com";

  // Homepage
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: "2025-06-07",
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2025-01-01",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2025-01-01",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: "2025-01-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: "2025-01-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories
    .filter((c) => c.id !== "all")
    .map((c) => ({
      url: `${baseUrl}/categories/${c.id}`,
      lastModified: "2025-06-07" as const,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  // Tool detail pages — priority + lastModified depend on detailedContent
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => {
    const isRich = !!tool.detailedContent;
    return {
      url: `${baseUrl}/tools/${tool.id}`,
      lastModified: isRich ? RICH_LASTMOD : BASIC_LASTMOD,
      changeFrequency: "weekly" as const,
      priority: isRich ? RICH_PRIORITY : BASIC_PRIORITY,
    };
  });

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: "2025-06-07" as const,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: (post.date || "2025-01-01") as string,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...categoryPages, ...toolPages, ...blogPages];
}
