/**
 * DATA CONVERTER — Reads the AI Radar markdown wiki and outputs JSON for the website.
 *
 * How it works:
 *   1. Reads markdown files from the wiki (one directory up: ../nodes/, ../briefs/, etc.)
 *   2. Parses the YAML frontmatter (the --- block at the top with metadata)
 *   3. Extracts content sections (## headings, bullet points, tables)
 *   4. Writes structured JSON files to public/data/ for the website to consume
 *
 * Run with: npx tsx scripts/build-data.ts
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// The wiki lives one directory above the web app
const WIKI_ROOT = path.resolve(__dirname, "../../");
const OUTPUT_DIR = path.resolve(__dirname, "../public/data");

// ── Helpers ──────────────────────────────────────────────────

function readMd(filePath: string): { data: Record<string, unknown>; content: string } | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = matter(raw);
    return { data: parsed.data as Record<string, unknown>, content: parsed.content };
  } catch {
    return null;
  }
}

/** Extract text under a ## heading (until the next ## or end of file) */
function extractSection(content: string, heading: string): string {
  const regex = new RegExp(`^## ${heading}\\s*\\n([\\s\\S]*?)(?=^## |$)`, "m");
  const match = content.match(regex);
  return match ? match[1].trim() : "";
}

/** Extract all ## headings and their content */
function extractAllSections(content: string): Record<string, string> {
  const sections: Record<string, string> = {};
  const parts = content.split(/^## /m);
  for (const part of parts.slice(1)) {
    const newline = part.indexOf("\n");
    if (newline === -1) continue;
    const heading = part.slice(0, newline).trim();
    const body = part.slice(newline + 1).trim();
    sections[heading] = body;
  }
  return sections;
}

/** Parse markdown bullet list into array of strings */
function parseBullets(text: string): string[] {
  return text
    .split("\n")
    .filter((line) => line.match(/^[-*]\s/))
    .map((line) => line.replace(/^[-*]\s+/, "").trim());
}

/** Parse the signal bullets from a brief (each starts with **bold title**) */
function parseSignals(text: string): Array<{
  title: string;
  description: string;
  nodes: string[];
  source: string;
}> {
  if (!text || text.includes("*(None")) return [];

  // Split by bullet points that start with **
  const signals: Array<{ title: string; description: string; nodes: string[]; source: string }> =
    [];
  const bulletRegex = /^- \*\*(.+?)\*\*\s*—\s*([\s\S]*?)(?=^- \*\*|$)/gm;
  let match;

  while ((match = bulletRegex.exec(text)) !== null) {
    const title = match[1].trim();
    const body = match[2].trim();

    // Extract node references like [[ai-coding-tools]]
    const nodeMatches = body.match(/\[\[([^\]]+)\]\]/g) || [];
    const nodes = nodeMatches.map((n) => n.replace(/\[\[|\]\]/g, ""));

    // Extract source URL — last markdown link in the body
    const linkMatches = [...body.matchAll(/\[([^\]]*)\]\(([^)]+)\)/g)];
    const source = linkMatches.length > 0 ? linkMatches[linkMatches.length - 1][2] : "";

    // Clean description: remove node tags and source link, take first part before →
    let description = body;
    // Remove the [[node]] tags
    description = description.replace(/\[\[[^\]]+\]\]/g, "").trim();
    // Remove trailing source links
    description = description.replace(/\s*—\s*\[[^\]]*\]\([^)]*\)\s*$/, "").trim();

    signals.push({ title, description, nodes, source });
  }

  return signals;
}

/** Node IDs that belong to each view */
const BUILDER_NODES = new Set([
  "ai-coding-tools",
  "ai-agents",
  "open-source-models",
  "ai-infrastructure",
  "multimodal-ai",
  "edge-on-device-ai",
  "frontier-edges",
  "ai-research-breakthroughs",
]);

const STRATEGIC_NODES = new Set([
  "ai-business-funding",
  "ai-policy-regulation",
  "ai-in-enterprise",
  "compute-hardware",
  "ai-safety-alignment",
]);

// Nodes in both views
const BOTH_NODES = new Set(["frontier-models", "robotics-embodied-ai", "ai-for-science"]);

function getSignalView(nodeIds: string[]): "builder" | "strategic" | "both" {
  // Only count nodes that are SPECIFICALLY builder or strategic (not neutral/both)
  const hasBuilderSpecific = nodeIds.some((n) => BUILDER_NODES.has(n));
  const hasStrategicSpecific = nodeIds.some((n) => STRATEGIC_NODES.has(n));

  if (hasBuilderSpecific && hasStrategicSpecific) return "both";
  if (hasBuilderSpecific) return "builder";
  if (hasStrategicSpecific) return "strategic";
  // If only neutral nodes (frontier-models, robotics, etc), show in both
  return "both";
}

/** Convert internal node IDs to human-readable names */
const NODE_NAMES: Record<string, string> = {
  "frontier-models": "Frontier Models",
  "open-source-models": "Open Source Models",
  "compute-hardware": "Compute & Hardware",
  "ai-agents": "AI Agents",
  "ai-coding-tools": "AI Coding Tools",
  "ai-infrastructure": "AI Infrastructure",
  "ai-safety-alignment": "AI Safety",
  "ai-policy-regulation": "AI Policy & Regulation",
  "ai-business-funding": "AI Business & Funding",
  "multimodal-ai": "Multimodal AI",
  "ai-for-science": "AI for Science",
  "robotics-embodied-ai": "Robotics & Embodied AI",
  "ai-research-breakthroughs": "Research Breakthroughs",
  "edge-on-device-ai": "Edge & On-Device AI",
  "ai-in-enterprise": "AI in Enterprise",
  "frontier-edges": "Frontier Edges",
};

// ── Tag Extraction ─────────────────────────────────────────

const COMPANY_TAGS = [
  "meta", "anthropic", "openai", "google", "microsoft", "amazon", "apple",
  "nvidia", "amd", "intel", "alibaba", "tencent", "bytedance", "mistral",
  "deepseek", "cohere", "xai", "zhipu", "cursor", "github", "perplexity",
  "elevenlabs", "hugging face",
];

const TECH_TAGS = [
  "mcp", "rag", "moe", "ssm", "lora", "rlhf", "transformer", "attention",
  "fine-tuning", "quantization", "distillation", "inference", "training",
];

// Regex patterns for model names — matches things like "GPT-4", "Claude 3.5", "Llama 3", etc.
const MODEL_PATTERNS = [
  /\bgpt-?\d[\w.-]*/gi,
  /\bclaude\s*[\d.]+\w*/gi,
  /\bllama\s*[\d.]+\w*/gi,
  /\bgemini\s*[\d.]+\w*/gi,
  /\bcodex\b/gi,
  /\bsonnet\b/gi,
  /\bopus\b/gi,
  /\bhaiku\b/gi,
  /\bo[134]-?mini\b/gi,
  /\bo[134]\b/gi,
  /\bdeepseek-?[vr][\d.]*/gi,
  /\bqwen[\d.-]*/gi,
  /\bglm-?[\d.]+\w*/gi,
  /\bmistral\b/gi,
  /\bmuse\b/gi,
];

function extractTags(title: string, description: string): string[] {
  const text = (title + " " + description).toLowerCase();
  const tags = new Set<string>();

  // Company tags — use word boundary to avoid false positives (e.g., "intel" in "intelligence")
  for (const company of COMPANY_TAGS) {
    const escaped = company.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`\\b${escaped}\\b`, "i");
    if (re.test(text)) {
      tags.add(company);
    }
  }
  // Special case: "hugging face" also matches "huggingface"
  if (text.includes("huggingface")) tags.add("hugging face");

  // Tech tags
  for (const tech of TECH_TAGS) {
    // Use word boundary matching for short terms to avoid false positives
    const re = new RegExp(`\\b${tech.replace("-", "[- ]?")}\\b`, "i");
    if (re.test(text)) {
      tags.add(tech);
    }
  }

  // Model name patterns
  const originalText = title + " " + description;
  for (const pattern of MODEL_PATTERNS) {
    // Reset lastIndex since we reuse global regexes
    pattern.lastIndex = 0;
    let m;
    while ((m = pattern.exec(originalText)) !== null) {
      tags.add(m[0].toLowerCase().trim());
    }
  }

  return [...tags];
}

// ── Action Line Extraction ─────────────────────────────────

/**
 * Extract a one-sentence "why it matters" from a signal description.
 * Brief descriptions use "→" to separate details from implications.
 * This gives agents a ready-to-use one-liner instead of a dense paragraph.
 */
function extractActionLine(description: string): string {
  // Primary: take text after → (the "why it matters" part)
  const arrowIdx = description.indexOf("→");
  if (arrowIdx !== -1) {
    let after = description.slice(arrowIdx + 1).trim();
    // Strip trailing source links like "  — [Source](url)"
    after = after.replace(/\s*—\s*\[[^\]]*\]\([^)]*\)\s*$/g, "").trim();
    // Take first sentence only
    const sentenceEnd = after.search(/[.!]\s/);
    if (sentenceEnd !== -1) {
      return after.slice(0, sentenceEnd + 1).trim();
    }
    // If it's one sentence already (ends with period), use it
    if (after.endsWith(".") || after.endsWith("!")) return after;
    // Otherwise add period
    return after + ".";
  }

  // Fallback: take the last sentence of the description
  const sentences = description.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (sentences.length > 0) {
    let last = sentences[sentences.length - 1].trim();
    last = last.replace(/\s*—\s*\[[^\]]*\]\([^)]*\)\s*$/g, "").trim();
    return last;
  }
  return "";
}

// ── Parse Force Chains ──────────────────────────────────────

function parseForceChains(content: string): Array<{
  id: string;
  title: string;
  origin: string;
  targets: string[];
  mechanism: string;
  direction: string;
  strength: string;
  lag: string;
  status: string;
  dateIdentified: string;
}> {
  const chains: Array<{
    id: string;
    title: string;
    origin: string;
    targets: string[];
    mechanism: string;
    direction: string;
    strength: string;
    lag: string;
    status: string;
    dateIdentified: string;
  }> = [];

  // Split by ### FC-XXX headings
  const chainBlocks = content.split(/^### (FC-\d+):/m);

  for (let i = 1; i < chainBlocks.length; i += 2) {
    const id = chainBlocks[i];
    const body = chainBlocks[i + 1] || "";
    const titleMatch = body.match(/^([^\n]+)/);
    const title = titleMatch ? titleMatch[1].trim() : "";

    const getField = (name: string): string => {
      const re = new RegExp(`\\*\\*${name}:\\*\\*\\s*(.+?)(?:\\n|$)`, "i");
      const m = body.match(re);
      return m ? m[1].trim() : "";
    };

    const originRaw = getField("Origin signal");
    const targetRaw = getField("Target\\(s\\)");
    const targets = (targetRaw.match(/\[\[([^\]]+)\]\]/g) || []).map((t) =>
      t.replace(/\[\[|\]\]/g, "")
    );

    const mechanismMatch = body.match(
      /\*\*Mechanism:\*\*\s*([\s\S]*?)(?=\*\*Direction|\*\*Strength|---|$)/i
    );
    const mechanism = mechanismMatch ? mechanismMatch[1].trim() : "";

    chains.push({
      id,
      title,
      origin: originRaw,
      targets,
      mechanism,
      direction: getField("Direction").replace(/`/g, ""),
      strength: getField("Strength").replace(/`/g, ""),
      lag: getField("Lag").replace(/`/g, ""),
      status: getField("Status").replace(/`/g, ""),
      dateIdentified: getField("Date identified"),
    });
  }

  return chains;
}

// ── Parse Convergences ──────────────────────────────────────

function parseConvergences(content: string): Array<{
  id: string;
  title: string;
  confidence: string;
  predictedOutcome: string;
  timeline: string;
  forces: Array<{ description: string; origin: string; strength: string }>;
  invalidation: string;
}> {
  const convergences: Array<{
    id: string;
    title: string;
    confidence: string;
    predictedOutcome: string;
    timeline: string;
    forces: Array<{ description: string; origin: string; strength: string }>;
    invalidation: string;
  }> = [];

  const blocks = content.split(/^### (CONV-\d+):/m);

  for (let i = 1; i < blocks.length; i += 2) {
    const id = blocks[i];
    const body = blocks[i + 1] || "";
    const titleMatch = body.match(/^([^\n]+)/);
    const title = titleMatch ? titleMatch[1].trim() : "";

    const getField = (name: string): string => {
      const re = new RegExp(`\\*\\*${name}:\\*\\*\\s*(.+?)(?:\\n|$)`, "i");
      const m = body.match(re);
      return m ? m[1].replace(/`/g, "").trim() : "";
    };

    // Parse contributing forces table
    const forces: Array<{ description: string; origin: string; strength: string }> = [];
    const tableMatch = body.match(
      /\*\*Contributing Forces:\*\*[\s\S]*?\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|\s*\n\|[-\s|]+\|\s*\n([\s\S]*?)(?=\n\n|\*\*What would)/
    );
    if (tableMatch) {
      const rows = tableMatch[1].split("\n").filter((r) => r.includes("|"));
      for (const row of rows) {
        const cells = row
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean);
        if (cells.length >= 4) {
          forces.push({
            description: cells[1].replace(/\[\[|\]\]/g, ""),
            origin: (cells[2].match(/\[\[([^\]]+)\]\]/) || ["", cells[2]])[1],
            strength: cells[4] || "moderate",
          });
        }
      }
    }

    convergences.push({
      id,
      title,
      confidence: getField("Confidence"),
      predictedOutcome: getField("Predicted outcome"),
      timeline: getField("Timeline"),
      forces,
      invalidation: getField("What would invalidate this"),
    });
  }

  return convergences;
}

// ── Parse Bottlenecks ───────────────────────────────────────

function parseBottlenecks(content: string): Array<{
  id: string;
  title: string;
  type: string;
  status: string;
  blocks: string[];
  attackers: number;
  looseningSignals: number;
  summary: string;
}> {
  const bottlenecks: Array<{
    id: string;
    title: string;
    type: string;
    status: string;
    blocks: string[];
    attackers: number;
    looseningSignals: number;
    summary: string;
  }> = [];

  const blocks = content.split(/^### (BN-\d+):/m);

  for (let i = 1; i < blocks.length; i += 2) {
    const id = blocks[i];
    const body = blocks[i + 1] || "";
    const titleMatch = body.match(/^([^\n]+)/);
    const title = titleMatch ? titleMatch[1].trim() : "";

    const getField = (name: string): string => {
      const re = new RegExp("\\*\\*" + name + ":\\*\\*\\s*`?([^`\\n]+)", "i");
      const m = body.match(re);
      return m ? m[1].trim() : "";
    };

    // Count blocked nodes from table
    const blockedNodes = (body.match(/\[\[([^\]]+)\]\]/g) || [])
      .map((n) => n.replace(/\[\[|\]\]/g, ""))
      .filter((v, i, a) => a.indexOf(v) === i);

    // Count attackers (rows in "Who's attacking" table)
    const attackerMatch = body.match(/\*\*Who's attacking.*?\n\|.*?\n\|[-\s|]+\n([\s\S]*?)(?=\n\n|\*\*Signals)/);
    const attackerRows = attackerMatch
      ? attackerMatch[1].split("\n").filter((r) => r.includes("|")).length
      : 0;

    // Count loosening signals
    const looseningMatch = body.match(/\*\*Signals of loosening.*?\n\|.*?\n\|[-\s|]+\n([\s\S]*?)(?=\n\n|---|$)/);
    const looseningRows = looseningMatch
      ? looseningMatch[1].split("\n").filter((r) => r.includes("|")).length
      : 0;

    // Extract the "What it blocks" first row description for summary
    const whatBlocksMatch = body.match(/\*\*What it blocks:\*\*[\s\S]*?\|[^|]+\|([^|]+)\|/);
    const summary = whatBlocksMatch ? whatBlocksMatch[1].trim() : "";

    bottlenecks.push({
      id,
      title,
      type: getField("Type"),
      status: getField("Status"),
      blocks: blockedNodes,
      attackers: attackerRows,
      looseningSignals: looseningRows,
      summary,
    });
  }

  return bottlenecks;
}

// ── Parse Velocity Trackers ─────────────────────────────────

function parseVelocity(content: string): Array<{
  id: string;
  metric: string;
  currentValue: string;
  date: string;
  velocity: string;
  acceleration: string;
  category: string;
}> {
  const trackers: Array<{
    id: string;
    metric: string;
    currentValue: string;
    date: string;
    velocity: string;
    acceleration: string;
    category: string;
  }> = [];

  let currentCategory = "";
  const lines = content.split("\n");

  for (const line of lines) {
    // Track category headings
    const catMatch = line.match(/^### Category: (.+)/);
    if (catMatch) {
      currentCategory = catMatch[1].trim();
      continue;
    }

    // Parse table rows with V-XX IDs
    const rowMatch = line.match(
      /\|\s*(V-\d+)\s*\|\s*([^|]+)\|\s*([^|]*)\|\s*([^|]*)\|\s*[^|]*\|\s*[^|]*\|\s*([^|]*)\|\s*([^|]*)\|/
    );
    if (rowMatch) {
      const [, id, metric, currentValue, date, velocity, acceleration] = rowMatch;
      if (currentValue.trim() && currentValue.trim() !== "") {
        trackers.push({
          id: id.trim(),
          metric: metric.trim(),
          currentValue: currentValue.trim(),
          date: date.trim(),
          velocity: velocity.trim(),
          acceleration: acceleration.trim(),
          category: currentCategory,
        });
      }
    }
  }

  return trackers;
}

// ── Parse Nodes ─────────────────────────────────────────────

function parseNode(filePath: string): {
  id: string;
  name: string;
  status: string;
  currentState: string;
  lastUpdated: string;
} | null {
  const parsed = readMd(filePath);
  if (!parsed) return null;

  const { data, content } = parsed;
  const currentState = extractSection(content, "Current State");

  return {
    id: (data.id as string) || path.basename(filePath, ".md"),
    name: (data.name as string) || path.basename(filePath, ".md"),
    status: (data.status as string) || "unknown",
    currentState: currentState.slice(0, 500) + (currentState.length > 500 ? "..." : ""),
    lastUpdated: (data.last_updated as string) || "",
  };
}

// ── Main Build ──────────────────────────────────────────────

function build() {
  console.log("📡 Eigen AI Terminal — Building data from wiki...\n");

  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // 1. Parse the latest brief
  console.log("  Reading briefs...");
  const briefsDir = path.join(WIKI_ROOT, "briefs");
  const briefFiles = fs
    .readdirSync(briefsDir)
    .filter((f) => f.match(/^\d{4}-\d{2}-\d{2}\.md$/))
    .sort()
    .reverse();

  const latestBriefFile = briefFiles[0];
  const latestBrief = readMd(path.join(briefsDir, latestBriefFile));

  let briefData: Record<string, unknown> = {};
  if (latestBrief) {
    const sections = extractAllSections(latestBrief.content);
    const significant = parseSignals(sections["Significant"] || "");
    const notable = parseSignals(sections["Notable"] || "");
    const breakthrough = parseSignals(sections["Breakthrough"] || "");

    // Add view classification, practical flag, tags, and action line to each signal
    const addViews = (
      signals: Array<{ title: string; description: string; nodes: string[]; source: string }>
    ) =>
      signals.map((s) => {
        const view = getSignalView(s.nodes);
        return {
          ...s,
          nodeNames: s.nodes.map((n) => NODE_NAMES[n] || n),
          view,
          practical: view !== "strategic",
          tags: extractTags(s.title, s.description),
          actionLine: extractActionLine(s.description),
        };
      });

    briefData = {
      date: latestBrief.data.date,
      scanTime: latestBrief.data.scan_time,
      signalsTotal: latestBrief.data.signals_total,
      signalsNotable: latestBrief.data.signals_notable,
      signalsSignificant: latestBrief.data.signals_significant,
      signalsBreakthrough: latestBrief.data.signals_breakthrough,
      nodesUpdated: latestBrief.data.nodes_updated,
      breakthrough: addViews(breakthrough),
      significant: addViews(significant),
      notable: addViews(notable),
    };
    console.log(
      `    Latest brief: ${latestBriefFile} (${significant.length} significant, ${notable.length} notable)`
    );
  }

  // 2. Parse force dynamics
  console.log("  Reading force dynamics...");
  const forceDynamicsFile = path.join(WIKI_ROOT, "system/force-dynamics.md");
  const forceDynamics = readMd(forceDynamicsFile);
  const forceChains = forceDynamics ? parseForceChains(forceDynamics.content) : [];
  console.log(`    ${forceChains.length} active force chains`);

  // 3. Parse convergences
  console.log("  Reading convergences...");
  const convergencesFile = path.join(WIKI_ROOT, "system/convergences.md");
  const convergences = readMd(convergencesFile);
  const convergenceData = convergences ? parseConvergences(convergences.content) : [];
  console.log(`    ${convergenceData.length} active convergences`);

  // 4. Parse bottlenecks
  console.log("  Reading bottlenecks...");
  const bottlenecksFile = path.join(WIKI_ROOT, "system/bottleneck-map.md");
  const bottlenecks = readMd(bottlenecksFile);
  const bottleneckData = bottlenecks ? parseBottlenecks(bottlenecks.content) : [];
  console.log(`    ${bottleneckData.length} active bottlenecks`);

  // 5. Parse velocity trackers
  console.log("  Reading velocity trackers...");
  const velocityFile = path.join(WIKI_ROOT, "system/velocity-trackers.md");
  const velocity = readMd(velocityFile);
  const velocityData = velocity ? parseVelocity(velocity.content) : [];
  console.log(`    ${velocityData.length} tracked metrics`);

  // 6. Parse predictions
  console.log("  Reading predictions...");
  const predictionsFile = path.join(WIKI_ROOT, "system/predictions.md");
  const predictions = readMd(predictionsFile);
  const predictionsContent = predictions ? predictions.content : "";
  // Extract prediction blocks
  const predBlocks = predictionsContent.split(/^### (PRED-\d+):/m);
  const predictionData: Array<{
    id: string;
    title: string;
    confidence: string;
    checkDate: string;
    basedOn: string;
  }> = [];
  for (let i = 1; i < predBlocks.length; i += 2) {
    const id = predBlocks[i];
    const body = predBlocks[i + 1] || "";
    const titleMatch = body.match(/^([^\n]+)/);
    const title = titleMatch ? titleMatch[1].trim() : "";
    const getField = (name: string): string => {
      const re = new RegExp(`\\*\\*${name}:\\*\\*\\s*(.+?)(?:\\n|$)`, "i");
      const m = body.match(re);
      return m ? m[1].replace(/`/g, "").trim() : "";
    };
    predictionData.push({
      id,
      title,
      confidence: getField("Confidence"),
      checkDate: getField("Check date"),
      basedOn: getField("Based on"),
    });
  }
  console.log(`    ${predictionData.length} active predictions`);

  // 7. Parse nodes
  console.log("  Reading nodes...");
  const nodesDir = path.join(WIKI_ROOT, "nodes");
  const nodeFiles = fs.readdirSync(nodesDir).filter((f) => f.endsWith(".md"));
  const nodes = nodeFiles.map((f) => parseNode(path.join(nodesDir, f))).filter(Boolean);
  console.log(`    ${nodes.length} nodes`);

  // 8. Build ripple connections — link each signal to its causal chain
  console.log("  Building ripple connections...");

  const activeChains = forceChains.filter((fc) => fc.status === "active");

  /**
   * For each signal, find connected force chains, convergences, bottlenecks, and predictions.
   * We match by: (a) shared node overlap, (b) keyword overlap in titles/mechanisms.
   */
  function buildRipples(
    signals: Array<{ title: string; description: string; nodes: string[] }>
  ): Record<
    number,
    {
      chains: Array<{ title: string; mechanism: string; direction: string; strength: string; targets: string[] }>;
      convergences: Array<{ title: string; confidence: string; predictedOutcome: string; timeline: string }>;
      bottlenecks: Array<{ title: string; status: string; summary: string }>;
      predictions: Array<{ title: string; confidence: string; checkDate: string }>;
    }
  > {
    const ripples: Record<number, {
      chains: Array<{ title: string; mechanism: string; direction: string; strength: string; targets: string[] }>;
      convergences: Array<{ title: string; confidence: string; predictedOutcome: string; timeline: string }>;
      bottlenecks: Array<{ title: string; status: string; summary: string }>;
      predictions: Array<{ title: string; confidence: string; checkDate: string }>;
    }> = {};

    // Extract keywords from a string (lowercase, 4+ chars, no common words)
    const stopWords = new Set(["that", "this", "with", "from", "have", "been", "will", "than", "more", "also", "into", "their", "about", "would", "could", "most", "some", "other", "what", "when", "which", "only", "first", "just", "over"]);
    function keywords(text: string): Set<string> {
      return new Set(
        text.toLowerCase()
          .replace(/[^a-z0-9\s]/g, " ")
          .split(/\s+/)
          .filter((w) => w.length >= 4 && !stopWords.has(w))
      );
    }

    function overlap(a: Set<string>, b: Set<string>): number {
      let count = 0;
      for (const word of a) if (b.has(word)) count++;
      return count;
    }

    signals.forEach((signal, idx) => {
      const sigNodes = new Set(signal.nodes);
      const sigKeywords = keywords(signal.title + " " + signal.description);

      // Match force chains: share a node AND have keyword overlap
      const matchedChains = activeChains.filter((fc) => {
        const chainNodes = new Set([
          ...fc.targets,
          // Extract origin node from the origin field
          ...(fc.origin.match(/\[\[([^\]]+)\]\]/g) || []).map((n) => n.replace(/\[\[|\]\]/g, "")),
        ]);
        const nodeOverlap = [...sigNodes].some((n) => chainNodes.has(n));
        const kwOverlap = overlap(sigKeywords, keywords(fc.title + " " + fc.mechanism));
        return nodeOverlap && kwOverlap >= 2;
      });

      // Match convergences: any of its forces overlap with the signal's nodes
      const matchedConvergences = convergenceData.filter((conv) => {
        const convNodes = new Set(conv.forces.map((f) => f.origin));
        const nodeOverlap = [...sigNodes].some((n) => convNodes.has(n));
        const kwOverlap = overlap(sigKeywords, keywords(conv.title + " " + conv.predictedOutcome));
        return nodeOverlap || kwOverlap >= 2;
      });

      // Match bottlenecks: blocks a node that the signal touches
      const matchedBottlenecks = bottleneckData.filter((bn) => {
        return bn.blocks.some((blocked) => sigNodes.has(blocked));
      });

      // Match predictions: based on matched convergences, or keyword overlap
      const matchedPredictions = predictionData.filter((pred) => {
        const kwOverlap = overlap(sigKeywords, keywords(pred.title + " " + pred.basedOn));
        return kwOverlap >= 2;
      });

      // Only store if there's at least one connection
      if (matchedChains.length + matchedConvergences.length + matchedBottlenecks.length + matchedPredictions.length > 0) {
        ripples[idx] = {
          chains: matchedChains.slice(0, 3).map((fc) => ({
            title: fc.title,
            mechanism: fc.mechanism.slice(0, 300) + (fc.mechanism.length > 300 ? "..." : ""),
            direction: fc.direction,
            strength: fc.strength,
            targets: fc.targets.map((t) => NODE_NAMES[t] || t),
          })),
          convergences: matchedConvergences.slice(0, 2).map((c) => ({
            title: c.title,
            confidence: c.confidence,
            predictedOutcome: c.predictedOutcome.slice(0, 200) + (c.predictedOutcome.length > 200 ? "..." : ""),
            timeline: c.timeline,
          })),
          bottlenecks: matchedBottlenecks.slice(0, 2).map((bn) => ({
            title: bn.title,
            status: bn.status,
            summary: bn.summary,
          })),
          predictions: matchedPredictions.slice(0, 2).map((p) => ({
            title: p.title,
            confidence: p.confidence,
            checkDate: p.checkDate,
          })),
        };
      }
    });

    return ripples;
  }

  // Build ripples for both significant and notable signals
  const allSignals = [
    ...((briefData as Record<string, unknown>).significant as Array<{ title: string; description: string; nodes: string[] }> || []),
    ...((briefData as Record<string, unknown>).notable as Array<{ title: string; description: string; nodes: string[] }> || []),
  ];
  const rippleMap = buildRipples(allSignals);
  const sigCount = ((briefData as Record<string, unknown>).significant as unknown[])?.length || 0;

  // Split ripples back into significant and notable indices
  const significantRipples: Record<number, unknown> = {};
  const notableRipples: Record<number, unknown> = {};
  for (const [idxStr, ripple] of Object.entries(rippleMap)) {
    const idx = parseInt(idxStr);
    if (idx < sigCount) {
      significantRipples[idx] = ripple;
    } else {
      notableRipples[idx - sigCount] = ripple;
    }
  }

  let connectedSignals = 0;
  for (const key of Object.keys(rippleMap)) connectedSignals++;
  console.log(`    ${connectedSignals} signals with ripple connections`);

  // 9. Build entity index
  console.log("  Building entity index...");
  const entitiesDir = path.join(WIKI_ROOT, "entities");
  const entityIndex: Record<string, string> = {};
  if (fs.existsSync(entitiesDir)) {
    const entityFiles = fs.readdirSync(entitiesDir).filter((f) => f.endsWith(".md") && f !== "index.md");
    for (const f of entityFiles) {
      const entityPath = path.join(entitiesDir, f);
      const parsed = readMd(entityPath);
      const name = parsed?.data?.name as string || f.replace(".md", "").split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      entityIndex[name] = `entities/${f}`;
    }
    console.log(`    ${Object.keys(entityIndex).length} entities indexed`);
  }

  // 10. Build history.json — last 7 briefs' signals
  console.log("  Building signal history...");
  const historyBriefs = briefFiles.slice(0, 7);
  const history: Array<{
    date: string;
    signals: Array<{
      title: string;
      description: string;
      significance: string;
      domains: string[];
      source: string;
      practical: boolean;
      tags: string[];
      actionLine: string;
    }>;
  }> = [];

  for (const briefFile of historyBriefs) {
    const brief = readMd(path.join(briefsDir, briefFile));
    if (!brief) continue;

    const rawDate = brief.data.date;
    const date = rawDate instanceof Date ? rawDate.toISOString().slice(0, 10) : String(rawDate || briefFile.replace(".md", ""));
    const sections = extractAllSections(brief.content);
    const breakthroughSignals = parseSignals(sections["Breakthrough"] || "");
    const significantSignals = parseSignals(sections["Significant"] || "");
    const notableSignals = parseSignals(sections["Notable"] || "");

    const toHistorySignal = (
      s: { title: string; description: string; nodes: string[]; source: string },
      significance: string
    ) => {
      const view = getSignalView(s.nodes);
      return {
        title: s.title,
        description: s.description,
        significance,
        domains: s.nodes.map((n) => NODE_NAMES[n] || n),
        source: s.source,
        practical: view !== "strategic",
        tags: extractTags(s.title, s.description),
        actionLine: extractActionLine(s.description),
      };
    };

    const signals = [
      ...breakthroughSignals.map((s) => toHistorySignal(s, "breakthrough")),
      ...significantSignals.map((s) => toHistorySignal(s, "significant")),
      ...notableSignals.map((s) => toHistorySignal(s, "notable")),
    ];

    history.push({ date, signals });
  }
  console.log(`    ${history.length} briefs with ${history.reduce((sum, h) => sum + h.signals.length, 0)} total signals`);

  // 11. Write output files
  console.log("\n  Writing JSON...");

  const writeJson = (filename: string, data: unknown) => {
    const filePath = path.join(OUTPUT_DIR, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`    ✓ ${filename}`);
  };

  writeJson("radar.json", {
    lastUpdated: new Date().toISOString(),
    brief: briefData,
    forceChains: activeChains,
    convergences: convergenceData,
    bottlenecks: bottleneckData,
    velocity: velocityData,
    predictions: predictionData,
    nodes,
    nodeNames: NODE_NAMES,
    entityIndex,
    ripples: {
      significant: significantRipples,
      notable: notableRipples,
    },
  });

  writeJson("history.json", history);

  // 11b. Auto-generate alert.json if there are breakthrough signals
  const breakthroughSignals = (briefData as Record<string, unknown>).breakthrough as Array<{ title: string; description: string; nodes: string[] }> || [];
  if (breakthroughSignals.length > 0) {
    const lead = breakthroughSignals[0];
    const alertData = {
      active: true,
      since: new Date().toISOString(),
      title: lead.title,
      summary: lead.description.slice(0, 300),
      domains: lead.nodes.map((n: string) => NODE_NAMES[n] || n),
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    };
    writeJson("alert.json", alertData);
    console.log(`    ✓ alert.json (breakthrough: ${lead.title.slice(0, 50)})`);
  } else {
    // Clear any stale alert
    const alertPath = path.join(OUTPUT_DIR, "alert.json");
    if (fs.existsSync(alertPath)) {
      const existing = JSON.parse(fs.readFileSync(alertPath, "utf-8"));
      if (existing.active && new Date(existing.expires) < new Date()) {
        fs.writeFileSync(alertPath, JSON.stringify({ active: false }, null, 2));
        console.log("    ✓ alert.json (expired alert cleared)");
      }
    }
  }

  // 12. Publish wiki knowledge base — copy output files for agent consumption
  console.log("\n  Publishing wiki knowledge base...");

  const WIKI_OUTPUT = path.join(OUTPUT_DIR, "../wiki");
  fs.mkdirSync(WIKI_OUTPUT, { recursive: true });

  // Files/folders to INCLUDE (the intelligence output)
  const wikiIncludes: Array<{ src: string; dest: string }> = [
    // Nodes — the 16 domain trackers
    ...fs.readdirSync(path.join(WIKI_ROOT, "nodes"))
      .filter((f) => f.endsWith(".md"))
      .map((f) => ({ src: `nodes/${f}`, dest: `nodes/${f}` })),
    // Entities — company/model pages
    ...fs.readdirSync(path.join(WIKI_ROOT, "entities"))
      .filter((f) => f.endsWith(".md"))
      .map((f) => ({ src: `entities/${f}`, dest: `entities/${f}` })),
    // Briefs — last 7 daily briefs
    ...fs.readdirSync(path.join(WIKI_ROOT, "briefs"))
      .filter((f) => f.match(/^\d{4}-\d{2}-\d{2}\.md$/))
      .sort()
      .reverse()
      .slice(0, 7)
      .map((f) => ({ src: `briefs/${f}`, dest: `briefs/${f}` })),
    // Force dynamics files
    { src: "system/force-dynamics.md", dest: "force-dynamics.md" },
    { src: "system/convergences.md", dest: "convergences.md" },
    { src: "system/bottleneck-map.md", dest: "bottleneck-map.md" },
    { src: "system/velocity-trackers.md", dest: "velocity-trackers.md" },
    { src: "system/predictions.md", dest: "predictions.md" },
    { src: "system/opportunity-pipeline.md", dest: "opportunity-pipeline.md" },
    // Resources
    ...fs.readdirSync(path.join(WIKI_ROOT, "resources/frameworks"))
      .filter((f) => f.endsWith(".md"))
      .map((f) => ({ src: `resources/frameworks/${f}`, dest: `frameworks/${f}` })),
    // Top-level index files
    { src: "radar.md", dest: "radar.md" },
    { src: "index.md", dest: "index.md" },
    { src: "watchlist.md", dest: "watchlist.md" },
  ];

  // Copy files and build manifest
  interface ManifestEntry {
    path: string;
    frontmatter: Record<string, unknown>;
    wikilinks: string[];
    tags: string[];
    size: number;
  }
  const manifest: ManifestEntry[] = [];

  for (const { src, dest } of wikiIncludes) {
    const srcPath = path.join(WIKI_ROOT, src);
    if (!fs.existsSync(srcPath)) continue;

    const destPath = path.join(WIKI_OUTPUT, dest);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    const raw = fs.readFileSync(srcPath, "utf-8");
    fs.writeFileSync(destPath, raw);

    // Parse for manifest
    const parsed = matter(raw);
    const wikilinks = [...(raw.match(/\[\[([^\]]+)\]\]/g) || [])].map((l) =>
      l.replace(/\[\[|\]\]/g, "")
    );
    const uniqueLinks = [...new Set(wikilinks)];
    const tags = (parsed.data.tags as string[]) || [];

    manifest.push({
      path: dest,
      frontmatter: parsed.data as Record<string, unknown>,
      wikilinks: uniqueLinks,
      tags,
      size: raw.length,
    });
  }

  // Write manifest
  const manifestPath = path.join(WIKI_OUTPUT, "manifest.json");
  fs.writeFileSync(
    manifestPath,
    JSON.stringify(
      {
        description: "Eigen AI Terminal Knowledge Base — the full wiki of AI landscape intelligence",
        lastUpdated: new Date().toISOString(),
        totalFiles: manifest.length,
        structure: {
          nodes: "16 domain trackers covering the AI landscape",
          entities: "Company and model pages with timelines and connections",
          briefs: "Daily intelligence summaries (last 7 days)",
          "force-dynamics": "Causal chains between domains",
          convergences: "Multiple signals pointing at the same outcome",
          "bottleneck-map": "Constraints blocking progress",
          "velocity-trackers": "Rate-of-change metrics",
          predictions: "Falsifiable predictions with check dates",
          frameworks: "Judgment frameworks for evaluating AI developments",
        },
        navigation: "Files use [[wikilinks]] for cross-references and #tags for categorization. Follow wikilinks to navigate the knowledge graph.",
        files: manifest,
      },
      null,
      2
    )
  );

  console.log(`    ✓ ${manifest.length} wiki files published to public/wiki/`);
  console.log(`    ✓ manifest.json created`);

  console.log("\n✅ Done! Data written to public/data/ and public/wiki/\n");
}

build();
