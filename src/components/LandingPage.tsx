"use client";

import Link from "next/link";
import type { RadarData, Signal } from "@/lib/types";
import SignalCard from "./SignalCard";
import TrendCard from "./TrendCard";
import BottleneckCard from "./BottleneckCard";
import VelocityGrid from "./VelocityGrid";
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

function sourceLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "primary source";
  }
}

function excerpt(desc: string, maxLen = 150): string {
  const idx = desc.indexOf("→");
  const raw = idx > -1 ? desc.slice(idx + 1).trim() : desc.trim();
  if (raw.length <= maxLen) return raw;
  const cut = raw.slice(0, maxLen);
  const stop = Math.max(cut.lastIndexOf("."), cut.lastIndexOf(";"));
  return stop > 60 ? cut.slice(0, stop + 1) : `${cut}...`;
}

function signalLens(signal: Signal): string {
  if (signal.view === "builder") return "Builder lens";
  if (signal.view === "strategic") return "Strategic lens";
  return "Shared lens";
}

export default function LandingPage({ data }: { data: RadarData }) {
  const builderLead = [
    ...data.brief.significant.filter((s) => s.view === "builder" || s.view === "both"),
    ...data.brief.notable.filter((s) => s.view === "builder" || s.view === "both"),
  ].slice(0, 3);

  const strategicLead = [
    ...data.brief.significant.filter((s) => s.view === "strategic" || s.view === "both"),
    ...data.brief.notable.filter((s) => s.view === "strategic" || s.view === "both"),
  ].slice(0, 2);

  const featuredSignals = data.brief.significant.slice(0, 3);
  const trendPreview = data.convergences.slice(0, 2);
  const bottleneckPreview = data.bottlenecks.slice(0, 2);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(10,11,12,0.84)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-panel)]">
              <span className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                ET
              </span>
            </div>
            <div>
              <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                Public Intelligence Terminal
              </p>
              <p className="text-[15px] font-medium text-[var(--color-text-strong)]">
                Eigen Terminal
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#brief" className="font-ui text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-secondary)] hover:text-[var(--color-text-strong)]">
              Today&apos;s brief
            </a>
            <Link href="/wiki" className="font-ui text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-secondary)] hover:text-[var(--color-text-strong)]">
              Knowledge base
            </Link>
            <a
              href="#connect"
              className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-panel)] px-4 py-2 font-ui text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-strong)]"
            >
              Connect agent
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-12">
        <section className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-shell)] px-6 py-8 shadow-[var(--shadow-section)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="subtle-grid absolute inset-0 opacity-30" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:gap-12">
            <div>
              <p className="section-kicker mb-5">AI radar for builders</p>
              <h1 className="font-display max-w-4xl text-[3rem] leading-[0.94] text-[var(--color-text-strong)] sm:text-[4.2rem] lg:text-[5.3rem]">
                The public-facing intelligence layer for people shipping in AI.
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-[var(--color-text-secondary)] sm:text-[19px]">
                Eigen Terminal scans the daily AI field, verifies the underlying sources, and turns the noise into a working surface for builders. It is not a blog. It is not a dashboard stuffed with vanity metrics. It is a live terminal for what changed, why it matters, and where the pressure is building next.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#brief"
                  className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-ui text-[12px] uppercase tracking-[0.18em] text-[var(--color-paper-text)] hover:bg-[var(--color-primary-strong)]"
                >
                  Enter today&apos;s brief
                </a>
                <Link
                  href="/wiki"
                  className="rounded-full border border-[var(--color-border-strong)] px-6 py-3 font-ui text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-strong)]"
                >
                  Browse the knowledge base
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "Signals are traced back to primary sources.",
                  "Builder and strategic lenses stay distinct.",
                  "Your agent can use the same public intelligence surface.",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] px-4 py-4"
                  >
                    <p className="font-ui text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                      Operating principle
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="terminal-panel relative overflow-hidden rounded-[28px] p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-80" />
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                <div>
                  <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    Morning brief
                  </p>
                  <p className="mt-1 text-[15px] text-[var(--color-text-strong)]">
                    Public builder lens
                  </p>
                </div>
                <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-3 py-1.5 font-ui text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  Live {fmtDate(data.brief.date)}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Signals", value: data.brief.signalsTotal },
                  { label: "Significant", value: data.brief.signalsSignificant },
                  { label: "Domains", value: data.brief.nodesUpdated },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] px-3 py-3">
                    <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-[24px] leading-none text-[var(--color-text-strong)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {builderLead.length > 0 ? (
                  builderLead.map((signal) => (
                    <div
                      key={signal.title}
                      className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-panel-strong)] px-4 py-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                          {signalLens(signal)}
                        </span>
                        <span className="font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                          {sourceLabel(signal.source)}
                        </span>
                      </div>
                      <h2 className="mt-3 text-[15px] font-medium leading-[1.45] text-[var(--color-text-strong)]">
                        {signal.title}
                      </h2>
                      <p className="mt-2 text-[13px] leading-[1.7] text-[var(--color-text-secondary)]">
                        {excerpt(signal.description, 150)}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] px-4 py-5">
                    <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                      Brief pending
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
                      Today&apos;s public data did not expose any builder-facing lead signals yet.
                    </p>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-4">
          {[
            {
              label: "Scan window",
              value: fmtDate(data.brief.date),
              note: `Updated ${data.lastUpdated.slice(11, 16)} UTC`,
            },
            {
              label: "Force chains tracked",
              value: String(data.forceChains.length),
              note: "Cause-and-effect relationships",
            },
            {
              label: "Developing trends",
              value: String(data.convergences.length),
              note: "Independent signals converging",
            },
            {
              label: "Bottlenecks",
              value: String(data.bottlenecks.length),
              note: "Constraints slowing the field",
            },
          ].map((item) => (
            <div key={item.label} className="terminal-card rounded-[var(--radius-lg)] px-5 py-5">
              <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {item.label}
              </p>
              <p className="mt-3 text-[28px] leading-none text-[var(--color-text-strong)]">
                {item.value}
              </p>
              <p className="mt-3 text-[13px] leading-[1.6] text-[var(--color-text-secondary)]">
                {item.note}
              </p>
            </div>
          ))}
        </section>

        <section className="paper-panel rounded-[var(--radius-xl)] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div>
              <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-[var(--color-paper-muted)]">
                What this product is
              </p>
              <h2 className="font-display mt-4 max-w-3xl text-[2.6rem] leading-[0.98] text-[var(--color-paper-text)] sm:text-[3.4rem]">
                An elegant intelligence product, not a random stream of AI news.
              </h2>
              <p className="mt-5 max-w-2xl text-[17px] leading-[1.75] text-[var(--color-paper-muted)]">
                The public app shows the live surface: today&apos;s meaningful signals, where they cluster, what is accelerating, and what still blocks deployment. The agent connection layer turns the same surface into something personal by filtering it through what you are actually building.
              </p>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[rgba(20,18,16,0.08)] bg-[rgba(20,18,16,0.03)] p-5">
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--color-paper-muted)]">
                Public promise
              </p>
              <div className="mt-4 space-y-4">
                {[
                  "Explain what changed without pretending everything matters equally.",
                  "Keep the strategic layer visible, but useful to working builders.",
                  "Expose the knowledge surface honestly. No invented capabilities.",
                ].map((point) => (
                  <div key={point} className="border-t border-[rgba(20,18,16,0.08)] pt-4 first:border-t-0 first:pt-0">
                    <p className="text-[14px] leading-[1.7] text-[var(--color-paper-text)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="brief" className="scroll-mt-28">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div>
              <p className="section-kicker mb-4">Today&apos;s field report</p>
              <h2 className="font-display text-[2.6rem] leading-[0.98] text-[var(--color-text-strong)] sm:text-[3.5rem]">
                What is worth your attention this morning.
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-[1.75] text-[var(--color-text-secondary)]">
                These cards use the same underlying public dataset the terminal publishes today. Significant signals lead. Trend and bottleneck context sit beside them so the homepage feels like a working surface, not a static pitch.
              </p>

              <div className="mt-8 space-y-4">
                {featuredSignals.length > 0 ? (
                  featuredSignals.map((signal, index) => (
                    <SignalCard
                      key={signal.title}
                      signal={signal}
                      severity={index === 0 ? "significant" : "notable"}
                      ripple={index === 0 ? data.ripples?.significant?.[0] : data.ripples?.notable?.[index - 1]}
                    />
                  ))
                ) : (
                  <div className="terminal-card rounded-[var(--radius-lg)] px-5 py-5">
                    <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                      No lead signals
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
                      The current public dataset does not include a featured signal yet. The terminal still exposes trends, bottlenecks, and historical context.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="terminal-card rounded-[var(--radius-lg)] px-5 py-5">
                <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Strategic pulse
                </p>
                <div className="mt-4 space-y-4">
                  {strategicLead.length > 0 ? (
                    strategicLead.map((signal) => (
                      <div key={signal.title} className="border-t border-[var(--color-border)] pt-4 first:border-t-0 first:pt-0">
                        <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--color-accent-warm)]">
                          {signalLens(signal)}
                        </p>
                        <p className="mt-2 text-[15px] leading-[1.5] text-[var(--color-text-strong)]">
                          {signal.title}
                        </p>
                        <p className="mt-2 text-[13px] leading-[1.7] text-[var(--color-text-secondary)]">
                          {excerpt(signal.description, 120)}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
                      No strategic lead items were exposed in the current public slice.
                    </p>
                  )}
                </div>
              </div>

              {trendPreview.map((trend) => (
                <TrendCard key={trend.id} convergence={trend} />
              ))}

              {bottleneckPreview.map((bottleneck) => (
                <BottleneckCard key={bottleneck.id} bottleneck={bottleneck} />
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-shell)] px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker mb-4">System pressure</p>
              <h2 className="font-display text-[2.4rem] leading-[0.98] text-[var(--color-text-strong)] sm:text-[3.2rem]">
                Trends, speed, and the constraints underneath the headlines.
              </h2>
            </div>
            <Link
              href="/wiki"
              className="font-ui text-[12px] uppercase tracking-[0.16em] text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
            >
              Open the full radar
            </Link>
          </div>

          <div className="mt-8">
            <VelocityGrid metrics={data.velocity} />
          </div>
        </section>

        <section id="connect" className="scroll-mt-28">
          <ConnectAgent />
        </section>

        <footer className="border-t border-[var(--color-border)] px-1 pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-display text-[2rem] text-[var(--color-text-strong)]">
                Eigen Terminal
              </p>
              <p className="mt-3 max-w-2xl text-[14px] leading-[1.75] text-[var(--color-text-secondary)]">
                Public intelligence for builders. Verified signals, linked context, and a surface your agent can actually use.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 font-ui text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              <Link href="/wiki" className="hover:text-[var(--color-text-strong)]">
                Knowledge base
              </Link>
              <a href="https://clawhub.ai/shawkatdidar/eigen-ai-terminal" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-strong)]">
                ClawHub
              </a>
              <a href="https://www.npmjs.com/package/eigen-ai-radar-mcp" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-strong)]">
                npm
              </a>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-[12px] leading-[1.7] text-[var(--color-text-muted)]">
            Open-source software, provided for research and educational use. Public signals are generated from automated collection and analysis, so they are not guaranteed accurate, complete, or current. Not investment, business, or professional advice.
          </p>
        </footer>
      </main>
    </div>
  );
}
