import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import StarLogo from "./StarLogo";
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
  const navItems = [{
    name: "Services",
    href: "#services"
  }, {
    name: "Approach",
    href: "#approach"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border-subtle" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <StarLogo size={40} animated={true} glowIntensity={0.9} rotationSpeed={1.5} />
            <div className="logo-text flex items-center">
              <span className="transition-all duration-300 font-honk text-purple-100 text-4xl font-light text-left tracking-wide">
                Artificial Star
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground-muted hover:text-foreground transition-colors duration-300 font-medium hover:scale-105 transform">
                {item.name}
              </a>)}
            <Button variant="premium" size="lg">
              Start Your AI Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="minimal" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-6 pb-6 border-t border-border-subtle animate-fade-in">
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground-muted hover:text-foreground transition-colors duration-300 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </a>)}
              <Button variant="premium" size="lg" className="mt-4">
                Start Your AI Journey
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;