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
    liveUrl: "https://www.mycorerise.com",
  },
  // add more projects here later, e.g. this portfolio itself
];
