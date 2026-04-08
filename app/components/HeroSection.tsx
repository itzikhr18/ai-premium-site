"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Spotlight } from "@/components/ui/spotlight";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function HeroSection({ badge, title, subtitle, children }: HeroProps) {
  return (
    <header className="relative bg-gradient-to-br from-[#0F0A2E] via-[#1a1145] to-[#2d1a6b] text-white text-center pt-44 pb-28 overflow-hidden">
      {/* Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* AI Tech Grid */}
      <div className="absolute inset-0 ai-grid" />

      {/* Animated orbs */}
      <motion.div
        className="absolute -top-1/3 -right-[20%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(108,58,237,0.2),transparent_60%)]"
        animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[30%] -left-[15%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.15),transparent_60%)]"
        animate={{ y: [0, 30, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.1),transparent_60%)]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating accent shapes */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-3 h-3 rounded-full bg-accent/40"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] left-[5%] w-2 h-2 rounded-full bg-primary-light/50"
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-[40%] right-[15%] w-4 h-4 rounded-full bg-accent-light/30 blur-[2px]"
        animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[25%] w-2 h-2 rounded-full bg-purple-400/40"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-[70%] left-[20%] w-3 h-3 rounded-full bg-cyan-400/30 blur-[1px]"
        animate={{ y: [0, -18, 0], x: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <div className="relative z-10 w-[90%] max-w-4xl mx-auto">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-accent-light px-5 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm animate-[glowPulse_3s_ease-in-out_infinite]"
          >
            <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
            {badge}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight bg-gradient-to-r from-white via-purple-200 to-accent-light bg-clip-text text-transparent text-shimmer"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
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
