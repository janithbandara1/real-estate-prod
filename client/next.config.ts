import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000", // localhost
        "localhost:3001",
        "glorious-palm-tree-695pj947q57gcrpx7-3000.app.github.dev", // Codespaces
        "glorious-palm-tree-695pj947q57gcrpx7-3001.app.github.dev",
      ],
    },
  },
};

export default nextConfig;
