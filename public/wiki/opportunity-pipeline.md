---
name: Opportunity Pipeline
description: Personal opportunity tracker — from detection to action
tags:
  - system
  - force-dynamics
  - opportunities
  - personal
  - action
last_updated: 2026-03-30
---

# Opportunity Pipeline

> **What this tracks:** Personal opportunities — investments, businesses, communities, skills — that emerge from force dynamics analysis. Designed for someone with a full-time job. Not "start a startup" but "here's what to do this week."

## Pipeline Stages

| Stage | Meaning | Time Commitment | Action |
|-------|---------|----------------|--------|
| `detected` | Force dynamics flagged an opportunity | 0 min — system identifies it | Read the signal, decide if worth researching |
| `researching` | Actively gathering information | 1-2 hours total | Check market, competition, feasibility |
| `validated` | Evidence confirms the opportunity is real | Completed research | Decide whether to act |
| `actionable` | Clear next steps identified | Ready to execute | Do the thing |
| `in-progress` | Actively pursuing | Ongoing | Track progress |
| `realized` | Value captured | — | Document outcome |
| `passed` | Decided not to pursue | — | Document why (may revisit) |
| `expired` | Window closed | — | Document what happened |

## Active Pipeline

### Investments & Financial Positions

| ID | Opportunity | Stage | Source | Thesis | Next Action | Deadline | Est. Value |
|----|------------|-------|--------|--------|-------------|----------|-----------|
| OP-I-001 | Anthropic IPO positioning | `detected` | CONV-003, V-13 | Revenue doubling ($9B→$19B in 3 months). IPO expected Q4 2026 at $60B+ raise. One of the largest tech IPOs in history. | Monitor S-1 filing timeline; research IPO allocation methods accessible to individual investors (Robinhood IPO access, etc.) | Q3 2026 (before filing) | Unknown — depends on allocation access |
| OP-I-002 | Defense AI sector exposure | `detected` | CONV-001, V-15 | Defense AI becoming multi-hundred-billion-dollar category. Shield AI at $12.7B, likely IPO candidate. Palantir already public with AI defense exposure. | Research public companies with AI defense exposure: Palantir (PLTR), L3Harris (LHX), Northrop Grumman (NOC). Check if any defense AI ETFs exist. | Ongoing | Unknown |
| OP-I-003 | AI infrastructure energy plays | `detected` | BN-004, FC-001 | Datacenter expansion driving unprecedented power demand. Meta $10B El Paso, Microsoft 700MW Texas. Companies providing power infrastructure have structural demand tailwinds. | Research utility companies in major datacenter regions (Texas, Virginia). Check: Vistra (VST), NextEra Energy (NEE), Constellation Energy (CEG). | Ongoing | Unknown |
| OP-I-004 | Memory stock dislocation after TurboQuant | `detected` | V-04, FC-007 | Samsung -4.71%, SK Hynix -6.23% after TurboQuant. Market may be overreacting if Jevons Paradox holds (efficiency gains increase total demand). Counter-thesis: compression techniques will permanently reduce memory demand per inference. | Research whether the selloff is overdone — check total memory demand forecasts vs compression impact. | 1-2 weeks (short-term dislocation) | Unknown |

**Investment Decision Framework:**
- **Public market signal strength:** Does force dynamics give an edge on timing or direction that the market hasn't priced?
- **Time horizon match:** Does the opportunity match a weeks/months timeline, not years?
- **Asymmetry:** Is the upside significantly larger than the downside?
- **Conviction source:** Is this backed by a convergence (high confidence) or a single force chain (lower confidence)?

### Businesses & Projects

| ID | Opportunity | Stage | Source | Target Audience | Revenue Model | Next Action | Time to Revenue |
|----|------------|-------|--------|----------------|---------------|-------------|----------------|
| OP-B-001 | MCP Validator/Linter | `researching` | BN-002, FC-003 | DevOps teams deploying MCP servers; AI tool developers building agent integrations | Open-source core + paid enterprise tier (auto-fix, CI/CD integration, compliance reporting) | Build a CLI that takes an MCP server manifest and checks it against the formal spec. Use the ArXiv paper's findings as the validation ruleset. | 4-8 weeks if open-source gets traction |
| OP-B-002 | Codex Plugin development | `detected` | FC-005 | 1.6M weekly Codex users. Developers wanting CI/CD, monitoring, or database integrations. | Freemium plugins with pro tiers. Distribution through Codex plugin marketplace. | Research the Codex Plugin SDK. Identify which high-demand workflow category has the fewest existing plugins. | 2-4 weeks for a popular category |
| OP-B-003 | Voxtral-powered TTS API service | `detected` | FC-009, V-23 | Developers currently paying ElevenLabs/PlayHT for voice generation. Estimated market: 50K+ companies paying for TTS APIs. | Managed hosting of Voxtral at lower cost than ElevenLabs with SLA guarantees. Tiered pricing by volume. | Check Voxtral license terms (Mistral licensing), estimate hosting cost on GPU rental, model margin vs ElevenLabs pricing. | 2-4 weeks for MVP if license permits commercial deployment |
| OP-B-004 | Vertical AI model fine-tuning service (Intercom Fin Apex pattern) | `detected` | FC-009 (indirect), CONV-004 (seed) | Mid-market companies in specific domains (legal, HR, finance support, healthcare) that currently use GPT-5.4/Claude for domain tasks | Outcome-based pricing: "Our model beats GPT-5.4 on your specific task, or you don't pay." Fine-tune open models on client data for domain-specific use cases. | Identify 3 domains where (a) the task is well-defined, (b) there's existing benchmark data, (c) open models are available to fine-tune. Start with one domain prototype. | 4-8 weeks for first domain prototype |
| OP-B-005 | AI behavioral safety audit tool (sycophancy/scheming detection) | `detected` | CONV-004, FC-011 | Enterprise compliance and security teams; organizations deploying AI in regulated industries (finance, healthcare, legal) | SaaS audit tool that tests AI deployments for sycophancy, scheming, and manipulation. Monthly subscription. Compliance report generation. | Research what metrics the Science sycophancy paper uses; see if they're reproducible in an automated testing framework. | 6-12 weeks; demand accelerating as regulations develop |

**Business Viability Filters (for someone with a full-time job):**
- Can MVP ship in < 2 weekends?
- Does it require ongoing daily maintenance, or can it run mostly autonomously?
- Is the first customer identifiable (not "companies" but "this specific type of person/company")?
- Does it compound — does each customer/user make the next one easier to get?

### Communities & Audience Building

| ID | Opportunity | Stage | Source | Platform | Niche | Next Action | Growth Signal |
|----|------------|-------|--------|----------|-------|-------------|--------------|
| OP-C-001 | AI Force Dynamics newsletter/content | `detected` | All force dynamics outputs | Substack, LinkedIn, X | "Not AI news — AI forces. What today's signals push, enable, and predict." Causal analysis, not signal regurgitation. | Write 3 sample posts from existing brief + force dynamics data. Test on LinkedIn/X for engagement before launching newsletter. | Engagement rate on test posts; email signups |
| OP-C-002 | Public prediction tracker | `detected` | PRED-* | Obsidian Publish or simple web page | Public, scored, falsifiable AI predictions with accountability. Most AI commentary makes vague predictions — this would be transparent with check dates and scoring. | Wait until 10+ predictions exist with at least one resolved, then publish the tracker publicly. | Prediction accuracy as credibility signal; shares/references |

**Community Viability Filters:**
- Is there an underserved audience asking questions nobody is answering well?
- Can content creation be partially automated (AI Radar outputs as content source)?
- Does the niche grow with the AI landscape (not a one-time topic)?

### Skills & Positioning

| ID | Skill/Position | Stage | Source | Why Now | Investment | Expected Payoff |
|----|---------------|-------|--------|---------|-----------|----------------|
| OP-S-001 | Force dynamics / causal reasoning | `in-progress` | All | Building this system IS the skill development. Tracing second-order consequences of signals — understanding not just what happened but what it pushes — is the highest-leverage analytical skill in a fast-moving landscape. | Daily: 15-30 min reviewing force dynamics outputs. | Better investment timing, better business ideas, content differentiator, strategic thinking ability that compounds. |
| OP-S-002 | MCP protocol literacy | `detected` | BN-002, FC-003, V-06 | MCP at 97M downloads and growing. Understanding the protocol deeply (what it can and cannot express, per the formal analysis) positions you to evaluate agent tools, build on the ecosystem, and spot gaps. | 2-3 hours: read the MCP spec + the formal analysis paper. | Ability to evaluate every new "AI agent tool" announcement with technical precision. Foundation for OP-B-001. |
| OP-S-003 | AI-assisted development (Claude Code, Cursor) | `in-progress` | V-17 (Codex 1.6M users), Kitchen Loop, Reco JSONata rewrite | AI coding tools are the fastest-growing developer category. Mastery now compounds — each project builds skill with the tools that are becoming standard. | Ongoing: using Claude Code for all AI Radar development. | Productivity multiplier for all business opportunities. Foundation for OP-B-002. |

**Skill Priority Framework:**
- Does this skill become MORE valuable as AI advances (not automatable)?
- Does it connect to a convergence or velocity trend?
- Can it be demonstrated publicly (builds reputation)?
- Does it compound with existing knowledge (economics, system dynamics, market intelligence)?

## Weekly Action List

> Generated each week from the pipeline. Maximum 3 actions. Must be completable alongside a full-time job.

**Week of 2026-03-30:**

1. **Check Voxtral license + estimate hosting margin** (OP-B-003) — Read Mistral's license for Voxtral. Can it be commercially hosted? If yes, estimate GPU cost per 1M characters on A100 rental vs ElevenLabs pricing. If the margin is >50%, build a simple test deployment. — *Time: 2 hours*
2. **Identify the one vertical domain for the fine-tuning service** (OP-B-004) — Pick one domain from: (a) HR/onboarding Q&A, (b) legal contract Q&A, (c) IT helpdesk. Find the public benchmark dataset for that domain. Check if Intercom's approach (fine-tune on domain conversations) is reproducible with open models. — *Time: 1-2 hours*
3. **Write 1 sample AI Force Dynamics post** (OP-C-001) — Use the March 30 force dynamics: "Voxtral breaks ElevenLabs' moat — what it means for voice-first applications." Concrete prediction + mechanism. Test on LinkedIn/X. — *Time: 1 hour*

## Realized Opportunities (Track Record)

| ID | Opportunity | Type | Invested | Returned | Duration | Lesson |
|----|------------|------|----------|----------|----------|--------|
| | | | | | | |

## Passed / Expired (with Reasons)

| ID | Opportunity | Why Passed/Expired | Could Revisit If |
|----|------------|-------------------|------------------|
| | | | |
