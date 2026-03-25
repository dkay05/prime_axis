"use client";

import { motion } from "framer-motion";
import { LucideIcon, CheckCircle } from "lucide-react";
import Link from "next/link";

interface Feature {
  title: string;
  description: string;
}

interface SolutionPageProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  features: Feature[];
  benefits: string[];
  mockupContent: React.ReactNode;
}

export default function SolutionPageTemplate({
  icon: Icon,
  badge,
  title,
  highlight,
  subtitle,
  description,
  features,
  benefits,
  mockupContent,
}: SolutionPageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06] blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)" }}
          />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors mb-6 inline-flex items-center gap-1">
                  ← Back to Home
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6"
              >
                <Icon className="w-4 h-4 text-gold-400" />
                <span className="text-gold-400 text-xs font-medium tracking-wide">{badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
              >
                <span className="text-white">{title}</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  {highlight}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-5 text-zinc-400 text-lg max-w-lg leading-relaxed"
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/25 text-sm">
                  Request Demo
                </button>
                <button className="border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-sm hover:bg-white/5">
                  Talk to Sales
                </button>
              </motion.div>
            </div>

            {/* Right - Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {mockupContent}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 border-t border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Overview</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">{description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 border-t border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">What&apos;s included</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-500/20 transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-t border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Benefits</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-8">Why choose this solution</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-gold-600/10 via-zinc-900 to-zinc-950 p-10 md:p-14 text-center"
            >
              <Icon className="w-16 h-16 text-gold-400/40 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Ready to get started?</h3>
              <p className="text-zinc-400 text-sm mb-8">Book a personalized demo and see how this solution fits your business.</p>
              <button className="bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/25 text-sm">
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-zinc-800/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Launch with SetupFX24
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              Get a custom proposal tailored to your needs. Our team will guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gold-600 hover:bg-gold-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/25 text-sm">
                Get Custom Proposal
              </button>
              <button className="border border-zinc-600 hover:border-zinc-400 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 text-sm hover:bg-white/5">
                Book Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
