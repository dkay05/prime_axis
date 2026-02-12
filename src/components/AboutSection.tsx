"use client";

import { motion } from "framer-motion";
import { Target, Eye, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Why SetupFX24</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight text-white leading-tight">
              Your Partner for Software Development & Digital Growth
            </h2>
            <p className="mt-6 text-zinc-400 text-base leading-relaxed">
              SetupFX24 is a global software development and digital marketing company helping businesses
              build, scale, and grow in the digital world. We combine cutting-edge technology with
              data-driven marketing strategies to deliver measurable results.
            </p>
            <p className="mt-4 text-zinc-400 text-base leading-relaxed">
              From custom web and mobile applications to CRM systems and full-funnel digital marketing,
              we provide end-to-end solutions that transform how businesses operate and connect with
              their customers.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Our Mission</h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    To empower businesses of all sizes with world-class software and marketing solutions that drive real growth.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Our Vision</h4>
                  <p className="text-zinc-400 text-sm mt-1">
                    To become the go-to global partner for businesses seeking digital transformation and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-12">
              {/* Abstract network graphic */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <circle cx="100" cy="100" r="3" fill="#3b82f6" />
                  <circle cx="200" cy="80" r="3" fill="#3b82f6" />
                  <circle cx="300" cy="120" r="3" fill="#3b82f6" />
                  <circle cx="150" cy="200" r="3" fill="#3b82f6" />
                  <circle cx="250" cy="180" r="3" fill="#3b82f6" />
                  <circle cx="350" cy="250" r="3" fill="#3b82f6" />
                  <circle cx="80" cy="300" r="3" fill="#3b82f6" />
                  <circle cx="200" cy="320" r="3" fill="#3b82f6" />
                  <circle cx="320" cy="350" r="3" fill="#3b82f6" />
                  <line x1="100" y1="100" x2="200" y2="80" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="200" y1="80" x2="300" y2="120" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="150" y2="200" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="200" y1="80" x2="250" y2="180" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="300" y1="120" x2="350" y2="250" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="150" y1="200" x2="250" y2="180" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="150" y1="200" x2="80" y2="300" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="250" y1="180" x2="200" y2="320" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="350" y1="250" x2="320" y2="350" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="80" y1="300" x2="200" y2="320" stroke="#3b82f6" strokeWidth="0.5" />
                  <line x1="200" y1="320" x2="320" y2="350" stroke="#3b82f6" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative z-10 text-center space-y-8">
                <Globe className="w-16 h-16 text-blue-400/60 mx-auto" />
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700/50">
                    <div className="text-3xl font-bold text-white">250+</div>
                    <div className="text-xs text-zinc-400 mt-1">Projects Delivered</div>
                  </div>
                  <div className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700/50">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-xs text-zinc-400 mt-1">Global Clients</div>
                  </div>
                  <div className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700/50">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-xs text-zinc-400 mt-1">Client Satisfaction</div>
                  </div>
                  <div className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700/50">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-xs text-zinc-400 mt-1">Dedicated Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
