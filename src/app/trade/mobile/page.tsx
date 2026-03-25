import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MobileTradingPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Mobile Trading</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Trade on the Go
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Full trading functionality in the palm of your hand. Native iOS and Android apps with real-time alerts and Touch ID security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">📱 iOS App</h3>
              <p className="text-zinc-400 mb-6">Available on the App Store</p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Face ID / Touch ID login
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Push notifications
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Full chart analysis
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Real-time quotes
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">🤖 Android App</h3>
              <p className="text-zinc-400 mb-6">Available on Google Play</p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Fingerprint authentication
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Instant alerts
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  Advanced charting
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-2" />
                  One-tap trading
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Mobile Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">Real-Time</div>
                <p className="text-zinc-400 text-sm">Live Prices</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">Secure</div>
                <p className="text-zinc-400 text-sm">Biometric Login</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">Alerts</div>
                <p className="text-zinc-400 text-sm">Push Notifications</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">Sync</div>
                <p className="text-zinc-400 text-sm">Cloud Backup</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Download Mobile App
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
