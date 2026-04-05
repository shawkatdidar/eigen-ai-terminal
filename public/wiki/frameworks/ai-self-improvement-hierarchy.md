---
name: AI Self-Improvement Hierarchy
description: Framework for evaluating "AI improves itself" claims — where does the new information come from, and what's the ceiling?
tags:
  - self-improvement
  - evaluation
  - training
  - reasoning
discovered: 2026-04-04
session: 9
related:
  - "[[ai-research-breakthroughs]]"
  - "[[ai-coding-tools]]"
  - "[[ai-safety-alignment]]"
  - "[[reward-signal-evaluation]]"
nodes:
  - ai-research-breakthroughs
  - ai-coding-tools
  - ai-safety-alignment
---

# AI Self-Improvement Hierarchy

## Core Insight

Every "AI improves itself" claim has a ceiling determined by **where the new information comes from.** If the information comes only from inside the model, improvement is bounded by existing weights. If it comes from the external world, the ceiling is much higher — potentially unbounded.

## The Key Question

When evaluating any AI self-improvement method, ask: **"Where does the new information come from?"**

## The Hierarchy (weakest → strongest)

| Method | What Improves | Source of Signal | Ceiling | Can Exceed Human? |
|--------|--------------|-----------------|---------|-------------------|
| **Self-distillation** | Default behavior → latent capability | Model's own high-temperature samples filtered by test cases | Hard — bounded by existing weights | No |
| **STaR** | Reasoning traces | Correct final answers from model's own reasoning | Hard — same bound as self-distillation | No |
| **RLHF / RLAIF** | Alignment to preferences | Human or AI judgment | Soft — bounded by judge quality (Goodhart's Law) | No |
| **LLM Wiki** (Karpathy) | Accessible knowledge (not model weights) | External sources compiled into wiki | Medium — bounded by source quality + synthesis ability | System utility — yes; model weights — no |
| **AI Scientist** (Sakana) | Scientific knowledge | Experimental results from reality | High — generates genuinely new knowledge | Potentially yes |
| **Self-play** (AlphaZero) | Strategic capability | Competition dynamics in closed domains | Very high — practically unlimited in games | Yes — proven (Move 37) |

## How Self-Distillation Works (Step by Step)

1. **Start with a trained model** (e.g., Qwen3-30B, 42.4% on LiveCodeBench)
2. **Sample many outputs at high temperature** — randomness causes the model to explore unlikely-but-possible solution paths
3. **Filter for correctness** — run solutions against test cases, keep only correct ones
4. **Fine-tune on correct solutions** — supervised learning pushes the model to make these rare-but-correct paths more likely
5. **Repeat** — each round the model explores further from a better baseline

**Why it works:** The model's *capability space* (everything it CAN generate with randomness) is larger than its *default behavior* (what it typically generates). Self-distillation converts latent capability into default behavior.

**Why it has limits:** After 2-3 rounds, the model has captured all correct solutions within its capability space. The sponge is squeezed dry.

**The "precision-exploration conflict":** Normal use = precise but unexploring. High temperature = exploring but imprecise. Self-distillation bridges the gap.

## Applying the Framework

**When you see:** "Model X improved itself by Y% without external data"
**Ask:** Is this self-distillation (surfacing latent capability) or something genuinely new? If it's self-distillation, the improvement is real but bounded. Don't extrapolate to "recursive self-improvement."

**When you see:** "AI research agent produced a peer-reviewed paper"
**Ask:** Did it discover genuinely new knowledge (AI Scientist), or did it reorganize existing knowledge (LLM Wiki)? The former is a bigger deal.

**When you see:** "Self-play produces superhuman performance"
**Ask:** Is the domain closed (games, formal systems) or open (real world)? Self-play works brilliantly in closed domains. Whether it extends to open-ended domains is the central question of AI capability research.

## Connection to Prior Frameworks

- **Goodhart's Law** (Session 7): RLHF is bounded by the reward signal diverging from the true goal. Self-distillation avoids this by using an objective verifier (test cases) instead of a reward model.
- **Who Controls the Dial** (Session 8): Self-improvement methods that change model behavior without retraining (steering vectors) have different governance implications than methods that change weights (fine-tuning).
