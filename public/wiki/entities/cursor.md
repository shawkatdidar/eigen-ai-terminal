---
name: Cursor
id: cursor
type: company
status: active
created: 2026-04-04
last_updated: 2026-04-22
related_nodes:
  - ai-coding-tools
  - ai-agents
  - ai-in-enterprise
  - ai-business-funding
related_entities:
  - microsoft
  - xai
tags:
  - entity
  - company
  - ai-coding
  - developer-tools
---

# Cursor

## Overview

Cursor is an AI-native code editor that has become one of the three dominant AI coding tools alongside Claude Code (Anthropic) and Codex (OpenAI). Founded by Anysphere, Cursor reached $2B ARR (annual recurring revenue) by March 2026, making it one of the fastest-growing developer tools in history. The company was in talks for a $50B valuation as of March 2026, and by April 2026 closed at a $29.3B valuation with the launch of Cursor 3.

Cursor 3, launched April 2, 2026, represents a fundamental architectural pivot: the product was rebuilt from scratch, abandoning the VS Code extension model in favor of a standalone IDE centered around multi-agent orchestration. The key insight driving this rebuild is that AI coding tools are converging on the same architectural thesis — the human directs, multiple agents execute. Cursor 3's core capabilities reflect this: an Agents Window for running multiple coding agents in parallel across repositories (locally or in cloud), Design Mode for annotating UI elements in-browser for agents to implement, native best-of-N model comparison, worktree-based isolation (each agent works on a separate Git worktree to prevent conflicts), and agent handoff between local, cloud, and mobile environments.

The competitive landscape is intense: Claude Code holds 54% market share (per Menlo Ventures data), OpenAI Codex has 2M+ weekly users and just introduced consumption-based pricing, and Cursor at $2B ARR is the revenue leader among pure-play AI coding tools. The market is entering aggressive price competition (FC-019), which accelerates enterprise adoption but compresses margins across the sector.

## Key Facts

| Attribute | Detail |
|-----------|--------|
| **Parent company** | Anysphere |
| **Headquarters** | San Francisco, California, USA |
| **ARR** | $2B current run rate, projects $6B by end of 2026 |
| **Valuation** | **$50B+ in talks (April 17, 2026)** — Thrive + a16z lead, NVIDIA strategic, Battery Ventures new, oversubscribed. Prior $29.3B (October 2025, Cursor 3 launch round) |
| **Current version** | Cursor 3 (launched April 2, 2026) |
| **Architecture** | Rebuilt from scratch as agent-orchestration platform (no longer VS Code extension) |
| **Key features** | Agents Window (parallel multi-agent), Design Mode, best-of-N model comparison, worktree isolation, local/cloud/mobile handoff |
| **Background Agents** | Cloud sandbox execution — coding tasks run while developer works on other things |
| **Research** | Composer 2 technical report with Kimi k2.5 MoE (March 25, ArXiv) |
| **Market position** | Competes with Claude Code (54% share) and OpenAI Codex (2M+ weekly users) |

## Timeline

| 2026-04-21 | **SpaceX/xAI Colossus + Cursor — $10B compute deal + $60B acquisition option** — Cursor blog: Composer (Cursor's agentic coding model) will "leverage xAI's Colossus infrastructure to dramatically scale up." Composer 1.5 scaled RL by 20×; Composer 2 added continued pretraining for "frontier-level performance at a fraction of the cost." TechCrunch: SpaceX provides Colossus access; Cursor eng leads Andrew Milich + Jason Ginsberg joined xAI reporting to Musk. $60B acquisition option exercisable later 2026. Conflicts with April 17 Thrive+a16z+NVIDIA $50B round; two contradictory cap-table narratives within 4 days. | significant | [cursor.com](https://cursor.com/blog/spacex-model-training) · [techcrunch.com](https://techcrunch.com/2026/04/21/spacex-is-working-with-cursor-and-has-an-option-to-buy-the-startup-for-60-billion/) |


| Date | Event | Significance | Source |
|------|-------|-------------|--------|
| 2026-04-02 | Cursor 3 launches — rebuilt from scratch as agent-orchestration platform | significant | cursor.com |
| 2026-03-25 | Composer 2 technical report published with Kimi k2.5 MoE | significant | arxiv.org |
| 2026-03-20 | Background Agents shipped + $2B ARR announced | significant | lushbinary.com |
| 2026-03-11 | $50B valuation talks reported | significant | x.com |

## Connections

### Nodes

- [[ai-coding-tools]] — One of the three dominant AI coding tools. $2B ARR makes it the revenue leader among pure-play AI coding companies. Cursor 3's rebuild as an agent-orchestration platform defines the architectural direction for the entire category.
- [[ai-agents]] — Cursor 3 is fundamentally an agent orchestration product. The Agents Window runs multiple coding agents in parallel. Background Agents execute in cloud sandboxes. The shift from "editor that helps you code" to "orchestrator that delegates coding" is the core architectural thesis.
- [[ai-in-enterprise]] — Enterprise adoption is Cursor's primary growth vector. Worktree-based isolation and cloud/local handoff address enterprise concerns about agent conflict management and data residency.
- [[ai-business-funding]] — $29.3B valuation, $50B talks, $2B ARR. Cursor is one of the fastest-growing developer tools ever, and its valuation trajectory signals investor confidence in the AI coding market.

### Entities

- [[microsoft]] — Direct competitor via GitHub Copilot (4.7M paid subscribers). Microsoft's APM supports Cursor alongside other tools, acknowledging Cursor's market position even while competing. Copilot's multi-model routing (Claude, GPT-5.4, Gemini) is a different architectural approach than Cursor 3's agent orchestration.
- [[xai]] — Indirect connection: both are Elon Musk-adjacent in the broader tech ecosystem (Musk was an early Anysphere supporter). No direct competitive overlap.

### Force Dynamics

- **FC-019** (AI Coding Tool Price War) — Cursor is one of three forces compressing AI coding tool margins. Cursor 3's rebuild as an agent platform means the competitive axis shifts from "best code completion" to "best agent orchestration." $2B ARR provides a runway to sustain the price war, but margin pressure means the business model must evolve from per-seat licensing toward consumption and ecosystem value.
- **CONV-005** (Agent Orchestration Standardization) — Cursor 3 is one of 5+ independent projects converging on multi-agent coding orchestration (alongside Claw Code, oh-my-claudecode, DeerFlow v2, AWS Frontier Agents). When this many projects solve the same problem simultaneously, a standard typically emerges within 6-12 months.

## What to Watch

- **Cursor 3 vs Claude Code adoption data** — Enterprise comparison data will emerge within 2-4 weeks as teams trial both. Market share shifts are the most important signal.
- **Revenue growth rate** — $2B ARR is impressive, but with aggressive pricing from Codex (consumption-based, no fixed seat cost) and Claude Code's 54% market share, can Cursor sustain its growth trajectory?
- **Agent orchestration UX evolution** — Cursor 3's Agents Window, Cline's Kanban, and Claude Code's coordinator mode are three different UX approaches to the same multi-agent problem. Which pattern wins?
- **Valuation trajectory** — The gap between $29.3B (closed) and $50B (in talks) suggests either aggressive growth expectations or a market correction. Watch for next funding round terms.
- **Model-agnostic strategy** — Cursor routes between multiple underlying models. As Gemma 4, Arcee Trinity, and other efficient open models mature, does Cursor shift more inference to open models to improve margins?
