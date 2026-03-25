import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TradingPlatformPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Desktop Platform</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Advanced Trading Platform
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Professional-grade desktop platform with advanced charting, technical analysis, and automated trading capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Charting</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  100+ technical indicators
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Multiple timeframes
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Drawing tools & patterns
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Customizable layouts
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Trading Features</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  One-click trading
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Automated trading (EA)
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Real-time market data
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Advanced order types
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Platform Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">&lt;12ms</div>
                <p className="text-zinc-400">Execution Speed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">99.9%</div>
                <p className="text-zinc-400">Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
                <p className="text-zinc-400">Technical Support</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm mr-4">
              Download Platform
            </a>
            <a href="/accounts/demo" className="inline-block border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-white/5">
              Try Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
