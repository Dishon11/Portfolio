// src/app/page.tsx
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProject />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}