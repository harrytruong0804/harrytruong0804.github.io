"use client";

import { useEffect, useRef, useState } from "react";
import type { Post } from "@/lib/posts";
import type { Dispatch } from "@/lib/dispatches";
import PostList from "@/components/post-list";

type TabId = "writing" | "news";

export default function HomeTabs({
  posts,
  dispatches,
}: {
  posts: Post[];
  dispatches: Dispatch[];
}) {
  const [tab, setTab] = useState<TabId>("writing");
  const writingRef = useRef<HTMLButtonElement>(null);
  const newsRef = useRef<HTMLButtonElement>(null);

  // Sync with the URL hash so /#news deep-links (and back/forward) work.
  useEffect(() => {
    const sync = () =>
      setTab(window.location.hash === "#news" ? "news" : "writing");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const select = (t: TabId) => {
    setTab(t);
    const url = t === "news" ? "#news" : window.location.pathname;
    history.replaceState(null, "", url);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next: TabId = tab === "writing" ? "news" : "writing";
    select(next);
    (next === "news" ? newsRef : writingRef).current?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Homepage sections"
        onKeyDown={onKey}
        className="flex items-end gap-7 border-b border-line mb-8"
      >
        <Tab
          ref={writingRef}
          id="writing"
          active={tab === "writing"}
          label="Writing"
          count={posts.length}
          onClick={() => select("writing")}
        />
        <Tab
          ref={newsRef}
          id="news"
          active={tab === "news"}
          label="News"
          count={dispatches.length}
          onClick={() => select("news")}
        />
      </div>

      <div
        role="tabpanel"
        id="panel-writing"
        aria-labelledby="tab-writing"
        hidden={tab !== "writing"}
      >
        {tab === "writing" && <PostList posts={posts} />}
      </div>
      <div
        role="tabpanel"
        id="panel-news"
        aria-labelledby="tab-news"
        hidden={tab !== "news"}
      >
        {tab === "news" && <DispatchList dispatches={dispatches} />}
      </div>
    </div>
  );
}

function Tab({
  ref,
  id,
  active,
  label,
  count,
  onClick,
}: {
  ref: React.Ref<HTMLButtonElement>;
  id: TabId;
  active: boolean;
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      id={`tab-${id}`}
      aria-controls={`panel-${id}`}
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      onClick={onClick}
      className={`-mb-px flex items-baseline gap-2 border-b-2 pb-3 font-mono text-[12px] uppercase tracking-[0.1em] cursor-pointer transition-colors ${
        active
          ? "border-accent text-ink"
          : "border-transparent text-ink-faint hover:text-ink-soft"
      }`}
    >
      {label}
      <span
        className={`rounded-full border px-1.5 text-[10px] tabular-nums ${
          active ? "border-accent text-accent" : "border-line text-ink-faint"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function DispatchList({ dispatches }: { dispatches: Dispatch[] }) {
  if (dispatches.length === 0) {
    return <p className="py-10 italic text-ink-soft">No news yet.</p>;
  }
  return (
    <ol className="border-t border-line">
      {dispatches.map((d, i) => {
        const body = (
          <>
            <time
              dateTime={d.date}
              className="font-mono text-[12px] text-ink-faint tabular-nums whitespace-nowrap pt-[3px]"
            >
              {d.date}
            </time>
            <span className="text-[1.05rem] leading-relaxed text-ink">
              {d.text}
              {d.href && (
                <span
                  aria-hidden="true"
                  className="text-ink-faint transition-colors group-hover:text-accent"
                >
                  {" ↗"}
                </span>
              )}
            </span>
          </>
        );
        return (
          <li key={i} className="border-b border-line">
            {d.href ? (
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[6rem_1fr] sm:grid-cols-[6.5rem_1fr] gap-x-4 py-5 -mx-3 px-3 rounded-sm transition-colors hover:bg-accent-soft"
              >
                {body}
              </a>
            ) : (
              <div className="grid grid-cols-[6rem_1fr] sm:grid-cols-[6.5rem_1fr] gap-x-4 py-5">
                {body}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
