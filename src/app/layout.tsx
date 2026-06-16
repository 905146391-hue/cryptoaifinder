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
  openGraph: {
    title: "Crypto AI Finder - Discover AI Tools for Crypto Trading",
    description: "460+ AI-powered crypto tools across 11 categories. Your trusted guide to the best AI tools in crypto.",
    url: "https://cryptoaifinder.com",
    siteName: "CryptoFinder",
    type: "website",
    images: [
      {
        url: "https://cryptoaifinder.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CryptoFinder - AI Crypto Tools Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto AI Finder",
    description: "460+ AI-powered crypto tools across 11 categories.",
    images: ["https://cryptoaifinder.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <meta property="og:image" content="https://cryptoaifinder.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://cryptoaifinder.com/og-image.png" />
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(e) {
                var link = e.target.closest('a[rel*=\"sponsored\"]');
                if (!link) return;
                var page = window.location.pathname;
                var name = link.textContent.trim().slice(0, 60) || link.href;
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'affiliate_click',
                  tool_name: name,
                  tool_url: link.href,
                  page: page
                });
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#e2e8f0]">{children}</body>
    </html>
  );
}
