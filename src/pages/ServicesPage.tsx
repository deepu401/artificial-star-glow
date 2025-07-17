import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MessageCircle, Mic, Bot, Palette, Cog, ArrowRight, Zap } from "lucide-react";


const ServicesPage = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const services = [{
    slug: "custom-chatbots",
    title: "Custom Chatbots",
    description: "AI-powered conversational agents that handle customer inquiries 24/7, qualify leads, and provide personalized support experiences.",
    icon: MessageCircle,
    features: ["Natural language processing", "Multi-platform integration", "Lead qualification", "24/7 availability"],
    gradient: "from-blue-600 to-purple-600"
  }, {
    slug: "voice-agents",
    title: "Voice Agents",
    description: "Intelligent voice assistants that handle phone calls, schedule appointments, and provide voice-based customer service.",
    icon: Mic,
    features: ["Natural speech recognition", "Call handling", "Appointment scheduling", "Multi-language support"],
    gradient: "from-green-600 to-teal-600"
  }, {
    slug: "intelligent-automation",
    title: "Intelligent Automation",
    description: "Smart workflows that automate repetitive tasks, process data, and streamline business operations with AI decision-making.",
    icon: Bot,
    features: ["Process automation", "Data processing", "Decision intelligence", "Workflow optimization"],
    gradient: "from-orange-600 to-red-600"
  }, {
    slug: "website-design",
    title: "Website Design",
    description: "Modern, responsive websites optimized for conversion and user experience, built with AI-powered features and insights.",
    icon: Palette,
    features: ["Responsive design", "AI integration", "SEO optimization", "Performance focused"],
    gradient: "from-pink-600 to-rose-600"
  }, {
    slug: "custom-solutions",
    title: "Custom Solutions",
    description: "Tailored AI solutions designed specifically for your unique business needs and industry requirements.",
    icon: Cog,
    features: ["Bespoke development", "Industry-specific", "Scalable architecture", "Ongoing support"],
    gradient: "from-indigo-600 to-blue-600"
  }];
  return <div className="min-h-screen bg-background">

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10"></div>
        
        <motion.div className="container mx-auto px-6 text-center relative z-10" initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Solutions</span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Transform Your Business With AI{" "}
            
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground-muted mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of AI-powered services designed to streamline operations, enhance customer experiences, and drive business growth.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button variant="premium" size="lg" asChild>
              <Link to="/ai-journey">Start Your AI Journey</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={containerVariants} className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Our AI Services
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Choose from our specialized AI solutions or let us create a custom solution tailored to your specific needs.
            </motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={containerVariants}>
            {services.map((service, index) => {
            const Icon = service.icon;
            return <motion.div key={service.slug} variants={itemVariants}>
                  <Card className="bg-gradient-card border-border-subtle h-full hover:shadow-glow transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                      <p className="text-foreground-muted mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => <li key={featureIndex} className="text-sm text-foreground-muted flex items-start gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>)}
                        </ul>
                      </div>
                      
                      <Button variant="premium" size="sm" asChild className="w-full">
                        <Link to={`/service/${service.slug}`}>
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>;
          })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={containerVariants}>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-foreground-muted mb-12 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can drive growth and efficiency for your company.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" asChild>
                <Link to="/ai-journey">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/what-we-do">Learn About Our Approach</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ServicesPage;
