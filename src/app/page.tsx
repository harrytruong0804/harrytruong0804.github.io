import { getAllPosts } from "@/lib/posts";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_AUTHOR,
  SITE_GITHUB,
} from "@/lib/site";
import PostList from "@/components/post-list";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    author: { "@type": "Person", name: SITE_AUTHOR, url: SITE_GITHUB },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      url: `${SITE_URL}/posts/${post.slug}`,
    })),
  };

  return (
    <div className="grain min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* Masthead */}
        <header className="pt-12 sm:pt-16 pb-10">
          <div className="flex items-center justify-between mb-12 sm:mb-16">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-soft">
              <span className="text-accent">Harry Truong</span> — learning
              artifacts
            </p>
            <ThemeToggle />
          </div>

          <h1 className="font-display font-semibold text-[2.6rem] sm:text-6xl leading-[1.04] tracking-tight">
            Visual notes,
            <br />
            from{" "}
            <em className="text-accent font-medium">first principles.</em>
          </h1>

          <p className="mt-6 text-lg sm:text-xl italic text-ink-soft max-w-[46ch] leading-relaxed">
            Deep dives on graphics, USD &amp; Omniverse, geospatial 3D, and
            software design — each one a hand-built artifact.
          </p>
        </header>

        <div className="rule-double" />

        {/* Index */}
        <main className="pt-8 pb-4">
          <div className="flex items-baseline justify-between mb-7">
            <h2 className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-faint">
              Index — {posts.length} entries
            </h2>
          </div>

          <PostList posts={posts} />
        </main>

        {/* Footer */}
        <footer className="mt-16 pb-16">
          <div className="rule-double mb-7" />
          <div className="flex items-center justify-between gap-4 flex-wrap font-mono text-[12px] text-ink-soft">
            <a
              href="mailto:noitq.hust@gmail.com"
              className="hover:text-accent transition-colors"
            >
              noitq.hust@gmail.com
            </a>
            <div className="flex items-center gap-5">
              <a
                href="/feed.xml"
                className="hover:text-accent transition-colors"
              >
                rss
              </a>
              <a
                href={SITE_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                github ↗
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
