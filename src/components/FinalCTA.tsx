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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-900/20 to-zinc-900" />
          <div className="absolute inset-0 border border-blue-500/20 rounded-2xl" />
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Build, Scale &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Grow Your Business?
              </span>
            </h2>
            <p className="mt-5 text-zinc-400 text-lg max-w-xl mx-auto">
              Get a free consultation and custom proposal tailored to your business needs.
              Our team will walk you through every solution and answer all your questions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm">
                Get Free Consultation
              </a>
              <a href="#pricing" className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 text-sm hover:bg-white/5">
                View Pricing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
