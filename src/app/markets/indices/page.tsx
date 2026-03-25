import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IndicesPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Indices Trading</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Trade Global Indices
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Trade the world's leading stock market indices with low margins and extended trading hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">US Indices</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  S&P 500 (US500)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Dow Jones (US30)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  NASDAQ 100 (NAS100)
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">European Indices</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  FTSE 100 (UK100)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  DAX 40 (GER40)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  CAC 40 (FRA40)
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Asian Indices</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Nikkei 225 (JPN225)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Hang Seng (HK50)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  ASX 200 (AUS200)
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Start Trading Indices
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
