import type { Metadata } from "next";

// Next's built-in not-found page inherits the root layout's `index, follow` and
// homepage canonical, so a 404 ships two contradictory robots tags. Override both.
export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <div className="grain min-h-screen">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <header className="pt-12 sm:pt-16 pb-10">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-soft mb-12 sm:mb-16">
            <span className="text-accent">Harry Truong</span> · Engineer
          </p>

          <h1 className="font-display font-semibold text-[2.6rem] sm:text-6xl leading-[1.04] tracking-tight">
            <em className="text-accent font-medium">Not found.</em>
          </h1>

          <p className="mt-6 text-ink-soft">
            That page doesn&rsquo;t exist &mdash; it may have moved, or never
            have been here at all.
          </p>

          <p className="mt-8 font-mono text-[12px]">
            <a href="/" className="text-accent hover:underline">
              &larr; back to the notes
            </a>
          </p>
        </header>
      </div>
    </div>
  );
}
