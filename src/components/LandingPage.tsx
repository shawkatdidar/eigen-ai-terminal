"use client";

import Link from "next/link";
import type { RadarData } from "@/lib/types";
import ConnectAgent from "./ConnectAgent";

function fmtDate(date: string): string {
  try {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return date;
  }
}

export default function LandingPage({ data }: { data: RadarData }) {
  const sampleSignal = data.brief.significant[0] ?? data.brief.notable[0];

  return (
    <div className="min-h-screen bg-[var(--color-bg-page)] text-[var(--color-text)]">
      <header className="border-b border-[var(--color-border)]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="font-ui text-[12px] uppercase tracking-[0.18em]">
            Eigen Terminal
          </Link>
          <nav className="flex items-center gap-5 font-ui text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            <a href="#connect" className="hover:text-[var(--color-text)]">
              Connect
            </a>
            <Link href="/wiki" className="hover:text-[var(--color-text)]">
              Wiki
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <section className="border-b border-[var(--color-border)] pb-12 sm:pb-16">
          <p className="font-ui text-[12px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
            AI intelligence for agents
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-[4rem] leading-[0.9] tracking-[-0.05em] text-[var(--color-text)] sm:text-[6rem]">
            Stop reading AI noise. Let your agent watch the field.
          </h1>
          <p className="mt-7 max-w-2xl text-[20px] font-semibold leading-[1.45] text-[var(--color-text)] sm:text-[24px]">
            Eigen Terminal turns daily AI research, product launches, infra shifts, and market signals into a clean public feed your agent can query.
          </p>
          <p className="mt-5 max-w-2xl text-[16px] leading-[1.8] text-[var(--color-text-secondary)]">
            Connect your agent once. It checks what changed, filters it against what you are building, and tells you the few things worth acting on.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#connect" className="button-primary">
              Connect your agent
            </a>
            <Link href="/wiki" className="button-secondary">
              Browse the public wiki
            </Link>
          </div>
        </section>

        <section className="grid gap-8 border-b border-[var(--color-border)] py-12 sm:grid-cols-3 sm:py-16">
          {[
            {
              title: "What it is",
              body: "A public AI radar that scans the field and organizes meaningful changes into signals, trends, bottlenecks, and source-linked context.",
            },
            {
              title: "How agents use it",
              body: "Your agent fetches the terminal data, compares it to your work, and produces a short brief instead of dumping another feed on you.",
            },
            {
              title: "What you get",
              body: "A daily, filtered intelligence loop: what changed, why it matters, and what you should look at next.",
            },
          ].map((item) => (
            <article key={item.title}>
              <h2 className="font-display text-[34px] leading-none tracking-[-0.03em]">
                {item.title}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-[var(--color-text-secondary)]">
                {item.body}
              </p>
            </article>
          ))}
        </section>

        <section className="border-b border-[var(--color-border)] py-12 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-[220px_1fr]">
            <div>
              <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                Current public feed
              </p>
              <p className="mt-3 font-display text-[42px] leading-none tracking-[-0.04em]">
                {fmtDate(data.brief.date)}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                ["signals", data.brief.signalsTotal],
                ["significant", data.brief.signalsSignificant],
                ["wiki nodes", data.brief.nodesUpdated],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-[var(--color-border)] pt-4">
                  <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    {label}
                  </p>
                  <p className="mt-2 font-display text-[48px] leading-none tracking-[-0.04em]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {sampleSignal && (
            <div className="mt-10 border-l-2 border-[var(--color-text)] pl-5">
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Example signal
              </p>
              <h3 className="mt-3 max-w-2xl font-display text-[40px] leading-[1] tracking-[-0.04em]">
                {sampleSignal.title}
              </h3>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-[var(--color-text-secondary)]">
                {sampleSignal.description.split("→").pop()?.trim() ?? sampleSignal.description}
              </p>
            </div>
          )}
        </section>

        <section id="connect" className="scroll-mt-10 py-12 sm:py-16">
          <ConnectAgent />
        </section>

        <footer className="border-t border-[var(--color-border)] py-8">
          <p className="max-w-2xl text-[12px] leading-[1.7] text-[var(--color-text-muted)]">
            Open-source software, provided for educational and research purposes. Information is generated by automated systems and is not guaranteed accurate, complete, or current. Not investment advice. Not business advice. Not professional advice of any kind.{" "}
            <Link href="/disclaimer" className="underline underline-offset-4 hover:text-[var(--color-text)]">
              Full disclaimer
            </Link>
          </p>
        </footer>
      </main>
    </div>
  );
}
