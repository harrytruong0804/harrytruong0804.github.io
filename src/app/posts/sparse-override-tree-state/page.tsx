import { getPost, postMetadata } from "@/lib/posts";
import ArtifactEmbed from "@/components/artifact-embed";
import PostJsonLd from "@/components/post-jsonld";
import { styles, html, script } from "./content";

const post = getPost("sparse-override-tree-state")!;

export const metadata = postMetadata("sparse-override-tree-state");

export default function SparseOverrideTreeStatePage() {
  return (
    <>
      <PostJsonLd post={post} />
      <ArtifactEmbed styles={styles} html={html} script={script} />
    </>
  );
}
