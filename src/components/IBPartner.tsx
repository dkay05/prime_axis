"use client";

import { motion } from "framer-motion";
import { Rocket, Building, Building2, Crown } from "lucide-react";

const industries = [
  {
    icon: Rocket,
    title: "Startups",
    description: "MVP development, rapid prototyping, and scalable architecture to help you validate ideas fast and grow with confidence.",
    features: ["MVP in 4-6 weeks", "Scalable tech stack", "Growth marketing"],
  },
  {
    icon: Building,
    title: "Small & Medium Businesses",
    description: "Custom web apps, CRM systems, and digital marketing strategies designed to streamline operations and accelerate growth.",
    features: ["Custom business apps", "CRM & automation", "SEO & paid ads"],
  },
  {
    icon: Building2,
    title: "Enterprises",
    description: "Complex enterprise systems, integrations, and large-scale applications built for performance, security, and compliance.",
    features: ["Enterprise-grade systems", "API integrations", "24/7 support"],
  },
  {
    icon: Crown,
    title: "Global Brands",
    description: "World-class digital experiences, multi-market campaigns, and technology solutions that match the scale of your ambition.",
    features: ["Multi-market strategy", "Brand-level UX", "Global campaigns"],
  },
];

export default function IBPartner() {
  return (
    <section id="industries" className="relative py-24 overflow-hidden bg-zinc-950/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Industries We Serve</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Solutions for Every Stage of Growth
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Whether you&apos;re a startup with a big idea or a global brand scaling operations, we have the expertise to deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/60 p-7 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                <card.icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{card.description}</p>
              <ul className="space-y-1.5">
                {card.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-zinc-500">
                    <div className="w-1 h-1 rounded-full bg-gold-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
