// src/components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Container, Wrench } from "lucide-react";

const groups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Shadcn"],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Express", "FastAPI", "Node.js"],
    span: "",
  },
  {
    title: "Database",
    icon: Database,
    items: ["Supabase", "PostgreSQL","MySQL"],
    span: "",
  },
  {
    title: "DevOps",
    icon: Container,
    items: ["Docker", "GitHub Actions", "Vercel", "Render"],
    span: "md:col-span-2",
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["VS Code", "Git", "Zustand", "TanStack Query","Postman"],
    span: "",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-20 py-16 md:py-24">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-accent font-mono text-sm mb-3 grid justify-center"
      >
        What I work with
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-12 grid justify-center"
      >
        Skills & tools
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[140px] gap-4">
        {groups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden border border-foreground/10 rounded-2xl p-6 hover:border-accent/50 transition-colors flex flex-col justify-between ${group.span}`}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors" />
              <Icon
                className="w-7 h-7 text-accent relative z-10 opacity-100"
                strokeWidth={2}
              />
         
              
              <div className="relative z-10">
                <p className="font-medium text-lg mb-3">{group.title}</p>
                {group.title === "Frontend" && (
                <div className="relative z-10 mt-5 mb-5 font-mono text-xs text-foreground/50 bg-foreground/5 rounded-lg p-4 border border-foreground/10">
                  <span className="text-accent">const</span> stack = {"{"}
                  <br />
                  &nbsp;&nbsp;ui:{" "}
                  <span className="text-green-400">&quot;React&quot;</span>,
                  <br />
                  &nbsp;&nbsp;style:{" "}
                  <span className="text-green-400">&quot;Tailwind&quot;</span>,
                  <br />
                  &nbsp;&nbsp;native:{" "}
                  <span className="text-green-400">true</span>
                  <br />
                  {"}"};
                </div>
              )}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/70 border border-foreground/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
