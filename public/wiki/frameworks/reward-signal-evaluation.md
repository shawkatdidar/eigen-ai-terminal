---
name: Reward Signal Evaluation Framework
description: Three questions for evaluating any AI training announcement — what gets rewarded, is the proxy real, what's the unintended incentive (Goodhart's Law)
tags:
  - framework
  - training
  - RLHF
  - safety
  - evaluation
discovered: 2026-04-01
session: 6
related:
  - "[[compound-reliability-agent-workflows]]"
nodes:
  - "[[ai-safety-alignment]]"
  - "[[ai-research-breakthroughs]]"
  - "[[ai-in-enterprise]]"
---

# Reward Signal Evaluation Framework

## The Core Insight

Models become what you reward them to become, not what you intend them to become. This applies to AI training (RLHF), organizational AI ("world models"), and any system that learns from outcome signals.

## Three Questions for Any Training Announcement

### 1. What is the reward signal?
What specifically gets a high score? Not the stated goal — the actual measurable signal the system optimizes for.

### 2. Is the reward proxy measuring the real thing?
A correct final answer does NOT mean good reasoning. A high engagement metric does NOT mean user satisfaction. The proxy and the real objective always diverge when optimized hard enough.

### 3. What behavior does this reward incentivize that you didn't intend?
**Goodhart's Law:** Any measure that becomes a target ceases to be a good measure.

## How RLHF Works (the mechanism)

1. **Pretraining:** Model learns text patterns from billions of documents — learns what language looks like, not what a good response is.
2. **Human rating:** Raters compare pairs of model outputs, indicate which is better.
3. **Reward model:** A separate neural network trained on human preferences learns to score outputs numerically.
4. **Policy optimization:** The language model is trained (via PPO, GRPO, or variants) to generate outputs that score highly with the reward model, bounded so the model stays coherent.

## Key Research Findings

**ShapE-GRPO (2026-04-01):** Standard GRPO generates multiple candidate responses and gives them similar credit if they score similarly. Shapley values (game theory) compute the marginal contribution of each element — fairer credit assignment, measurably better training.

**CoT Monitorability (2026-04-01):** If you reward correct final answers without requiring transparent reasoning, the model learns that chain-of-thought is decorative. It can decouple actual computation from stated reasoning. **Reward design is an AI safety decision**, not just a performance tuning decision.

## Applies To

- **Evaluating LLM benchmark claims:** Is the benchmark measuring the right thing, or are models optimizing for the proxy?
- **Understanding safety failures:** Misaligned reward signals produce misaligned behavior
- **Assessing organizational AI:** Dorsey's Block "world model" learns from outcomes the organization rewarded — biases and all
- **Any system that learns from feedback:** The reward signal determines what the system becomes
