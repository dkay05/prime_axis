import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebTraderPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Web Trading</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Web Trader Platform
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
              Trade directly from your browser without downloads. Access your account from any device with internet connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">No Download</h3>
              <p className="text-zinc-400 mb-4">Access instantly from any web browser</p>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>• Chrome, Firefox, Safari</li>
                <li>• No installation required</li>
                <li>• Instant access</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Cross-Platform</h3>
              <p className="text-zinc-400 mb-4">Works on any device or operating system</p>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>• Windows, Mac, Linux</li>
                <li>• Tablets & mobile</li>
                <li>• Cloud-based sync</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Full Features</h3>
              <p className="text-zinc-400 mb-4">Complete trading functionality</p>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>• Advanced charts</li>
                <li>• Real-time quotes</li>
                <li>• All order types</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a href="/accounts/open" className="inline-block bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Start Web Trading
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
