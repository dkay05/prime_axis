import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CryptoPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Crypto Trading</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Trade Cryptocurrencies
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Trade Bitcoin, Ethereum, and 20+ cryptocurrencies 24/7 with tight spreads and secure custody.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-500/30 transition-all">
              <div className="text-3xl mb-3">₿</div>
              <h3 className="text-xl font-bold text-white mb-2">Bitcoin</h3>
              <p className="text-zinc-400 text-sm mb-3">BTC/USD</p>
              <p className="text-zinc-500 text-xs">The original cryptocurrency</p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-500/30 transition-all">
              <div className="text-3xl mb-3">Ξ</div>
              <h3 className="text-xl font-bold text-white mb-2">Ethereum</h3>
              <p className="text-zinc-400 text-sm mb-3">ETH/USD</p>
              <p className="text-zinc-500 text-xs">Smart contract platform</p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-500/30 transition-all">
              <div className="text-3xl mb-3">◎</div>
              <h3 className="text-xl font-bold text-white mb-2">Ripple</h3>
              <p className="text-zinc-400 text-sm mb-3">XRP/USD</p>
              <p className="text-zinc-500 text-xs">Fast payment network</p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-gold-500/30 transition-all">
              <div className="text-3xl mb-3">Ł</div>
              <h3 className="text-xl font-bold text-white mb-2">Litecoin</h3>
              <p className="text-zinc-400 text-sm mb-3">LTC/USD</p>
              <p className="text-zinc-500 text-xs">Silver to Bitcoin's gold</p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Trade Crypto with Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
                <p className="text-zinc-400 text-sm">Trading Available</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">20+</div>
                <p className="text-zinc-400 text-sm">Crypto Pairs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">0%</div>
                <p className="text-zinc-400 text-sm">Commission</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Start Trading Crypto
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
