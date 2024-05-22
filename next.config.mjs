/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "random.imagecdn.app",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dd9qcr02td8tx.cloudfront.net",
        port: "",
      }
    ],
  },
};

export default nextConfig;
