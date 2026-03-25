import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MarketNewsPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Trading Tools</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Market News
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Access real-time financial news and market analysis from leading sources. Stay informed about global events affecting your trades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Breaking News</h3>
              <p className="text-zinc-400 mb-6">Real-time market updates</p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Instant alerts for major events</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Central bank announcements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Geopolitical developments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Economic data releases</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Expert Analysis</h3>
              <p className="text-zinc-400 mb-6">Professional market insights</p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Daily market commentary</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Technical analysis reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Fundamental analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Weekly market outlook</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">News Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">💱</div>
                <p className="text-zinc-300 text-sm font-semibold">Forex News</p>
              </div>
              <div>
                <div className="text-2xl mb-2">📊</div>
                <p className="text-zinc-300 text-sm font-semibold">Stock Markets</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🏆</div>
                <p className="text-zinc-300 text-sm font-semibold">Commodities</p>
              </div>
              <div>
                <div className="text-2xl mb-2">₿</div>
                <p className="text-zinc-300 text-sm font-semibold">Cryptocurrency</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Access Market News
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
