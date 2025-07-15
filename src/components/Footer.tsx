import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Custom Chatbots", href: "#services" },
        { name: "Voice Agents", href: "#services" },
        { name: "Intelligent Automation", href: "#services" },
        { name: "Website Design", href: "#services" },
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "About", href: "#" },
        { name: "Approach", href: "#approach" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "#" },
        { name: "AI Tools", href: "#" },
        { name: "Consultation", href: "#contact" },
        { name: "Support", href: "#" },
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
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/67b95d87-503c-4cf7-a292-4ed2f14bf7e6.png" 
                alt="Artificial Star"
                className="h-8 w-auto"
              />
              <span className="font-tomorrow text-xl font-light text-foreground">
                Artificial Star
              </span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed mb-6">
              Illuminating the future with intelligent AI solutions that transform businesses and drive growth.
            </p>
            <Button variant="premium" size="sm">
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-foreground-muted hover:text-foreground transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 pt-8 border-t border-border-subtle">
          <div className="max-w-md">
            <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
            <p className="text-foreground-muted text-sm mb-4">
              Get the latest AI insights and updates delivered to your inbox.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background-card border border-border-subtle rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-sm"
              />
              <Button variant="premium" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
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
              <a href="#contact" className="text-foreground-muted hover:text-foreground transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;