import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Markets from "@/components/Markets";
import Trade from "@/components/Trade";
import Accounts from "@/components/Accounts";
import Tools from "@/components/Tools";
import Learn from "@/components/Learn";
import CoreProducts from "@/components/CoreProducts";
import Testimonial from "@/components/Testimonial";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      <Hero />
      <Markets />
      <Trade />
      <Accounts />
      <CoreProducts />
      <Tools />
      <Learn />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  );
}
