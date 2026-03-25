"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Smartphone, ShieldCheck } from "lucide-react";

const tabs = [
  {
    id: "charts",
    icon: LineChart,
    label: "Charts",
    title: "Real-Time Charting",
    description: "Visualize market data instantly with powerful charting software. Spot trends, plot support and resistance, and trade directly from the chart.",
    features: ["Multiple timeframe analysis", "100+ technical indicators", "Interactive drawing tools", "Tick-by-tick real-time data", "Customizable chart layouts"],
    metric: { label: "Data Providers", value: "Tier-1", sub: "deep liquidity" },
  },
  {
    id: "mobile",
    icon: Smartphone,
    label: "Multi-Device",
    title: "Multi-Device Access",
    description: "Trade anywhere, anytime. Our platform is perfectly synced across all your devices, giving you total control of your portfolio on the go.",
    features: ["Native iOS & Android apps", "Responsive web trader", "Desktop application (Windows/Mac)", "Cloud-synced watchlists", "Push notifications for price alerts"],
    metric: { label: "Platform Uptime", value: "99.9%", sub: "always reliable" },
  },
  {
    id: "security",
    icon: ShieldCheck,
    label: "Security",
    title: "Secure Transactions",
    description: "Your funds and data are protected by bank-level encryption. We employ strict compliance protocols to ensure a safe trading ecosystem.",
    features: ["SSL-encrypted data transfer", "Segregated client funds", "Two-factor authentication (2FA)", "Automated withdrawal processing", "Regulatory compliance"],
    metric: { label: "Encryption", value: "256-bit", sub: "bank-level security" },
  },
];

export default function PlatformFeatures() {
  const [activeTab, setActiveTab] = useState("charts");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="platform" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Platform & Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Next-Generation Trading Technology
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Experience lightning-fast execution and advanced analytical tools designed to give you a competitive edge.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gold-600 text-white shadow-lg shadow-gold-600/20"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{active.title}</h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">{active.description}</p>
              <ul className="mt-6 space-y-3">
                {active.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
                Get Free Consultation
              </a>
            </div>

            {/* Visual - Marketing Metrics Card */}
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/80 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-zinc-800 rounded px-3 py-1 text-[10px] text-zinc-500 text-center">
                    {active.label} — Analytics Dashboard
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-5">
                {/* Big Metric */}
                <div className="text-center py-6 bg-zinc-800/30 rounded-xl border border-zinc-700/30">
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{active.metric.label}</div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mt-2">
                    {active.metric.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-2">{active.metric.sub}</div>
                </div>
                {/* Mini chart */}
                <div className="h-28 bg-zinc-800/50 rounded-lg relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 110" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`mktGrad-${activeTab}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.25)" />
                        <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0,90 Q50,85 100,70 T200,50 T300,25 T400,15" fill="none" stroke="#3b82f6" strokeWidth="2" />
                    <path d="M0,90 Q50,85 100,70 T200,50 T300,25 T400,15 L400,110 L0,110 Z" fill={`url(#mktGrad-${activeTab})`} />
                  </svg>
                  <div className="absolute top-3 left-3 text-[10px] text-zinc-500">Performance Over Time</div>
                  <div className="absolute top-3 right-3 text-[10px] text-green-400 font-mono">Trending Up</div>
                </div>
                {/* Bottom metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {["Impressions", "Clicks", "Conversions"].map((label, i) => (
                    <div key={label} className="bg-zinc-800/50 rounded-lg px-3 py-2.5 text-center">
                      <div className="text-[9px] text-zinc-500">{label}</div>
                      <div className="text-sm text-white font-semibold mt-1">
                        {i === 0 ? "1.2M" : i === 1 ? "84K" : "12.4K"}
                      </div>
                      <div className="text-[9px] text-green-400 mt-0.5">
                        +{20 + i * 15}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
