import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow next/image to optimise images served from the local media proxy.
    // The proxy uses ?key=... query strings, so localPatterns must explicitly
    // permit that pathname + search combination.
    localPatterns: [
      {
        pathname: "/api/media",
        search: "**",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Keep file.garden as a fallback in case any component references it directly.
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
