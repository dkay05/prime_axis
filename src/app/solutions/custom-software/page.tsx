import PageLayout from "@/components/PageLayout";
import { Settings, CheckCircle } from "lucide-react";

export default function CustomSoftwarePage() {
  const features = [
    "Bespoke software for unique business challenges",
    "Microservices & modular architecture",
    "Cloud-native development",
    "Legacy system modernization",
    "Data migration & system integration",
    "24/7 monitoring & support",
  ];

  return (
    <PageLayout
      title="Custom Software Solutions"
      subtitle="Bespoke software for unique challenges. We design and build custom software that perfectly fits your business requirements."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
            <Settings className="w-7 h-7 text-gold-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Tailored Software Solutions</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Off-the-shelf software does not always fit. We build custom solutions from the ground up, designed specifically for your workflows, processes, and goals. Our solutions grow with your business and adapt to changing needs.
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
          <h3 className="text-xl font-semibold text-white mb-6">Solution Areas</h3>
          <div className="space-y-4">
            {[
              { title: "Process Automation", desc: "Streamline operations with custom workflows" },
              { title: "Data Management", desc: "Centralized data systems with real-time access" },
              { title: "Integration Hub", desc: "Connect all your tools and platforms seamlessly" },
              { title: "Legacy Modernization", desc: "Upgrade outdated systems to modern tech" },
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
