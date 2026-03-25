import PageLayout from "@/components/PageLayout";
import { Rocket, CheckCircle } from "lucide-react";

export default function StartupsPage() {
  const features = [
    "MVP development & rapid prototyping",
    "Lean startup methodology",
    "Scalable architecture from day one",
    "Investor-ready product demos",
    "Growth hacking & user acquisition",
    "Flexible engagement models",
  ];

  return (
    <PageLayout
      title="Startups"
      subtitle="MVP development & rapid scaling. We help startups go from idea to market-ready product in record time."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
            <Rocket className="w-7 h-7 text-gold-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Launch Faster, Scale Smarter</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            We understand the startup world — speed matters, budgets are tight, and every decision counts. Our team helps you build MVPs quickly, validate ideas, and scale when you are ready, all without breaking the bank.
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
          <h3 className="text-xl font-semibold text-white mb-6">Startup Services</h3>
          <div className="space-y-4">
            {[
              { title: "MVP Development", desc: "Build and launch your product in weeks" },
              { title: "Product Design", desc: "User-centric design that attracts investors" },
              { title: "Technical Co-Founder", desc: "CTO-level guidance for your tech stack" },
              { title: "Growth Strategy", desc: "Data-driven user acquisition plans" },
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
