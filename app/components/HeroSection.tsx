"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
  splineScene?: string;
}

export function HeroSection({ badge, title, subtitle, children, splineScene }: HeroProps) {
  return (
    <header className="relative bg-black/[0.96] text-white pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Background gradient orbs */}
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

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text content - right side in RTL */}
          <div className="flex-1 text-center md:text-right">
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
              className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl md:mr-0 mx-auto"
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

          {/* 3D Spline scene - left side in RTL */}
          {splineScene && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex-1 h-[400px] md:h-[500px] relative"
            >
              <SplineScene
                scene={splineScene}
                className="w-full h-full"
              />
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
