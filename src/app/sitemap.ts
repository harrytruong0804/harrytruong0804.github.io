import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_HOME, postUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  return [
    {
      url: SITE_HOME,
      lastModified: new Date(posts[0]?.date ?? Date.now()),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...posts.map((post) => ({
      url: postUrl(post.slug),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
