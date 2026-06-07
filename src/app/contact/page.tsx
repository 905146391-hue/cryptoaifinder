import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact CryptoFinder - Get in Touch",
  description: "Contact the CryptoFinder team. Submit a tool, report an issue, or partner with us.",
  openGraph: {
    title: "Contact CryptoFinder",
    description: "Get in touch with the CryptoFinder team.",
    url: "https://cryptoaifinder.com/contact",
    siteName: "CryptoFinder",
    type: "website",
  },
  alternates: {
    canonical: "https://cryptoaifinder.com/contact",
  },
};

export default function ContactPage() {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-[#94a3b8] text-lg mb-12">
          We&apos;d love to hear from you. Choose the option that best fits your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
              ➕
            </div>
            <h3 className="font-semibold text-white mb-2">Submit a Tool</h3>
            <p className="text-sm text-[#64748b] mb-4">
              Have an AI-powered crypto tool you&apos;d like us to list? Fill out the form and we&apos;ll review it within 48 hours.
            </p>
            <a
              href="mailto:cryptoaifinder@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              cryptoaifinder@gmail.com
            </a>
          </div>

          <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
              🐛
            </div>
            <h3 className="font-semibold text-white mb-2">Report an Issue</h3>
            <p className="text-sm text-[#64748b] mb-4">
              Found incorrect information, a broken link, or an outdated listing? Let us know and we&apos;ll fix it ASAP.
            </p>
            <a
              href="mailto:cryptoaifinder@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              cryptoaifinder@gmail.com
            </a>
          </div>

          <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
              🤝
            </div>
            <h3 className="font-semibold text-white mb-2">Partnerships</h3>
            <p className="text-sm text-[#64748b] mb-4">
              Interested in partnering with CryptoFinder? We&apos;re open to affiliate partnerships, sponsorships, and collaborations.
            </p>
            <a
              href="mailto:cryptoaifinder@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              cryptoaifinder@gmail.com
            </a>
          </div>

          <div className="bg-[#12121a] border border-[#1a1a2e] rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-4">
              💬
            </div>
            <h3 className="font-semibold text-white mb-2">General Inquiry</h3>
            <p className="text-sm text-[#64748b] mb-4">
              Questions, feedback, or anything else? We typically respond within 24 hours.
            </p>
            <a
              href="mailto:cryptoaifinder@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-400 hover:bg-yellow-500/20 hover:text-yellow-300 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              cryptoaifinder@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 p-8 bg-[#12121a] border border-[#1a1a2e] rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-4">Response Time</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-[#94a3b8]">Tool submissions</span>
              <span className="text-emerald-400">Within 48 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#94a3b8]">Bug reports</span>
              <span className="text-cyan-400">Within 24 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#94a3b8]">Partnership inquiries</span>
              <span className="text-purple-400">Within 48 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#94a3b8]">General inquiries</span>
              <span className="text-yellow-400">Within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
