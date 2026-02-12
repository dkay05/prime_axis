"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Search, Megaphone, Share2, FileText } from "lucide-react";

const tabs = [
  {
    id: "strategy",
    icon: Target,
    label: "Marketing Strategy",
    title: "Data-Driven Marketing Strategy",
    description: "We craft comprehensive marketing strategies backed by data and market research. From audience analysis to campaign planning, we build roadmaps that align with your business goals and deliver measurable ROI.",
    features: ["Market research & competitor analysis", "Target audience identification", "Multi-channel campaign planning", "KPI setting & performance tracking", "Quarterly strategy reviews & optimization"],
    metric: { label: "Avg. ROI Increase", value: "+340%", sub: "for our clients" },
  },
  {
    id: "seo",
    icon: Search,
    label: "SEO",
    title: "Search Engine Optimization (SEO)",
    description: "Dominate search results with our proven SEO strategies. We optimize your website for both search engines and users, driving organic traffic that converts into customers.",
    features: ["Technical SEO audit & optimization", "Keyword research & content strategy", "On-page & off-page SEO", "Local SEO & Google Business Profile", "Monthly reporting & rank tracking"],
    metric: { label: "Avg. Organic Growth", value: "+180%", sub: "within 6 months" },
  },
  {
    id: "ads",
    icon: Megaphone,
    label: "Paid Ads",
    title: "Paid Advertising (Google & Social)",
    description: "Maximize your ad spend with expertly managed campaigns across Google Ads, Facebook, Instagram, LinkedIn, and more. We focus on high-intent audiences to drive quality leads and conversions.",
    features: ["Google Ads (Search, Display, Shopping)", "Facebook & Instagram Ads", "LinkedIn Ads for B2B", "Retargeting & lookalike audiences", "A/B testing & conversion optimization"],
    metric: { label: "Avg. ROAS", value: "5.2x", sub: "return on ad spend" },
  },
  {
    id: "social",
    icon: Share2,
    label: "Social Media",
    title: "Social Media Marketing",
    description: "Build a powerful brand presence across all major social platforms. We create engaging content, manage communities, and run campaigns that grow your audience and drive engagement.",
    features: ["Content calendar & strategy", "Community management & engagement", "Influencer partnership management", "Social listening & brand monitoring", "Performance analytics & reporting"],
    metric: { label: "Avg. Engagement", value: "+250%", sub: "growth rate" },
  },
  {
    id: "content",
    icon: FileText,
    label: "Content Marketing",
    title: "Content Marketing",
    description: "Attract, engage, and convert your audience with high-quality content. From blog posts and whitepapers to video scripts and email campaigns, we create content that drives results.",
    features: ["Blog writing & thought leadership", "Email marketing & automation", "Video content strategy", "Whitepaper & case study creation", "Content distribution & promotion"],
    metric: { label: "Avg. Lead Growth", value: "+200%", sub: "through content" },
  },
];

export default function CoreProducts() {
  const [activeTab, setActiveTab] = useState("strategy");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="marketing" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">Digital Marketing</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Grow Your Business Online
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Data-driven marketing strategies that attract, engage, and convert your ideal customers.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{active.title}</h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">{active.description}</p>
              <ul className="mt-6 space-y-3">
                {active.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20 text-sm">
                Get Free Consultation
              </a>
            </div>

            {/* Visual - Marketing Metrics Card */}
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/80 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-zinc-800 rounded px-3 py-1 text-[10px] text-zinc-500 text-center">
                    {active.label} — Analytics Dashboard
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-5">
                {/* Big Metric */}
                <div className="text-center py-6 bg-zinc-800/30 rounded-xl border border-zinc-700/30">
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{active.metric.label}</div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
                    {active.metric.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-2">{active.metric.sub}</div>
                </div>
                {/* Mini chart */}
                <div className="h-28 bg-zinc-800/50 rounded-lg relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 110" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`mktGrad-${activeTab}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.25)" />
                        <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0,90 Q50,85 100,70 T200,50 T300,25 T400,15" fill="none" stroke="#3b82f6" strokeWidth="2" />
                    <path d="M0,90 Q50,85 100,70 T200,50 T300,25 T400,15 L400,110 L0,110 Z" fill={`url(#mktGrad-${activeTab})`} />
                  </svg>
                  <div className="absolute top-3 left-3 text-[10px] text-zinc-500">Performance Over Time</div>
                  <div className="absolute top-3 right-3 text-[10px] text-green-400 font-mono">Trending Up</div>
                </div>
                {/* Bottom metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {["Impressions", "Clicks", "Conversions"].map((label, i) => (
                    <div key={label} className="bg-zinc-800/50 rounded-lg px-3 py-2.5 text-center">
                      <div className="text-[9px] text-zinc-500">{label}</div>
                      <div className="text-sm text-white font-semibold mt-1">
                        {i === 0 ? "1.2M" : i === 1 ? "84K" : "12.4K"}
                      </div>
                      <div className="text-[9px] text-green-400 mt-0.5">
                        +{20 + i * 15}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
