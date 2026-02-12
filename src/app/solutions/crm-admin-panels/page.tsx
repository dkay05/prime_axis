import PageLayout from "@/components/PageLayout";
import { LayoutDashboard, CheckCircle } from "lucide-react";

export default function CRMAdminPanelsPage() {
  const features = [
    "Custom admin dashboards",
    "Role-based access control",
    "Real-time data visualization",
    "Client & partner portals",
    "Multi-tenant architecture",
    "Audit logs & compliance tools",
  ];

  return (
    <PageLayout
      title="CRM & Admin Panels"
      subtitle="Centralized management dashboards. We build powerful admin panels and CRM systems that give you complete control over your business operations."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <LayoutDashboard className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Powerful Management Tools</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            We create intuitive admin panels and CRM systems that centralize your business data and operations. Our dashboards provide real-time insights, enabling faster decision-making and improved team productivity.
          </p>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Dashboard Features</h3>
          <div className="space-y-4">
            {[
              { title: "Analytics Dashboard", desc: "Real-time metrics and KPI tracking" },
              { title: "User Management", desc: "Roles, permissions, and access control" },
              { title: "Data Tables", desc: "Sortable, filterable data with export options" },
              { title: "Notifications", desc: "Automated alerts and notification systems" },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                <h4 className="text-white font-medium text-sm">{item.title}</h4>
                <p className="text-zinc-400 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
