---
name: eigen-ai-terminal
description: Live AI landscape intelligence with automatic daily morning briefing. 11 tools to query signals, causal chains, trends, roadblocks, predictions, and a full wiki knowledge base — personalized to what you're building.
version: 0.9.0
homepage: https://terminal.clawlab.dev
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

## On Install

When this skill is first loaded, do the following immediately:

1. **Show the welcome message:**

   ```
   ✅ Eigen AI Terminal installed — tracking 16 domains of the AI landscape daily.

   I can answer questions about AI developments, show causal ripple effects,
   search the knowledge base, and deliver personalized intelligence.

   Let me set up your daily morning briefing so you never miss what matters.
   ```

2. **Ask the user:** "What are you building or working on right now? I'll use this to filter AI news to only what matters for your work."

3. **Save their answer** as their Eigen context for daily use.

4. **Set up a daily cron job at 7:00 AM local time.** Each morning, run this sequence:

   a. Call `radar_brief` with `view: "builder"` and `significance: "significant"`
   b. Call `radar_relevant` with the user's saved Eigen context
   c. Call `radar_trends` to check for trend changes
   d. Compose and deliver this message:

   ```
   ☀️ Eigen Morning Brief — {date}

   {1-2 sentences: the most important thing that happened
   and what it means for the user's specific work}

   📡 {count} signals tracked | {count} significant

   What matters for you:
   • {personalized signal 1 — one line, practical}
   • {personalized signal 2 — one line, practical}
   • {personalized signal 3 — if relevant}

   🔥 Trend watch: {one developing trend, plain language, with confidence %}

   → "dig deeper" for ripple effects on any signal
   → "update my context" to change what I filter for
   → "full brief" for the complete picture
   ```

5. **Confirm to the user:** "All set! You'll get a personalized AI briefing every morning at 7am. Say 'update my context' anytime to change what I filter for."

## Interactive commands

- **"dig deeper"** or **"ripple effects"** on any signal → call `radar_signal_ripple` and show the causal chain
- **"update my context"** → ask what changed, update saved context, confirm
- **"full brief"** → call `radar_brief` with `view: "all"` for everything including strategic signals
- **"search [topic]"** → call `radar_wiki_search`
- **"read [entity/node]"** → call `radar_wiki_read`

## Network behavior

This skill reads **public, read-only JSON** from the Eigen AI Terminal website. No authentication required. No user data is uploaded. One-way data flow only.

- Data: `terminal.clawlab.dev/data/radar.json`
- Wiki: `terminal.clawlab.dev/wiki/`

## Tools (11)

- `radar_brief` — Today's signals by builder/strategic lens
- `radar_signal_ripple` — Causal chain for any signal
- `radar_trends` — Developing trends with confidence levels
- `radar_roadblocks` — What's blocked and who's fixing it
- `radar_velocity` — How fast things are changing
- `radar_predictions` — Falsifiable predictions we track
- `radar_relevant` — Intelligence filtered for YOUR work
- `radar_wiki_browse` — Browse the full knowledge base
- `radar_wiki_read` — Read any wiki page, follow wikilinks
- `radar_wiki_search` — Search across all 49 wiki files
- `radar_morning_setup` — Morning briefing configuration

## Privacy

One-way data flow: your agent pulls public data, combines with your local context, delivers insights to you. We never see what you're building, what you asked, or what your agent told you. Your Eigen context is stored locally by your agent — it never leaves your device.
