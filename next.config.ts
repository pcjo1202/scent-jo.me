import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "velog.velcdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
};

export default nextConfig;
