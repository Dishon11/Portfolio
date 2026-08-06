// src/lib/projects.ts
export const projects = [
  {
    slug: "mycorerise",
    title: "MyCoreRise",
    tagline: "Wellness app blending micro-exercises with Marma therapy",
    description:
      "A mobile-first wellness platform built around position-based micro-exercises and traditional Indian Marma therapy principles, with a full admin dashboard for content and user management.",
    stack: [
      "React Native",
      "Expo",
      "Supabase",
      "TypeScript",
      "Next.js",
      "Express",
    ],
    image: "/projects/mycorerise-cover.jpg",
    status: "Final Play Store submission in progress",
  },
  {
    slug: "infinova",
    title: "Infinova Eduventures",
    tagline:
      "Responsive service websites built during a remote frontend internship",
    description:
      "Built responsive websites for multiple services offered by the company, translating designs into functional, production-ready pages. Developed reusable React/Next.js components that cut development time by 40% and improved maintainability by 80%.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Shipped",
    role: "Web Developer Intern (Remote) — Jan 2026 to Feb 2026",
  },
  {
    slug: "mycorerise-website",
    title: "MyCoreRise — Marketing Website",
    tagline:
      "Live marketing site for the MyCoreRise app, built on the PERN stack",
    description:
      "Built and deployed the public-facing marketing website for MyCoreRise using React and the PERN stack (PostgreSQL, Express, React, Node.js), with Brevo integrated for transactional and marketing email.",
    stack: ["React", "PostgreSQL", "Express", "Node.js", "Brevo"],
    status: "Live",
    role: "Designed and built the site end-to-end, including backend email integration via Brevo.",
    liveUrl: "https://www.mycorerise.com/",
  },
  {
    slug: "smart-journal",
    title: "Smart Journal — AI-Powered Journaling",
    tagline:
      "Journal app with semantic search powered by vector embeddings and RAG",
    description:
      "Built a full-stack journaling app where entries are embedded using Gemini's embedding model and stored in Supabase with pgvector, enabling semantic search that finds past entries by meaning rather than keywords. Each entry also generates an AI-written reflective prompt via the Gemini API. Implements row-level security so all data access is scoped per-user at the database layer.",
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "pgvector",
      "Gemini API",
      "Zod",
    ],
    status: "Live",
    role: "Designed and built the full stack solo — schema, RLS policies, API routes, embedding/RAG pipeline, and UI.",
    liveUrl: "https://smart-journal-bay.vercel.app/",
  },
  // add more projects here later, e.g. this portfolio itself
];
