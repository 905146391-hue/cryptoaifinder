"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Coins, ExternalLink } from "lucide-react";

export default function StakingCalculatorPage() {
  const [amount, setAmount] = useState("");
  const [apy, setApy] = useState("");
  const [period, setPeriod] = useState("365");
  const [compound, setCompound] = useState("daily");

  const results = useMemo(() => {
    // Strip commas before parsing
    const principal = parseFloat(String(amount).replace(/,/g, ""));
    const apyRate = parseFloat(String(apy).replace(/,/g, ""));
    const days = parseFloat(String(period).replace(/,/g, ""));

    if (
      isNaN(principal) || isNaN(apyRate) || isNaN(days) ||
      principal <= 0 || apyRate <= 0 || days <= 0
    ) {
      return null;
    }

    const rate = apyRate / 100;
    const years = days / 365;
    let finalAmount: number;

    // Compound interest formula: A = P * (1 + r/n)^(n*t)
    // where n = periods per year, t = time in years
    switch (compound) {
      case "daily":
        finalAmount = principal * Math.pow(1 + rate / 365, 365 * years);
        break;
      case "weekly":
        finalAmount = principal * Math.pow(1 + rate / 52, 52 * years);
        break;
      case "monthly":
        finalAmount = principal * Math.pow(1 + rate / 12, 12 * years);
        break;
      case "yearly":
        finalAmount = principal * Math.pow(1 + rate, years);
        break;
      default:
        finalAmount = principal * (1 + rate * years); // simple interest fallback
    }

    const totalRewards = finalAmount - principal;

    // Effective APY: what rate would produce this with annual compounding
    const effectiveAPY = years > 0
      ? (Math.pow(finalAmount / principal, 1 / years) - 1) * 100
      : 0;

    return {
      principal,
      totalRewards,
      finalAmount,
      effectiveAPY,
    };
  }, [amount, apy, period, compound]);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="border-b border-[#1a1a2e]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-[#475569]">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Staking Calculator</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-[#475569] hover:text-cyan-400 transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
              <Coins size={20} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Staking Calculator
              </h1>
              <p className="text-sm text-[#475569] mt-1">
                Estimate staking rewards &amp; APY with compounding
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-5 space-y-4">
              <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-purple-500" />
                Staking Parameters
              </h2>

              <div>
                <label className="block text-xs text-[#475569] mb-1.5">
                  Staked Amount (USD)
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 1000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06060b] border border-[#1a1a2e] rounded-lg text-sm text-white placeholder-[#333] focus:outline-none focus:border-purple-500/50"
                />
              </div>

              <div>
                <label className="block text-xs text-[#475569] mb-1.5">
                  APY (%)
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 5.0"
                  value={apy}
                  onChange={(e) => setApy(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06060b] border border-[#1a1a2e] rounded-lg text-sm text-white placeholder-[#333] focus:outline-none focus:border-purple-500/50"
                />
              </div>

              <div>
                <label className="block text-xs text-[#475569] mb-1.5">
                  Staking Period (days)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    step="any"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="w-20 px-2.5 py-2 bg-[#06060b] border border-[#1a1a2e] rounded-lg text-sm text-white placeholder-[#333] focus:outline-none focus:border-purple-500/50"
                  />
                  {[
                    { label: "30d", val: "30" },
                    { label: "90d", val: "90" },
                    { label: "180d", val: "180" },
                    { label: "1y", val: "365" },
                  ].map((p) => (
                    <button
                      key={p.val}
                      type="button"
                      onClick={() => setPeriod(p.val)}
                      className={`shrink-0 px-1.5 py-1 text-[11px] rounded-md border transition-all ${
                        period === p.val
                          ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                          : "bg-[#06060b] text-[#475569] border-[#1a1a2e] hover:border-purple-500/30"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#475569] mb-1.5">
                  Compounding Frequency
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Daily", val: "daily" },
                    { label: "Weekly", val: "weekly" },
                    { label: "Monthly", val: "monthly" },
                    { label: "Yearly", val: "yearly" },
                  ].map((c) => (
                    <button
                      key={c.val}
                      type="button"
                      onClick={() => setCompound(c.val)}
                      className={`px-2 py-1.5 text-xs rounded-md border transition-all ${
                        compound === c.val
                          ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                          : "bg-[#06060b] text-[#475569] border-[#1a1a2e] hover:border-purple-500/30"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-5 h-full">
              <h2 className="text-sm font-semibold text-white flex items-center gap-2 mb-4">
                <span className="w-1 h-4 rounded-full bg-purple-500" />
                Results
              </h2>

              {results ? (
                <div className="space-y-4">
                  <div className="bg-[#06060b] rounded-lg p-4 border border-[#1a1a2e]">
                    <p className="text-xs text-[#475569] mb-1">
                      Estimated Rewards
                    </p>
                    <p className="text-2xl font-bold text-emerald-400">
                      +${results.totalRewards.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>

                  <div className="bg-[#06060b] rounded-lg p-4 border border-[#1a1a2e]">
                    <p className="text-xs text-[#475569] mb-1">
                      Final Balance
                    </p>
                    <p className="text-2xl font-bold text-white">
                      ${results.finalAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#06060b] rounded-lg p-3 border border-[#1a1a2e]">
                      <p className="text-xs text-[#475569] mb-1">Principal</p>
                      <p className="text-lg font-semibold text-white">
                        ${results.principal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>
                    <div className="bg-[#06060b] rounded-lg p-3 border border-[#1a1a2e]">
                      <p className="text-xs text-[#475569] mb-1">
                        Effective APY
                      </p>
                      <p className="text-lg font-semibold text-purple-400">
                        {results.effectiveAPY.toFixed(2)}%
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#06060b] rounded-lg p-3 border border-[#1a1a2e]">
                    <p className="text-xs text-[#475569] mb-1">
                      Reward Multiplier
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {(results.finalAmount / results.principal).toFixed(3)}x
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Coins size={40} className="text-[#1a1a2e] mb-3" />
                  <p className="text-sm text-[#475569]">
                    Enter staked amount, APY, and period to calculate rewards
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-white mb-3">
            Common APY References
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { asset: "ETH Staking", apy: "3-5%" },
              { asset: "SOL Staking", apy: "6-8%" },
              { asset: "USDC Lending", apy: "4-12%" },
              { asset: "DeFi Yield", apy: "5-50%" },
            ].map((ref) => (
              <div
                key={ref.asset}
                className="bg-[#06060b] rounded-lg p-3 border border-[#1a1a2e] text-center"
              >
                <p className="text-xs text-white font-medium">{ref.asset}</p>
                <p className="text-xs text-purple-400 mt-1">{ref.apy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA: Start staking on these platforms */}
        <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-white mb-3">Start staking &amp; earning on these exchanges</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a href="https://www.binance.com/en/register?ref=affiliate" target="_blank" rel="sponsored noopener" className="bg-[#0d0d14] border border-[#1a1a2e] hover:border-yellow-500/30 rounded-lg p-3 text-center transition-all group">
              <p className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">Binance Earn</p>
              <p className="text-xs text-[#475569] mt-1">Flexible &amp; locked staking</p>
              <span className="inline-flex items-center gap-1 mt-2 text-xs text-yellow-400">Start Earning <ExternalLink size={12} /></span>
            </a>
            <a href="https://www.okx.com/join/affiliate" target="_blank" rel="sponsored noopener" className="bg-[#0d0d14] border border-[#1a1a2e] hover:border-cyan-500/30 rounded-lg p-3 text-center transition-all group">
              <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">OKX Earn</p>
              <p className="text-xs text-[#475569] mt-1">On-chain staking &amp; DeFi</p>
              <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">Start Earning <ExternalLink size={12} /></span>
            </a>
            <a href="https://www.bitget.com" target="_blank" rel="sponsored noopener" className="bg-[#0d0d14] border border-[#1a1a2e] hover:border-teal-500/30 rounded-lg p-3 text-center transition-all group">
              <p className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">Bitget Earn</p>
              <p className="text-xs text-[#475569] mt-1">Code <span className="font-mono text-teal-400">ygnw</span> &middot; High yield</p>
              <span className="inline-flex items-center gap-1 mt-2 text-xs text-teal-400">Start Earning <ExternalLink size={12} /></span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
