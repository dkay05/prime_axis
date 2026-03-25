import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EconomicCalendarPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Trading Tools</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Economic Calendar
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Stay ahead of market-moving events. Track central bank decisions, employment data, GDP releases, and more.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">Key Features</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Real-Time Updates</h4>
                    <p className="text-zinc-400 text-sm">Instant notifications for breaking economic news</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Impact Indicators</h4>
                    <p className="text-zinc-400 text-sm">High, medium, and low impact event classification</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Historical Data</h4>
                    <p className="text-zinc-400 text-sm">Compare current vs previous data releases</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Custom Alerts</h4>
                    <p className="text-zinc-400 text-sm">Set notifications for specific events</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Multi-Timezone</h4>
                    <p className="text-zinc-400 text-sm">View events in your local time zone</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Filter Options</h4>
                    <p className="text-zinc-400 text-sm">Filter by country, impact level, or event type</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Track Important Events</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🏦</div>
                <p className="text-zinc-300 text-sm">Central Bank Decisions</p>
              </div>
              <div>
                <div className="text-2xl mb-2">💼</div>
                <p className="text-zinc-300 text-sm">Employment Reports</p>
              </div>
              <div>
                <div className="text-2xl mb-2">📈</div>
                <p className="text-zinc-300 text-sm">GDP Releases</p>
              </div>
              <div>
                <div className="text-2xl mb-2">💰</div>
                <p className="text-zinc-300 text-sm">Inflation Data</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Access Calendar
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
