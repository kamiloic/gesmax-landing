/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com', 'www.datocms-assets.com'],
  },
  i18n: {
    // providing the locales supported by your application
    locales: ["en", "fr"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "fr",
  },
}

module.exports = nextConfig
