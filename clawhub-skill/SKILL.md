---
name: eigen-ai-terminal
description: Live AI landscape intelligence — signals, causal chains, developing trends, roadblocks, and predictions. Your agent gets daily intelligence across 16 domains and returns only what's relevant to your work.
version: 0.4.0
homepage: https://web-one-wine-82.vercel.app
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
---

# Eigen AI Terminal

Live intelligence on the AI landscape — what's happening, what it causes, and what it means for your work.

## Network behavior

This skill reads **public, read-only JSON** from the Eigen AI Terminal website. No authentication required. No user data is uploaded. One-way data flow only.

- Data endpoint: `web-one-wine-82.vercel.app/data/radar.json`
- Wiki endpoint: `web-one-wine-82.vercel.app/wiki/`

## What this does

Eigen AI Terminal tracks 16 domains of the AI landscape daily. Your agent gets access to:

- **Today's signals** — significant and notable developments, filtered by builder (tools/tech) or strategic (funding/policy) lens
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
**The key tool.** Describe what you're building or working on. Returns only the signals, trends, roadblocks, and predictions relevant to your specific context. Your agent combines this with your local context — your codebase, notes, and work — to deliver personalized intelligence. We never see your data.

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

## Privacy

One-way data flow: your agent pulls our data, combines with your local context, delivers insights to you. We never see what you're building, what you asked, or what your agent told you.
