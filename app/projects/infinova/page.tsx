// src/app/projects/company-site/page.tsx
import Link from "next/link";

export default function CompanySitePage() {
  const stack = [
    { label: "Framework", detail: "Next.js (App Router) + TypeScript" },
    { label: "Styling", detail: "Tailwind CSS + shadcn/ui components" },
    { label: "Deployment", detail: "Github" },
  ];

  const work = [
    {
      title: "Built multiple service websites from design to production",
      detail:
        "Translated design references into responsive, functional websites for several services offered by the company, working within a one-month internship timeline against real delivery expectations.",
    },
    {
      title: "Reusable component system",
      detail:
        "Built reusable React/Next.js components shared across the different service pages, cutting development time by 40% and improving long-term maintainability by 80%.",
    },
    {
      title: "Responsive-first across all pages",
      detail:
        "Every site was built mobile-first and verified across breakpoints, ensuring consistent experience across the different service offerings.",
    },
  ];

  return (
    <main className="min-h-screen px-6 md:px-20 pt-32 pb-24">
      <Link
        href="/projects"
        className="text-sm text-foreground/60 hover:text-accent transition-colors"
      >
        ← Back to projects
      </Link>

      <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">
        Infinova Eduventures
      </h1>
      <p className="text-lg text-foreground/70 max-w-2xl mb-2">
        Responsive websites built for multiple company services during a remote
        frontend internship.
      </p>
      <span className="inline-block text-xs px-3 py-1 rounded-full bg-accent/10 text-accent mt-4">
        Shipped
      </span>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-3">My role</h2>
        <p className="text-foreground/70 max-w-2xl">
          Web developer — built pages and components to spec, working within an
          existing codebase and design system under real production deadlines.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stack.map((item) => (
            <div
              key={item.label}
              className="border border-foreground/10 rounded-xl p-5 hover:border-accent/40 transition-colors"
            >
              <p className="font-medium text-accent mb-1">{item.label}</p>
              <p className="text-sm text-foreground/60">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">What I worked on</h2>
        <div className="flex flex-col gap-6">
          {work.map((w, i) => (
            <div key={w.title} className="flex gap-4">
              <span className="text-accent font-mono text-sm mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-medium mb-1">{w.title}</p>
                <p className="text-sm text-foreground/60 max-w-2xl">
                  {w.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <Link
          href="/projects"
          className="px-6 py-3 border border-foreground/20 rounded-lg font-medium inline-block hover:border-accent/50 transition-colors"
        >
          View other projects
        </Link>
      </div>
    </main>
  );
}
