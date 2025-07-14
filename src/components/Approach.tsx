import { Search, Palette, Rocket } from "lucide-react";

const Approach = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Analyze",
      description: "We dive deep into your business operations to identify high-impact AI opportunities",
      details: "Our team conducts comprehensive audits of your current processes, identifies bottlenecks, and maps out areas where AI can deliver maximum value.",
      color: "primary"
    },
    {
      number: "02", 
      icon: Palette,
      title: "Design",
      description: "Custom AI solutions architected specifically for your unique challenges",
      details: "We design tailored AI systems that integrate seamlessly with your existing infrastructure while addressing your specific business objectives.",
      color: "accent"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Deploy",
      description: "Seamless implementation with ongoing support and optimization",
      details: "Our deployment process ensures minimal disruption to your operations, with continuous monitoring and optimization to maximize performance.",
      color: "primary-light"
    }
  ];

  return (
    <section id="approach" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">Our</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Approach
            </span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            A proven 3-step process that transforms your business with intelligent AI solutions
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div 
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                } animate-fade-in-up`}
                style={{animationDelay: `${0.2 + index * 0.2}s`}}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <span className="text-6xl md:text-7xl font-bold text-foreground-subtle/20 mr-4">
                      {step.number}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-xl text-foreground-muted mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <p className="text-foreground-subtle leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {/* Visual element */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Main icon container */}
                    <div className={`
                      w-32 h-32 md:w-40 md:h-40 rounded-2xl 
                      bg-gradient-to-br from-${step.color} to-${step.color === 'primary' ? 'primary-light' : step.color === 'accent' ? 'accent-dark' : 'primary'} 
                      p-8 md:p-10 
                      shadow-glow hover:shadow-glow-purple 
                      transition-all duration-500 
                      hover:scale-110 hover:rotate-3
                      animate-float
                    `}
                    style={{animationDelay: `${index * 0.5}s`}}
                    >
                      <Icon className="w-full h-full text-foreground" />
                    </div>
                    
                    {/* Decorative circles */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-glow-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent/30 rounded-full animate-glow-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process flow visualization */}
        <div className="mt-20 flex justify-center animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="flex items-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full animate-glow-pulse" style={{animationDelay: `${index * 0.3}s`}}></div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent ml-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;