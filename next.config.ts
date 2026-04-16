import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "file.garden",
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply long-lived cache headers to the media proxy route so that
        // CDNs (Vercel Edge, Cloudflare, etc.) also cache the assets.
        source: "/api/media",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
