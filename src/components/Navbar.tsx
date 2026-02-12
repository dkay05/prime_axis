"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Globe,
  Smartphone,
  Database,
  Palette,
  Target,
  Search,
  Megaphone,
  Share2,
  FileText,
  Layers,
  Users,
  TrendingUp,
  Copy,
  ArrowLeftRight,
  Droplets,
  Plug,
  Shield,
  Workflow,
  Tag,
  BookOpen,
  FolderKanban,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SignInDialog from "./SignInDialog";

const servicesItems = [
  { icon: Code2, label: "Software Development", href: "/services/software-development", desc: "Custom software tailored to your business needs" },
  { icon: Globe, label: "Web Application Development", href: "/services/web-application-development", desc: "Scalable, responsive web apps with modern stacks" },
  { icon: Smartphone, label: "Mobile App Development", href: "/services/mobile-app-development", desc: "Native & cross-platform mobile solutions" },
  { icon: Database, label: "CRM & Business Systems", href: "/services/crm-business-systems", desc: "Custom CRM, ERP & admin panel development" },
  { icon: Palette, label: "UI / UX Design", href: "/services/ui-ux-design", desc: "User-centered design that converts & delights" },
];

const marketingItems = [
  { icon: Target, label: "Marketing Strategy", href: "/marketing/strategy", desc: "Data-driven strategies for measurable growth" },
  { icon: Search, label: "Search Engine Optimization", href: "/marketing/seo", desc: "Rank higher and drive organic traffic" },
  { icon: Megaphone, label: "Paid Advertising", href: "/marketing/paid-advertising", desc: "Google Ads & social media campaigns" },
  { icon: Share2, label: "Social Media Marketing", href: "/marketing/social-media", desc: "Build brand presence across platforms" },
  { icon: FileText, label: "Content Marketing", href: "/marketing/content-marketing", desc: "Engaging content that drives engagement" },
];

const solutionsItems = [
  { icon: Layers, label: "White Label Solution", href: "/solutions/white-label", desc: "Launch your own branded trading platform" },
  { icon: Users, label: "IB Management", href: "/solutions/ib-management", desc: "Introducing broker management system" },
  { icon: TrendingUp, label: "Prop Trading", href: "/solutions/prop-trading", desc: "Proprietary trading platform & tools" },
  { icon: Copy, label: "Copy Trading", href: "/solutions/copy-trading", desc: "Social & copy trading infrastructure" },
  { icon: ArrowLeftRight, label: "Advanced Order Exchange", href: "/solutions/advance-order-exchange", desc: "High-performance order matching engine" },
  { icon: Tag, label: "Grey Label Platform", href: "/solutions/grey-label", desc: "Cost-effective semi-branded trading platform" },
];

const liquidityItems = [
  { icon: Plug, label: "Client Liquidity Integration", href: "/liquidity#client-integration", desc: "Connect your existing liquidity provider" },
  { icon: Droplets, label: "SetupFX Liquidity Provider", href: "/liquidity#setupfx-liquidity", desc: "Multi-asset deep liquidity from SetupFX" },
  { icon: Shield, label: "A-Book & B-Book Support", href: "/liquidity#ab-book", desc: "Smart order routing & risk management" },
  { icon: Workflow, label: "Platform Compatibility", href: "/liquidity#compatibility", desc: "Works with all trading platforms" },
];

const resourcesItems = [
  { icon: BookOpen, label: "Blog", href: "/resources/blog", desc: "Insights, tips & industry trends" },
  { icon: FolderKanban, label: "Case Studies", href: "/resources/case-studies", desc: "Real results from real clients" },
  { icon: HelpCircle, label: "FAQs", href: "/resources/faqs", desc: "Answers to common questions" },
];

type DropdownKey = "services" | "marketing" | "solutions" | "liquidity" | "resources" | null;

interface DropdownConfig {
  key: DropdownKey;
  label: string;
  items: { icon: React.ComponentType<{ className?: string }>; label: string; href: string; desc: string }[];
  footerLink?: { label: string; href: string };
}

const dropdowns: DropdownConfig[] = [
  { key: "services", label: "Services", items: servicesItems, footerLink: { label: "View all services", href: "/services/software-development" } },
  { key: "marketing", label: "Digital Marketing", items: marketingItems, footerLink: { label: "View all marketing services", href: "/marketing/strategy" } },
  { key: "solutions", label: "Solutions", items: solutionsItems, footerLink: { label: "View all solutions", href: "/solutions/custom-software" } },
  { key: "liquidity", label: "Liquidity", items: liquidityItems, footerLink: { label: "View liquidity solutions", href: "/liquidity" } },
  { key: "resources", label: "Resources", items: resourcesItems },
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
            <Image src="/logo.png" alt="SetupFX24" width={160} height={40} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
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
                            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors mt-0.5">
                              <item.icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                              <div className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">
                                {item.label}
                              </div>
                              <div className="text-zinc-300 text-xs mt-0.5 leading-relaxed">
                                {item.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      {dropdown.footerLink && (
                        <div className="border-t border-zinc-800 px-5 py-3 bg-zinc-950/50">
                          <a
                            href={dropdown.footerLink.href}
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
                          >
                            {dropdown.footerLink.label} →
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Pricing */}
            <a
              href="/pricing"
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              Pricing
            </a>

            {/* Contact */}
            <a
              href="/contact"
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              Contact
            </a>
          </div>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
            <button onClick={() => setShowSignIn(true)} className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30">
              Get Free Consultation
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
                        <div className="pl-4 pb-3 space-y-0.5 border-l-2 border-blue-500/30 ml-2">
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
                              <item.icon className="w-4 h-4 text-blue-400/70" />
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Pricing */}
              <a
                href="/pricing"
                className="block text-zinc-300 hover:text-white text-sm font-medium transition-colors py-3"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>

              {/* Contact */}
              <a
                href="/contact"
                className="block text-zinc-300 hover:text-white text-sm font-medium transition-colors py-3"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              <div className="pt-4 border-t border-cred-border">
                <button onClick={() => { setShowSignIn(true); setIsOpen(false); }} className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-3.5 rounded-lg w-full transition-all shadow-lg shadow-blue-600/20">
                  Get Free Consultation
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
