import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gist.githubusercontent.com",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
