"use client";

import { useState } from "react";
import type { RadarData } from "@/lib/types";
import ConnectAgent from "./ConnectAgent";

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  } catch { return dateStr; }
}

export default function LandingPage({ data }: { data: RadarData }) {
  const [showPreview, setShowPreview] = useState(false);

  // Pick 2 best significant signals for the preview
  const previewSignals = data.brief.significant
    .filter((s) => s.view === "builder" || s.view === "both")
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[var(--color-bg-page)]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[15px] font-bold text-[var(--color-text)] tracking-tight">Eigen</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/wiki" className="text-[13px] font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
              Knowledge Base
            </a>
            <a
              href="#connect"
              className="inline-flex items-center px-5 py-2 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-bold hover:opacity-90 transition-opacity"
            >
              Connect Agent
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* ── Hero ── */}
        <section className="pt-16 sm:pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Pain */}
            <p className="text-[14px] font-bold text-[var(--color-accent)] mb-4 uppercase tracking-wider">
              For builders who use AI agents
            </p>
            <h1 className="text-[40px] sm:text-[56px] font-extrabold text-[var(--color-text)] leading-[1.05] tracking-tight mb-6">
              New AI tools drop every day.
              <br />
              <span className="text-[var(--color-text-muted)]">You find out too late.</span>
            </h1>
            <p className="text-[18px] sm:text-[20px] text-[var(--color-text-secondary)] leading-[1.7] mb-8 max-w-2xl">
              Right now, someone posted a new model on X that&apos;s faster than what you&apos;re using. A paper dropped that could cut your inference cost in half. A tool launched that solves the exact problem you&apos;re stuck on. But you&apos;re busy building — you don&apos;t have 6 hours a day to scroll through X, Reddit, and ArXiv.
            </p>
            <p className="text-[18px] sm:text-[20px] text-[var(--color-text)] leading-[1.7] mb-10 max-w-2xl font-semibold">
              Your agent already knows your codebase, your stack, your goals. It just doesn&apos;t know what happened today. We fix&nbsp;that.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#connect"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-[var(--color-primary)] text-white text-[15px] font-bold hover:opacity-90 transition-opacity"
              >
                Connect your agent →
              </a>
              <a
                href="/wiki"
                className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-[var(--color-border)] text-[var(--color-text)] text-[15px] font-bold hover:border-[var(--color-text-muted)] transition-colors"
              >
                Explore the knowledge base
              </a>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-16 border-t border-[var(--color-border)]">
          <p className="text-[13px] font-bold text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">How it works</p>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[var(--color-text)] tracking-tight mb-4">
            We read everything. Your agent tells you what matters.
          </h2>
          <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.7] mb-12 max-w-2xl">
            Every day, our multi-agent system scans hundreds of sources — X, ArXiv, HN, Reddit, company blogs, GitHub trending — verifies every signal against primary sources, maps the cause-and-effect chain, and publishes a structured knowledge base your agent can query.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-[var(--radius-xl)] p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <span className="text-[18px] font-bold text-[var(--color-accent)]">1</span>
              </div>
              <h3 className="text-[16px] font-bold text-[var(--color-text)] mb-2">We scan & verify</h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7]">
                Hundreds of sources, 16 domains, every day. Multi-agent verification against primary sources. No rumors, no hype — only confirmed developments.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-[var(--radius-xl)] p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <span className="text-[18px] font-bold text-[var(--color-accent)]">2</span>
              </div>
              <h3 className="text-[16px] font-bold text-[var(--color-text)] mb-2">We map cause & effect</h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7]">
                Not just &quot;what happened&quot; — what it pushes, what it blocks, what trends are converging. The ripple effects that news feeds never show you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-[var(--radius-xl)] p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <span className="text-[18px] font-bold text-[var(--color-accent)]">3</span>
              </div>
              <h3 className="text-[16px] font-bold text-[var(--color-text)] mb-2">Your agent delivers</h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7]">
                Your agent pulls our intelligence, combines it with YOUR context — your codebase, your goals — and tells you exactly what matters. Every morning, automatically.
              </p>
            </div>
          </div>
        </section>

        {/* ── What your agent gets ── */}
        <section className="py-16 border-t border-[var(--color-border)]">
          <p className="text-[13px] font-bold text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">What your agent gets</p>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[var(--color-text)] tracking-tight mb-12">
            Not a news feed. An intelligence engine.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Personalized morning briefing",
                desc: "Every day at 7am, your agent delivers 2-3 things you can act on today — filtered to your specific work. Not a newsletter. A sharp colleague who read everything overnight.",
              },
              {
                title: "What it means for your work",
                desc: "Every signal comes with context — what it enables, what it changes, what you should do about it. Your agent connects the dots to YOUR stack and goals.",
              },
              {
                title: "Interconnected knowledge base",
                desc: "16 domain trackers, daily briefs, developing trends, and judgment frameworks — all cross-linked. Your agent navigates the knowledge graph to find exactly what you need.",
              },
              {
                title: "Developing trends",
                desc: "When multiple independent signals point at the same outcome, we track it. Your agent knows what's building up before it's obvious.",
              },
              {
                title: "What's blocked and what's moving fast",
                desc: "Know which constraints are slowing AI progress and which metrics are accelerating. Plan around reality, not hype.",
              },
              {
                title: "Builder-first focus",
                desc: "Every signal is filtered for practicality — tools, models, capabilities you can use today. No funding rounds, no IPO news, no policy debates. Just what matters for building.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
              >
                <h3 className="text-[15px] font-bold text-[var(--color-text)] mb-2">{feature.title}</h3>
                <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.7]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Live preview ── */}
        <section className="py-16 border-t border-[var(--color-border)]">
          <p className="text-[13px] font-bold text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">Live data — {formatDate(data.brief.date as string)}</p>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[var(--color-text)] tracking-tight mb-4">
            Here&apos;s what your agent would tell you this morning
          </h2>
          <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.7] mb-8 max-w-2xl">
            {data.brief.signalsTotal} signals tracked today. {data.brief.signalsSignificant} significant. Your agent picks the ones that matter for YOUR work.
          </p>

          {/* Signal previews */}
          <div className="space-y-3 mb-6">
            {previewSignals.map((signal, i) => {
              const arrowIdx = signal.description.indexOf("→");
              const whyItMatters = arrowIdx > -1 ? signal.description.slice(arrowIdx + 1).trim() : "";
              return (
                <div
                  key={i}
                  className="bg-white rounded-[var(--radius-lg)] p-5 border-l-3"
                  style={{ borderLeftColor: "#B45309", boxShadow: "var(--shadow-card)" }}
                >
                  <h3 className="text-[15px] font-bold text-[var(--color-text)] mb-2">{signal.title}</h3>
                  {whyItMatters && (
                    <div className="p-3 rounded-[var(--radius-md)] bg-[var(--color-accent-light)] border-l-2 border-[var(--color-accent)]">
                      <p className="text-[13px] font-bold text-[var(--color-accent)] mb-0.5">Why it matters for you</p>
                      <p className="text-[13px] text-[var(--color-text)] leading-[1.6]">{whyItMatters.slice(0, 250)}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!showPreview ? (
            <button
              onClick={() => setShowPreview(true)}
              className="text-[14px] font-semibold text-[var(--color-accent)] hover:underline"
            >
              See {data.brief.signalsTotal - 2} more signals →
            </button>
          ) : (
            <a href="/wiki" className="text-[14px] font-semibold text-[var(--color-accent)] hover:underline">
              Explore the full knowledge base →
            </a>
          )}
        </section>

        {/* ── Numbers ── */}
        <section className="py-16 border-t border-[var(--color-border)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { num: "16", label: "AI domains tracked daily" },
              { num: "49", label: "Interconnected wiki files" },
              { num: "11", label: "Agent tools available" },
              { num: "24/7", label: "Continuous monitoring" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-[36px] sm:text-[44px] font-extrabold text-[var(--color-text)] tracking-tight">{stat.num}</p>
                <p className="text-[13px] text-[var(--color-text-muted)] font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Connect Agent ── */}
        <section id="connect" className="py-16 border-t border-[var(--color-border)] scroll-mt-20">
          <ConnectAgent />
        </section>

        {/* ── Footer ── */}
        <footer className="text-center py-10 border-t border-[var(--color-border)]">
          <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
            Eigen AI Terminal — intelligence for builders, delivered by your agent.
            <br />
            Your context stays local. We only serve the signals.
          </p>
          <div className="mt-3 flex items-center justify-center gap-4 text-[13px]">
            <a href="/wiki" className="text-[var(--color-accent)] hover:underline font-semibold">Knowledge Base</a>
            <span className="text-[var(--color-border)]">·</span>
            <a href="https://clawhub.ai/shawkatdidar/eigen-ai-terminal" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline font-semibold">ClawHub</a>
            <span className="text-[var(--color-border)]">·</span>
            <a href="https://www.npmjs.com/package/eigen-ai-radar-mcp" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline font-semibold">npm</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
