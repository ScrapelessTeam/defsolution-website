import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.nstbrowser.io',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'nstbrowser.oss-accelerate.aliyuncs.com',
        port: '',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src/styles')],
  },
};

export default withNextIntl(nextConfig);
