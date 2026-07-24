// src/components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 px-6 md:px-20 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-foreground/50">
        <p>© {year} Dishon John Siddapur. All rights reserved.</p>

        {/* <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
        </div> */}

        {/* <p className="text-xs text-foreground/30">
          Built with Next.js, FastAPI & Docker
        </p> */}
      </div>
    </footer>
  );
}
