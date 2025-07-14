import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Star, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border-subtle" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="logo-text flex items-center">
              <span className="text-2xl font-black text-foreground transition-all duration-300 font-handjet">
                Artificial Star
              </span>
              <motion.div 
                className="ml-3 relative" 
                style={{ width: 40, height: 40 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1 
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Star
                    size={32}
                    className="text-blue-400 fill-blue-400/20"
                    style={{
                      filter: `drop-shadow(0 0 12px rgba(59, 130, 246, 0.6))`,
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles
                      size={12}
                      className="text-purple-400 fill-purple-400/30"
                      style={{
                        filter: `drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))`,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground-muted hover:text-foreground transition-colors duration-300 font-medium hover:scale-105 transform"
              >
                {item.name}
              </a>
            ))}
            <Button variant="premium" size="lg">
              Start Your AI Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="minimal"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border-subtle animate-fade-in">
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground-muted hover:text-foreground transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="premium" size="lg" className="mt-4">
                Start Your AI Journey
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;