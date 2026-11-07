import type { Metadata } from "next";
import Script from "next/script";
import { Righteous, Poppins } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/app/components/layout/NavBar";
import { Footer } from "@/app/components/layout/Footer";
import { ThemeScript } from "@/app/components/ui/ThemeScript";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { siteConfig, expertise } from "@/lib/site";
import { graph, personSchema, websiteSchema } from "@/lib/structured-data";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-righteous",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.roleLong}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: expertise,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.roleLong}`,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "profile",
    firstName: "Raymond",
    lastName: "Vandenberg",
    username: "rayventerprise",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.roleLong}`,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${righteous.variable} ${poppins.variable}`}>
        <ThemeScript />
        {process.env.NODE_ENV === "production" &&
          process.env.NEXT_PUBLIC_CLARITY_ID && (
            <Script id="microsoft-clarity" strategy="afterInteractive">
              {`(function(){if(navigator.webdriver||!navigator.languages||!navigator.languages.length||/bot|crawl|spider|slurp|headless|lighthouse|preview|monitor|facebookexternalhit|python|curl|wget/i.test(navigator.userAgent))return;(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");})();`}
            </Script>
          )}
        <JsonLd data={graph(personSchema(), websiteSchema())} />
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
