/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/ndyadev.github.io' : '',
  output: 'export',
  distDir: 'out',
  images:{
    unoptimized: true,
  },
}

module.exports = nextConfig;
