import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function StocksPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Stock Trading</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Trade Global Stocks
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Trade shares of 1000+ leading companies with zero commission and fractional shares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Tech Giants</h3>
              <ul className="space-y-3 text-zinc-300">
                <li>• Apple (AAPL)</li>
                <li>• Microsoft (MSFT)</li>
                <li>• Amazon (AMZN)</li>
                <li>• Google (GOOGL)</li>
                <li>• Tesla (TSLA)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Financial Sector</h3>
              <ul className="space-y-3 text-zinc-300">
                <li>• JPMorgan (JPM)</li>
                <li>• Bank of America (BAC)</li>
                <li>• Goldman Sachs (GS)</li>
                <li>• Visa (V)</li>
                <li>• Mastercard (MA)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Consumer Brands</h3>
              <ul className="space-y-3 text-zinc-300">
                <li>• Coca-Cola (KO)</li>
                <li>• Nike (NKE)</li>
                <li>• McDonald's (MCD)</li>
                <li>• Walmart (WMT)</li>
                <li>• Disney (DIS)</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Stock Trading Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">Zero Commission</div>
                <p className="text-zinc-400 text-sm">No trading fees</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">Fractional Shares</div>
                <p className="text-zinc-400 text-sm">Start with any amount</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">Real-Time Quotes</div>
                <p className="text-zinc-400 text-sm">Live market data</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">1000+ Stocks</div>
                <p className="text-zinc-400 text-sm">Global companies</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Start Trading Stocks
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
