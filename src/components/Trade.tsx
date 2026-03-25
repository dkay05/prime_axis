"use client";

import { motion } from "framer-motion";
import { Monitor, Globe, Smartphone, Zap, BarChart2, Lock } from "lucide-react";

const platforms = [
  {
    icon: Monitor,
    title: "Trading Platform",
    description: "Professional-grade desktop platform with advanced charting, technical analysis, and automated trading capabilities.",
    features: ["100+ Technical Indicators", "Advanced Charting Tools", "Automated Trading (EA)", "Real-Time Market Data", "One-Click Trading"],
    image: "platform",
  },
  {
    icon: Globe,
    title: "Web Trader",
    description: "Trade directly from your browser without downloads. Access your account from any device with internet connection.",
    features: ["No Download Required", "Cross-Platform Compatible", "Cloud-Based Watchlists", "Instant Access", "Secure & Fast"],
    image: "web",
  },
  {
    icon: Smartphone,
    title: "Mobile Trading",
    description: "Trade on the go with our native iOS and Android apps. Full trading functionality in the palm of your hand.",
    features: ["iOS & Android Apps", "Push Notifications", "Touch ID / Face ID", "Real-Time Alerts", "Full Chart Analysis"],
    image: "mobile",
  },
];

const platformFeatures = [
  { icon: Zap, title: "Lightning-Fast Execution", desc: "Orders executed in under 12ms with minimal slippage" },
  { icon: BarChart2, title: "Advanced Analytics", desc: "Professional charting tools and market analysis" },
  { icon: Lock, title: "Secure & Reliable", desc: "Bank-level encryption and 99.9% uptime guarantee" },
];

export default function Trade() {
  return (
    <section id="trade" className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Trading Platforms</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Trade Your Way
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Choose from our powerful trading platforms designed for speed, precision, and reliability. Trade on desktop, web, or mobile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-gold-500/30 hover:bg-zinc-900/80 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
                <platform.icon className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{platform.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{platform.description}</p>
              <ul className="space-y-3 mb-6">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={`/trade/${platform.image}`} className="text-gold-400 hover:text-gold-300 font-medium text-sm transition-colors">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Platform Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-zinc-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a href="/accounts/demo" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
            Try Demo Account
          </a>
        </motion.div>
      </div>
    </section>
  );
}
