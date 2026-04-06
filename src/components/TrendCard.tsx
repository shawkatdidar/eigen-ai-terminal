"use client";

import type { Convergence } from "@/lib/types";
import { useState } from "react";

function parseConfidence(raw: string): number {
  const pctMatch = raw.match(/(\d+)%/);
  if (pctMatch) return parseInt(pctMatch[1]);
  if (raw.includes("imminent")) return 90;
  if (raw.includes("strengthening")) return 70;
  if (raw.includes("detected")) return 50;
  if (raw.includes("forming")) return 30;
  return 50;
}

function confidenceExplanation(pct: number): string {
  if (pct >= 85) return "Very likely — multiple strong signals aligning";
  if (pct >= 70) return "Likely — several independent signals point here";
  if (pct >= 50) return "Plausible — early signals detected, watching closely";
  return "Emerging — initial signals, still forming";
}

function confidenceLabel(raw: string): string {
  if (raw.includes("imminent")) return "Imminent";
  if (raw.includes("strengthening")) return "Strengthening";
  if (raw.includes("detected")) return "Confirmed";
  if (raw.includes("forming")) return "Early signal";
  return raw;
}

export default function TrendCard({ convergence }: { convergence: Convergence }) {
  const [expanded, setExpanded] = useState(false);
  const pct = parseConfidence(convergence.confidence);
  const label = confidenceLabel(convergence.confidence);
  const explanation = confidenceExplanation(pct);

  // Color based on confidence
  const barColor =
    pct >= 80 ? "#B45309" : pct >= 60 ? "#1D6FA5" : "#94A3B8";

  return (
    <div
      className="bg-white rounded-[var(--radius-lg)] p-6 cursor-pointer
        transition-all duration-200 hover:shadow-[var(--shadow-card-hover)]"
      style={{ boxShadow: "var(--shadow-card)" }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Title */}
      <h3 className="text-[16px] font-bold text-[var(--color-text)] mb-3 leading-[1.4]">
        {convergence.title}
      </h3>

      {/* Confidence bar + percentage */}
      <div className="flex items-center gap-4 mb-2">
        <div className="flex-1 h-2.5 bg-[var(--color-bar-bg)] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${pct}%`, background: barColor }}
          />
        </div>
        <span className="text-[15px] font-bold text-[var(--color-text)] tabular-nums shrink-0 w-12 text-right">
          {pct}%
        </span>
      </div>

      {/* Confidence explanation */}
      <p className="text-[13px] text-[var(--color-text-muted)] mb-3">
        {explanation}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-3 text-[12px] font-semibold text-[var(--color-text-muted)]">
        <span className="px-2.5 py-1 rounded-full bg-[var(--color-bg-subtle)]">{label}</span>
        {convergence.timeline && (
          <span>Expected {convergence.timeline}</span>
        )}
        <span>{convergence.forces.length} independent signals</span>
      </div>

      {/* Expanded */}
      {expanded && (
        <div className="mt-5 pt-5 border-t border-[var(--color-border)]">
          <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7] mb-4">
            {convergence.predictedOutcome}
          </p>

          <div className="space-y-2.5 mb-4">
            <p className="text-[12px] font-bold text-[var(--color-text)] uppercase tracking-wider">
              Contributing signals
            </p>
            {convergence.forces.map((force, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-[var(--color-accent)] font-bold mt-0.5 shrink-0">→</span>
                <span className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                  {force.description}
                </span>
              </div>
            ))}
          </div>

          {convergence.invalidation && (
            <div className="text-[13px] text-[var(--color-text-muted)] bg-[var(--color-bg-subtle)] rounded-[var(--radius-md)] p-4">
              <span className="font-bold text-[var(--color-text-secondary)]">What would stop this: </span>
              {convergence.invalidation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
