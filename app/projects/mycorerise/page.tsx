// src/app/projects/mycorerise/page.tsx
import Link from "next/link";

export default function MyCoreRisePage() {
  const architecture = [
    {
      label: "Mobile App",
      detail: "React Native (Expo SDK 54), Zustand, TanStack Query",
    },
    { label: "Backend", detail: "Supabase (Postgres, Auth, RLS, Storage)" },
    {
      label: "Admin Dashboard",
      detail: "Next.js + Express, deployed on Vercel + Render",
    },
    {
      label: "Notifications",
      detail: "Firebase FCM, morning/afternoon/evening scheduling",
    },
  ];

  const decisions = [
    {
      title: "Row-Level Security as the core defense layer",
      detail:
        "Every table is protected with Postgres RLS policies scoped to auth.uid(), rather than relying on backend checks alone — so even a compromised client can't read or write data it doesn't own.",
    },
    {
      title: "Audit logging on every mutating route",
      detail:
        "A shared logActivity helper runs after each Supabase operation succeeds, capturing who changed what across the entire admin dashboard for accountability and debugging.",
    },
    {
      title: "EAS Update channels to protect build budget",
      detail:
        "Configured update channels so JS-only changes ship instantly without consuming a full native build, keeping the team inside the monthly EAS build budget.",
    },
    {
      title: "Live completion tracking from source of truth",
      detail:
        "Today's Focus module ordering pulls from workout_logs directly rather than a separate progress table, avoiding data drift between what's shown and what's actually true.",
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

      <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">MyCoreRise</h1>
      <p className="text-lg text-foreground/70 max-w-2xl mb-2">
        A wellness platform built around body-position-based micro-exercises and
        traditional Indian Marma therapy principles.
      </p>
      <span className="inline-block text-xs px-3 py-1 rounded-full bg-accent/10 text-accent mt-4">
        Final Play Store submission in progress
      </span>

      {/* Role */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-3">My role</h2>
        <p className="text-foreground/70 max-w-2xl">
          Sole technical co-founder — designed and built the mobile app,
          backend, and admin dashboard end-to-end, while a business co-founder
          handles non-technical operations.
        </p>
      </section>

      {/* Architecture */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Architecture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {architecture.map((item) => (
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

      {/* Key decisions */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Key technical decisions</h2>
        <div className="flex flex-col gap-6">
          {decisions.map((d, i) => (
            <div key={d.title} className="flex gap-4">
              <span className="text-accent font-mono text-sm mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-medium mb-1">{d.title}</p>
                <p className="text-sm text-foreground/60 max-w-2xl">
                  {d.detail}
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
