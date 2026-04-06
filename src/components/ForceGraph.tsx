"use client";

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

interface CascadeStep {
  from: string;
  to: string;
  title: string;
  mechanism: string;
  direction: string;
  depth: number;
}

// ── Config ──

const NODE_NAMES: Record<string, string> = {
  "frontier-models": "Frontier Models", "open-source-models": "Open Source",
  "compute-hardware": "Hardware", "ai-agents": "AI Agents",
  "ai-coding-tools": "Coding Tools", "ai-infrastructure": "Infrastructure",
  "ai-safety-alignment": "AI Safety", "ai-policy-regulation": "Policy",
  "ai-business-funding": "Funding", "multimodal-ai": "Multimodal",
  "ai-for-science": "AI for Science", "robotics-embodied-ai": "Robotics",
  "ai-research-breakthroughs": "Research", "edge-on-device-ai": "Edge / On-Device",
  "ai-in-enterprise": "Enterprise", "frontier-edges": "Frontier Edges",
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
  accelerating: "#059669", constraining: "#DC2626", enabling: "#2563EB", disrupting: "#D97706",
};
const directionLabels: Record<string, string> = {
  accelerating: "Accelerating", constraining: "Constraining", enabling: "Enabling", disrupting: "Disrupting",
};
const directionVerbs: Record<string, string> = {
  accelerating: "is accelerating", constraining: "is constraining", enabling: "is enabling", disrupting: "is disrupting",
};

// ── Component ──

export default function ForceGraph({ data }: { data: RadarData }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<GraphLink | null>(null);
  const [cascade, setCascade] = useState<CascadeStep[]>([]);

  // Store refs to D3 selections for highlighting
  const linkSelRef = useRef<d3.Selection<SVGPathElement, GraphLink, SVGGElement, unknown> | null>(null);
  const nodeSelRef = useRef<d3.Selection<SVGGElement, GraphNode, SVGGElement, unknown> | null>(null);

  const graphData = useCallback(() => {
    const nodeIds = new Set<string>();
    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];

    for (const [id, name] of Object.entries(NODE_NAMES)) {
      nodeIds.add(id);
      const rn = data.nodes.find((n) => n.id === id);
      nodes.push({ id, name, status: rn?.status || "unknown", group: BUILDER_NODES.has(id) ? "builder" : STRATEGIC_NODES.has(id) ? "strategic" : "both" });
    }

    for (const chain of data.forceChains) {
      const originMatch = chain.origin.match(/\[\[([^\]]+)\]\]/);
      const originId = originMatch ? originMatch[1] : null;
      if (!originId || !nodeIds.has(originId)) continue;
      for (const targetId of chain.targets) {
        if (!nodeIds.has(targetId) || originId === targetId) continue;
        links.push({
          id: chain.id, source: originId, target: targetId,
          sourceId: originId, targetId: targetId, title: chain.title,
          mechanism: chain.mechanism, direction: chain.direction, strength: chain.strength,
        });
      }
    }
    return { nodes, links };
  }, [data]);

  // Build cascade chain: follow links from a node multi-hop
  const buildCascade = useCallback((startId: string, links: GraphLink[]): CascadeStep[] => {
    const steps: CascadeStep[] = [];
    const visited = new Set<string>();
    const queue: Array<{ nodeId: string; depth: number }> = [{ nodeId: startId, depth: 0 }];

    while (queue.length > 0 && steps.length < 12) {
      const { nodeId, depth } = queue.shift()!;
      if (depth > 3) continue; // Max 3 hops

      const outgoing = links.filter((l) => l.sourceId === nodeId && !visited.has(`${l.sourceId}-${l.targetId}`));
      for (const link of outgoing) {
        visited.add(`${link.sourceId}-${link.targetId}`);
        steps.push({
          from: NODE_NAMES[link.sourceId] || link.sourceId,
          to: NODE_NAMES[link.targetId] || link.targetId,
          title: link.title,
          mechanism: link.mechanism.slice(0, 200) + (link.mechanism.length > 200 ? "..." : ""),
          direction: link.direction,
          depth,
        });
        queue.push({ nodeId: link.targetId, depth: depth + 1 });
      }
    }
    return steps;
  }, []);

  // Highlight a node's cascade in the graph
  const highlightNode = useCallback((nodeId: string | null) => {
    if (!linkSelRef.current || !nodeSelRef.current) return;
    const linkSel = linkSelRef.current;
    const nodeSel = nodeSelRef.current;

    if (!nodeId) {
      // Reset
      linkSel.attr("stroke-opacity", 0.5).attr("stroke-width", (d) => d.strength === "strong" ? 2.5 : 1.8);
      nodeSel.attr("opacity", 1);
      return;
    }

    // Find all nodes reachable from this node (BFS)
    const { links } = graphData();
    const reachable = new Set<string>([nodeId]);
    const activeEdges = new Set<string>();
    const queue = [nodeId];
    let depth = 0;
    const depthMap: Record<string, string[]> = { [nodeId]: [nodeId] };

    while (queue.length > 0 && depth < 3) {
      const next: string[] = [];
      for (const id of queue) {
        for (const link of links) {
          if (link.sourceId === id && !reachable.has(link.targetId)) {
            reachable.add(link.targetId);
            next.push(link.targetId);
            activeEdges.add(`${link.sourceId}-${link.targetId}`);
          }
        }
      }
      depth++;
      queue.length = 0;
      queue.push(...next);
    }

    // Apply highlighting
    linkSel
      .attr("stroke-opacity", (d) => activeEdges.has(`${d.sourceId}-${d.targetId}`) ? 0.9 : 0.07)
      .attr("stroke-width", (d) => activeEdges.has(`${d.sourceId}-${d.targetId}`) ? 3 : 1);

    nodeSel.attr("opacity", (d) => reachable.has(d.id) ? 1 : 0.15);
  }, [graphData]);

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

  // D3 simulation
  useEffect(() => {
    if (!svgRef.current) return;
    const { nodes, links } = graphData();
    const { width, height } = dimensions;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg.append("g");
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (event) => g.attr("transform", event.transform));
    svg.call(zoom);

    // Click on background to deselect
    svg.on("click", () => {
      setActiveNode(null);
      setActiveLink(null);
      setCascade([]);
      highlightNode(null);
    });

    // Arrow markers
    for (const [dir, color] of Object.entries(directionColors)) {
      g.append("defs").append("marker")
        .attr("id", `arrow-${dir}`)
        .attr("viewBox", "0 -5 10 10").attr("refX", 28).attr("refY", 0)
        .attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto")
        .append("path").attr("fill", color).attr("d", "M0,-5L10,0L0,5");
    }

    const simulation = d3.forceSimulation<GraphNode>(nodes)
      .force("link", d3.forceLink<GraphNode, GraphLink>(links).id((d) => d.id).distance(160))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(45));

    // Links
    const linkSel = g.append("g").selectAll<SVGPathElement, GraphLink>("path")
      .data(links).join("path")
      .attr("fill", "none")
      .attr("stroke", (d) => directionColors[d.direction] || "#94A3B8")
      .attr("stroke-width", (d) => d.strength === "strong" ? 2.5 : 1.8)
      .attr("stroke-opacity", 0.5)
      .attr("marker-end", (d) => `url(#arrow-${d.direction})`)
      .attr("cursor", "pointer")
      .on("click", (event, d) => {
        event.stopPropagation();
        setActiveLink(d);
        setActiveNode(null);
        setCascade([]);
        highlightNode(null);
      });

    linkSelRef.current = linkSel;

    // Nodes
    const nodeSel = g.append("g").selectAll<SVGGElement, GraphNode>("g")
      .data(nodes).join("g")
      .attr("cursor", "grab")
      .on("click", (event, d) => {
        event.stopPropagation();
        setActiveNode(d.id);
        setActiveLink(null);
        const chain = buildCascade(d.id, links);
        setCascade(chain);
        highlightNode(d.id);
      })
      .call(d3.drag<SVGGElement, GraphNode>()
        .on("start", (event, d) => { if (!event.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
        .on("drag", (event, d) => { d.fx = event.x; d.fy = event.y; })
        .on("end", (event, d) => { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; })
      );

    nodeSelRef.current = nodeSel;

    nodeSel.append("circle").attr("r", 22)
      .attr("fill", (d) => d.group === "builder" ? "#EEF6FF" : d.group === "strategic" ? "#FFF7ED" : "#F8FAFC")
      .attr("stroke", (d) => d.group === "builder" ? "#1D6FA5" : d.group === "strategic" ? "#92400E" : "#64748B")
      .attr("stroke-width", 2);

    nodeSel.filter((d) => d.status === "accelerating")
      .append("circle").attr("r", 22).attr("fill", "none").attr("stroke", "#059669").attr("stroke-width", 1).attr("opacity", 0)
      .each(function pulse() {
        d3.select(this).attr("r", 22).attr("opacity", 0.6).transition().duration(2000).attr("r", 32).attr("opacity", 0).on("end", pulse);
      });

    nodeSel.append("text").text((d) => d.name)
      .attr("text-anchor", "middle").attr("dy", 36).attr("font-size", "11px").attr("font-weight", "600").attr("fill", "#202122").attr("pointer-events", "none");

    simulation.on("tick", () => {
      linkSel.attr("d", (d) => {
        const sx = (d.source as GraphNode).x!, sy = (d.source as GraphNode).y!;
        const tx = (d.target as GraphNode).x!, ty = (d.target as GraphNode).y!;
        const dr = Math.sqrt((tx - sx) ** 2 + (ty - sy) ** 2) * 1.5;
        return `M${sx},${sy}A${dr},${dr} 0 0,1 ${tx},${ty}`;
      });
      nodeSel.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    setTimeout(() => {
      svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity.translate(width * 0.05, height * 0.05).scale(0.9));
    }, 1000);
  }, [graphData, dimensions, buildCascade, highlightNode]);

  const activeNodeData = activeNode ? data.nodes.find((n) => n.id === activeNode) : null;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[#eaecf0]">
        <h1 className="text-[22px] font-serif font-normal text-[#202122]">AI Landscape — Live Force Map</h1>
        <p className="text-[13px] text-[#54595d] mt-1">
          Click any domain to see its cause-and-effect chain — where its activity ripples across the landscape. Click connections to see what&apos;s happening between domains.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-3 text-[12px]">
          {Object.entries(directionLabels).map(([dir, label]) => (
            <div key={dir} className="flex items-center gap-1.5">
              <div className="w-4 h-0.5 rounded" style={{ backgroundColor: directionColors[dir] }} />
              <span className="text-[#54595d]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 min-h-[500px]">
        {/* Graph */}
        <div ref={containerRef} className="flex-1 relative bg-[#fafafa]">
          <svg ref={svgRef} width={dimensions.width} height={dimensions.height} className="w-full h-full" />
        </div>

        {/* Right panel — cascade flow or link detail */}
        {(cascade.length > 0 || activeLink) && (
          <div className="w-[360px] min-w-[360px] border-l border-[#eaecf0] bg-white overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-3 bg-[#f8f9fa] border-b border-[#eaecf0]">
              <span className="text-[13px] font-bold text-[#202122]">
                {activeNode ? `${NODE_NAMES[activeNode]} — Ripple Effects` : "Connection Detail"}
              </span>
              <button onClick={() => { setActiveNode(null); setActiveLink(null); setCascade([]); highlightNode(null); }}
                className="text-[#54595d] hover:text-[#202122] text-lg leading-none">×</button>
            </div>

            {/* Cascade flow */}
            {cascade.length > 0 && (
              <div className="p-4">
                {activeNodeData && (
                  <p className="text-[13px] text-[#54595d] mb-4 leading-relaxed">
                    {activeNodeData.currentState.slice(0, 150)}...
                    <a href={`/wiki/nodes/${activeNode}`} className="text-[#0645ad] hover:underline ml-1">Read more →</a>
                  </p>
                )}

                <p className="text-[11px] font-bold text-[#54595d] uppercase tracking-wider mb-3">
                  Cause & effect chain
                </p>

                {cascade.map((step, i) => (
                  <div key={i} className="mb-3">
                    {/* Connector */}
                    <div className="flex items-center gap-2 mb-1.5 ml-2">
                      <div className="w-px h-4 bg-[#c8ccd1]" />
                    </div>
                    <div
                      className="rounded-lg p-3 border-l-3 text-[13px]"
                      style={{
                        borderLeftColor: directionColors[step.direction] || "#94A3B8",
                        backgroundColor: (directionColors[step.direction] || "#94A3B8") + "08",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold" style={{ color: directionColors[step.direction] }}>
                          {step.from}
                        </span>
                        <span className="text-[#72777d] text-[11px]">{directionVerbs[step.direction] || "→"}</span>
                        <span className="font-bold text-[#202122]">{step.to}</span>
                      </div>
                      <p className="text-[12px] font-semibold text-[#202122] mb-1">{step.title}</p>
                      <p className="text-[12px] text-[#54595d] leading-relaxed">{step.mechanism}</p>
                    </div>
                  </div>
                ))}

                {cascade.length === 0 && (
                  <p className="text-[13px] text-[#72777d] italic">No outgoing force chains from this domain.</p>
                )}
              </div>
            )}

            {/* Single link detail */}
            {activeLink && !activeNode && (
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: directionColors[activeLink.direction] + "15", color: directionColors[activeLink.direction] }}>
                    {directionLabels[activeLink.direction]}
                  </span>
                  <span className="text-[11px] text-[#72777d] capitalize">{activeLink.strength}</span>
                </div>
                <div className="flex items-center gap-2 text-[14px] font-bold text-[#202122] mb-3">
                  <span>{NODE_NAMES[activeLink.sourceId]}</span>
                  <span className="text-[#72777d]">→</span>
                  <span>{NODE_NAMES[activeLink.targetId]}</span>
                </div>
                <h3 className="text-[14px] font-bold text-[#202122] mb-2">{activeLink.title}</h3>
                <p className="text-[13px] text-[#202122] leading-[1.6]">{activeLink.mechanism}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
