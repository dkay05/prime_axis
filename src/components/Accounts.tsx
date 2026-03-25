"use client";

import { motion } from "framer-motion";
import { Check, User, Target, Crown, PlayCircle } from "lucide-react";

const accountTypes = [
  {
    name: "Basic Account",
    icon: User,
    description: "Perfect for beginners starting their trading journey with minimal capital.",
    minDeposit: "$100",
    features: [
      "Spreads from 1.2 pips",
      "Leverage up to 1:500",
      "Zero commission",
      "Free educational materials",
      "24/5 customer support",
      "Access to all markets",
    ],
    cta: "Open Basic Account",
    popular: false,
  },
  {
    name: "Standard Account",
    icon: Target,
    description: "Ideal for active traders who need better spreads and advanced features.",
    minDeposit: "$500",
    features: [
      "Spreads from 0.8 pips",
      "Leverage up to 1:500",
      "Low commission ($3.5/lot)",
      "Advanced charting tools",
      "Priority customer support",
      "Free VPS hosting",
      "Daily market analysis",
    ],
    cta: "Open Standard Account",
    popular: true,
  },
  {
    name: "Pro Account",
    icon: Crown,
    description: "Professional-grade account with institutional pricing and premium features.",
    minDeposit: "$5,000",
    features: [
      "Spreads from 0.0 pips",
      "Leverage up to 1:500",
      "Reduced commission ($2.5/lot)",
      "Dedicated account manager",
      "Premium 24/7 support",
      "Free VPS & API access",
      "Exclusive trading signals",
      "Cashback on volumes",
    ],
    cta: "Open Pro Account",
    popular: false,
  },
];

export default function Accounts() {
  return (
    <section id="accounts" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Account Types</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Choose Your Account
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Select the account that matches your trading style and experience level. All accounts include access to our full platform and markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {accountTypes.map((account, index) => (
            <motion.div
              key={account.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                account.popular
                  ? "border-2 border-gold-500/50 bg-zinc-900/80 shadow-2xl shadow-gold-500/10 scale-[1.02]"
                  : "border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              }`}
            >
              {account.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg shadow-gold-600/30">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  account.popular ? "bg-gold-500/20 border border-gold-500/30" : "bg-zinc-800 border border-zinc-700"
                }`}>
                  <account.icon className={`w-6 h-6 ${account.popular ? "text-gold-400" : "text-zinc-400"}`} />
                </div>
                <h3 className="text-xl font-bold text-white">{account.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-sm text-zinc-500">Minimum Deposit</span>
                <div className="text-3xl font-bold text-white mt-1">{account.minDeposit}</div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{account.description}</p>

              <a
                href="/accounts/open"
                className={`block text-center font-semibold py-3 rounded-lg transition-all duration-200 text-sm mb-8 ${
                  account.popular
                    ? "bg-gold-600 hover:bg-gold-500 text-white shadow-lg shadow-gold-600/20"
                    : "border border-zinc-700 hover:border-zinc-500 text-white hover:bg-white/5"
                }`}
              >
                {account.cta}
              </a>

              <ul className="space-y-3">
                {account.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${account.popular ? "text-gold-400" : "text-zinc-500"}`} />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-6">
            <PlayCircle className="w-8 h-8 text-gold-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Try Demo Account</h3>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            Practice trading with $10,000 virtual funds. Test strategies, learn the platform, and trade risk-free before going live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/accounts/demo" className="bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Open Demo Account
            </a>
            <a href="/accounts/types" className="border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-white/5">
              Compare Accounts
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
