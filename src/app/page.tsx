import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-3 border-border px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-pixel text-2xl text-accent glow mb-3">
            {">"} harrytruong
          </h1>
          <p className="font-retro text-2xl text-foreground/70 cursor-blink">
            learning artifacts & visual notes
          </p>
        </div>
      </header>

      {/* About */}
      <section className="mx-auto max-w-4xl px-6 pt-10 pb-6">
        <div className="pixel-border bg-surface p-6 rounded-sm">
          <p className="font-pixel text-xs text-accent2 mb-3">// ABOUT</p>
          <p className="font-retro text-xl leading-relaxed text-foreground/80">
            Hi! I learn things and turn the interesting artifacts into
            visual notes. This blog is a
            collection of those explorations.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-4xl px-6 py-6">
        <h2 className="font-pixel text-sm text-accent3 mb-6">
          [{String(posts.length).padStart(2, "0")}] ARTIFACTS
        </h2>

        <div className="grid gap-4">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <article className="pixel-border bg-surface p-5 rounded-sm card-hover cursor-pointer group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-pixel text-xs text-accent/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-pixel text-xs text-foreground group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                    </div>
                    <p className="font-retro text-lg text-foreground/60 leading-snug mb-3">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-retro text-base text-foreground/40">
                        {post.date}
                      </span>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-retro text-base px-2 py-0.5 bg-accent/10 text-accent/70 border border-accent/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-pixel text-xs text-accent/30 group-hover:text-accent transition-colors mt-1">
                    {">"}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-3 border-border mt-12 px-6 py-8">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <p className="font-retro text-lg text-foreground/40">
            noitq.hust@gmail.com
          </p>
          <a
            href="https://github.com/harrytruong0804"
            target="_blank"
            rel="noopener noreferrer"
            className="font-retro text-lg text-accent/60 hover:text-accent transition-colors"
          >
            github
          </a>
        </div>
      </footer>
    </div>
  );
}
