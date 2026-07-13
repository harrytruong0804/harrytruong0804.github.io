import { getPost, postMetadata } from "@/lib/posts";
import ArtifactEmbed from "@/components/artifact-embed";
import PostJsonLd from "@/components/post-jsonld";
import { styles, html, script } from "./content";

const post = getPost("rasterization-vs-ray-tracing")!;

export const metadata = postMetadata("rasterization-vs-ray-tracing");

export default function RasterizationVsRayTracingPage() {
  return (
    <>
      <PostJsonLd post={post} />
      <ArtifactEmbed styles={styles} html={html} script={script} />
    </>
  );
}
