"use client";

import { motion } from "framer-motion";
import { Settings, Cpu, LayoutDashboard, Building2 } from "lucide-react";

const solutions = [
  { icon: Settings, title: "Custom Software Solutions", desc: "Bespoke software designed to solve your unique business challenges with scalable, maintainable architecture." },
  { icon: Cpu, title: "Business Automation", desc: "Automate repetitive workflows, reduce manual errors, and boost team productivity with smart automation." },
  { icon: LayoutDashboard, title: "CRM & Admin Panels", desc: "Centralized dashboards for managing clients, data, operations, and team collaboration in one place." },
  { icon: Building2, title: "Enterprise Applications", desc: "Large-scale, mission-critical systems built for performance, security, and enterprise-grade reliability." },
];

export default function BackOffice() {
  return (
    <section id="solutions" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight text-white leading-tight">
              Tailored Solutions for Every Business Need
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              We don&apos;t believe in one-size-fits-all. Our solutions are custom-built to address your specific
              challenges, whether you need a complete digital overhaul or targeted improvements.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-gold-500/20 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-zinc-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - Solutions Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/chart.png"
              alt="Solutions Dashboard"
              className="w-full h-auto rounded-xl border border-zinc-800 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
