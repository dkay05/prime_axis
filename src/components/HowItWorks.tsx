"use client";

import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, LineChart } from "lucide-react";

const steps = [
  { icon: UserPlus, step: "01", title: "Register Your Account", desc: "Sign up in minutes with our fast, secure, and intuitive onboarding process." },
  { icon: ShieldCheck, step: "02", title: "Complete Quick Verification", desc: "Verify your identity seamlessly through our automated compliance system." },
  { icon: LineChart, step: "03", title: "Start Trading Instantly", desc: "Fund your account and get immediate access to global financial markets." },
];

export default function HowItWorks() {
  return (
    <section id="onboarding" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Start Trading in 3 Simple Steps
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Our streamlined onboarding process gets you into the markets faster than ever before.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[calc(16%)] right-[calc(16%)] h-px bg-gradient-to-r from-gold-500/30 via-gold-500/50 to-gold-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Step circle */}
                <div className="relative mx-auto w-24 h-24 mb-5">
                  <div className="absolute inset-0 rounded-full bg-gold-500/5 border border-gold-500/20" />
                  <div className="absolute inset-3 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-gold-400" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gold-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-gold-600/30">
                    {item.step}
                  </div>
                </div>

                <h4 className="text-white font-semibold text-sm mb-1.5">{item.title}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed max-w-[250px] mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
