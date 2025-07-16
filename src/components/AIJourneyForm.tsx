import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  entityType: string;
  companyName: string;
  servicesInterested: string[];
  budget: string;
  initialMessage: string;
}

const AIJourneyForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    entityType: "",
    companyName: "",
    servicesInterested: [],
    budget: "",
    initialMessage: ""
  });
  
  const { toast } = useToast();

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

  const handleSubmit = () => {
    if (!isFormValid()) {
      toast({
        title: "Please fill all required fields",
        description: "Make sure to complete all required information before submitting.",
      });
      return;
    }

    toast({
      title: "Assessment Submitted!",
      description: "Your AI roadmap is being generated. We'll contact you within 24 hours.",
    });
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
  };

  const isFormValid = () => {
    return formData.firstName && formData.lastName && formData.entityType && 
           (formData.entityType === 'individual' || formData.companyName) &&
           formData.servicesInterested.length > 0 && formData.budget && formData.initialMessage;
  };

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

        {/* Header */}
        <div className="mb-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Let's Illuminate Your AI Possibilities
            </h1>
            <p className="text-foreground-muted">
              Tell us about your project to get started with your AI journey
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border-subtle">
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
                <Input
                  id="budget"
                  type="text"
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                />
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

              {/* Navigation */}
              <div className="flex justify-center pt-6">
                <Button 
                  onClick={handleSubmit} 
                  disabled={!isFormValid()}
                  className="min-w-[200px]"
                  size="lg"
                >
                  Submit Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIJourneyForm;