"use client";

import type { Signal, Ripple } from "@/lib/types";
import { useState } from "react";
import RippleMap from "./RippleMap";

const severityConfig = {
  breakthrough: {
    accent: "#DC2626",
    badge: "bg-red-100 text-red-800",
    label: "Breakthrough",
  },
  significant: {
    accent: "#B45309",
    badge: "bg-amber-100 text-amber-800",
    label: "Significant",
  },
  notable: {
    accent: "#1D4ED8",
    badge: "bg-blue-50 text-blue-700",
    label: "Notable",
  },
};

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

  const arrowIdx = signal.description.indexOf("→");
  const whatHappened = arrowIdx > -1 ? signal.description.slice(0, arrowIdx).trim() : signal.description;
  const whyItMatters = arrowIdx > -1 ? signal.description.slice(arrowIdx + 1).trim() : "";

  const isLong = whatHappened.length > 180;
  const displayText = !expanded && isLong ? whatHappened.slice(0, 180) + "..." : whatHappened;

  const hasRipple = ripple && (
    ripple.chains.length > 0 ||
    ripple.convergences.length > 0 ||
    ripple.bottlenecks.length > 0 ||
    ripple.predictions.length > 0
  );

  return (
    <>
      <div
        className="bg-white rounded-[var(--radius-lg)] overflow-hidden
          transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]"
        style={{
          borderLeft: `3px solid ${config.accent}`,
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div
          className="p-5 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {/* Title + badge */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-[15px] font-bold text-[var(--color-text)] leading-[1.4]">
              {signal.title}
            </h3>
            <span className={`${config.badge} text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 uppercase tracking-wide`}>
              {config.label}
            </span>
          </div>

          {/* Description */}
          <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7] mb-3">
            {displayText}
          </p>

          {/* Why it matters — expanded */}
          {expanded && whyItMatters && (
            <div className="mb-4 p-4 rounded-[var(--radius-md)] bg-[var(--color-accent-light)] border-l-2 border-[var(--color-accent)]">
              <p className="text-[13px] font-bold text-[var(--color-accent)] mb-1 uppercase tracking-wide">
                Why it matters
              </p>
              <p className="text-[14px] text-[var(--color-text)] leading-[1.7]">
                {whyItMatters}
              </p>
            </div>
          )}

          {/* Tags + ripple button */}
          <div className="flex items-center flex-wrap gap-2 mt-1">
            {signal.nodeNames.map((name) => (
              <span
                key={name}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)]"
              >
                {name}
              </span>
            ))}

            {hasRipple && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowRippleModal(true);
                }}
                className="ml-auto text-[12px] font-bold text-[var(--color-accent)]
                  px-3 py-1.5 rounded-full border border-[var(--color-accent)] bg-[var(--color-accent-light)]
                  hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200"
              >
                See ripple effects map →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Ripple modal — full-screen overlay ── */}
      {showRippleModal && hasRipple && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center"
          style={{ animation: "modalFadeIn 0.25s ease-out" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowRippleModal(false)}
          />

          {/* Modal content */}
          <div
            className="relative w-full max-w-5xl mx-4 mt-12 mb-12 bg-white rounded-[var(--radius-xl)] overflow-hidden"
            style={{
              boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
              maxHeight: "calc(100vh - 96px)",
              animation: "modalSlideUp 0.3s ease-out",
            }}
          >
            {/* Modal header */}
            <div className="sticky top-0 z-10 bg-white border-b border-[var(--color-border)] px-6 sm:px-8 py-5 flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <span className={`${config.badge} text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide`}>
                  {config.label}
                </span>
                <h2 className="text-[20px] font-bold text-[var(--color-text)] leading-[1.3] mt-2">
                  {signal.title}
                </h2>
                {whyItMatters && (
                  <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.6] mt-2 max-w-2xl">
                    {whyItMatters}
                  </p>
                )}
              </div>
              <button
                onClick={() => setShowRippleModal(false)}
                className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full
                  bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)]
                  hover:bg-[var(--color-border)] hover:text-[var(--color-text)] transition-colors text-lg"
              >
                ✕
              </button>
            </div>

            {/* Modal body — the ripple map */}
            <div className="overflow-y-auto px-6 sm:px-8 py-8" style={{ maxHeight: "calc(100vh - 250px)" }}>
              <RippleMap ripple={ripple!} signalTitle={signal.title} />
            </div>
          </div>

          {/* Modal animations */}
          <style>{`
            @keyframes modalFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes modalSlideUp {
              from { opacity: 0; transform: translateY(24px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
