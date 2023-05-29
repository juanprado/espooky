// @ts-check

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? `/espooky/` : "",
  basePath: isProd ? `/espooky` : "",
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig