import type { Metadata } from "next";
import { Geist } from "next/font/google";
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2FKDPM7FP9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2FKDPM7FP9');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#e2e8f0]">{children}</body>
    </html>
  );
}
