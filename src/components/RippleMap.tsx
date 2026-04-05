"use client";

/**
 * RIPPLE MAP — Visual interactive causal map.
 *
 * The signal sits as a node on the left. Curved SVG arrows fan out
 * to connected effects on the right. Each arrow is color-coded:
 *   Blue    → Pushing / Accelerating
 *   Amber   → Feeds into a trend
 *   Red     → Blocked by
 *   Emerald → We predict
 *
 * Arrows animate in. Cards fade in with staggered delays.
 * Hover any card for detail. Click to expand.
 */

import { useRef, useLayoutEffect, useState, useCallback } from "react";
import type { Ripple, RippleChain, RippleConvergence, RippleBottleneck, RipplePrediction } from "@/lib/types";

// ── Types ──

type ConnectionType = "push" | "trend" | "block" | "predict";

interface Connection {
  type: ConnectionType;
  label: string;
  title: string;
  detail: string;
  badge?: string;
  badgeColor?: string;
}

// ── Config ──

const typeConfig: Record<ConnectionType, { color: string; lineColor: string; bg: string; icon: string }> = {
  push:    { color: "#1D6FA5", lineColor: "#1D6FA5", bg: "#EEF6FF", icon: "→" },
  trend:   { color: "#92400E", lineColor: "#D97706", bg: "#FFF7ED", icon: "↗" },
  block:   { color: "#B91C1C", lineColor: "#DC2626", bg: "#FEF2F2", icon: "⚠" },
  predict: { color: "#047857", lineColor: "#059669", bg: "#ECFDF5", icon: "◎" },
};

const typeLabels: Record<ConnectionType, string> = {
  push: "Pushing",
  trend: "Developing trend",
  block: "Roadblock",
  predict: "Prediction",
};

// ── Helpers ──

function humanizeBottleneck(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("agent reliability")) return "AI agents aren't reliable enough yet";
  if (lower.includes("mcp") || lower.includes("protocol")) return "Tool-connection protocol has design gaps";
  if (lower.includes("datacenter") || lower.includes("power")) return "Not enough datacenters being built";
  return title;
}

function parseConfidence(raw: string): number {
  const m = raw.match(/(\d+)/);
  return m ? parseInt(m[1]) : 50;
}

function buildConnections(ripple: Ripple): Connection[] {
  const conns: Connection[] = [];

  for (const chain of ripple.chains) {
    conns.push({
      type: chain.direction === "constraining" ? "block" : "push",
      label: chain.direction === "constraining" ? "Constraining" : "Pushing",
      title: chain.title,
      detail: chain.mechanism,
      badge: chain.targets.join(", "),
    });
  }

  for (const conv of ripple.convergences) {
    const pct = parseConfidence(conv.confidence);
    conns.push({
      type: "trend",
      label: "Feeds into trend",
      title: conv.title,
      detail: conv.predictedOutcome,
      badge: `${pct}% likely`,
      badgeColor: "#92400E",
    });
  }

  for (const bn of ripple.bottlenecks) {
    conns.push({
      type: "block",
      label: "Blocked by",
      title: humanizeBottleneck(bn.title),
      detail: bn.summary,
      badge: bn.status === "hardening" ? "Getting worse" : bn.status === "loosening" ? "Improving" : bn.status,
      badgeColor: "#B91C1C",
    });
  }

  for (const pred of ripple.predictions) {
    const pct = parseConfidence(pred.confidence);
    conns.push({
      type: "predict",
      label: "We predict",
      title: pred.title,
      detail: pred.checkDate ? `We'll check this by ${pred.checkDate}` : "",
      badge: `${pct}% confidence`,
      badgeColor: "#047857",
    });
  }

  return conns;
}

// ── Bezier path between two points ──

function bezier(x1: number, y1: number, x2: number, y2: number): string {
  const midX = x1 + (x2 - x1) * 0.5;
  return `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
}

// ── Connection Card ──

function ConnectionCard({
  conn,
  index,
  expanded,
  onClick,
  innerRef,
}: {
  conn: Connection;
  index: number;
  expanded: boolean;
  onClick: () => void;
  innerRef: (el: HTMLDivElement | null) => void;
}) {
  const cfg = typeConfig[conn.type];

  return (
    <div
      ref={innerRef}
      onClick={onClick}
      className="rounded-[12px] p-4 cursor-pointer transition-all duration-300 border-l-[3px]"
      style={{
        background: cfg.bg,
        borderLeftColor: cfg.color,
        opacity: 0,
        animation: `fadeSlideIn 0.4s ease-out ${index * 0.1 + 0.2}s forwards`,
      }}
    >
      {/* Type label */}
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-[12px] font-bold uppercase tracking-wider" style={{ color: cfg.color }}>
          {cfg.icon} {typeLabels[conn.type]}
        </span>
        {conn.badge && (
          <span
            className="text-[11px] font-bold px-2 py-0.5 rounded-full ml-auto"
            style={{
              color: conn.badgeColor || cfg.color,
              background: "white",
            }}
          >
            {conn.badge}
          </span>
        )}
      </div>

      {/* Title */}
      <p className="text-[14px] font-bold text-[var(--color-text)] leading-snug">
        {conn.title}
      </p>

      {/* Detail — on expand */}
      {expanded && conn.detail && (
        <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.6] mt-2">
          {conn.detail}
        </p>
      )}
    </div>
  );
}

// ── Main Component ──

export default function RippleMap({
  ripple,
  signalTitle,
}: {
  ripple: Ripple;
  signalTitle: string;
}) {
  const connections = buildConnections(ripple);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [paths, setPaths] = useState<Array<{ d: string; color: string; index: number }>>([]);

  const sourceRef = useRef<HTMLDivElement>(null);
  const targetRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const setTargetRef = useCallback((idx: number) => (el: HTMLDivElement | null) => {
    targetRefs.current[idx] = el;
  }, []);

  // Calculate SVG paths after layout
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      if (!sourceRef.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const sourceRect = sourceRef.current.getBoundingClientRect();
      const sourceX = sourceRect.right - containerRect.left;
      const sourceY = sourceRect.top + sourceRect.height / 2 - containerRect.top;

      const newPaths: Array<{ d: string; color: string; index: number }> = [];

      targetRefs.current.forEach((target, i) => {
        if (!target) return;
        const targetRect = target.getBoundingClientRect();
        const targetX = targetRect.left - containerRect.left;
        const targetY = targetRect.top + targetRect.height / 2 - containerRect.top;

        const conn = connections[i];
        const cfg = typeConfig[conn.type];

        newPaths.push({
          d: bezier(sourceX, sourceY, targetX, targetY),
          color: cfg.lineColor,
          index: i,
        });
      });

      setPaths(newPaths);
    }, 100); // Wait for fade-in animations to start

    return () => clearTimeout(timer);
  }, [connections.length, expandedIdx]);

  if (connections.length === 0) return null;

  return (
    <div className="mt-4 pt-4 border-t border-dashed" style={{ borderColor: "var(--color-border)" }}>
      {/* CSS animations */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>

      <p className="text-[12px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
        Ripple effects
      </p>

      {/* The map layout */}
      <div ref={containerRef} className="relative flex gap-6 items-start min-h-[200px]">
        {/* SVG layer for connection lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        >
          {paths.map((p) => (
            <g key={p.index}>
              <path
                d={p.d}
                fill="none"
                stroke={p.color}
                strokeWidth="2"
                strokeDasharray="1000"
                strokeDashoffset="0"
                opacity="0.35"
                style={{
                  animation: `drawLine 0.6s ease-out ${p.index * 0.1 + 0.1}s both`,
                }}
              />
              {/* Animated dot on the line */}
              <circle r="3" fill={p.color} opacity="0">
                <animateMotion
                  dur="1.5s"
                  repeatCount="1"
                  begin={`${p.index * 0.15 + 0.3}s`}
                  path={p.d}
                  fill="freeze"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.8;0"
                  dur="1.5s"
                  begin={`${p.index * 0.15 + 0.3}s`}
                  fill="freeze"
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* Source node — signal summary */}
        <div
          ref={sourceRef}
          className="shrink-0 w-[200px] rounded-[12px] bg-white border-2 border-[var(--color-border)] p-4 relative"
          style={{ zIndex: 2 }}
        >
          <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] mb-2 animate-pulse" />
          <p className="text-[13px] font-bold text-[var(--color-text)] leading-snug">
            {signalTitle}
          </p>
          <p className="text-[11px] text-[var(--color-text-muted)] mt-1 font-semibold uppercase tracking-wider">
            Today&apos;s signal
          </p>
        </div>

        {/* Target nodes — connections */}
        <div className="flex-1 space-y-2.5 relative" style={{ zIndex: 2 }}>
          {connections.map((conn, i) => (
            <ConnectionCard
              key={i}
              conn={conn}
              index={i}
              expanded={expandedIdx === i}
              onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
              innerRef={setTargetRef(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
