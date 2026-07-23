// src/components/Experience.tsx
"use client";

import { motion } from "framer-motion";
import { Rocket, Code, Users } from "lucide-react";

const items = [
  {
    role: "Technical Co-Founder",
    org: "MyCoreRise",
    period: "2026 — Ongoing",
    status: "Active",
    detail:
      "Sole technical co-founder — built the mobile app, backend, and admin dashboard end-to-end. RLS-secured Supabase schema, audit logging, EAS update pipeline.",
    icon: Rocket,
  },
  {
    role: "Frontend Development Intern",
    org: "One-month internship",
    period: "2026 — Completed",
    status: "Completed",
    detail:
      "Built production interfaces with Next.js, TypeScript, Tailwind CSS, and shadcn/ui under real delivery constraints.",
    icon: Code,
  },
  {
    role: "Board Member",
    org: "Innovation and Incubation Cell",
    period: "2025 — Ongoing",
    status: "Active",
    detail:
      "Led the design/creativity team, taught web development to peers, led a team to SIH 2025 institution finals.",
    icon: Users,
  },
];

export default function Experience() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-20 py-16 md:py-32 overflow-hidden"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-accent font-mono text-sm mb-3 text-center md:text-left"
      >
        Where I&apos;ve been
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-20 text-center md:text-left"
      >
        Experience
      </motion.h2>

      {/* Center line — desktop only */}
      <div className="hidden md:block absolute left-1/2 top-52 bottom-32 w-px bg-gradient-to-b from-accent/60 via-foreground/10 to-transparent -translate-x-1/2" />

      <div className="flex flex-col gap-16 md:gap-24 max-w-5xl mx-auto">
        {items.map((item, i) => {
          const Icon = item.icon;
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center gap-6 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Node on center line */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-background border border-accent/40 items-center justify-center z-10">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={2} />
                </div>
              </div>

              {/* Card */}
              <div
                className={`w-full md:w-[calc(50%-3rem)] border border-foreground/10 rounded-2xl p-6 md:p-7 bg-foreground/[0.02] hover:border-accent/40 hover:bg-foreground/[0.04] transition-all ${
                  isEven ? "md:text-right" : "md:text-left"
                }`}
              >
                <div className={`flex items-center gap-3 mb-3 md:hidden`}>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={2} />
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 mb-2 ${isEven ? "md:justify-end" : ""}`}
                >
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      item.status === "Active"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-foreground/10 text-foreground/50"
                    }`}
                  >
                    {item.status === "Active" && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse" />
                    )}
                    {item.status}
                  </span>
                  <span className="text-xs text-foreground/40 font-mono">
                    {item.period}
                  </span>
                </div>

                <p className="text-lg md:text-xl font-bold mb-1">{item.role}</p>
                <p className="text-sm text-accent/80 mb-3">{item.org}</p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Spacer for the other side on desktop */}
              <div className="hidden md:block w-[calc(50%-3rem)]" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
