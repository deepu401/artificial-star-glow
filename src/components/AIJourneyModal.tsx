import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Rocket, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIJourneyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AIJourneyModal = ({ open, onOpenChange }: AIJourneyModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectTypes: [] as string[],
    budget: "",
    timeline: "",
    projectDescription: "",
    currentChallenges: ""
  });

  const { toast } = useToast();

  const projectTypes = [
    "Custom Chatbot Development",
    "Voice Agent Implementation", 
    "Intelligent Automation",
    "Website Design & Development",
    "AI Consultation",
    "Complete AI Transformation"
  ];

  const budgetRanges = [
    "$5,000 - $15,000",
    "$15,000 - $30,000", 
    "$30,000 - $50,000",
    "$50,000+",
    "Not sure yet"
  ];

  const timelineOptions = [
    "ASAP (Rush project)",
    "1-2 months",
    "3-6 months", 
    "6+ months",
    "Just exploring"
  ];

  const handleProjectTypeChange = (projectType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: checked 
        ? [...prev.projectTypes, projectType]
        : prev.projectTypes.filter(type => type !== projectType)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "AI Journey Started! 🚀",
      description: "We'll review your requirements and get back to you within 24 hours.",
    });

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onOpenChange(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectTypes: [],
        budget: "",
        timeline: "",
        projectDescription: "",
        currentChallenges: ""
      });
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card backdrop-blur-xl border-border-subtle">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Start Your AI Journey
          </DialogTitle>
          <p className="text-foreground-muted">
            Tell us about your project and we'll create a custom AI solution roadmap for you
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">
                  Name *
                </label>
                <Input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                  className="bg-background-card border-border-subtle focus:border-primary"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">
                  Email *
                </label>
                <Input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                  className="bg-background-card border-border-subtle focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">
                  Company
                </label>
                <Input 
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
                  className="bg-background-card border-border-subtle focus:border-primary"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">
                  Phone
                </label>
                <Input 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                  className="bg-background-card border-border-subtle focus:border-primary"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* Project Type */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Project Type</h3>
            <p className="text-sm text-foreground-muted">Select all that apply</p>
            <div className="grid md:grid-cols-2 gap-3">
              {projectTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox 
                    id={type}
                    checked={formData.projectTypes.includes(type)}
                    onCheckedChange={(checked) => handleProjectTypeChange(type, checked as boolean)}
                    className="border-border-subtle"
                  />
                  <label 
                    htmlFor={type} 
                    className="text-sm text-foreground-muted cursor-pointer"
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Budget and Timeline */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground-muted mb-2">
                Budget Range
              </label>
              <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                <SelectTrigger className="bg-background-card border-border-subtle focus:border-primary">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>{range}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground-muted mb-2">
                Timeline
              </label>
              <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({...prev, timeline: value}))}>
                <SelectTrigger className="bg-background-card border-border-subtle focus:border-primary">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {timelineOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground-muted mb-2">
                Project Description
              </label>
              <Textarea 
                value={formData.projectDescription}
                onChange={(e) => setFormData(prev => ({...prev, projectDescription: e.target.value}))}
                rows={4}
                className="bg-background-card border-border-subtle focus:border-primary"
                placeholder="Tell us about your AI vision and requirements..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground-muted mb-2">
                Current Challenges
              </label>
              <Textarea 
                value={formData.currentChallenges}
                onChange={(e) => setFormData(prev => ({...prev, currentChallenges: e.target.value}))}
                rows={4}
                className="bg-background-card border-border-subtle focus:border-primary"
                placeholder="What business challenges are you trying to solve?"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button 
              type="submit" 
              variant="premium" 
              size="xl" 
              className="w-full"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin mr-2" />
                  Launching Your Journey...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="mr-2" />
                  Journey Launched! 🚀
                </>
              ) : (
                <>
                  <Rocket className="mr-2" />
                  Launch My AI Journey
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AIJourneyModal;