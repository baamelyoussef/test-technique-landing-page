import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trilogy est publié en ESM non transpilé : on laisse Next.js le transpiler.
  transpilePackages: ["@trilogy-ds/react"],
};

export default nextConfig;
