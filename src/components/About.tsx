"use client";

import { motion } from "framer-motion";
import { Users, Building2, Globe, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "9M+", label: "members" },
  { icon: Building2, value: "35K+", label: "brands" },
  { icon: Globe, value: "800+", label: "cities" },
  { icon: Award, value: "₹2T+", label: "bills paid" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cred-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-cred-muted">About CRED</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight gradient-text leading-tight">
              built for the<br />trustworthy.
            </h2>
            <p className="mt-6 text-cred-muted text-lg leading-relaxed">
              CRED is a members-only club that rewards individuals for their
              timely credit card bill payments. as a member, you get access to
              exclusive offers and premium experiences from top brands.
            </p>
            <p className="mt-4 text-cred-muted text-lg leading-relaxed">
              the platform allows you to manage multiple credit cards, track
              your spending, and get a detailed analysis of your credit score.
              members with high credit scores get access to even more exclusive
              perks and privileges.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="neopop-btn text-sm px-8 py-4">
                JOIN THE CLUB
              </button>
              <button className="neopop-btn-outline text-sm px-8 py-4">
                LEARN MORE
              </button>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8 text-center hover:bg-white/[0.04] transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-white/40 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-cred-muted mt-2 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Manifesto Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center max-w-4xl mx-auto"
        >
          <div className="text-6xl text-cred-border font-serif mb-6">&ldquo;</div>
          <blockquote className="text-2xl md:text-3xl font-light text-white/80 leading-relaxed">
            we believe that people who have been responsible with credit
            deserve to be celebrated, not ignored. CRED exists to reward
            trust and build a community of the creditworthy.
          </blockquote>
          <div className="mt-8">
            <div className="text-white font-semibold">Kunal Shah</div>
            <div className="text-cred-muted text-sm mt-1">Founder, CRED</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
