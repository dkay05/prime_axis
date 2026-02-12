"use client";

import { motion } from "framer-motion";
import { Gift, Star, Zap, Crown } from "lucide-react";

const rewards = [
  {
    icon: Crown,
    brand: "Apple",
    offer: "Up to 20% off on MacBook Pro",
    coins: "2,500",
    category: "Electronics",
  },
  {
    icon: Star,
    brand: "Nike",
    offer: "Flat 30% off on select styles",
    coins: "1,200",
    category: "Fashion",
  },
  {
    icon: Zap,
    brand: "Zomato",
    offer: "Free delivery for 3 months",
    coins: "800",
    category: "Food",
  },
  {
    icon: Gift,
    brand: "BookMyShow",
    offer: "Buy 1 Get 1 on movie tickets",
    coins: "500",
    category: "Entertainment",
  },
];

export default function Rewards() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cred-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-cred-muted">Rewards</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
            <span className="gradient-text-gold">good behavior</span>
            <br />
            <span className="gradient-text">deserves rewards.</span>
          </h2>
          <p className="mt-6 text-cred-muted text-lg max-w-xl mx-auto">
            pay your credit card bills on time and unlock exclusive rewards from top brands.
          </p>
        </motion.div>

        {/* CRED Coins Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 mb-12 max-w-2xl mx-auto text-center"
        >
          <div className="text-xs tracking-[0.2em] uppercase text-cred-muted mb-2">Your CRED Coins</div>
          <div className="text-5xl md:text-6xl font-bold gradient-text-gold">12,450</div>
          <div className="text-cred-muted text-sm mt-2">earned from timely bill payments</div>
          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">₹2.4L</div>
              <div className="text-xs text-cred-muted mt-1">bills paid</div>
            </div>
            <div className="w-px h-10 bg-cred-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24</div>
              <div className="text-xs text-cred-muted mt-1">months streak</div>
            </div>
            <div className="w-px h-10 bg-cred-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">₹18K</div>
              <div className="text-xs text-cred-muted mt-1">rewards earned</div>
            </div>
          </div>
        </motion.div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-xl p-6 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <reward.icon className="w-6 h-6 text-white/60" />
                  </div>
                  <div>
                    <div className="text-xs text-cred-muted uppercase tracking-wider">{reward.category}</div>
                    <h4 className="text-white font-semibold mt-1">{reward.brand}</h4>
                    <p className="text-cred-muted text-sm mt-1">{reward.offer}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs text-cred-muted">Redeem for</div>
                  <div className="text-sm font-bold gradient-text-gold">{reward.coins} coins</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="neopop-btn-outline text-sm px-8 py-4">
            VIEW ALL REWARDS
          </button>
        </motion.div>
      </div>
    </section>
  );
}
