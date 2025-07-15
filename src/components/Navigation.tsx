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
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{stopColor:'#60a5fa', stopOpacity:0.8}} />
                  <stop offset="50%" style={{stopColor:'#a855f7', stopOpacity:0.6}} />
                  <stop offset="100%" style={{stopColor:'transparent', stopOpacity:0}} />
                </radialGradient>
                <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#60a5fa'}} />
                  <stop offset="50%" style={{stopColor:'#a855f7'}} />
                  <stop offset="100%" style={{stopColor:'#ec4899'}} />
                </linearGradient>
                <filter id="glow-filter">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <circle cx="30" cy="30" r="20" fill="url(#glow)">
                <animate attributeName="r" values="17;22;17" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
              </circle>
              <polygon points="30,10 36,25 50,25 39,34 43,48 30,40 17,48 21,34 10,25 24,25" fill="url(#starGradient)" filter="url(#glow-filter)">
                <animateTransform attributeName="transform" type="rotate" values="0 30 30;360 30 30" dur="4s" repeatCount="indefinite"/>
              </polygon>
              <circle cx="17" cy="17" r="0.75" fill="#60a5fa">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="42" cy="22" r="0.75" fill="#60a5fa">
                <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="22" cy="42" r="0.75" fill="#60a5fa">
                <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite"/>
              </circle>
              <circle cx="37" cy="37" r="0.75" fill="#60a5fa">
                <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.5s" repeatCount="indefinite"/>
              </circle>
            </svg>
            <div className="logo-text flex items-center">
              <span className="transition-all duration-300 font-handjet text-purple-100 text-5xl font-medium text-left">
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