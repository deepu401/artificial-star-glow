import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FixedStarLogo from "@/components/FixedStarLogo";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <FixedStarLogo />
      <Hero />
      <Services />
      <Approach />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
