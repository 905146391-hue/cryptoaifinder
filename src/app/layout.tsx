import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crypto AI Finder - Discover AI Tools for Crypto Trading",
  description: "The most comprehensive directory of AI-powered tools for cryptocurrency trading, DeFi, on-chain analytics, and portfolio management.",
  keywords: "AI crypto tools, crypto trading bots, DeFi AI, blockchain analytics, cryptocurrency tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2FKDPM7FP9" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2FKDPM7FP9');
        `}
      </Script>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#e2e8f0]">{children}</body>
    </html>
  );
}
