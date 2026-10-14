/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/admin", destination: "/admin/verification", permanent: false },
      { source: "/signup", destination: "/join", permanent: false },
      { source: "/listings", destination: "/search", permanent: false },
    ];
  },
};
export default nextConfig;
