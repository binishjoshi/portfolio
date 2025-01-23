import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";

import { cn } from "@/lib/utils";

import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Binish Joshi",
  description: "Product Engineer and Fullstack Developer",
  openGraph: {
    title: "Binish Joshi",
    description: "Product Engineer and Fullstack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-geist-sans",
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <SiteHeader />
            <main className="flex-1 px-6 md:px-20 lg:px-40">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
