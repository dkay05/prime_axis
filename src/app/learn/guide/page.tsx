import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TradingGuidePage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Education</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Comprehensive Trading Guide
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
              Master trading strategies and risk management. Learn technical analysis, chart patterns, and develop your own trading plan.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">📈 Technical Analysis Basics</h3>
              <p className="text-zinc-400 mb-4">
                Technical analysis involves studying price charts and patterns to predict future price movements.
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm"><strong>Support & Resistance:</strong> Key price levels where trends pause or reverse</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm"><strong>Trend Lines:</strong> Identify market direction (uptrend, downtrend, sideways)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm"><strong>Candlestick Patterns:</strong> Visual representation of price action</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">📊 Popular Indicators</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Moving Averages</h4>
                  <p className="text-zinc-400 text-sm">Smooth out price data to identify trends</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">RSI (Relative Strength Index)</h4>
                  <p className="text-zinc-400 text-sm">Measure overbought/oversold conditions</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">MACD</h4>
                  <p className="text-zinc-400 text-sm">Trend-following momentum indicator</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Bollinger Bands</h4>
                  <p className="text-zinc-400 text-sm">Measure market volatility</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">🛡️ Risk Management</h3>
              <p className="text-zinc-400 mb-4">
                Proper risk management is crucial for long-term trading success.
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm"><strong>2% Rule:</strong> Never risk more than 2% of your capital on a single trade</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm"><strong>Stop-Loss Orders:</strong> Automatically close losing trades at predetermined levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm"><strong>Risk-Reward Ratio:</strong> Aim for at least 1:2 (risk $1 to make $2)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm"><strong>Position Sizing:</strong> Calculate proper lot size based on account balance</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">📝 Creating a Trading Plan</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">1. Define Your Goals</h4>
                  <p className="text-zinc-400 text-sm">Set realistic profit targets and timeframes</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">2. Choose Your Strategy</h4>
                  <p className="text-zinc-400 text-sm">Day trading, swing trading, or position trading</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">3. Set Entry/Exit Rules</h4>
                  <p className="text-zinc-400 text-sm">Define clear criteria for opening and closing trades</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">4. Keep a Trading Journal</h4>
                  <p className="text-zinc-400 text-sm">Track all trades to learn from successes and mistakes</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">🧠 Trading Psychology</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Control emotions - avoid fear and greed</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Be patient - wait for high-probability setups</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Accept losses - they're part of trading</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <span className="text-sm">Stay disciplined - stick to your trading plan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a href="/learn/videos" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm mr-4">
              Watch Video Tutorials
            </a>
            <a href="/accounts/demo" className="inline-block border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-white/5">
              Practice Trading
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
