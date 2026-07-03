import { getPost, postMetadata } from "@/lib/posts";
import ArtifactEmbed from "@/components/artifact-embed";
import PostJsonLd from "@/components/post-jsonld";
import { styles, html, script } from "./content";

const post = getPost("omniverse-usd-animation")!;

export const metadata = postMetadata("omniverse-usd-animation");

export default function OmniverseUsdAnimationPage() {
  return (
    <>
      <PostJsonLd post={post} />
      <ArtifactEmbed styles={styles} html={html} script={script} />
    </>
  );
}
