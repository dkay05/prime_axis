import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OpenAccountPage() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold-400 font-medium">Get Started</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight text-white">
              Open Live Account
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
              Start trading in minutes. Complete the simple registration process and access global markets.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">Quick Registration Process</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Personal Information</h4>
                  <p className="text-zinc-400 text-sm">Provide your basic details and contact information</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Verify Identity</h4>
                  <p className="text-zinc-400 text-sm">Upload ID document for quick verification</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Fund Your Account</h4>
                  <p className="text-zinc-400 text-sm">Deposit funds using your preferred payment method</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Start Trading</h4>
                  <p className="text-zinc-400 text-sm">Access the platform and place your first trade</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">What You'll Need</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📧</div>
                <p className="text-zinc-300 text-sm">Valid Email Address</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🆔</div>
                <p className="text-zinc-300 text-sm">Government ID</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💳</div>
                <p className="text-zinc-300 text-sm">Payment Method</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gold-600 hover:bg-gold-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-gold-600/20 text-sm">
              Open Live Account Now
            </button>
            <p className="text-zinc-500 text-sm mt-4">
              Already have an account? <a href="#" className="text-gold-400 hover:text-gold-300">Sign In</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
