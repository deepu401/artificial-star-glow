import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+1", country: "CA", flag: "🇨🇦" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+39", country: "IT", flag: "🇮🇹" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+7", country: "RU", flag: "🇷🇺" },
  { code: "+55", country: "BR", flag: "🇧🇷" },
  { code: "+52", country: "MX", flag: "🇲🇽" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+27", country: "ZA", flag: "🇿🇦" },
  { code: "+82", country: "KR", flag: "🇰🇷" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+966", country: "SA", flag: "🇸🇦" },
  { code: "+41", country: "CH", flag: "🇨🇭" },
];

const PhoneInput = ({ 
  value, 
  onChange, 
  countryCode, 
  onCountryCodeChange, 
  placeholder = "Enter phone number",
  required = false,
  className = ""
}: PhoneInputProps) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <Select value={countryCode} onValueChange={onCountryCodeChange}>
        <SelectTrigger className="w-20 bg-background-card border-border-subtle focus:border-primary transition-colors duration-300">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-background/95 backdrop-blur-xl border border-border-subtle z-50 max-h-60">
          {countryCodes.map((country) => (
            <SelectItem key={`${country.code}-${country.country}`} value={country.code}>
              <div className="flex items-center gap-2">
                <span>{country.flag}</span>
                <span>{country.code}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="flex-1 bg-background-card border-border-subtle focus:border-primary transition-colors duration-300"
      />
    </div>
  );
};

export default PhoneInput;