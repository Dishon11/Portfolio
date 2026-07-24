// src/app/projects/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 md:px-20 pt-32 pb-20">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-accent font-mono text-sm mb-3"
      >
        Everything I&apos;ve built
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Projects
      </motion.h1>
      <p className="text-foreground/70 max-w-xl mb-14">
        A selection of things I&apos;ve built end-to-end — mobile, backend, and
        infra.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block h-full border border-foreground/10 rounded-2xl p-6 md:p-8 bg-foreground/[0.02] hover:border-accent/40 hover:bg-foreground/[0.04] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                  {project.status}
                </span>
                <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-accent group-hover:rotate-45 transition-all" />
              </div>

              <h2 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <p className="text-foreground/60 mb-6 text-sm leading-relaxed">
                {project.tagline}
              </p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline"
                >
                  Visit live site →
                </a>
              )}

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/60 border border-foreground/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
