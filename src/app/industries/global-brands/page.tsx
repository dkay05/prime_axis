import PageLayout from "@/components/PageLayout";
import { Crown, CheckCircle } from "lucide-react";

export default function GlobalBrandsPage() {
  const features = [
    "World-class digital experiences",
    "Multi-language & multi-region support",
    "Brand consistency across platforms",
    "High-traffic performance optimization",
    "Global CDN & infrastructure",
    "White-glove service & dedicated team",
  ];

  return (
    <PageLayout
      title="Global Brands"
      subtitle="World-class digital experiences. We partner with global brands to create exceptional digital products that reach millions worldwide."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Crown className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Global Digital Excellence</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Global brands need digital partners who understand scale, performance, and brand integrity. We deliver world-class solutions that maintain brand consistency while reaching diverse audiences across multiple markets and languages.
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
          <h3 className="text-xl font-semibold text-white mb-6">Global Capabilities</h3>
          <div className="space-y-4">
            {[
              { title: "Multi-Region", desc: "Deploy across global markets seamlessly" },
              { title: "Localization", desc: "Multi-language support and cultural adaptation" },
              { title: "Performance", desc: "Handle millions of concurrent users" },
              { title: "Brand Governance", desc: "Maintain consistency across all touchpoints" },
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
