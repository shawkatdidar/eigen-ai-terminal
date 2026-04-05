"use client";

/**
 * RIPPLE FLOW — The causal story chain.
 *
 * When a signal card expands, this shows the downstream effects as a
 * vertical narrative: "This is pushing..." → "Which feeds into..." →
 * "But it's blocked by..." → "We predict..."
 *
 * Each step is a small card connected by a labeled arrow.
 * Reads like a story, top to bottom. No jargon, no codes.
 */

import type { Ripple } from "@/lib/types";

/** Humanize bottleneck titles (reuse logic from BottleneckCard) */
function humanizeBottleneck(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("agent reliability")) return "AI agents aren't reliable enough yet";
  if (lower.includes("mcp") || lower.includes("protocol")) return "The tool-connection protocol has design gaps";
  if (lower.includes("datacenter") || lower.includes("power")) return "Not enough datacenters are getting built";
  return title;
}

/** Humanize force chain direction */
function directionVerb(direction: string): string {
  if (direction === "accelerating") return "accelerating";
  if (direction === "constraining") return "slowing down";
  if (direction === "enabling") return "enabling";
  if (direction === "disrupting") return "disrupting";
  return "affecting";
}

function parseConfidenceNum(raw: string): number {
  const match = raw.match(/(\d+)/);
  return match ? parseInt(match[1]) : 50;
}

/** Connector line + label between steps */
function Connector({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 py-2 pl-6">
      <div className="w-px h-6 bg-[var(--color-border)] ml-3" />
      <span className="text-[13px] font-bold" style={{ color: "var(--color-accent)" }}>
        {icon} {label}
      </span>
    </div>
  );
}

/** A single step card in the ripple chain */
function StepCard({
  children,
  accentColor,
}: {
  children: React.ReactNode;
  accentColor?: string;
}) {
  return (
    <div
      className="ml-6 rounded-[var(--radius-md)] border p-4 transition-all duration-300"
      style={{
        borderColor: accentColor || "var(--color-border)",
        borderLeftWidth: "3px",
        backgroundColor: "var(--color-bg-page)",
      }}
    >
      {children}
    </div>
  );
}

export default function RippleFlow({ ripple }: { ripple: Ripple }) {
  const hasChains = ripple.chains.length > 0;
  const hasConvergences = ripple.convergences.length > 0;
  const hasBottlenecks = ripple.bottlenecks.length > 0;
  const hasPredictions = ripple.predictions.length > 0;

  if (!hasChains && !hasConvergences && !hasBottlenecks && !hasPredictions) {
    return null;
  }

  return (
    <div
      className="mt-4 pt-4 border-t border-dashed animate-in"
      style={{ borderColor: "var(--color-border)", animationDuration: "300ms" }}
    >
      <p className="text-[12px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-3 pl-6">
        Ripple effects
      </p>

      {/* Force chains — "This is pushing..." */}
      {hasChains && ripple.chains.map((chain, i) => (
        <div key={`chain-${i}`}>
          <Connector
            label={i === 0 ? `This is ${directionVerb(chain.direction)}...` : `Also ${directionVerb(chain.direction)}...`}
            icon="↓"
          />
          <StepCard accentColor={chain.direction === "constraining" ? "#DC2626" : "#1D6FA5"}>
            <p className="text-[14px] font-bold text-[var(--color-text)] leading-snug mb-1.5">
              {chain.title}
            </p>
            <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.6]">
              {chain.mechanism}
            </p>
            {chain.targets.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {chain.targets.map((t) => (
                  <span key={t} className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </StepCard>
        </div>
      ))}

      {/* Convergences — "Which feeds into a developing trend..." */}
      {hasConvergences && ripple.convergences.map((conv, i) => {
        const pct = parseConfidenceNum(conv.confidence);
        return (
          <div key={`conv-${i}`}>
            <Connector
              label={i === 0 ? "Which feeds into a developing trend..." : "And also connects to..."}
              icon="↓"
            />
            <StepCard accentColor="#B45309">
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <p className="text-[14px] font-bold text-[var(--color-text)] leading-snug">
                  {conv.title}
                </p>
                <span className="text-[12px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full shrink-0">
                  {pct}% likely
                </span>
              </div>
              <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.6]">
                {conv.predictedOutcome}
              </p>
              {conv.timeline && (
                <p className="text-[12px] font-semibold text-amber-600 mt-2">
                  Expected {conv.timeline}
                </p>
              )}
            </StepCard>
          </div>
        );
      })}

      {/* Bottlenecks — "But it's blocked by..." */}
      {hasBottlenecks && ripple.bottlenecks.map((bn, i) => (
        <div key={`bn-${i}`}>
          <Connector
            label={i === 0 ? "But it's blocked by..." : "And also blocked by..."}
            icon="⚠"
          />
          <StepCard accentColor="#DC2626">
            <p className="text-[14px] font-bold text-[var(--color-text)] leading-snug mb-1">
              {humanizeBottleneck(bn.title)}
            </p>
            {bn.summary && (
              <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.6]">
                {bn.summary}
              </p>
            )}
            <span className="inline-block mt-2 text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 uppercase tracking-wide capitalize">
              {bn.status === "hardening" ? "Getting worse" : bn.status === "loosening" ? "Improving" : bn.status}
            </span>
          </StepCard>
        </div>
      ))}

      {/* Predictions — "We predict..." */}
      {hasPredictions && ripple.predictions.map((pred, i) => {
        const pct = parseConfidenceNum(pred.confidence);
        return (
          <div key={`pred-${i}`}>
            <Connector
              label={i === 0 ? "We predict..." : "We also predict..."}
              icon="→"
            />
            <StepCard accentColor="#059669">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[14px] font-bold text-[var(--color-text)] leading-snug">
                  {pred.title}
                </p>
                <span className="text-[12px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full shrink-0">
                  {pct}% confidence
                </span>
              </div>
              {pred.checkDate && (
                <p className="text-[12px] text-[var(--color-text-muted)] mt-1.5">
                  We&apos;ll check this by {pred.checkDate}
                </p>
              )}
            </StepCard>
          </div>
        );
      })}

      <div className="pl-6 pt-3 pb-1">
        <div className="w-px h-4 bg-[var(--color-border)] ml-3" />
      </div>
    </div>
  );
}
