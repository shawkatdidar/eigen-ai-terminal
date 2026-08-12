"use client";

import type { Signal, Ripple } from "@/lib/types";
import { useState } from "react";
import RippleMap from "./RippleMap";

const severityConfig = {
  breakthrough: {
    accent: "var(--color-breakthrough)",
    badgeBg: "rgba(244, 143, 135, 0.12)",
    badgeText: "#f7b2ab",
    label: "Breakthrough",
  },
  significant: {
    accent: "var(--color-significant)",
    badgeBg: "rgba(224, 177, 111, 0.12)",
    badgeText: "#f1d3a6",
    label: "Significant",
  },
  notable: {
    accent: "var(--color-notable)",
    badgeBg: "rgba(126, 216, 208, 0.12)",
    badgeText: "#b5f0eb",
    label: "Notable",
  },
};

function splitDescription(description: string) {
  const arrowIdx = description.indexOf("→");
  return {
    whatHappened:
      arrowIdx > -1 ? description.slice(0, arrowIdx).trim() : description.trim(),
    whyItMatters:
      arrowIdx > -1 ? description.slice(arrowIdx + 1).trim() : "",
  };
}

export default function SignalCard({
  signal,
  severity,
  ripple,
}: {
  signal: Signal;
  severity: "breakthrough" | "significant" | "notable";
  ripple?: Ripple;
}) {
  const [expanded, setExpanded] = useState(false);
  const [showRippleModal, setShowRippleModal] = useState(false);
  const config = severityConfig[severity];
  const { whatHappened, whyItMatters } = splitDescription(signal.description);

  const isLong = whatHappened.length > 220;
  const displayText =
    !expanded && isLong ? `${whatHappened.slice(0, 220)}...` : whatHappened;

  const hasRipple = Boolean(
    ripple &&
      (ripple.chains.length > 0 ||
        ripple.convergences.length > 0 ||
        ripple.bottlenecks.length > 0 ||
        ripple.predictions.length > 0)
  );

  return (
    <>
      <div
        className="terminal-card rounded-[var(--radius-lg)] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div
          className="w-full cursor-pointer px-5 py-5 text-left sm:px-6 sm:py-6"
          onClick={() => setExpanded(!expanded)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setExpanded(!expanded);
            }
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {signal.view === "both"
                  ? "Builder + strategic"
                  : signal.view === "builder"
                    ? "Builder"
                    : "Strategic"}
              </p>
              <h3 className="mt-3 text-[17px] leading-[1.45] text-[var(--color-text-strong)]">
                {signal.title}
              </h3>
            </div>
            <span
              className="shrink-0 rounded-full px-2.5 py-1 font-ui text-[10px] uppercase tracking-[0.16em]"
              style={{ background: config.badgeBg, color: config.badgeText }}
            >
              {config.label}
            </span>
          </div>

          <p className="mt-4 text-[14px] leading-[1.8] text-[var(--color-text-secondary)]">
            {displayText}
          </p>

          {expanded && whyItMatters && (
            <div
              className="mt-5 rounded-[var(--radius-md)] border px-4 py-4"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              <p className="font-ui text-[10px] uppercase tracking-[0.18em]" style={{ color: config.badgeText }}>
                Why it matters
              </p>
              <p className="mt-2 text-[14px] leading-[1.8] text-[var(--color-text)]">
                {whyItMatters}
              </p>
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {signal.nodeNames.map((name) => (
              <span
                key={name}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-2.5 py-1 font-ui text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
              >
                {name}
              </span>
            ))}

            {hasRipple && (
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  setShowRippleModal(true);
                }}
                className="ml-auto rounded-full border border-[var(--color-border-strong)] px-3 py-1.5 font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setShowRippleModal(true);
                  }
                }}
              >
                Open ripple map
              </span>
            )}
          </div>
        </div>
      </div>

      {showRippleModal && hasRipple && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 py-8 sm:py-12"
          style={{ animation: "modalFadeIn 0.24s ease-out" }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setShowRippleModal(false)}
          />

          <div
            className="terminal-panel relative w-full max-w-6xl overflow-hidden rounded-[var(--radius-xl)]"
            style={{
              maxHeight: "calc(100vh - 64px)",
              animation: "modalSlideUp 0.28s ease-out",
            }}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[var(--color-border)] bg-[rgba(17,19,21,0.96)] px-6 py-5 backdrop-blur-xl sm:px-8">
              <div className="min-w-0 flex-1">
                <p className="font-ui text-[10px] uppercase tracking-[0.18em]" style={{ color: config.badgeText }}>
                  {config.label} ripple analysis
                </p>
                <h2 className="mt-3 max-w-3xl text-[22px] leading-[1.35] text-[var(--color-text-strong)]">
                  {signal.title}
                </h2>
                {whyItMatters && (
                  <p className="mt-3 max-w-3xl text-[14px] leading-[1.75] text-[var(--color-text-secondary)]">
                    {whyItMatters}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setShowRippleModal(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-inset)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-strong)]"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8" style={{ maxHeight: "calc(100vh - 220px)" }}>
              <RippleMap ripple={ripple!} signalTitle={signal.title} />
            </div>
          </div>

          <style>{`
            @keyframes modalFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes modalSlideUp {
              from { opacity: 0; transform: translateY(18px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
