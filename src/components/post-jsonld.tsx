import type { Post } from "@/lib/posts";
import {
  SITE_URL,
  SITE_NAME,
  SITE_AUTHOR,
  SITE_OG_IMAGE,
  AUTHOR_SAME_AS,
  postUrl,
} from "@/lib/site";

/** One canonical Person node; every page references it by @id instead of restating it. */
const PERSON_ID = `${SITE_URL}/#person`;

export default function PostJsonLd({ post }: { post: Post }) {
  const url = postUrl(post.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: SITE_OG_IMAGE,
    keywords: post.tags.join(", "),
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_AUTHOR,
      url: SITE_URL,
      sameAs: AUTHOR_SAME_AS,
    },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@type": "Blog", name: SITE_NAME, url: SITE_URL },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
