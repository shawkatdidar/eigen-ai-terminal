"use client";

import type { VelocityMetric } from "@/lib/types";

function getArrow(acceleration: string): { icon: string; color: string } {
  const lower = acceleration.toLowerCase();
  if (lower.includes("accelerating") && lower.includes("downward")) {
    return { icon: "↓↓", color: "var(--color-accelerating)" };
  }
  if (lower.includes("accelerating")) {
    return { icon: "↑↑", color: "var(--color-accelerating)" };
  }
  if (lower.includes("decelerating") || lower.includes("slowing")) {
    return { icon: "↓", color: "var(--color-hardening)" };
  }
  if (lower.includes("stable") || lower.includes("steady")) {
    return { icon: "→", color: "var(--color-significant)" };
  }
  if (lower.includes("new")) {
    return { icon: "✦", color: "var(--color-notable)" };
  }
  return { icon: "", color: "" };
}

function explainer(metric: VelocityMetric): string {
  const id = metric.id;
  if (id === "V-03") return "GPU memory cost is dropping fast, which changes the economics of local and embedded AI.";
  if (id === "V-04") return "Model memory footprints are compressing, so more useful workloads fit inside the same hardware budget.";
  if (id === "V-05") return "Longer autonomous task windows make agents more operational, not just more interesting.";
  if (id === "V-06") return "The tool-connection layer is becoming default infrastructure across agent products.";
  if (id === "V-07") return "Reliability remains low enough to matter every time someone claims agents are production-ready.";
  if (id === "V-09") return "Hard-math benchmark movement is still one of the cleaner reads on frontier reasoning gains.";
  if (id === "V-11") return "Large capital commitments continue to shape the pace of compute and model deployment.";
  if (id === "V-13") return "Commercial growth rates are diverging between frontier labs, and the market is noticing.";
  if (id === "V-17") return "Developer adoption remains a leading indicator for which AI products become workflow infrastructure.";
  if (id === "V-21") return "Real-world autonomous deployment keeps moving from pilot status toward operating reality.";
  if (id === "V-23") return "Open models are closing quality gaps in modalities that used to belong to proprietary leaders.";
  if (id === "V-27") return "Venture funding is still underwriting aggressive AI platform expansion.";
  if (id === "V-28") return "China's chip supply chain work is compounding into a strategic infrastructure story.";
  return metric.velocity || "";
}

function selectTopMetrics(metrics: VelocityMetric[]): VelocityMetric[] {
  const withData = metrics.filter((metric) => metric.acceleration && metric.velocity);
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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {topMetrics.map((metric) => {
        const arrow = getArrow(metric.acceleration);
        return (
          <div key={metric.id} className="terminal-card rounded-[var(--radius-lg)] p-5" style={{ boxShadow: "var(--shadow-card)" }}>
            <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              {metric.metric}
            </p>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-[26px] leading-none text-[var(--color-text-strong)] tabular-nums">
                {metric.currentValue}
              </span>
              {arrow.icon && (
                <span
                  className="font-ui text-[12px] uppercase tracking-[0.12em]"
                  style={{ color: arrow.color }}
                >
                  {arrow.icon}
                </span>
              )}
            </div>

            <p className="mt-3 text-[13px] leading-[1.75] text-[var(--color-text-secondary)]">
              {explainer(metric)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
