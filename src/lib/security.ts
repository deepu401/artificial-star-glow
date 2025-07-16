import DOMPurify from 'dompurify';
import { z } from 'zod';

// Input sanitization utility
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
};

// Rate limiting utility
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly timeWindow: number;

  constructor(maxAttempts: number = 3, timeWindowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.timeWindow = timeWindowMs;
  }

  canAttempt(key: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Filter out old attempts
    const recentAttempts = attempts.filter(time => now - time < this.timeWindow);
    
    // Update attempts
    this.attempts.set(key, recentAttempts);
    
    return recentAttempts.length < this.maxAttempts;
  }

  recordAttempt(key: string): void {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    attempts.push(now);
    this.attempts.set(key, attempts);
  }
}

// Create rate limiter instances
export const contactFormLimiter = new RateLimiter(3, 300000); // 3 attempts per 5 minutes
export const aiJourneyFormLimiter = new RateLimiter(2, 600000); // 2 attempts per 10 minutes

// Validation schemas
export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  countryCode: z.string().optional(),
  company: z.string().max(100, 'Company name too long').optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message too long'),
  honeypot: z.string().optional(),
});

export const aiJourneyFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long'),
  entityType: z.enum(['company', 'individual']),
  companyName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  countryCode: z.string().optional(),
  servicesInterested: z.array(z.string()).min(1, 'Please select at least one service'),
  budget: z.string().min(1, 'Budget range is required'),
  initialMessage: z.string().min(20, 'Please provide more details about your project').max(2000, 'Message too long'),
  honeypot: z.string().optional(),
}).refine((data) => {
  if (data.entityType === 'company' && !data.companyName) {
    return false;
  }
  return true;
}, {
  message: 'Company name is required for company entities',
  path: ['companyName'],
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AIJourneyFormData = z.infer<typeof aiJourneyFormSchema>;