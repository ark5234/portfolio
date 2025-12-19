import React from "react";
import { motion } from "framer-motion";

export const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none transition-colors duration-300">
      {/* Top Left - Purple/Pink */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-purple-300/30 blur-[80px] dark:bg-purple-900/20 mix-blend-multiply dark:mix-blend-screen will-change-transform transform-gpu"
      />

      {/* Bottom Right - Blue/Cyan */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, -30, 0],
          y: [0, -50, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-300/30 blur-[80px] dark:bg-blue-900/20 mix-blend-multiply dark:mix-blend-screen will-change-transform transform-gpu"
      />

      {/* Center - Indigo/Accent */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-indigo-300/20 blur-[100px] dark:bg-indigo-900/10 mix-blend-multiply dark:mix-blend-screen will-change-transform transform-gpu"
      />
    </div>
  );
};
