import type { Metadata } from "next";
import { Righteous, Poppins } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/app/components/layout/NavBar";
import { Footer } from "@/app/components/layout/Footer";
import { ThemeScript } from "@/app/components/ui/ThemeScript";

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
    default: "Raymond Vandenberg",
    template: "%s | Raymond Vandenberg",
  },
  description:
    "Ray Vandenberg: full stack engineer, team lead, and startup enthusiast building scalable, delightful web and mobile applications.",
  metadataBase: new URL("https://venterprise.io"),
  openGraph: {
    title: "Raymond Vandenberg",
    description:
      "Full stack engineer building scalable, delightful web and mobile applications.",
    type: "website",
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
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
