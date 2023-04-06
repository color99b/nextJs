/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    // Specify your Express server URL or other configurations here
    // For example:
    expressServerUrl: "http://localhost:5000",
  },
  publicRuntimeConfig: {
    // Specify your public configurations here
  },
};

module.exports = nextConfig;
