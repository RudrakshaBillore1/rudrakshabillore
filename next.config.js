/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const withOffline = require("next-offline");



module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }


const withPWA  = require("next-pwa");
module.exports = withPWA({
 //...before
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  //...after
});



    return config
  }
}


