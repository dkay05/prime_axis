"use client";

import { motion } from "framer-motion";
const stats = [
  { value: "500+", label: "Trading Instruments" },
  { value: "<12ms", label: "Execution Speed" },
  { value: "0.0", label: "Spreads From (pips)" },
  { value: "24/7", label: "Customer Support" },
];

export default function Hero() {
  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>
        {/* Light overlay for text readability without darkening video too much */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex justify-end">
          <div className="max-w-3xl text-right">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
            >
              <span className="text-white">Trade Smarter,</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Grow Faster
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-zinc-400 text-lg leading-relaxed"
            >
              Access global markets with lightning-fast execution, advanced trading tools, and secure multi-asset trading. Trade Forex, Commodities, Indices, Crypto, and Stocks all from one powerful platform.
            </motion.p>
          </div>
        </div>

      </div>
    </section>

    {/* Stats Strip - separate section below hero */}
    <section className="relative bg-zinc-950 border-t border-zinc-800/50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-zinc-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}
