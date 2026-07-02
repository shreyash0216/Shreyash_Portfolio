import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages expects a basePath if the repo is not a username.github.io repo
  basePath: process.env.NODE_ENV === 'production' ? '/Shreyash_Portfolio' : '',
  // This is required for static export to work with images
  images: {
    unoptimized: true,
  },
  // Ensure that trailing slashes are handled correctly for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
