---
name: Developing Trends
description: Tracks when multiple independent signals from different areas all point toward the same outcome
tags:
  - system
  - force-dynamics
  - trends
  - predictions
last_updated: 2026-06-17
---

# Developing Trends

> **What this tracks:** Sometimes three or more unrelated developments — from different companies, different markets, different technologies — all start pointing toward the same outcome. Any one signal could be noise. But when independent signals from separate domains line up, something is likely about to happen. These are the trends we're watching.

## How We Identify a Developing Trend

A trend makes this list when it meets all four criteria:

1. **3+ independent signals** — not coverage of the same event, but genuinely separate developments happening in parallel
2. **From different areas** — if all the signals come from the same domain, it's just momentum in that area. A developing trend means different parts of the landscape are independently moving toward the same result
3. **Pointing at a specific outcome** — vague enough to always be "right" doesn't count. The predicted outcome has to be concrete enough that we can check whether it actually happened
4. **On a similar timeline** — signals that would play out over different decades aren't converging. The developments need to be moving at compatible speeds

## Confidence Levels

| Level | What It Means |
|-------|---------|
| `forming` | 2 signals identified, watching for a third to confirm the pattern |
| `detected` | 3+ independent signals confirmed, predicted outcome articulated |
| `strengthening` | New evidence continues to reinforce the trend |
| `imminent` | Multiple signals are playing out simultaneously — outcome likely within weeks |
| `resolved` | Outcome occurred (we check whether the prediction was right or wrong) |

## Active Trends

### CONV-001: Defense AI Becomes a Standalone Public Market Category by Mid-2027

**Confidence:** `detected`
**Predicted outcome:** At least one defense-focused AI company (Shield AI, Anduril, or similar) will IPO at a $15B+ valuation by mid-2027, establishing defense AI as a distinct investable category separate from general AI or traditional defense.
**Timeline:** Q1-Q2 2027
**Date identified:** 2026-03-27

**Contributing Forces:**

| # | Force | Origin Node | Mechanism | Strength |
|---|-------|-------------|-----------|----------|
| 1 | Shield AI $1.5B Series G at $12.7B valuation, 140% YoY growth, F-16 autonomy deployed | [[ai-business-funding]] | Capital inflows and valuation trajectory indicate IPO readiness within 12-18 months. $540M+ projected 2026 revenue provides the financial foundation for public listing. | strong |
| 2 | Federal judge blocks Pentagon's supply chain risk designation for Anthropic — establishes precedent that AI companies maintain safety autonomy | [[ai-policy-regulation]] | Judicial protection of AI companies' independence from military pressure creates a more favorable regulatory environment for defense AI companies that want to maintain commercial flexibility alongside military contracts. | moderate |
| 3 | Meta, Amazon, and Google all deepening robotics/defense-adjacent AI investments (Agile Robots, Fauna Robotics, Arm AGI CPU for edge deployment) | [[robotics-embodied-ai]] | Large tech companies entering defense-adjacent markets validates the category and creates potential acquisition pressure that incentivizes standalone IPOs. | moderate |
| 4 | OpenAI Rosalind Biodefense + Anthropic Mythos both establishing government-exclusive model tiers | [[frontier-models]] | Frontier labs voluntarily bifurcating access (government-only vs. commercial) signals the defense AI market is substantive enough to justify dedicated products and restricted distribution — a precursor to standalone defense AI entities. | strong |

**What would invalidate this:** Major defense AI program failure or safety incident that triggers Congressional restriction. Significant market downturn that closes IPO window. Shield AI or Anduril acquired by a large defense prime before IPO.
**Opportunity signal:** Research public defense companies with AI exposure (Palantir, L3Harris). Watch for Shield AI or Anduril IPO filing signals — pre-IPO positioning.

**Tracking:**
| Date | Update | Evidence |
|------|--------|---------|
| 2026-05-29 | Strengthened → `forming` | OpenAI Rosalind Biodefense: first frontier lab product explicitly scoped to biodefense + pandemic prep with US-gov/allied-only access. Two frontier labs (OpenAI + Anthropic Mythos) now have government-exclusive model tiers. Structural bifurcation forming: commercial public models vs. government-only capability tier. |
| 2026-03-27 | Identified | Shield AI $12.7B + Pentagon ruling + tech companies entering defense-adjacent |

---

### CONV-002: Inference Cost Collapse Enables Mass Agent Deployment by Late 2026

**Confidence:** `imminent`
**Predicted outcome:** The combined effect of memory compression, alternative CPU architectures, and post-training optimization will reduce inference costs by 5-10x within 6 months, making it economically viable to deploy persistent AI agents for tasks that currently cost too much to automate.
**Timeline:** Q3-Q4 2026
**Date identified:** 2026-03-27

**Contributing Forces:**

| # | Force | Origin Node | Mechanism | Strength |
|---|-------|-------------|-----------|----------|
| 1 | TurboQuant 6x KV-cache compression + RotorQuant 10-19x improvement within 24 hours | [[ai-research-breakthroughs]] | Memory is the primary bottleneck for inference. 6-19x compression at zero accuracy loss directly translates to 6-19x more concurrent users per GPU, collapsing the per-query cost. | strong |
| 2 | Arm AGI CPU (2x perf/rack vs x86 for inference) + Alibaba XuanTie C950 (RISC-V for agents) | [[compute-hardware]] | Two non-x86 architectures launching simultaneously for inference workloads. Competition between Arm, RISC-V, and x86 creates downward price pressure on inference compute. | moderate |
| 3 | NVIDIA gpt-oss-puzzle-88B (2.82x throughput via post-training optimization, no retraining) | [[open-source-models]] | Post-training neural architecture search achieves 2.8x speedup without any retraining — a purely software-side inference cost reduction that compounds with hardware improvements. | moderate |
| 5 | Gemma 4 (4B-active MoE) achieves frontier-competitive agent performance at a fraction of compute | [[open-source-models]] | A 4B-active-parameter model matching much larger models on agent benchmarks means the compute required per agent task is dropping from the model architecture side — not just hardware/compression. This is a distinct, independent cost reduction vector that compounds with forces 1-4. | strong |
| 6 | Spectral-AI: RT cores for O(log N) MoE routing — 48-89x faster, 731x VRAM reduction, runs on consumer RTX | [[compute-hardware]] | Repurposes existing consumer GPU hardware (ray tracing cores) for MoE expert routing. O(log N) complexity means the speedup increases as expert count scales — directly relevant as MoE models grow to thousands of experts. Independent from memory compression and attention optimization forces. | strong |

**What would invalidate this:** Memory compression techniques turn out to have hidden quality costs at scale. Alternative CPU architectures fail to deliver claimed performance in production. Demand growth outpaces cost reduction (Jevons Paradox) so fast that per-agent costs don't actually fall.
**Opportunity signal:** Businesses that were previously uneconomical to automate with AI agents become viable. Look for "automation as a service" opportunities in mid-market businesses where the primary blocker was cost, not capability.

**Tracking:**
| Date | Update | Evidence |
|------|--------|---------|
| 2026-03-27 | Identified | TurboQuant + RotorQuant + Arm AGI + NVIDIA Puzzle convergence |
| 2026-03-30 | Strengthened — add 4th force | pplx-embed 5-30x cheaper (MTEB 81.96%, 1B+ Samsung deployments) + SID-1 1000x cheaper retrieval confirm the cost collapse is already happening in embedding/retrieval, not just theoretical. Confidence raised. |
| 2026-04-02 | Strengthened — add 5th force | Gemma 4 (4B-active MoE) achieves frontier-competitive agent performance. Model architecture itself is now a cost reduction vector, independent of hardware/compression. Confidence moving toward `imminent`. |
| 2026-04-07 | **→ IMMINENT — add 6th-8th forces** | Three new independent efficiency vectors in ONE DAY: (6) TriAttention 10.7x KV reduction via trigonometric estimation, (7) CoDE-Stop 25-50% reasoning token savings training-free, (8) Cursor warp decode 1.84x MoE inference on Blackwell. The cost collapse is now happening across compression, inference efficiency, and token generation simultaneously. |
| 2026-04-11 | Add 9th force | Spectral-AI repurposes consumer RTX ray tracing cores for 48-89x faster MoE expert routing with 731x VRAM reduction. New independent vector: existing consumer hardware as MoE accelerator. |
| 2026-05-13 | Add 10th force | DECO (arxiv 2605.10933): 20% active experts matching dense model performance at 3× hardware speedup. Ultra-sparse routing at dense quality is a distinct mechanism from compression, quantization, and attention optimization — new point on the MoE efficiency curve. If at production scale: 3× cost reduction per inference token without capability loss. |

---

### CONV-003: AI IPO Wave Creates Public Market Investment Window in H2 2026

**Confidence:** `imminent`
**Predicted outcome:** At least 3 major AI companies (from: Anthropic, OpenAI, Shield AI, Anduril, Databricks, Scale AI) will file for IPO in H2 2026, creating a concentrated public market entry window for AI-focused investing.
**Timeline:** Q2-Q3 2026 (accelerated from Q3-Q4)
**Date identified:** 2026-03-27

**Contributing Forces:**

| # | Force | Origin Node | Mechanism | Strength |
|---|-------|-------------|-----------|----------|
| 1 | Anthropic considering Q4 2026 IPO, bankers estimate $60B+ raise; revenue doubling ($9B→$19B in 3 months) | [[ai-business-funding]] | Revenue trajectory and banker engagement indicate active IPO preparation. $19B ARR gives financial credibility for public markets. | strong |
| 2 | OpenAI CFO states they are "starting to build" toward IPO; total private funding ~$120B at $730B valuation | [[frontier-models]] | With $730B private valuation and CFO publicly discussing IPO, OpenAI is signaling imminent public listing. Private funding may be approaching natural limits. | strong |
| 3 | Shield AI projecting $540M+ 2026 revenue with $12.7B valuation, 140% YoY growth | [[robotics-embodied-ai]] | Defense AI IPO candidate with strong revenue growth and category-defining position. | moderate |
| 4 | OpenAI ad revenue hitting $100M ARR in 6 weeks — validates diversified revenue model needed for public market narrative | [[ai-in-enterprise]] | Multiple revenue streams (subscription + API + ads) make the public market story more compelling. Reduces the "single product risk" that would concern public market investors. | moderate |

**What would invalidate this:** Major market downturn or recession. Regulatory action that creates IPO uncertainty (e.g., new AI legislation with unclear compliance requirements). A major AI safety incident that makes the public markets skeptical of the sector.
**Opportunity signal:** Pre-IPO positioning. Research which AI-adjacent public companies benefit from an AI IPO wave (investment banks, cloud providers, semiconductor companies). Track S-1 filings.

**Tracking:**
| Date | Update | Evidence |
|------|--------|---------|
| 2026-03-27 | Identified with 4 forces — elevated to `strengthening` | Anthropic IPO talk + OpenAI IPO signals + Shield AI growth + ad revenue validation |
| 2026-04-03 | Strengthened | OpenAI TBPN acquisition = pre-IPO narrative positioning. PitchBook $267B Q1 data confirms exit market readiness. Cowork > Claude Code adoption strengthens Anthropic's consumer growth story. |
| 2026-04-14 | Mild strengthening | Stanford AI Index $581.7B corporate investment reinforces demand fundamentals. OpenAI CRO memo (Microsoft friction → Amazon pivot) signals platform fragmentation IPO candidates must address in S-1 risk disclosures. |
| 2026-05-11 | Strengthened — OpenAI Deployment Company | OpenAI launches majority-owned subsidiary bringing 19 investment firms, SIs, and consultancies into enterprise AI deployment. Directly addresses the Microsoft-dependency risk in force 2 — OpenAI is building independent enterprise revenue infrastructure. Pre-IPO companies need diversified revenue channels and enterprise customer relationships for credible S-1 narratives; this creates both. |
| 2026-05-22 | **→ IMMINENT** — SpaceX S1 filed; OpenAI reportedly filing this week; Anthropic "planning to float" | SpaceX filed its S-1 (primary source: SEC filing); TBPN reports OpenAI filing "as soon as this week" (unverified); TBPN reports Anthropic "planning to float shares." Cerebras IPO (filed April 23) already closed at $95B market cap. Three major AI-adjacent companies moving to public markets within a single week. CONV-003 predicted "at least 3 major AI companies file for IPO in H2 2026" — the timeline has compressed to H1 2026 (SpaceX June, OpenAI reportedly imminent). Confidence elevated to `imminent` — the window is not approaching, it is open. |
| 2026-06-01 | **First CONV-003 candidate confirmed: Anthropic S-1 filed** | Anthropic submitted confidential S-1 draft to SEC (primary source: @AnthropicAI). This is the first of the predicted "at least 3" major AI company IPO filings — the CONV-003 outcome is now partially realized. Remaining: OpenAI (reportedly filing, unverified), Shield AI. PRED-001 resolved CORRECT. CONV-003 remains `imminent` — the IPO wave is in motion but full resolution requires 2 more filings. |

---

### CONV-004: AI Safety Evidence Cascade Triggers Regulatory Action Wave by Q4 2026

**Confidence:** `strengthening`
**Predicted outcome:** At least 2 major regulatory actions (new laws, binding enforcement actions, or significant new mandatory compliance frameworks) specifically targeting AI behavioral safety (sycophancy, manipulation, scheming) will be enacted or finalized by Q4 2026.
**Timeline:** Q3-Q4 2026
**Date identified:** 2026-03-30

**Contributing Forces:**

| # | Force | Origin Node | Mechanism | Strength |
|---|-------|-------------|-----------|----------|
| 1 | AI sycophancy study published in Science journal — institutional-grade evidence in a top-tier peer-reviewed venue | [[ai-safety-alignment]] | Science publication is the threshold that converts "researcher concern" into "established fact" for regulators; EU AI Act risk classification and US NIST frameworks reference peer-reviewed evidence. A Science paper on sycophancy gives EU enforcement and US rulemaking a scientific basis for action. | strong |
| 2 | AISI study: AI scheming up 5x across 8 frontier models — government safety institute publishing quantified behavioral risks | [[ai-safety-alignment]] | AISI is a UK government body. When a government safety institute publishes a 5x increase in scheming incidents, other governments (EU, US NIST, etc.) reference it in their own guidance. Government-to-government policy diffusion is well-established. | strong |
| 3 | DeepMind manipulation study — 10,000 person scale, finance + health domains | [[ai-safety-alignment]] | Real-world manipulation in regulated sectors (finance, health) is a specifically legislatable harm. The 10,000-person scale gives statistical power that previous small studies lacked. EU AI Act high-risk system provisions and US AI Accountability Act (already passed) can anchor enforcement to this study. | moderate |

**What would invalidate this:** Major AI labs publish rebuttals that significantly undermine the study findings. Regulatory agencies are captured or defunded. Tech industry lobbying successfully delays action beyond end of 2026.
**Opportunity signal:** Compliance consulting for AI behavioral safety will be a growth category; tools that audit models for sycophancy, scheming, and manipulation patterns become compliance requirements.

**Tracking:**
| Date | Update | Evidence |
|------|--------|---------|
| 2026-03-30 | Identified with 3 forces | Science sycophancy + AISI scheming 5x + DeepMind 10K study |
| 2026-04-03 | Strengthened — add 4th force + new evidence | UC Berkeley peer preservation (ALL 7 models scheme at up to 99% rate — qualitative escalation from individual misbehavior to coordinated multi-model behavior) + Tennessee SB 1580 + Washington HB 2225/1170 + 78 chatbot bills in 27 states = state-level regulatory response already underway. Upgrading from `detected` to `strengthening`. |
| 2026-05-13 | New institutional voice | Goldman Sachs CEO David Solomon publicly articulates AI "untestability" risk at board level: "We don't have the ability to test whether it's right or not." When major financial institutions adopt this framing in public, it accelerates regulatory demand for mandatory AI audit/testing standards — financial services is the fastest regulatory transmission belt for tech risk concerns. Mild strengthening signal. |

---

### CONV-005: Agent Orchestration Standardization

**Confidence:** `strengthening`
**Predicted outcome:** Multi-agent orchestration emerges as a distinct infrastructure category with de facto standards, as 5+ independent projects converge on solving the same coordination problem simultaneously.
**Timeline:** Q3-Q4 2026
**Date identified:** 2026-04-02

**Contributing Forces:**

| # | Force | Origin Node | Mechanism | Strength |
|---|-------|-------------|-----------|----------|
| 1 | Claw Code — Claude Code orchestration wrapper | [[ai-coding-tools]] | Developer tooling converging on multi-agent coordination patterns for coding workflows | moderate |
| 2 | oh-my-claudecode + oh-my-codex — community orchestration layers | [[ai-coding-tools]] | Independent community projects solving the same multi-agent UX problem simultaneously signals unmet demand | moderate |
| 3 | DeerFlow v2 — open-source multi-agent framework | [[ai-agents]] | Structured agent coordination framework with explicit workflow orchestration | moderate |
| 4 | AWS Frontier Agents GA — enterprise multi-agent platform | [[ai-in-enterprise]] | Cloud provider productizing multi-agent orchestration signals enterprise demand is validated | strong |

**What would invalidate this:** Single dominant platform (e.g., LangChain, CrewAI) absorbs all demand. Agent orchestration proves unnecessary because single-model agents become capable enough. The projects diverge into incompatible patterns rather than converging.
**Opportunity signal:** Middleware/infrastructure layer for agent orchestration (routing, monitoring, coordination) is an emerging product category. Watch for which patterns become standard.

**Tracking:**
| Date | Update | Evidence |
|------|--------|---------|
| 2026-04-02 | Identified | 5 simultaneous GitHub projects (Claw Code, oh-my-claudecode, oh-my-codex, DeerFlow v2, AWS Frontier Agents GA) all solving multi-agent coordination |
| 2026-04-03 | Strengthened — major commercial entrants | Cursor 3 rebuilt as agent orchestration platform (not editor), Microsoft APM v0.8.10 (agent dependency manager across tools), MS Agent Governance Toolkit (agent policy enforcement). Moving from `forming` to `detected` — the top commercial players are now building for multi-agent as the default paradigm. |
| 2026-04-07 | **Strengthened — add 5th/6th forces** | Google Scion (open-source "hypervisor for agents" with container isolation) + Microsoft Agent Framework 1.0 GA (AutoGen + Semantic Kernel unified). Two largest cloud platforms now shipping multi-agent orchestration. Moving from `detected` to `strengthening`. |

---

### CONV-006: Sovereign AI Infrastructure Becomes a Distinct Venture-Scale Category by Q4 2026

**Confidence:** `forming` (65%)
**Predicted outcome:** Sovereign AI — non-US nations and enterprises standing up locally-controlled compute running open-weight models, independent of US frontier-lab access — consolidates into a distinct, venture-scale infrastructure category, evidenced by a $100M+ compute-OS vendor plus enacted national funds plus frontier-parity open-model supply, by Q4 2026.
**Timeline:** Q3-Q4 2026
**Date identified:** 2026-06-16 (formalized from informal candidate)

**Contributing Forces:**

| # | Force | Origin Node | Mechanism | Strength |
|---|-------|-------------|-----------|----------|
| 1 | UK Sovereign AI Fund + Isambard (~£1B, enacted June 11) | [[ai-policy-regulation]] | First nation-state-level enacted sovereign-AI fund — proves national demand for locally-controlled AI is real and budgeted, not aspirational | strong |
| 2 | US export-control suspension of Fable/Mythos for foreign nationals (June 13) | [[frontier-models]] | Restricting non-US access to US frontier models manufactures demand for non-US alternatives — the demand-creation force | strong |
| 3 | Hydra Host $100M Series A — NeoCloud compute OS, ~20 countries / ~60 datacenters (June 16) | [[ai-infrastructure]] | Provides the asset-light compute-supply layer that lets any datacenter globally become a sovereign AI provider — the supply force | strong |
| 4 | Open-weight frontier-parity model supply (Cohere 30B-A3B, DiffusionGemma, Qwen, GLM) | [[open-source-models]] | Sovereign compute is useless without competitive models to run; open weights provide the model layer with no US-license dependency | strong |
| 5 | GLM-5.2 (MIT) reaches #2 Code Arena: Frontend, behind only Fable 5 (June 16) | [[open-source-models]] | Strengthens force 4 to *frontier-coding parity*: the open model a sovereign stack runs is now one rung below the closed SOTA and ahead of Opus 4.7 Thinking — sovereign AI no longer means accepting a large capability discount | strong |

**What would invalidate this:** US relaxes export controls restoring foreign frontier access (collapses force 2); sovereign compute vendors fail to win named national contracts; open-weight models stall and re-open a large gap to closed frontier.
**Opportunity signal:** Vendor-neutral sovereign-AI integration channel (model selection + open-weight deployment + managed service) for non-US enterprises that lost Fable/Mythos access. See 2026-06-16 brief Builder's Lens.

**Tracking:**
| Date | Update | Evidence |
|------|--------|---------|
| 2026-06-16 | Promoted candidate → `forming` (65%) | 4 forces from distinct origin nodes stack (UK fund + US export control + Hydra Host supply + open-weight model supply) |
| 2026-06-17 | Strengthened (hold 65%, force 5 added) | GLM-5.2 (MIT) at #2 Code Arena: Frontend (behind only Fable 5, +29pt over Opus 4.7 Thinking) confirms the open-model leg is now at frontier-coding parity — the capability-discount objection to sovereign AI weakens. Confidence held at 65% pending a *named sovereign customer contract* (the missing concrete-demand datapoint) rather than raised on supply-side evidence alone. |

---

## Resolved Convergences

### Correct Predictions
| ID | Outcome | Predicted | Resolved | Forces | Notes |
|----|---------|-----------|----------|--------|-------|
| | | | | | |

### Incorrect Predictions
| ID | Outcome | Why Wrong | Lesson |
|----|---------|-----------|--------|
| | | | |

## Convergence Seed Candidates

> Two-force pairs that are watching for a third. Not yet confident enough to be convergences.

| Forces (2) | Potential Outcome | Missing Force | Watch For |
|-----------|-------------------|---------------|-----------|
| MCP formal gaps (FC-003) + Kitchen Loop self-evolving code (Mar 27) | Agent-tool protocol undergoes major revision (MCP 2.0/MCP+) by Q4 2026 | A third independent signal that MCP's current design is blocking production deployments | Companies publicly citing MCP limitations as a blocker; Anthropic/OpenAI announcing protocol working group |
| Sora shutdown + ChatGPT ad revenue ($100M in 6 weeks) | Frontier labs consolidate around text/agent products, abandon multimodal generation as standalone products | Another frontier lab deprioritizing a multimodal generation product | Google or Meta scaling back standalone image/video generation products |
| CoT proven "decorative" (Mar 26) + Agent reliability stuck at ~40% (CUA-Suite, EnterpriseOps-Gym) | Reasoning scaling hits diminishing returns, forcing alternative approaches (world models, JEPA) | Research results showing test-time compute scaling plateauing | METR benchmark showing agent autonomy gains slowing; more papers challenging CoT effectiveness |
| Voxtral open TTS beats ElevenLabs (Mar 30) + Qwen3-TTS open quality (Mar 17) | Commercial TTS APIs (ElevenLabs, PlayHT) face severe revenue pressure as open-weight models reach deployment quality | Enterprise adoption data showing shift away from commercial TTS APIs | A major enterprise announcing they switched from ElevenLabs to a self-hosted open model |
| Intercom Fin Apex vertical beats GPT-5.4+Claude (Mar 30) + AI2 MolmoWeb 8B beats GPT-4o on web navigation (Mar 25) | "Vertical beats frontier" becomes the dominant enterprise AI procurement pattern — buyers stop paying for general models and invest in domain-specific training | A third major vertical domain where a specialized model clearly outperforms general frontier models | Healthcare, legal, or finance vertical AI product publicly claiming benchmark superiority over GPT-5/Claude |
| Claude Code Routines (autonomous scheduling, Apr 14) + CLAUDE.md negative-constraint study (workflow optimization, Apr 13) | Agent infrastructure lock-in — first platform bundling scheduling + correct prompting patterns + safety auditing creates durable moat | A safety/auditing integration (Meerkat-type multi-trace monitoring) built into a coding agent platform | Anthropic or Cursor announcing integrated agent monitoring, or Meerkat-like tool integrated into CI/CD |
| Anthropic Glasswing/Mythos gated "trusted access" (significant, Jun 2 + Jun 9) + OpenAI Daybreak GPT-5.5-Cyber "Trusted Access for Cyber" + Cyber Partner Program (primary @OpenAI, Jun 22) | **Cyber-model gating seed:** offensive-capable / cyber-specialized frontier models converge on **vetted "trusted-access"-only distribution** (never open API or open weights) as the industry default — a capability-based access-control regime distinct from the June 13 nationality-based export-control regime | A *third* lab gating a cyber/offense-capable model behind a trusted-access tier, OR a standards/regulatory body codifying trusted-access tiers for cyber-capable models | Google DeepMind / xAI / a major open-weight lab announcing gated access for a security model; NIST / EU AI Act provisions on cyber-capable-model access tiers; an open-weight lab *declining* to release a cyber-capable variant openly |
| Karpathy@Anthropic Claude-accelerates-Claude (May 22) + MOSS self-evolving agent 0.25→0.61 (May 21) + AlphaProof Nexus AI-assisted formal proof research (May 25) | **CONV-007 seed: AI-Accelerated AI** — AI systems accelerating their own training, evaluation, and research pipelines becomes the dominant cost-reduction mechanism at frontier labs, compressing training cost and capability timelines simultaneously | A fourth signal showing a frontier lab quantifying recursive improvement in model capability (e.g., "Model N was trained partly by Model N-1") | OpenAI or Google DeepMind publishing a training methodology paper explicitly using AI-generated data or AI-directed training; Meta HyperAgents production deployment announcement |

> **Renumber note (2026-06-17):** This AI-Accelerated AI seed was previously labeled "CONV-006 seed." The 2026-06-16 published brief assigned **CONV-006** to the formal **Sovereign AI Infrastructure** convergence (now registered below in Active Trends). To remove the collision, the AI-Accelerated AI seed is renumbered to **CONV-007 seed**. Tracked separately via PRED-013 (AI-accelerated pre-training at 3+ labs).
