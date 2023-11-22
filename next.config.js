/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false
      }
    ]
  },
  env: {
    MYSQL_HOST: '',
    MYSQL_PORT: '',
    MYSQL_USERNAME: '',
    MYSQL_PASSWORD: '',
    MYSQL_DATABASE: 'BookBorrow',
    MYSQL_SOCKETPATH: '',
    SECRET: ''
  }
}

module.exports = nextConfig
