import type { Metadata } from "next";
import { getPost } from "@/lib/posts";
import ArtifactEmbed from "@/components/artifact-embed";
import { styles, html, script } from "./content";

const post = getPost("google-photorealistic-3d-tiles")!;

export const metadata: Metadata = {
  title: `${post.title} | harrytruong`,
  description: post.description,
};

export default function GooglePhotorealistic3dTilesPage() {
  return <ArtifactEmbed styles={styles} html={html} script={script} />;
}
