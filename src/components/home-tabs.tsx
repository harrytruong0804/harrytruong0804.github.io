"use client";

import { useEffect, useRef, useState } from "react";
import type { Post } from "@/lib/posts";
import type { Dispatch } from "@/lib/dispatches";
import type { Link } from "@/lib/links";
import { SITE_EMAIL, SITE_PHONE } from "@/lib/site";
import PostList from "@/components/post-list";

type TabId = "writing" | "soft-skills" | "about";

const ORDER: TabId[] = ["writing", "soft-skills", "about"];
const HASH: Record<TabId, string> = {
  writing: "",
  "soft-skills": "#soft-skills",
  about: "#about",
};

export default function HomeTabs({
  posts,
  dispatches,
  links,
}: {
  posts: Post[];
  dispatches: Dispatch[];
  links: Link[];
}) {
  const writing = posts.filter((p) => p.category !== "soft-skills");
  const soft = posts.filter((p) => p.category === "soft-skills");

  const [tab, setTab] = useState<TabId>("writing");
  const writingRef = useRef<HTMLButtonElement>(null);
  const softRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const refFor: Record<TabId, React.RefObject<HTMLButtonElement | null>> = {
    writing: writingRef,
    "soft-skills": softRef,
    about: aboutRef,
  };

  // Sync with the URL hash so /#soft-skills and /#about deep-link (and back/forward) work.
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash;
      setTab(
        h === "#about" ? "about" : h === "#soft-skills" ? "soft-skills" : "writing"
      );
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const select = (t: TabId) => {
    setTab(t);
    history.replaceState(null, "", HASH[t] || window.location.pathname);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const step = e.key === "ArrowRight" ? 1 : ORDER.length - 1;
    const next = ORDER[(ORDER.indexOf(tab) + step) % ORDER.length];
    select(next);
    refFor[next].current?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Homepage sections"
        onKeyDown={onKey}
        className="flex items-end gap-6 sm:gap-7 border-b border-line mb-8"
      >
        <Tab
          ref={writingRef}
          id="writing"
          active={tab === "writing"}
          label="Engineering"
          count={writing.length}
          onClick={() => select("writing")}
        />
        <Tab
          ref={softRef}
          id="soft-skills"
          active={tab === "soft-skills"}
          label="Soft skills"
          count={soft.length}
          onClick={() => select("soft-skills")}
        />
        <Tab
          ref={aboutRef}
          id="about"
          active={tab === "about"}
          label="About"
          onClick={() => select("about")}
        />
      </div>

      <div
        role="tabpanel"
        id="panel-writing"
        aria-labelledby="tab-writing"
        hidden={tab !== "writing"}
      >
        {tab === "writing" && <PostList posts={writing} />}
      </div>
      <div
        role="tabpanel"
        id="panel-soft-skills"
        aria-labelledby="tab-soft-skills"
        hidden={tab !== "soft-skills"}
      >
        {tab === "soft-skills" && <PostList posts={soft} />}
      </div>
      <div
        role="tabpanel"
        id="panel-about"
        aria-labelledby="tab-about"
        hidden={tab !== "about"}
      >
        {tab === "about" && <AboutPanel links={links} dispatches={dispatches} />}
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
  count?: number;
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
      className={`-mb-px flex items-baseline gap-2 border-b-2 pb-3 font-mono text-[12px] uppercase tracking-[0.1em] cursor-pointer transition-colors whitespace-nowrap ${
        active
          ? "border-accent text-ink"
          : "border-transparent text-ink-faint hover:text-ink-soft"
      }`}
    >
      {label}
      {count !== undefined && (
        <span
          className={`rounded-full border px-1.5 text-[10px] tabular-nums ${
            active ? "border-accent text-accent" : "border-line text-ink-faint"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent mb-3">
      {children}
    </h3>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "size-3.5 shrink-0",
  "aria-hidden": true,
} as const;

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function AboutPanel({
  links,
  dispatches,
}: {
  links: Link[];
  dispatches: Dispatch[];
}) {
  const research = links.filter((l) => l.kind === "research");
  const building = links.filter((l) => l.kind === "building");
  return (
    <div className="space-y-10">
      {/* Profile header — avatar, one-line bio, and work contact. */}
      <div className="flex items-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/avatar.jpg"
          alt="Harry Truong"
          width={112}
          height={112}
          className="size-28 shrink-0 rounded-full border border-line object-cover"
        />
        <div className="space-y-3">
          <p className="max-w-2xl text-[1.15rem] leading-relaxed text-ink">
            <em className="not-italic text-accent">
              AI engineer and published researcher
            </em>{" "}
            — Machine Learning, Deep Learning, Computer Vision, Digital Twins with
            Nvidia Omniverse.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[13px] text-ink-soft">
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <MailIcon />
              {SITE_EMAIL}
            </a>
            <a
              href={`tel:${SITE_PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <PhoneIcon />
              {SITE_PHONE}
            </a>
          </div>
        </div>
      </div>

      <section>
        <SectionLabel>Latest</SectionLabel>
        <DispatchList dispatches={dispatches} />
      </section>

      <LinkSection label="Research" links={research} />
      <LinkSection label="Building" links={building} />
    </div>
  );
}

function LinkSection({ label, links }: { label: string; links: Link[] }) {
  if (links.length === 0) return null;
  return (
    <section>
      <SectionLabel>{label}</SectionLabel>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block -mx-3 px-3 py-1.5 rounded-sm transition-colors hover:bg-accent-soft"
            >
              <span className="block text-[1.05rem] leading-snug text-ink transition-colors group-hover:text-accent">
                {l.label}
                <span
                  aria-hidden="true"
                  className="text-ink-faint transition-colors group-hover:text-accent"
                >
                  {" ↗"}
                </span>
              </span>
              <span className="block text-[0.95rem] leading-relaxed text-ink-soft">
                {l.note}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function DispatchList({ dispatches }: { dispatches: Dispatch[] }) {
  if (dispatches.length === 0) {
    return <p className="py-4 italic text-ink-soft">No news yet.</p>;
  }
  return (
    <ol className="space-y-3">
      {dispatches.map((d, i) => {
        const body = (
          <>
            <span className="block text-[1.05rem] leading-snug text-ink transition-colors group-hover:text-accent">
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
            <time
              dateTime={d.date}
              className="mt-0.5 block font-mono text-[12px] text-ink-faint tabular-nums"
            >
              {d.date}
            </time>
          </>
        );
        return (
          <li key={i}>
            {d.href ? (
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block -mx-3 px-3 py-1.5 rounded-sm transition-colors hover:bg-accent-soft"
              >
                {body}
              </a>
            ) : (
              <div className="py-1.5">{body}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
