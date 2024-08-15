/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
    serverActions: true,
  },
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [

    ];
  },
};

export default nextConfig;
