/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader: "akamai",
    path: "",
  },
  basePath: "/movieDeploy",    //nma github
  assetPrefix: "/movieDeploy",   //nma github
}

module.exports = nextConfig;
