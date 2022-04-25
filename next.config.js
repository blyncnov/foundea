/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['nextfood.vercel.app'],
  }
}

module.exports = nextConfig
  