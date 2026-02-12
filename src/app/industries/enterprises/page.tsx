import PageLayout from "@/components/PageLayout";
import { Building2, CheckCircle } from "lucide-react";

export default function EnterprisesPage() {
  const features = [
    "Complex systems & integrations",
    "Enterprise-grade security & compliance",
    "Multi-department collaboration tools",
    "Custom ERP & workflow systems",
    "Data analytics & business intelligence",
    "Dedicated project management",
  ];

  return (
    <PageLayout
      title="Enterprises"
      subtitle="Complex systems & integrations. We deliver enterprise-grade solutions that handle the scale and complexity of large organizations."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Building2 className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Enterprise Digital Transformation</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Large organizations face unique challenges — legacy systems, complex workflows, and strict compliance requirements. We help enterprises modernize their technology stack and implement solutions that drive efficiency at scale.
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
          <h3 className="text-xl font-semibold text-white mb-6">Enterprise Services</h3>
          <div className="space-y-4">
            {[
              { title: "Digital Transformation", desc: "Modernize legacy systems and processes" },
              { title: "System Integration", desc: "Connect disparate systems seamlessly" },
              { title: "Data Platform", desc: "Unified data analytics and BI solutions" },
              { title: "Compliance", desc: "Meet industry regulations and standards" },
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
