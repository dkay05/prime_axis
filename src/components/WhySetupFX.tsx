"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Users, Globe, HeadphonesIcon, ShieldCheck } from "lucide-react";

const differentiators = [
  { icon: Code2, title: "Expert Development Team", benefit: "Senior engineers with deep expertise in React, Next.js, Flutter, Node.js, and cloud infrastructure." },
  { icon: Zap, title: "Fast Delivery", benefit: "Agile methodology and proven processes mean your project goes live in weeks, not months." },
  { icon: Users, title: "Dedicated Team", benefit: "A named project manager, designer, and development team assigned exclusively to your project." },
  { icon: Globe, title: "Global Experience", benefit: "We've delivered projects across 15+ countries for startups, SMBs, and enterprise clients." },
  { icon: HeadphonesIcon, title: "Ongoing Support", benefit: "Post-launch support, maintenance, and optimization to keep your product running at peak performance." },
  { icon: ShieldCheck, title: "Quality Guaranteed", benefit: "Rigorous QA testing, code reviews, and security audits ensure enterprise-grade quality on every project." },
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
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Why Businesses Trust SetupFX24
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            We combine technical excellence with strategic thinking to deliver solutions that truly make a difference.
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
              className="group flex items-start gap-4 p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-blue-500/30 hover:bg-zinc-900/70 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-blue-400" />
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
