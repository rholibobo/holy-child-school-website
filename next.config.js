/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
