import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import StarLogo from "./StarLogo";
import PhoneInput from "./PhoneInput";
import { aiJourneyFormSchema, sanitizeInput, aiJourneyFormLimiter, type AIJourneyFormData } from "@/lib/security";

interface FormData {
  firstName: string;
  lastName: string;
  entityType: string;
  companyName: string;
  email: string;
  phone: string;
  countryCode: string;
  servicesInterested: string[];
  budget: string;
  initialMessage: string;
  honeypot: string;
}

const AIJourneyForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    entityType: "",
    companyName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    servicesInterested: [],
    budget: "",
    initialMessage: "",
    honeypot: ""
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

  const handleSubmit = async () => {
    try {
      // Sanitize all form data
      const sanitizedData = {
        firstName: sanitizeInput(formData.firstName),
        lastName: sanitizeInput(formData.lastName),
        entityType: sanitizeInput(formData.entityType),
        companyName: sanitizeInput(formData.companyName),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        countryCode: sanitizeInput(formData.countryCode),
        servicesInterested: formData.servicesInterested.map(service => sanitizeInput(service)),
        budget: sanitizeInput(formData.budget),
        initialMessage: sanitizeInput(formData.initialMessage),
        honeypot: formData.honeypot,
      };

      // Check honeypot (spam protection)
      if (sanitizedData.honeypot) {
        toast({
          title: "Submission blocked",
          description: "Please try again.",
        });
        return;
      }

      // Rate limiting check
      const clientId = `${sanitizedData.email}-${Date.now()}`;
      if (!aiJourneyFormLimiter.canAttempt(clientId)) {
        toast({
          title: "Too many submissions",
          description: "Please wait before submitting again.",
        });
        return;
      }

      // Validate form data
      const validationResult = aiJourneyFormSchema.safeParse(sanitizedData);
      if (!validationResult.success) {
        toast({
          title: "Validation error",
          description: validationResult.error.errors[0].message,
        });
        return;
      }

      // Record rate limit attempt
      aiJourneyFormLimiter.recordAttempt(clientId);

      // Create form data to send
      const submitData = new FormData();
      submitData.append('firstName', sanitizedData.firstName);
      submitData.append('lastName', sanitizedData.lastName);
      submitData.append('entityType', sanitizedData.entityType);
      submitData.append('companyName', sanitizedData.companyName);
      submitData.append('email', sanitizedData.email);
      submitData.append('phone', `${sanitizedData.countryCode}${sanitizedData.phone}`);
      submitData.append('servicesInterested', sanitizedData.servicesInterested.join(', '));
      submitData.append('budget', sanitizedData.budget);
      submitData.append('initialMessage', sanitizedData.initialMessage);
      submitData.append('_subject', 'New AI Journey Assessment - Artificial Star');

      const response = await fetch("https://formspree.io/f/mzzvbjyp", {
        method: "POST",
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Assessment Submitted!",
          description: "Your AI roadmap is being generated. We'll contact you within 24 hours.",
        });
        
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          entityType: "",
          companyName: "",
          email: "",
          phone: "",
          countryCode: "+1",
          servicesInterested: [],
          budget: "",
          initialMessage: "",
          honeypot: ""
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error submitting assessment",
        description: "Please try again or contact us directly.",
      });
    }
  };

  const isFormValid = () => {
    const baseValid = formData.firstName && formData.lastName && formData.entityType && 
           formData.servicesInterested.length > 0 && formData.budget && formData.initialMessage;
    
    if (formData.entityType === 'individual') {
      return baseValid && formData.email; // Email is required for individuals
    } else if (formData.entityType === 'company') {
      return baseValid && formData.companyName;
    }
    
    return baseValid;
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
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <StarLogo size={40} animated={true} glowIntensity={0.9} rotationSpeed={1.5} />
            <div className="logo-text flex items-center">
              <span className="transition-all duration-300 font-tomorrow text-4xl text-left tracking-wide text-purple-600 font-medium">
                Artificial Star
              </span>
            </div>
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

              {formData.entityType === 'individual' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <PhoneInput
                      value={formData.phone}
                      onChange={(value) => handleInputChange("phone", value)}
                      countryCode={formData.countryCode}
                      onCountryCodeChange={(code) => handleInputChange("countryCode", code)}
                      placeholder="Enter your phone number"
                    />
                  </div>
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

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => handleInputChange("honeypot", e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

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
