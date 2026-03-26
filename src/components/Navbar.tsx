"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  DollarSign,
  TrendingUp,
  BarChart3,
  Bitcoin,
  LineChart,
  Monitor,
  Globe,
  Smartphone,
  UserPlus,
  PlayCircle,
  Briefcase,
  Calendar,
  Bell,
  Newspaper,
  BookOpen,
  Video,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import brandLogo from "@/assets/primeaxis-logo.png";
import SignInDialog from "./SignInDialog";

const marketsItems = [
  { icon: DollarSign, label: "Forex", href: "/markets/forex", desc: "Trade major, minor & exotic currency pairs" },
  { icon: TrendingUp, label: "Commodities", href: "/markets/commodities", desc: "Gold, silver, oil & agricultural products" },
  { icon: BarChart3, label: "Indices", href: "/markets/indices", desc: "Global stock market indices" },
  { icon: Bitcoin, label: "Crypto", href: "/markets/crypto", desc: "Bitcoin, Ethereum & top cryptocurrencies" },
  { icon: LineChart, label: "Stocks", href: "/markets/stocks", desc: "Trade shares of leading companies" },
];

const tradeItems = [
  { icon: Monitor, label: "Trading Platform", href: "/trade/platform", desc: "Advanced charting & analysis tools" },
  { icon: Globe, label: "Web Trader", href: "/trade/web-trader", desc: "Trade directly from your browser" },
  { icon: Smartphone, label: "Mobile Trading", href: "/trade/mobile", desc: "iOS & Android trading apps" },
];

const accountsItems = [
  { icon: UserPlus, label: "Open Account", href: "/accounts/open", desc: "Start trading in minutes" },
  { icon: PlayCircle, label: "Demo Account", href: "/accounts/demo", desc: "Practice with virtual funds" },
  { icon: Briefcase, label: "Account Types", href: "/accounts/types", desc: "Basic, Standard & Pro accounts" },
];

const toolsItems = [
  { icon: Calendar, label: "Economic Calendar", href: "/tools/calendar", desc: "Track market-moving events" },
  { icon: Bell, label: "Trading Signals", href: "/tools/signals", desc: "Expert trade recommendations" },
  { icon: Newspaper, label: "Market News", href: "/tools/news", desc: "Real-time market updates" },
];

const learnItems = [
  { icon: BookOpen, label: "Forex Basics", href: "/learn/basics", desc: "Start your trading journey" },
  { icon: GraduationCap, label: "Trading Guide", href: "/learn/guide", desc: "Comprehensive trading strategies" },
  { icon: Video, label: "Video Tutorials", href: "/learn/videos", desc: "Learn through video lessons" },
];

type DropdownKey = "markets" | "trade" | "accounts" | "tools" | "learn" | null;

interface DropdownConfig {
  key: DropdownKey;
  label: string;
  items: { icon: React.ComponentType<{ className?: string }>; label: string; href: string; desc: string }[];
}

const dropdowns: DropdownConfig[] = [
  { key: "markets", label: "Markets", items: marketsItems },
  { key: "trade", label: "Trade", items: tradeItems },
  { key: "accounts", label: "Accounts", items: accountsItems },
  { key: "tools", label: "Tools", items: toolsItems },
  { key: "learn", label: "Learn", items: learnItems },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileAccordion, setMobileAccordion] = useState<DropdownKey>(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (key: DropdownKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleMobileAccordion = (key: DropdownKey) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cred-black/95 backdrop-blur-md border-b border-cred-border/50 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src={brandLogo} alt="PrimeAxis" width={160} height={40} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {/* Home Link */}
            <a
              href="/"
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              Home
            </a>

            {/* Dropdown Menus */}
            {dropdowns.map((dropdown) => (
              <div key={dropdown.key} className="relative">
                <button
                  onMouseEnter={() => handleMouseEnter(dropdown.key)}
                  onClick={() => setActiveDropdown(activeDropdown === dropdown.key ? null : dropdown.key)}
                  className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                    activeDropdown === dropdown.key
                      ? "text-white bg-white/5"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {dropdown.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === dropdown.key ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === dropdown.key && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      onMouseEnter={() => handleMouseEnter(dropdown.key)}
                      onMouseLeave={handleMouseLeave}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[380px] rounded-xl border border-zinc-800 bg-zinc-900 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden"
                    >
                      <div className="p-2">
                        {dropdown.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3.5 px-3.5 py-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors mt-0.5">
                              <item.icon className="w-4 h-4 text-gold-400" />
                            </div>
                            <div>
                              <div className="text-white text-sm font-medium group-hover:text-gold-400 transition-colors">
                                {item.label}
                              </div>
                              <div className="text-zinc-300 text-xs mt-0.5 leading-relaxed">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
            <button onClick={() => setShowSignIn(true)} className="bg-gold-600 hover:bg-gold-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 hover:shadow-gold-500/30">
              Start Trading
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-cred-black/98 backdrop-blur-md border-t border-cred-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
              {/* Home Link */}
              <a
                href="/"
                className="block text-zinc-300 hover:text-white text-sm font-medium transition-colors py-3 border-b border-zinc-800/50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>

              {/* Accordion Dropdowns */}
              {dropdowns.map((dropdown) => (
                <div key={dropdown.key} className="border-b border-zinc-800/50 last:border-0">
                  <button
                    onClick={() => toggleMobileAccordion(dropdown.key)}
                    className="flex items-center justify-between w-full text-zinc-300 hover:text-white text-sm font-medium transition-colors py-3"
                  >
                    {dropdown.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileAccordion === dropdown.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === dropdown.key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-3 space-y-0.5 border-l-2 border-gold-500/30 ml-2">
                          {dropdown.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 text-zinc-400 hover:text-white text-sm py-2.5 transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setMobileAccordion(null);
                              }}
                            >
                              <item.icon className="w-4 h-4 text-gold-400/70" />
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-4 border-t border-cred-border">
                <button onClick={() => { setShowSignIn(true); setIsOpen(false); }} className="bg-gold-600 hover:bg-gold-500 text-white text-sm font-semibold px-6 py-3.5 rounded-lg w-full transition-all shadow-lg shadow-gold-600/20">
                  Start Trading
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

    <SignInDialog isOpen={showSignIn} onClose={() => setShowSignIn(false)} />
    </>
  );
}
