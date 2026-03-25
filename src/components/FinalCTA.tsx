"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-600/20 via-gold-900/20 to-zinc-900" />
          <div className="absolute inset-0 border border-gold-500/20 rounded-2xl" />
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.6) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Explore Our Products?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Get Started Today
              </span>
            </h2>
            <p className="mt-5 text-zinc-400 text-lg max-w-xl mx-auto">
              Discover our comprehensive suite of trading products designed to give you the competitive edge you need.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#platform" className="bg-gold-600 hover:bg-gold-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/25 text-sm">
                Explore Our Products
              </a>
              <a href="#pricing" className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 text-sm hover:bg-white/5">
                View Pricing Plans
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
