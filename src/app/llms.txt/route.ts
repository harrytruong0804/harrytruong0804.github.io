import { getAllPosts, type Post } from "@/lib/posts";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_AUTHOR,
  SITE_GITHUB,
  postUrl,
} from "@/lib/site";

// Render once at build time so `output: export` can emit a static llms.txt.
export const dynamic = "force-static";

const line = (post: Post) =>
  `- [${post.title}](${postUrl(post.slug)}): ${post.description}`;

export function GET() {
  const posts = getAllPosts();
  const engineering = posts.filter((p) => p.category !== "soft-skills");
  const soft = posts.filter((p) => p.category === "soft-skills");

  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

Each post is a single first-principles explainer built around custom inline
diagrams. Written by ${SITE_AUTHOR} (${SITE_GITHUB}).

## Engineering

${engineering.map(line).join("\n")}

## Soft skills

${soft.map(line).join("\n")}

## Optional

- [RSS feed](${SITE_URL}/feed.xml)
- [Sitemap](${SITE_URL}/sitemap.xml)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
