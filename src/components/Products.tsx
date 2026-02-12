"use client";

import { motion } from "framer-motion";
import { CreditCard, Wallet, Car, TrendingUp, QrCode, Smartphone } from "lucide-react";

const products = [
  {
    icon: Wallet,
    title: "CRED money",
    description: "a savings account that works as hard as you do. earn up to 9% returns on your idle money.",
    tag: "SAVINGS",
    gradient: "from-emerald-500/20 to-emerald-900/20",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: TrendingUp,
    title: "CRED mint",
    description: "invest in mutual funds, fixed deposits, and more. build wealth effortlessly with curated options.",
    tag: "INVESTMENTS",
    gradient: "from-blue-500/20 to-blue-900/20",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Car,
    title: "CRED garage",
    description: "your car deserves the best. manage vehicle expenses, insurance, and service reminders in one place.",
    tag: "AUTOMOBILE",
    gradient: "from-orange-500/20 to-orange-900/20",
    borderColor: "border-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: CreditCard,
    title: "CRED cash+",
    description: "get instant credit lines up to ₹10 lakhs. flexible repayment options tailored for you.",
    tag: "CREDIT",
    gradient: "from-purple-500/20 to-purple-900/20",
    borderColor: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: QrCode,
    title: "Scan & Pay",
    description: "pay at any store using CRED pay. earn exclusive cashback and rewards on every transaction.",
    tag: "PAYMENTS",
    gradient: "from-cyan-500/20 to-cyan-900/20",
    borderColor: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Smartphone,
    title: "Tap to Pay",
    description: "just tap your phone to pay. contactless payments powered by NFC for a seamless experience.",
    tag: "NFC",
    gradient: "from-pink-500/20 to-pink-900/20",
    borderColor: "border-pink-500/20",
    iconColor: "text-pink-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Products() {
  return (
    <section id="money" className="relative py-32 overflow-hidden">
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
          <span className="text-xs tracking-[0.3em] uppercase text-cred-muted">Products</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight gradient-text">
            crafted for the<br />creditworthy.
          </h2>
          <p className="mt-6 text-cred-muted text-lg max-w-xl mx-auto">
            a suite of products designed to help you fast-track your financial and lifestyle progress.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={itemVariants}
              className={`group relative rounded-2xl bg-gradient-to-br ${product.gradient} border ${product.borderColor} p-8 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-bg" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <product.icon className={`${product.iconColor} w-8 h-8`} />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-cred-muted bg-white/5 px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-cred-muted text-sm leading-relaxed">{product.description}</p>

                <div className="mt-6 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors text-sm">
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
