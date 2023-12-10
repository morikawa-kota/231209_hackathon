/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://lolup.lolbox.jp/:path*'
      }
    ]
  }
}

module.exports = nextConfig
