import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StarLogo from "./StarLogo";
import { Instagram, Twitter, Linkedin, Facebook, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Custom Chatbots", href: "/service/custom-chatbots" },
        { name: "Voice Agents", href: "/service/voice-agents" },
        { name: "Intelligent Automation", href: "/service/intelligent-automation" },
        { name: "Website Design", href: "/service/website-design" },
        { name: "Custom Solutions", href: "/service/custom-solutions" },
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "What We Do", href: "/what-we-do" },
        { name: "Approach", href: "/#approach" },
        { name: "Blog", href: "/blog" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/blog" },
        { name: "AI Tools", href: "/blog" },
        { name: "Consultation", href: "/ai-journey" },
        { name: "Support", href: "/ai-journey" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Security", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-background border-t border-border-subtle">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 hover:scale-105 transition-transform duration-300 w-fit">
              <StarLogo size={32} animated={true} glowIntensity={0.8} rotationSpeed={1.5} />
              <span className="font-tomorrow text-xl font-light text-foreground">
                Artificial Star
              </span>
            </Link>
            <p className="text-foreground-muted text-sm leading-relaxed mb-6">
              Illuminating the future with intelligent AI solutions that transform businesses and drive growth.
            </p>
            
            {/* Contact Email */}
            <div className="flex items-center space-x-2 mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <a 
                href="mailto:hello@artificialstar.ai" 
                className="text-sm text-foreground-muted hover:text-primary transition-colors duration-300"
              >
                hello@artificialstar.ai
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-background-secondary rounded-full hover:bg-primary/10 transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-background-secondary rounded-full hover:bg-primary/10 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-background-secondary rounded-full hover:bg-primary/10 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-background-secondary rounded-full hover:bg-primary/10 transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="p-2 bg-background-secondary rounded-full hover:bg-primary/10 transition-all duration-300 group">
                <MessageCircle className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>
            
            <Button variant="premium" size="sm" asChild>
              <Link to="/ai-journey">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a 
                        href={link.href}
                        className="text-foreground-muted hover:text-foreground transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-foreground-muted hover:text-foreground transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div className="bg-background-secondary border-t border-border-subtle py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-foreground-muted">
              <p>&copy; 2025 Artificial Star. All rights reserved.</p>
              <span className="hidden md:inline">|</span>
              <p className="hidden md:inline">Building intelligent futures.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-foreground-muted hover:text-foreground transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground-muted hover:text-foreground transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;