// Security configuration for the application
export const SECURITY_CONFIG = {
  // Rate limiting settings
  RATE_LIMIT: {
    CONTACT_FORM: {
      MAX_ATTEMPTS: 3,
      TIME_WINDOW_MS: 5 * 60 * 1000, // 5 minutes
    },
    AI_JOURNEY_FORM: {
      MAX_ATTEMPTS: 2,
      TIME_WINDOW_MS: 10 * 60 * 1000, // 10 minutes
    },
  },

  // Input validation limits
  INPUT_LIMITS: {
    NAME_MAX_LENGTH: 50,
    EMAIL_MAX_LENGTH: 254,
    COMPANY_MAX_LENGTH: 100,
    MESSAGE_MIN_LENGTH: 10,
    MESSAGE_MAX_LENGTH: 1000,
    PROJECT_MESSAGE_MIN_LENGTH: 20,
    PROJECT_MESSAGE_MAX_LENGTH: 2000,
  },

  // Security headers (for reference - to be implemented at deployment level)
  SECURITY_HEADERS: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  },

  // Content Security Policy (for reference)
  CSP_DIRECTIVES: {
    'default-src': "'self'",
    'script-src': "'self' 'unsafe-inline' https://formspree.io",
    'style-src': "'self' 'unsafe-inline'",
    'img-src': "'self' data: https:",
    'font-src': "'self' https://fonts.gstatic.com",
    'connect-src': "'self' https://formspree.io",
    'frame-src': "'none'",
    'object-src': "'none'",
    'base-uri': "'self'",
    'form-action': "'self' https://formspree.io",
  },
} as const;