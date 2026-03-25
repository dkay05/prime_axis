"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Video, FileText, TrendingUp, Shield } from "lucide-react";

const learningPaths = [
  {
    icon: BookOpen,
    title: "Forex Basics",
    description: "Start your trading journey with our beginner-friendly guide. Learn the fundamentals of forex trading, market terminology, and basic concepts.",
    topics: [
      "What is Forex Trading?",
      "Currency pairs explained",
      "How to read forex quotes",
      "Understanding pips & lots",
      "Market sessions & timing",
    ],
    level: "Beginner",
    duration: "2-3 hours",
    link: "/learn/basics",
  },
  {
    icon: GraduationCap,
    title: "Trading Guide",
    description: "Master trading strategies and risk management. Learn technical analysis, chart patterns, and develop your own trading plan.",
    topics: [
      "Technical analysis basics",
      "Chart patterns & indicators",
      "Risk management strategies",
      "Creating a trading plan",
      "Psychology of trading",
    ],
    level: "Intermediate",
    duration: "5-7 hours",
    link: "/learn/guide",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Learn through step-by-step video lessons. Watch expert traders explain concepts, demonstrate strategies, and analyze live markets.",
    topics: [
      "Platform walkthrough",
      "How to place trades",
      "Reading candlestick charts",
      "Using technical indicators",
      "Live trading examples",
    ],
    level: "All Levels",
    duration: "10+ hours",
    link: "/learn/videos",
  },
];

const quickGuides = [
  {
    icon: FileText,
    title: "Trading Glossary",
    desc: "Essential trading terms and definitions",
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    desc: "Learn to analyze market trends and patterns",
  },
  {
    icon: Shield,
    title: "Risk Management",
    desc: "Protect your capital with proper risk control",
  },
];

export default function Learn() {
  return (
    <section id="learn" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Education Center</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Learn to Trade
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Master trading with our comprehensive educational resources. From beginner basics to advanced strategies, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-gold-500/30 hover:bg-zinc-900/80 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
                <path.icon className="w-7 h-7 text-gold-400" />
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-white">{path.title}</h3>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-medium">
                  {path.level}
                </span>
                <span className="text-xs text-zinc-500">{path.duration}</span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{path.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white text-sm font-semibold mb-3">What you'll learn:</h4>
                <ul className="space-y-2">
                  {path.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                      <span className="text-zinc-300 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href={path.link} className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium text-sm transition-colors">
                Start Learning →
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
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Quick Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {quickGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4">
                  <guide.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{guide.title}</h4>
                <p className="text-zinc-400 text-sm">{guide.desc}</p>
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
            All educational resources are completely free. Start learning today and become a confident trader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/learn/basics" className="bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Start Learning
            </a>
            <a href="/accounts/demo" className="border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-white/5">
              Practice with Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
