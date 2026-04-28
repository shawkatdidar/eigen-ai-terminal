---
tags:
  - dashboard
  - radar
last_updated: 2026-04-27
---

# AI Radar Dashboard

> Quick-glance status of all tracked AI nodes. Updated daily by the scanner.

## Node Status Overview

| #   | Node                          | Status           | Impact   | Trend                                                                                      | Last Signal |
| --- | ----------------------------- | ---------------- | -------- | ------------------------------------------------------------------------------------------ | ----------- |
| 1   | [[frontier-models]]           | **accelerating** | critical | Microsoft-OpenAI exclusive revenue-sharing ends; Claude 4.7 stylometric fingerprinting at 125 words; GPT-5.5 + DeepSeek V4 | 2026-04-27  |
| 2   | [[open-source-models]]        | **accelerating** | high     | DeepSeek V4 ships 1.6T MoE / 1M context functionally agentic / FP4-Blackwell / Huawei Ascend production       | 2026-04-26  |
| 3   | [[compute-hardware]]          | **accelerating** | high     | TSMC declines High-NA EUV through 2029; Cerebras S-1 $510M rev + $20B OpenAI; Meta-AWS Graviton millions       | 2026-04-26  |
| 4   | [[ai-agents]]                 | **accelerating** | high     | Dirac open-source 65.2% TerminalBench beats closed; YourMemory biological decay memory MCP server              | 2026-04-27  |
| 5   | [[ai-coding-tools]]           | **accelerating** | high     | Anthropic 7-week Claude Code postmortem; Affirm 60% agent-PRs +58% YoY; GitHub pauses Pro signups              | 2026-04-26  |
| 6   | [[ai-infrastructure]]         | **accelerating** | high     | DeepMind Decoupled DiLoCo zero-downtime distributed; Apple Silicon serving stack (apfel/vllm-mlx/vllm-swift)   | 2026-04-26  |
| 7   | [[ai-safety-alignment]]       | **accelerating** | critical | Mercor biometric breach (4TB, unverified); peer-preservation shutdown behavior (DATE-UNCERTAIN); Claude stylometry | 2026-04-27  |
| 8   | [[ai-policy-regulation]]      | **accelerating** | critical | China NDRC blocks Meta $2B Manus acquisition; FINMA Mythos systemic risk; House MATCH Act advances              | 2026-04-27  |
| 9   | [[ai-business-funding]]       | **accelerating** | critical | Microsoft-OpenAI exclusive deal ends; Google → Anthropic $40B + 5GW; Cognition $25B; Cerebras IPO              | 2026-04-27  |
| 10  | [[multimodal-ai]]             | **accelerating** | high     | Kling 3.0 native 4K + multi-shot continuity; ComfyUI $500M; OpenAI Sora consumer shutdown                      | 2026-04-26  |
| 11  | [[ai-for-science]]            | **accelerating** | high     | NVIDIA Earth-2 fully open + Gordon Bell Prize; Insilico ISM0387 UAE first; Amateur+GPT-5.4 cracks Erdős        | 2026-04-26  |
| 12  | [[robotics-embodied-ai]]      | **accelerating** | high     | Princeton VLM2VLA without catastrophic forgetting; Waymo Miami+Orlando+highway; Tesla $2B AI hardware acq      | 2026-04-26  |
| 13  | [[ai-research-breakthroughs]] | **accelerating** | high     | Anthropic AAR PGR 0.97 in 5d vs human 0.23 in 7d; DeepMind Decoupled DiLoCo; TEMPO TTRL                        | 2026-04-26  |
| 14  | [[edge-on-device-ai]]         | **accelerating** | high     | apfel exposes Apple FoundationModels (5K+ stars); Apple Silicon serving stack maturing                          | 2026-04-26  |
| 15  | [[ai-in-enterprise]]          | **accelerating** | high     | Anthropic-NEC 30K Japan; Google Cloud $750M partner fund; Affirm 60% agent-PRs; AWS Visier MCP                 | 2026-04-26  |
| 16  | [[frontier-edges]]            | **accelerating** | critical | Decoupled DiLoCo decentralized training; 1M context functionally agentic (V4); VLM2VLA no catastrophic forget | 2026-04-26  |

## Status Legend

- **accelerating** — momentum increasing, frequent significant signals
- **steady** — consistent activity, no major directional change
- **cooling** — decreasing activity or interest
- **archived** — no longer actively tracked

## Today's Top 3 Signals (2026-04-26)

1. **DeepSeek V4 ships — 1.6T-parameter open-weight MoE, 1M context functionally agentic (10% of V3.2 KV cache), MIT license, FP4-Blackwell-native, production on Huawei Ascend 950, Miles RL framework open-sourced same day** — V4-Pro = 1.6T total / 49B active; V4-Flash = 284B/13B active. Hybrid Compressed Sparse Attention + Heavily Compressed Attention. 27% of V3.2 inference FLOPs. Beats all open models, rivals top closed. V4-Pro $3.48/Mtok output (vs GPT-5.5 Pro $180); B200 199 tok/sec; H200 266 tok/sec. Native Claude Code/OpenClaw/OpenCode integration. V3/V3.2 hard-retire 2026-07-24. **First open-weight model where 1M context is functionally agentic** + first frontier-class production deployment on US-export-restricted Huawei silicon.
2. **OpenAI GPT-5.5 + GPT-5.5 Pro launch + Codex superapp; Google → Anthropic $40B + 5GW TPU; Anthropic $30B+ ARR (tripled QoQ, surpasses OpenAI per CNBC)** — GPT-5.5 ships MCP-native with computer use, hosted shell, apply patch, Skills built into the API; XBOW: 10% vulnerability miss-rate (Mythos-like) free-to-all. Codex on GB200 NVL72, 4M+ WAU. Same-day Google-Anthropic deal: $10B at $350B + $30B contingent + 5GW TPU on top of 3.5GW Broadcom-TPU. Anthropic now triple-stacked on Amazon ($13B/$100B) + Google ($10-40B + 8.5GW TPU) + CoreWeave-Meta ($21B). Frontier price went UP for first time ($5/$30 vs GPT-5.4 $2.50/$10).
3. **Anthropic publishes 7-week Claude Code regression postmortem during launch week; Cursor 3.2 + Codex CLI hooks-stable + AWS Bedrock AgentCore GA productize the agent stack** — Three compounding silent-default bugs (reasoning_effort, prompt-caching, verbosity prompt) caused 7-week quality complaints; Anthropic resets usage limits as compensation. Same week: Cursor 3.2 ships /multitask async subagents + worktrees + multi-root workspaces; Codex CLI codex_hooks stable + Bedrock SigV4; AWS AgentCore GA with Managed Agent Harness + Claude/Codex/Cursor/Kiro plugins. Affirm reports 60%+ agent-assisted PRs (+58% YoY merged volume) — first publicly verifiable agentic-coding productivity number from a real public company.

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

| Date | Raw / Recorded | Significant | Breakthrough | Notes |
|------|---------------|-------------|--------------|-------|
| 2026-04-26 | 117 / 58 | 27 | 1 | DeepSeek V4 ships (BREAKTHROUGH: 1.6T MoE, MIT, FP4-Blackwell, Huawei Ascend, 1M functional agentic), OpenAI GPT-5.5 + Codex superapp, Google→Anthropic $40B+5GW TPU ($30B ARR), Anthropic Claude Code 7-wk postmortem, XBOW: GPT-5.5 Mythos-like cyber free, Cohere↔Aleph $20B sovereign-AI merger, Meta-AWS Graviton millions, TSMC declines High-NA EUV, Cerebras IPO + $20B OpenAI, Tesla $2B AI hardware acq + $25B capex, Affirm 60%-agent-PRs, Cursor 3.2, Apple FoundationModels via apfel, Anthropic AAR PGR 0.97 vs human 0.23, Amateur+GPT-5.4 cracks 60-yr Erdős, Bitwarden CLI MCP supply-chain compromise, FINMA Mythos systemic risk, Meta 8K layoffs + Microsoft buyouts, Princeton VLM2VLA |
| 2026-04-22 | 62 / 37 | 17 | 0 | Google Cloud Next (TPU 8 + NVIDIA Rubin decade + Gemini Enterprise), Kimi K2.6 open-weight beats frontier, Anthropic $5B Amazon, SpaceX/xAI Cursor $60B option, Codex Labs Big-6, Sony AI Ace (Nature), Vast Data $30B, GPT-Image-2 +242 ELO, NSA uses Mythos, Meta keystroke harvest, EU Pax Silica split, Microsoft AutoAdapt |
| 2026-04-20 | 47 / 15 | 8 | 0 | Cursor $2B @ $50B+, DeepSeek first external $300M, Stanford AI Index, OX MCP RCE verified, Claude Design, Codex macOS computer-use |
| 2026-04-17 | 102 / 71 | 24 | 3 | Opus 4.7 GA, Qwen3.6-35B-A3B parity, Mythos withheld, Codex $100 Pro tier |
| 2026-04-14 | 41 / 41 | 14 | 0 | Stanford AI Index, Microsoft takes Stargate Norway, Claude Code Routines, OpenAI CRO memo, Mythos at IMF |
| 2026-04-11 | 55 / 19 | 7 | 0 | Alibaba open-source→revenue pivot, central banks mobilize over Mythos, Stargate execs→Meta |
| 2026-04-10 | 31 / 31 | 6 | 0 | CoreWeave-Meta $21B, HappyHorse #1 video, OpenAI liability shield |

