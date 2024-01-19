/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateIndexSitemap: false,
  // generateRobotsTxt: true, // (optional)
  // sitemapSize: 7000,
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     'https://online-card.vercel.app/server-sitemap.xml', // <==== Add here
  //   ],
  // },
  // ...other options
};
