"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  TrendingUp,
  Coins,
  Calendar,
  RotateCcw,
  ArrowRight,
  ExternalLink,
  Info,
  Percent,
  Clock,
} from "lucide-react";

const COMPOUND_OPTIONS = [
  { label: "Daily", value: 365 },
  { label: "Weekly", value: 52 },
  { label: "Monthly", value: 12 },
  { label: "Yearly", value: 1 },
  { label: "No Compounding", value: 0 },
];

const stakingTools = [
  { name: "Lido", id: "lido", apy: "3.5%" },
  { name: "Compound", id: "compound", apy: "Variable" },
  { name: "Curve", id: "curve", apy: "Variable" },
  { name: "Aave", id: "aave", apy: "Variable" },
];

export default function StakingCalculator() {
  const [amount, setAmount] = useState("");
  const [apy, setApy] = useState("");
  const [period, setPeriod] = useState("12");       // months
  const [compoundFreq, setCompoundFreq] = useState(365); // daily default
  const [customPeriodUnit, setCustomPeriodUnit] = useState<"days" | "months" | "years">("months");

  const periodsPerYear = compoundFreq === 0 ? 1 : compoundFreq;

  const result = useMemo(() => {
    const P = parseFloat(amount);
    const r = parseFloat(apy) / 100;
    const tRaw = parseFloat(period);

    if (!P || !r || !tRaw || P <= 0 || r <= 0 || tRaw <= 0) return null;

    // Convert period to years
    let tYears: number;
    if (customPeriodUnit === "days") tYears = tRaw / 365;
    else if (customPeriodUnit === "months") tYears = tRaw / 12;
    else tYears = tRaw;

    let total: number;
    let rewards: number;

    if (compoundFreq === 0) {
      // Simple interest
      rewards = P * r * tYears;
      total = P + rewards;
    } else {
      // Compound interest: A = P(1 + r/n)^(n*t)
      total = P * Math.pow(1 + r / periodsPerYear, periodsPerYear * tYears);
      rewards = total - P;
    }

    const dailyReward = rewards / (tYears * 365);
    const monthlyReward = rewards / (tYears * 12);
    const apyDisplay = (Math.pow(1 + r / periodsPerYear, periodsPerYear) - 1) * 100;

    return {
      total,
      rewards,
      dailyReward,
      monthlyReward,
      apyDisplay,
      tYears,
    };
  }, [amount, apy, period, compoundFreq, customPeriodUnit, periodsPerYear]);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);

  const reset = () => {
    setAmount("");
    setApy("");
    setPeriod("12");
    setCompoundFreq(365);
    setCustomPeriodUnit("months");
  };

  const presetTools = stakingTools;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="border-b border-[#1a1a2e] bg-[#06060b]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-lg font-bold gradient-text">CryptoFinder</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-[#64748b] hover:text-white transition-colors flex items-center gap-1"
          >
            <ArrowRight size={14} className="rotate-180" />
            Back to Directory
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full text-[#a78bfa] text-xs font-medium mb-4">
            <Calculator size={14} />
            Free Tool
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Staking Rewards Calculator
          </h1>
          <p className="text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            Estimate your staking rewards with daily, weekly, or monthly compounding.
            Supports any APY% and staking duration.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-2xl p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            {/* Stake Amount */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Stake Amount (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569]">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="1,000"
                  min="0"
                  step="any"
                  className="w-full pl-8 pr-4 py-3 bg-[#06060b] border border-[#1a1a2e] rounded-xl text-white placeholder-[#475569] focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/20 transition-all"
                />
              </div>
            </div>

            {/* APY % */}
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                APY (%)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={apy}
                  onChange={(e) => setApy(e.target.value)}
                  placeholder="5.0"
                  min="0"
                  max="100"
                  step="any"
                  className="w-full pl-4 pr-8 py-3 bg-[#06060b] border border-[#1a1a2e] rounded-xl text-white placeholder-[#475569] focus:outline-none focus:border-[#10b981]/50 focus:ring-1 focus:ring-[#10b981]/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#475569]">%</span>
              </div>
            </div>

            {/* Staking Period */}
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Staking Period
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  placeholder="12"
                  min="1"
                  className="flex-1 pl-4 pr-4 py-3 bg-[#06060b] border border-[#1a1a2e] rounded-xl text-white placeholder-[#475569] focus:outline-none focus:border-[#06b6d4]/50 focus:ring-1 focus:ring-[#06b6d4]/20 transition-all"
                />
                <select
                  value={customPeriodUnit}
                  onChange={(e) => setCustomPeriodUnit(e.target.value as any)}
                  className="px-3 py-3 bg-[#06060b] border border-[#1a1a2e] rounded-xl text-white text-sm focus:outline-none focus:border-[#06b6d4]/50"
                >
                  <option value="days">Days</option>
                  <option value="months">Months</option>
                  <option value="years">Years</option>
                </select>
              </div>
            </div>

            {/* Compounding Frequency */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Compounding Frequency
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {COMPOUND_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCompoundFreq(opt.value)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                      compoundFreq === opt.value
                        ? "bg-[#8b5cf6]/20 border-[#8b5cf6]/40 text-[#a78bfa]"
                        : "bg-[#06060b] border-[#1a1a2e] text-[#64748b] hover:text-white hover:border-[#475569]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reset */}
          <div className="flex justify-end mb-6">
            <button
              onClick={reset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#64748b] hover:text-white bg-[#06060b] border border-[#1a1a2e] rounded-lg hover:border-[#475569] transition-all"
            >
              <RotateCcw size={12} />
              Reset
            </button>
          </div>

          {/* Results */}
          {result ? (
            <div className="space-y-4">
              {/* Total Banner */}
              <div className="p-5 rounded-xl bg-[#8b5cf6]/5 border border-[#8b5cf6]/20">
                <p className="text-sm text-[#a78bfa] mb-1">Total after staking</p>
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {formatCurrency(result.total)}
                </p>
                <p className="text-sm text-[#94a3b8] mt-1">
                  {formatCurrency(parseFloat(amount) || 0)} staked →{" "}
                  <span className="text-[#10b981] font-medium">
                    +{formatCurrency(result.rewards)} rewards
                  </span>
                </p>
              </div>

              {/* Detail Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-[#475569] text-xs mb-1">
                    <Coins size={12} />
                    Total Rewards
                  </div>
                  <p className="text-lg font-bold text-[#10b981]">
                    {formatCurrency(result.rewards)}
                  </p>
                </div>
                <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-[#475569] text-xs mb-1">
                    <Percent size={12} />
                    Effective APY
                  </div>
                  <p className="text-lg font-bold text-white">
                    {result.apyDisplay.toFixed(2)}%
                  </p>
                </div>
                <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-[#475569] text-xs mb-1">
                    <Clock size={12} />
                    Daily Reward
                  </div>
                  <p className="text-lg font-bold text-white">
                    {formatCurrency(result.dailyReward)}
                  </p>
                </div>
                <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-[#475569] text-xs mb-1">
                    <Calendar size={12} />
                    Monthly Reward
                  </div>
                  <p className="text-lg font-bold text-white">
                    {formatCurrency(result.monthlyReward)}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 mb-4">
                <Calculator size={24} className="text-[#a78bfa]" />
              </div>
              <p className="text-[#64748b] text-sm">
                Enter your staking details above to estimate rewards
              </p>
            </div>
          )}
        </div>

        {/* Preset Tools CTA */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-[#10b981]" />
            Start Staking on These Platforms
          </h2>
          <p className="text-sm text-[#94a3b8] mb-5">
            Ready to stake for real? These platforms offer competitive APY and secure staking infrastructure.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {presetTools.map((t) => {
              const tool = stakingTools.find((s) => s.id === t.id);
              return (
                <a
                  key={t.id}
                  href={`/tools/${t.id}`}
                  className="group flex flex-col items-center gap-2 p-4 bg-[#0d0d14] border border-[#1a1a2e] rounded-xl hover:border-[#8b5cf6]/30 hover:bg-[#13131e] transition-all text-center"
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${t.id}.com&sz=32`}
                    alt=""
                    className="w-8 h-8 rounded-md object-contain bg-[#06060b]"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-white group-hover:text-[#a78bfa] transition-colors">
                    {t.name}
                  </span>
                  <span className="text-[10px] text-[#475569]">
                    APY: {t.apy}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">
            Staking Calculator FAQ
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                What is APY?
              </h3>
              <p className="text-sm text-[#94a3b8]">
                APY (Annual Percentage Yield) includes compounding — it&apos;s the real annual return
                you earn from staking, accounting for rewards being reinvested.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                How does compounding frequency affect my rewards?
              </h3>
              <p className="text-sm text-[#94a3b8]">
                More frequent compounding = slightly higher returns. Daily compounding yields the most;
                no compounding pays simple interest only on your principal.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                Is staking risk-free?
              </h3>
              <p className="text-sm text-[#94a3b8]">
                No. Staking involves slashing risk (penalties for validator misbehavior), smart contract
                risk, and the opportunity cost of locked funds. This calculator shows rewards only —
                not risks.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                Can I change the compounding frequency?
              </h3>
              <p className="text-sm text-[#94a3b8]">
                Yes — use the buttons above. &quot;No Compounding&quot; assumes simple interest (rewards
                not reinvested). In practice, most liquid staking tokens (stETH, rETH) compound
                continuously.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-sm text-[#64748b] mb-3">
            Looking for more DeFi tools?
          </p>
          <Link
            href="/categories/defi"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-xl text-[#a78bfa] text-sm font-medium hover:bg-[#8b5cf6]/20 transition-all"
          >
            Browse DeFi Tools
            <ArrowRight size={14} />
          </Link>
        </div>
      </main>
    </div>
  );
}
