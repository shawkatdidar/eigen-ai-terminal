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
// ── Wiki Knowledge Base Tools ───────────────────────────────
const WIKI_BASE_URL = process.env.AI_RADAR_WIKI_URL || "https://web-one-wine-82.vercel.app/wiki";
let cachedManifest = null;
let manifestCacheTime = 0;
async function loadManifest() {
    const now = Date.now();
    if (cachedManifest && now - manifestCacheTime < CACHE_TTL)
        return cachedManifest;
    // Try local first
    const localPaths = [
        path.resolve(process.cwd(), "public/wiki/manifest.json"),
        path.resolve(process.cwd(), "../public/wiki/manifest.json"),
        path.resolve(__dirname, "../../public/wiki/manifest.json"),
    ];
    for (const p of localPaths) {
        try {
            cachedManifest = JSON.parse(fs.readFileSync(p, "utf-8"));
            manifestCacheTime = now;
            return cachedManifest;
        }
        catch { /* next */ }
    }
    const res = await fetch(`${WIKI_BASE_URL}/manifest.json`);
    cachedManifest = await res.json();
    manifestCacheTime = now;
    return cachedManifest;
}
async function readWikiFile(filePath) {
    // Try local
    const localPaths = [
        path.resolve(process.cwd(), "public/wiki", filePath),
        path.resolve(process.cwd(), "../public/wiki", filePath),
        path.resolve(__dirname, "../../public/wiki", filePath),
    ];
    for (const p of localPaths) {
        try {
            return fs.readFileSync(p, "utf-8");
        }
        catch { /* next */ }
    }
    // Fetch from URL
    try {
        const res = await fetch(`${WIKI_BASE_URL}/${filePath}`);
        if (res.ok)
            return await res.text();
    }
    catch { /* fall through */ }
    return null;
}
/**
 * TOOL: radar_wiki_browse
 * Browse the knowledge base — see all available files, their connections, and tags.
 */
server.tool("radar_wiki_browse", "Browse the AI Radar knowledge base. Returns all available wiki files organized by type, with their tags and wikilink connections. Use this to discover what information is available, then use radar_wiki_read to read specific files.", {
    category: z.enum(["all", "nodes", "entities", "briefs", "forces", "frameworks"]).default("all")
        .describe("Filter by category: nodes (16 domain trackers), entities (company pages), briefs (daily summaries), forces (dynamics/predictions), frameworks (judgment tools)"),
}, async ({ category }) => {
    const manifest = await loadManifest();
    const categoryFilter = {
        all: () => true,
        nodes: (p) => p.startsWith("nodes/"),
        entities: (p) => p.startsWith("entities/"),
        briefs: (p) => p.startsWith("briefs/"),
        forces: (p) => ["force-dynamics.md", "convergences.md", "bottleneck-map.md", "velocity-trackers.md", "predictions.md", "opportunity-pipeline.md"].includes(p),
        frameworks: (p) => p.startsWith("frameworks/"),
    };
    const filtered = manifest.files.filter((f) => categoryFilter[category](f.path));
    const parts = [
        `# AI Radar Knowledge Base`,
        `${manifest.totalFiles} files | Updated: ${manifest.lastUpdated}`,
        "",
        `Navigation: ${manifest.navigation}`,
        "",
    ];
    // Group by directory
    const groups = {};
    for (const f of filtered) {
        const dir = f.path.includes("/") ? f.path.split("/")[0] : "root";
        if (!groups[dir])
            groups[dir] = [];
        groups[dir].push(f);
    }
    for (const [dir, files] of Object.entries(groups)) {
        const dirDesc = manifest.structure[dir] || dir;
        parts.push(`## ${dir}/ — ${dirDesc}`);
        for (const f of files) {
            const name = f.frontmatter.name || f.path;
            const tags = f.tags.length > 0 ? ` [${f.tags.slice(0, 4).join(", ")}]` : "";
            const links = f.wikilinks.length > 0 ? ` → links to: ${f.wikilinks.slice(0, 5).join(", ")}` : "";
            parts.push(`- **${name}** (${f.path})${tags}${links}`);
        }
        parts.push("");
    }
    parts.push("Use radar_wiki_read with any file path to read the full content.");
    return { content: [{ type: "text", text: parts.join("\n") }] };
});
/**
 * TOOL: radar_wiki_read
 * Read a specific wiki file — full markdown content with wikilinks and structure.
 */
server.tool("radar_wiki_read", "Read a specific file from the AI Radar knowledge base. Returns the full markdown content including frontmatter, wikilinks, and tags. The content uses [[wikilinks]] — you can follow any link by reading that file next. Example paths: 'nodes/ai-agents.md', 'entities/anthropic.md', 'convergences.md', 'briefs/2026-04-04.md'", {
    file_path: z.string().describe("Path to the wiki file, e.g. 'nodes/ai-agents.md' or 'entities/anthropic.md'"),
}, async ({ file_path }) => {
    const content = await readWikiFile(file_path);
    if (!content) {
        // Help the agent find the right file
        const manifest = await loadManifest();
        const suggestions = manifest.files
            .filter((f) => f.path.toLowerCase().includes(file_path.toLowerCase().replace(".md", "")))
            .slice(0, 5);
        const sugText = suggestions.length > 0
            ? `\nDid you mean: ${suggestions.map((s) => s.path).join(", ")}?`
            : "\nUse radar_wiki_browse to see all available files.";
        return { content: [{ type: "text", text: `File not found: ${file_path}${sugText}` }] };
    }
    // Extract wikilinks for navigation hints
    const links = [...(content.match(/\[\[([^\]]+)\]\]/g) || [])].map((l) => l.replace(/\[\[|\]\]/g, ""));
    const uniqueLinks = [...new Set(links)];
    const footer = uniqueLinks.length > 0
        ? `\n\n---\nThis file links to: ${uniqueLinks.join(", ")}\nUse radar_wiki_read to follow any link.`
        : "";
    return { content: [{ type: "text", text: content + footer }] };
});
/**
 * TOOL: radar_wiki_search
 * Search across the entire knowledge base by keyword or tag.
 */
server.tool("radar_wiki_search", "Search the AI Radar knowledge base by keyword or tag. Returns matching files with context snippets. Use this when you're looking for information about a specific topic, company, technology, or concept across the entire wiki.", {
    query: z.string().describe("Search term — a company name, technology, concept, or tag"),
    max_results: z.number().default(10).describe("Maximum results to return"),
}, async ({ query, max_results }) => {
    const manifest = await loadManifest();
    const queryLower = query.toLowerCase();
    // Score files by relevance
    const scored = await Promise.all(manifest.files.map(async (f) => {
        let score = 0;
        // Check frontmatter name/description
        const name = (f.frontmatter.name || "").toLowerCase();
        if (name.includes(queryLower))
            score += 10;
        // Check tags
        if (f.tags.some((t) => t.toLowerCase().includes(queryLower)))
            score += 5;
        // Check wikilinks
        if (f.wikilinks.some((l) => l.toLowerCase().includes(queryLower)))
            score += 3;
        // Check file path
        if (f.path.toLowerCase().includes(queryLower))
            score += 5;
        // If decent match, read content for snippet
        let snippet = "";
        if (score > 0) {
            const content = await readWikiFile(f.path);
            if (content) {
                const lines = content.split("\n");
                for (const line of lines) {
                    if (line.toLowerCase().includes(queryLower)) {
                        snippet = line.trim().slice(0, 200);
                        score += 2;
                        break;
                    }
                }
            }
        }
        return { ...f, score, snippet };
    }));
    const results = scored.filter((r) => r.score > 0).sort((a, b) => b.score - a.score).slice(0, max_results);
    if (results.length === 0) {
        return { content: [{ type: "text", text: `No results for "${query}". Try a broader term or use radar_wiki_browse to see all files.` }] };
    }
    const parts = [
        `# Search: "${query}" — ${results.length} results`,
        "",
        ...results.map((r) => {
            const name = r.frontmatter.name || r.path;
            return [
                `## ${name} (${r.path})`,
                r.snippet ? `> ${r.snippet}` : "",
                r.tags.length ? `Tags: ${r.tags.join(", ")}` : "",
                r.wikilinks.length ? `Links to: ${r.wikilinks.slice(0, 5).join(", ")}` : "",
                "",
            ].filter(Boolean).join("\n");
        }),
        "Use radar_wiki_read with any path to read the full file.",
    ];
    return { content: [{ type: "text", text: parts.join("\n") }] };
});
// ── Start ───────────────────────────────────────────────────
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("AI Radar MCP server running");
}
main().catch(console.error);
