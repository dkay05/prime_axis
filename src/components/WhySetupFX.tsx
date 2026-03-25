"use client";

import { motion } from "framer-motion";
import { Zap, Activity, ShieldCheck, Server } from "lucide-react";

const differentiators = [
  { icon: Zap, title: "Ultra-Fast Execution", benefit: "Our platform delivers lightning-speed order processing with execution times under 12ms for precise trade entry and exit." },
  { icon: Activity, title: "Advanced Analytics", benefit: "Access 100+ technical indicators, real-time charting, and comprehensive market analysis tools built into our products." },
  { icon: ShieldCheck, title: "Enterprise Security", benefit: "Bank-level 256-bit encryption, 2FA authentication, and segregated funds ensure your data and capital are protected." },
  { icon: Server, title: "Multi-Platform Access", benefit: "Trade seamlessly across web, desktop, and mobile platforms with cloud-synced portfolios and real-time synchronization." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function WhySetupFX() {
  return (
    <section id="why" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Product Features</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Powerful Trading Products
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Our products are built with cutting-edge technology to deliver institutional-grade performance, tight spreads, and lightning-fast execution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group flex items-start gap-4 p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-gold-500/30 hover:bg-zinc-900/70 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                <p className="text-zinc-400 text-sm mt-1.5 leading-relaxed">{item.benefit}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
