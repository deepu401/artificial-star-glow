"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, Zap } from "lucide-react";

const FixedStarLogo = () => {
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
      <motion.div
        className="relative"
        style={{ width: 160, height: 160 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Outer Glow Ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 70%)`,
            filter: "blur(20px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Middle Glow Ring */}
        <motion.div
          className="absolute inset-4 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 60%, transparent 80%)`,
            filter: "blur(15px)",
          }}
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Main Star Container */}
        <motion.div
          className="absolute inset-8 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Central Star */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Star
              size={80}
              className="text-blue-400 fill-blue-400/20 drop-shadow-2xl"
              style={{
                filter: `drop-shadow(0 0 24px rgba(59, 130, 246, 0.8))`,
              }}
            />
            
            {/* Inner Sparkle */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles
                size={32}
                className="text-purple-400 fill-purple-400/30"
                style={{
                  filter: `drop-shadow(0 0 16px rgba(147, 51, 234, 0.7))`,
                }}
              />
            </motion.div>

            {/* Core Energy */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                style={{
                  width: 12,
                  height: 12,
                  boxShadow: `0 0 32px rgba(59, 130, 246, 0.8)`,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Orbiting Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: 144,
                height: 144,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: (5 + i) * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            >
              <motion.div
                className="absolute"
                style={{
                  top: `${20 + i * 10}%`,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                <Zap
                  size={8}
                  className="text-cyan-400 fill-cyan-400/50"
                  style={{
                    filter: `drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FixedStarLogo;