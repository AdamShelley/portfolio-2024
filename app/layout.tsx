import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";

import Header from "./components/header";
import Footer from "./components/footer";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "../public/font.otf" });

export const metadata: Metadata = {
  title: "Adam Shelley",
  description: "Adam Shelley's Web Development Portfolio",
  icons: {
    icon: "/favicon-196x196.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="dark:hidden block fixed top-0 z-[-2] h-screen w-screen min-h-[100%] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <div
            className="hidden dark:block fixed top-0 z-[-2] h-full min-h-[100%] w-screen bg-neutral-950 
          bg-[radial-gradient(ellipse_90%_80%_at_50%_-15%,rgba(120,119,198,0.2),rgba(255,255,255,0.05))]"
          ></div>
          <div className="flex flex-col w-screen min-h-screen items-center pt-20 dark:text-white ">
            <Header />

            <div className="flex-1 mb-20">{children}</div>
            <Analytics />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
