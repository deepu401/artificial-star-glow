import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Star, 
  Zap, 
  TrendingUp, 
  Target, 
  Rocket, 
  Handshake, 
  BarChart3,
  Search,
  Building,
  Users,
  Heart,
  Stethoscope,
  Home,
  ShoppingCart,
  Briefcase,
  Factory,
  CreditCard,
  GraduationCap,
  MapPin,
  DollarSign,
  Clock,
  Award,
  Smile,
  Globe,
  Bot,
  Lightbulb
} from "lucide-react";

const WhatWeDo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const industries = [
    { name: "Healthcare", description: "Patient experience automation", icon: Stethoscope },
    { name: "Real Estate", description: "Lead qualification & nurturing systems", icon: Home },
    { name: "E-commerce", description: "Customer journey optimization", icon: ShoppingCart },
    { name: "Professional Services", description: "Client onboarding automation", icon: Briefcase },
    { name: "Manufacturing", description: "Operations optimization", icon: Factory },
    { name: "Finance", description: "Risk assessment & compliance", icon: CreditCard },
    { name: "Education", description: "Student engagement platforms", icon: GraduationCap },
    { name: "Hospitality", description: "Guest experience enhancement", icon: MapPin }
  ];

  const successMetrics = [
    {
      category: "Revenue Impact",
      icon: DollarSign,
      items: [
        "Increased lead generation and conversion",
        "Cost reduction through automation", 
        "New revenue streams enabled by AI"
      ]
    },
    {
      category: "Time Liberation",
      icon: Clock,
      items: [
        "Hours saved on repetitive tasks",
        "Faster decision-making processes",
        "More time for strategic initiatives"
      ]
    },
    {
      category: "Competitive Advantage",
      icon: Award,
      items: [
        "Capabilities competitors don't have",
        "Market positioning as industry innovator",
        "Future-ready business infrastructure"
      ]
    },
    {
      category: "Human Empowerment",
      icon: Smile,
      items: [
        "Staff focusing on high-value work",
        "Improved customer experiences",
        "Reduced stress from manual processes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10"></div>
        
        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Business Transformation</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            We Turn AI Complexity Into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Business Simplicity
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground-muted mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            While others build AI tools, we architect business transformations. We're the bridge between cutting-edge AI technology and real-world business results.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button variant="premium" size="lg" asChild>
              <Link to="/ai-journey">Discover Your AI Potential</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Illuminating New Possibilities
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-foreground-muted max-w-5xl mx-auto leading-relaxed">
              We believe every business deserves to harness the power of AI - not just the tech giants. Our mission is to democratize artificial intelligence and make it accessible, practical, and profitable for businesses of all sizes.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-card border-border-subtle h-full hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">AI Should Solve Real Problems</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Not build technology for technology's sake, but create solutions that address actual business challenges and drive measurable outcomes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-card border-border-subtle h-full hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Implementation Should Be Simple</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Complex AI technology shouldn't require a PhD to implement. We make AI adoption seamless and stress-free for any business.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-card border-border-subtle h-full hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Results Should Be Immediate</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    You shouldn't wait years to see ROI. Our solutions are designed to deliver value from day one and scale with your success.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              The Artificial Star Difference
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Business-First, Technology-Second</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    We start with your business goals, then architect the AI solution. Not the other way around. Every recommendation is based on ROI, not just what's technically possible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Rapid Transformation, Lasting Results</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    We get you results in weeks, not months. But more importantly, we build solutions that grow with your business for years to come.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Partnership, Not Just Service</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    We become your AI strategy partner. From initial implementation to scaling across your entire organization, we're with you every step of the journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Measurable Impact Guarantee</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Every project comes with clear KPIs and success metrics. If we don't deliver measurable business impact, we don't consider the project complete.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Transforming Businesses Across Industries
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-foreground-muted">
              From startups to enterprises, we've illuminated new possibilities across every sector
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-gradient-card border-border-subtle h-full hover:shadow-glow transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{industry.name}</h3>
                      <p className="text-sm text-foreground-muted">{industry.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <p className="text-lg text-foreground-muted">
              Don't see your industry? We adapt our expertise to any business model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              How We Think About AI Transformation
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-card border-border-subtle h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Search className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">1.</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Opportunity Identification</h3>
                  <h4 className="text-lg font-semibold text-accent mb-3">"Finding Your AI Sweet Spots"</h4>
                  <p className="text-foreground-muted leading-relaxed">
                    We don't just ask what you want - we analyze your business to identify where AI can create the biggest impact with the least disruption.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-card border-border-subtle h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">2.</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Intelligent Implementation</h3>
                  <h4 className="text-lg font-semibold text-accent mb-3">"Building for Today and Tomorrow"</h4>
                  <p className="text-foreground-muted leading-relaxed">
                    We create solutions that solve immediate problems while laying the foundation for future AI expansion across your organization.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-card border-border-subtle h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">3.</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Evolution</h3>
                  <h4 className="text-lg font-semibold text-accent mb-3">"Growing Your AI Advantage"</h4>
                  <p className="text-foreground-muted leading-relaxed">
                    AI isn't a one-time implementation - it's an evolving competitive advantage. We ensure your systems learn, adapt, and improve over time.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Philosophy */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Our Definition of Success
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {successMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-gradient-card border-border-subtle h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{metric.category}</h3>
                      <ul className="space-y-2">
                        {metric.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-foreground-muted flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* The Bigger Picture */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Beyond Individual Projects
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground-muted max-w-5xl mx-auto leading-relaxed">
              We're not just building AI solutions - we're building the future of business. Every chatbot, every automation, every intelligent system is a step toward a world where technology amplifies human potential rather than replacing it.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-card border-border-subtle h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">AI-Native Business Models</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Helping businesses reimagine their entire operating model around AI capabilities
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-card border-border-subtle h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Human-AI Collaboration</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Creating systems where AI enhances human decision-making and creativity
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-card border-border-subtle h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Scalable Intelligence</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Building AI infrastructure that grows and evolves with your business ambitions
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Your AI Transformation Starts With a Conversation
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mt-16"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Strategic Assessment</h3>
                <p className="text-foreground-muted mb-6">Discover your AI opportunities</p>
                <Button variant="premium" size="lg" asChild>
                  <Link to="/ai-journey">Start Your AI Journey</Link>
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Leadership Discussion</h3>
                <p className="text-foreground-muted mb-6">Speak with our AI strategy team</p>
                <Button variant="premium" size="lg" asChild>
                  <Link to="#contact">Schedule Strategic Call</Link>
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Learn More</h3>
                <p className="text-foreground-muted mb-6">Explore our approach in detail</p>
                <Button variant="premium" size="lg" asChild>
                  <Link to="/services">View Our Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;