"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Post } from "@/lib/posts";

const COLLAPSED_TAG_COUNT = 12;

export default function PostList({ posts }: { posts: Post[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [tagsExpanded, setTagsExpanded] = useState(false);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts)
      for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag]) => tag);
  }, [posts]);

  // keep the active tag visible even if it lives past the collapse cut
  const shownTags =
    tagsExpanded || tags.length <= COLLAPSED_TAG_COUNT
      ? tags
      : tags
          .slice(0, COLLAPSED_TAG_COUNT)
          .concat(
            activeTag && !tags.slice(0, COLLAPSED_TAG_COUNT).includes(activeTag)
              ? [activeTag]
              : []
          );
  const hiddenCount = tags.length - shownTags.length;

  const visible = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap mb-6" role="group" aria-label="Filter posts by tag">
        {shownTags.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={activeTag === tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`font-retro text-base px-2 py-0.5 border transition-colors cursor-pointer ${
              activeTag === tag
                ? "bg-accent/25 text-accent border-accent/60"
                : "bg-accent/5 text-foreground/50 border-border hover:text-accent/80 hover:border-accent/30"
            }`}
          >
            #{tag}
          </button>
        ))}
        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setTagsExpanded(true)}
            className="font-retro text-base px-2 py-0.5 text-foreground/40 hover:text-accent/80 transition-colors cursor-pointer"
          >
            [+{hiddenCount} more]
          </button>
        )}
        {tagsExpanded && tags.length > COLLAPSED_TAG_COUNT && (
          <button
            type="button"
            onClick={() => setTagsExpanded(false)}
            className="font-retro text-base px-2 py-0.5 text-foreground/40 hover:text-accent/80 transition-colors cursor-pointer"
          >
            [- less]
          </button>
        )}
        {activeTag && (
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className="font-retro text-base px-2 py-0.5 text-accent3/80 hover:text-accent3 transition-colors cursor-pointer"
          >
            [x] clear
          </button>
        )}
      </div>

      <div className="grid gap-4">
        {visible.map((post, i) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <article className="pixel-border bg-surface p-4 sm:p-5 rounded-sm card-hover cursor-pointer group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-pixel text-xs text-accent/50 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-pixel text-xs leading-relaxed text-foreground group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <p className="font-retro text-lg text-foreground/60 leading-snug mb-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <time
                      dateTime={post.date}
                      className="font-retro text-base text-foreground/40"
                    >
                      {post.date}
                    </time>
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
                <span
                  aria-hidden="true"
                  className="font-pixel text-xs text-accent/30 group-hover:text-accent transition-colors mt-1 hidden sm:block"
                >
                  {">"}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="font-retro text-xl text-foreground/50">
          no artifacts match this tag.
        </p>
      )}
    </>
  );
}
