/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [25, 50, 70, 80, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jnqdvizwgniwoqplvpfu.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**", // allow all google profile images
      },
    ],
  },
  //output: "export"
};

export default nextConfig;
