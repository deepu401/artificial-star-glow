import { useParams, Link } from "react-router-dom";
import { Bot, Mic, Zap, Palette, Lightbulb, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import AIJourneyModal from "@/components/AIJourneyModal";
import Head from "next/head";


const ServicePage = () => {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = {
    "custom-chatbots": {
      icon: Bot,
      title: "Custom Chatbots",
      subtitle: "Intelligent Conversations That Convert",
      description: "Transform your customer interactions with AI-powered chatbots that understand context, remember conversations, and provide personalized experiences that drive conversions and customer satisfaction.",
      features: [
        "24/7 Customer Availability",
        "Natural Language Processing",
        "Seamless Platform Integration",
        "Multi-language Support",
        "Lead Qualification & Scoring",
        "Custom Knowledge Base Training",
        "Analytics & Performance Tracking",
        "Human Handoff Capabilities"
      ],
      benefits: [
        "Reduce response time by 90%",
        "Handle 80% of inquiries automatically",
        "Increase lead conversion by 35%",
        "Save $50,000+ annually on support costs"
      ],
      gradient: "from-primary to-primary-light",
      industries: ["E-commerce", "Healthcare", "Real Estate", "SaaS", "Education"]
    },
    "voice-agents": {
      icon: Mic,
      title: "Voice Agents",
      subtitle: "Human-Like Voice Interactions",
      description: "Deploy sophisticated voice AI agents that handle phone calls, appointments, customer service, and sales conversations with natural, human-like interactions that scale your business operations.",
      features: [
        "Human-like Voice Quality",
        "Real-time Call Handling",
        "Appointment Scheduling",
        "Call Recording & Analysis",
        "CRM Integration",
        "Multi-accent Recognition",
        "Sentiment Analysis",
        "Escalation Protocols"
      ],
      benefits: [
        "Handle 500+ calls simultaneously",
        "Reduce call center costs by 70%",
        "Improve appointment booking by 45%",
        "24/7 availability without breaks"
      ],
      gradient: "from-accent to-accent-dark",
      industries: ["Healthcare", "Automotive", "Restaurant", "Professional Services", "Real Estate"]
    },
    "intelligent-automation": {
      icon: Zap,
      title: "Intelligent Automation",
      subtitle: "Streamline Operations with AI",
      description: "Automate complex business processes with intelligent workflows that adapt, learn, and optimize themselves. From data processing to decision-making, our automation solutions transform how you work.",
      features: [
        "Workflow Automation",
        "Data Processing & Analysis",
        "Document Intelligence",
        "Process Optimization",
        "API Integration",
        "Custom Business Rules",
        "Exception Handling",
        "Performance Monitoring"
      ],
      benefits: [
        "Reduce manual work by 85%",
        "Eliminate human errors",
        "Process data 100x faster",
        "ROI of 300%+ within 6 months"
      ],
      gradient: "from-primary-light to-accent",
      industries: ["Finance", "Manufacturing", "Logistics", "Insurance", "Legal"]
    },
    "website-design": {
      icon: Palette,
      title: "Website Design",
      subtitle: "Modern, High-Converting Websites",
      description: "Create stunning, responsive websites that not only look beautiful but are optimized for conversions, SEO, and user experience. Every design is crafted to drive business results.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Conversion Rate Optimization",
        "Performance Optimization",
        "Content Management",
        "Analytics Integration", 
        "Security Implementation",
        "Ongoing Support"
      ],
      benefits: [
        "Increase conversions by 40%",
        "Improve search rankings",
        "Load 3x faster than average",
        "Mobile-first responsive design"
      ],
      gradient: "from-accent to-primary",
      industries: ["E-commerce", "Professional Services", "Healthcare", "Technology", "Creative"]
    },
    "custom-solutions": {
      icon: Lightbulb,
      title: "Custom Solutions",
      subtitle: "Tailored AI for Your Unique Needs",
      description: "Every business is unique. Our custom AI solutions are designed specifically for your industry, challenges, and goals. From concept to deployment, we build AI that fits perfectly into your operations.",
      features: [
        "Custom AI Model Development",
        "Industry-Specific Solutions",
        "Legacy System Integration",
        "Scalable Architecture",
        "Data Privacy & Security",
        "Training & Support",
        "Continuous Optimization",
        "White-label Options"
      ],
      benefits: [
        "100% tailored to your needs",
        "Competitive advantage through unique AI",
        "Seamless integration with existing systems",
        "Full ownership of your solution"
      ],
      gradient: "from-primary to-accent",
      industries: ["All Industries", "Specialized Niches", "Enterprise", "Startups", "Government"]
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Head>
      <title>AI Services - Chatbots, Voice Agents & Automation | Artificial Star</title>
      <meta name="description" content="Professional AI services including chatbots, voice agents, business automation, and custom AI solutions. Serving international clients from India." />
      <link rel="canonical" href="https://www.artificialstar.ai/services" />
      </Head>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/#services" 
            className="inline-flex items-center text-foreground-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Services
          </Link>

          <div className="max-w-4xl">
            <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} p-5 mb-8`}>
              <Icon className="w-full h-full text-foreground" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {service.title}
              </span>
            </h1>
            
            <p className="text-2xl text-foreground-muted mb-8 font-light">
              {service.subtitle}
            </p>
            
            <p className="text-xl text-foreground-muted mb-12 leading-relaxed max-w-3xl">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="premium" 
                size="xl"
                onClick={() => setIsModalOpen(true)}
              >
                Get Started Today
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => setIsModalOpen(true)}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Powerful Features
              </h2>
              <div className="grid gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Business Benefits
              </h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 border border-border-subtle">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Perfect For These Industries
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Our {service.title.toLowerCase()} solutions have proven successful across various sectors
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.industries.map((industry, index) => (
              <div key={index} className="bg-gradient-card backdrop-blur-sm rounded-full px-6 py-3 border border-border-subtle">
                <span className="text-foreground font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} can transform your business operations and drive growth.
          </p>
          <Button 
            variant="premium" 
            size="xl"
            onClick={() => setIsModalOpen(true)}
          >
            Start Your AI Journey
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
      <AIJourneyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default ServicePage;
