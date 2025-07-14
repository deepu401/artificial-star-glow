import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Approach />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-background border-t border-border-subtle py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/67b95d87-503c-4cf7-a292-4ed2f14bf7e6.png" 
                alt="Artificial Star"
                className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            <div className="flex space-x-6 text-sm text-foreground-muted">
              <a href="#" className="hover:text-foreground transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors duration-300">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border-subtle text-center text-sm text-foreground-subtle">
            <p>&copy; 2024 Artificial Star. All rights reserved. Building intelligent futures.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
