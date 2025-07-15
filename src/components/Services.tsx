import { Bot, Mic, Zap, Palette, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Custom Chatbots",
      description: "Intelligent conversations that convert visitors into customers",
      features: [
        "24/7 availability",
        "Natural language processing",
        "Seamless integration",
        "Multi-platform support"
      ],
      gradient: "from-primary to-primary-light",
      slug: "custom-chatbots"
    },
    {
      icon: Mic,
      title: "Voice Agents",
      description: "Voice-powered AI that handles calls, bookings, and customer service",
      features: [
        "Human-like interactions",
        "Scalable solutions",
        "Cost reduction",
        "Real-time responses"
      ],
      gradient: "from-accent to-accent-dark",
      slug: "voice-agents"
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Streamline your workflows with AI-powered automation systems",
      features: [
        "Efficiency gains",
        "Error reduction",
        "Seamless integration",
        "Custom workflows"
      ],
      gradient: "from-primary-light to-accent",
      slug: "intelligent-automation"
    },
    {
      icon: Palette,
      title: "Website Design",
      description: "Professional, responsive websites with modern design and SEO optimization",
      features: [
        "Modern responsive design",
        "SEO optimization", 
        "Fast loading",
        "Conversion optimization"
      ],
      gradient: "from-accent to-primary",
      slug: "website-design"
    },
    {
      icon: Lightbulb,
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your unique business needs",
      features: [
        "Custom AI development",
        "Industry-specific solutions",
        "Legacy system integration",
        "Scalable architecture"
      ],
      gradient: "from-primary to-accent",
      slug: "custom-solutions"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Solutions
            </span>{" "}
            <span className="text-foreground">That Transform</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            We specialize in four core areas that drive real business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={`/service/${service.slug}`}
                className="group relative bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border-subtle hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-glow animate-fade-in-up block"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-foreground-muted mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground-muted">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:animate-glow-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="glass" className="w-full group-hover:bg-primary/10 group-hover:border-primary/50">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to transform your business?
          </h3>
          <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive growth and efficiency for your company
          </p>
          <Button variant="premium" size="xl">
            Schedule a Consultation
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;