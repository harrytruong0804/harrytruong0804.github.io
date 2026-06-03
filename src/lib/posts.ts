export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "rtpso-from-first-principles",
    title: "RtPso from First Principles — and Why You Wait 85 Seconds",
    description:
      "Decoding one Omniverse startup log line from the ground up: why the GPU never runs your shader source, why IR→ISA compilation is forced onto the target machine, what a ray tracing PSO bundles, how disk caching turns cold launches warm, and why an \"async\" compile still blocks the main thread.",
    date: "2026-06-03",
    tags: ["graphics", "gpu", "ray-tracing", "omniverse"],
  },
  {
    slug: "ellipse-ellipsoid-spheroid",
    title: "Ellipse, Ellipsoid, Spheroid — và vì sao WGS84 là \"ellipsoid\"?",
    description:
      "Ba cái tên gần giống nhau, rất dễ lẫn. Từ first principles: thêm một chiều và đếm số bán trục độc lập là phân biệt được cả ba — và hiểu vì sao GIS gọi Trái Đất là \"WGS84 ellipsoid\" chứ không phải \"spheroid\".",
    date: "2026-06-02",
    tags: ["geospatial", "geodesy", "wgs84", "first-principles"],
  },
  {
    slug: "cesium-on-omniverse",
    title: "How Cesium Puts a 3D Scene on Planet Earth",
    description:
      "GPUs render in 32-bit floats that fall apart at planetary scale. Here's the one precision problem that explains georeferencing, ECEF coordinates, and globe anchors — and how Cesium solves it. (Geospatial 3D, Part 1 of 5.)",
    date: "2026-06-01",
    tags: ["graphics", "geospatial", "cesium", "omniverse"],
  },
  {
    slug: "3d-tiles-streaming",
    title: "3D Tiles: How to Stream a Planet That Won't Fit in RAM",
    description:
      "The whole Earth is petabytes; your GPU has gigabytes. A first-principles look at the bounding-volume tree, geometric error, and screen-space LOD that make planetary streaming work. (Geospatial 3D, Part 2 of 5.)",
    date: "2026-06-01",
    tags: ["graphics", "geospatial", "3d-tiles", "streaming"],
  },
  {
    slug: "google-photorealistic-3d-tiles",
    title: "Google Photorealistic 3D Tiles, Explained",
    description:
      "The real planet as a textured 3D mesh, served from a single URL. What it is, how it plugs into any 3D Tiles renderer, and the billing, attribution, and coverage catches. (Geospatial 3D, Part 3 of 5.)",
    date: "2026-06-01",
    tags: ["graphics", "geospatial", "3d-tiles", "google"],
  },
  {
    slug: "gltf-jpeg-of-3d",
    title: "glTF: The JPEG of 3D",
    description:
      "Authoring formats vs delivery formats, the buffer-view-accessor trick that loads meshes straight onto the GPU, PBR materials, and why glTF is the payload inside every 3D tile. (Geospatial 3D, Part 4 of 5.)",
    date: "2026-06-01",
    tags: ["graphics", "gltf", "gpu", "3d-tiles"],
  },
  {
    slug: "usd-fabric-pixel",
    title: "USD → Fabric → Pixel: It's Just React (and Doom)",
    description:
      "Omniverse's render pipeline is the same pattern as React's virtual DOM and Doom's BSP tree: a declarative source, a flattened runtime mirror, and a pluggable paint backend. One pattern, three names. (Geospatial 3D, Part 5 of 5.)",
    date: "2026-06-01",
    tags: ["graphics", "usd", "omniverse", "rendering"],
  },
  {
    slug: "baked-loop-first-principles",
    title: "From Mesh to Crowd: How 1,583 Recorded Pedestrians Walk a USD Stage",
    description:
      "A first-principles tour through meshes, skeletons, skin weights, and textures — then the \"baked loop\" trick that animates an entire recorded MassMotion crowd in Omniverse Kit without an animation graph.",
    date: "2026-05-28",
    tags: ["graphics", "usd", "omniverse", "crowd-simulation"],
  },
  {
    slug: "omniverse-usd-animation",
    title: "Animation in Omniverse USD — A Breakdown",
    description: "From \"what is a 3D model?\" to SkelRoot, SkelAnimation, and AnimationGraph — a ground-up walk through how USD represents skinned characters and crowds.",
    date: "2026-05-13",
    tags: ["graphics", "usd", "omniverse", "animation"],
  },
  {
    slug: "vertex-fragment-shader",
    title: "Vertex vs Fragment Shaders, Explained",
    description: "Every 3D scene answers two questions: where does this thing go, and what does it look like? A visual walk through the GPU pipeline, from vertices to pixels.",
    date: "2026-05-13",
    tags: ["graphics", "gpu", "shaders"],
  },
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
