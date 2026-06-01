import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import BigImageSection from "./components/BigImageSection";
import SponsorsSection from "./components/SponsorsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-[#F8F8F8] min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <BigImageSection />
      <SponsorsSection />
      <TestimonialsSection />
      <SubscribeSection />
      <Footer />
    
    </div>
  );
}

export default App;