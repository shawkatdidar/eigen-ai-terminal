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

function humanize(bn: Bottleneck): { title: string; subtitle: string } {
  const id = bn.id;
  if (id === "BN-001" || bn.title.toLowerCase().includes("agent reliability")) {
    return {
      title: "Agent reliability is still the hard wall",
      subtitle: `Only 37% success rate in enterprise tasks. ${bn.attackers} major teams are attacking it.${bn.looseningSignals > 0 ? ` ${bn.looseningSignals} recent loosening signals are on record.` : ""}`,
    };
  }
  if (
    id === "BN-002" ||
    bn.title.toLowerCase().includes("mcp") ||
    bn.title.toLowerCase().includes("protocol")
  ) {
    return {
      title: "The tool protocol is still lossy",
      subtitle: `MCP remains the default connection layer, but some complex tool behaviors still fail silently.${bn.attackers > 0 ? ` ${bn.attackers} teams are now working around the gap.` : ""}`,
    };
  }
  if (
    id === "BN-004" ||
    bn.title.toLowerCase().includes("datacenter") ||
    bn.title.toLowerCase().includes("power")
  ) {
    return {
      title: "Datacenter buildout is lagging demand",
      subtitle:
        "Power equipment and supply-chain bottlenecks are still slowing capacity expansion across planned US buildouts.",
    };
  }
  return {
    title: bn.title,
    subtitle:
      bn.summary ||
      `${bn.attackers > 0 ? `${bn.attackers} teams are working this constraint.` : ""} ${bn.looseningSignals > 0 ? `${bn.looseningSignals} loosening signals are recorded.` : ""}`.trim(),
  };
}

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  blocking: {
    bg: "rgba(244, 143, 135, 0.12)",
    text: "#f7b2ab",
    label: "Blocking",
  },
  hardening: {
    bg: "rgba(244, 143, 135, 0.12)",
    text: "#f48f87",
    label: "Hardening",
  },
  loosening: {
    bg: "rgba(116, 215, 180, 0.12)",
    text: "#a6f0d3",
    label: "Loosening",
  },
  easing: {
    bg: "rgba(116, 215, 180, 0.12)",
    text: "#a6f0d3",
    label: "Improving",
  },
};

export default function BottleneckCard({
  bottleneck,
}: {
  bottleneck: Bottleneck;
}) {
  const { title, subtitle } = humanize(bottleneck);
  const status = statusStyles[bottleneck.status] || statusStyles.blocking;

  return (
    <div className="terminal-card rounded-[var(--radius-lg)] p-5" style={{ boxShadow: "var(--shadow-card)" }}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Bottleneck
          </p>
          <h3 className="mt-3 text-[17px] leading-[1.45] text-[var(--color-text-strong)]">
            {title}
          </h3>
        </div>
        <span
          className="shrink-0 rounded-full px-2.5 py-1 font-ui text-[10px] uppercase tracking-[0.16em]"
          style={{ background: status.bg, color: status.text }}
        >
          {status.label}
        </span>
      </div>

      <p className="mt-4 text-[13px] leading-[1.75] text-[var(--color-text-secondary)]">
        {subtitle}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {bottleneck.blocks.slice(0, 4).map((nodeId) => (
          <span
            key={nodeId}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-2.5 py-1 font-ui text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
          >
            {NODE_NAMES[nodeId] || nodeId}
          </span>
        ))}
      </div>
    </div>
  );
}
