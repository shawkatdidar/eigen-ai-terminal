---
name: Revenue-Per-Compute Strategic Framework
description: Framework for analyzing AI company strategic moves by tracking revenue generated per unit of compute consumed — kills, launches, and pivots reveal optimization priorities
tags:
  - framework
  - strategy
  - business
  - compute-economics
  - evaluation
discovered: 2026-03-25
session: 4
related:
  - "[[ai-compute-evaluation-framework]]"
  - "[[compound-reliability-agent-workflows]]"
nodes:
  - "[[ai-business-funding]]"
  - "[[compute-hardware]]"
  - "[[ai-in-enterprise]]"
---

# Revenue-Per-Compute Strategic Framework

## The Core Insight

When an AI company kills a product while launching another, the strategic signal is in the **revenue-per-compute ratio**. Companies optimize for the highest revenue generated per unit of GPU/compute consumed.

## The Framework

For any major AI company action, ask:

1. **What was the revenue per GPU-hour of the thing they killed?** (Low → that's why it died)
2. **What is the revenue per GPU-hour of the thing they launched?** (Higher → that's the strategic direction)
3. **Where is the CEO's attention going?** (Infrastructure vs. product tells you which constraint they're hitting)

## Origin: OpenAI's Four Moves (March 25, 2026)

Four announcements on the same day:
1. **Killed Sora** (video generation) — extremely high compute cost, limited revenue, no ad revenue
2. **Raised $10B more** — capital for infrastructure
3. **Launched agentic commerce protocol** (Walmart, Shopify) — low compute per transaction, high revenue per transaction
4. **Altman shifted focus to infrastructure** — the CEO going to the constraint

Reading them together: **pre-IPO optimization of revenue-per-GPU-hour.** Kill the GPU-hungry/low-revenue product, launch the low-compute/high-revenue product, raise capital for the infrastructure that the remaining profitable products need.

## Application Rules

### When a company kills a product:
Don't ask "was it a bad product?" Ask: "what was its revenue-per-compute, and what's replacing it?"

### When a company launches a product:
Don't ask "is this innovative?" Ask: "what's the compute cost per user interaction, and what's the revenue model?"

### When a CEO changes focus:
Track whether they're moving toward product (demand-limited) or infrastructure (supply-limited). The constraint they're addressing reveals what they believe will limit growth.

## The Zitron Test (added 2026-04-02)

Ed Zitron's "Subprime AI Crisis" analysis adds the macro version:
- **Anthropic:** $5B revenue, $10B compute spend → revenue-per-compute ratio < 0.5
- **OpenAI:** $4.3B revenue, $8.67B inference costs → revenue-per-compute ratio < 0.5

When the entire industry has revenue-per-compute below 1.0, every dollar of AI service is being sold below cost. This is VC-subsidized pricing. The strategic question becomes: **who reaches ratio > 1.0 first?**

## Applies To

- Evaluating AI company earnings, product launches, and shutdowns
- Predicting which AI products survive vs get killed
- Understanding pricing decisions (why free tiers exist, when they'll end)
- Assessing IPO readiness (profitability requires ratio > 1.0)
