import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ForexBasicsPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Education</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Forex Trading Basics
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
              Start your trading journey with our beginner-friendly guide. Learn the fundamentals of forex trading and market terminology.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">📚 What is Forex Trading?</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Forex (foreign exchange) is the global marketplace for trading currencies. It's the largest financial market in the world with over $6 trillion traded daily.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                When you trade forex, you're simultaneously buying one currency and selling another. Currencies are traded in pairs, like EUR/USD or GBP/JPY.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">💱 Currency Pairs Explained</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Major Pairs</h4>
                  <p className="text-zinc-400 text-sm">Most traded pairs involving USD: EUR/USD, GBP/USD, USD/JPY</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Minor Pairs</h4>
                  <p className="text-zinc-400 text-sm">Cross-currency pairs without USD: EUR/GBP, GBP/JPY, EUR/AUD</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Exotic Pairs</h4>
                  <p className="text-zinc-400 text-sm">Pairs with emerging market currencies: USD/TRY, EUR/ZAR</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">📊 Understanding Pips & Lots</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Pip (Point in Percentage)</h4>
                  <p className="text-zinc-400 text-sm mb-2">The smallest price move in forex trading. For most pairs, 1 pip = 0.0001</p>
                  <p className="text-zinc-300 text-sm">Example: EUR/USD moves from 1.1850 to 1.1851 = 1 pip</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Lot Sizes</h4>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• Standard Lot = 100,000 units</li>
                    <li>• Mini Lot = 10,000 units</li>
                    <li>• Micro Lot = 1,000 units</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">🕐 Market Sessions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Asian Session</h4>
                  <p className="text-zinc-400 text-sm">Tokyo: 12:00 AM - 9:00 AM GMT</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">European Session</h4>
                  <p className="text-zinc-400 text-sm">London: 8:00 AM - 5:00 PM GMT</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">US Session</h4>
                  <p className="text-zinc-400 text-sm">New York: 1:00 PM - 10:00 PM GMT</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Best Trading Times</h4>
                  <p className="text-zinc-400 text-sm">London-NY overlap: Highest liquidity</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/learn/guide" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm mr-4">
              Next: Trading Guide
            </a>
            <a href="/accounts/demo" className="inline-block border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-white/5">
              Practice with Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
