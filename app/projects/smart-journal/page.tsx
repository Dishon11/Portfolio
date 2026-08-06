// src/app/projects/smart-journal/page.tsx
import Link from "next/link";

export default function SmartJournalPage() {
  const architecture = [
    {
      label: "Frontend",
      detail: "Next.js 16 (App Router), TypeScript, Tailwind",
    },
    {
      label: "Backend",
      detail: "Next.js API routes, Zod validation at every boundary",
    },
    {
      label: "Database",
      detail: "Supabase (Postgres, Auth, RLS, pgvector extension)",
    },
    {
      label: "AI",
      detail:
        "Gemini API — gemini-embedding-001 for embeddings, gemini-flash-latest for reflection prompts",
    },
  ];

  const decisions = [
    {
      title: "Semantic search over keyword search",
      detail:
        "Journal entries are embedded into 768-dimension vectors via Gemini's embedding model and stored using pgvector, so searching 'a time I felt calm' correctly surfaces an entry about a peaceful evening walk — even with zero shared keywords.",
    },
    {
      title: "Row-Level Security scoping every table",
      detail:
        "All reads, writes, and deletes are scoped to auth.uid() at the Postgres level, not just checked in application code — the same defense-in-depth pattern used in MyCoreRise, applied here from day one.",
    },
    {
      title: "A Postgres RPC function for vector search",
      detail:
        "Supabase's client can't run cosine-distance queries through normal .select() calls, so similarity search is wrapped in a match_journal_entries SQL function and invoked via .rpc() — keeping the search logic in the database, close to the data.",
    },
    {
      title: "Zod at every API boundary",
      detail:
        "Every route parses incoming requests through a Zod schema before touching the database or calling an external API, giving runtime validation and inferred TypeScript types from a single source of truth.",
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
        Smart Journal
      </h1>
      <p className="text-lg text-foreground/70 max-w-2xl mb-2">
        An AI-powered journaling app that finds past entries by meaning, not
        keywords, using vector embeddings and a lightweight RAG pipeline.
      </p>
      <span className="inline-block text-xs px-3 py-1 rounded-full bg-accent/10 text-accent mt-4">
        Live
      </span>

      {/* Role */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-3">My role</h2>
        <p className="text-foreground/70 max-w-2xl">
          Designed and built the full stack solo — database schema and RLS
          policies, the embedding and semantic-search pipeline, all API routes,
          and the frontend UI.
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

      <div className="mt-20 flex gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 border border-foreground/20 rounded-lg font-medium inline-block hover:border-accent/50 transition-colors"
        >
          View other projects
        </Link>
        <a
          href="https://smart-journal-bay.vercel.app/"
          target="_blank"
          className="px-6 py-3 bg-accent text-white rounded-lg font-medium inline-block hover:opacity-90 transition-colors"
        >
          View live demo
        </a>
      </div>
    </main>
  );
}
