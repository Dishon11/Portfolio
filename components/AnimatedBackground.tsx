// src/components/AnimatedBackground.tsx
"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const ACCENT_RGB = "56, 189, 248";

function FloatingParticles() {
  // generate random particle configs once, not on every render
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 8,
      drift: (Math.random() - 0.5) * 60,
    }));
  }, []);

  return (
    <>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: "-5%",
            width: p.size,
            height: p.size,
            background: `rgba(${ACCENT_RGB}, 0.6)`,
            boxShadow: `0 0 ${p.size * 3}px rgba(${ACCENT_RGB}, 0.8)`,
          }}
          animate={{
            y: ["0vh", "-110vh"],
            x: [0, p.drift],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Moving grid layer */}
      <motion.div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles drifting upward */}
      <FloatingParticles />

      {/* Blobs */}
      <motion.div
        className="absolute rounded-full w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[600px] md:h-[600px]"
        style={{
          top: "-5%",
          left: "-10%",
          background: "rgba(56, 189, 248, 0.15)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 60, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[500px] md:h-[500px]"
        style={{
          top: "40%",
          right: "-8%",
          background: "rgba(59, 130, 246, 0.12)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute rounded-full w-[450px] h-[450px]"
        style={{
          bottom: "-15%",
          left: "30%",
          background: "rgba(34, 211, 238, 0.10)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
