 /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  env: {
    SITE_NAME: 'Verxtal',
    SITE_URL: 'https://verxtal.com',
    SITE_DESCRIPTION: 'A modern blog platform for sharing insights and stories',
  },
}

module.exports = nextConfig