import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators:false,
  reactStrictMode:false,
  images:{
    domains:['randomuser.me'],
  }
};

export default nextConfig;
