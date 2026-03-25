import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ForexPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Forex Trading</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Trade Forex Markets
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Access 70+ currency pairs with tight spreads from 0.0 pips. Trade major, minor, and exotic pairs 24/5.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Major Pairs</h3>
              <p className="text-zinc-400 mb-4">EUR/USD, GBP/USD, USD/JPY, USD/CHF</p>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>• Tightest spreads</li>
                <li>• High liquidity</li>
                <li>• 24/5 trading</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Minor Pairs</h3>
              <p className="text-zinc-400 mb-4">EUR/GBP, EUR/AUD, GBP/JPY, AUD/NZD</p>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>• Competitive spreads</li>
                <li>• Good volatility</li>
                <li>• Cross-currency pairs</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Exotic Pairs</h3>
              <p className="text-zinc-400 mb-4">USD/TRY, EUR/ZAR, USD/MXN, GBP/SGD</p>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>• Higher volatility</li>
                <li>• Emerging markets</li>
                <li>• Unique opportunities</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Start Trading Forex
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
