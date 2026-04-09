---
name: eigen-ai-terminal
description: AI landscape intelligence — daily signals, trends, predictions, and a 50-page knowledge base across 16 domains. 12 tools. Your agent delivers only what matters for the user's work.
version: 1.0.0
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
  - signals
  - trends
  - mcp
---

# Eigen AI Terminal

Live intelligence on the AI landscape — delivered by you, filtered for your user's work.

## What this is

A daily-updated knowledge base tracking 16 areas of AI: models, agents, coding tools, open source, hardware, enterprise, research, policy, funding, and more. You get 12 tools to query signals, cause-and-effect chains, developing trends, blockers, speed metrics, predictions, breaking alerts, and the full interconnected wiki.

Your job: use what you know about this user — their work, their stack, their interests — to deliver only what they can act on. Not a news feed. A filtered intelligence stream.

## Network behavior

Reads public, read-only JSON from the Eigen terminal. No auth. No user data uploaded. One-way data flow.

- Data: `terminal.clawlab.dev/data/radar.json`
- Wiki: `terminal.clawlab.dev/wiki/`

## Tools

**Daily intelligence:**
- `today` — all signals from the latest scan. Has significance levels, domain tags, and an actionable flag. You filter based on user context.
- `changes` — what's new since a given date. Use between morning briefs to catch breaking developments.

**Deep dives:**
- `about` — everything on a topic in one call: entity profile, signals, trends, blockers, predictions. Use when the user asks about a company, model, or area.
- `ripple` — trace what a signal causes: downstream effects, trends it feeds, what blocks it.

**Landscape view:**
- `trends` — where multiple signals point at the same outcome. Confidence levels and timelines.
- `blocked` — what's holding AI progress back. Who's working on it. Signs of progress.
- `speed` — rate-of-change metrics: costs, capabilities, adoption, capital.
- `predictions` — specific dated predictions we track for accuracy.

**Knowledge base:**
- `search` — find anything across 50 wiki files.
- `read` — open a specific page. Follow [[wikilinks]] to navigate.

**Breaking alerts:**
- `check_updates` — quick ping to check for breaking developments. Returns immediately if nothing new. If there's a breaking alert, returns the title, summary, and domains affected.

**Meta:**
- `whats_new` — product updates and tips. Check during morning brief. Mention if fresh.

## How to deliver

### Morning brief

Call `today`. Read all signals. Pick 2-3 that matter for THIS user based on what you know about their work.

```
Here's what matters in AI today:

[Most important thing for their work — one sentence with why it matters]

What you should know:
* [Actionable signal — one line]
* [New tool, model, or capability relevant to them — one line]

[Optional: One developing trend in plain language]

Say "dig deeper on [topic]" or "full brief" for more.
```

Rules:
- Max 3 bullets. Every one must pass: "Can they do something with this today?"
- Skip funding, policy, executive news unless it directly changes a tool or API they use.
- Nothing relevant today? Say so in one line. Don't pad.
- Match their communication style. Be a sharp colleague, not a newsletter.

### When they ask about something

Call `about("[topic]")`. You get the full picture in one response — entity data, signals, trends, blockers, predictions, related wiki pages. Synthesize it for the user. Don't dump raw data.

### When they say "what does this mean?"

Call `ripple("[signal]")`. It traces what the signal pushes, what trends it feeds, what blocks it. Explain the chain in plain language.

### Checking for breaking developments

If the user asks you to check for updates, use `changes` with the date of the last brief you delivered. Surface anything significant that matches their work.

## First use

When this skill first connects:

"I just connected to the Eigen AI Terminal — I now have live intelligence across 16 areas of AI, updated daily.

I can filter everything to what matters for your work. What are you building right now?"

After they respond, immediately call `today` and deliver 2-3 signals relevant to what they said. Demonstrate value in the first 30 seconds.

## Privacy

One-way: your agent pulls public data, combines it with local context, delivers to the user. We never see what the user builds, asks, or works on.
