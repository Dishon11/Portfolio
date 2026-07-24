// src/components/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="5.5" cy="6" r="2" />
      <rect x="3.8" y="9.5" width="3.4" height="12" rx="0.4" />
      <path d="M11 9.5h3.3v1.7h.05c.46-.85 1.58-1.75 3.25-1.75 3.47 0 4.4 2.15 4.4 5.35v6.7h-3.5v-6.05c0-1.45-.03-3.3-2.1-3.3-2.1 0-2.42 1.55-2.42 3.2v6.15H11v-12Z" />
    </svg>
  );
}

// backend URL — will point to Render once deployed, localhost for now
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const links = [
    { icon: Mail, label: "dishon110205@gmail.com", href: "mailto:dishon110205@gmail.com" },
    {
      icon: GithubIcon,
      label: "github.com/Dishon11",
      href: "https://github.com/Dishon11",
    },
    {
      icon: LinkedinIcon,
      label: "linkedin.com/in/dishon-siddapur",
      href: "https://www.linkedin.com/in/dishon-siddapur-01374b282",
    },
  ];

  return (
    <section
      id="contact"
      className="relative px-6 md:px-20 py-16 md:py-32 overflow-hidden"
    >
      <div className="hidden md:block absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-accent font-mono text-sm mb-3 text-center md:text-left"
      >
        Get in touch
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-16 text-center md:text-left"
      >
        Let&apos;s build something.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="text-foreground/60 max-w-sm mx-auto md:mx-0 mb-10 leading-relaxed">
            Open to freelance work and full-stack opportunities. Reach out and
            I&apos;ll get back to you within a day.
          </p>

          <div className="flex flex-col gap-3 items-center md:items-start">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-foreground/70 hover:text-accent transition-colors border border-foreground/10 hover:border-accent/40 rounded-xl px-4 py-3 w-full max-w-xs md:max-w-none md:w-auto md:min-w-[280px]"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="flex-1 text-left">{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4 border border-foreground/10 rounded-2xl p-6 md:p-8 bg-foreground/[0.02] hover:border-accent/20 transition-colors"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 outline-none focus:border-accent/50 transition-colors text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 outline-none focus:border-accent/50 transition-colors text-sm"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 outline-none focus:border-accent/50 transition-colors text-sm resize-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:scale-[1.02] transition-transform disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-400">
              Message sent — I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Try again or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
