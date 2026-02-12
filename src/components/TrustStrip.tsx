"use client";

import { motion } from "framer-motion";
import { Code2, TrendingUp, ShieldCheck, Zap, Globe } from "lucide-react";

const trustPoints = [
  { icon: Code2, label: "Custom Development" },
  { icon: TrendingUp, label: "Growth Marketing" },
  { icon: ShieldCheck, label: "Secure & Reliable" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Globe, label: "Global Reach" },
];

export default function TrustStrip() {
  return (
    <section className="relative py-12 border-y border-zinc-800/60 bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left flex-shrink-0">
            <p className="text-white font-semibold text-lg">Trusted by Businesses Worldwide</p>
            <p className="text-zinc-500 text-sm mt-1">From startups to global enterprises</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2.5"
              >
                <point.icon className="w-5 h-5 text-blue-400" />
                <span className="text-zinc-300 text-sm font-medium">{point.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
