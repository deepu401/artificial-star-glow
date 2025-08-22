import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

      <div className="container px-6 relative z-10 py-8 mx-[200px]">
        <div className="max-w-4xl text-center pt-16 px-0 py-[12px] mx-0">
          {/* Main headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="font-tomorrow mb-12 tracking-wide md:text-5xl font-light text-4xl md:text-left leading-tight text-left mx-0">
            <motion.span animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }} style={{
            backgroundSize: "200% 200%"
          }} className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block mb-4 mx-0 px-0 my-[18px]">
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
          
          {/* Subheadline */}
          <motion.p className="text-lg md:text-xl text-foreground-muted mb-16 max-w-3xl mx-auto leading-loose font-light" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut"
        }}>Transform your business with AI solutions that don't just automate - they illuminate new possibilities.</motion.p>
          
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
              <Button variant="hero" size="xl" className="group" asChild>
                <Link to="/ai-journey">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button variant="glass" size="xl" className="group" asChild>
                <Link to="/services">
                  <Sparkles className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Stats bar */}
          <motion.div className="mt-20" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.9
        }}>
            
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