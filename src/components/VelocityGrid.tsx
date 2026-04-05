"use client";

import type { VelocityMetric } from "@/lib/types";

function getArrow(acceleration: string): { icon: string; color: string } {
  const lower = acceleration.toLowerCase();
  if (lower.includes("accelerating") && lower.includes("downward"))
    return { icon: "↓↓", color: "text-emerald-600" };
  if (lower.includes("accelerating"))
    return { icon: "↑↑", color: "text-emerald-600" };
  if (lower.includes("decelerating") || lower.includes("slowing"))
    return { icon: "↓", color: "text-red-500" };
  if (lower.includes("stable") || lower.includes("steady"))
    return { icon: "→", color: "text-amber-500" };
  if (lower.includes("new"))
    return { icon: "✦", color: "text-blue-500" };
  return { icon: "", color: "" };
}

/** Short plain-language explainer for each metric */
function explainer(metric: VelocityMetric): string {
  const id = metric.id;
  if (id === "V-03") return "The cost of GPU memory is dropping fast — running AI locally gets cheaper.";
  if (id === "V-04") return "AI models can compress their memory use dramatically — more users per GPU.";
  if (id === "V-05") return "AI agents can now work autonomously for 4+ hours without human help.";
  if (id === "V-06") return "The main protocol for connecting AI to tools — adoption is massive.";
  if (id === "V-07") return "AI agents succeed at only 37% of enterprise tasks — the reliability gap.";
  if (id === "V-09") return "How well frontier models solve hard math — a key capability benchmark.";
  if (id === "V-11") return "The largest single bet anyone has placed on AI keeps getting bigger.";
  if (id === "V-13") return "Anthropic is growing revenue 3x faster than OpenAI.";
  if (id === "V-17") return "GitHub Codex weekly active users — shows how many developers use AI coding.";
  if (id === "V-21") return "Waymo's self-driving rides are scaling fast — real-world AI deployment.";
  if (id === "V-23") return "Open-source text-to-speech now beats commercial alternatives.";
  if (id === "V-27") return "Global AI venture funding hit record levels.";
  if (id === "V-28") return "China is rapidly building its own AI chip supply chain.";
  // Fallback
  return metric.velocity || "";
}

function selectTopMetrics(metrics: VelocityMetric[]): VelocityMetric[] {
  const withData = metrics.filter((m) => m.acceleration && m.velocity);
  const sorted = withData.sort((a, b) => {
    const aScore = a.acceleration.toLowerCase().includes("accelerating") ? 2 : 1;
    const bScore = b.acceleration.toLowerCase().includes("accelerating") ? 2 : 1;
    return bScore - aScore;
  });
  return sorted.slice(0, 8);
}

export default function VelocityGrid({ metrics }: { metrics: VelocityMetric[] }) {
  const topMetrics = selectTopMetrics(metrics);
  if (topMetrics.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {topMetrics.map((metric) => {
        const arrow = getArrow(metric.acceleration);
        const explanation = explainer(metric);
        return (
          <div
            key={metric.id}
            className="bg-white rounded-[var(--radius-lg)] p-5"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {/* Metric name */}
            <p className="text-[12px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
              {metric.metric}
            </p>

            {/* Value + arrow */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-xl font-bold text-[var(--color-text)] tabular-nums">
                {metric.currentValue}
              </span>
              {arrow.icon && (
                <span className={`text-sm font-bold ${arrow.color}`}>{arrow.icon}</span>
              )}
            </div>

            {/* Explainer */}
            <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.6]">
              {explanation}
            </p>
          </div>
        );
      })}
    </div>
  );
}
