"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Switching to this platform was the best move for my day trading. The execution speed is phenomenal, and the raw spreads have significantly reduced my trading costs.",
    name: "Michael R.",
    role: "Professional Day Trader",
    industry: "Forex & Commodities",
  },
  {
    quote: "As an institutional algorithm developer, I need API stability and zero requotes. The FIX API access here is flawless, and the deep liquidity handles our large volumes effortlessly.",
    name: "Elena V.",
    role: "Quant Analyst",
    industry: "Hedge Fund",
  },
  {
    quote: "I started as a beginner, and the intuitive interface made it so easy to learn. The educational materials and constant support gave me the confidence to trade live.",
    name: "David K.",
    role: "Retail Trader",
    industry: "Cryptos & Indices",
  },
];

export default function Testimonial() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Trusted by the Top Traders
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Discover why professional traders and institutions choose our platform for their trading operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
            >
              <Quote className="w-8 h-8 text-gold-500/20 mb-4" />

              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <blockquote className="text-zinc-300 text-sm leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="pt-5 border-t border-zinc-800">
                <div className="text-white font-semibold text-sm">{item.name}</div>
                <div className="text-zinc-500 text-xs mt-0.5">{item.role}</div>
                <div className="text-zinc-600 text-xs mt-0.5">{item.industry}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
