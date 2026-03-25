"use client";

import { motion } from "framer-motion";
import { Calendar, Bell, Newspaper, TrendingUp, AlertCircle, Clock } from "lucide-react";

const tools = [
  {
    icon: Calendar,
    title: "Economic Calendar",
    description: "Stay ahead of market-moving events with our comprehensive economic calendar. Track central bank decisions, employment data, GDP releases, and more.",
    features: [
      "Real-time event updates",
      "Impact level indicators",
      "Historical data comparison",
      "Custom alerts & filters",
      "Multi-timezone support",
    ],
    link: "/tools/calendar",
  },
  {
    icon: Bell,
    title: "Trading Signals",
    description: "Receive expert trade recommendations based on technical analysis and market conditions. Get entry, exit, and stop-loss levels for major instruments.",
    features: [
      "Daily trading signals",
      "Multiple timeframes",
      "Risk-reward ratios",
      "Success rate tracking",
      "SMS & email alerts",
    ],
    link: "/tools/signals",
  },
  {
    icon: Newspaper,
    title: "Market News",
    description: "Access real-time financial news and market analysis from leading sources. Stay informed about global events affecting your trades.",
    features: [
      "Breaking news alerts",
      "Expert market analysis",
      "Earnings reports",
      "Geopolitical updates",
      "Customizable news feed",
    ],
    link: "/tools/news",
  },
];

const additionalTools = [
  {
    icon: TrendingUp,
    title: "Market Analysis",
    desc: "Daily technical & fundamental analysis from our experts",
  },
  {
    icon: AlertCircle,
    title: "Price Alerts",
    desc: "Set custom price alerts for any instrument",
  },
  {
    icon: Clock,
    title: "Trading Hours",
    desc: "Track global market opening and closing times",
  },
];

export default function Tools() {
  return (
    <section id="tools" className="relative py-24 overflow-hidden bg-zinc-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Trading Tools</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Analyze Markets Like a Pro
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Access professional trading tools to help you make informed decisions. Get real-time data, expert signals, and market insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-gold-500/30 hover:bg-zinc-900/80 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
                <tool.icon className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{tool.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{tool.description}</p>
              <ul className="space-y-3 mb-6">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={tool.link} className="text-gold-400 hover:text-gold-300 font-medium text-sm transition-colors">
                Access Tool →
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
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Additional Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4">
                  <tool.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{tool.title}</h4>
                <p className="text-zinc-400 text-sm">{tool.desc}</p>
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
          <p className="text-zinc-400 text-sm mb-6">
            All tools are available for free to our account holders. Start trading to unlock full access.
          </p>
          <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
            Open Account
          </a>
        </motion.div>
      </div>
    </section>
  );
}
