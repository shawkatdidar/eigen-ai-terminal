---
name: Bottleneck Map
description: Constraints blocking progress across multiple nodes — clearing creates disproportionate value
tags:
  - system
  - force-dynamics
  - bottlenecks
  - constraints
last_updated: 2026-04-11
---

# Bottleneck Map

> **What this tracks:** Constraints that block progress in 2+ nodes simultaneously. A bottleneck is more valuable to track than a single-node problem because clearing it creates cascading unlocks.

## How to Identify a Bottleneck

A bottleneck qualifies when:
1. **Multiple nodes reference it** as a limiting factor (check "What to Watch For" sections)
2. **Progress on the bottleneck** would accelerate 2+ tracked edges or nodes
3. **Resources are being thrown at it** — serious players are trying to clear it
4. **It's not just a missing feature** — it's a fundamental constraint (technical, regulatory, economic, or structural)

## Active Bottlenecks

### BN-001: Agent Reliability Gap

**Type:** `technical`
**Status:** `blocking`
**Date identified:** 2026-03-27

**What it blocks:**
| Blocked Node/Edge | How It's Blocked | Impact if Cleared |
|-------------------|------------------|-------------------|
| [[ai-agents]] / EDGE-02 | Enterprise agent task success rate is 37.4% (EnterpriseOps-Gym). Desktop agent failure rate is ~60% (CUA-Suite). These rates are too low for production deployment in high-stakes workflows. | Agents move from "demo" to "production" across enterprise. The $100B+ market for AI-automated business processes unlocks. |
| [[ai-in-enterprise]] | Enterprises can't deploy agents for customer-facing or mission-critical tasks at <50% reliability. Current adoption is limited to low-risk, human-supervised workflows. | Enterprise AI spending shifts from "pilot" to "production" budgets (typically 10-100x larger). |
| [[ai-coding-tools]] | Coding agents (Codex, Claude Code, Cursor) can handle simple tasks but struggle with complex, multi-step workflows that require maintaining state and context across tool calls. | AI coding tools become viable for complete feature implementation, not just assistance. |

**Who's attacking it:**
| Player | Approach | Progress |
|--------|----------|----------|
| OpenAI | Codex Plugins (structured tool integrations), Agentic Commerce Protocol | Plugins launched with 20+ integrations, but reliability data not yet public |
| Anthropic | Claude Code with extended thinking, MCP ecosystem | Agent autonomy reaching 4+ hours (METR), but success rate metrics unclear |
| Cursor | Composer 2 with RL training in actual IDE harness | 61.3 CursorBench — strong for coding domain but narrow |
| Kitchen Loop (research) | Self-evolving codebase with 1,094+ merged PRs | Zero regressions claimed, but limited to codebase maintenance tasks |
| AI2 | MolmoWeb — open-weight 8B model beating GPT-4o on web navigation | Proves smaller specialized models can outperform generalists on specific tasks |

**Signals of loosening:**
| Date | Signal | What It Means |
|------|--------|--------------|
| 2026-03-30 | SakanaAI AI-Scientist-v2 peer-reviewed paper — autonomous loop works for scientific research | Full-loop reliability demonstrated in a credible real-world task |
| 2026-03-30 | Intercom Fin Apex beats GPT-5.4+Claude at customer service — domain-specific model surpasses general frontier | Domain reliability is now reliably achievable via vertical fine-tuning |
| 2026-03-30 | Ramp deploys AI agents for 50+ financial tools in production | High-stakes domain (corporate finance) trusted in production |
| 2026-03-27 | Kitchen Loop: 285+ iterations, zero regressions across 2 production systems | Self-evolving code works for constrained domains |
| 2026-03-26 | UI-Voyager: 4B model exceeds human performance on mobile GUI tasks | Small specialized models can achieve high reliability in narrow domains |
| 2026-03-25 | MolmoWeb: open 8B model beats GPT-4o on web navigation | Domain-specific training overcomes model size limitations |

**Signals of loosening (continued):**
| Date | Signal | What It Means |
|------|--------|--------------|
| 2026-04-02 | Microsoft Agent Governance Toolkit — open-source, all 10 OWASP agentic risks, sub-ms policy enforcement | First comprehensive governance layer for production agents. Addresses compliance/security reliability. |
| 2026-04-02 | Cursor 3 — rebuilt as agent orchestration platform with worktree isolation and agent merge queue | Multi-agent orchestration with isolation patterns reduces cascading failures |
| 2026-04-02 | Anthropic emotion concepts — sycophancy/scheming vectors measurable and steerable | Per-deployment behavioral tuning without retraining. Diagnostic tool for agent behavioral drift. |
| 2026-04-02 | OpenAI Codex consumption pricing + 2M weekly users | Volume signals real-world agent usage is scaling despite reliability concerns |
| 2026-04-09 | ClawBench: Sonnet 4.6 only 33.3% on 144 live production websites — real web tasks, not sandboxes | Gap persists even for frontier models on real production sites |

**Opportunity angle:** Tools that increase agent reliability for specific workflows — validators, monitoring, guardrails, recovery mechanisms. The MCP Validator idea directly addresses this: catch protocol-level failures before they reach the agent. NEW: Agent behavioral monitoring via emotion-concept vectors could become a diagnostic product.

---

### BN-002: MCP Protocol Expressivity Limitations

**Type:** `technical`
**Status:** `blocking`
**Date identified:** 2026-03-27

**What it blocks:**
| Blocked Node/Edge | How It's Blocked | Impact if Cleared |
|-------------------|------------------|-------------------|
| EDGE-02: Reliable Autonomous Agents | MCP's type system cannot express all tool schemas correctly (proven by formal analysis). Agent-tool interactions can silently fail when schemas exceed MCP's expressivity. | Agents can reliably interact with any tool without protocol-level failures. |
| EDGE-10: Formal Verification of AI Code | MCP lacks the type-system foundations needed for formal verification of agent-tool interactions. Proposed MCP+ extensions (union types, intersection types, conditional types, recursive types, dependent types) would enable it. | Agent behavior becomes formally verifiable — provable correctness guarantees for tool interactions. |
| [[ai-agents]] | Every agent built on MCP inherits its expressivity limitations. As agents attempt more complex tool compositions, protocol gaps become more frequent failure modes. | Complex multi-tool workflows become reliable. |

**Who's attacking it:**
| Player | Approach | Progress |
|--------|----------|----------|
| Academic researchers (ArXiv 2603.24747) | Formal semantics analysis + MCP+ proposal with 5 type extensions | Paper published, no implementation yet |
| Anthropic (MCP creators) | MCP SDK updates, server deduplication (v2.1.84) | Incremental improvements, no structural changes to type system |
| Snyk | Agent Security MCP governance layer | Protocol-level tool call inspection, but focused on security not expressivity |

**Signals of loosening:**
| Date | Signal | What It Means |
|------|--------|--------------|
| 2026-03-27 | ArXiv paper proposes MCP+ with 5 concrete type-system extensions | First rigorous proposal for fixing the protocol's limitations |

**Opportunity angle:** Build an MCP Validator/Linter that checks server implementations against the formal spec. As MCP+ evolves, being the first to implement the type extensions creates a strong position. Open-source core + paid enterprise tier.

---

### BN-003: AI Cybersecurity Offense/Defense Asymmetry

**Type:** `structural`
**Status:** `hardening`
**Date identified:** 2026-03-27

**What it blocks:**
| Blocked Node/Edge | How It's Blocked | Impact if Cleared |
|-------------------|------------------|-------------------|
| EDGE-12: Agent Security | AI-powered offensive capabilities are advancing faster than defensive capabilities. Claudini achieved 100% adversarial transfer ASR; Mythos described as "far ahead in cyber capabilities." Defense tools can't keep pace. | Enterprise can deploy AI agents without existential security risk. |
| [[ai-in-enterprise]] | CISOs are increasingly cautious about deploying AI agents in production because the attack surface expands with each tool integration. Cross-organization agent calls remain unsolved (per Snyk). | Enterprises adopt AI agents for sensitive workflows (financial, healthcare, legal). |
| [[ai-safety-alignment]] | Steering vectors can increase jailbreak success by 57% (Mar 26). The same techniques used for interpretability create new vulnerabilities. Safety research is inadvertently expanding the attack surface. | Safety techniques become robust — interpretability tools don't create new attack vectors. |

**Who's attacking it:**
| Player | Approach | Progress |
|--------|----------|----------|
| Snyk | Agent Security — MCP governance, red-teaming, 300+ deployments | Launched at RSAC, but cross-org agent calls still unsolved |
| Cloudflare | Dynamic Workers — V8 isolate sandboxing for agent code, 100x faster than containers | Open beta, addresses code execution but not protocol-level attacks |
| Anthropic | Controlled testing of Mythos before release (per leak) | Demonstrates responsible approach but doesn't help the broader ecosystem |
| OpenAI | Safety Bug Bounty + Model Spec approach (Mar 25) | Defensive, not proactive |

**Signals of loosening:**
| Date | Signal | What It Means |
|------|--------|--------------|
| 2026-03-27 | Snyk Agent Security launches MCP governance layer | First protocol-level security tooling, but gaps remain |
| 2026-03-25 | Cloudflare Dynamic Workers for agent sandboxing | Infrastructure-level isolation now available |

**Signals of hardening:**
| Date | Signal | What It Means |
|------|--------|--------------|
| 2026-03-30 | AISI: scheming incidents up 5x across 8 frontier models | The behavioral gap between intended and actual model behavior is widening, not narrowing |
| 2026-03-31 | axios npm supply chain attack (300M weekly downloads) — 2nd major npm attack in one week | AI developer toolchain is a high-value attack surface; offensive actors targeting infrastructure, not just models |
| 2026-03-31 | Claude Code source map leak exposes 512K lines of internal architecture | Build pipeline misconfigurations can expose entire codebases; supply chain risk extends to build tools |
| 2026-03-30 | AI sycophancy in Science — formally documented behavioral failure | Sycophancy is now a measured, reproducible failure mode, not anecdotal; harder to dismiss |
| 2026-03-27 | Mythos leak: "far ahead of any other AI in cyber capabilities" | Offensive capability ceiling rising faster than defensive |
| 2026-03-26 | Claudini: 100% adversarial transfer ASR, autonomous discovery | AI autonomously finding attacks that transfer across models |
| 2026-03-26 | Steering vectors increase jailbreak success by 57% | Safety research creating new attack vectors |

**Opportunity angle:** AI-powered cybersecurity defensive tooling is urgently needed. The market for "AI that defends against AI attacks" is emerging and severely underserved. Tools that can monitor agent-tool interactions for adversarial patterns, detect reasoning hijacking (per the 9-category taxonomy), or validate MCP server integrity.

---

### BN-004: Energy/Power Constraint on Datacenter Expansion

**Type:** `economic` / `structural`
**Status:** `loosening`
**Date identified:** 2026-03-27

**What it blocks:**
| Blocked Node/Edge | How It's Blocked | Impact if Cleared |
|-------------------|------------------|-------------------|
| [[compute-hardware]] | New datacenters require enormous power: Meta El Paso targeting 1GW, Microsoft leasing 700MW. Grid capacity is finite and permitting is slow. Sanders-AOC moratorium bill (though unlikely to pass) signals political resistance. | AI compute supply scales to meet demand without energy-based bottlenecks. |
| [[ai-infrastructure]] | Power constraints determine WHERE datacenters can be built (near power sources) and HOW FAST (grid upgrade timelines). This concentrates AI infrastructure geographically and creates supply bottlenecks. | Datacenter buildout is limited only by capital and hardware supply, not power availability. |

**Who's attacking it:**
| Player | Approach | Progress |
|--------|----------|----------|
| NVIDIA + Emerald AI | AI datacenters as grid stabilizers — 30% consumption reduction in <40 seconds, 100% compliance across 200+ power targets | Demonstrated at London Nebius AI factory, Aurora implementation later in 2026 |
| Meta | $10B El Paso facility targeting 1GW by 2028 | Investment escalated 6.6x from original plan — throwing money at the problem |
| Microsoft | Leasing 700MW Texas facility dropped by Oracle/OpenAI | Opportunistic capacity acquisition |
| Sanders-AOC | Moratorium bill (opposing force) | Unlikely to pass (Republican majority) but creates permitting uncertainty |

**Signals of loosening:**
| Date | Signal | What It Means |
|------|--------|--------------|
| 2026-03-25 | NVIDIA demonstrates datacenter grid stabilization — 30% consumption reduction in 40 seconds | Transforms datacenters from grid burden to grid asset, addresses core regulatory objection |
| 2026-03-25 | TurboQuant/RotorQuant memory compression — 6-19x reduction | Reduces power-per-inference by reducing memory access (memory operations consume significant power) |
| 2026-04-11 | PJM Interconnection 15GW emergency procurement + 60GW decade shortfall | Largest US grid operator quantifies the gap: 60GW = ~60 nuclear plants. Natural gas construction costs 2x in 5 years. Hardest bottleneck to clear (3-7 year plant timelines). |

**Signals of hardening:**
| Date | Signal | What It Means |
|------|--------|--------------|
| 2026-04-11 | PJM 60GW shortfall, natural gas costs doubled in 5 years | The scale of the gap is larger than previously understood and construction costs are rising, not falling |

**Opportunity angle:** Companies providing power infrastructure, grid management, or energy efficiency solutions for AI datacenters. Utility companies serving major datacenter regions (Texas, Virginia). NVIDIA's grid stabilization approach could create a new category of "smart datacenter" infrastructure.

---

### BN-005: Talent Concentration in Frontier Labs

**Type:** `talent` / `structural`
**Status:** `loosening`
**Date identified:** 2026-03-27

**What it blocks:**
| Blocked Node/Edge | How It's Blocked | Impact if Cleared |
|-------------------|------------------|-------------------|
| [[open-source-models]] | The most capable AI researchers are concentrated at 4-5 frontier labs (OpenAI, Anthropic, Google, Meta, xAI). Open-source models depend on either (a) Meta releasing weights or (b) smaller teams achieving competitive results with less compute. | Distributed innovation ecosystem where many groups can produce frontier-quality models. |
| [[ai-research-breakthroughs]] | Novel research comes disproportionately from well-funded labs with large clusters. Academic researchers struggle to run experiments at frontier scale. | Research breakthroughs accelerate because more groups can experiment at scale. |

**Who's attacking it:**
| Player | Approach | Progress |
|--------|----------|----------|
| NVIDIA Nemotron Coalition | Open model collaboration with Mistral — shared compute and expertise | Announced Mar 26, first joint base model in development |
| Cursor / Kimi K2.5 | Open MoE base + domain-specific RL — proves you can match proprietary models with open weights + specialized training | Composer 2 scores competitive with closed models for coding |
| AI2 (Allen Institute) | Open-weight MolmoWeb — 8B model beating GPT-4o on web navigation | Proves small open models can beat large closed ones in specific domains |
| RISC-V ecosystem | Open-source compute stack (Alibaba XuanTie C950) | Alternative compute that doesn't require licensing from concentrated players |

**Signals of loosening:**
| Date | Signal | What It Means |
|------|--------|--------------|
| 2026-03-26 | NVIDIA Nemotron Coalition — open model collaboration with Mistral | Largest GPU company actively investing in open model ecosystem |
| 2026-03-26 | Cursor Composer 2 built on open Kimi K2.5, not proprietary models | Commercial success possible without frontier lab talent for base model |
| 2026-03-25 | MolmoWeb 8B > GPT-4o on web navigation | Domain specialization compensates for talent concentration |

**Opportunity angle:** Skills and tools that enable domain-specific model training (RL in specific harnesses, per Cursor's approach). The "train once, optimize many" paradigm (NVIDIA Puzzle) reduces the talent needed for deployment optimization.

---

## Cleared Bottlenecks (Historical)

| ID | Bottleneck | Cleared Date | What It Unlocked | Who Benefited |
|----|-----------|-------------|-----------------|---------------|
| | | | | |

## Hardening Bottlenecks (Getting Worse)

| ID | Bottleneck | Why Hardening | Consequence |
|----|-----------|---------------|-------------|
| BN-003 | AI cybersecurity offense/defense asymmetry | Offensive capabilities (Mythos, Claudini) advancing faster than defensive tooling | Enterprise adoption slowed; security-sensitive sectors delay AI deployment |
