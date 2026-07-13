import { getPost, postMetadata } from "@/lib/posts";
import ArtifactEmbed from "@/components/artifact-embed";
import PostJsonLd from "@/components/post-jsonld";
import { styles, html, script } from "./content";

const post = getPost("surface-normals")!;

export const metadata = postMetadata("surface-normals");

export default function SurfaceNormalsPage() {
  return (
    <>
      <PostJsonLd post={post} />
      <ArtifactEmbed styles={styles} html={html} script={script} />
    </>
  );
}
