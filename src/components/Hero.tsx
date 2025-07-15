import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/40 rounded-full blur-2xl animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-8">
        <div className="max-w-4xl text-center pt-16 mx-0 px-0 py-[12px]">
          {/* Main headline with star */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{stopColor:'#60a5fa', stopOpacity:0.8}} />
                  <stop offset="50%" style={{stopColor:'#a855f7', stopOpacity:0.6}} />
                  <stop offset="100%" style={{stopColor:'transparent', stopOpacity:0}} />
                </radialGradient>
                <linearGradient id="heroStarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#60a5fa'}} />
                  <stop offset="50%" style={{stopColor:'#a855f7'}} />
                  <stop offset="100%" style={{stopColor:'#ec4899'}} />
                </linearGradient>
                <filter id="heroGlowFilter">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <circle cx="40" cy="40" r="28" fill="url(#heroGlow)">
                <animate attributeName="r" values="24;32;24" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
              </circle>
              <polygon points="40,14 48,33 68,33 52,45 57,64 40,53 23,64 28,45 12,33 32,33" fill="url(#heroStarGradient)" filter="url(#heroGlowFilter)">
                <animateTransform attributeName="transform" type="rotate" values="0 40 40;360 40 40" dur="4s" repeatCount="indefinite"/>
              </polygon>
              <circle cx="23" cy="23" r="1" fill="#60a5fa">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="57" cy="29" r="1" fill="#60a5fa">
                <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="29" cy="57" r="1" fill="#60a5fa">
                <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite"/>
              </circle>
              <circle cx="51" cy="51" r="1" fill="#60a5fa">
                <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.5s" repeatCount="indefinite"/>
              </circle>
            </svg>
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }} className="font-handjet tracking-tight md:text-5xl font-normal text-5xl text-left">
              <motion.span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block mb-4" animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }} style={{
              backgroundSize: "200% 200%"
            }}>
                ILLUMINATING THE FUTURE
              </motion.span>
              <motion.span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" animate={{
              backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }} style={{
              backgroundSize: "200% 200%"
            }}>
                WITH INTELLIGENCE
              </motion.span>
            </motion.h1>
          </div>
          
          {/* Subheadline */}
          <motion.p className="text-xl md:text-2xl text-foreground-muted mb-12 max-w-4xl mx-auto leading-relaxed" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut"
        }}>
            Transform your business with AI solutions that don't just automate - they illuminate new possibilities.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6,
          ease: "easeOut"
        }}>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button variant="hero" size="xl" className="group">
                Start Your AI Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button variant="glass" size="xl" className="group">
                <Sparkles className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Illuminate Your Business
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div className="mt-20" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.9
        }}>
            <motion.p className="text-sm text-foreground-subtle mb-8 uppercase tracking-wider" animate={{
            opacity: [0.6, 1, 0.6]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
              Illuminating businesses with intelligent solutions
            </motion.p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {[...Array(3)].map((_, i) => <motion.div key={i} className="w-24 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded" animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.95, 1.05, 0.95]
            }} transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }} />)}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground-muted rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default Hero;