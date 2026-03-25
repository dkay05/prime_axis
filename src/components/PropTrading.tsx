"use client";

import { motion } from "framer-motion";
import { Check, User, Target, Crown } from "lucide-react";

const plans = [
  {
    name: "Standard Account",
    price: "$0",
    period: "deposit fees",
    description: "Perfect for beginners getting started with their trading journey.",
    icon: User,
    features: [
      "No minimum deposit",
      "Leverage up to 1:500",
      "Spreads from 1.0 pips",
      "Zero commissions",
      "24/5 customer support",
      "Free educational materials",
    ],
    cta: "Open Standard",
    popular: false,
  },
  {
    name: "Pro Account",
    price: "Raw",
    period: "spreads",
    description: "Optimized for active traders who need precision and low costs.",
    icon: Target,
    features: [
      "Spreads from 0.0 pips",
      "Leverage up to 1:500",
      "$3.5 commission per lot",
      "Ultra-fast API execution",
      "Dedicated account manager",
      "Advanced charting tools",
      "Free VPS hosting",
      "Daily market analysis",
    ],
    cta: "Open Pro Account",
    popular: true,
  },
  {
    name: "ECN Account",
    price: "Institutional",
    period: "grade",
    description: "Direct market access with raw spreads for professional and institutional traders.",
    icon: Crown,
    features: [
      "Deep liquidity pools",
      "No dealing desk intervention",
      "Custom leverage options",
      "FIX API Access",
      "Priority withdrawal processing",
      "Premium 24/7 dedicated support",
      "Cashback structure on volumes",
      "Direct ECN routing",
      "Zero requotes",
    ],
    cta: "Open ECN Account",
    popular: false,
  },
];

export default function AccountTypes() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Account Types</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Choose Your Trading Account
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Whether you are a beginner or a professional, we have an account tailored to your trading style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-gold-500/50 bg-zinc-900/80 shadow-2xl shadow-gold-500/10 scale-[1.02]"
                  : "border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg shadow-gold-600/30">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  plan.popular ? "bg-gold-500/20 border border-gold-500/30" : "bg-zinc-800 border border-zinc-700"
                }`}>
                  <plan.icon className={`w-5 h-5 ${plan.popular ? "text-gold-400" : "text-zinc-400"}`} />
                </div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-zinc-500 text-sm ml-2">/ {plan.period}</span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{plan.description}</p>

              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-lg transition-all duration-200 text-sm mb-8 ${
                  plan.popular
                    ? "bg-gold-600 hover:bg-gold-500 text-white shadow-lg shadow-gold-600/20"
                    : "border border-zinc-700 hover:border-zinc-500 text-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-gold-400" : "text-zinc-500"}`} />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-zinc-500 text-sm mt-12"
        >
          Need a custom solution? <a href="#contact" className="text-gold-400 hover:text-gold-300 font-medium">Contact us</a> for a tailored proposal.
        </motion.p>
      </div>
    </section>
  );
}
