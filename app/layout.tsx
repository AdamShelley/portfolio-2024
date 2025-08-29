import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { ViewTransitions } from "next-view-transitions";

import Header from "./components/header";
import Footer from "./components/footer";

import { ThemeProvider } from "@/components/theme-provider";
import BlurredTopBar from "@/components/blurred-top";
import Navbar from "./components/navbar";
import NoiseBackground from "./components/noise";

export const metadata: Metadata = {
  title: "Adam Shelley",
  description: "Adam Shelley's Web Development Portfolio",
  icons: {
    icon: "/favicon-196x196.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={GeistSans.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <BlurredTopBar />
            <NoiseBackground className="min-h-screen ">
              <div className="flex flex-col w-screen min-h-screen items-center pt-10 lg:pt-20 dark:text-white ">
                <Navbar />
                <Header />
                <div className="flex-1 mb-20">{children}</div>
                <Analytics />
                <Footer />
              </div>
            </NoiseBackground>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
