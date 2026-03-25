import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VideoTutorialsPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Education</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Video Tutorials
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Learn through step-by-step video lessons. Watch expert traders explain concepts, demonstrate strategies, and analyze live markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-500/30 transition-all">
              <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">▶️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Platform Walkthrough</h3>
              <p className="text-zinc-400 text-sm mb-3">Complete guide to using the trading platform</p>
              <span className="text-xs text-gold-400">Duration: 15 min</span>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-500/30 transition-all">
              <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">▶️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">How to Place Trades</h3>
              <p className="text-zinc-400 text-sm mb-3">Step-by-step guide to executing trades</p>
              <span className="text-xs text-gold-400">Duration: 10 min</span>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-500/30 transition-all">
              <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">▶️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Reading Candlestick Charts</h3>
              <p className="text-zinc-400 text-sm mb-3">Understanding price action and patterns</p>
              <span className="text-xs text-gold-400">Duration: 20 min</span>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-500/30 transition-all">
              <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">▶️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Technical Indicators</h3>
              <p className="text-zinc-400 text-sm mb-3">How to use RSI, MACD, and Moving Averages</p>
              <span className="text-xs text-gold-400">Duration: 25 min</span>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-500/30 transition-all">
              <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">▶️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Risk Management</h3>
              <p className="text-zinc-400 text-sm mb-3">Protecting your capital and managing risk</p>
              <span className="text-xs text-gold-400">Duration: 18 min</span>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-500/30 transition-all">
              <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">▶️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Trading Examples</h3>
              <p className="text-zinc-400 text-sm mb-3">Watch real trades being executed and analyzed</p>
              <span className="text-xs text-gold-400">Duration: 30 min</span>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Learning Paths</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🎓</div>
                <h4 className="text-white font-semibold mb-2">Beginner Course</h4>
                <p className="text-zinc-400 text-sm mb-3">10 videos • 2 hours</p>
                <p className="text-zinc-500 text-xs">Start from basics to first trade</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="text-white font-semibold mb-2">Intermediate Course</h4>
                <p className="text-zinc-400 text-sm mb-3">15 videos • 4 hours</p>
                <p className="text-zinc-500 text-xs">Advanced strategies and analysis</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="text-white font-semibold mb-2">Advanced Course</h4>
                <p className="text-zinc-400 text-sm mb-3">20 videos • 6 hours</p>
                <p className="text-zinc-500 text-xs">Professional trading techniques</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/demo" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm mr-4">
              Start Learning
            </a>
            <a href="/learn/basics" className="inline-block border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-white/5">
              Read Forex Basics
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
