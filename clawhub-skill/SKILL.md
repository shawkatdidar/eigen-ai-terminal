---
name: eigen-ai-terminal
description: Live AI landscape intelligence — signals, causal chains, developing trends, roadblocks, and predictions. Your agent gets daily intelligence across 16 domains and returns only what's relevant to your work. Includes automatic daily morning briefing.
version: 0.7.0
homepage: https://eigenterminal.clawlab.dev
repository: https://github.com/shawkatdidar/eigen-ai-terminal
metadata:
  openclaw:
    requires:
      bins:
        - node
    mcp:
      command: node
      args:
        - index.js
tags:
  - ai
  - intelligence
  - radar
  - signals
  - mcp
  - research
  - daily-briefing
---

# Eigen AI Terminal

Live intelligence on the AI landscape — what's happening, what it causes, and what it means for your work.

## On Install — Set Up Daily Morning Briefing

When this skill is installed, immediately do the following:

1. **Ask the user one question:** "What are you building or working on? I'll use this to filter AI news to only what matters for your work." Save their answer as their **Eigen context**.

2. **Set up a daily cron job at 7:00 AM local time** that does the following every morning:

   a. Call `radar_brief` with `view: "builder"` and `significance: "significant"` to get today's significant builder signals.

   b. Call `radar_relevant` with the user's saved Eigen context to get personalized intelligence.

   c. Call `radar_trends` to check if any developing trend moved closer to happening.

   d. Compose a **short, punchy morning message** (not a wall of text) with this structure:

      ```
      ☀️ Eigen Morning Brief — {date}

      {1-3 sentences: the single most important thing that happened
      and what it means for the user's specific work}

      📡 {count} signals tracked | {count} significant

      What matters for you:
      • {personalized signal 1 — one line, practical}
      • {personalized signal 2 — one line, practical}
      • {personalized signal 3 — if relevant}

      🔥 Trend watch: {one developing trend, plain language, with confidence %}

      → Say "dig deeper" for full ripple effects on any signal
      → Say "update my context" to change what I filter for
      ```

   e. Deliver this message to the user on their active channel.

3. **If the user says "update my context"** at any time, ask them what changed about their work and update their saved Eigen context. The next morning briefing will use the new context.

4. **If the user says "dig deeper" about any signal**, call `radar_signal_ripple` for that signal and present the causal chain: what it's pushing, what trends it feeds, what's blocking it, what we predict.

5. **If the user says "full brief"**, call `radar_brief` with `view: "all"` and present the complete picture including strategic signals.

## Network behavior

This skill reads **public, read-only JSON** from the Eigen AI Terminal website. No authentication required. No user data is uploaded. One-way data flow only.

- Data endpoint: `eigenterminal.clawlab.dev/data/radar.json`
- Wiki endpoint: `eigenterminal.clawlab.dev/wiki/`

## What this does

Eigen AI Terminal tracks 16 domains of the AI landscape daily. Your agent gets access to:

- **Automatic daily morning briefing** — personalized to what you're building, delivered on your active channel
- **Today's signals** — significant and notable developments, filtered by builder or strategic lens
- **Ripple effects** — the causal chain behind each signal: what it's pushing, what trends it feeds, what it's blocked by
- **Developing trends** — when multiple independent signals point at the same outcome
- **Roadblocks** — constraints holding back AI progress across multiple areas
- **Velocity metrics** — how fast key things are changing and whether they're accelerating
- **Predictions** — specific, dated, falsifiable claims we track for accuracy
- **Full knowledge base** — 49 interconnected wiki files with [[wikilinks]] your agent can navigate
- **Relevant intelligence** — describe what you're building, get back only what matters for your work

## Tools (10)

### `radar_brief`
Get today's AI signals. Filter by `view` (builder/strategic/all) and `significance` (significant/notable/all).

### `radar_signal_ripple`
Get the full causal ripple chain for a specific signal — what it pushes, what trends it feeds, what it's blocked by, what we predict.

### `radar_trends`
Get developing trends — when 3+ independent signals converge toward the same outcome.

### `radar_roadblocks`
Get roadblocks holding AI back — what's blocked, who's attacking it, signs of progress.

### `radar_velocity`
Get rate-of-change metrics. Filter by category: cost, capability, capital, adoption.

### `radar_predictions`
Get falsifiable predictions with confidence levels and check dates.

### `radar_relevant`
**The key tool.** Describe what you're building or working on. Returns only the signals, trends, roadblocks, and predictions relevant to your specific context.

### `radar_wiki_browse`
Browse the full knowledge base by category (nodes, entities, briefs, forces, frameworks).

### `radar_wiki_read`
Read any wiki page. Returns full markdown content with [[wikilink]] navigation hints to follow.

### `radar_wiki_search`
Search across all 49 wiki files by keyword or tag.

## Example usage

Ask your agent:
- "What happened in AI today that affects my work?"
- "Are there any new tools or models I should evaluate?"
- "What roadblocks should I be aware of for my MCP-based project?"
- "Show me the ripple effects of the Anthropic/OpenClaw news"
- "Read the Anthropic entity page from Eigen"
- "Search the Eigen wiki for MCP protocol"
- "Update my context" — change what the morning briefing filters for
- "Full brief" — get the complete picture including strategic signals

## Privacy

One-way data flow: your agent pulls our data, combines with your local context, delivers insights to you. We never see what you're building, what you asked, or what your agent told you. Your Eigen context is stored locally by your agent — it never leaves your device.
