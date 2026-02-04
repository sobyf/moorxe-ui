import type { NextConfig } from "next";


const nextConfig = {
  allowedDevOrigins: ['192.168.1.101', '*.192.168.1.101'],

} satisfies NextConfig; 

export default nextConfig;