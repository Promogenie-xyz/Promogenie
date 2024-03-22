import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import IsPremiumContextProvider from "@/components/IsPremium";
import { CSPostHogProvider } from "@/components/Analytics";
import { Analytics } from '@vercel/analytics/react';
import ProModalProvider from "@/components/pro-modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "promogenie",
  description: "all in one marketing content platform for your business growth",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <CSPostHogProvider>
      <body className={inter.className}>
        <Providers>
          <IsPremiumContextProvider>
            <ProModalProvider/>
          {children}
          <Analytics />
          </IsPremiumContextProvider>
        </Providers>
      </body>
      </CSPostHogProvider>
    </html>
  );
}
