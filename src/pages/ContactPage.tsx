import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactPage = () => {
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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background-secondary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="text-foreground">Get in</span>{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Ready to transform your business with AI? Let's discuss your project and explore how our solutions can drive growth.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-border-subtle animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                      First Name *
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
                      Last Name *
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
                    Email *
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
                    Mobile
                  </label>
                  <Input 
                    type="tel" 
                    className="bg-background-card border-border-subtle focus:border-primary transition-colors duration-300"
                    placeholder="+1 (555) 123-4567"
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
                    Message *
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

            {/* Contact Email */}
            <div className="mt-12 text-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-border-subtle">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground-muted">Direct Email</span>
                </div>
                <a 
                  href="mailto:artificialstar1@gmail.com" 
                  className="text-lg font-medium text-primary hover:text-accent transition-colors duration-300"
                >
                  artificialstar1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;