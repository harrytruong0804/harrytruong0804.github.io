import type { Post } from "@/lib/posts";
import { SITE_URL, SITE_NAME, SITE_AUTHOR, SITE_GITHUB } from "@/lib/site";

export default function PostJsonLd({ post }: { post: Post }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    keywords: post.tags.join(", "),
    url: `${SITE_URL}/posts/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/posts/${post.slug}`,
    author: {
      "@type": "Person",
      name: SITE_AUTHOR,
      url: SITE_GITHUB,
    },
    publisher: { "@type": "Person", name: SITE_AUTHOR },
    isPartOf: { "@type": "Blog", name: SITE_NAME, url: SITE_URL },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
