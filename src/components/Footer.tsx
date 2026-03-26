"use client";

import { Mail, MapPin } from "lucide-react";
import brandLogo from "@/assets/primeaxis-logo.png";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-8 overflow-hidden border-t border-zinc-800/50 bg-zinc-950">
      {/* Subtle gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-start gap-14 mb-16">
          {/* Left - Brand & Address */}
          <div className="max-w-sm">
            <div className="mb-5">
              <img
                src={brandLogo.src}
                alt="PrimeAxis"
                width={140}
                height={36}
                className="h-9 w-auto"
                decoding="async"
              />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">PrimeAxis Capital LLC</h3>
            <p className="text-zinc-400 text-sm mb-4">Registration No: 4415 LLC 2026</p>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold text-sm mb-2">Registered Address:</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Suite 450, Beachmont<br />
                Kingstown, SVG<br />
                PO Box 1510
              </p>
            </div>

            <p className="text-zinc-500 text-xs leading-relaxed">
              Professional forex trading platform providing access to global markets with advanced trading tools and secure execution.
            </p>
          </div>

          {/* Right - Contact */}
          <div className="flex-shrink-0">
            <h4 className="text-white font-semibold text-sm mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@primeaxiscapitals.com" className="flex items-center gap-3 text-zinc-400 text-sm hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-gold-400" />
                  </div>
                  support@primeaxiscapitals.com
                </a>
              </li>
                          </ul>
          </div>
        </div>

        {/* Quick Links Row */}
        <div className="border-t border-zinc-800/50 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { label: "Solutions", href: "/solutions/white-label" },
              { label: "Liquidity", href: "/liquidity" },
              { label: "Pricing", href: "/pricing" },
              { label: "Case Studies", href: "/resources/case-studies" },
              { label: "Blog", href: "/resources/blog" },
              { label: "FAQs", href: "/resources/faqs" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-zinc-500 hover:text-white text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} PrimeAxis Capital LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Privacy</a>
            <a href="/" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Terms</a>
            <a href="/" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
