/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog/:path*",
        destination: "https://baahi.xomoy.com/:path*act", // Proxy to Backend
      },
    ];
  },
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
