// src/components/FeaturedProject.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function FeaturedProject() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="relative px-6 md:px-20 py-16 md:py-32 overflow-hidden"
    >
      <div className="hidden md:block absolute -right-32 top-20 w-[450px] h-[450px] rounded-full bg-accent/10 blur-[110px] pointer-events-none" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-accent font-mono text-sm mb-3 text-center md:text-left"
      >
        Featured work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-16 text-center md:text-left"
      >
        Selected projects
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Big featured card — primary project only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative border border-foreground/10 rounded-2xl p-8 md:p-14 bg-foreground/[0.02] hover:border-accent/40 hover:bg-foreground/[0.04] transition-all"
        >
          <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
            <div>
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-accent/10 text-accent mb-4">
                {featured.status}
              </span>
              <h3 className="text-3xl md:text-6xl font-bold">
                {featured.title}
              </h3>
            </div>
            <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
              <ArrowUpRight className="w-6 h-6 text-accent group-hover:rotate-45 transition-transform" />
            </div>
          </div>

          <p className="text-foreground/70 max-w-2xl mb-10 leading-relaxed text-base md:text-lg">
            {featured.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {featured.stack.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-full bg-foreground/5 text-foreground/70 border border-foreground/5"
              >
                {t}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${featured.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:scale-[1.02] transition-transform"
          >
            View case study
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Compact cards — everything else, side by side on desktop */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full border border-foreground/10 rounded-2xl p-6 md:p-8 hover:border-accent/40 hover:bg-foreground/[0.03] transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/50">
                      {project.status}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-accent group-hover:rotate-45 transition-all" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-5 leading-relaxed">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
