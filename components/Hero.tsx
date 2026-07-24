// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 px-6 md:px-20 py-20 pt-28 md:pt-20 text-center md:text-left">
      {/* Left side — text */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-mono mb-4 text-sm md:text-base"
        >
          Full-Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold max-w-xl"
        >
          I build mobile apps and web platforms end-to-end.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-foreground/70 mt-6 max-w-md"
        >
          Building MyCoreRise — a wellness app with React Native, Supabase, and
          RestAPI.
        </motion.p>

        <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium text-sm md:text-base"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-foreground/20 rounded-lg font-medium text-sm md:text-base"
          >
            Resume
          </a>
        </div>
      </div>
      {/* Right side — photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] flex-shrink-0"
      >
        {/* Layered glow — cyan/blue, matches theme */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-cyan-400 to-blue-500 blur-3xl opacity-40" />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-accent/30"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <Image
          src="/profile.jpg"
          alt="Dishon John Siddapur"
          fill
          priority
          className="relative rounded-full object-cover border-4 border-foreground/20 shadow-xl"
        />
      </motion.div>
    </section>
  );
}
