---
name: Velocity Trackers
description: Tracks rate-of-change and acceleration of key AI landscape metrics
tags:
  - system
  - force-dynamics
  - velocity
  - metrics
last_updated: 2026-04-02
---

# Velocity Trackers

> **What this tracks:** How fast key metrics are moving and whether they are accelerating, decelerating, or plateauing. The velocity (rate of change) and acceleration (change in rate of change) matter more than the absolute value.

## How to Read This

| Column | Meaning |
|--------|---------|
| Metric | What we're measuring |
| Current Value | Latest known data point with date |
| Prior Value | Previous data point with date |
| Velocity | Rate of change (computed: value delta / time delta) |
| Acceleration | Is the velocity increasing, stable, or decreasing vs. the prior period |
| Source | Where the data point came from |

## Tracked Metrics

### Category: Cost & Economics

| ID | Metric | Current Value | Date | Prior Value | Date | Velocity | Acceleration | Source |
|----|--------|--------------|------|-------------|------|----------|-------------|--------|
| V-01 | Inference cost per 1M tokens (frontier) | | | | | | | |
| V-02 | Training cost for frontier model | | | | | | | |
| V-03 | VRAM cost per GB (consumer, 32GB workstation) | ~$30/GB ($949 for 32GB) | 2026-03-26 | ~$50/GB (NVIDIA RTX Pro 4000 at $1600/32GB) | ~2025 | -40% YoY | Accelerating downward | Intel Arc Pro B70 launch |
| V-04 | KV-cache compression ratio (zero accuracy loss) | 6x (TurboQuant) | 2026-03-25 | ~2x (standard quantization) | ~2025 | 3x improvement in ~12 months | Accelerating (RotorQuant claims 10-19x within 24hrs) | Google Research / Reddit |

### Category: Capability

| ID | Metric | Current Value | Date | Prior Value | Date | Velocity | Acceleration | Source |
|----|--------|--------------|------|-------------|------|----------|-------------|--------|
| V-05 | Agent task autonomy duration (METR benchmark) | 4+ hours | 2026-03-20 | ~2 hours | ~2025-08 | Doubling every ~7 months | Stable | metr.org |
| V-06 | MCP SDK monthly downloads | 97M | 2026-03-09 | | | | | thenewstack.io |
| V-07 | Enterprise agent production task success rate | 37.4% | 2026-03-14 | | | | | ArXiv (EnterpriseOps-Gym) |
| V-08 | Desktop agent task success rate (professional apps) | ~40% (60% failure) | 2026-03-26 | | | | | CUA-Suite ArXiv |
| V-09 | Frontier model FrontierMath score | ~50% (GPT-5.4 Pro) | 2026-03-26 | 5% (GPT-4) | ~2025-03 | ~45 percentage point gain in 12 months | Accelerating | ARC-AGI-3 release context |
| V-10 | Open-weight model vs closed model parity (web nav) | 8B open > GPT-4o | 2026-03-25 | | | | | MolmoWeb (AI2) |

### Category: Capital

| ID | Metric | Current Value | Date | Prior Value | Date | Velocity | Acceleration | Source |
|----|--------|--------------|------|-------------|------|----------|-------------|--------|
| V-11 | Largest single AI investment | $40B (SoftBank bridge) | 2026-03-27 | $30B (OpenAI Series G) | 2026-02 | +$10B/month | Accelerating | Bloomberg |
| V-12 | OpenAI total private funding (single round) | $122B at $852B valuation | 2026-03-31 | $120B at $730B valuation | 2026-03-25 | +$122B in valuation in 6 days — Amazon $50B anchor | Accelerating | TechCrunch/OpenAI |
| V-13 | Anthropic ARR growth rate vs OpenAI | 10x/year (Anthropic) vs 3.4x/year (OpenAI) | 2026-04-01 | ~$3.3B/month growth | 2026-03-27 | Epoch AI projects Anthropic overtakes OpenAI revenue by mid-2026 | Accelerating (gap widening) | Bloomberg/Epoch AI |
| V-14 | OpenAI ad revenue | $100M ARR | 2026-03-27 | $0 (pre-launch) | 2026-02 | $100M ARR in 6 weeks | New metric | CNBC |
| V-15 | Defense AI company valuation (Shield AI) | $12.7B | 2026-03-27 | $5.3B | ~2025-03 | +140% YoY | Accelerating | TechCrunch |
| V-16 | Legal AI company valuation (Harvey) | $11B | 2026-03-25 | $8B | 2025-12 | +$1B/month | Accelerating | Bloomberg |
| V-27 | Q1 global venture funding | $300B (Q1 2026) | 2026-04-02 | ~$120B (Q1 2025 estimated) | 2025-Q1 | +150% YoY | Accelerating | Crunchbase |
| V-28 | China domestic AI chip market share | 41% (2025, IDC) | 2026-04-02 | ~25% (2024 estimated) | 2024 | +16pp YoY | Accelerating | IDC/Reuters |

### Category: Adoption & Infrastructure

| ID | Metric | Current Value | Date | Prior Value | Date | Velocity | Acceleration | Source |
|----|--------|--------------|------|-------------|------|----------|-------------|--------|
| V-17 | Codex weekly active users | 1.6M | 2026-03-27 | | | | | The Decoder |
| V-18 | Meta datacenter investment (El Paso single facility) | $10B | 2026-03-27 | $1.5B (original plan) | ~2025 | 6.6x escalation | Accelerating | CNBC |
| V-19 | Countries with AI regulation enacted | | | | | | | |
| V-20 | obra/superpowers GitHub stars velocity | 2,800 stars/day | 2026-03-27 | | | | | GitHub Trending |
| V-21 | Waymo weekly paid rides | 500,000/week | 2026-03-30 | ~150,000/week | 2025-07 | 3x growth in ~9 months | Accelerating | Waymo blog |
| V-22 | Humanoid robot units shipped (Agibot) | 10,000 cumulative | 2026-03-30 | — | — | First to reach this milestone | New metric | agibot.com |
| V-23 | Open-weight TTS quality vs commercial (ElevenLabs) | 63% win rate (Voxtral vs ElevenLabs) | 2026-03-30 | <50% (parity not reached) | 2026-03 | Crossed quality threshold | Accelerating | mistral.ai |
| V-24 | Embedding cost reduction (vs prior frontier) | 5-30x cheaper (pplx-embed) | 2026-03-30 | baseline | 2026-03 | New low | Accelerating | perplexity.ai |
| V-25 | AI pharma deal size | $2.75B (Eli Lilly + Insilico) | 2026-03-30 | $1B (typical large deal) | ~2025 | Largest AI drug deal | Accelerating | businesswire.com |
| V-26 | npm critical AI package compromises per month | 2 (axios + LiteLLM, Mar 25-31) | 2026-03-31 | 0 | 2026-02 | New attack vector targeting AI developer toolchain | New metric | reddit.com, docs.litellm.ai |

## Velocity Alerts

> When a metric's acceleration changes sign (speeding up starts slowing down, or vice versa), flag it here. These are leading indicators.

| Date | Metric | Change | Implication |
|------|--------|--------|-------------|
| 2026-03-30 | V-23 (Open TTS quality) | Voxtral crosses the quality threshold — open-weight TTS now beats commercial at 63% preference rate | The commercial TTS moat (ElevenLabs, PlayHT) is breaking. Voxtral for voice is the equivalent of early open-source LLMs matching GPT-4 quality. Revenue pressure on commercial TTS starts now. |
| 2026-03-30 | V-21 (Waymo weekly rides) | 500K/week, 3x growth in 9 months — acceleration intact | Robotaxi demand is not hitting a ceiling at current scale. At this growth rate, Waymo could reach 2M+ weekly rides by end of 2026, which transforms its unit economics and competitive positioning. |
| 2026-03-30 | V-25 (AI pharma deal size) | $2.75B Eli Lilly deal — largest AI drug discovery commitment by a major pharma | Signals that "AI drug discovery" has crossed from experimental to strategic for big pharma; more deals of this scale likely in 2026. |
| 2026-03-27 | V-13 (Anthropic revenue) | Revenue doubling from ~$9B to $19B in ~3 months — acceleration increasing | Anthropic approaching IPO viability faster than market expected. IPO timeline credible for Q4 2026. |
| 2026-03-26 | V-04 (KV-cache compression) | RotorQuant claims 10-19x within 24 hours of TurboQuant's 6x — acceleration spike | Memory compression techniques advancing faster than hardware cycles. Memory stock selloff (Samsung -4.71%, SK Hynix -6.23%) reflects market recognizing this. |
| 2026-03-26 | V-09 (FrontierMath scores) | GPT-5.4 Pro scored ~50% vs GPT-4's 5% — 10x improvement triggers new benchmark (ARC-AGI-3) | Benchmarks saturating faster than expected. The fact that benchmark designers are racing to create harder tests is itself a velocity signal. |

## Update Rules

- Update metric values whenever a signal provides a new data point.
- Compute velocity only when two data points exist with known dates.
- Compute acceleration only when three data points exist.
- Flag any metric where acceleration changes direction — this is a leading indicator of trend shifts.
- Metrics without data for 60+ days: mark as `stale` and note why.
