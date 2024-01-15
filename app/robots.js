export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "/private/",
    },
    sitemap: "https://www.duabazan.store/sitemap.xml",
  };
}
