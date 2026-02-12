"use client";

import { motion } from "framer-motion";
import { Code2, Globe, TrendingUp, Palette } from "lucide-react";

const highlights = [
  { icon: Code2, text: "Web & Mobile Apps" },
  { icon: TrendingUp, text: "Digital Marketing" },
  { icon: Globe, text: "CRM & Automation" },
  { icon: Palette, text: "UI/UX Design" },
];

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Countries Served" },
];

export default function Hero() {
  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Full-cover background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/setupfxvideo.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950/90" />
      </div>

      {/* Blurry blue light - smooth moving animation around all sides, 10s duration */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[200px]"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(37,99,235,0.5) 50%, transparent 75%)" }}
        animate={{
          top: ["-20%", "-20%", "40%", "40%", "-20%"],
          left: ["-15%", "55%", "55%", "-15%", "-15%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />

      {/* Thin-line square grid with 30% opacity */}
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "100px 100px" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-6xl text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-xs font-medium tracking-wide">Global Software & Digital Marketing Company</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
            >
              <span className="text-white">Build, Scale</span>
              <br />
              <span className="text-white">& Grow </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Digitally
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-zinc-400 text-lg max-w-3xl leading-relaxed"
            >
              Custom apps, CRM, and data-driven marketing to grow businesses digitally.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a href="#services" className="border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-sm hover:bg-white/5 text-center">
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>

    {/* Stats Strip - separate section below hero */}
    <section className="relative bg-zinc-950 border-t border-zinc-800/50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-zinc-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Terminal Image Section */}
    <section className="relative bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          whileHover={{ rotateY: 10, scale: 1.02 }}
          className="cursor-pointer"
          style={{ perspective: 1200 }}
        >
          <img
            src="/terminal.png"
            alt="Terminal"
            className="w-full h-auto rounded-2xl border border-zinc-800/50 shadow-2xl shadow-blue-500/5 transition-shadow duration-300 hover:shadow-blue-500/20"
          />
        </motion.div>
      </div>
    </section>
    </>
  );
}
