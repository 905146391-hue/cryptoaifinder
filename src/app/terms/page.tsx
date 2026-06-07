import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - CryptoFinder",
  description: "Terms of service for CryptoFinder, the AI-powered crypto tools directory.",
  alternates: {
    canonical: "https://cryptoaifinder.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="border-b border-[#1a1a2e] bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
            CryptoFinder
          </Link>
          <div className="flex gap-4 text-sm text-[#64748b]">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-[#64748b] mb-12">Last updated: May 25, 2026</p>

        <div className="space-y-8 text-[#94a3b8] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using CryptoFinder (cryptoaifinder.com), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p>CryptoFinder is an informational directory website that lists and reviews AI-powered cryptocurrency tools. We provide curated information, ratings, and links to third-party tools and services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4 text-sm">
              <strong className="text-yellow-400">Important:</strong> The information provided on CryptoFinder is for informational purposes only. We are not financial advisors, and nothing on this site should be construed as financial advice. Always do your own research (DYOR) before using any crypto tool or making investment decisions.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Affiliate Disclosure</h2>
            <p>CryptoFinder contains affiliate links. If you click on an affiliate link and make a purchase or sign up for a service, we may earn a commission at no additional cost to you. This helps us maintain and improve the directory. Our editorial content is not influenced by affiliate relationships.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Third-Party Services</h2>
            <p>Our website links to third-party tools and services. We are not responsible for the content, functionality, privacy practices, or terms of service of these third-party websites. Your use of third-party services is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Intellectual Property</h2>
            <p>All content on CryptoFinder, including text, design, logos, and code, is the property of CryptoFinder and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Scrape, crawl, or use automated tools to extract our data without permission</li>
              <li>Reproduce or redistribute our content without attribution</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
            <p>CryptoFinder is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We shall not be liable for any damages arising from your use of the website or any third-party tools listed herein.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Contact</h2>
            <p>For questions about these Terms of Service, please contact us at <a href="mailto:cryptoaifinder@gmail.com" className="text-cyan-400 hover:text-cyan-300">cryptoaifinder@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
