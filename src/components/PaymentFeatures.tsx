"use client";

import { motion } from "framer-motion";
import { QrCode, Smartphone, Send, CreditCard } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Scan & Pay",
    description: "scan any QR code and pay instantly using your CRED balance or linked bank account.",
    stat: "2M+",
    statLabel: "merchants",
  },
  {
    icon: Smartphone,
    title: "Tap to Pay",
    description: "just tap your phone at any NFC-enabled terminal. no cards, no hassle.",
    stat: "500K+",
    statLabel: "daily taps",
  },
  {
    icon: Send,
    title: "Pay Anyone",
    description: "send money to anyone via UPI. instant transfers, zero fees.",
    stat: "₹0",
    statLabel: "transfer fee",
  },
  {
    icon: CreditCard,
    title: "RuPay on UPI",
    description: "use your RuPay credit card on UPI for seamless payments everywhere.",
    stat: "100%",
    statLabel: "secure",
  },
];

export default function PaymentFeatures() {
  return (
    <section id="pay" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cred-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-cred-muted">Payments</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight gradient-text">
            pay. your way.
          </h2>
          <p className="mt-6 text-cred-muted text-lg max-w-xl mx-auto">
            multiple ways to pay, one seamless experience. every transaction earns you CRED coins.
          </p>
        </motion.div>

        {/* Payment Features - Alternating Layout */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-8 md:p-10 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                    <feature.icon className="w-7 h-7 text-white/70" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-cred-muted text-sm mt-2 max-w-md">{feature.description}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 md:ml-auto">
                  <div className="text-3xl font-bold text-white">{feature.stat}</div>
                  <div className="text-xs text-cred-muted uppercase tracking-wider mt-1">{feature.statLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
