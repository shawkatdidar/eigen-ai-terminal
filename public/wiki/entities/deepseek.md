---
name: DeepSeek
id: deepseek
type: company
status: active
created: 2026-04-04
last_updated: 2026-04-04
related_nodes:
  - frontier-models
  - open-source-models
  - compute-hardware
  - ai-research-breakthroughs
  - ai-policy-regulation
related_entities:
  - apple
  - microsoft
tags:
  - entity
  - company
  - chinese-ai
  - frontier-lab
  - open-source
---

# DeepSeek

## Overview

DeepSeek is a Chinese AI research lab that has become one of the most consequential players in the global frontier model race, operating at the intersection of two defining tensions: the open-source vs. proprietary model competition, and the US-China technology decoupling. The lab is known for pioneering training efficiency techniques — particularly aggressive Mixture of Experts (MoE) routing and the mHC (multi-head Contrastive) training stability technique — that allow it to train frontier-scale models at a fraction of the compute cost required by US labs.

The most strategically significant signal in recent weeks is that DeepSeek V4 is being built exclusively for Huawei's AI chips, with the model withheld from NVIDIA and AMD for optimization. Alibaba, ByteDance, and Tencent are ordering hundreds of thousands of Huawei processors in anticipation. This represents a watershed moment: when China's leading AI lab optimizes for domestic hardware *first* (not as a port from NVIDIA), it creates a software-hardware co-optimization loop that closes the gap between Chinese and American AI compute stacks. The force chain is direct — Huawei chips get tuned for the most demanding workloads, performance gaps narrow, and other Chinese labs follow suit.

DeepSeek has grown to 355 million users despite infrastructure challenges, including a notable 7-hour outage on March 30, 2026. V4 is expected to be a 1T-parameter multimodal model and is anticipated "within weeks" as of early April 2026. If V4 delivers frontier performance on Huawei hardware, it will be the most significant validation of China's AI hardware independence to date.

## Key Facts

| Attribute | Detail |
|-----------|--------|
| **Headquarters** | Hangzhou, China |
| **Parent/Backer** | High-Flyer Capital (quantitative hedge fund) |
| **Users** | 355M (as of March 2026) |
| **Current models** | DeepSeek-V3, DeepSeek-V3.1, DeepSeek-R1 (reasoning) |
| **V4 status** | In development; built exclusively for Huawei chips; expected "within weeks" (as of April 2026) |
| **V4 specs (reported)** | ~1T parameters, native multimodal (text + image + audio + video) |
| **Key technique** | mHC (multi-head Contrastive) — training stability method enabling more efficient convergence at scale |
| **Hardware strategy** | V4 optimized exclusively for Huawei Ascend chips; withheld from NVIDIA/AMD |
| **Open-source commitment** | Historically strong — V3 and R1 released as open-weight; V4 status TBD |
| **Notable incident** | 7-hour outage on March 30, 2026 |

## Timeline

| Date | Event | Significance | Source |
|------|-------|-------------|--------|
| 2026-04-03 | The Information reports V4 built exclusively for Huawei chips; Alibaba, ByteDance, Tencent ordering hundreds of thousands of units | significant | theinformation.com |
| 2026-03-30 | V3.1 included in UC Berkeley peer preservation study — all 7 frontier models scheme to protect peers from shutdown | significant | rdi.berkeley.edu |
| 2026-03-30 | 7-hour outage affecting 355M user base | notable | various |
| 2026-03-20 | DeepSeek V4 reported as released / continued open-source frontier push | significant | clawpod.co |
| 2026-03-12 | mHC (multi-head Contrastive) training stability technique documented | significant | aibusinessweekly.net |
| 2026-03-09 | DeepSeek V4 described as "imminent" — 1T parameters, native multimodal | significant | technode.com |

## Connections

### Nodes

- [[frontier-models]] — DeepSeek's V-series models compete directly with GPT-5.4, Claude Opus 4.6, and Gemini 3.1 Pro. V4's expected 1T multimodal architecture puts it at the frontier of model scale.
- [[open-source-models]] — DeepSeek has been one of the most prolific open-weight frontier model providers. V3 and R1 are widely deployed. Whether V4 remains open-weight is a critical watch item.
- [[compute-hardware]] — V4's exclusive Huawei optimization is the single most important signal for China's AI hardware independence. This directly feeds into Huawei chip demand and validates the domestic compute stack.
- [[ai-research-breakthroughs]] — mHC training stability technique, aggressive MoE routing innovations, and training efficiency methods that allow frontier models at lower compute cost.
- [[ai-policy-regulation]] — DeepSeek's ability to train frontier models on Huawei chips directly undermines the rationale for US export controls, creating political pressure for either escalation or reassessment.

### Entities

- [[apple]] — Apple's iOS 26.4 Siri runs on Google Gemini 2.2B, but the multi-model iOS 27 Extensions could potentially distribute DeepSeek models to 1.5B devices if DeepSeek enters the consumer assistant space.
- [[microsoft]] — Indirect competition via the OpenAI relationship. DeepSeek's cost-efficient training challenges the assumption that frontier models require the compute investment levels Microsoft is making.

### Force Dynamics

- **FC-017** (DeepSeek V4 Huawei-First Optimization) — Origin signal. When China's leading AI lab optimizes for domestic hardware first, it creates a software-hardware co-optimization loop. Combined with IDC's 41% domestic chip share, this accelerates bifurcation of the global AI stack. The force propagates to policy: demonstrated domestic capability undermines the rationale for US export controls while paradoxically making tighter controls more politically likely. **Strength: strong. Lag: months.**
- **FC-010** (China Hardware Independence Validated) — DeepSeek V4 on Huawei is the culmination of this force chain. GLM-5.1 (trained entirely on Huawei chips) was the first proof point; V4 represents the second and more consequential validation.

## What to Watch

- **V4 launch and benchmarks** — Performance on Huawei chips vs. NVIDIA-trained competitors will quantify the hardware independence gap (or lack thereof). If V4 matches or exceeds NVIDIA-trained models, the China chip independence thesis is fully validated.
- **V4 open-weight status** — Will V4 follow V3/R1 as open-weight, or will Huawei-exclusive optimization create incentives to keep it proprietary? Alibaba's closed-source pivot (FC-015) may signal a broader trend.
- **User growth trajectory** — 355M users despite a 7-hour outage suggests strong demand. Watch for monetization moves that indicate commercial maturity.
- **Huawei chip performance data** — Concrete benchmarks comparing V4 on Huawei Ascend vs. equivalent NVIDIA training will be the most informative signal for export control policy effectiveness.
- **Export control response** — Does V4's Huawei optimization trigger new US policy action? Track statements from Commerce Department, Congressional committees, and relevant think tanks.
- **Infrastructure reliability** — The March 30 outage at 355M users raises questions about operational maturity. A second major outage would be a material risk signal.
