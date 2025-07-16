import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Star, Phone, Mail, MessageSquare, Calendar, Clock, DollarSign, Users, Building, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  // Step 1 - Business Overview
  firstName: string;
  lastName: string;
  entityType: string;
  companyName: string;
  servicesInterested: string[];
  budget: string;
  initialMessage: string;
  
  // Step 2 - Current Challenges
  challenges: string[];
  biggestPainPoint: string;
  
  // Step 3 - AI Interest
  aiSolutions: string[];
  
  // Step 4 - Project Details
  timeline: string;
  findUs: string;
  
  // Step 5 - Vision & Contact
  visionDescription: string;
  requirements: string;
  email: string;
  phone: string;
  bestTimeToCall: string;
  preferredCommunication: string;
  
  // Custom queries for each step
  customQueries: {
    [key: string]: string;
  };
}

const AIJourneyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    entityType: "",
    companyName: "",
    servicesInterested: [],
    budget: "",
    initialMessage: "",
    challenges: [],
    biggestPainPoint: "",
    aiSolutions: [],
    timeline: "",
    findUs: "",
    visionDescription: "",
    requirements: "",
    email: "",
    phone: "",
    bestTimeToCall: "",
    preferredCommunication: "",
    customQueries: {}
  });
  
  const [showCustomQuery, setShowCustomQuery] = useState<{[key: string]: boolean}>({});
  const { toast } = useToast();

  const totalSteps = 6;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof FormData] as string[]), value]
        : (prev[field as keyof FormData] as string[]).filter(item => item !== value)
    }));
  };

  const handleCustomQuery = (step: string, query: string) => {
    setFormData(prev => ({
      ...prev,
      customQueries: {
        ...prev.customQueries,
        [step]: query
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Assessment Submitted!",
      description: "Your AI roadmap is being generated. We'll contact you within 24 hours.",
    });
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    // Navigate to results step
    setCurrentStep(6);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.entityType && 
               (formData.entityType === 'individual' || formData.companyName) &&
               formData.servicesInterested.length > 0 && formData.budget && formData.initialMessage;
      case 2:
        return formData.challenges.length > 0;
      case 3:
        return formData.aiSolutions.length > 0;
      case 4:
        return formData.timeline && formData.findUs;
      case 5:
        return formData.visionDescription && formData.email;
      default:
        return true;
    }
  };

  const industries = [
    "E-commerce/Retail",
    "Healthcare & Medical",
    "Real Estate",
    "Professional Services",
    "SaaS/Technology",
    "Education & Training",
    "Hospitality & Tourism",
    "Manufacturing",
    "Finance & Insurance",
    "Marketing & Advertising",
    "Consulting",
    "Other"
  ];

  const roles = [
    "CEO/Founder",
    "Marketing Director",
    "Operations Manager",
    "IT Director",
    "Business Owner",
    "Sales Manager",
    "Customer Service Manager",
    "Other"
  ];

  const challengeOptions = [
    { id: "support", icon: "🏃‍♂️", title: "Customer service overwhelm", description: "Too much time on support tickets" },
    { id: "leads", icon: "🌙", title: "Missing after-hours leads", description: "Losing customers outside business hours" },
    { id: "repetitive", icon: "🔄", title: "Repetitive task burnout", description: "Manual processes eating productivity" },
    { id: "inconsistent", icon: "😞", title: "Inconsistent experience", description: "Customer service quality varies" },
    { id: "scaling", icon: "📈", title: "Scaling without hiring", description: "Need growth without more staff costs" },
    { id: "conversions", icon: "💔", title: "Poor website conversions", description: "Visitors not becoming customers" },
    { id: "manual", icon: "⌨️", title: "Manual data nightmare", description: "Too much copy/paste and data entry" },
    { id: "calls", icon: "📞", title: "Call volume chaos", description: "Can't handle peak phone traffic" },
    { id: "instant", icon: "⚡", title: "Instant response demands", description: "Customers expect immediate answers" },
    { id: "qualification", icon: "🎯", title: "Lead qualification mess", description: "Wasting time on unqualified prospects" },
    { id: "booking", icon: "📅", title: "Booking bottlenecks", description: "Manual scheduling causing friction" },
    { id: "revenue", icon: "💸", title: "Revenue leaks", description: "Money slipping through operational cracks" }
  ];

  const aiSolutionOptions = [
    {
      id: "chatbot",
      icon: "🤖",
      title: "Smart Chatbot System",
      features: [
        "24/7 customer support automation",
        "Instant lead capture & qualification",
        "FAQ handling without human intervention",
        "Smart appointment booking"
      ],
      perfectFor: "Customer service, lead gen"
    },
    {
      id: "voice",
      icon: "🎤",
      title: "Voice AI Agent",
      features: [
        "Intelligent phone call handling",
        "Automated customer service calls",
        "Voice-based appointment scheduling",
        "Order processing and tracking"
      ],
      perfectFor: "High call volume businesses"
    },
    {
      id: "automation",
      icon: "⚡",
      title: "Intelligent Automation",
      features: [
        "Workflow and process optimization",
        "Automated data processing",
        "Smart email and follow-up sequences",
        "CRM and tool integrations"
      ],
      perfectFor: "Operations, productivity"
    },
    {
      id: "website",
      icon: "🎨",
      title: "AI-Powered Website",
      features: [
        "Conversion-optimized design",
        "Built-in chatbot integration",
        "Advanced SEO optimization",
        "Analytics and tracking setup"
      ],
      perfectFor: "Online presence, conversions"
    },
    {
      id: "custom",
      icon: "🧠",
      title: "Custom AI Solution",
      features: [
        "Tailored to your unique needs",
        "Industry-specific AI features",
        "Advanced system integrations",
        "Proprietary AI development"
      ],
      perfectFor: "Unique requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Stellar Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary-light rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent-light rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center space-x-2">
            <Star className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Artificial Star</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link to="/">← Back to Home</Link>
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Let's Illuminate Your AI Possibilities
            </h1>
            <span className="text-sm text-foreground-muted">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <p className="text-foreground-muted mt-2">
            Complete this 2-minute assessment to get your personalized AI roadmap
          </p>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border-subtle">
            {/* Step 1: Business Overview */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Tell Us About Your Business</h2>
                  <p className="text-foreground-muted">Help us understand your company so we can recommend perfect AI solutions</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Are you representing a company or are you an individual? *</Label>
                  <RadioGroup value={formData.entityType} onValueChange={(value) => handleInputChange("entityType", value)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 p-4 border border-border-subtle rounded-lg hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="company" id="company" />
                        <Label htmlFor="company" className="flex-1 cursor-pointer">
                          <div className="font-medium">Company</div>
                          <div className="text-sm text-foreground-muted">Representing a business</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border border-border-subtle rounded-lg hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="individual" id="individual" />
                        <Label htmlFor="individual" className="flex-1 cursor-pointer">
                          <div className="font-medium">Individual</div>
                          <div className="text-sm text-foreground-muted">Personal project</div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {formData.entityType === 'company' && (
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                    />
                  </div>
                )}

                <div className="space-y-4">
                  <Label>What services are you interested in? * (Select all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: "chatbot", label: "Smart Chatbot System", desc: "24/7 customer support automation" },
                      { id: "voice", label: "Voice AI Agent", desc: "Intelligent phone call handling" },
                      { id: "automation", label: "Intelligent Automation", desc: "Workflow optimization" },
                      { id: "website", label: "AI-Powered Website", desc: "Conversion-optimized design" },
                      { id: "custom", label: "Custom AI Solution", desc: "Tailored to your needs" }
                    ].map((service) => (
                      <div key={service.id} className="flex items-start space-x-3 p-4 border border-border-subtle rounded-lg hover:border-primary/50 transition-colors">
                        <Checkbox
                          id={service.id}
                          checked={formData.servicesInterested.includes(service.id)}
                          onCheckedChange={(checked) => handleArrayChange("servicesInterested", service.id, checked as boolean)}
                        />
                        <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                          <div className="font-medium">{service.label}</div>
                          <div className="text-sm text-foreground-muted">{service.desc}</div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">What's your budget range? *</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under5k">Under $5,000</SelectItem>
                      <SelectItem value="5-15k">$5,000 - $15,000</SelectItem>
                      <SelectItem value="15-30k">$15,000 - $30,000</SelectItem>
                      <SelectItem value="30-50k">$30,000 - $50,000</SelectItem>
                      <SelectItem value="50-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k+">$100,000+</SelectItem>
                      <SelectItem value="help">Help me determine the right budget</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="initialMessage">Tell us about your project *</Label>
                  <Textarea
                    id="initialMessage"
                    placeholder="Describe what you're looking to achieve with AI..."
                    value={formData.initialMessage}
                    onChange={(e) => handleInputChange("initialMessage", e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Custom Query Option */}
                <div className="pt-4 border-t border-border-subtle">
                  <Button
                    variant="ghost"
                    onClick={() => setShowCustomQuery(prev => ({ ...prev, step1: !prev.step1 }))}
                    className="text-accent hover:text-accent-light"
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Don't see your situation? Add custom details
                  </Button>
                  {showCustomQuery.step1 && (
                    <div className="mt-4 space-y-2">
                      <Label htmlFor="customQuery1">Additional Details</Label>
                      <Textarea
                        id="customQuery1"
                        placeholder="Describe your specific business situation..."
                        value={formData.customQueries.step1 || ""}
                        onChange={(e) => handleCustomQuery("step1", e.target.value)}
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Current Challenges */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">What Business Challenges Keep You Up at Night?</h2>
                  <p className="text-foreground-muted">Select all that apply - the more you tell us, the better we can help</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {challengeOptions.map((challenge) => (
                    <div key={challenge.id} className="flex items-start space-x-3 p-4 border border-border-subtle rounded-lg hover:border-primary/50 transition-colors">
                      <Checkbox
                        id={challenge.id}
                        checked={formData.challenges.includes(challenge.id)}
                        onCheckedChange={(checked) => handleArrayChange("challenges", challenge.id, checked as boolean)}
                      />
                      <Label htmlFor={challenge.id} className="flex-1 cursor-pointer">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-lg">{challenge.icon}</span>
                          <span className="font-medium">{challenge.title}</span>
                        </div>
                        <p className="text-sm text-foreground-muted">{challenge.description}</p>
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="biggestPainPoint">Describe your biggest pain point:</Label>
                  <Textarea
                    id="biggestPainPoint"
                    placeholder="What's the one thing that, if solved, would transform your business?"
                    value={formData.biggestPainPoint}
                    onChange={(e) => handleInputChange("biggestPainPoint", e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Custom Query Option */}
                <div className="pt-4 border-t border-border-subtle">
                  <Button
                    variant="ghost"
                    onClick={() => setShowCustomQuery(prev => ({ ...prev, step2: !prev.step2 }))}
                    className="text-accent hover:text-accent-light"
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Have a unique challenge? Describe it here
                  </Button>
                  {showCustomQuery.step2 && (
                    <div className="mt-4 space-y-2">
                      <Label htmlFor="customQuery2">Custom Challenge</Label>
                      <Textarea
                        id="customQuery2"
                        placeholder="Describe your specific challenge..."
                        value={formData.customQueries.step2 || ""}
                        onChange={(e) => handleCustomQuery("step2", e.target.value)}
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: AI Interest Assessment */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Which AI Solutions Excite You Most?</h2>
                  <p className="text-foreground-muted">Select all that could transform your business (don't worry, we'll help prioritize)</p>
                </div>

                <div className="space-y-4">
                  {aiSolutionOptions.map((solution) => (
                    <div key={solution.id} className="border border-border-subtle rounded-lg p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id={solution.id}
                          checked={formData.aiSolutions.includes(solution.id)}
                          onCheckedChange={(checked) => handleArrayChange("aiSolutions", solution.id, checked as boolean)}
                        />
                        <div className="flex-1">
                          <Label htmlFor={solution.id} className="cursor-pointer">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-2xl">{solution.icon}</span>
                              <span className="text-lg font-semibold">{solution.title}</span>
                            </div>
                            <ul className="space-y-1 mb-3">
                              {solution.features.map((feature, index) => (
                                <li key={index} className="text-sm text-foreground-muted flex items-center">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <p className="text-sm text-accent italic">Perfect for: {solution.perfectFor}</p>
                          </Label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Custom Query Option */}
                <div className="pt-4 border-t border-border-subtle">
                  <Button
                    variant="ghost"
                    onClick={() => setShowCustomQuery(prev => ({ ...prev, step3: !prev.step3 }))}
                    className="text-accent hover:text-accent-light"
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Need something different? Tell us what you're looking for
                  </Button>
                  {showCustomQuery.step3 && (
                    <div className="mt-4 space-y-2">
                      <Label htmlFor="customQuery3">Custom AI Solution</Label>
                      <Textarea
                        id="customQuery3"
                        placeholder="Describe the AI solution you have in mind..."
                        value={formData.customQueries.step3 || ""}
                        onChange={(e) => handleCustomQuery("step3", e.target.value)}
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Project Details */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Let's Talk Timeline & Investment</h2>
                  <p className="text-foreground-muted">This helps us prepare the perfect proposal for you</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label>When do you want to start? *</Label>
                    <RadioGroup value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { value: "asap", icon: "🚨", label: "ASAP", desc: "This is urgent, need to start immediately" },
                          { value: "1month", icon: "🗓️", label: "Within 1 month", desc: "Ready to move quickly" },
                          { value: "1-3months", icon: "📅", label: "1-3 months", desc: "Planning ahead, good timeline" },
                          { value: "3-6months", icon: "🎯", label: "3-6 months", desc: "Strategic planning phase" },
                          { value: "6months+", icon: "🔮", label: "6+ months", desc: "Long-term vision" },
                          { value: "exploring", icon: "🤔", label: "Just exploring", desc: "Gathering information" }
                        ].map((time) => (
                          <div key={time.value} className="flex items-start space-x-3 p-4 border border-border-subtle rounded-lg hover:border-primary/50 transition-colors">
                            <RadioGroupItem value={time.value} id={time.value} />
                            <Label htmlFor={time.value} className="flex-1 cursor-pointer">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-lg">{time.icon}</span>
                                <span className="font-medium">{time.label}</span>
                              </div>
                              <p className="text-sm text-foreground-muted">{time.desc}</p>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>


                  <div className="space-y-2">
                    <Label htmlFor="findUs">How did you find us? *</Label>
                    <Select value={formData.findUs} onValueChange={(value) => handleInputChange("findUs", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select how you found us" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="social">Facebook/Instagram Ad</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="referral">Referral from friend/colleague</SelectItem>
                        <SelectItem value="publication">Industry publication</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Custom Query Option */}
                <div className="pt-4 border-t border-border-subtle">
                  <Button
                    variant="ghost"
                    onClick={() => setShowCustomQuery(prev => ({ ...prev, step4: !prev.step4 }))}
                    className="text-accent hover:text-accent-light"
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Have specific timing or budget considerations?
                  </Button>
                  {showCustomQuery.step4 && (
                    <div className="mt-4 space-y-2">
                      <Label htmlFor="customQuery4">Additional Details</Label>
                      <Textarea
                        id="customQuery4"
                        placeholder="Any specific timing, budget, or other project considerations..."
                        value={formData.customQueries.step4 || ""}
                        onChange={(e) => handleCustomQuery("step4", e.target.value)}
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 5: Vision & Contact */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Paint Us Your AI Success Story</h2>
                  <p className="text-foreground-muted">Help us understand your vision so we can make it reality</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="visionDescription">Describe your ideal AI transformation: *</Label>
                    <Textarea
                      id="visionDescription"
                      placeholder="Imagine it's 6 months from now and AI has transformed your business. What does a typical day look like? What problems are solved? How are you feeling?"
                      value={formData.visionDescription}
                      onChange={(e) => handleInputChange("visionDescription", e.target.value)}
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Any specific requirements or integrations?</Label>
                    <Textarea
                      id="requirements"
                      placeholder="CRM systems (HubSpot, Salesforce), existing tools, special features, compliance needs, etc."
                      value={formData.requirements}
                      onChange={(e) => handleInputChange("requirements", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bestTimeToCall">Best time to call</Label>
                      <Select value={formData.bestTimeToCall} onValueChange={(value) => handleInputChange("bestTimeToCall", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select best time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                          <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                          <SelectItem value="weekends">Weekends work too</SelectItem>
                          <SelectItem value="email">Email only please</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <Label>Preferred communication</Label>
                      <RadioGroup value={formData.preferredCommunication} onValueChange={(value) => handleInputChange("preferredCommunication", value)}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-pref" />
                          <Label htmlFor="email-pref" className="flex items-center space-x-2 cursor-pointer">
                            <Mail className="w-4 h-4" />
                            <span>Email first</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-pref" />
                          <Label htmlFor="phone-pref" className="flex items-center space-x-2 cursor-pointer">
                            <Phone className="w-4 h-4" />
                            <span>Phone call</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="whatsapp" id="whatsapp-pref" />
                          <Label htmlFor="whatsapp-pref" className="flex items-center space-x-2 cursor-pointer">
                            <MessageSquare className="w-4 h-4" />
                            <span>WhatsApp/Text</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                {/* Custom Query Option */}
                <div className="pt-4 border-t border-border-subtle">
                  <Button
                    variant="ghost"
                    onClick={() => setShowCustomQuery(prev => ({ ...prev, step5: !prev.step5 }))}
                    className="text-accent hover:text-accent-light"
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Anything else we should know?
                  </Button>
                  {showCustomQuery.step5 && (
                    <div className="mt-4 space-y-2">
                      <Label htmlFor="customQuery5">Additional Information</Label>
                      <Textarea
                        id="customQuery5"
                        placeholder="Any other details, questions, or requirements..."
                        value={formData.customQueries.step5 || ""}
                        onChange={(e) => handleCustomQuery("step5", e.target.value)}
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 6: Results */}
            {currentStep === 6 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-2">🎉 Your Personalized AI Roadmap is Ready!</h2>
                  <p className="text-foreground-muted">Based on your responses, here's your custom transformation plan</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-2xl">🎯</span>
                      <h3 className="text-lg font-semibold">Recommended Priority Solution</h3>
                    </div>
                    <p className="text-foreground-muted mb-4">
                      {formData.aiSolutions.includes('chatbot') ? 'Smart Chatbot System' :
                       formData.aiSolutions.includes('voice') ? 'Voice AI Agent' :
                       formData.aiSolutions.includes('automation') ? 'Intelligent Automation' :
                       formData.aiSolutions.includes('website') ? 'AI-Powered Website' :
                       'Custom AI Solution'}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-6 border border-accent/20">
                    <div className="flex items-center space-x-2 mb-4">
                      <DollarSign className="w-6 h-6 text-accent" />
                      <h3 className="text-lg font-semibold">Estimated Investment Range</h3>
                    </div>
                    <p className="text-foreground-muted">
                      {formData.budget === 'under5k' ? '$3,000 - $8,000' :
                       formData.budget === '5-15k' ? '$8,000 - $18,000' :
                       formData.budget === '15-30k' ? '$18,000 - $35,000' :
                       formData.budget === '30-50k' ? '$35,000 - $55,000' :
                       formData.budget === '50-100k' ? '$55,000 - $110,000' :
                       formData.budget === '100k+' ? '$100,000+' :
                       'Custom quote based on needs'}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-primary-light/10 to-primary/10 rounded-lg p-6 border border-primary-light/20">
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold">Estimated Timeline</h3>
                    </div>
                    <p className="text-foreground-muted">
                      {formData.timeline === 'asap' ? '2-4 weeks' :
                       formData.timeline === '1month' ? '4-8 weeks' :
                       formData.timeline === '1-3months' ? '6-12 weeks' :
                       formData.timeline === '3-6months' ? '3-6 months' :
                       formData.timeline === '6months+' ? '6+ months' :
                       '2-6 weeks (assessment phase)'}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-accent-light/10 to-accent/10 rounded-lg p-6 border border-accent-light/20">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-2xl">📈</span>
                      <h3 className="text-lg font-semibold">Expected Results</h3>
                    </div>
                    <ul className="space-y-2 text-foreground-muted">
                      <li>• 70% reduction in support time</li>
                      <li>• 40% increase in lead capture</li>
                      <li>• 50% improvement in efficiency</li>
                      <li>• $2,000+ monthly cost savings</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-card rounded-lg p-6 border border-border-subtle">
                  <h3 className="text-xl font-semibold mb-4">Your AI Journey Starts Now:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <h4 className="font-medium">Free Strategy Call</h4>
                        <p className="text-sm text-foreground-muted">We'll call within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">📋</span>
                      <div>
                        <h4 className="font-medium">Custom Proposal</h4>
                        <p className="text-sm text-foreground-muted">Detailed plan within 48 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🚀</span>
                      <div>
                        <h4 className="font-medium">Live Demo</h4>
                        <p className="text-sm text-foreground-muted">See your solution in action</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <h4 className="font-medium">Project Kickoff</h4>
                        <p className="text-sm text-foreground-muted">Start building your AI future</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent-light">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule My Free Strategy Call
                  </Button>
                  <Button variant="outline" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Me the Detailed Proposal
                  </Button>
                  <Button variant="ghost" size="lg">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    I Have Specific Questions
                  </Button>
                </div>

                <div className="text-center space-y-2 text-sm text-foreground-muted">
                  <p>⭐ Join 100+ businesses transforming with AI</p>
                  <p>🔒 Your information is secure and never shared</p>
                  <p>📞 No spam, no pressure - just expert guidance</p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 6 && (
              <div className="flex justify-between items-center pt-8 border-t border-border-subtle">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </Button>

                <div className="flex space-x-2">
                  {currentStep < 5 && (
                    <Button
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent-light"
                    >
                      <span>
                        {currentStep === 1 ? "Continue to Challenges" :
                         currentStep === 2 ? "Next: AI Solutions" :
                         currentStep === 3 ? "Continue to Timeline" :
                         currentStep === 4 ? "Share Your Vision" :
                         "Next"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                  
                  {currentStep === 5 && (
                    <Button
                      onClick={handleSubmit}
                      disabled={!isStepValid()}
                      className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent-light"
                    >
                      <span>Get My AI Roadmap</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIJourneyForm;