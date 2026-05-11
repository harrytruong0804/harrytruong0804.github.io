export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "kubernetes-probes",
    title: "The Three Probes: How Kubernetes Actually Decides Your Pod Is Alive",
    description: "Startup, readiness, and liveness look almost identical in YAML — but each runs at a different time, asks a different question, and triggers a different reaction. A visual deep dive into the probe lifecycle.",
    date: "2026-05-11",
    tags: ["kubernetes", "infrastructure", "production"],
  },
  {
    slug: "harness-engineering",
    title: "What is Harness Engineering for AI Agents?",
    description: "The model is the horse. The harness is the reins, the saddle, and the road. A visual deep dive into the new discipline that makes AI agents work in production.",
    date: "2026-04-09",
    tags: ["ai", "agents", "engineering", "architecture"],
  },
  {
    slug: "prompt-caching-deep-dive",
    title: "OpenAI Prompt Caching: From KV Tensors to Production Optimization",
    description: "A comprehensive guide to how prompt caching works under the hood, how to measure it, and a tactical playbook for maximizing cache hits — including Agents SDK integration.",
    date: "2026-04-09",
    tags: ["ai", "openai", "performance", "agents"],
  },
  {
    slug: "qkv-attention",
    title: "Q, K, V — The Heart of LLM Attention, Explained Visually",
    description: "Every modern LLM runs on self-attention. Here's the intuition behind Query, Key, and Value — with interactive diagrams, from scratch.",
    date: "2026-03-29",
    tags: ["ai", "transformers", "deep-learning"],
  },
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
