export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "probability-vs-likelihood",
    title: "Probability vs. Likelihood: A Coin Flip Story",
    description: "Two questions that look identical but think in opposite directions — the difference between probability and likelihood explained with 10 coin flips.",
    date: "2026-03-20",
    tags: ["statistics", "math", "intuition"],
  },
  {
    slug: "first-principles-prompting",
    title: "First Principles Prompting: 15 Prompts That Rebuild Your Thinking",
    description: "A 5-phase framework for using first principles thinking with AI — 15 prompt templates that turn vague problems into structured solutions.",
    date: "2026-03-11",
    tags: ["ai", "prompting", "mental-models"],
  },
  {
    slug: "meeting-mindset",
    title: "How to Extract Maximum Value from Any Tech Talk",
    description: "The Socratic questioning method applied to engineering talks — a 3-phase system for active listening, better questions, and lasting retention.",
    date: "2026-03-06",
    tags: ["career", "soft-skills", "learning"],
  },
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
