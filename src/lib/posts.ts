import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_AUTHOR, SITE_GITHUB } from "./site";

export type Category = "engineering" | "soft-skills";

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  /** Homepage tab. Omitted = "engineering" (the default Writing tab). */
  category?: Category;
}

export const posts: Post[] = [
  {
    slug: "pyramid-principle",
    title: "The Pyramid Principle: Answer First",
    description: "Your brain files ideas as a hierarchy, not a timeline — so lead with the conclusion and group the support beneath it. The consultant's structure for any message.",
    date: "2026-07-06",
    tags: ["communication", "soft-skills", "writing", "mental-models"],
    category: "soft-skills",
  },
  {
    slug: "adapter-vs-delegate",
    title: "Adapter vs Delegate",
    description: "Adapter is a pattern with an intent; delegation is the plain mechanism underneath it — which is why Hydra's HdSceneDelegate is really an Adapter with a Delegate's name.",
    date: "2026-07-02",
    tags: ["software-design", "python", "patterns"],
  },
  {
    slug: "sparse-override-tree-state",
    title: "Sparse Override — Store a Whole Tree's State with Almost Nothing",
    description:
      "Store a whole tree's visibility state by keeping only the nodes that disagree with their parent — the sparse-override model USD itself uses, in two functions and one map.",
    date: "2026-06-26",
    tags: ["data-structures", "algorithms", "usd", "interactive"],
  },
  {
    slug: "enu-from-first-principles",
    title: "ENU: the Tangent Frame Behind Every Georeference",
    description:
      "The matrix that turns a planet coordinate into a stage coordinate isn't a black box — it's an East–North–Up frame, derivable as the Jacobian of position on the ellipsoid.",
    date: "2026-06-16",
    tags: ["geospatial", "cesium", "geodesy"],
  },
  {
    slug: "cesium-georeference-first-principles",
    title: "Translate, Georeference, GlobeAnchor, Binding",
    description:
      "Cesium's geospatial jargon is four answers to four questions any scene graph must ask once it sits on a real planet: transforms, precision, georeference, globe anchors.",
    date: "2026-06-16",
    tags: ["geospatial", "cesium", "usd"],
  },
  {
    slug: "usd-composer-extension-from-scratch",
    title: "Writing a USD Composer Extension From Scratch",
    description:
      "Everything in Omniverse Kit is an extension. Here's the full contract — manifest, IExt lifecycle, omni.ui, and build wiring — that turns your tool into one.",
    date: "2026-06-10",
    tags: ["graphics", "usd", "omniverse", "kit"],
  },
  {
    slug: "rtpso-from-first-principles",
    title: "RtPso — Why You Wait 85 Seconds",
    description:
      "One startup log line explains why the GPU never runs your shader source: a ray-tracing PSO must compile IR to machine ISA on your box, and that's the 85 seconds you wait.",
    date: "2026-06-03",
    tags: ["graphics", "gpu", "ray-tracing", "omniverse"],
  },
  {
    slug: "ellipse-ellipsoid-spheroid",
    title: "Ellipse, Ellipsoid, Spheroid — and Why WGS84 Is an \"Ellipsoid\"",
    description:
      "Three near-identical names. Adding a dimension and counting independent semi-axes separates all three — and shows why GIS calls Earth a \"WGS84 ellipsoid.\"",
    date: "2026-06-02",
    tags: ["geospatial", "geodesy", "wgs84"],
  },
  {
    slug: "cesium-on-omniverse",
    title: "How Cesium Puts a 3D Scene on Planet Earth",
    description:
      "32-bit float precision falls apart at planetary scale — and that single problem is what georeferencing, ECEF, and globe anchors solve. (Geospatial 3D, Part 1 of 5.)",
    date: "2026-06-01",
    tags: ["graphics", "geospatial", "cesium", "omniverse"],
  },
  {
    slug: "3d-tiles-streaming",
    title: "3D Tiles: How to Stream a Planet That Won't Fit in RAM",
    description:
      "The whole Earth is petabytes; your GPU has gigabytes. A bounding-volume tree and screen-space error stream only the tiles you can see. (Geospatial 3D, Part 2 of 5.)",
    date: "2026-06-01",
    tags: ["graphics", "geospatial", "3d-tiles", "streaming"],
  },
  {
    slug: "google-photorealistic-3d-tiles",
    title: "Google Photorealistic 3D Tiles, Explained",
    description:
      "The real planet as a textured 3D mesh, served from one URL into any 3D Tiles renderer — mind the billing, attribution, and coverage catches. (Geospatial 3D, Part 3 of 5.)",
    date: "2026-06-01",
    tags: ["graphics", "geospatial", "3d-tiles", "google"],
  },
  {
    slug: "gltf-jpeg-of-3d",
    title: "glTF: The JPEG of 3D",
    description:
      "glTF is a delivery format: its buffer-view-accessor layout loads meshes straight onto the GPU — the payload inside every 3D tile. (Geospatial 3D, Part 4 of 5.)",
    date: "2026-06-01",
    tags: ["graphics", "gltf", "gpu", "3d-tiles"],
  },
  {
    slug: "usd-fabric-pixel",
    title: "USD → Fabric → Pixel: It's Just React (and Doom)",
    description:
      "Omniverse's render pipeline is the same pattern as React's virtual DOM: declarative source, flattened runtime mirror, pluggable backend. (Geospatial 3D, Part 5 of 5.)",
    date: "2026-06-01",
    tags: ["graphics", "usd", "omniverse", "rendering"],
  },
  {
    slug: "baked-loop-first-principles",
    title: "From Mesh to Crowd: How 1,583 Recorded Pedestrians Walk a USD Stage",
    description:
      "The \"baked loop\" trick animates an entire recorded MassMotion crowd in Omniverse Kit straight from meshes, skeletons, and skin weights — with no animation graph.",
    date: "2026-05-28",
    tags: ["graphics", "usd", "omniverse", "crowd-simulation"],
  },
  {
    slug: "omniverse-usd-animation",
    title: "Animation in Omniverse USD — A Breakdown",
    description: "How USD represents skinned characters and crowds — climbing from a plain 3D model up to SkelRoot, SkelAnimation, and AnimationGraph.",
    date: "2026-05-13",
    tags: ["graphics", "usd", "omniverse", "animation"],
  },
  {
    slug: "vertex-fragment-shader",
    title: "Vertex vs Fragment Shaders, Explained",
    description: "Every 3D scene answers two questions: where does each vertex go, and what color is each pixel? That split is the whole GPU pipeline, from geometry to shading.",
    date: "2026-05-13",
    tags: ["graphics", "gpu", "shaders"],
  },
  {
    slug: "kubernetes-probes",
    title: "The Three Probes: How Kubernetes Actually Decides Your Pod Is Alive",
    description: "Startup, readiness, and liveness look identical in YAML, but each fires at a different time for a different reason — confuse them and Kubernetes kills a healthy pod.",
    date: "2026-05-11",
    tags: ["kubernetes", "infrastructure", "production"],
  },
  {
    slug: "harness-engineering",
    title: "What is Harness Engineering for AI Agents?",
    description: "The model is the horse; the harness is the reins, the saddle, and the road. Meet the discipline of everything around the model that makes AI agents work in production.",
    date: "2026-04-09",
    tags: ["ai", "agents", "engineering", "architecture"],
  },
  {
    slug: "prompt-caching-deep-dive",
    title: "OpenAI Prompt Caching: From KV Tensors to Production Optimization",
    description: "How prompt caching actually works under the hood — from KV tensors to the request structure that maximizes cache hits and cuts your token bill.",
    date: "2026-04-09",
    tags: ["ai", "openai", "performance", "agents"],
  },
  {
    slug: "qkv-attention",
    title: "Q, K, V — The Heart of LLM Attention",
    description: "Every modern LLM runs on self-attention. Here's the intuition behind Query, Key, and Value: what each vector is for and how they combine into one attention score.",
    date: "2026-03-29",
    tags: ["ai", "transformers", "deep-learning"],
  },
  {
    slug: "probability-vs-likelihood",
    title: "Probability vs. Likelihood: A Coin Flip Story",
    description: "Two questions that look identical but run in opposite directions: probability fixes the coin and asks about outcomes; likelihood fixes outcomes and asks about the coin.",
    date: "2026-03-20",
    tags: ["statistics", "math", "intuition"],
  },
  {
    slug: "first-principles-prompting",
    title: "First Principles Prompting: 15 Prompts That Rebuild Your Thinking",
    description: "A five-phase framework of 15 prompt templates that break any vague problem down to its fundamentals and rebuild it into a structured solution with AI.",
    date: "2026-03-11",
    tags: ["ai", "prompting", "mental-models"],
  },
  {
    slug: "meeting-mindset",
    title: "How to Extract Maximum Value from Any Tech Talk",
    description: "Apply Socratic questioning to any engineering talk: a three-phase system for active listening, sharper questions, and retention that outlasts the session.",
    date: "2026-03-06",
    tags: ["career", "soft-skills", "learning"],
    category: "soft-skills",
  },
  {
    slug: "tool-search-sequence",
    title: "Tool Search Sequence Diagram",
    description: "How Claude Code's tool search turns a user request into an executed tool call, traced step by step from intent to result.",
    date: "2026-03-05",
    tags: ["claude", "mcp", "sequence-diagram"],
  },
  {
    slug: "programmatic-tool-calling-sequence",
    title: "Programmatic Tool Calling Sequence",
    description: "How Claude's API runs programmatic tool calls, tracing the messages passed between components from the model's request to the tool's response.",
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

/** Full per-post Metadata: title, description, canonical, OpenGraph, Twitter. */
export function postMetadata(slug: string): Metadata {
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/posts/${post.slug}`;
  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: SITE_AUTHOR, url: SITE_GITHUB }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [SITE_AUTHOR],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}
