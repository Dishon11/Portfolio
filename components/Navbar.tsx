// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const goHome = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/60 border-b border-foreground/10">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        <button
          onClick={goHome}
          className="flex items-center gap-2.5 font-bold text-lg"
        >
          <Image src="/djs_logo.png" alt="Logo" width={31} height={30} />
          Dishon John Siddapur<span className="text-accent">.</span>
        </button>

        <div className="hidden md:flex gap-8 text-sm">
          {links.map((link) =>
            link.name === "Home" ? (
              <button
                key={link.name}
                onClick={goHome}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ),
          )}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background/95 border-t border-foreground/10"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) =>
                link.name === "Home" ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      goHome();
                      setMenuOpen(false);
                    }}
                    className="text-base hover:text-accent transition-colors text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
