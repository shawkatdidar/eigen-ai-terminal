---
name: Prediction Registry
description: Dated, falsifiable predictions with check dates and outcome tracking
tags:
  - system
  - force-dynamics
  - predictions
  - accountability
last_updated: 2026-04-02
total_predictions: 5
correct: 0
incorrect: 0
pending: 5
accuracy_rate: N/A
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

### PRED-001: Anthropic Files for IPO by End of 2026

**Claim:** Anthropic will file an S-1 (IPO registration document) with the SEC by December 31, 2026.
**Confidence:** 83%
**Made:** 2026-03-27
**Check date:** 2027-01-15

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

---

### PRED-002: Apple Announces Multi-Model Siri at WWDC June 2026

**Claim:** Apple will announce at WWDC 2026 (expected June 8-12) that iOS 27 allows users to select alternative AI assistants (Claude, Gemini, etc.) as Siri backends, extending the current ChatGPT integration model.
**Confidence:** 85%
**Made:** 2026-03-27
**Check date:** 2026-06-15

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

## Resolved Predictions

### Correct
| ID | Claim | Confidence | Made | Resolved | Based On | Notes |
|----|-------|-----------|------|----------|----------|-------|
| | | | | | | |

### Incorrect
| ID | Claim | Confidence | Made | Resolved | Why Wrong | Lesson |
|----|-------|-----------|------|----------|-----------|--------|
| | | | | | | |

### Partially Correct
| ID | Claim | What Was Right | What Was Wrong | Lesson |
|----|-------|---------------|---------------|--------|
| | | | | |

## Prediction Performance Dashboard

| Period | Total | Correct | Incorrect | Partial | Accuracy | Calibration Notes |
|--------|-------|---------|-----------|---------|----------|-------------------|
| 2026-Q1 (initial) | 5 | — | — | — | Pending | First predictions made 2026-03-27. Earliest check date: 2026-06-15 (PRED-002). |

> **Calibration check:** Of predictions made at 70% confidence, approximately 70% should be correct. If 90% are correct, confidence levels are too conservative. If 50% are correct, reasoning is flawed.
