"use client";

import { motion } from "framer-motion";
import { MessageSquare, Paintbrush, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Discovery & Strategy", desc: "We dive deep into your business goals, audience, and requirements to craft the perfect plan." },
  { icon: Paintbrush, step: "02", title: "Design & Prototype", desc: "Our designers create stunning UI/UX mockups and interactive prototypes for your approval." },
  { icon: Code2, step: "03", title: "Development", desc: "Our engineers build your solution using modern tech stacks with agile sprints and regular updates." },
  { icon: TestTube, step: "04", title: "Testing & QA", desc: "Rigorous testing across devices, browsers, and scenarios to ensure flawless performance." },
  { icon: Rocket, step: "05", title: "Launch & Growth", desc: "We deploy your project and provide ongoing support, optimization, and marketing to drive growth." },
];

export default function HowItWorks() {
  return (
    <section id="resources" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            From Idea to Launch in 5 Steps
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Our proven process ensures your project is delivered on time, on budget, and beyond expectations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[calc(10%)] right-[calc(10%)] h-px bg-gradient-to-r from-blue-500/30 via-blue-500/50 to-blue-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
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
                  <div className="absolute inset-0 rounded-full bg-blue-500/5 border border-blue-500/20" />
                  <div className="absolute inset-3 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-blue-600/30">
                    {item.step}
                  </div>
                </div>

                <h4 className="text-white font-semibold text-sm mb-1.5">{item.title}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
