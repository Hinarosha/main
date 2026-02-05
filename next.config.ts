import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// Skip TypeScript type-check during build (saves memory on low-RAM devices like Raspberry Pi)
const skipTypeCheck = process.env.SKIP_TYPECHECK === "1";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(skipTypeCheck && {
    typescript: { ignoreBuildErrors: true },
  }),
};

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
export default withNextIntl(nextConfig);
