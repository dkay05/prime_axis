import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DemoAccountPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Risk-Free Practice</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Demo Trading Account
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
              Practice trading with $10,000 virtual funds. Test strategies, learn the platform, and trade risk-free.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Demo Account Benefits</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">$10,000 Virtual Funds</h4>
                    <p className="text-zinc-400 text-sm">Practice with realistic capital</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Real Market Conditions</h4>
                    <p className="text-zinc-400 text-sm">Live prices and spreads</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Full Platform Access</h4>
                    <p className="text-zinc-400 text-sm">All features and tools included</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">No Risk</h4>
                    <p className="text-zinc-400 text-sm">Trade without financial risk</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Unlimited Duration</h4>
                    <p className="text-zinc-400 text-sm">Practice as long as you need</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Easy Upgrade</h4>
                    <p className="text-zinc-400 text-sm">Switch to live when ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 mb-12">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Perfect For</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🎓</div>
                <p className="text-white font-semibold mb-1">Beginners</p>
                <p className="text-zinc-400 text-sm">Learn trading basics</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📊</div>
                <p className="text-white font-semibold mb-1">Strategy Testing</p>
                <p className="text-zinc-400 text-sm">Test new strategies</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔧</div>
                <p className="text-white font-semibold mb-1">Platform Learning</p>
                <p className="text-zinc-400 text-sm">Master the tools</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gold-600 hover:bg-gold-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Open Demo Account
            </button>
            <p className="text-zinc-500 text-sm mt-4">
              No credit card required • Instant access
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
