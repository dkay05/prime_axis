import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CommoditiesPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Commodities Trading</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Trade Commodities
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Trade gold, silver, oil, and agricultural products with competitive spreads and flexible leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-xl font-bold text-white mb-3">Precious Metals</h3>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>• Gold (XAU/USD)</li>
                <li>• Silver (XAG/USD)</li>
                <li>• Platinum</li>
                <li>• Palladium</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-xl font-bold text-white mb-3">Energy</h3>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>• Crude Oil (WTI)</li>
                <li>• Brent Oil</li>
                <li>• Natural Gas</li>
                <li>• Heating Oil</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-xl font-bold text-white mb-3">Agricultural</h3>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>• Wheat</li>
                <li>• Corn</li>
                <li>• Soybeans</li>
                <li>• Coffee</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-xl font-bold text-white mb-3">Base Metals</h3>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>• Copper</li>
                <li>• Aluminum</li>
                <li>• Zinc</li>
                <li>• Nickel</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Start Trading Commodities
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
