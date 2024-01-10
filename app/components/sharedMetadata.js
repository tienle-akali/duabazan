/**
 * Shared metadata for SEO
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */

const siteName = "Dứa Bazan Store";
const siteDesc = "Chuyên cung cấp các sản phẩm nông sản vùng đất đỏ Bazan";
const keywords = [
  "Dứa Bazan",
  "Dứa",
  "Bazan",
  "duabazan",
  "nông sản",
  "Hạt dinh dưỡng",
  "Ngũ cốc",
  "Giỏ quà Tết",
  "Giỏ quà mây tre đan",
  "Túi quà giấy",
  "Bảo vệ môi trường",
  "Macca",
  "Hạt điều",
  "Điều rang muối",
  "Hạnh nhân",
  "Hạt dẻ cười",
  "Óc chó",
  "Ngũ cốc",
  "Hạt kơ nia",
];
const thumbnail = process.env.NEXT_PUBLIC_SITE_BANNER;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteIcon = process.env.NEXT_PUBLIC_SITE_FAVICON;
const authorUrl = siteUrl;

const openGraphImage = [
  {
    url: thumbnail,
    width: 800,
    height: 600,
  },
  {
    url: thumbnail,
    width: 1800,
    height: 1600,
    alt: "Dứa Bazan",
  },
];
const twitterImage = [thumbnail];

const sharedMetadata = {
  title: {
    template: `%s | ${siteName}`, // Output: <title>About | siteName</title>
    default: siteName, // Output: <title>Acme</title>
    // absolute: "...", // Output: <title>...</title>
  },
  description: siteDesc,
  // basic fields: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#basic-fields
  generator: "Dứa Bazan",
  applicationName: "Dứa Bazan",
  referrer: "origin-when-cross-origin",
  keywords: keywords,
  authors: [{ name: "TienDev" }, { name: "TienDev", url: authorUrl }],
  creator: "TienDev creator",
  publisher: "TienDev publisher",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // metadataBase: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/vi",
    languages: {
      "en-US": "/en",
      vi: "/vi",
    },
  },
  // openGraph: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
  openGraph: {
    title: siteName,
    description: siteDesc,
    url: siteUrl,
    siteName: siteName,
    images: openGraphImage,
    locale: "en-US",
    type: "website",
  },
  // robots: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#robots
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
  icons: {
    icon: siteIcon,
    shortcut: siteIcon,
    apple: siteIcon,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: siteIcon,
    },
  },

  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#manifest
  manifest: "/manifest.json",
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#twitter
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDesc,
    siteId: "1467726470533754880",
    creator: "@tiendev",
    creatorId: "1467726470533754880",
    images: twitterImage,
  },

  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#verification
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#applinks
  appLinks: {
    ios: {
      url: "https://nextjs.org/ios",
      app_store_id: "app_store_id",
    },
    android: {
      package: "com.example.android/package",
      app_name: "app_name_android",
    },
    web: {
      url: siteUrl,
      should_fallback: true,
    },
  },
};

export { sharedMetadata };
