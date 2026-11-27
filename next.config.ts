import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Ghidul de procese business a fost comasat în articolul central pe 27 nov. 2026
        source: "/blog/automatizare-procese-business-ghid-2026",
        destination: "/blog/automatizare-procese-afaceri-romania",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
