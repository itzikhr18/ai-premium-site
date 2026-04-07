"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function HeroSection({ badge, title, subtitle, children }: HeroProps) {
  return (
    <header className="relative bg-gradient-to-br from-[#0F0A2E] via-[#1a1145] to-[#2d1a6b] text-white text-center pt-44 pb-28 overflow-hidden">
      {/* Animated orbs */}
      <motion.div
        className="absolute -top-1/2 -right-[30%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,58,237,0.15),transparent_70%)]"
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[40%] -left-[20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.1),transparent_70%)]"
        animate={{ y: [0, 30, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-[90%] max-w-4xl mx-auto">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-accent-light px-5 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm"
          >
            {badge}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight bg-gradient-to-br from-white to-purple-300 bg-clip-text text-transparent"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </header>
  );
}
