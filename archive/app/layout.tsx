import type {Metadata} from 'next'
import {Poppins, Righteous} from 'next/font/google'
import './globals.css'
import {NavBar} from "@/app/NavBar";
import classNames from "classnames";
import {Footer} from "@/app/Footer";
import React from "react";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import theme from "@/app/theme";
import {ThemeProvider} from "@mui/material";

const righteous = Righteous({
  subsets: ['latin'],
  weight: "400",
  display: 'swap',
  variable: '--font-righteous'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400",
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'Vandenberg Enterprise',
  description: 'Portfolio website for Vandenberg Enterprise.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(poppins.className, righteous.variable)}>
        <AppRouterCacheProvider>

          <ThemeProvider theme={theme}>
            <NavBar/>
            <main className="content-container">
              {children}
            </main>
            <Footer/>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
