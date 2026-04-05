---
name: Who Controls the Dial
description: Framework for evaluating AI safety capabilities — any alignment tool is also a misalignment tool depending on who controls it and whether there's an audit trail
tags:
  - safety
  - evaluation
  - governance
  - alignment
discovered: 2026-04-03
session: 8
related:
  - "[[ai-safety-alignment]]"
  - "[[ai-agents]]"
  - "[[ai-in-enterprise]]"
nodes:
  - ai-safety-alignment
  - ai-agents
  - ai-in-enterprise
---

# Who Controls the Dial

## Core Insight

Every AI capability announced as a safety improvement is also a potential misalignment tool. The safety value depends entirely on who controls the capability and whether there's an audit trail — not on the capability itself.

## The Framework

When a new AI safety capability is announced, ask three questions:

1. **Who controls this dial?** — Is the capability restricted to the model developer (Anthropic, OpenAI), or can any deployer use it? Per-deployment behavioral tuning (e.g., steering vectors) is powerful for alignment labs but dangerous when accessible to any API customer.

2. **Is there an audit trail?** — Can a regulator, auditor, or user verify what behavioral configuration was active at the time of a specific output? If the base model passes safety evaluations but deployed configurations alter behavior, safety evals become meaningless without deployment-level auditing.

3. **Does governance exist for the configuration layer?** — Model cards describe base model behavior. But if inference-time tuning changes behavior without retraining, the governance gap is at the configuration layer, not the model layer.

## Worked Example: Anthropic Emotion Concepts (April 2026)

- **The capability:** 171 internal "emotion" representations identified in Claude. Sycophancy, deference, caution vectors can be amplified or suppressed at inference time via steering vectors.
- **The safety upside:** Labs can diagnose and fix alignment-relevant behaviors (sycophancy, scheming) at the representation level rather than through expensive retraining.
- **The failure mode:** A deployer suppresses the "refusal" vector to remove safety guardrails. The model weights are unchanged — it's still "Claude Sonnet 4.5" on the model card — but behavior is fundamentally different. Safety evaluations of the base model no longer describe the deployed model.
- **Applying the framework:** (1) Who controls the dial? Currently Anthropic researchers. If steering vector tooling becomes available to API customers, the risk surface expands massively. (2) Audit trail? None currently exists for inference-time vector configurations. (3) Governance? Microsoft's Agent Governance Toolkit (released same day) addresses agent-level governance but not model-level behavioral tuning.

## Applies To

- Any interpretability breakthrough that enables behavioral steering (steering vectors, activation patching, representation engineering)
- Per-deployment model customization (LoRA adapters, system prompts with behavioral effects, Constitutional AI variants)
- Agent configuration (tool permissions, autonomy levels, safety constraints)
- Open-weight models where anyone can modify inference behavior

## Connection to Goodhart's Law

This framework is a second-order application of Goodhart's Law (Session 7). First order: RLHF reward signals become proxies that diverge from the true goal, creating sycophancy. Second order: safety evaluation metrics become proxies that diverge from deployed behavior when inference-time tuning is possible. The pattern is the same — optimizing a measurable proxy while the thing you actually care about (safe behavior in production) diverges.
