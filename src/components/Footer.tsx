"use client";

import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-8 overflow-hidden border-t border-zinc-800/50 bg-zinc-950">
      {/* Subtle gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-start gap-14 mb-16">
          {/* Left - Brand & Address */}
          <div className="max-w-sm">
            <div className="mb-5">
              <Image src="/logo.png" alt="SetupFX24" width={140} height={36} className="h-9 w-auto" />
            </div>
            <p className="text-white font-semibold text-sm mb-2">SetupFX Softtech (OPC) Private Limited</p>
            <div className="flex items-start gap-2.5 mb-5">
              <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-zinc-400 text-xs leading-relaxed">
                Office 9364hn 3 Fitzroy Place, Area 1/1, Sauchiehall Street, Glasgow City Centre, United Kingdom, G3 7RH
              </p>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Global software development and digital marketing company powering brokerages and businesses worldwide.
            </p>
          </div>

          {/* Right - Contact */}
          <div className="flex-shrink-0">
            <h4 className="text-white font-semibold text-sm mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:setupfx24@gmail.com" className="flex items-center gap-3 text-zinc-400 text-sm hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  setupfx24@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/19082280305" className="flex items-center gap-3 text-zinc-400 text-sm hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                  </div>
                  WhatsApp: +1 (908) 228-0305
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
            &copy; {new Date().getFullYear()} SetupFX24. All rights reserved.
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
