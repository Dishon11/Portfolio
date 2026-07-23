// src/components/CursorGlow.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

interface TrailParticle {
  id: number;
  x: number;
  y: number;
}

const ACCENT_RGB = "56, 189, 248"; // cyan — matches --accent
const MAX_TRAIL = 35; // more particles kept alive = longer tail
const SPAWN_INTERVAL = 16; // ms between spawns = denser tail (lower = denser)
const PARTICLE_LIFETIME = 900; // ms each particle stays visible = longer tail

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<TrailParticle[]>([]);
  const lastSpawn = useRef(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ringX = useSpring(mouseX, { damping: 20, stiffness: 250 });
  const ringY = useSpring(mouseY, { damping: 20, stiffness: 250 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const now = Date.now();
      if (now - lastSpawn.current > SPAWN_INTERVAL) {
        lastSpawn.current = now;
        const id = now + Math.random();
        setTrail((prev) => [
          ...prev.slice(-MAX_TRAIL),
          { id, x: e.clientX, y: e.clientY },
        ]);
        setTimeout(() => {
          setTrail((prev) => prev.filter((p) => p.id !== id));
        }, PARTICLE_LIFETIME);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, isVisible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <div className="hidden md:block">
      {/* Trailing spark particles */}
      <AnimatePresence>
        {trail.map((p, i) => {
          const fadeFactor = i / trail.length; // older particles (lower i) are smaller/dimmer
          return (
            <motion.div
              key={p.id}
              className="pointer-events-none fixed rounded-full z-[9997]"
              style={{
                left: p.x,
                top: p.y,
                translateX: "-50%",
                translateY: "-50%",
                background: `rgba(${ACCENT_RGB}, ${0.3 + fadeFactor * 0.5})`,
              }}
              initial={{ width: 5, height: 5, opacity: 0.9 }}
              animate={{ width: 0, height: 0, opacity: 0 }}
              transition={{
                duration: PARTICLE_LIFETIME / 1000,
                ease: "easeOut",
              }}
            />
          );
        })}
      </AnimatePresence>

      {/* Center dot — snaps instantly to real cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-1.5 h-1.5 rounded-full z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: `rgb(${ACCENT_RGB})`,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Rotating reticle ring with crosshair ticks */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <svg width="70" height="70" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="17"
            fill="none"
            stroke={`rgba(${ACCENT_RGB}, 0.5)`}
            strokeWidth="1"
          />
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="6"
            stroke={`rgba(${ACCENT_RGB}, 0.8)`}
            strokeWidth="1.5"
          />
          <line
            x1="20"
            y1="34"
            x2="20"
            y2="40"
            stroke={`rgba(${ACCENT_RGB}, 0.8)`}
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="20"
            x2="6"
            y2="20"
            stroke={`rgba(${ACCENT_RGB}, 0.8)`}
            strokeWidth="1.5"
          />
          <line
            x1="34"
            y1="20"
            x2="40"
            y2="20"
            stroke={`rgba(${ACCENT_RGB}, 0.8)`}
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>
    </div>
  );
}
