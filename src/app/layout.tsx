import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "white",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "black",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-geist-sans",
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <SiteHeader />
            <main className="mx-auto max-w-screen-2xl flex-1 p-4">
              {children}
            </main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
