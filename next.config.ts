import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export mode
  basePath: "/eventadd", // Set the repo name as base path
  assetPrefix: "/eventadd/", // Ensures assets load correctly
  trailingSlash: true, // Helps avoid GitHub Pages routing issues
};

export default nextConfig;
