import { getAllPosts } from "@/lib/posts";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_AUTHOR,
  SITE_GITHUB,
} from "@/lib/site";
import PostList from "@/components/post-list";

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
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="border-b-3 border-border px-4 sm:px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-pixel text-xl sm:text-2xl text-accent glow mb-3">
            {">"} harrytruong
          </h1>
          <p className="font-retro text-xl sm:text-2xl text-foreground/70 cursor-blink">
            learning artifacts & visual notes
          </p>
        </div>
      </header>

      {/* About */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 pb-6">
        <div className="pixel-border bg-surface p-5 sm:p-6 rounded-sm">
          <p className="font-pixel text-xs text-accent2 mb-3">// ABOUT</p>
          <p className="font-retro text-xl leading-relaxed text-foreground/80">
            Hi! I learn things and turn the interesting artifacts into
            visual notes. This blog is a
            collection of those explorations.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-6">
        <h2 className="font-pixel text-sm text-accent3 mb-6">
          [{String(posts.length).padStart(2, "0")}] ARTIFACTS
        </h2>

        <PostList posts={posts} />
      </section>

      {/* Footer */}
      <footer className="border-t-3 border-border mt-12 px-4 sm:px-6 py-8">
        <div className="mx-auto max-w-4xl flex items-center justify-between gap-4 flex-wrap">
          <p className="font-retro text-lg text-foreground/40">
            noitq.hust@gmail.com
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/feed.xml"
              className="font-retro text-lg text-accent/60 hover:text-accent transition-colors"
            >
              rss
            </a>
            <a
              href={SITE_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="font-retro text-lg text-accent/60 hover:text-accent transition-colors"
            >
              github
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
