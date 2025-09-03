import "swiper/css/bundle";
import "../../public/css/navbar.css";
import "../../public/css/boxicons.min.css";
import "./globals.css";

import type { Metadata } from "next";
import { Figtree, Outfit } from "next/font/google";
import Footer from "./_components/Footer";
import NavbarStyleTwo from "./_components/NavbarStyleTwo";
import BackToTop from "./_components/BackToTop";
import AosAnimation from "./_components/AosAnimation";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  adjustFontFallback: false,
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  adjustFontFallback:false,
  display: "swap",
});

export const metadata: Metadata = {
  title: "EnableNow Technology Solutions",
  description: "EnableNow empowers you to navigate and thrive in today's intricate business landscape with unmatched expertise and innovation.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${outfit.variable}`}>
      <body>
        <NavbarStyleTwo />
        {children}
        <BackToTop />
        <AosAnimation />
        <Footer />
      </body>
    </html>
  );
}
