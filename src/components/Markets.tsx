"use client";

import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart3, Bitcoin, LineChart } from "lucide-react";

const markets = [
  {
    icon: DollarSign,
    title: "Forex",
    description: "Trade major, minor, and exotic currency pairs with tight spreads and deep liquidity.",
    features: ["70+ Currency Pairs", "Spreads from 0.0 pips", "24/5 Trading"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Commodities",
    description: "Access global commodity markets including precious metals, energy, and agricultural products.",
    features: ["Gold & Silver", "Oil & Natural Gas", "Agricultural Products"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Indices",
    description: "Trade the world's leading stock market indices with competitive leverage and low margins.",
    features: ["US, EU & Asian Indices", "Low Margin Requirements", "Extended Trading Hours"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Bitcoin,
    title: "Crypto",
    description: "Trade Bitcoin, Ethereum, and top cryptocurrencies with tight spreads and no hidden fees.",
    features: ["20+ Crypto Pairs", "24/7 Trading", "Secure Custody"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: LineChart,
    title: "Stocks",
    description: "Trade shares of leading global companies with zero commission and fractional shares.",
    features: ["1000+ Global Stocks", "Zero Commission", "Real-Time Quotes"],
    color: "from-red-500 to-rose-500",
  },
];

export default function Markets() {
  return (
    <section id="markets" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Trading Markets</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Trade Global Markets
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Access multiple asset classes and trade price movements across global financial markets with competitive spreads and fast execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <motion.div
              key={market.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-gold-500/30 hover:bg-zinc-900/70 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${market.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                <market.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{market.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{market.description}</p>
              <ul className="space-y-2">
                {market.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-400 text-sm mb-6">
            Trade price movements without owning the underlying asset. Profit from both rising and falling markets.
          </p>
          <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
            Start Trading Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
