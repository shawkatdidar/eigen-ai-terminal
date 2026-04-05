#!/usr/bin/env node
/**
 * AI RADAR MCP SERVER
 *
 * This is the "plug" that lets any AI agent query the radar.
 * It speaks MCP (Model Context Protocol) — the standard way agents
 * connect to external tools.
 *
 * When an agent calls one of our tools, this server:
 *   1. Reads the radar data (from a URL or local file)
 *   2. Processes the query
 *   3. Returns structured results the agent can use
 *
 * Install: npx ai-radar-mcp (runs this server)
 * Or add to Claude Code config as an MCP server.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let cachedData = null;
let cacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
async function loadData() {
    const now = Date.now();
    if (cachedData && now - cacheTime < CACHE_TTL)
        return cachedData;
    // Try local file first (for development / when web app is co-located)
    const localPaths = [
        path.resolve(process.cwd(), "public/data/radar.json"),
        path.resolve(process.cwd(), "../public/data/radar.json"),
        path.resolve(__dirname, "../../public/data/radar.json"),
    ];
    for (const p of localPaths) {
        try {
            const raw = fs.readFileSync(p, "utf-8");
            cachedData = JSON.parse(raw);
            cacheTime = now;
            return cachedData;
        }
        catch {
            // Try next path
        }
    }
    // Fall back to hosted URL (once deployed)
    const DATA_URL = process.env.AI_RADAR_DATA_URL || "https://eigen-ai-terminal.vercel.app/data/radar.json";
    try {
        const res = await fetch(DATA_URL);
        cachedData = await res.json();
        cacheTime = now;
        return cachedData;
    }
    catch {
        throw new Error("Could not load radar data from local file or URL");
    }
}
// ── Helpers ─────────────────────────────────────────────────
function humanizeBottleneck(title) {
    const lower = title.toLowerCase();
    if (lower.includes("agent reliability"))
        return "AI agents aren't reliable enough yet";
    if (lower.includes("mcp") || lower.includes("protocol"))
        return "Tool-connection protocol has design gaps";
    if (lower.includes("datacenter") || lower.includes("power"))
        return "Not enough datacenters being built";
    return title;
}
/** Simple keyword relevance matching */
function relevanceScore(text, context) {
    const contextWords = new Set(context.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((w) => w.length >= 3));
    const textWords = text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/);
    let score = 0;
    for (const word of textWords) {
        if (contextWords.has(word))
            score++;
    }
    return score;
}
// ── MCP Server ──────────────────────────────────────────────
const server = new McpServer({
    name: "ai-radar",
    version: "0.1.0",
});
/**
 * TOOL: radar_brief
 * Get today's signals — the daily intelligence summary.
 */
server.tool("radar_brief", "Get today's AI radar signals. Returns significant and notable developments across the AI landscape. Use 'view' to filter: 'builder' for tools/models/tech, 'strategic' for funding/policy/market, 'all' for everything.", {
    view: z.enum(["builder", "strategic", "all"]).default("all").describe("Filter lens: builder (practical/tech), strategic (business/policy), or all"),
    significance: z.enum(["significant", "notable", "all"]).default("all").describe("Filter by significance level"),
}, async ({ view, significance }) => {
    const data = await loadData();
    const filterByView = (items) => view === "all" ? items : items.filter((s) => s.view === view || s.view === "both");
    let signals = [];
    if (significance === "all" || significance === "significant") {
        signals.push(...filterByView(data.brief.significant).map((s) => ({ ...s, _severity: "significant" })));
    }
    if (significance === "all" || significance === "notable") {
        signals.push(...filterByView(data.brief.notable).map((s) => ({ ...s, _severity: "notable" })));
    }
    const text = [
        `# AI Radar Brief — ${data.brief.date}`,
        `${data.brief.signalsTotal} signals tracked | ${data.brief.signalsSignificant} significant`,
        "",
        ...signals.map((s) => [
            `## ${s.title}`,
            s.description,
            `Areas: ${s.nodeNames.join(", ")}`,
            "",
        ].join("\n")),
    ].join("\n");
    return { content: [{ type: "text", text }] };
});
/**
 * TOOL: radar_signal_ripple
 * Get the full ripple effects chain for a specific signal.
 */
server.tool("radar_signal_ripple", "Get the causal ripple effects of a specific signal — what it's pushing, what trends it feeds, what it's blocked by, and what we predict. Pass the signal number (0-indexed from today's significant signals).", {
    signal_index: z.number().describe("Signal index (0 = first significant signal)"),
}, async ({ signal_index }) => {
    const data = await loadData();
    const sig = data.brief.significant[signal_index];
    if (!sig) {
        return { content: [{ type: "text", text: `No signal at index ${signal_index}. Today has ${data.brief.significant.length} significant signals (0-${data.brief.significant.length - 1}).` }] };
    }
    const ripple = data.ripples?.significant?.[signal_index];
    const parts = [`# ${sig.title}`, sig.description, ""];
    if (ripple) {
        if (ripple.chains?.length) {
            parts.push("## What this is pushing");
            for (const c of ripple.chains) {
                parts.push(`- **${c.title}** (${c.direction}): ${c.mechanism}`);
            }
            parts.push("");
        }
        if (ripple.convergences?.length) {
            parts.push("## Developing trends this feeds into");
            for (const c of ripple.convergences) {
                parts.push(`- **${c.title}** (${c.confidence}): ${c.predictedOutcome}`);
            }
            parts.push("");
        }
        if (ripple.bottlenecks?.length) {
            parts.push("## Roadblocks");
            for (const b of ripple.bottlenecks) {
                parts.push(`- **${humanizeBottleneck(b.title)}** [${b.status}]: ${b.summary}`);
            }
            parts.push("");
        }
        if (ripple.predictions?.length) {
            parts.push("## Predictions");
            for (const p of ripple.predictions) {
                parts.push(`- **${p.title}** (${p.confidence}, check by ${p.checkDate})`);
            }
        }
    }
    else {
        parts.push("No ripple connections mapped for this signal.");
    }
    return { content: [{ type: "text", text: parts.join("\n") }] };
});
/**
 * TOOL: radar_trends
 * Get developing trends (convergences).
 */
server.tool("radar_trends", "Get developing trends in the AI landscape — when multiple independent signals point at the same outcome. Returns trends with confidence levels, timelines, and contributing forces.", {}, async () => {
    const data = await loadData();
    const text = [
        "# Developing Trends",
        "",
        ...data.convergences.map((c) => [
            `## ${c.title}`,
            `Confidence: ${c.confidence} | Timeline: ${c.timeline || "unknown"}`,
            c.predictedOutcome,
            `Contributing forces: ${c.forces.map((f) => f.description).join("; ")}`,
            "",
        ].join("\n")),
    ].join("\n");
    return { content: [{ type: "text", text }] };
});
/**
 * TOOL: radar_roadblocks
 * Get bottlenecks constraining AI progress.
 */
server.tool("radar_roadblocks", "Get roadblocks holding back AI progress — constraints blocking multiple areas simultaneously. Shows what's blocked, who's attacking it, and signs of progress.", {}, async () => {
    const data = await loadData();
    const text = [
        "# Roadblocks Holding AI Back",
        "",
        ...data.bottlenecks.map((b) => [
            `## ${humanizeBottleneck(b.title)}`,
            `Status: ${b.status}`,
            b.summary,
            `Blocks: ${b.blocks.join(", ")} | ${b.attackers} teams attacking | ${b.looseningSignals} signs of progress`,
            "",
        ].join("\n")),
    ].join("\n");
    return { content: [{ type: "text", text }] };
});
/**
 * TOOL: radar_velocity
 * Get rate-of-change metrics.
 */
server.tool("radar_velocity", "Get velocity metrics — how fast key things are changing in AI. Shows current values, rate of change, and whether they're accelerating or decelerating.", {
    category: z.enum(["all", "cost", "capability", "capital", "adoption"]).default("all").describe("Filter by category"),
}, async ({ category }) => {
    const data = await loadData();
    const catMap = { cost: "Cost & Economics", capability: "Capability", capital: "Capital", adoption: "Adoption" };
    const filtered = category === "all" ? data.velocity : data.velocity.filter((v) => v.category === catMap[category]);
    const text = [
        "# How Fast Things Are Moving",
        "",
        ...filtered.map((v) => `- **${v.metric}**: ${v.currentValue} | ${v.velocity} | ${v.acceleration}`),
    ].join("\n");
    return { content: [{ type: "text", text }] };
});
/**
 * TOOL: radar_predictions
 * Get falsifiable predictions.
 */
server.tool("radar_predictions", "Get AI Radar's predictions — specific, dated, falsifiable claims with confidence levels and check dates. We track whether each one comes true.", {}, async () => {
    const data = await loadData();
    const text = [
        "# Predictions We're Tracking",
        "These are analytical predictions, not investment advice.",
        "",
        ...data.predictions.map((p) => `- **${p.title}** — ${p.confidence} confidence, check by ${p.checkDate}`),
    ].join("\n");
    return { content: [{ type: "text", text }] };
});
/**
 * TOOL: radar_relevant
 * THE KEY TOOL — given a description of what someone is working on,
 * returns only the signals, trends, and roadblocks relevant to them.
 * The agent combines this with the user's local context.
 */
server.tool("radar_relevant", "Get radar intelligence relevant to a specific context. Describe what you're building or working on, and this returns only the signals, trends, roadblocks, and predictions that matter for that work. This is the primary tool for personalized intelligence.", {
    context: z.string().describe("Description of what the user is building or working on — the more specific, the better the filtering"),
    max_results: z.number().default(10).describe("Maximum number of results to return"),
}, async ({ context, max_results }) => {
    const data = await loadData();
    // Score all signals by relevance to the context
    const scoredSignals = [
        ...data.brief.significant.map((s, i) => ({ ...s, severity: "significant", index: i, score: relevanceScore(s.title + " " + s.description + " " + s.nodeNames.join(" "), context) })),
        ...data.brief.notable.map((s, i) => ({ ...s, severity: "notable", index: i, score: relevanceScore(s.title + " " + s.description + " " + s.nodeNames.join(" "), context) })),
    ].sort((a, b) => b.score - a.score).filter((s) => s.score > 0).slice(0, max_results);
    // Score convergences
    const scoredTrends = data.convergences
        .map((c) => ({ ...c, score: relevanceScore(c.title + " " + c.predictedOutcome, context) }))
        .filter((c) => c.score > 0)
        .sort((a, b) => b.score - a.score);
    // Score bottlenecks
    const scoredBlocks = data.bottlenecks
        .map((b) => ({ ...b, score: relevanceScore(b.title + " " + b.summary + " " + b.blocks.join(" "), context) }))
        .filter((b) => b.score > 0)
        .sort((a, b) => b.score - a.score);
    // Score predictions
    const scoredPreds = data.predictions
        .map((p) => ({ ...p, score: relevanceScore(p.title, context) }))
        .filter((p) => p.score > 0)
        .sort((a, b) => b.score - a.score);
    const parts = [
        `# Radar Intelligence for: ${context}`,
        `Date: ${data.brief.date}`,
        "",
    ];
    if (scoredSignals.length > 0) {
        parts.push("## Relevant Signals");
        for (const s of scoredSignals) {
            parts.push(`- [${s.severity}] **${s.title}**: ${s.description.slice(0, 300)}`);
            // Include ripple effects for significant signals
            if (s.severity === "significant") {
                const ripple = data.ripples?.significant?.[s.index];
                if (ripple?.chains?.length) {
                    parts.push(`  → Pushing: ${ripple.chains.map((c) => c.title).join(", ")}`);
                }
            }
        }
        parts.push("");
    }
    if (scoredTrends.length > 0) {
        parts.push("## Relevant Trends");
        for (const t of scoredTrends) {
            parts.push(`- **${t.title}** (${t.confidence}): ${t.predictedOutcome}`);
        }
        parts.push("");
    }
    if (scoredBlocks.length > 0) {
        parts.push("## Relevant Roadblocks");
        for (const b of scoredBlocks) {
            parts.push(`- **${humanizeBottleneck(b.title)}** [${b.status}]: ${b.summary}`);
        }
        parts.push("");
    }
    if (scoredPreds.length > 0) {
        parts.push("## Relevant Predictions");
        for (const p of scoredPreds) {
            parts.push(`- **${p.title}** — ${p.confidence} confidence`);
        }
    }
    if (scoredSignals.length === 0 && scoredTrends.length === 0 && scoredBlocks.length === 0) {
        parts.push("No strongly relevant signals found for this context today. Try broadening your description or check back tomorrow.");
    }
    return { content: [{ type: "text", text: parts.join("\n") }] };
});
// ── Start ───────────────────────────────────────────────────
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("AI Radar MCP server running");
}
main().catch(console.error);
