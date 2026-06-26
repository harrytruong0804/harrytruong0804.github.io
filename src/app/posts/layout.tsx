import Link from "next/link";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        .post-nav-link { opacity: 0.75; transition: opacity 0.15s; }
        .post-nav-link:hover { opacity: 1; }
      `}</style>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(12,12,14,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #2a2a35",
          padding: "10px 20px",
        }}
      >
        <Link
          href="/"
          className="post-nav-link"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "10px",
            color: "#38bdf8",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          {"← harrytruong"}
        </Link>
      </header>
      {children}
    </>
  );
}
