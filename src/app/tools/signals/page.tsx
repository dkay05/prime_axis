import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TradingSignalsPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Trading Tools</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Trading Signals
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Receive expert trade recommendations based on technical analysis. Get entry, exit, and stop-loss levels for major instruments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Daily Signals</h3>
              <p className="text-zinc-400 mb-6">Fresh trading ideas every day</p>
              <ul className="space-y-3 text-zinc-300 text-sm">
                <li>• 5-10 signals per day</li>
                <li>• Major currency pairs</li>
                <li>• Commodities & indices</li>
                <li>• SMS & email delivery</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Technical Analysis</h3>
              <p className="text-zinc-400 mb-6">Based on proven strategies</p>
              <ul className="space-y-3 text-zinc-300 text-sm">
                <li>• Chart pattern analysis</li>
                <li>• Support & resistance</li>
                <li>• Trend identification</li>
                <li>• Multiple timeframes</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Risk Management</h3>
              <p className="text-zinc-400 mb-6">Clear risk-reward ratios</p>
              <ul className="space-y-3 text-zinc-300 text-sm">
                <li>• Entry price levels</li>
                <li>• Stop-loss placement</li>
                <li>• Take-profit targets</li>
                <li>• Position sizing advice</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Signal Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">75%</div>
                <p className="text-zinc-400 text-sm">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">1:2</div>
                <p className="text-zinc-400 text-sm">Avg Risk/Reward</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">50+</div>
                <p className="text-zinc-400 text-sm">Pips/Week</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">24/5</div>
                <p className="text-zinc-400 text-sm">Coverage</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Get Trading Signals
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
