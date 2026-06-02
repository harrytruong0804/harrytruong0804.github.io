import type { Metadata } from "next";
import { getPost } from "@/lib/posts";
import ArtifactEmbed from "@/components/artifact-embed";
import { styles, html, script } from "./content";

const post = getPost("cesium-on-omniverse")!;

export const metadata: Metadata = {
  title: `${post.title} | harrytruong`,
  description: post.description,
};

export default function CesiumOnOmniversePage() {
  return <ArtifactEmbed styles={styles} html={html} script={script} />;
}
