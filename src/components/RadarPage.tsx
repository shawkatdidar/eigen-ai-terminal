"use client";

import { useState } from "react";
import type { RadarData, ViewFilter } from "@/lib/types";
import SignalCard from "./SignalCard";
import TrendCard from "./TrendCard";
import BottleneckCard from "./BottleneckCard";
import VelocityGrid from "./VelocityGrid";
import PredictionRow from "./PredictionRow";
import ConnectAgent from "./ConnectAgent";

/** Filter signals but keep track of original index for ripple lookup */
function filterSignalsWithIndex<T extends { view: string }>(
  signals: T[],
  filter: ViewFilter
): Array<T & { _origIndex: number }> {
  return signals
    .map((s, i) => ({ ...s, _origIndex: i }))
    .filter((s) => filter === "all" || s.view === filter || s.view === "both");
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

const viewConfig: Record<ViewFilter, {
  accent: string;
  accentLight: string;
  accentBorder: string;
  label: string;
  sub: string;
  headerGradient: string;
}> = {
  builder: {
    accent: "#1D6FA5",
    accentLight: "#EEF6FF",
    accentBorder: "#B8D8F0",
    label: "Builder",
    sub: "What you can use today",
    headerGradient: "from-blue-50/60 to-transparent",
  },
  strategic: {
    accent: "#92400E",
    accentLight: "#FFF7ED",
    accentBorder: "#FCD9A8",
    label: "Strategic",
    sub: "Funding, policy & market moves",
    headerGradient: "from-amber-50/60 to-transparent",
  },
  all: {
    accent: "#475569",
    accentLight: "#F8FAFC",
    accentBorder: "#E2E8F0",
    label: "All",
    sub: "The full picture",
    headerGradient: "from-slate-50/60 to-transparent",
  },
};

export default function RadarPage({ data }: { data: RadarData }) {
  const [view, setView] = useState<ViewFilter>("builder");
  const [showAllNotable, setShowAllNotable] = useState(false);

  const theme = viewConfig[view];
  const significant = filterSignalsWithIndex(data.brief.significant, view);
  const notable = filterSignalsWithIndex(data.brief.notable, view);
  const visibleNotable = showAllNotable ? notable : notable.slice(0, 3);
  const sigRipples = data.ripples?.significant || {};
  const notRipples = data.ripples?.notable || {};

  return (
    <div className="min-h-screen bg-[var(--color-bg-page)]">
      {/* ── Minimal header ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[15px] font-bold text-[var(--color-text)] tracking-tight">
              Eigen
            </span>
          </div>
          <a
            href="#connect"
            className="inline-flex items-center px-5 py-2 rounded-full
              bg-[var(--color-primary)] text-white text-[13px] font-bold
              hover:opacity-90 transition-opacity"
          >
            Connect Agent
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* ── Hero ── */}
        <div className={`pt-14 pb-8 -mx-5 sm:-mx-8 px-5 sm:px-8 bg-gradient-to-b ${theme.headerGradient} transition-all duration-500`}>
          <p className="text-[13px] font-semibold text-[var(--color-text-muted)] mb-4 uppercase tracking-wider">
            {formatDate(data.brief.date as string)}
          </p>

          <h1 className="text-[36px] sm:text-[46px] font-extrabold text-[var(--color-text)] leading-[1.05] tracking-tight mb-5 max-w-2xl">
            You can&apos;t keep up with AI.
            <br />
            <span className="text-[var(--color-text-muted)]">Nobody can.</span>
          </h1>

          <p className="text-[17px] text-[var(--color-text-secondary)] leading-[1.7] mb-6 max-w-xl">
            {data.brief.signalsTotal}+ developments tracked today alone. New models, tools, and breakthroughs ship faster than anyone can follow.
            The builders who stay ahead don&apos;t read more — they let their agents read for them.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-2 text-[14px] mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[13px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Live
            </span>
            <span className="text-[var(--color-text-secondary)]">
              <span className="font-bold text-[var(--color-text)] tabular-nums">{data.brief.signalsTotal}</span> signals
              <span className="mx-1.5 text-[var(--color-border)]">·</span>
              <span className="font-bold tabular-nums" style={{ color: theme.accent }}>{data.brief.signalsSignificant}</span> significant
              <span className="mx-1.5 text-[var(--color-border)]">·</span>
              {data.brief.nodesUpdated} areas
            </span>
          </div>

          {/* ── Lens selector ── positioned right after the hero, before signals */}
          <div>
            <p className="text-[13px] font-semibold text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">
              Choose your lens
            </p>
            <div className="flex items-stretch gap-2">
              {(["builder", "strategic", "all"] as ViewFilter[]).map((v) => {
                const c = viewConfig[v];
                const isActive = view === v;
                return (
                  <button
                    key={v}
                    onClick={() => { setView(v); setShowAllNotable(false); }}
                    className={`
                      flex-1 px-4 py-3 rounded-[var(--radius-md)] text-left transition-all duration-300
                      border-2
                      ${isActive
                        ? "bg-white shadow-sm"
                        : "bg-transparent border-transparent hover:bg-white/60"
                      }
                    `}
                    style={isActive ? { borderColor: c.accent } : {}}
                  >
                    <span
                      className="block text-[14px] font-bold"
                      style={{ color: isActive ? c.accent : "var(--color-text)" }}
                    >
                      {c.label}
                    </span>
                    <span className="block text-[12px] text-[var(--color-text-muted)] mt-0.5">
                      {c.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Significant ── (FILTERED) */}
        {significant.length > 0 && (
          <section className="mb-12 mt-8">
            <div className="mb-5">
              <h3 className="text-[22px] font-bold text-[var(--color-text)] tracking-tight">
                Significant Developments
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] mt-1">
                The most important signals — click any card for deeper context
              </p>
            </div>
            <div className="space-y-3">
              {significant.map((signal, i) => (
                <SignalCard
                  key={i}
                  signal={signal}
                  severity="significant"
                  ripple={sigRipples[signal._origIndex]}
                />
              ))}
            </div>
          </section>
        )}

        {/* ── Notable ── (FILTERED) */}
        {notable.length > 0 && (
          <section className="mb-12">
            <div className="mb-5">
              <h3 className="text-[22px] font-bold text-[var(--color-text)] tracking-tight">
                Also Worth Knowing
              </h3>
            </div>
            <div className="space-y-3">
              {visibleNotable.map((signal, i) => (
                <SignalCard
                  key={i}
                  signal={signal}
                  severity="notable"
                  ripple={notRipples[signal._origIndex]}
                />
              ))}
            </div>
            {notable.length > 3 && (
              <button
                onClick={() => setShowAllNotable(!showAllNotable)}
                className="mt-4 text-[14px] font-semibold hover:underline"
                style={{ color: theme.accent }}
              >
                {showAllNotable ? "Show less" : `Show ${notable.length - 3} more`}
              </button>
            )}
          </section>
        )}

        {/* ── Divider ── */}
        <div className="border-t border-[var(--color-border)] my-12" />

        {/* ── Below here: NOT filtered — universal context ── */}

        {/* ── Developing Trends ── */}
        {data.convergences.length > 0 && (
          <section className="mb-12">
            <div className="mb-6">
              <h3 className="text-[24px] font-bold text-[var(--color-text)] tracking-tight">
                Developing Trends
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] mt-1.5 max-w-lg">
                When multiple independent signals point at the same outcome, something is likely about to happen. These are the trends we&apos;re tracking.
              </p>
            </div>
            <div className="space-y-3">
              {data.convergences.map((conv) => (
                <TrendCard key={conv.id} convergence={conv} />
              ))}
            </div>
          </section>
        )}

        {/* ── Roadblocks ── */}
        {data.bottlenecks.length > 0 && (
          <section className="mb-12">
            <div className="mb-6">
              <h3 className="text-[24px] font-bold text-[var(--color-text)] tracking-tight">
                Roadblocks Holding AI Back
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] mt-1.5 max-w-lg">
                Constraints slowing progress across multiple areas. When one clears, it unlocks a cascade.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.bottlenecks.map((bn) => (
                <BottleneckCard key={bn.id} bottleneck={bn} />
              ))}
            </div>
          </section>
        )}

        {/* ── Velocity ── */}
        {data.velocity.length > 0 && (
          <section className="mb-12">
            <div className="mb-6">
              <h3 className="text-[24px] font-bold text-[var(--color-text)] tracking-tight">
                How Fast Things Are Moving
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] mt-1.5 max-w-lg">
                Not just where things stand — whether they&apos;re speeding up or slowing down.
              </p>
            </div>
            <VelocityGrid metrics={data.velocity} />
          </section>
        )}

        {/* ── Divider ── */}
        <div className="border-t border-[var(--color-border)] my-12" />

        {/* ── Predictions ── */}
        {data.predictions.length > 0 && (
          <section className="mb-12">
            <div className="mb-6">
              <h3 className="text-[24px] font-bold text-[var(--color-text)] tracking-tight">
                Predictions We&apos;re Tracking
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] mt-1.5 max-w-lg">
                Specific, dated claims. We check each one and publish whether we were right or wrong.
              </p>
            </div>
            <div
              className="bg-white rounded-[var(--radius-lg)] px-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {data.predictions.map((pred) => (
                <PredictionRow key={pred.id} prediction={pred} />
              ))}
            </div>
            <p className="mt-3 text-[12px] text-[var(--color-text-muted)] italic">
              Analytical predictions based on signal tracking — not investment or financial advice. Do your own research.
            </p>
          </section>
        )}

        {/* ── Connect Agent ── */}
        <section id="connect" className="mb-12 scroll-mt-20">
          <ConnectAgent />
        </section>

        {/* ── Footer ── */}
        <footer className="text-center py-10 border-t border-[var(--color-border)]">
          <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
            Eigen AI Terminal tracks 16 domains daily. Signals verified against primary sources.
            <br />
            Your context stays local. We only serve the intelligence.
          </p>
        </footer>
      </main>
    </div>
  );
}
