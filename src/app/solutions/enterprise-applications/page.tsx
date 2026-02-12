import PageLayout from "@/components/PageLayout";
import { Building2, CheckCircle } from "lucide-react";

export default function EnterpriseApplicationsPage() {
  const features = [
    "Large-scale enterprise-grade systems",
    "High availability & fault tolerance",
    "Microservices architecture",
    "Enterprise security & compliance",
    "Multi-region deployment",
    "Dedicated support & SLA",
  ];

  return (
    <PageLayout
      title="Enterprise Applications"
      subtitle="Large-scale enterprise-grade systems. We build mission-critical applications that handle complex business requirements at scale."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Building2 className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Solutions</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            We specialize in building large-scale applications that meet the demanding requirements of enterprise organizations. Our solutions are designed for high performance, security, and reliability at scale.
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
          <h3 className="text-xl font-semibold text-white mb-6">Enterprise Capabilities</h3>
          <div className="space-y-4">
            {[
              { title: "Scalability", desc: "Handle millions of users and transactions" },
              { title: "Security", desc: "Enterprise-grade encryption and compliance" },
              { title: "Integration", desc: "Connect with existing enterprise systems" },
              { title: "Support", desc: "Dedicated team with guaranteed SLA" },
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
