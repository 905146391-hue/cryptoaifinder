"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react";

export default function ProfitCalculatorPage() {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [investment, setInvestment] = useState("");

  const results = useMemo(() => {
    // Parse all inputs as floats (handle both . and ，decimal separators)
    // Strip commas (thousands separators) before parsing
    const buy = parseFloat(String(buyPrice).replace(/,/g, ""));
    const sell = parseFloat(String(sellPrice).replace(/,/g, ""));
    const qty = parseFloat(String(quantity).replace(/,/g, ""));
    const invest = parseFloat(String(investment).replace(/,/g, ""));

    const r: {
      profitLoss?: number;
      roi?: number;
      coinQty?: number;
      totalCost?: number;
      totalRevenue?: number;
      mode: string;
    } = { mode: "" };

    // Quantity mode: user provides coin count
    if (!isNaN(buy) && buy > 0 && !isNaN(sell) && sell > 0 && !isNaN(qty) && qty > 0) {
      const totalCost = buy * qty;
      const totalRevenue = sell * qty;
      r.mode = "quantity";
      r.totalCost = totalCost;
      r.totalRevenue = totalRevenue;
      r.profitLoss = totalRevenue - totalCost;
      r.roi = ((sell - buy) / buy) * 100;
      r.coinQty = qty;
    }
    // Investment mode: user provides USD amount
    else if (!isNaN(buy) && buy > 0 && !isNaN(sell) && sell > 0 && !isNaN(invest) && invest > 0) {
      const coinQty = invest / buy;
      const totalRevenue = sell * coinQty;
      r.mode = "investment";
      r.totalCost = invest;
      r.totalRevenue = totalRevenue;
      r.profitLoss = totalRevenue - invest;
      r.roi = ((sell - buy) / buy) * 100;
      r.coinQty = coinQty;
    }

    return r;
  }, [buyPrice, sellPrice, quantity, investment]);

  const formatNum = (n?: number, decimals = 2): string => {
    if (n === undefined || isNaN(n)) return "-";
    if (Math.abs(n) >= 1000) {
      return n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    }
    return n.toFixed(decimals);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="border-b border-[#1a1a2e]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-[#475569]">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Profit Calculator</span>
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
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
              <Calculator size={20} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Profit Calculator
              </h1>
              <p className="text-sm text-[#475569] mt-1">
                Calculate P&amp;L, ROI &amp; coin quantity from buy/sell prices
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-5 space-y-4">
              <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-teal-500" />
                Trade Details
              </h2>

              <div>
                <label className="block text-xs text-[#475569] mb-1.5">
                  Buy Price (USD)
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 0.50"
                  value={buyPrice}
                  onChange={(e) => setBuyPrice(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06060b] border border-[#1a1a2e] rounded-lg text-sm text-white placeholder-[#333] focus:outline-none focus:border-teal-500/50"
                />
              </div>

              <div>
                <label className="block text-xs text-[#475569] mb-1.5">
                  Sell Price (USD)
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 0.75"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06060b] border border-[#1a1a2e] rounded-lg text-sm text-white placeholder-[#333] focus:outline-none focus:border-teal-500/50"
                />
              </div>

              <div className="border-t border-[#1a1a2e]/50 pt-4">
                <p className="text-xs text-[#475569] mb-3">
                  Fill ONE of the following:
                </p>
                <div>
                  <label className="block text-xs text-[#475569] mb-1.5">
                    Coin Quantity
                  </label>
                  <input
                    type="number"
                    step="any"
                    placeholder="e.g. 1000"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                      if (e.target.value) setInvestment("");
                    }}
                    className="w-full px-3 py-2 bg-[#06060b] border border-[#1a1a2e] rounded-lg text-sm text-white placeholder-[#333] focus:outline-none focus:border-teal-500/50"
                  />
                </div>

                <div className="flex items-center gap-3 my-3">
                  <div className="flex-1 border-t border-[#1a1a2e]/50" />
                  <span className="text-xs text-[#333]">OR</span>
                  <div className="flex-1 border-t border-[#1a1a2e]/50" />
                </div>

                <div>
                  <label className="block text-xs text-[#475569] mb-1.5">
                    Investment (USD)
                  </label>
                  <input
                    type="number"
                    step="any"
                    placeholder="e.g. 500"
                    value={investment}
                    onChange={(e) => {
                      setInvestment(e.target.value);
                      if (e.target.value) setQuantity("");
                    }}
                    className="w-full px-3 py-2 bg-[#06060b] border border-[#1a1a2e] rounded-lg text-sm text-white placeholder-[#333] focus:outline-none focus:border-teal-500/50"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-5 h-full">
              <h2 className="text-sm font-semibold text-white flex items-center gap-2 mb-4">
                <span className="w-1 h-4 rounded-full bg-teal-500" />
                Results
              </h2>

              {results.mode ? (
                <div className="space-y-4">
                  <div className="bg-[#06060b] rounded-lg p-4 border border-[#1a1a2e]">
                    <p className="text-xs text-[#475569] mb-1">Profit / Loss</p>
                    <p
                      className={`text-2xl font-bold ${
                        (results.profitLoss ?? 0) >= 0
                          ? "text-emerald-400"
                          : "text-red-400"
                      }`}
                    >
                      {(results.profitLoss ?? 0) >= 0 ? "+" : ""}$
                      {formatNum(results.profitLoss)}
                    </p>
                  </div>

                  <div className="bg-[#06060b] rounded-lg p-4 border border-[#1a1a2e]">
                    <p className="text-xs text-[#475569] mb-1">ROI</p>
                    <p
                      className={`text-2xl font-bold ${
                        (results.roi ?? 0) >= 0
                          ? "text-emerald-400"
                          : "text-red-400"
                      }`}
                    >
                      {(results.roi ?? 0) >= 0 ? "+" : ""}
                      {formatNum(results.roi)}%
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#06060b] rounded-lg p-3 border border-[#1a1a2e]">
                      <p className="text-xs text-[#475569] mb-1">Coin Qty</p>
                      <p className="text-lg font-semibold text-white">
                        {results.coinQty?.toLocaleString("en-US", {
                          maximumFractionDigits: 4,
                        })}
                      </p>
                    </div>
                    <div className="bg-[#06060b] rounded-lg p-3 border border-[#1a1a2e]">
                      <p className="text-xs text-[#475569] mb-1">Total Cost</p>
                      <p className="text-lg font-semibold text-white">
                        ${formatNum(results.totalCost)}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#06060b] rounded-lg p-3 border border-[#1a1a2e]">
                    <p className="text-xs text-[#475569] mb-1">Total Revenue</p>
                    <p className="text-lg font-semibold text-white">
                      ${formatNum(results.totalRevenue)}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Calculator
                    size={40}
                    className="text-[#1a1a2e] mb-3"
                  />
                  <p className="text-sm text-[#475569]">
                    Enter buy price, sell price, and either quantity or
                    investment to see results
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#0d0d14] border border-[#1a1a2e] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-white mb-3">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#06060b] rounded-lg p-3 border border-[#1a1a2e]">
              <p className="text-xs text-teal-400 font-semibold mb-1">1. Enter Prices</p>
              <p className="text-xs text-[#475569]">
                Input your buy price and sell price in USD
              </p>
            </div>
            <div className="bg-[#06060b] rounded-lg p-3 border border-[#1a1a2e]">
              <p className="text-xs text-teal-400 font-semibold mb-1">2. Choose Method</p>
              <p className="text-xs text-[#475569]">
                Enter coin quantity OR total investment amount
              </p>
            </div>
            <div className="bg-[#06060b] rounded-lg p-3 border border-[#1a1a2e]">
              <p className="text-xs text-teal-400 font-semibold mb-1">3. Get Results</p>
              <p className="text-xs text-[#475569]">
                Instantly see P&amp;L, ROI%, coin quantity, cost &amp; revenue
              </p>
            </div>
          </div>
        </div>

        {/* CTA: Tools for better trading */}
        <div className="mt-8 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-white mb-3">Maximize your profits with these tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a href="https://tradingview.com/partner-program" target="_blank" rel="sponsored noopener" className="bg-[#0d0d14] border border-[#1a1a2e] hover:border-blue-500/30 rounded-lg p-3 text-center transition-all group">
              <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">TradingView</p>
              <p className="text-xs text-[#475569] mt-1">Professional charts &amp; indicators</p>
              <span className="inline-flex items-center gap-1 mt-2 text-xs text-blue-400">Try Free <ExternalLink size={12} /></span>
            </a>
            <a href="https://coinglass.com/account/affiliate" target="_blank" rel="sponsored noopener" className="bg-[#0d0d14] border border-[#1a1a2e] hover:border-purple-500/30 rounded-lg p-3 text-center transition-all group">
              <p className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">CoinGlass</p>
              <p className="text-xs text-[#475569] mt-1">Liquidation data &amp; market depth</p>
              <span className="inline-flex items-center gap-1 mt-2 text-xs text-purple-400">Try Free <ExternalLink size={12} /></span>
            </a>
            <a href="https://www.binance.com/en/register?ref=affiliate" target="_blank" rel="sponsored noopener" className="bg-[#0d0d14] border border-[#1a1a2e] hover:border-yellow-500/30 rounded-lg p-3 text-center transition-all group">
              <p className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">Binance</p>
              <p className="text-xs text-[#475569] mt-1">0.1% fees &middot; Spot &amp; Futures</p>
              <span className="inline-flex items-center gap-1 mt-2 text-xs text-yellow-400">Trade Now <ExternalLink size={12} /></span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
