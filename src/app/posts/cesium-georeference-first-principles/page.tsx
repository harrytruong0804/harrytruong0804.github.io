import type { Metadata } from "next";
import { getPost } from "@/lib/posts";
import ArtifactEmbed from "@/components/artifact-embed";
import { styles, html, script } from "./content";

const post = getPost("cesium-georeference-first-principles")!;

export const metadata: Metadata = {
  title: `${post.title} | harrytruong`,
  description: post.description,
};

export default function CesiumGeoreferenceFirstPrinciplesPage() {
  return <ArtifactEmbed styles={styles} html={html} script={script} />;
}
