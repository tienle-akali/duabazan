import { Inter } from "next/font/google";
import MainThemeProvider from "./components/ThemeProvider";
import { MainFooter } from "./components/footer";
import { sharedMetadata } from "./components/sharedMetadata";
import { TopAppbar } from "./components/appbar";
import { GoogleTagManager } from "@next/third-parties/google";
// import './globals.css'

const inter = Inter({ subsets: ["latin"] });

const themeColor = process.env.themeColor;

export function generateViewport({ params }) {
  return {
    colorScheme: "light", // light | dark
    // themeColor: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#themecolor
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: themeColor },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#viewport
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
  };
}

// const metadata = {
//   title: "Dứa Bazan Store",
//   desc: "Chuyên cung cấp các sản phẩm nông sản vùng đất đỏ Bazan",
//   image: "/images/card/1200/business card before.png",
// };

export async function generateMetadata({ params: { lang } }, parent) {
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    ...sharedMetadata,
    // title: {
    //   template: metadata.title,
    //   default: metadata.title,
    //   absolute: metadata.title,
    // },
    // description: metadata.desc,
    // openGraph: {
    //   title: metadata.title,
    //   description: metadata.desc,
    //   images: [...previousImages, metadata.image],
    // },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainThemeProvider>
          <TopAppbar />
          {children}
          <MainFooter />
        </MainThemeProvider>
      </body>
      <GoogleTagManager gtmId="GTM-NN5WJ58V" />
    </html>
  );
}
