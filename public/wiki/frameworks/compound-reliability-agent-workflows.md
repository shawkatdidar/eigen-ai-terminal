---
name: Compound Reliability in Agent Workflows
description: Framework for evaluating agent performance in multi-step tasks — why per-step accuracy compounds exponentially and how to engineer around it
tags:
  - framework
  - agents
  - reliability
  - evaluation
  - pricing
discovered: 2026-04-02
session: 7
related:
  - "[[agent-architecture-skeleton]]"
  - "[[ai-compute-evaluation-framework]]"
  - "[[evolution-gpt-to-agents]]"
nodes:
  - "[[ai-agents]]"
  - "[[ai-coding-tools]]"
  - "[[ai-in-enterprise]]"
---

# Compound Reliability in Agent Workflows

## The Core Insight

A single-step benchmark gap of 4% becomes a 26-point gap in a 10-step workflow. Per-step reliability compounds exponentially across sequential steps.

**The math:**
- Task success rate = (per-step success rate) ^ (number of steps)
- 93% per step × 10 steps = **48%** task success
- 97% per step × 10 steps = **74%** task success
- 99% per step × 10 steps = **90%** task success

| Per-Step | 5 Steps | 10 Steps | 15 Steps | 20 Steps |
|----------|---------|----------|----------|----------|
| 99% | 95% | 90% | 86% | 82% |
| 97% | 86% | 74% | 63% | 54% |
| 95% | 77% | 60% | 46% | 36% |
| 93% | 70% | 48% | 34% | 24% |
| 90% | 59% | 35% | 21% | 12% |

## Why This Matters for Pricing

This is why a model at $22.50/M tokens can coexist with a model at $0.90/M tokens serving the "same" capability. They serve fundamentally different use cases:

- **Single-step tasks** (chatbots, Q&A, one-shot generation): the 4% gap is invisible. Use the cheap model.
- **Multi-step agent tasks** (enterprise workflows, coding agents, autonomous research): the 4% gap compounds into a chasm. The expensive model's 25x price premium is justified by 1.5-3x higher task completion rates.

## Where Failures Cluster

The extra failures in cheaper/smaller models are NOT randomly distributed. They concentrate on:

1. **Ambiguous instructions** — where the model must resolve uncertainty without asking for clarification
2. **Long-context reasoning** — where 15+ prior steps must be held in working memory simultaneously
3. **Novel edge cases** — inputs slightly outside the training distribution
4. **Complex tool interactions** — multi-tool compositions where protocol limitations (e.g., [[MCP]] expressivity gaps) create silent failures

More active parameters = more computational paths to find the right answer on hard cases. This is why retrying the same step on the same model often fails the same way.

## Three Approaches to Agent Reliability Engineering

### 1. Smart Model Routing

Route easy steps to cheap models, hard steps to expensive models. Pay premium prices only for the 20-30% of steps that need it.

**How it works:**
- A classifier (can be rule-based or a small LLM) evaluates each step's complexity
- Simple steps → cheap model (e.g., Haiku, Gemma 4)
- Complex reasoning steps → expensive model (e.g., Opus)
- Total cost drops 70-80% while keeping compound reliability close to expensive-everywhere

**Real-world example:** oh-my-claudecode (21.9K GitHub stars, April 2026) implements this with 32 specialized agent roles and smart routing between Haiku and Opus.

**Tradeoff:** Requires building and maintaining the routing classifier. Misrouting (sending a hard step to a cheap model) causes the same compound failure.

### 2. Verification Layers

After each step, run a cheap verification check: "Does this output look right?" If verification fails, escalate that specific step to a stronger model or retry.

**How it works:**
- Step executes on cheap model → output goes to verifier
- Verifier passes → proceed to next step
- Verifier fails → retry on more capable model, or flag for human review

**Tradeoff:** Each verification step is an additional inference call — a mini N-watcher (see [[agent-architecture-skeleton]]). This converts a reliability problem into a latency + cost problem. Verification itself can have false positives/negatives.

### 3. Task Decomposition

Rewrite hard N-step workflows as easier 3N-step workflows where each sub-step is simple enough that even cheap models handle it at 99%.

**How it works:**
- Analyze which steps have the highest failure rates
- Break those steps into smaller, more explicit sub-steps
- Each sub-step has less ambiguity and requires less reasoning

**Tradeoff:** More steps = more total inference calls = higher latency. Works well for structured workflows but poorly for tasks that inherently require holistic reasoning across many inputs.

## The Fundamental Tradeoff

Every agent deployment chooses between three costs:

| Approach | Cost Type | When to Use |
|----------|-----------|-------------|
| Expensive model everywhere | Model cost (highest per-query) | Mission-critical, can't afford failures |
| Routing + verification | Engineering cost (upfront build) | High volume, cost-sensitive, have engineering capacity |
| Let tasks fail | Failure cost (downstream consequences) | Low-stakes, human fallback available |

## Evaluation Framework

When evaluating any agent tool, model, or startup announcement:

1. **Is the benchmark single-step or multi-step?** If single-step, the compound gap could be enormous.
2. **What's the per-step reliability?** Even 2-3% difference compounds into a chasm at 10+ steps.
3. **Who is the customer?** Chatbot user (single-step) vs enterprise deploying 15-step autonomous agents.
4. **Which reliability approach are they using?** Model routing, verification, decomposition — or just hoping?
5. **What's their cost-reliability curve?** At what reliability level does their approach break even vs. just using the more expensive model?

## Connection to Anthropic's Moat

Anthropic's real moat is not lock-in (MCP + API compatibility make switching easy) or brand. It's **compound reliability in multi-step workflows**. The last few percentage points of per-step accuracy are worth exponentially more than the first 90%.

This is why Opus at $22.50/M and Trinity at $0.90/M serve different markets and can coexist indefinitely.
