// @ts-check

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:5000/api/:path*"
            : "/api/"
      }
    ];
  },
  productionBrowserSourceMaps: process.env.VERCEL_ENV !== `production`,
  swcMinify: true
};
