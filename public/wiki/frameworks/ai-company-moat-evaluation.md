---
name: AI Company Moat Evaluation Framework
description: Three-layer framework for evaluating which AI companies have durable competitive advantages — applies to investment analysis, build-vs-buy decisions, and opportunity identification
tags:
  - investment
  - evaluation
  - moats
  - saas
  - strategy
discovered: 2026-04-09
session: 12
related:
  - "[[ai-business-funding]]"
  - "[[ai-in-enterprise]]"
  - "[[ai-coding-tools]]"
  - "[[ai-agents]]"
  - "[[resources/frameworks/model-platform-inversion]]"
nodes:
  - ai-business-funding
  - ai-in-enterprise
---

# AI Company Moat Evaluation Framework

## Core Insight

As AI capabilities become transferable and cheap (Master Key Hypothesis, April 2026 — capabilities transfer between models without retraining), the source of durable competitive advantage shifts. Companies whose value comes from AI *capability* are vulnerable. Companies whose value comes from *integration*, *data loops*, and *switching costs* become more valuable as AI gets cheaper.

The April 9, 2026 SaaS crash (-40% YTD) demonstrated that the market is beginning to reprice this — but it's repricing ALL software equally, creating mispricing opportunities for companies that hold the right kind of moat.

## The Three-Layer Moat Stack

### Layer 1: Integration Moat
**What it is:** Value from connecting systems, managing workflows, holding institutional context, orchestrating across teams — NOT from the AI model itself.

**Why it's durable:** Integration is messy, organization-specific, and requires trust. AI models are commodities; the connective tissue that makes AI usable inside institutions is not.

**How to evaluate:**
- Does the company connect 3+ systems/data sources that don't natively talk to each other?
- Would replacing this company require rebuilding institutional workflows, not just swapping an API?
- Is the company's value proposition "we make AI work inside your existing stack" rather than "we have better AI"?

**Examples from signals:**
| Company | Integration Moat | Why It's Durable |
|---------|-----------------|------------------|
| Cursor | Multi-model IDE + full engineering pipeline | Connects GitHub, models, testing, deployment in one surface |
| Visa (Intelligent Commerce Connect) | AI agent payment orchestration | Bridges agent ecosystem to existing merchant payment infrastructure |
| EY Canvas | Audit workflow across 150 countries | Institutional knowledge of audit procedures + regulatory compliance |
| Deliverect | Restaurant operations across platforms | Connects POS, delivery apps, inventory, menu optimization |
| Snowflake (Project Snowwork) | Enterprise data across silos | Holds the data that AI agents need to act on |

**Red flags (weak integration moat):**
- Company provides AI capability that can be accessed via a direct API call
- No institutional data lock-in
- Integration layer is thin (just an API wrapper)

---

### Layer 2: Data Flywheel
**What it is:** The product gets better from being used. User behavior generates proprietary data that improves the product, which attracts more users, which generates more data. This is the hardest moat to replicate because it requires BOTH the product AND the user base.

**Why it's durable:** AI models are transferable (Master Key). Proprietary datasets built from millions of user interactions are NOT transferable. A competitor can copy your features but cannot copy your data.

**How to evaluate:**
- Does user behavior (clicks, corrections, feedback, usage patterns) directly improve the product for ALL users?
- Is the improvement measurable? (e.g., Cursor Bugbot: 52% → 80% resolution rate from 44,000 learned rules across 110,000 repos)
- Does the flywheel compound? (more users → more data → better product → more users)
- How long would a new entrant need to replicate the dataset? (If answer is "years of user behavior at scale" — strong moat)

**Examples from signals:**
| Company | Data Flywheel | Dataset Size | Compounding? |
|---------|--------------|-------------|--------------|
| Cursor (Bugbot) | Developer feedback on code reviews → learned rules | 44,000 rules from 110,000 repos | Yes — every repo interaction adds rules |
| Google Search | Click behavior → ranking signals | Decades of search data | Yes — strongest flywheel in tech |
| Intercom (Fin Apex) | Customer service conversations → vertical fine-tuning | Domain-specific training data | Yes — beats frontier models at its domain |
| Tesla (FSD) | Driving data from fleet → model improvement | Billions of miles | Yes — every car is a data collector |

**Red flags (no data flywheel):**
- Product quality depends only on the underlying model, not user-generated data
- Switching to a competitor wouldn't lose any accumulated learning
- Company could be replicated in a weekend with the same API access

---

### Layer 3: Switching Cost
**What it is:** The cost (time, money, risk, lost customization) of leaving the product. In AI, switching costs come from accumulated configuration, learned preferences, institutional memory, and workflow dependencies.

**Why it's durable:** Even if a competitor offers a better product, the switching cost creates inertia. In AI products, switching costs compound because the product learns your specific patterns.

**How to evaluate:**
- Does the product accumulate organization-specific knowledge over time? (custom rules, preferences, workflows)
- Would switching require re-teaching a new system months of institutional context?
- Are downstream systems dependent on this product's outputs? (e.g., if your CI/CD pipeline depends on Cursor's review rules, switching means rebuilding the pipeline)
- Is there a "cold start" problem for competitors? (they'd start at zero for your org even if their general capability is equal)

**Examples from signals:**
| Company | Switching Cost Source | Cold Start Problem? |
|---------|---------------------|-------------------|
| Cursor | 44K learned rules tuned to YOUR codebase | Yes — new tool starts at 0 rules for your repo |
| Salesforce (Agentforce) | CRM data + workflow automations + agent configurations | Yes — years of customer data and process flows |
| EY Canvas | 1.4 trillion journal entries of institutional audit knowledge | Yes — regulatory context is org-specific |
| Microsoft 365 E7 | Document corpus + Copilot training + Agent 365 governance rules | Yes — entire productivity stack is locked in |

---

## How to Use This Framework

### For Investment Analysis
Score any AI/software company on all three layers:

| Layer | Score | Criteria |
|-------|-------|----------|
| Integration Moat | 0-3 | 0 = API wrapper. 1 = connects 2 systems. 2 = deep multi-system orchestration. 3 = irreplaceable institutional connector. |
| Data Flywheel | 0-3 | 0 = no user data improves product. 1 = basic usage analytics. 2 = user behavior directly improves product. 3 = massive proprietary dataset that compounds. |
| Switching Cost | 0-3 | 0 = switch in a day. 1 = week of reconfiguration. 2 = months of lost institutional context. 3 = switching is effectively a systems migration. |

**Total score interpretation:**
- **7-9:** Strong moat — likely undervalued if caught in broad AI-fear selloff (like current SaaS crash)
- **4-6:** Moderate moat — evaluate case-by-case
- **0-3:** Weak moat — AI capability companies vulnerable to commoditization; the market may be correctly repricing these

### For Opportunity Identification
When evaluating what to build:
- **Don't build capability** (AI models, generation tools) — this gets commoditized fastest
- **Build integration** — connect AI to messy real-world workflows that require institutional context
- **Design for data flywheel from day one** — every user interaction should generate data that makes the product better for everyone
- **Create switching costs through accumulated learning** — the product should get harder to leave over time

### For Evaluating Build Ideas
Apply to any AI Radar build idea:
1. Does this idea have an integration moat? (If not, a frontier lab will ship it as a feature)
2. Can a data flywheel be designed in? (If not, the product is a commodity)
3. Will switching costs accumulate? (If not, users leave when something shinier appears)

---

## Where This Framework Breaks

- **Platform shifts** — when the entire platform changes (e.g., mobile → AI agents), integration moats built on the old platform can evaporate
- **Open-source disruption** — if the integration layer itself gets open-sourced (MCP is doing this to tool connectivity)
- **Regulatory mandates for portability** — EU data portability rules could weaken switching costs
- **Velocity of AI improvement** — if AI capabilities improve so fast that integration layers need constant rebuilding, the moat erodes

---

## Applies To

- Evaluating public AI/software companies for investment
- Scoring AI Radar opportunity pipeline items
- Evaluating build-vs-buy decisions for AI tools
- Assessing competitive dynamics in any AI Radar node
- Filtering the signal from noise in the SaaS repricing wave
