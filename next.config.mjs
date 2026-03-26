/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hosts without the Node image optimizer (static/CDN, misrouted /_next/image) must use direct asset URLs.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
