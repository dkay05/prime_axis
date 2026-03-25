"use client";

import { Users } from "lucide-react";
import SolutionPageTemplate from "@/components/SolutionPageTemplate";

export default function IBAdminPage() {
  return (
    <SolutionPageTemplate
      icon={Users}
      badge="IB & Admin"
      title="Multi-Level IB &"
      highlight="Admin Management"
      subtitle="Build and manage a powerful introducing broker network with automated commissions, partner dashboards, and full admin control."
      description="Our IB & Admin system is designed for brokerages that rely on partner networks for client acquisition. Support unlimited IB levels with automatic hierarchy management, flexible commission models, and real-time analytics. Every partner gets their own branded dashboard to track referrals, commissions, and sub-partner performance. Admins get granular role-based access control, audit trails, and comprehensive reporting."
      features={[
        { title: "Multi-Level IB Structure", description: "Unlimited IB levels with automatic hierarchy and inheritance rules." },
        { title: "Flexible Commission Models", description: "Per-lot, spread-based, CPA, revenue share, or custom hybrid models." },
        { title: "Partner Dashboard", description: "Branded self-service portal for each IB to track performance and earnings." },
        { title: "Role-Based Admin Access", description: "Granular permissions for sales, compliance, finance, and operations teams." },
        { title: "Automated Payouts", description: "Scheduled commission payouts with approval workflows and audit trails." },
        { title: "Real-Time Reporting", description: "Live dashboards tracking referrals, conversions, volume, and revenue." },
      ]}
      benefits={[
        "Unlimited IB levels with automatic commission cascading",
        "Each partner gets a branded dashboard under your domain",
        "Flexible commission structures — per lot, CPA, spread, or hybrid",
        "Automated payout scheduling with multi-currency support",
        "Full audit trail for compliance and regulatory requirements",
        "Role-based admin access with granular permission controls",
        "Real-time analytics for partner performance tracking",
        "API access for custom integrations with your existing systems",
      ]}
      mockupContent={
        <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/80 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-500 text-center">IB Partner Portal</div>
            </div>
          </div>
          <div className="p-5 space-y-4">
            <div className="text-xs text-zinc-500">Partner Network Overview</div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Total IBs", value: "342", color: "text-white" },
                { label: "Active Clients", value: "8,920", color: "text-green-400" },
                { label: "Monthly Comm.", value: "$48.2K", color: "text-gold-400" },
              ].map((stat) => (
                <div key={stat.label} className="bg-zinc-800/50 rounded p-3 text-center">
                  <div className="text-[9px] text-zinc-500">{stat.label}</div>
                  <div className={`text-sm font-bold ${stat.color} font-mono mt-0.5`}>{stat.value}</div>
                </div>
              ))}
            </div>
            {/* IB Tree */}
            <div className="bg-zinc-800/30 rounded-lg p-3 space-y-2">
              <div className="text-[10px] text-zinc-500 font-medium mb-2">IB Hierarchy</div>
              {[
                { name: "Master IB — Alpha Partners", level: 0, clients: 120, comm: "$12.4K" },
                { name: "├─ Sub-IB — Beta Group", level: 1, clients: 45, comm: "$4.2K" },
                { name: "│  └─ Sub-IB — Gamma Ltd", level: 2, clients: 18, comm: "$1.1K" },
                { name: "└─ Sub-IB — Delta Trading", level: 1, clients: 67, comm: "$6.8K" },
              ].map((row) => (
                <div key={row.name} className="flex items-center justify-between py-1">
                  <span className="text-[10px] text-zinc-300 font-mono">{row.name}</span>
                  <div className="flex gap-3">
                    <span className="text-[9px] text-zinc-500">{row.clients} clients</span>
                    <span className="text-[9px] text-green-400 font-mono">{row.comm}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}
