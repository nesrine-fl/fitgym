import Navbar from "../componenets/Navbar";
import HeroSection from "../componenets/HeroSection";
import AboutSection from "../componenets/AboutSection";
import ClassesGrid from "../componenets/ClassesGrid";
import TrainersSection from "../componenets/TrainersSection";
import PricingSection from "../componenets/PricingSection";
import TestimonialsSection from "../componenets/TestimonialsSection";
import Footer from "../componenets/Footer";
import ChatBot from "../componenets/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
    <Navbar />

<div className="pt-10 ">
  <HeroSection />
</div>
      <AboutSection />
      <ClassesGrid />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
