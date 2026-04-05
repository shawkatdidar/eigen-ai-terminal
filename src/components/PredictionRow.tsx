"use client";

import type { Prediction } from "@/lib/types";

function daysUntil(dateStr: string): number | null {
  if (!dateStr) return null;
  const target = new Date(dateStr);
  const now = new Date();
  const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return diff;
}

function parseConfidenceNum(raw: string): number {
  const match = raw.match(/(\d+)/);
  return match ? parseInt(match[1]) : 50;
}

export default function PredictionRow({ prediction }: { prediction: Prediction }) {
  const days = daysUntil(prediction.checkDate);
  const pct = parseConfidenceNum(prediction.confidence);

  return (
    <div className="flex items-center gap-4 py-4 border-b border-[var(--color-border-light)] last:border-0">
      {/* Confidence ring */}
      <div className="relative w-11 h-11 shrink-0">
        <svg viewBox="0 0 36 36" className="w-11 h-11 -rotate-90">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="var(--color-bar-bg)"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={pct >= 80 ? "#B45309" : "#1D6FA5"}
            strokeWidth="3"
            strokeDasharray={`${pct}, 100`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-[var(--color-text)]">
          {pct}
        </span>
      </div>

      {/* Title */}
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-semibold text-[var(--color-text)] leading-snug">
          {prediction.title}
        </p>
      </div>

      {/* Countdown */}
      {days !== null && days > 0 && (
        <span className="text-[12px] font-semibold text-[var(--color-text-muted)] shrink-0 tabular-nums">
          Check in {days}d
        </span>
      )}
    </div>
  );
}
