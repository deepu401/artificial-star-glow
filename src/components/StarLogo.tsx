"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Star, Sparkles, Zap } from "lucide-react";

interface StarLogoProps {
  size?: number;
  animated?: boolean;
  glowIntensity?: number;
  rotationSpeed?: number;
}

const StarLogo: React.FC<StarLogoProps> = ({
  size = 40,
  animated = true,
  glowIntensity = 0.8,
  rotationSpeed = 2,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative"
      style={{ width: size * 1.5, height: size * 1.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Outer Glow Ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, ${glowIntensity * 0.3}) 0%, rgba(147, 51, 234, ${glowIntensity * 0.2}) 50%, transparent 70%)`,
          filter: "blur(8px)",
        }}
        animate={animated ? { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Middle Glow Ring */}
      <motion.div
        className="absolute inset-1 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, ${glowIntensity * 0.4}) 0%, rgba(147, 51, 234, ${glowIntensity * 0.3}) 60%, transparent 80%)`,
          filter: "blur(6px)",
        }}
        animate={animated ? { scale: [1.1, 0.9, 1.1], opacity: [0.6, 1, 0.6] } : {}}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Main Star Container */}
      <motion.div
        className="absolute inset-2 flex items-center justify-center"
        style={{
          rotateX: animated ? rotateX : 0,
          rotateY: animated ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        animate={animated ? { rotate: 360 } : {}}
        transition={{ duration: rotationSpeed * 10, repeat: Infinity, ease: "linear" }}
      >
        {/* Central Star */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Star
            size={size}
            className="text-blue-400 fill-blue-400/20 drop-shadow-2xl"
            style={{
              filter: `drop-shadow(0 0 ${size * 0.3}px rgba(59, 130, 246, ${glowIntensity}))`,
            }}
          />
          
          {/* Inner Sparkle */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={animated ? { rotate: -360 } : {}}
            transition={{ duration: rotationSpeed * 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles
              size={size * 0.4}
              className="text-purple-400 fill-purple-400/30"
              style={{
                filter: `drop-shadow(0 0 ${size * 0.2}px rgba(147, 51, 234, ${glowIntensity * 0.8}))`,
              }}
            />
          </motion.div>

          {/* Core Energy */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={animated ? { scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
              style={{
                width: size * 0.15,
                height: size * 0.15,
                boxShadow: `0 0 ${size * 0.4}px rgba(59, 130, 246, ${glowIntensity})`,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Orbiting Elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: size * 1.4,
              height: size * 1.4,
            }}
            animate={animated ? { rotate: 360 } : {}}
            transition={{
              duration: rotationSpeed * (5 + i),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            <motion.div
              className="absolute"
              style={{
                top: `${20 + i * 15}%`,
                left: "50%",
                transform: "translateX(-50%)",
              }}
              animate={animated ? { scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] } : {}}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              <Zap
                size={size * 0.15}
                className="text-cyan-400 fill-cyan-400/50"
                style={{
                  filter: `drop-shadow(0 0 ${size * 0.1}px rgba(34, 211, 238, ${glowIntensity * 0.6}))`,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive Particles */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full"
              style={{
                left: `${50 + Math.cos((i / 8) * Math.PI * 2) * 40}%`,
                top: `${50 + Math.sin((i / 8) * Math.PI * 2) * 40}%`,
                boxShadow: `0 0 ${size * 0.05}px rgba(59, 130, 246, 0.8)`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default StarLogo;