import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a minimal, self-contained build for Docker (.next/standalone)
  output: "standalone",
};

export default nextConfig;
