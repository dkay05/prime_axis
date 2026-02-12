"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Eye } from "lucide-react";

export default function CreditScore() {
  return (
    <section id="mint" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cred-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Score Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Score Ring */}
              <div className="relative w-72 h-72 mx-auto">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                  <circle
                    cx="100" cy="100" r="85"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="8"
                  />
                  <circle
                    cx="100" cy="100" r="85"
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 85 * 0.82} ${2 * Math.PI * 85}`}
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Score Number */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-6xl font-bold text-white">782</span>
                  <span className="text-sm text-cred-muted mt-1">EXCELLENT</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 glass-card rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-green-400 w-4 h-4" />
                  <span className="text-green-400 text-sm font-medium">+12 pts</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-0 glass-card rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <Shield className="text-blue-400 w-4 h-4" />
                  <span className="text-blue-400 text-sm font-medium">Protected</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-cred-muted">Credit Score</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight gradient-text leading-tight">
              know where<br />you stand.
            </h2>
            <p className="mt-6 text-cred-muted text-lg leading-relaxed">
              get a detailed analysis of your credit score. understand the factors
              that affect it and get personalized tips to improve it.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Eye,
                  title: "real-time monitoring",
                  desc: "track your credit score changes as they happen",
                },
                {
                  icon: Shield,
                  title: "identity protection",
                  desc: "get alerts for suspicious activity on your accounts",
                },
                {
                  icon: TrendingUp,
                  title: "improvement insights",
                  desc: "personalized recommendations to boost your score",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-cred-muted text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="neopop-btn text-sm px-8 py-4 mt-10">
              CHECK YOUR SCORE
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
