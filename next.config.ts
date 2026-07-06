import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (serves files only, no Node runtime).
  output: "export",
  // GH Pages resolves /posts/foo/ -> /posts/foo/index.html without rewrites.
  trailingSlash: true,
  // No next/image optimizer available on a static host.
  images: { unoptimized: true },
};

export default nextConfig;
