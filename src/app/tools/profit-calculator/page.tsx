"use client";

import { useState, useMemo } from "react";
import { tools } from "@/lib/data";
import Link from "next/link";
import {
  Calculator,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Percent,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  Info,
} from "lucide-react";

const affiliateExchanges = [
  { name: "OKX", id: "okx" },
  { name: "Binance", id: "binance" },
  { name: "Bybit", id: "bybit" },
  { name: "Kraken", id: "kraken" },
  { name: "Coinbase", id: "coinbase" },
  { name: "Bitget", id: "bitget" },
];

export default function ProfitCalculator() {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [investment, setInvestment] = useState("");
  const [coinName, setCoinName] = useState("");

  const result = useMemo(() => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const invest = parseFloat(investment);

    if (!buy || !sell || !invest || buy <= 0 || invest <= 0) return null;

    const coinsBought = invest / buy;
    const totalValue = coinsBought * sell;
    const profit = totalValue - invest;
    const roi = ((sell - buy) / buy) * 100;

    return {
      coinsBought,
      totalValue,
      profit,
      roi,
      isProfit: profit > 0,
      isLoss: profit < 0,
    };
  }, [buyPrice, sellPrice, investment]);

  const exchangeTools = useMemo(() => {
    return affiliateExchanges
      .map((ex) => {
        const tool = tools.find((t) => t.id === ex.id);
        return tool || null;
      })
      .filter(Boolean);
  }, []);

  function formatCurrency(val: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);
  }

  function reset() {
    setBuyPrice("");
    setSellPrice("");
    setInvestment("");
    setCoinName("");
  }

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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#06b6d4]/10 border border-[#06b6d4]/20 rounded-full text-[#22d3ee] text-xs font-medium mb-4">
            <Calculator size={14} />
            Free Tool
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Crypto Profit Calculator
          </h1>
          <p className="text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            Calculate your potential profit or loss for any cryptocurrency trade.
            Enter your entry price, exit price, and investment amount — we&apos;ll do the math.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-2xl p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            {/* Coin Name */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Coin / Token Name <span className="text-[#475569]">(optional)</span>
              </label>
              <input
                type="text"
                value={coinName}
                onChange={(e) => setCoinName(e.target.value)}
                placeholder="e.g. Bitcoin, ETH, SOL"
                className="w-full px-4 py-3 bg-[#06060b] border border-[#1a1a2e] rounded-xl text-white placeholder-[#475569] focus:outline-none focus:border-[#06b6d4]/50 focus:ring-1 focus:ring-[#06b6d4]/20 transition-all"
              />
            </div>

            {/* Buy Price */}
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Buy Price (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569]">$</span>
                <input
                  type="number"
                  value={buyPrice}
                  onChange={(e) => setBuyPrice(e.target.value)}
                  placeholder="0.00"
                  min="0"
                  step="any"
                  className="w-full pl-8 pr-4 py-3 bg-[#06060b] border border-[#1a1a2e] rounded-xl text-white placeholder-[#475569] focus:outline-none focus:border-[#10b981]/50 focus:ring-1 focus:ring-[#10b981]/20 transition-all"
                />
              </div>
            </div>

            {/* Sell Price */}
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Sell Price (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569]">$</span>
                <input
                  type="number"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(e.target.value)}
                  placeholder="0.00"
                  min="0"
                  step="any"
                  className="w-full pl-8 pr-4 py-3 bg-[#06060b] border border-[#1a1a2e] rounded-xl text-white placeholder-[#475569] focus:outline-none focus:border-[#ef4444]/50 focus:ring-1 focus:ring-[#ef4444]/20 transition-all"
                />
              </div>
            </div>

            {/* Investment */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Investment Amount (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569]">$</span>
                <input
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(e.target.value)}
                  placeholder="0.00"
                  min="0"
                  step="any"
                  className="w-full pl-8 pr-4 py-3 bg-[#06060b] border border-[#1a1a2e] rounded-xl text-white placeholder-[#475569] focus:outline-none focus:border-[#06b6d4]/50 focus:ring-1 focus:ring-[#06b6d4]/20 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Reset Button */}
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
              {/* Profit/Loss Banner */}
              <div
                className={`p-5 rounded-xl border ${
                  result.isProfit
                    ? "bg-[#10b981]/5 border-[#10b981]/20"
                    : result.isLoss
                    ? "bg-[#ef4444]/5 border-[#ef4444]/20"
                    : "bg-[#1e293b]/5 border-[#1a1a2e]"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  {result.isProfit ? (
                    <TrendingUp size={24} className="text-[#10b981]" />
                  ) : result.isLoss ? (
                    <TrendingDown size={24} className="text-[#ef4444]" />
                  ) : (
                    <Info size={24} className="text-[#64748b]" />
                  )}
                  <span className="text-lg font-semibold text-white">
                    {result.isProfit ? "Profit!" : result.isLoss ? "Loss" : "Break Even"}
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold">
                  <span
                    className={
                      result.isProfit
                        ? "text-[#10b981]"
                        : result.isLoss
                        ? "text-[#ef4444]"
                        : "text-[#64748b]"
                    }
                  >
                    {result.isProfit ? "+" : result.isLoss ? "-" : ""}
                    {formatCurrency(Math.abs(result.profit))}
                  </span>
                </p>
              </div>

              {/* Detail Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-[#475569] text-xs mb-1">
                    <DollarSign size={12} />
                    ROI
                  </div>
                  <p
                    className={`text-lg font-bold ${
                      result.roi > 0
                        ? "text-[#10b981]"
                        : result.roi < 0
                        ? "text-[#ef4444]"
                        : "text-[#64748b]"
                    }`}
                  >
                    {result.roi > 0 ? "+" : ""}
                    {result.roi.toFixed(2)}%
                  </p>
                </div>
                <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-[#475569] text-xs mb-1">
                    <DollarSign size={12} />
                    Investment
                  </div>
                  <p className="text-lg font-bold text-white">
                    {formatCurrency(parseFloat(investment))}
                  </p>
                </div>
                <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-[#475569] text-xs mb-1">
                    <DollarSign size={12} />
                    Final Value
                  </div>
                  <p className="text-lg font-bold text-white">
                    {formatCurrency(result.totalValue)}
                  </p>
                </div>
                <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-[#475569] text-xs mb-1">
                    <Percent size={12} />
                    Coins Bought
                  </div>
                  <p className="text-lg font-bold text-white">
                    {result.coinsBought.toFixed(6)}
                  </p>
                </div>
              </div>

              {/* Coin Summary */}
              {coinName && (
                <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4 text-sm text-[#94a3b8]">
                  <span className="text-white font-medium">{coinName}</span> bought at{" "}
                  <span className="text-white">{formatCurrency(parseFloat(buyPrice))}</span> and
                  sold at{" "}
                  <span className="text-white">{formatCurrency(parseFloat(sellPrice))}</span> —
                  with a{" "}
                  <span
                    className={
                      result.roi > 0 ? "text-[#10b981] font-medium" : "text-[#ef4444] font-medium"
                    }
                  >
                    {result.roi > 0 ? "+" : ""}
                    {result.roi.toFixed(2)}%
                  </span>{" "}
                  return on {formatCurrency(parseFloat(investment))} invested.
                </div>
              )}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 mb-4">
                <Calculator size={24} className="text-[#22d3ee]" />
              </div>
              <p className="text-[#64748b] text-sm">
                Enter your trade details above to calculate profit or loss
              </p>
            </div>
          )}
        </div>

        {/* CTA: Trade on These Exchanges */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-[#10b981]" />
            Ready to Trade?
          </h2>
          <p className="text-sm text-[#94a3b8] mb-5">
            Execute your trades on these trusted exchanges. Each link supports CryptoFinder —
            you get the same experience, we earn a small commission at no extra cost to you.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {exchangeTools.map((tool) => {
              if (!tool) return null;
              const affUrl = (tool as any).affiliateUrl || tool.url;
              return (
                <a
                  key={tool.id}
                  href={affUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-[#0d0d14] border border-[#1a1a2e] rounded-xl hover:border-[#06b6d4]/30 hover:bg-[#13131e] transition-all"
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${new URL(tool.url).hostname}&sz=32`}
                    alt=""
                    className="w-8 h-8 rounded-md object-contain bg-[#06060b]"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white group-hover:text-[#22d3ee] transition-colors truncate">
                      {tool.name}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-[#f59e0b]">
                      {"★".repeat(Math.floor(tool.rating))}
                      <span className="text-[#475569] ml-0.5">{tool.rating}</span>
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-[#475569] group-hover:text-[#22d3ee] transition-colors shrink-0"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">
            How to Use the Crypto Profit Calculator
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                1. Enter your buy price
              </h3>
              <p className="text-sm text-[#94a3b8]">
                The price per coin when you entered the trade. This is your cost basis.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                2. Enter your sell (or target) price
              </h3>
              <p className="text-sm text-[#94a3b8]">
                The price per coin at which you plan to sell — or the current market price if
                you&apos;re checking an open position.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                3. Enter your investment amount
              </h3>
              <p className="text-sm text-[#94a3b8]">
                The total USD amount you invested (or plan to invest). The calculator figures out
                how many coins that buys and shows your P&amp;L.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                4. Review your results
              </h3>
              <p className="text-sm text-[#94a3b8]">
                See your profit/loss, ROI percentage, final portfolio value, and coin quantity —
                all updated in real time as you type.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-sm text-[#64748b] mb-3">
            Looking for more crypto tools?
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#06b6d4]/10 border border-[#06b6d4]/20 rounded-xl text-[#22d3ee] text-sm font-medium hover:bg-[#06b6d4]/20 transition-all"
          >
            Browse All Tools
            <ArrowRight size={14} />
          </Link>
        </div>
      </main>
    </div>
  );
}
