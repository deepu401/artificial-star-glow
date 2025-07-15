import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@artificialstr.ai",
      href: "mailto:hello@artificialstr.ai"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

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

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border-subtle">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground-muted mb-2">
                        First Name
                      </label>
                      <Input 
                        type="text" 
                        required 
                        className="bg-background-card border-border-subtle focus:border-primary transition-colors duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground-muted mb-2">
                        Last Name
                      </label>
                      <Input 
                        type="text" 
                        required 
                        className="bg-background-card border-border-subtle focus:border-primary transition-colors duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      required 
                      className="bg-background-card border-border-subtle focus:border-primary transition-colors duration-300"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                      Company
                    </label>
                    <Input 
                      type="text" 
                      className="bg-background-card border-border-subtle focus:border-primary transition-colors duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                      Message
                    </label>
                    <Textarea 
                      required
                      rows={5}
                      className="bg-background-card border-border-subtle focus:border-primary transition-colors duration-300"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact info */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Get in touch</h3>
                  <p className="text-foreground-muted leading-relaxed mb-8">
                    Have a project in mind? We'd love to hear from you. Send us a message and 
                    we'll respond as soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div 
                        key={info.title}
                        className="flex items-center space-x-4 group cursor-pointer"
                        onClick={() => info.href !== '#' && window.open(info.href, '_blank')}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-full h-full text-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-foreground-muted">{info.title}</p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Response time and availability */}
                <div className="space-y-4">
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
                      please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;