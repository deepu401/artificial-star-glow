import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import StarLogo from "@/components/StarLogo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/40 rounded-full blur-2xl animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated logo */}
          <div className="mb-8 animate-scale-in">
            <StarLogo
              size={60}
              animated={true}
              glowIntensity={0.9}
              rotationSpeed={1.5}
            />
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              We don't just build AI.
            </span>
            <br />
            <span className="text-foreground">
              We build intelligent futures.
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Transform your business with custom AI solutions that actually work. 
            From intelligent chatbots to voice agents that understand your customers.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button variant="hero" size="xl" className="group">
              Start Your AI Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button variant="glass" size="xl" className="group">
              <Sparkles className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View Our Work
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <p className="text-sm text-foreground-subtle mb-6 uppercase tracking-wider">
              Trusted by innovative companies worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-24 h-8 bg-foreground-subtle/20 rounded animate-glow-pulse" style={{animationDelay: '1s'}}></div>
              <div className="w-24 h-8 bg-foreground-subtle/20 rounded animate-glow-pulse" style={{animationDelay: '1.2s'}}></div>
              <div className="w-24 h-8 bg-foreground-subtle/20 rounded animate-glow-pulse" style={{animationDelay: '1.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground-muted rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;