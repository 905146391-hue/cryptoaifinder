import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - CryptoFinder",
  description: "CryptoFinder's privacy policy. Learn how we collect, use, and protect your data.",
  alternates: {
    canonical: "https://cryptoaifinder.com/privacy",
  },
};

export default function PrivacyPage() {
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
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-[#64748b] mb-12">Last updated: May 25, 2026</p>

        <div className="space-y-8 text-[#94a3b8] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p>CryptoFinder is a directory website. We collect minimal information:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
              <li><strong className="text-white">Usage Analytics:</strong> We use privacy-friendly analytics (no personal data collected) to understand how visitors use our site. This includes page views, referral sources, and device types.</li>
              <li><strong className="text-white">Contact Information:</strong> If you contact us via email, we collect only the information you voluntarily provide (name, email, message content).</li>
              <li><strong className="text-white">Cookies:</strong> We use essential cookies for site functionality and analytics cookies to improve our service. No advertising cookies are used.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>To respond to your inquiries and support requests</li>
              <li>To improve our website content and user experience</li>
              <li>To understand traffic patterns and popular content</li>
              <li>We never sell, rent, or share your personal information with third parties for marketing purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Affiliate Links & Third-Party Services</h2>
            <p>Our site contains affiliate links to third-party crypto tools and services. When you click on these links and make a purchase, we may earn a commission at no additional cost to you. These third-party services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party websites.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect any data we collect. Our website is served over HTTPS, and we regularly review our security practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
              <li>Request access to any personal data we hold about you</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of analytics tracking</li>
              <li>Object to the processing of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Children&apos;s Privacy</h2>
            <p>Our service is not directed to anyone under the age of 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Contact</h2>
            <p>If you have questions about this privacy policy, please contact us at <a href="mailto:cryptoaifinder@gmail.com" className="text-cyan-400 hover:text-cyan-300">cryptoaifinder@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
