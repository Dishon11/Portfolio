// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import { cn } from "@/lib/utils";
import ClickSpark from "@/components/ClickSpark";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import AnimatedBackground from "@/components/AnimatedBackground";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

// Loading a Google Font — Next.js optimizes this automatically
const inter = Inter({ subsets: ["latin"] });

// Metadata = what shows in browser tab / search engines
export const metadata: Metadata = {
  title: "Dishon | Full-Stack Developer",
  description:
    "React Native & Full-Stack Developer — Expo, Supabase, Node.js, Express.js, FastAPI",
};

// This component wraps EVERY page in your site
export default function RootLayout({
  children, // "children" = whatever page is currently being shown
}: {
  children: React.ReactNode; // TypeScript type: "any valid React content"
}) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body className={`${inter.className} bg-background text-foreground`}>
        <AnimatedBackground />
        <CursorGlow />
        <ClickSpark />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
