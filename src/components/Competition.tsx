"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    icon: Globe,
    category: "Web Application",
    title: "E-Commerce Platform for Fashion Brand",
    description: "Built a custom e-commerce platform with inventory management, payment processing, and analytics dashboard.",
    results: [
      { label: "Revenue Increase", value: "+240%" },
      { label: "Page Load Time", value: "0.8s" },
      { label: "Conversion Rate", value: "+85%" },
    ],
  },
  {
    icon: Smartphone,
    category: "Mobile App",
    title: "Fitness Tracking App with Social Features",
    description: "Developed a cross-platform mobile app with workout tracking, social challenges, and real-time leaderboards.",
    results: [
      { label: "Downloads", value: "50K+" },
      { label: "User Retention", value: "78%" },
      { label: "App Rating", value: "4.8/5" },
    ],
  },
  {
    icon: TrendingUp,
    category: "Digital Marketing",
    title: "SaaS Lead Generation Campaign",
    description: "Executed a full-funnel marketing strategy including SEO, paid ads, and content marketing for a B2B SaaS company.",
    results: [
      { label: "Organic Traffic", value: "+320%" },
      { label: "Qualified Leads", value: "+180%" },
      { label: "Cost Per Lead", value: "-45%" },
    ],
  },
];

export default function Competition() {
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
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Case Studies</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Real Results, Real Impact
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            See how we&apos;ve helped businesses across industries achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-7 pb-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <study.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-blue-400 font-medium">{study.category}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">{study.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{study.description}</p>
              </div>

              {/* Results */}
              <div className="border-t border-zinc-800 bg-zinc-950/50 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <div className="text-lg font-bold text-white">{result.value}</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
