"use client";

import type { Bottleneck } from "@/lib/types";

const NODE_NAMES: Record<string, string> = {
  "ai-agents": "AI Agents",
  "ai-coding-tools": "Coding Tools",
  "ai-in-enterprise": "Enterprise AI",
  "compute-hardware": "Hardware",
  "ai-infrastructure": "Infrastructure",
  "frontier-models": "Frontier Models",
  "open-source-models": "Open Source",
  "ai-safety-alignment": "Safety",
  "ai-policy-regulation": "Policy",
  "ai-business-funding": "Business",
};

/** Map internal titles to plain-language descriptions */
function humanize(bn: Bottleneck): { title: string; subtitle: string } {
  const id = bn.id;
  if (id === "BN-001" || bn.title.toLowerCase().includes("agent reliability")) {
    return {
      title: "AI agents aren't reliable enough yet",
      subtitle: `Only 37% success rate in enterprise tasks. ${bn.attackers} major companies are working on this. ${bn.looseningSignals > 0 ? `${bn.looseningSignals} recent signs of progress.` : ""}`,
    };
  }
  if (id === "BN-002" || bn.title.toLowerCase().includes("mcp") || bn.title.toLowerCase().includes("protocol")) {
    return {
      title: "The tool-connection protocol has design gaps",
      subtitle: `MCP (how AI agents connect to tools) can't represent all tool types correctly — agents silently fail on complex tasks. ${bn.attackers > 0 ? `${bn.attackers} teams working on fixes.` : ""}`,
    };
  }
  if (id === "BN-004" || bn.title.toLowerCase().includes("datacenter") || bn.title.toLowerCase().includes("power")) {
    return {
      title: "Not enough datacenters are getting built",
      subtitle: `Half of planned US datacenters delayed due to equipment shortages from China. Only 4GW of 12GW is actually under construction.`,
    };
  }
  // Fallback: use the original title but try to make it more readable
  return {
    title: bn.title,
    subtitle: bn.summary || `${bn.attackers > 0 ? `${bn.attackers} teams attacking this problem.` : ""} ${bn.looseningSignals > 0 ? `${bn.looseningSignals} signs of progress.` : ""}`,
  };
}

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  blocking: { bg: "bg-red-50", text: "text-red-700", label: "Blocking" },
  hardening: { bg: "bg-red-50", text: "text-red-600", label: "Getting worse" },
  loosening: { bg: "bg-emerald-50", text: "text-emerald-700", label: "Improving" },
  easing: { bg: "bg-emerald-50", text: "text-emerald-700", label: "Improving" },
};

export default function BottleneckCard({ bottleneck }: { bottleneck: Bottleneck }) {
  const { title, subtitle } = humanize(bottleneck);
  const status = statusStyles[bottleneck.status] || statusStyles.blocking;

  return (
    <div
      className="bg-white rounded-[var(--radius-lg)] p-5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Status badge + title */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-[15px] font-bold text-[var(--color-text)] leading-[1.4]">
          {title}
        </h3>
        <span className={`${status.bg} ${status.text} text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 uppercase tracking-wide`}>
          {status.label}
        </span>
      </div>

      {/* Plain-language explanation */}
      <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.7] mb-3">
        {subtitle}
      </p>

      {/* Affected areas */}
      <div className="flex flex-wrap gap-1.5">
        {bottleneck.blocks.slice(0, 4).map((nodeId) => (
          <span
            key={nodeId}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600"
          >
            {NODE_NAMES[nodeId] || nodeId}
          </span>
        ))}
      </div>
    </div>
  );
}
