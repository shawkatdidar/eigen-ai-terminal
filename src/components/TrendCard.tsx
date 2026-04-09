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

export default function TrendCard({ convergence }: { convergence: Convergence }) {
  const [expanded, setExpanded] = useState(false);
  const label = strengthLabel(convergence.confidence);

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

      {/* What we think will happen */}
      <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.6] mb-3">
        {convergence.predictedOutcome.length > 200
          ? convergence.predictedOutcome.slice(0, 200) + "..."
          : convergence.predictedOutcome}
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
          <div className="space-y-2.5 mb-4">
            <p className="text-[12px] font-bold text-[var(--color-text)] uppercase tracking-wider">
              Why we think this
            </p>
            {convergence.forces.map((force, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-[var(--color-accent)] font-bold mt-0.5 shrink-0">&rarr;</span>
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
