import { ReactLenis } from "lenis/react";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import localFont from "next/font/local";

import LocaleProvider from "@/local-provider/Main";
import ScrollToTop from "@/components/scroll-to-top/Main";

import "./globals.css";

const calibri = localFont({
  src: "../../public/fonts/calibri-bold.ttf",
  variable: "--font-calibri-bold",
  weight: "100 900",
});

const calibriRegular = localFont({
  src: "../../public/fonts/calibri-regular.ttf",
  variable: "--font-calibri-regular",
  weight: "100 900",
});

export const metadata = {
  title: "Aviónica Saltamontes",
  description: "Tu vuelo a tu medida",
};

export default function RootLayout({ children }) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
  console.log("RECAPTCHA KEY =", recaptchaKey);

  return (
    <html lang="en">
      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:site_name" content="Aviónica Saltamontes" />
      <meta property="og:title" content="Aviónica Saltamontes" />
      <meta property="og:description" content="Tu vuelo a tu medida" />

      <meta property="og:image" content="/images/img_share.webp" />
      <meta name="msapplication-TileImage" content="/images/img_share.webp" />

      <meta property="og:type" content="website" />
      <meta property="og:image:type" content="image/webp" />

      <meta property="og:image:width" content="1683" />
      <meta property="og:image:height" content="1038" />

      {/* <meta property="og:url" content="" /> */}

      {/* Icon */}
      <link rel="icon" href="/ic_favicon.svg" type="image/svg+xml" sizes="any" />

      {/* preload image */}
      <link rel="preload" href="/images/ic_mx.svg" as="image" />
      <link rel="preload" href="/images/ic_us.svg" as="image" />

      <body className={`antialiased ${calibriRegular.variable} ${calibri.variable}`}>
        <ReactLenis root>
          <LocaleProvider>
            <ScrollToTop />
            {children}
          </LocaleProvider>
        </ReactLenis>

        <Toaster position="top-right" />
      </body>

      {googleAnalyticsId && <GoogleAnalytics gaId={googleAnalyticsId} />}
      {recaptchaKey && <Script src={`https://www.google.com/recaptcha/api.js?render=${recaptchaKey}`} strategy="afterInteractive" />}
    </html>
  );
}
