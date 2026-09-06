import type { Metadata } from "next";
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
    default: `${siteConfig.name} — ${siteConfig.roleLong}`,
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
    title: `${siteConfig.name} — ${siteConfig.roleLong}`,
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
    title: `${siteConfig.name} — ${siteConfig.roleLong}`,
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
        <JsonLd data={graph(personSchema(), websiteSchema())} />
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
