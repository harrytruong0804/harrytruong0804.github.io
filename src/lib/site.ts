export const SITE_URL = "https://harrytruong0804.github.io";
export const SITE_NAME = "harrytruong";
// Metadata only — never rendered. The visible masthead is its own copy in page.tsx.
export const SITE_TITLE = "Harry Truong — Visual notes on graphics, USD & AI";
export const SITE_DESCRIPTION =
  "Visual notes by Harry Truong, engineer — diagrams and deep dives on graphics, USD & Omniverse, geospatial 3D, and software design.";
export const SITE_AUTHOR = "Harry Truong";
export const SITE_GITHUB = "https://github.com/harrytruong0804";
export const SITE_SCHOLAR =
  "https://scholar.google.com/citations?user=Ct5f6qIAAAAJ&hl=en";
export const SITE_EMAIL = "noitq.hust@gmail.com";
export const SITE_PHONE = "+84 356 211 899";

/** Profiles that identify the author, for schema.org Person.sameAs. */
export const AUTHOR_SAME_AS = [SITE_GITHUB, SITE_SCHOLAR];

/**
 * Canonical URL for a post. The trailing slash is required: next.config.ts sets
 * trailingSlash: true, so /posts/foo 301s to /posts/foo/. Build every post URL
 * here so sitemap, canonical, and JSON-LD can't drift apart.
 */
export function postUrl(slug: string): string {
  return `${SITE_URL}/posts/${slug}/`;
}

/** Canonical homepage URL, trailing slash included to match postUrl(). */
export const SITE_HOME = `${SITE_URL}/`;

/** Site-wide social card, rendered by src/app/og.png/route.tsx. */
export const SITE_OG_IMAGE = `${SITE_URL}/og.png`;
