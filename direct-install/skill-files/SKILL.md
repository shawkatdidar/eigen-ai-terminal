---
name: eigen-ai-terminal
description: Live AI landscape intelligence with automatic daily morning briefing. 12 tools to query signals, causal chains, trends, roadblocks, predictions, and a full wiki knowledge base — personalized to what you're building.
version: 0.10.0
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
   ```

2. After it installs, set up a daily cron job at 7:00 AM that does this every morning:

   - Call `radar_brief` with view "builder" and significance "significant" to get today's top signals
   - Call `radar_relevant` with what you know about my work to get personalized intelligence
   - Call `radar_trends` to check if any major trend shifted overnight
   - Call `eigen_whats_new` to check for new Eigen features and tips
   - Send me a SHORT morning message (not a wall of text) with this format:

     ```
     ☀️ Good morning — here's what matters in AI today:

     [One sentence: the single most important development and why it affects my work]

     What you should know:
     • [Signal that directly impacts what I'm building — one line]
     • [New tool, model, or capability I could use — one line]
     • [Only include a third if it's genuinely relevant]

     Trend to watch: [One developing trend in plain language with confidence %]

     💡 [One tip or new feature from Eigen, if there's something fresh this week — skip if nothing new]

     Say "dig deeper on [topic]" or "full brief" for more.
     ```

   IMPORTANT rules for the morning brief:
   - Maximum 3 bullet points. Less is more. Only include what I can ACT on today.
   - Every bullet must pass the test: "Can I do something with this information today?"
   - Never include funding rounds, IPO news, policy changes, or executive shuffles unless they DIRECTLY change a tool or API I use.
   - If nothing significant happened that affects my work, say so in one line. Don't pad with generic AI news.
   - Write like a sharp colleague giving me a 30-second update, not a newsletter.
   - The Eigen tip at the end should be casual and brief — one line max. If `eigen_whats_new` returned nothing new, skip it entirely.

3. Now ask me: "What are you building right now? I'll filter AI news to only what matters for your work — and deliver it every morning at 7am."

4. **Save their answer** as their Eigen context for daily use.

5. **Confirm:** "All set! You'll get a personalized AI briefing every morning at 7am. Say 'update my context' anytime to change what I filter for."

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

## Tools (12)

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
- `eigen_whats_new` — Latest features, tips, and updates from Eigen

## Privacy

One-way data flow: your agent pulls public data, combines with your local context, delivers insights to you. We never see what you're building, what you asked, or what your agent told you. Your Eigen context is stored locally by your agent — it never leaves your device.
