import PageLayout from "@/components/PageLayout";
import { Cpu, CheckCircle } from "lucide-react";

export default function BusinessAutomationPage() {
  const features = [
    "Workflow automation & optimization",
    "Document management systems",
    "Automated reporting & analytics",
    "Email & notification automation",
    "Invoice & billing automation",
    "Custom API integrations",
  ];

  return (
    <PageLayout
      title="Business Automation"
      subtitle="Automate workflows and boost efficiency. We help businesses eliminate manual processes and focus on what matters most."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
            <Cpu className="w-7 h-7 text-gold-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Automate & Scale</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Manual processes slow your business down. We identify bottlenecks and implement automation solutions that save time, reduce errors, and allow your team to focus on high-value tasks that drive growth.
          </p>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Automation Areas</h3>
          <div className="space-y-4">
            {[
              { title: "Sales Automation", desc: "Automate lead nurturing and follow-ups" },
              { title: "HR Automation", desc: "Streamline hiring, onboarding, and payroll" },
              { title: "Finance Automation", desc: "Automated invoicing, billing, and reporting" },
              { title: "Operations", desc: "Optimize supply chain and inventory management" },
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
