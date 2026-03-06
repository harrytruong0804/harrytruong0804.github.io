export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "tool-search-sequence",
    title: "Tool Search Sequence Diagram",
    description: "A visual sequence diagram showing how Claude Code's tool search mechanism works - from user request to tool execution.",
    date: "2026-03-05",
    tags: ["claude", "mcp", "sequence-diagram"],
  },
  {
    slug: "programmatic-tool-calling-sequence",
    title: "Programmatic Tool Calling Sequence",
    description: "Detailed sequence diagram of the programmatic tool calling flow in Claude's API, showing message passing between components.",
    date: "2026-03-05",
    tags: ["claude", "api", "sequence-diagram"],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
