import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function SiteTopbar() {
  return (
    <div className="sticky top-0 z-40 bg-paper border-b border-line transition-colors">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 h-12 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-[12px] tracking-[0.14em] uppercase text-ink-soft hover:text-accent transition-colors"
        >
          <span className="text-accent">◀</span> harrytruong
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
