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
      {/* Tag filter */}
      <div
        className="flex items-baseline gap-x-3 gap-y-1.5 flex-wrap mb-8 font-mono text-[12px]"
        role="group"
        aria-label="Filter posts by tag"
      >
        {shownTags.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={activeTag === tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`cursor-pointer transition-colors ${
              activeTag === tag
                ? "text-accent underline underline-offset-4 decoration-2"
                : "text-ink-soft hover:text-accent"
            }`}
          >
            #{tag}
          </button>
        ))}
        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setTagsExpanded(true)}
            className="cursor-pointer text-ink-faint hover:text-accent transition-colors"
          >
            +{hiddenCount} more
          </button>
        )}
        {tagsExpanded && tags.length > COLLAPSED_TAG_COUNT && (
          <button
            type="button"
            onClick={() => setTagsExpanded(false)}
            className="cursor-pointer text-ink-faint hover:text-accent transition-colors"
          >
            − less
          </button>
        )}
        {activeTag && (
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className="cursor-pointer text-accent hover:opacity-70 transition-opacity"
          >
            ✕ clear
          </button>
        )}
      </div>

      {/* Catalog rows */}
      <ol className="border-t border-line">
        {visible.map((post, i) => (
          <li
            key={post.slug}
            className="reveal border-b border-line"
            style={{ animationDelay: `${Math.min(i * 45, 500)}ms` }}
          >
            <Link
              href={`/posts/${post.slug}`}
              className="group grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr_6.5rem] gap-x-2 py-6 -mx-3 px-3 rounded-sm transition-colors hover:bg-accent-soft"
            >
              <span className="font-mono text-[12px] pt-[7px] text-ink-faint group-hover:text-accent transition-colors">
                №{String(i + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <h3 className="font-display font-semibold text-xl sm:text-[1.35rem] leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-[1.05rem] leading-relaxed text-ink-soft max-w-[62ch]">
                  {post.description}
                </p>
                <p className="mt-3 font-mono text-[11.5px] text-ink-faint">
                  <time dateTime={post.date} className="sm:hidden">
                    {post.date} ·{" "}
                  </time>
                  {post.tags.join(" · ")}
                </p>
              </div>

              <span className="hidden sm:flex flex-col items-end justify-between pt-[7px]">
                <time
                  dateTime={post.date}
                  className="font-mono text-[12px] text-ink-faint"
                >
                  {post.date}
                </time>
                <span
                  aria-hidden="true"
                  className="font-mono text-[13px] text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                >
                  read ↗
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {visible.length === 0 && (
        <p className="py-10 italic text-ink-soft">
          Nothing in the archive matches this tag.
        </p>
      )}
    </>
  );
}
