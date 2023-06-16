/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'jtreed\'s kasm registry',
    description: 'juh\'s kasm images',
    icon: 'https://cdn.jtreed.org/img/logo.svg',
    listUrl: 'https://github.com/josephreed2600/kasm-registry/',
    contactUrl: 'https://juh.gay/#contact',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
