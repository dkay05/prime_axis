import PageLayout from "@/components/PageLayout";
import { Building, CheckCircle } from "lucide-react";

export default function SMBPage() {
  const features = [
    "Growth-focused digital solutions",
    "Affordable pricing with flexible plans",
    "Website & e-commerce development",
    "Digital marketing & lead generation",
    "CRM & business process automation",
    "Ongoing support & maintenance",
  ];

  return (
    <PageLayout
      title="Small & Medium Businesses"
      subtitle="Growth-focused digital solutions. We help SMBs compete with larger companies through smart technology and marketing."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
            <Building className="w-7 h-7 text-gold-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Grow Your Business Digitally</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Small and medium businesses need smart, cost-effective solutions to compete in the digital landscape. We provide tailored services that help you attract more customers, streamline operations, and grow revenue.
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
          <h3 className="text-xl font-semibold text-white mb-6">SMB Solutions</h3>
          <div className="space-y-4">
            {[
              { title: "Business Website", desc: "Professional websites that convert visitors" },
              { title: "Online Store", desc: "E-commerce solutions to sell online" },
              { title: "Lead Generation", desc: "Digital marketing to attract new customers" },
              { title: "Business Tools", desc: "CRM and automation to save time" },
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
