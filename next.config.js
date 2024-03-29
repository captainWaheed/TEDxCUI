/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  swcMinify: true,
  // experimental: {
  // 	appDir: true
  // },
  images: {
    domains: ["cdn.sanity.io"]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};

module.exports = nextConfig;
