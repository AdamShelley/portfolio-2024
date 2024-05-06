import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "./components/header";

// const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "../public/font.otf" });

export const metadata: Metadata = {
  title: "Adam Shelley",
  description: "Adam Shelley's Web Development Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <div className="absolute z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="flex flex-col w-screen min-h-screen items-center p-10 ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
