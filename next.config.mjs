/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  images: { unoptimized: true },

  // i18n: {
  //     locales: ['en-US', 'it', 'pt-BR'],
  //     defaultLocale: 'en-US',
  //   },

};

export default nextConfig;


