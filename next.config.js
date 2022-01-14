const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'dummyimage.com',
      'ndesfgzqzbtptpoebdwc.supabase.in'
    ]
  }
});