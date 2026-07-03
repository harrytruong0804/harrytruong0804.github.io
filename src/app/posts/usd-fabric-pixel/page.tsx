import { getPost, postMetadata } from "@/lib/posts";
import ArtifactEmbed from "@/components/artifact-embed";
import PostJsonLd from "@/components/post-jsonld";
import { styles, html, script } from "./content";

const post = getPost("usd-fabric-pixel")!;

export const metadata = postMetadata("usd-fabric-pixel");

export default function UsdFabricPixelPage() {
  return (
    <>
      <PostJsonLd post={post} />
      <ArtifactEmbed styles={styles} html={html} script={script} />
    </>
  );
}
