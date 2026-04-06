"use client";

/**
 * FORCE GRAPH — Interactive visualization of how AI domains push and constrain each other.
 *
 * Nodes = 16 AI domains (sized by signal activity)
 * Edges = force chains (colored by type: green=accelerating, red=constraining, blue=enabling)
 * Click a node → see its current state
 * Click an edge → see what's happening between those domains
 * Drag nodes to explore. Zoom and pan.
 */

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import type { RadarData } from "@/lib/types";

// ── Types ──

interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  status: string;
  group: "builder" | "strategic" | "both";
}

interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  id: string;
  title: string;
  mechanism: string;
  direction: string;
  strength: string;
  sourceId: string;
  targetId: string;
}

interface SelectedItem {
  type: "node" | "link";
  data: GraphNode | GraphLink;
}

// ── Config ──

const NODE_NAMES: Record<string, string> = {
  "frontier-models": "Frontier Models",
  "open-source-models": "Open Source",
  "compute-hardware": "Hardware",
  "ai-agents": "AI Agents",
  "ai-coding-tools": "Coding Tools",
  "ai-infrastructure": "Infrastructure",
  "ai-safety-alignment": "AI Safety",
  "ai-policy-regulation": "Policy",
  "ai-business-funding": "Funding",
  "multimodal-ai": "Multimodal",
  "ai-for-science": "AI for Science",
  "robotics-embodied-ai": "Robotics",
  "ai-research-breakthroughs": "Research",
  "edge-on-device-ai": "Edge / On-Device",
  "ai-in-enterprise": "Enterprise",
  "frontier-edges": "Frontier Edges",
};

const BUILDER_NODES = new Set([
  "ai-coding-tools", "ai-agents", "open-source-models", "ai-infrastructure",
  "multimodal-ai", "edge-on-device-ai", "frontier-edges", "ai-research-breakthroughs",
]);

const STRATEGIC_NODES = new Set([
  "ai-business-funding", "ai-policy-regulation", "ai-in-enterprise",
  "compute-hardware", "ai-safety-alignment",
]);

const directionColors: Record<string, string> = {
  accelerating: "#059669",
  constraining: "#DC2626",
  enabling: "#2563EB",
  disrupting: "#D97706",
};

const directionLabels: Record<string, string> = {
  accelerating: "Accelerating",
  constraining: "Constraining",
  enabling: "Enabling",
  disrupting: "Disrupting",
};

// ── Component ──

export default function ForceGraph({ data }: { data: RadarData }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<SelectedItem | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Build graph data from radar data
  const graphData = useCallback(() => {
    const nodeIds = new Set<string>();
    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];

    // Add all known nodes
    for (const [id, name] of Object.entries(NODE_NAMES)) {
      nodeIds.add(id);
      const radarNode = data.nodes.find((n) => n.id === id);
      nodes.push({
        id,
        name,
        status: radarNode?.status || "unknown",
        group: BUILDER_NODES.has(id) ? "builder" : STRATEGIC_NODES.has(id) ? "strategic" : "both",
      });
    }

    // Add force chain links
    for (const chain of data.forceChains) {
      // Extract origin node ID
      const originMatch = chain.origin.match(/\[\[([^\]]+)\]\]/);
      const originId = originMatch ? originMatch[1] : null;

      if (!originId || !nodeIds.has(originId)) continue;

      for (const targetId of chain.targets) {
        if (!nodeIds.has(targetId)) continue;
        if (originId === targetId) continue;

        links.push({
          id: chain.id,
          source: originId,
          target: targetId,
          sourceId: originId,
          targetId: targetId,
          title: chain.title,
          mechanism: chain.mechanism,
          direction: chain.direction,
          strength: chain.strength,
        });
      }
    }

    return { nodes, links };
  }, [data]);

  // Measure container
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: Math.max(500, window.innerHeight - 200) });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // D3 force simulation
  useEffect(() => {
    if (!svgRef.current) return;

    const { nodes, links } = graphData();
    const { width, height } = dimensions;

    // Clear previous
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Zoom container
    const g = svg.append("g");
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (event) => g.attr("transform", event.transform));
    svg.call(zoom);

    // Arrow markers for each direction
    for (const [dir, color] of Object.entries(directionColors)) {
      g.append("defs").append("marker")
        .attr("id", `arrow-${dir}`)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 28)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("fill", color)
        .attr("d", "M0,-5L10,0L0,5");
    }

    // Force simulation
    const simulation = d3.forceSimulation<GraphNode>(nodes)
      .force("link", d3.forceLink<GraphNode, GraphLink>(links).id((d) => d.id).distance(160))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(45));

    // Links
    const link = g.append("g")
      .selectAll("path")
      .data(links)
      .join("path")
      .attr("fill", "none")
      .attr("stroke", (d) => directionColors[d.direction] || "#94A3B8")
      .attr("stroke-width", (d) => d.strength === "strong" ? 2.5 : d.strength === "moderate" ? 1.8 : 1)
      .attr("stroke-opacity", 0.5)
      .attr("marker-end", (d) => `url(#arrow-${d.direction})`)
      .attr("cursor", "pointer")
      .on("mouseover", function () {
        d3.select(this).attr("stroke-opacity", 1).attr("stroke-width", 3);
      })
      .on("mouseout", function (_, d) {
        d3.select(this)
          .attr("stroke-opacity", 0.5)
          .attr("stroke-width", d.strength === "strong" ? 2.5 : d.strength === "moderate" ? 1.8 : 1);
      })
      .on("click", (_, d) => {
        setSelected({ type: "link", data: d });
      });

    // Node groups
    const node = g.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("cursor", "grab")
      .on("click", (_, d) => {
        setSelected({ type: "node", data: d });
      })
      // @ts-expect-error D3 drag type mismatch with selection
      .call(d3.drag<SVGGElement, GraphNode>()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        })
      );

    // Node circles
    node.append("circle")
      .attr("r", 22)
      .attr("fill", (d) => d.group === "builder" ? "#EEF6FF" : d.group === "strategic" ? "#FFF7ED" : "#F8FAFC")
      .attr("stroke", (d) => d.group === "builder" ? "#1D6FA5" : d.group === "strategic" ? "#92400E" : "#64748B")
      .attr("stroke-width", 2)
      .on("mouseover", function () {
        d3.select(this).transition().duration(200).attr("r", 26).attr("stroke-width", 3);
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(200).attr("r", 22).attr("stroke-width", 2);
      });

    // Status pulse for accelerating nodes
    node.filter((d) => d.status === "accelerating")
      .append("circle")
      .attr("r", 22)
      .attr("fill", "none")
      .attr("stroke", "#059669")
      .attr("stroke-width", 1)
      .attr("opacity", 0)
      .each(function pulse() {
        d3.select(this)
          .attr("r", 22)
          .attr("opacity", 0.6)
          .transition()
          .duration(2000)
          .attr("r", 32)
          .attr("opacity", 0)
          .on("end", pulse);
      });

    // Node labels
    node.append("text")
      .text((d) => d.name)
      .attr("text-anchor", "middle")
      .attr("dy", 36)
      .attr("font-size", "11px")
      .attr("font-weight", "600")
      .attr("fill", "#202122")
      .attr("pointer-events", "none");

    // Tick
    simulation.on("tick", () => {
      link.attr("d", (d) => {
        const sx = (d.source as GraphNode).x!;
        const sy = (d.source as GraphNode).y!;
        const tx = (d.target as GraphNode).x!;
        const ty = (d.target as GraphNode).y!;
        const dx = tx - sx;
        const dy = ty - sy;
        const dr = Math.sqrt(dx * dx + dy * dy) * 1.5;
        return `M${sx},${sy}A${dr},${dr} 0 0,1 ${tx},${ty}`;
      });

      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    // Initial zoom to fit
    setTimeout(() => {
      svg.transition().duration(500).call(
        zoom.transform,
        d3.zoomIdentity.translate(width * 0.05, height * 0.05).scale(0.9)
      );
    }, 1000);

  }, [graphData, dimensions]);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[#eaecf0]">
        <h1 className="text-[22px] font-serif font-normal text-[#202122]">
          AI Landscape — Live Force Map
        </h1>
        <p className="text-[13px] text-[#54595d] mt-1">
          How AI domains push, constrain, and enable each other right now. Drag nodes to explore. Click any connection to see what&apos;s happening.
        </p>
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mt-3 text-[12px]">
          {Object.entries(directionLabels).map(([dir, label]) => (
            <div key={dir} className="flex items-center gap-1.5">
              <div className="w-4 h-0.5 rounded" style={{ backgroundColor: directionColors[dir] }} />
              <span className="text-[#54595d]">{label}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5 ml-4">
            <div className="w-3 h-3 rounded-full border-2 border-[#1D6FA5] bg-[#EEF6FF]" />
            <span className="text-[#54595d]">Builder domain</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full border-2 border-[#92400E] bg-[#FFF7ED]" />
            <span className="text-[#54595d]">Strategic domain</span>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="flex-1 relative bg-[#fafafa] min-h-[500px]">
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-full"
        />

        {/* Detail panel */}
        {selected && (
          <div className="absolute top-4 right-4 w-[340px] bg-white rounded-lg border border-[#a2a9b1] shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-[#f8f9fa] border-b border-[#eaecf0]">
              <span className="text-[13px] font-bold text-[#202122]">
                {selected.type === "node" ? (selected.data as GraphNode).name : "Connection"}
              </span>
              <button
                onClick={() => setSelected(null)}
                className="text-[#54595d] hover:text-[#202122] text-lg leading-none"
              >
                ×
              </button>
            </div>
            <div className="px-4 py-3 max-h-[400px] overflow-y-auto">
              {selected.type === "node" && (() => {
                const n = selected.data as GraphNode;
                const radarNode = data.nodes.find((rn) => rn.id === n.id);
                return (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        n.status === "accelerating" ? "bg-emerald-50 text-emerald-700" : "bg-gray-50 text-gray-600"
                      }`}>
                        {n.status}
                      </span>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        n.group === "builder" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"
                      }`}>
                        {n.group}
                      </span>
                    </div>
                    {radarNode?.currentState && (
                      <p className="text-[13px] text-[#202122] leading-[1.6]">
                        {radarNode.currentState}
                      </p>
                    )}
                    <a
                      href={`/wiki/nodes/${n.id}`}
                      className="inline-block mt-3 text-[13px] text-[#0645ad] hover:underline font-semibold"
                    >
                      Read full article →
                    </a>
                  </div>
                );
              })()}
              {selected.type === "link" && (() => {
                const l = selected.data as GraphLink;
                return (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: directionColors[l.direction] + "15",
                          color: directionColors[l.direction],
                        }}
                      >
                        {directionLabels[l.direction] || l.direction}
                      </span>
                      <span className="text-[11px] text-[#72777d] capitalize">{l.strength}</span>
                    </div>
                    <h3 className="text-[14px] font-bold text-[#202122] mb-2">{l.title}</h3>
                    <p className="text-[13px] text-[#202122] leading-[1.6]">
                      {l.mechanism}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-[12px] text-[#54595d]">
                      <span>{NODE_NAMES[l.sourceId] || l.sourceId}</span>
                      <span>→</span>
                      <span>{NODE_NAMES[l.targetId] || l.targetId}</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
