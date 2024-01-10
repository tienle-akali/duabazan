import { Inter } from "next/font/google";
import MainThemeProvider from "./api/components/ThemeProvider";
import { MainFooter } from "./api/components/footer";
// import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainThemeProvider>
          {children}
          <MainFooter />
        </MainThemeProvider>
      </body>
    </html>
  );
}
