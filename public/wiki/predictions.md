---
name: Prediction Registry
description: Dated, falsifiable predictions with check dates and outcome tracking
tags:
  - system
  - force-dynamics
  - predictions
  - accountability
last_updated: 2026-06-17
total_predictions: 14
correct: 1
incorrect: 1
partial: 1
pending: 11
accuracy_rate: 1 correct / 1 incorrect / 1 partial of 3 resolved (small sample)
---

# Prediction Registry

> **What this tracks:** Specific, dated, falsifiable predictions derived from force dynamics analysis. Every prediction has a check date. On the check date, it gets evaluated and scored. This is the accountability layer — it forces honest assessment of whether the force dynamics reasoning actually works.

## Prediction Format Rules

Every prediction MUST have:
1. **Specific claim** — not "AI will get better" but "Anthropic IPO will price above $60B by Q4 2026"
2. **Confidence level** — percentage (50-95%) with justification
3. **Based on** — which force chains, convergences, or velocities support this
4. **Check date** — when to evaluate (YYYY-MM-DD)
5. **Falsification criteria** — what specific outcome would prove this wrong
6. **What would change my mind** — evidence that would lower confidence before check date

## Confidence Scale

| Range | Meaning |
|-------|---------|
| 50-60% | Slightly better than a coin flip — weak signal, plausible reasoning |
| 60-70% | More likely than not — multiple supporting signals, some uncertainty |
| 70-80% | Confident — strong force dynamics support, would be surprised if wrong |
| 80-90% | High confidence — convergence-backed, would require a major disruption to fail |
| 90-95% | Near-certain — multiple convergences, strong velocities, imminent |

Never claim >95%. The world is too complex.

## Active Predictions

### PRED-001: Anthropic Files for IPO by End of 2026 ✓ RESOLVED CORRECT

**Claim:** Anthropic will file an S-1 (IPO registration document) with the SEC by December 31, 2026.
**Resolution:** CORRECT — Anthropic submitted a confidential S-1 draft to the SEC on June 1, 2026. Primary source: @AnthropicAI official tweet. Satisfies falsification criteria verbatim: "Filing doesn't have to price — just the initial registration."
**Final Confidence:** 91% → RESOLVED
**Made:** 2026-03-27
**Check date:** 2027-01-15 (resolved early: 2026-06-01)

**Based on:**
- CONV-003: AI IPO wave convergence — 4 independent forces pointing at H2 2026 IPO window
- V-13: Anthropic revenue accelerating from ~$9B to $19B ARR in ~3 months — gives the financial credibility needed for public markets
- FC-004: Apple iOS 27 multi-model distribution creates additional revenue growth story for Anthropic's IPO narrative
- The Information reports executives discussing October 2026 IPO; Goldman Sachs, JPMorgan, and Morgan Stanley estimating $60B+ raise

**Falsification criteria:** No S-1 filed by 2027-01-15. Filing doesn't have to price — just the initial registration.
**What would change my mind:** Major market downturn (S&P 500 drops >20%); significant Anthropic safety incident; AI regulation that creates compliance uncertainty for IPO; revenue growth decelerating below $1B/month.

**Status updates:**
| Date | Confidence Change | Reason |
|------|-------------------|--------|
| 2026-03-27 | Initial: 75% | Strong revenue + banker engagement + multiple reporting sources |
| 2026-04-01 | 75% → 82% | Bloomberg secondary market: record Anthropic demand + Epoch AI projection Anthropic overtakes OpenAI revenue by mid-2026. Growth rate differential is accelerating, not converging. |
| 2026-04-02 | 82% → 83% | DOJ appeal of Pentagon ruling + Rep. Gottheimer letter elevates Anthropic political profile. Increased public/regulatory visibility strengthens the IPO narrative as Anthropic becomes a recognized policy player. |
| 2026-04-07 | 83% → 88% | Anthropic revenue surpasses $30B run rate (3x in 4 months). 1,000+ enterprise customers at $1M+/year (doubled in 2 months). Mythos/Glasswing demonstrates category leadership in cybersecurity. 3.5GW TPU deal through 2031 shows long-term infrastructure commitment. Financial case for IPO is now overwhelming. |
| 2026-05-22 | 88% → 91% | SpaceX S1 filing (primary source) references Anthropic as a named infrastructure tenant paying $1B+/month for Colossus data centers — this commitment appears in a public SEC document, showing Anthropic locked into a multi-year multi-billion compute contract structure that is only justifiable as a going concern with long-term planning. OpenAI reportedly filing IPO paperwork "as soon as this week" (TBPN — unverified but from TBPN which has been reliable for IPO signals). CONV-003 strengthened substantially. Anthropic #1 in Ramp paid business adoption (surpasses OpenAI). IPO window is now open with multiple candidates filing simultaneously — herd dynamics raise the probability that Anthropic files to avoid being the last major holdout. |
| 2026-06-01 | 91% → RESOLVED CORRECT | Anthropic submitted confidential S-1 draft to SEC. Primary source: @AnthropicAI official tweet. Falsification criteria satisfied: "Filing doesn't have to price — just the initial registration." Resolution is early — check date was 2027-01-15, but the filing occurred 7 months ahead of the deadline. Confidence calibration: initial estimate was 75%; actual outcome aligns with high-confidence updating. |

---

### PRED-002: Apple Announces Multi-Model Siri at WWDC June 2026 ◐ RESOLVED PARTIALLY CORRECT

**Claim:** Apple will announce at WWDC 2026 (expected June 8-12) that iOS 27 allows users to select alternative AI assistants (Claude, Gemini, etc.) as Siri backends, extending the current ChatGPT integration model.
**Resolution (2026-06-15):** PARTIALLY CORRECT — **Direction right, specifics wrong.** Apple did rebuild Siri on a frontier model (Apple–Gemini multi-year partnership, June 12 signal), confirming the core thesis that Apple would outsource Siri's "brain" to a frontier lab. BUT the deal is **exclusive to Google Gemini**, not the user-selectable *multi-model* backend PRED-002 specifically claimed. Notably, "Apple signs exclusive deal with one AI provider" was listed verbatim in this prediction's own "What would change my mind" — that falsifier triggered. Classification: WRONG_SPECIFICS / RIGHT_DIRECTION.
**Final Confidence:** 85% → RESOLVED (partial)
**Made:** 2026-03-27
**Check date:** 2026-06-15 (resolved on date)

**Based on:**
- FC-004: Apple multi-model iOS force chain — Bloomberg (Gurman) report, typically highly reliable for Apple leaks
- Supporting signals: Apple testing standalone Siri app (Mar 25), Apple gaining ability to distill from Gemini (Mar 26)
- Pattern: Apple has been progressively opening Siri — first ChatGPT integration, now extending to multiple providers

**Falsification criteria:** WWDC 2026 passes without an announcement of multi-model AI assistant support in iOS 27.
**What would change my mind:** Apple signs exclusive deal with one AI provider; Apple's own models achieve parity with frontier models (making multi-model unnecessary); significant privacy/security concerns surface about third-party AI integration.

**Status updates:**
| Date | Confidence Change | Reason |
|------|-------------------|--------|
| 2026-03-27 | Initial: 85% | Gurman report + 2 supporting signals from consecutive days |
| 2026-06-15 | RESOLVED PARTIALLY CORRECT | Apple–Gemini exclusive multi-year Siri partnership (June 12 signal) confirms direction (Apple rents a frontier "brain") but contradicts the multi-model specific (exclusive, not user-selectable). Lesson: when the underlying force is "company X outsources capability," the *structure* (exclusive vs. open-market) is a separate, harder-to-call variable than the *direction*. Don't bundle a structural claim into a directional prediction at high confidence. |

---

### PRED-003: MCP Protocol Gets Major Revision Addressing Formal Gaps by Q1 2027

**Claim:** The MCP specification (maintained by Anthropic) will release a major version update that addresses at least 3 of the 5 expressivity gaps identified in the formal analysis paper (union types, intersection types, conditional types, recursive types, dependent types) by March 31, 2027.
**Confidence:** 60%
**Made:** 2026-03-27
**Check date:** 2027-04-01

**Based on:**
- FC-003: MCP formal gaps constraining agent reliability — the constraint is now publicly documented with a concrete proposal for fixes
- BN-002: MCP expressivity limitations blocking EDGE-02 and EDGE-10
- V-06: MCP at 97M monthly SDK downloads — protocol is too critical to leave broken once the community understands the limitations

**Falsification criteria:** No MCP spec update addressing the formal expressivity gaps by 2027-04-01. Minor bug fixes don't count — it must address the type-system limitations.
**What would change my mind:** A competing protocol emerges that addresses these gaps (rendering MCP updates less urgent); Anthropic deprioritizes MCP maintenance; the formal analysis paper's findings are challenged or shown to be impractical concerns.

**Status updates:**
| Date | Confidence Change | Reason |
|------|-------------------|--------|
| 2026-03-27 | Initial: 60% | Strong need, but protocol evolution is slow and Anthropic may have other priorities |
| 2026-05-18 | 60% → 65% | Anthropic acquires Stainless API (SDK generation + MCP server code). First-party control means spec changes and SDK updates can ship simultaneously — removes the implementation-lag bottleneck that was a secondary constraint on PRED-003. Does not directly address the type-system expressivity gaps (the core of PRED-003), but demonstrates Anthropic's institutional priority on MCP ecosystem investment. The acquisition is evidence against "Anthropic deprioritizes MCP maintenance" as a falsification scenario. |

---

### PRED-004: Inference Cost (Per 1M Tokens, Frontier Models) Drops 5x+ by End of 2026

**Claim:** The effective cost of 1M output tokens from a frontier-class model (Opus-tier or GPT-5-tier) will be at least 5x lower on December 31, 2026 compared to March 27, 2026 levels.
**Confidence:** 75%
**Made:** 2026-03-27
**Check date:** 2027-01-15

**Based on:**
- CONV-002: Inference cost collapse convergence — TurboQuant (6x compression), Arm AGI CPU (2x perf/rack), NVIDIA Puzzle (2.82x throughput)
- V-04: KV-cache compression accelerating (6x → 10-19x in 24 hours)
- FC-006: Arm AGI CPU + RISC-V creating competitive pressure on inference compute pricing
- Historical pattern: inference costs have been dropping ~10x per year since 2023

**Falsification criteria:** Frontier model inference on December 31, 2026 costs more than 1/5th of today's price. Measured by the published pricing of the most capable model from OpenAI, Anthropic, or Google.
**What would change my mind:** Demand growth so extreme it absorbs all efficiency gains (prices stay flat despite lower unit costs). Major supply chain disruption (TSMC disruption, export controls). Frontier labs deliberately maintaining high prices to fund training compute.

**Status updates:**
| Date | Confidence Change | Reason |
|------|-------------------|--------|
| 2026-03-27 | Initial: 70% | Multiple technical pathways to cost reduction, but demand growth could absorb gains |
| 2026-04-02 | 70% → 75% | Gemma 4 (4B-active MoE) achieves frontier-competitive agent performance + Arcee Trinity 96% cheaper than Opus while ranking #2 on PinchBench. Model architecture efficiency is now an independent cost reduction vector compounding with hardware/compression gains. CONV-002 adds 5th force. |
| 2026-04-07 | 75% → 82% | THREE new independent efficiency vectors in one day: TriAttention (10.7x KV reduction), CoDE-Stop (25-50% reasoning token savings), Cursor warp decode (1.84x MoE inference). CONV-002 moved to `imminent`. Cost collapse is happening simultaneously across compression, token generation efficiency, and hardware-specific optimization. |
| 2026-05-20 | 82% → 82% (hold) | Gemini 3.5 Flash (Google I/O, May 20): priced at $1.50/$9.00 per 1M input/output tokens — approximately 3.6× MORE expensive per output token than Gemini 2.5 Flash (~$2.50/1M output). HOWEVER: (1) PRED-004 measures "most capable model" pricing — 3.5 Flash is a speed tier, not the frontier ceiling; the relevant comparison is Gemini 2.5 Pro pricing, not Flash-vs-Flash. (2) Google's token generation volume is 7× YoY — demand growth is absorbing efficiency gains, which is exactly the Jevons Paradox scenario in "what would change my mind." (3) 4× inference speed improvement at flash tier with claimed frontier capability means cost-per-task likely fell even if cost-per-token rose. Net: ambiguous signal. Flash-tier pricing increase is NOT a direct counter to PRED-004, but the 7× volume growth is early evidence the Jevons Paradox scenario is live. Watch Q3 pricing announcements for frontier-tier (Pro/Ultra) pricing trajectory. |
| 2026-05-22 | 82% → 80% | NVIDIA Q1 FY2026 earnings: revenue $81.66B (+85% YoY), supply constrained, demand "far exceeding supply." Jensen Huang: hyperscaler capex going $780B→$1T. This confirms Jevons Paradox at the infrastructure level: efficiency gains (Cerebras 1,000 tok/s, multiple compression techniques) are being absorbed by demand, not flowing to price reductions. The "demand growth outpaces efficiency gains" scenario from "what would change my mind" is now evidenced by multiple data points simultaneously. Mild confidence reduction: the demand absorption mechanism is real, not just theoretical. Still well-supported by the technical efficiency vectors in CONV-002. Watching for Gemini 3.5 Pro pricing (expected June per Logan Kilpatrick) as the frontier-tier data point. |

---

### PRED-005: At Least One Defense AI Company IPOs by End of Q2 2027

**Claim:** At least one defense-focused AI company (Shield AI, Anduril, or a comparable company) will complete an IPO (priced and trading) by June 30, 2027.
**Confidence:** 65%
**Made:** 2026-03-27
**Check date:** 2027-07-01

**Based on:**
- CONV-001: Defense AI convergence — Shield AI at $12.7B, Pentagon judicial precedent, tech companies entering defense-adjacent
- V-15: Shield AI valuation velocity (+140% YoY), projecting $540M+ 2026 revenue
- FC-001: Capital flowing into AI at unprecedented rates, creating favorable IPO environment

**Falsification criteria:** No defense AI IPO has priced by July 1, 2027. SPAC mergers don't count unless the resulting entity is defense-AI focused.
**What would change my mind:** Defense AI safety incident or program failure. Shield AI or Anduril acquired before IPO. IPO market freeze. Significant defense budget cuts.

**Status updates:**
| Date | Confidence Change | Reason |
|------|-------------------|--------|
| 2026-03-27 | Initial: 65% | Strong trajectory but defense companies often stay private longer |

---

### PRED-006: At Least One State AI Law Faces Legal Challenge Within 6 Months

**Claim:** At least one of the three state AI laws passed the week of April 13, 2026 (Nebraska LB 525, Maryland HB 895, or Maine LD 2082) will face a legal challenge — either an industry lawsuit (trade association or company) or civil liberties challenge (ACLU or similar) — citing federal preemption or First Amendment grounds, by October 14, 2026.
**Confidence:** 65%
**Made:** 2026-04-14
**Check date:** 2026-10-14

**Based on:**
- FC-030: State AI law patchwork creates compliance burden that incentivizes industry challenges
- Pattern: AI industry has actively challenged state regulation (e.g., California SB 1047 opposition campaign in 2024)
- Nebraska's chatbot disclosure requirements and Maine's therapy prohibition could face First Amendment challenges from the AI industry or free speech advocates
- 600+ AI bills across states creates incentive for test-case litigation to establish federal preemption

**Falsification criteria:** No lawsuit, formal legal challenge, or request for injunction filed against any of these three laws by 2026-10-14.
**What would change my mind:** All three laws have broad bipartisan support with no industry opposition; federal AI legislation passes that explicitly preserves state authority; AI industry shifts to a cooperative regulatory posture.

**Status updates:**
| Date | Confidence Change | Reason |
|------|-------------------|--------|
| 2026-04-14 | Initial: 65% | Legal challenges to AI regulation are common but not guaranteed for any specific law |

---

## New Predictions Added 2026-04-26

### PRED-007: First MCP Attestation/Signed-Registry Product Launches by July 15, 2026

**Claim:** At least one production-grade MCP attestation / signed-server-registry product (commercial or major open-source with ≥3 enterprise design partners) ships before 2026-07-15.
**Confidence:** 75%
**Made:** 2026-04-26
**Check date:** 2026-07-15

**Based on:**
- Bitwarden CLI compromise specifically targeting MCP/Claude config files (Apr 23)
- OX Security MCP RCE unresolved at 30+ days; PRED on Anthropic spec update FAILED
- Anthropic Claude Desktop ships undisclosed native messaging bridge (Apr 23)
- AI agent deletes prod database viral (Apr 26)
- No visible Anthropic spec response → third-party attestation product more likely than spec fix
- Enterprise CISO pressure to impose MCP allowlists / signed-server-only policies

**Falsification criteria:** No commercial or major open-source MCP attestation product publicly available by 2026-07-15.
**What would change my mind:** Anthropic ships major MCP spec update with attestation primitives (would close the gap); enterprises adopt lockdown approaches that don't require attestation registries.

---

### PRED-008: Cohere/Aleph Alpha Combined Entity Wins ≥1 EU Sovereign-AI Tender by Dec 31, 2026

**Claim:** The post-merger Cohere-Aleph Alpha entity wins at least one publicly-announced EU government or EU-major-corporation sovereign-AI tender (defense, finance, energy, healthcare, manufacturing, telecom) by December 31, 2026.
**Confidence:** 65%
**Made:** 2026-04-26
**Check date:** 2026-12-31

**Based on:**
- Schwarz Group €500M structured financing — strong EU industrial backer
- STACKIT (Schwarz sovereign cloud) as compute substrate
- Targeted sectors explicitly named at announcement
- EU split on Pax Silica (April 22) creates political opening for non-US sovereign-AI vendors
- FINMA Mythos systemic-risk classification creates demand for non-Anthropic EU-sovereign alternative
- Eden AI traction (200K+ developers) confirms EU market exists

**Falsification criteria:** No publicly announced EU government or EU-major-corporation sovereign-AI tender win by 2026-12-31.

---

### PRED-009: Additional Hyperscaler Publicly Converts ≥5,000 Jobs into AI-Capex Framing by July 31, 2026

**Claim:** At least one of Amazon, Google, Apple, or Meta announces ≥5,000 layoffs or buyouts framed explicitly as funding AI capex (similar to Meta's 8K + Microsoft's 8,750 buyouts in April 2026) by July 31, 2026.
**Confidence:** 70%
**Made:** 2026-04-26
**Check date:** 2026-07-31

**Based on:**
- Meta + Microsoft set the public "payroll → AI capex" framing in same week (April 23-24)
- Competitive pressure on operating margins among hyperscaler peers
- $135B Meta AI capex baseline forces peer responses
- Block/Dorsey AI replacement signal (April 1) was the early indicator

**Falsification criteria:** No additional hyperscaler announces ≥5,000-job AI-capex-framed reduction by 2026-07-31.

---

### PRED-013: AI-Accelerated Pre-Training Explicitly Adopted at 3+ Frontier Labs by Q4 2026

**Claim:** At least 3 of the top 7 frontier labs (Anthropic, OpenAI, Google DeepMind, Meta, xAI, Mistral, DeepSeek) will publicly acknowledge using AI-generated data, AI-directed data curation, or AI-assisted training pipeline management to accelerate their own model pre-training by December 31, 2026.
**Confidence:** 72%
**Made:** 2026-05-27
**Check date:** 2027-01-15

**Based on:**
- FC-066: MOSS 0.25→0.61 production source-level rewriting signals autonomous code modification approaching reliability threshold
- Karpathy confirmed at Anthropic: Claude-accelerates-Claude pre-training (May 22, peterdiamandis podcast — Karpathy explicitly describing his initiative at Anthropic)
- Meta HyperAgents recursive self-improvement (Mar 23, arxiv) — Meta academic research directly on recursive self-improvement agents
- AlphaProof Nexus (May 25) — DeepMind using AI to discover and verify mathematical proofs means AI-assisted research pipeline is already operational at Google DeepMind
- The mechanism is cost-driven: labs paying $1B+/month for compute are highly incentivized to use AI to reduce the data-curation labor and the number of training steps required

**Falsification criteria:** Fewer than 3 frontier labs make a public acknowledgment (blog post, paper, or executive statement) of AI-assisted pre-training by 2027-01-15.
**What would change my mind:** The Karpathy project at Anthropic is quietly cancelled or pivots away from pre-training acceleration; AlphaProof Nexus turns out to be post-training only; MOSS-style approaches hit a hard wall at 0.65 and don't improve further in 2026.

**Status updates:**
| Date | Confidence Change | Reason |
|------|-------------------|--------|
| 2026-05-27 | Initial: 72% | 3 independent signals (Karpathy/Anthropic, Meta HyperAgents, AlphaProof Nexus) from 3 separate labs pointing at the same mechanism. Not yet 80%+ because "public acknowledgment" is a higher bar than internal adoption — labs may be doing this without announcing it. |

---

### PRED-014: An Open-Weight Model Reaches #1 on a Major Customer-Relevant Code Leaderboard by Q4 2026

**Claim:** At least one open-weight model (MIT/Apache/permissive or open-weights license) will hold the **#1** position on a major customer-relevant coding leaderboard (Code Arena / LMArena coding categories, or equivalent) — ahead of all closed frontier models — at some point on or before December 31, 2026.
**Confidence:** 60%
**Made:** 2026-06-17
**Check date:** 2027-01-05

**Based on:**
- **GLM-5.2 (Zhipu, MIT) at #2 Code Arena: Frontend, June 16** — behind only Fable 5 (closed), +29pt over Opus 4.7 Thinking. An open model is now a single rung below the closed SOTA. [Verified: Arena.ai benchmark operator + @mervenoyann — meets Verification Floor]
- Open-weight coding trajectory: GLM-5.1 #1-open on code arena (Apr 10), Kimi K2.6 beat GPT-5.4 + Opus 4.6 on SWE-Bench Pro (Apr 20), Qwen3.6-35B-A3B beat Opus on pelican-SVG (Apr 16) — open models have repeatedly taken #1 on *specific* benchmarks already.
- Release cadence: Chinese open labs (Zhipu, Moonshot, MiniMax, Alibaba, DeepSeek) ship every few weeks; the closed #1 (Fable 5) is a fixed target between releases.
- CONV-006 demand: export controls + sovereign-AI demand reward open labs that close the last rung.

**Falsification criteria:** No open-weight model holds outright #1 on a major customer-relevant coding leaderboard (beating every closed model) at any measured point by 2027-01-05. Holding #2 (current GLM-5.2 state) does NOT satisfy the claim.
**What would change my mind:** A closed lab ships a large discontinuous coding jump (another +8pp Fable-5-style step) that opens the gap back up; major leaderboards saturate or stop reporting closed-vs-open; Chinese open-lab release cadence slows due to commercialization (cf. Alibaba revenue pivot, Apr 11).

**Status updates:**
| Date | Confidence Change | Reason |
|------|-------------------|--------|
| 2026-06-17 | Initial: 60% | GLM-5.2 at #2 (behind only Fable 5) is the closest an open model has come to closed-SOTA #1 on a customer-relevant coding board. 60% (not higher) because #1 requires either an open jump or a closed stall, and Anthropic's +8pp Fable-5 step shows closed labs can still discontinuously extend the lead. |

---

## Resolved Predictions

### Correct
| ID | Claim | Confidence | Made | Resolved | Based On | Notes |
|----|-------|-----------|------|----------|----------|-------|
| | | | | | | |

### Incorrect
| ID | Claim | Confidence | Made | Resolved | Why Wrong | Lesson |
|----|-------|-----------|------|----------|-----------|--------|
| (PRED-Apr22-MCP-spec) | MCP spec updated to address OX Security RCE within 30 days (by 2026-05-18) | 0.60 (downgraded from 0.75) | 2026-04-20 | 2026-04-26 (failed early at 30 days) | Mechanism wrong — predicted Anthropic-side spec fix; actual mechanism is third-party attestation gap with no spec response. Bitwarden compromise added new attack vector during the window without spec movement. | When predicting protocol-level fixes from a single vendor, weigh whether vendor incentives align with the fix vs whether enterprise demand routes to third-party solutions. Anthropic's incentive on MCP is to grow adoption, not slow it via attestation overhead — third-party was always the more likely route. Classification: WRONG_MECHANISM. |

### Partially Correct
| ID | Claim | What Was Right | What Was Wrong | Lesson |
|----|-------|---------------|---------------|--------|
| PRED-002 | Apple announces user-selectable multi-model Siri at WWDC 2026 | Apple rebuilt Siri on a frontier model (Apple–Gemini partnership, June 12) — directional thesis correct | Deal is exclusive to Gemini, not user-selectable multi-model — the structural specific was wrong (and was its own listed falsifier) | Separate the *directional* claim ("Apple rents a frontier brain") from the *structural* claim ("user-selectable, multiple providers"). The structure is a distinct, lower-confidence variable; don't bundle it into a high-confidence directional bet. |

## Prediction Performance Dashboard

| Period | Total | Correct | Incorrect | Partial | Accuracy | Calibration Notes |
|--------|-------|---------|-----------|---------|----------|-------------------|
| 2026-Q1 (initial) | 5 | — | — | — | Pending | First predictions made 2026-03-27. Earliest check date: 2026-06-15 (PRED-002). |

> **Calibration check:** Of predictions made at 70% confidence, approximately 70% should be correct. If 90% are correct, confidence levels are too conservative. If 50% are correct, reasoning is flawed.
