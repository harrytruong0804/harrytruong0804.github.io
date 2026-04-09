import type { Metadata } from "next";
import { getPost } from "@/lib/posts";
import ArtifactEmbed from "@/components/artifact-embed";
import { styles, html, script } from "./content";

const post = getPost("prompt-caching-deep-dive")!;

export const metadata: Metadata = {
  title: `${post.title} | harrytruong`,
  description: post.description,
};

export default function PromptCachingDeepDivePage() {
  return <ArtifactEmbed styles={styles} html={html} script={script} />;
}
