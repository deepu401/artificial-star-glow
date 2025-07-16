import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Bot, Mic, Zap, Palette, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import StarLogo from "./StarLogo";
import { ThemeToggle } from "./ThemeToggle";
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
  const services = [{
    name: "Custom Chatbots",
    href: "/service/custom-chatbots",
    icon: Bot
  }, {
    name: "Voice Agents",
    href: "/service/voice-agents",
    icon: Mic
  }, {
    name: "Intelligent Automation",
    href: "/service/intelligent-automation",
    icon: Zap
  }, {
    name: "Website Design",
    href: "/service/website-design",
    icon: Palette
  }, {
    name: "Custom Solutions",
    href: "/service/custom-solutions",
    icon: Lightbulb
  }];
  const navItems = [{
    name: "What We Do",
    href: "/what-we-do"
  }, {
    name: "Blog",
    href: "/blog"
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border-subtle" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <StarLogo size={40} animated={true} glowIntensity={0.9} rotationSpeed={1.5} />
            <div className="logo-text flex items-center">
              <span className="transition-all duration-300 font-tomorrow text-4xl text-left tracking-wide text-purple-600 font-medium">
                Artificial Star
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground-muted hover:text-foreground transition-colors duration-300 font-medium hover:scale-105 transform">
                Services
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background/95 backdrop-blur-xl border border-border-subtle z-50">
                {services.map(service => {
                const Icon = service.icon;
                return <DropdownMenuItem key={service.name} asChild>
                      <Link to={service.href} className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 transition-colors">
                        <Icon size={16} className="text-primary" />
                        <span>{service.name}</span>
                      </Link>
                    </DropdownMenuItem>;
              })}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {navItems.map(item => item.href.startsWith('#') ? <a key={item.name} href={item.href} className="text-foreground-muted hover:text-foreground transition-colors duration-300 font-medium hover:scale-105 transform">
                  {item.name}
                </a> : <Link key={item.name} to={item.href} className="text-foreground-muted hover:text-foreground transition-colors duration-300 font-medium hover:scale-105 transform">
                  {item.name}
                </Link>)}
            
            <ThemeToggle />
            
            <Button variant="premium" size="lg" asChild>
              <Link to="/ai-journey">Start Your AI Journey</Link>
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
        {isMobileMenuOpen && <div className="md:hidden mt-6 pb-6 border-t border-border-subtle animate-fade-in bg-background/95 backdrop-blur-xl rounded-lg p-4">
            <div className="flex flex-col space-y-4 pt-2">
              <div className="mb-4">
                <h4 className="text-foreground font-semibold mb-3">Services</h4>
                <div className="flex flex-col space-y-2 pl-4">
                  {services.map(service => {
                const Icon = service.icon;
                return <Link key={service.name} to={service.href} className="flex items-center gap-3 text-foreground-muted hover:text-foreground transition-colors duration-300 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Icon size={16} className="text-primary" />
                        <span>{service.name}</span>
                      </Link>;
              })}
                </div>
              </div>
              
              {navItems.map(item => item.href.startsWith('#') ? <a key={item.name} href={item.href} className="text-foreground-muted hover:text-foreground transition-colors duration-300 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </a> : <Link key={item.name} to={item.href} className="text-foreground-muted hover:text-foreground transition-colors duration-300 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </Link>)}
              
              <Button variant="premium" size="lg" className="mt-4" asChild>
                <Link to="/ai-journey">Start Your AI Journey</Link>
              </Button>
            </div>
          </div>}
      </div>
      
      
    </nav>;
};
export default Navigation;