"use client";

import type { Convergence } from "@/lib/types";
import { useState } from "react";

function strengthLabel(raw: string): string {
  if (raw.includes("imminent")) return "Strong pattern";
  if (raw.includes("strengthening")) return "Building";
  if (raw.includes("detected") || raw.includes("high")) return "Clear pattern";
  if (raw.includes("forming")) return "Early signs";
  return "Emerging";
}

export default function TrendCard({
  convergence,
}: {
  convergence: Convergence;
}) {
  const [expanded, setExpanded] = useState(false);
  const label = strengthLabel(convergence.confidence);

  return (
    <button
      type="button"
      className="terminal-card w-full rounded-[var(--radius-lg)] p-5 text-left transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
      style={{ boxShadow: "var(--shadow-card)" }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          Developing trend
        </p>
        <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--color-accent)]">
          {label}
        </span>
      </div>

      <h3 className="mt-4 text-[17px] leading-[1.45] text-[var(--color-text-strong)]">
        {convergence.title}
      </h3>

      <p className="mt-3 text-[14px] leading-[1.75] text-[var(--color-text-secondary)]">
        {convergence.predictedOutcome.length > 210
          ? `${convergence.predictedOutcome.slice(0, 210)}...`
          : convergence.predictedOutcome}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
        {convergence.timeline && (
          <span className="rounded-full border border-[var(--color-border)] px-2.5 py-1">
            Expected {convergence.timeline}
          </span>
        )}
        <span className="rounded-full border border-[var(--color-border)] px-2.5 py-1">
          {convergence.forces.length} source signals
        </span>
      </div>

      {expanded && (
        <div className="mt-5 border-t border-[var(--color-border)] pt-5">
          <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Why this is forming
          </p>
          <div className="mt-4 space-y-3">
            {convergence.forces.map((force, index) => (
              <div key={index} className="flex gap-3">
                <span className="mt-1 text-[var(--color-accent)]">•</span>
                <span className="text-[13px] leading-[1.75] text-[var(--color-text-secondary)]">
                  {force.description}
                </span>
              </div>
            ))}
          </div>

          {convergence.invalidation && (
            <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-4 py-4">
              <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                What breaks the pattern
              </p>
              <p className="mt-2 text-[13px] leading-[1.7] text-[var(--color-text-secondary)]">
                {convergence.invalidation}
              </p>
            </div>
          )}
        </div>
      )}
    </button>
  );
}
