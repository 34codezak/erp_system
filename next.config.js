/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "undraw.co",
        pathname: "/illustrations/**"
      }
    ]
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
