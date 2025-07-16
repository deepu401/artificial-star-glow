import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="text-foreground">Ready to transform</span>{" "}
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                your business with AI?
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Let's discuss your project and explore how our AI solutions can drive growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Send us a message - clickable */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <Link to="/contact" className="group block">
                <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border-subtle hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Send className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      Send us a message
                    </h3>
                  </div>
                  <p className="text-foreground-muted group-hover:text-foreground transition-colors duration-300">
                    Click here to share your project details and get started
                  </p>
                </div>
              </Link>
            </div>

            {/* Response time and availability */}
            <div className="grid md:grid-cols-2 gap-6 mt-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-border-subtle">
                <h4 className="text-lg font-semibold text-foreground mb-2">Available 24/7</h4>
                <p className="text-foreground-muted text-sm">
                  We're available around the clock for AI emergencies and urgent consultations.
                </p>
              </div>
              <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-border-subtle">
                <h4 className="text-lg font-semibold text-foreground mb-2">Quick Response</h4>
                <p className="text-foreground-muted text-sm">
                  We typically respond within 24 hours. For urgent inquiries, 
                  reach out directly through our contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;