---
tags:
  - dashboard
  - radar
last_updated: 2026-04-04
---

# AI Radar Dashboard

> Quick-glance status of all tracked AI nodes. Updated daily by the scanner.

## Node Status Overview

| #   | Node                          | Status           | Impact   | Trend                                                                                      | Last Signal |
| --- | ----------------------------- | ---------------- | -------- | ------------------------------------------------------------------------------------------ | ----------- |
| 1   | [[frontier-models]]           | **accelerating** | high     | DeepSeek V4 for Huawei chips, GPT-4o retired, ChatGPT on CarPlay                           | 2026-04-03  |
| 2   | [[open-source-models]]        | **accelerating** | high     | PrismML Bonsai 8B (native 1-bit), Netflix VOID model                                       | 2026-04-03  |
| 3   | [[compute-hardware]]          | **accelerating** | high     | MS $10B Japan, MLPerf v6.0 Blackwell Ultra, tariff 15% DC carve-out, Rowhammer GPU         | 2026-04-03  |
| 4   | [[ai-agents]]                 | **accelerating** | high     | MS Agent Governance Toolkit, Claude Computer Use Windows, Cursor 3 agents, MS APM          | 2026-04-03  |
| 5   | [[ai-coding-tools]]           | **accelerating** | high     | Cursor 3 launch, OpenAI Codex pay-as-you-go, Coder $90M                                    | 2026-04-03  |
| 6   | [[ai-infrastructure]]         | **accelerating** | high     | (no new signals today)                                                                     | 2026-04-02  |
| 7   | [[ai-safety-alignment]]       | **accelerating** | high     | Peer preservation (all 7 models), Anthropic emotion concepts, Claude jailbreak, Moonbounce | 2026-04-03  |
| 8   | [[ai-policy-regulation]]      | **accelerating** | high     | Trump tariff DC carve-out, Tennessee SB 1580, Washington AI bills, Anthropic-Australia MOU | 2026-04-03  |
| 9   | [[ai-business-funding]]       | **accelerating** | high     | PitchBook $267B Q1, MS $10B Japan, OpenAI TBPN acquisition, Sarvam AI $300M                | 2026-04-03  |
| 10  | [[multimodal-ai]]             | **accelerating** | high     | Netflix VOID model, Google Vids AI avatars                                                 | 2026-04-03  |
| 11  | [[ai-for-science]]            | **accelerating** | high     | (no new signals today)                                                                     | 2026-03-30  |
| 12  | [[robotics-embodied-ai]]      | **accelerating** | high     | (no new signals today)                                                                     | 2026-03-31  |
| 13  | [[ai-research-breakthroughs]] | **accelerating** | high     | Anthropic emotion concepts, BCR task-scaling, Osmosis LoRA MoE RL, MoE interpretability    | 2026-04-03  |
| 14  | [[edge-on-device-ai]]         | **accelerating** | high     | PrismML Bonsai 8B native 1-bit, Apfel (Apple on-device LLM CLI)                            | 2026-04-03  |
| 15  | [[ai-in-enterprise]]          | **accelerating** | high     | Codex pay-as-you-go, Cowork > Claude Code adoption, Q1 layoffs 52K, OpenSearch agentic     | 2026-04-03  |
| 16  | [[frontier-edges]]            | **accelerating** | critical | EDGE-05 (Interpretability) major progress — emotion-level causal steering                  | 2026-04-03  |

## Status Legend

- **accelerating** — momentum increasing, frequent significant signals
- **steady** — consistent activity, no major directional change
- **cooling** — decreasing activity or interest
- **archived** — no longer actively tracked

## Today's Top 3 Signals (2026-04-04)

1. **Anthropic blocks OpenClaw from subscriptions — ecosystem-defining moment** — Third-party harness users face 2-50x cost increases. HuggingFace CEO immediately published open-model migration instructions. Forces the open-source agent ecosystem to choose: pay Anthropic API rates or switch to local models. 985 HN points — biggest community reaction since the Claude Code leak.
2. **AI vulnerability discovery goes industrial — 23-year Linux bug + 500 zero-days in one month** — Claude Code found a heap buffer overflow undetected since 2003 in the Linux kernel. MAD Bugs campaign found 500+ high-severity zero-days. Offense speed (hours) vs defense lag (weeks) creates structural asymmetry. 48% of RSAC attendees now call agentic AI the #1 attack vector.
3. **OpenAI leadership shuffle + 50% datacenter builds delayed = infrastructure stress** — Three top OpenAI executives change roles simultaneously pre-IPO. Meanwhile, 50% of US datacenter builds are delayed due to Chinese equipment shortages + tariffs. The physical and organizational infrastructure underpinning AI expansion is under simultaneous strain.

## Recent Status Changes

| Date | Node | From | To | Reason |
|------|------|------|----|--------|
| 2026-03-27 | (no status changes — all nodes remain accelerating) | | | |
| 2026-03-26 | (no status changes — all nodes remain accelerating) | | | |
| 2026-03-25 | (no status changes) | | | |
| 2026-03-19 | ai-policy-regulation | steady | accelerating | 5 major policy actions in one week |
| 2026-03-19 | ai-infrastructure | steady | accelerating | OpenViking, Nexthop $500M, Oracle pivot |
| 2026-03-19 | ai-safety-alignment | steady | accelerating | OpenClaw CVEs, Safety Report, Anthropic Institute |

## Scan Log

| Date | Signals Found | Notable+ | Nodes Updated | Brief |
|------|--------------|----------|---------------|-------|
| 2026-04-04 | ~42 raw → 20 verified | 0 breakthrough, 7 significant, 13 notable | 13/16 | [[2026-04-04]] |
| 2026-04-03 | ~65 raw → 35 verified | 0 breakthrough, 10 significant, 22 notable | 15/16 | [[2026-04-03]] |
| 2026-04-02 | ~44 raw → 21 verified | 0 breakthrough, 9 significant, 12 notable | 14/16 | [[2026-04-02]] |
| 2026-03-31 | ~16 verified in-window | 0 breakthrough, 6 significant, 10 notable | 11/16 | [[2026-03-31]] |
| 2026-03-30 | ~38 verified in-window | 0 breakthrough, 10 significant, 28 notable | 13/16 | [[2026-03-30]] |
| 2026-03-27 | ~68 raw → 21 verified | 0 breakthrough, 10 significant, 11 notable | 14/16 | [[2026-03-27]] |
| 2026-03-26 | ~200 raw → 30 verified | 0 breakthrough, 12 significant, 18 notable | 15/16 | [[2026-03-26]] |
| 2026-03-25 | ~180 raw → 30 verified | 0 breakthrough, 13 significant, 17 notable | 15/16 | [[2026-03-25]] |
| 2026-03-24 | ~80 raw → 14 verified | 0 breakthrough, 4 significant, 10 notable | 10/16 | [[2026-03-24]] |
| 2026-03-23 | ~250 raw → 18 verified | 0 breakthrough, 8 significant, 10 notable | 16/16 | [[2026-03-23]] |
| 2026-03-19 | 124 raw → 94 final | 4 breakthrough, 32 significant, 58 notable | 15/15 | [[2026-03-19]] |
