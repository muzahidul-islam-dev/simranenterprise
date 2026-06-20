import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined in environment variables.");
}

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/customer/:path*",
        destination: `${apiUrl}/api/customer/:path*`,
      },
      {
        source: "/api/admin/:path*",
        destination: `${apiUrl}/api/admin/:path*`,
      },
    ];
  },
};

export default nextConfig;
