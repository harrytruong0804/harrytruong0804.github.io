import type { Metadata } from "next";
import { getPost } from "@/lib/posts";
import ArtifactEmbed from "@/components/artifact-embed";
import { styles, html, script } from "./content";

const post = getPost("programmatic-tool-calling-sequence")!;

export const metadata: Metadata = {
  title: `${post.title} | harrytruong`,
  description: post.description,
};

export default function ProgrammaticToolCallingSequencePage() {
  return <ArtifactEmbed styles={styles} html={html} script={script} />;
}
