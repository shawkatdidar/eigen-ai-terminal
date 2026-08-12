"use client";

import { useState } from "react";
import type { RadarData, ViewFilter } from "@/lib/types";
import SignalCard from "./SignalCard";
import TrendCard from "./TrendCard";
import BottleneckCard from "./BottleneckCard";
import VelocityGrid from "./VelocityGrid";
import ConnectAgent from "./ConnectAgent";

function filterSignalsWithIndex<T extends { view: string }>(
  signals: T[],
  filter: ViewFilter
): Array<T & { _origIndex: number }> {
  return signals
    .map((signal, index) => ({ ...signal, _origIndex: index }))
    .filter(
      (signal) =>
        filter === "all" || signal.view === filter || signal.view === "both"
    );
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

const viewConfig: Record<
  ViewFilter,
  {
    label: string;
    sub: string;
    accent: string;
  }
> = {
  builder: {
    label: "Builder",
    sub: "What is directly useful now",
    accent: "var(--color-accent)",
  },
  strategic: {
    label: "Strategic",
    sub: "Market, policy, platform shifts",
    accent: "var(--color-accent-warm)",
  },
  all: {
    label: "All",
    sub: "The full public picture",
    accent: "var(--color-primary)",
  },
};

export default function RadarPage({
  data,
  embedded = false,
}: {
  data: RadarData;
  embedded?: boolean;
}) {
  const [view, setView] = useState<ViewFilter>("builder");
  const [showAllNotable, setShowAllNotable] = useState(false);

  const significant = filterSignalsWithIndex(data.brief.significant, view);
  const notable = filterSignalsWithIndex(data.brief.notable, view);
  const visibleNotable = showAllNotable ? notable : notable.slice(0, 3);
  const sigRipples = data.ripples?.significant || {};
  const notRipples = data.ripples?.notable || {};

  return (
    <div className={embedded ? "" : "min-h-screen"}>
      {!embedded && (
        <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(10,11,12,0.84)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-panel)]">
                <span className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  ET
                </span>
              </div>
              <div>
                <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  Live radar
                </p>
                <p className="text-[15px] text-[var(--color-text-strong)]">
                  Eigen Terminal
                </p>
              </div>
            </div>
            <a
              href="#connect"
              className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-panel)] px-4 py-2 font-ui text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-strong)]"
            >
              Connect agent
            </a>
          </div>
        </header>
      )}

      <main
        className={
          embedded
            ? "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-shell)] p-6 shadow-[var(--shadow-section)]"
            : "mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10"
        }
      >
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-shell)] px-5 py-6 sm:px-7 sm:py-8">
          <div className="subtle-grid absolute inset-0 opacity-30" />
          <div className="relative">
            <p className="section-kicker mb-4">
              {embedded ? "Embedded radar" : "Public radar"}
            </p>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="font-display max-w-3xl text-[2.5rem] leading-[0.98] text-[var(--color-text-strong)] sm:text-[3.4rem]">
                  {embedded
                    ? "Live AI radar for the public knowledge base."
                    : "A live view of what moved in AI and why it matters."}
                </h1>
                <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-[var(--color-text-secondary)]">
                  {embedded
                    ? "This surface uses the same public radar data as the homepage, with lens filters for builders and strategic readers."
                    : "Filter today&apos;s signals by working lens, then inspect the pressure beneath the headlines through trends, bottlenecks, and velocity."}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Signals", value: data.brief.signalsTotal },
                  { label: "Significant", value: data.brief.signalsSignificant },
                  { label: "Updated", value: data.brief.nodesUpdated },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] px-4 py-4"
                  >
                    <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-[24px] leading-none text-[var(--color-text-strong)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-3 py-1.5 font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                {formatDate(data.brief.date)}
              </span>
              <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-3 py-1.5 font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                Scan completed {data.brief.scanTime}
              </span>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              {(["builder", "strategic", "all"] as ViewFilter[]).map((value) => {
                const active = view === value;
                const config = viewConfig[value];
                return (
                  <button
                    key={value}
                    onClick={() => {
                      setView(value);
                      setShowAllNotable(false);
                    }}
                    className={`rounded-[var(--radius-md)] border px-4 py-4 text-left ${
                      active
                        ? "bg-[rgba(255,255,255,0.04)]"
                        : "bg-[rgba(255,255,255,0.02)] hover:border-[var(--color-border-strong)]"
                    }`}
                    style={{ borderColor: active ? config.accent : "var(--color-border)" }}
                  >
                    <span className="block text-[15px]" style={{ color: active ? config.accent : "var(--color-text-strong)" }}>
                      {config.label}
                    </span>
                    <span className="mt-1 block text-[13px] leading-[1.5] text-[var(--color-text-secondary)]">
                      {config.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <section className="mt-8">
          <div className="mb-5">
            <p className="section-kicker mb-3">Lead signals</p>
            <h2 className="text-[24px] text-[var(--color-text-strong)]">
              Significant developments
            </h2>
            <p className="mt-2 text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
              The strongest public signals in the current scan window.
            </p>
          </div>
          {significant.length > 0 ? (
            <div className="space-y-4">
              {significant.map((signal) => (
                <SignalCard
                  key={signal._origIndex}
                  signal={signal}
                  severity="significant"
                  ripple={sigRipples[signal._origIndex]}
                />
              ))}
            </div>
          ) : (
            <div className="terminal-card rounded-[var(--radius-lg)] px-5 py-5">
              <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Empty lens
              </p>
              <p className="mt-2 text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
                No significant signals matched the current lens. Switch filters to inspect the rest of the public scan.
              </p>
            </div>
          )}
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <p className="section-kicker mb-3">Secondary read</p>
            <h2 className="text-[24px] text-[var(--color-text-strong)]">
              Also worth knowing
            </h2>
          </div>
          {notable.length > 0 ? (
            <>
              <div className="space-y-4">
                {visibleNotable.map((signal) => (
                  <SignalCard
                    key={signal._origIndex}
                    signal={signal}
                    severity="notable"
                    ripple={notRipples[signal._origIndex]}
                  />
                ))}
              </div>
              {notable.length > 3 && (
                <button
                  onClick={() => setShowAllNotable(!showAllNotable)}
                  className="mt-4 font-ui text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
                >
                  {showAllNotable ? "Show less" : `Show ${notable.length - 3} more`}
                </button>
              )}
            </>
          ) : (
            <div className="terminal-card rounded-[var(--radius-lg)] px-5 py-5">
              <p className="text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
                No notable signals matched the current lens.
              </p>
            </div>
          )}
        </section>

        <div className="mt-10 border-t border-[var(--color-border)]" />

        {data.convergences.length > 0 && (
          <section className="mt-10">
            <div className="mb-5">
              <p className="section-kicker mb-3">Pattern formation</p>
              <h2 className="text-[24px] text-[var(--color-text-strong)]">
                Developing trends
              </h2>
            </div>
            <div className="space-y-4">
              {data.convergences.map((convergence) => (
                <TrendCard key={convergence.id} convergence={convergence} />
              ))}
            </div>
          </section>
        )}

        {data.bottlenecks.length > 0 && (
          <section className="mt-10">
            <div className="mb-5">
              <p className="section-kicker mb-3">Where the field still breaks</p>
              <h2 className="text-[24px] text-[var(--color-text-strong)]">
                Bottlenecks
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {data.bottlenecks.map((bottleneck) => (
                <BottleneckCard key={bottleneck.id} bottleneck={bottleneck} />
              ))}
            </div>
          </section>
        )}

        {data.velocity.length > 0 && (
          <section className="mt-10">
            <div className="mb-5">
              <p className="section-kicker mb-3">Pace indicators</p>
              <h2 className="text-[24px] text-[var(--color-text-strong)]">
                How fast things are moving
              </h2>
            </div>
            <VelocityGrid metrics={data.velocity} />
          </section>
        )}

        {!embedded && (
          <section id="connect" className="mt-12 scroll-mt-28">
            <ConnectAgent />
          </section>
        )}
      </main>
    </div>
  );
}
