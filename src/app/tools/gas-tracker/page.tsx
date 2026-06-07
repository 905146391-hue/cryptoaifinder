"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Gauge,
  Zap,
  Clock,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  RefreshCw,
} from "lucide-react";

const ETHERSCAN_KEY = "BFZXRCXKIMY4JZGTFKQ1J4NV9TIITTXPT5";

interface GasData {
  SafeGasPrice: string;
  ProposeGasPrice: string;
  FastGasPrice: string;
}

interface ChainGasInfo {
  chain: string;
  chainId: number;
  name: string;
  icon: string;
  color: string;
  data: GasData | null;
  loading: boolean;
  error: string | null;
  explorerUrl: string;
}

const CHAINS = [
  {
    chain: "eth",
    chainId: 1,
    name: "Ethereum",
    icon: "⟠",
    color: "#627eea",
    explorerUrl: "https://etherscan.io/gastracker",
  },
  {
    chain: "bsc",
    chainId: 56,
    name: "BSC",
    icon: "◆",
    color: "#f0b90b",
    explorerUrl: "https://bscscan.com/gastracker",
  },
  {
    chain: "polygon",
    chainId: 137,
    name: "Polygon",
    icon: "⬡",
    color: "#8247e5",
    explorerUrl: "https://polygonscan.com/gastracker",
  },
  {
    chain: "arbitrum",
    chainId: 42161,
    name: "Arbitrum",
    icon: "🔵",
    color: "#28a0f0",
    explorerUrl: "https://arbiscan.io/gastracker",
  },
];

export default function GasTracker() {
  const [chainsData, setChainsData] = useState<ChainGasInfo[]>(
    CHAINS.map((c) => ({
      ...c,
      data: null,
      loading: true,
      error: null,
    }))
  );

  const fetchGas = useCallback(async (chain: typeof CHAINS[number]) => {
    try {
      const url = `https://api.etherscan.io/v2/api?chainid=${chain.chainId}&module=gastracker&action=gasoracle&apikey=${ETHERSCAN_KEY}`;
      const res = await fetch(url);
      const json = await res.json();

      if (json.status === "1" && json.result) {
        return { data: json.result, error: null };
      }
      return { data: null, error: json.message || "API error" };
    } catch (e: any) {
      return { data: null, error: e.message || "Network error" };
    }
  }, []);

  const fetchAll = useCallback(async () => {
    setChainsData((prev) => prev.map((c) => ({ ...c, loading: true })));

    const results = await Promise.all(CHAINS.map((chain) => fetchGas(chain)));

    setChainsData((prev) =>
      prev.map((c, i) => ({
        ...c,
        data: results[i].data,
        loading: false,
        error: results[i].error,
      }))
    );
  }, [fetchGas]);

  useEffect(() => {
    fetchAll();
    const interval = setInterval(fetchAll, 30000);
    return () => clearInterval(interval);
  }, [fetchAll]);

  function getGasLevel(gwei: number): { label: string; color: string; bg: string } {
    if (gwei < 20) return { label: "Low", color: "#10b981", bg: "bg-[#10b981]/10" };
    if (gwei < 50) return { label: "Normal", color: "#f59e0b", bg: "bg-[#f59e0b]/10" };
    if (gwei < 100) return { label: "High", color: "#f97316", bg: "bg-[#f97316]/10" };
    return { label: "Very High", color: "#ef4444", bg: "bg-[#ef4444]/10" };
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full text-[#fbbf24] text-xs font-medium mb-4">
            <Gauge size={14} />
            Live Gas Tracker
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Gas Fee Tracker
          </h1>
          <p className="text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            Real-time gas prices across Ethereum, BSC, Polygon, and Arbitrum.
            Auto-refreshes every 30 seconds.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              onClick={fetchAll}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0d0d14] border border-[#1a1a2e] rounded-lg text-sm text-[#94a3b8] hover:text-white hover:border-[#475569] transition-all"
            >
              <RefreshCw size={14} />
              Refresh
            </button>
            <span className="text-xs text-[#475569]">Auto-refresh: 30s</span>
          </div>
        </div>

        {/* Gas Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {chainsData.map((chain) => (
            <div
              key={chain.chain}
              className="bg-[#0d0d14] border border-[#1a1a2e] rounded-2xl p-5 sm:p-6 hover:border-[#1a1a2e]/80 transition-all"
            >
              {/* Chain Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{chain.icon}</span>
                  <span className="text-white font-semibold">{chain.name}</span>
                </div>
                {chain.data && (
                  <span
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                    style={{
                      backgroundColor: getGasLevel(parseFloat(chain.data.FastGasPrice)).bg,
                      color: getGasLevel(parseFloat(chain.data.FastGasPrice)).color,
                    }}
                  >
                    {getGasLevel(parseFloat(chain.data.FastGasPrice)).label}
                  </span>
                )}
              </div>

              {/* Gas Tiers */}
              {chain.loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse flex items-center gap-3">
                      <div className="w-12 h-3 bg-[#1a1a2e] rounded" />
                      <div className="w-20 h-5 bg-[#1a1a2e] rounded" />
                      <div className="w-16 h-3 bg-[#1a1a2e] rounded" />
                    </div>
                  ))}
                </div>
              ) : chain.error ? (
                <div className="flex items-center gap-2 text-sm text-[#ef4444]">
                  <AlertTriangle size={14} />
                  Failed to load
                </div>
              ) : chain.data ? (
                <div className="space-y-3">
                  {/* Fast */}
                  <div className="flex items-center justify-between p-3 bg-[#06060b] rounded-xl border border-[#ef4444]/10">
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-[#ef4444]" />
                      <span className="text-sm text-white">Fast</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-bold text-white">
                        {parseFloat(chain.data.FastGasPrice).toFixed(2)}
                      </span>
                      <span className="text-[10px] text-[#475569]">Gwei</span>
                    </div>
                    <span className="text-[10px] text-[#475569]">
                      ~30s
                    </span>
                  </div>

                  {/* Standard */}
                  <div className="flex items-center justify-between p-3 bg-[#06060b] rounded-xl border border-[#f59e0b]/10">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#f59e0b]" />
                      <span className="text-sm text-white">Standard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-bold text-white">
                        {parseFloat(chain.data.ProposeGasPrice).toFixed(2)}
                      </span>
                      <span className="text-[10px] text-[#475569]">Gwei</span>
                    </div>
                    <span className="text-[10px] text-[#475569]">
                      ~3min
                    </span>
                  </div>

                  {/* Slow */}
                  <div className="flex items-center justify-between p-3 bg-[#06060b] rounded-xl border border-[#10b981]/10">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#10b981]" />
                      <span className="text-sm text-white">Slow</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-bold text-white">
                        {parseFloat(chain.data.SafeGasPrice).toFixed(2)}
                      </span>
                      <span className="text-[10px] text-[#475569]">Gwei</span>
                    </div>
                    <span className="text-[10px] text-[#475569]">
                      ~10min
                    </span>
                  </div>

                  {/* Explorer Link */}
                  <a
                    href={chain.explorerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 py-2 text-xs text-[#64748b] hover:text-[#22d3ee] transition-colors"
                  >
                    View on {chain.name} Explorer
                    <ExternalLink size={10} />
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* What is Gas? */}
        <div className="bg-[#0d0d14] border border-[#1a1a2e] rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-5">
            What is Gas?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
              <h3 className="text-sm font-semibold text-white mb-2">
                Gas = Transaction Fee
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Every transaction on a blockchain costs a small fee called &quot;gas.&quot;
                It pays validators for processing your transaction. More complex operations
                (like swaps or NFT mints) cost more gas.
              </p>
            </div>
            <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
              <h3 className="text-sm font-semibold text-white mb-2">
                Gwei = Unit of Gas Price
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Gas prices are measured in Gwei (1 Gwei = 0.000000001 ETH). A higher Gwei
                means higher fees but faster confirmation. During network congestion, gas
                prices spike.
              </p>
            </div>
            <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
              <h3 className="text-sm font-semibold text-white mb-2">
                Fast vs Standard vs Slow
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                &quot;Fast&quot; gives the highest chance of immediate inclusion (~30s). &quot;Standard&quot;
                is the network recommendation (~3 min). &quot;Slow&quot; saves money but may take
                minutes to confirm.
              </p>
            </div>
            <div className="bg-[#06060b] border border-[#1a1a2e] rounded-xl p-4">
              <h3 className="text-sm font-semibold text-white mb-2">
                L2 = Cheaper Gas
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Layer-2 chains like Arbitrum and Polygon process transactions off the main
                Ethereum chain, drastically reducing fees. Polygon gas is often &lt;$0.01.
              </p>
            </div>
          </div>
        </div>

        {/* CTA: Trade on Low-Fee Chains */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-white mb-4">
            Save on Gas with the Right Tools
          </h2>
          <p className="text-sm text-[#94a3b8] mb-5">
            Use hardware wallets for secure transactions and DEX aggregators for optimal gas pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/ledger"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0d0d14] border border-[#1a1a2e] rounded-xl text-sm text-white hover:border-[#06b6d4]/30 hover:text-[#22d3ee] transition-all"
            >
              Ledger Wallet
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/tools/trezor"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0d0d14] border border-[#1a1a2e] rounded-xl text-sm text-white hover:border-[#06b6d4]/30 hover:text-[#22d3ee] transition-all"
            >
              Trezor Wallet
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/tools/1inch"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0d0d14] border border-[#1a1a2e] rounded-xl text-sm text-white hover:border-[#06b6d4]/30 hover:text-[#22d3ee] transition-all"
            >
              1inch Aggregator
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/tools/dexscreener"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0d0d14] border border-[#1a1a2e] rounded-xl text-sm text-white hover:border-[#06b6d4]/30 hover:text-[#22d3ee] transition-all"
            >
              DEXScreener
              <ArrowRight size={14} />
            </Link>
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
