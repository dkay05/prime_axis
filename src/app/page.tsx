import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import SolutionOverview from "@/components/SolutionOverview";
import CoreProducts from "@/components/CoreProducts";
import BackOffice from "@/components/BackOffice";
import IBPartner from "@/components/IBPartner";
import AboutSection from "@/components/AboutSection";
import WhySetupFX from "@/components/WhySetupFX";
import HowItWorks from "@/components/HowItWorks";
import Competition from "@/components/Competition";
import PropTrading from "@/components/PropTrading";
import Testimonial from "@/components/Testimonial";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cred-black">
      <Navbar />
      <Hero />
      <TrustStrip />
      <SolutionOverview />    {/* Services */}
      <CoreProducts />        {/* Digital Marketing */}
      <BackOffice />           {/* Solutions */}
      <IBPartner />            {/* Industries */}
      <AboutSection />         {/* Why SetupFX24 / About */}
      <WhySetupFX />           {/* Why Choose Us */}
      <HowItWorks />           {/* Process */}
      <Competition />          {/* Case Studies */}
      <PropTrading />          {/* Pricing */}
      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  );
}
