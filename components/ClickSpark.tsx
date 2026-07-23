// src/components/ClickSpark.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
  id: number;
  x: number;
  y: number;
}

export default function ClickSpark() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setSparks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== id));
      }, 800);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const PARTICLE_COUNT = 14;

  return (
    <AnimatePresence>
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="fixed pointer-events-none z-[9999]"
          style={{ left: spark.x, top: spark.y }}
        >
          {/* Expanding ring flash */}
          <motion.div
            className="absolute rounded-full border-2 border-accent"
            style={{ left: 0, top: 0 }}
            initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.8 }}
            animate={{ width: 60, height: 60, x: -30, y: -30, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Center flash burst */}
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-accent"
            style={{ left: -6, top: -6 }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />

          {/* Flying particles — mixed sizes and distances */}
          {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
            const angle = (i / PARTICLE_COUNT) * 360 + Math.random() * 20;
            const distance = 35 + Math.random() * 40;
            const size = 2 + Math.random() * 3;
            return (
              <motion.span
                key={i}
                className="absolute rounded-full bg-accent"
                style={{ width: size, height: size }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * distance,
                  y: Math.sin((angle * Math.PI) / 180) * distance,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{
                  duration: 0.6 + Math.random() * 0.3,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>
      ))}
    </AnimatePresence>
  );
}
