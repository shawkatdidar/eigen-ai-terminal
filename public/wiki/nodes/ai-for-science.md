---
name: AI for Science
id: ai-for-science
status: accelerating
impact: medium
created: 2026-03-19
last_updated: 2026-03-30
related_nodes:
  - ai-research-breakthroughs
  - frontier-models
  - compute-hardware
tags:
  - node
  - science
  - drug-discovery
  - materials
  - biology
---

# AI for Science

## Current State

AI's impact on scientific research continues to deepen following AlphaFold's breakthrough. Protein structure prediction is now routine; the frontier has moved to protein design, drug-target interaction, and de novo molecule generation. Materials science uses AI for novel material discovery. Mathematics saw AI-assisted proof advances.

Key areas: drug discovery acceleration (Isomorphic Labs, Recursion, Insilico Medicine), weather/climate modeling (GraphCast, GenCast), genomics, and automated lab systems. The challenge remains translating AI predictions into wet-lab validation and real-world impact.

AI-assisted research workflows — where scientists use LLMs for literature review, hypothesis generation, and experiment design — are becoming standard practice in research labs.

## Key Players

| Player | Focus | Notable |
|--------|-------|---------|
| Isomorphic Labs | Drug discovery | DeepMind spinout |
| Recursion Pharma | Drug discovery platform | AI + robotics lab |
| Insilico Medicine | Drug discovery | First AI-designed drug in trials |
| Google DeepMind | AlphaFold, weather, math | Broadest scientific AI |
| Microsoft Research | Scientific foundation models | Climate, chemistry |

## Recent Signals

| Date | Signal | Significance | Source |
|------|--------|-------------|--------|
| 2026-03-30 | **Eli Lilly + Insilico Medicine sign $2.75B AI drug discovery deal** — Eli Lilly committed $2.75B to use Insilico Medicine's end-to-end AI drug discovery pipeline, which generates novel drug candidates using generative AI, then runs them through virtual screening (AI-predicted binding affinity) before selecting candidates for wet-lab synthesis. → One of the largest AI-pharma partnerships in history; signals that end-to-end AI drug discovery (not just AI-assisted) is considered production-ready by a major pharmaceutical buyer. | significant | businesswire.com |
| 2026-03-30 | **CERN deploys FPGA-based AI for real-time LHC data** — CERN deployed FPGA-based AI (FPGAs — Field-Programmable Gate Arrays — are reconfigurable chips that can be programmed after manufacture to implement specific algorithms; unlike GPUs which run software, FPGAs implement the algorithm directly in hardware, achieving nanosecond latency) for real-time filtering of data from the Large Hadron Collider. The LHC generates petabytes of particle collision data per second; AI running on FPGAs filters it in real-time to identify collisions worth recording. → First production deployment of AI in the critical path of a major physics experiment; demonstrates that AI can operate at physics-scale data rates (nanoseconds, petabytes/second) in production environments. | notable | home.cern |
| 2026-03-30 | **SakanaAI AI-Scientist-v2: first fully AI-generated paper accepted for peer review** — Sakana AI's autonomous research agent independently formulated hypotheses, designed and ran experiments, analyzed results, and wrote a paper that passed peer review at a research venue — without a human co-author. → The peer review acceptance is the critical threshold: not "AI produced a paper" (already possible) but "an independent evaluation process judged AI-generated work as scientifically valid." | significant | sakana.ai |
| 2026-03-25 | **OpenAI Foundation $1B+ includes life science research** — Funding for disease treatment and health research as part of broader $1B annual commitment. → Major new funding source for AI-driven scientific discovery. | notable | fortune.com |
| 2026-03-17 | AlphaFold DB expands to protein complexes — the database now includes predicted structures for multi-protein complexes (assemblies of two or more proteins that bind together to perform biological functions), not just individual proteins. Most drug targets and cellular machinery involve protein-protein interactions, so predicting how multiple proteins fit together is far harder than single-protein folding and far more useful for drug design. → Dramatically expands the utility of AlphaFold for real-world drug discovery and biological research | significant | geneonline.com |
| 2026-03-10 | Isomorphic Labs IsoDDE ("AlphaFold 4") — outperforms physics-based methods at predicting binding affinity (how strongly a drug molecule binds to its protein target, measured in free energy units). Traditional computational chemistry uses molecular dynamics simulations that are accurate but extremely slow. IsoDDE uses a learned model to predict binding strength directly, achieving better accuracy in a fraction of the compute time. → If validated in clinical settings, this could compress the drug candidate screening process from months to days | significant | nature.com |
| 2026-03-10 | Unreasonable Labs raises $13.5M for AI scientific discovery using neurosymbolic methods (combining neural networks, which learn patterns from data, with symbolic reasoning, which manipulates explicit rules and logic). Pure neural approaches struggle with scientific reasoning that requires formal proofs or precise mathematical relationships. Neurosymbolic systems aim to get the pattern-recognition power of neural nets while maintaining the rigor of symbolic logic. → Signals growing investor interest in AI that can do real scientific reasoning, not just pattern matching | notable | hpcwire.com |
| 2026-03-10 | Berkeley Lab leads $10M DOE project for FORUM-AI materials discovery — Department of Energy funding for AI-driven discovery of new materials, using foundation models (large pre-trained models adapted to specific domains) to predict material properties before synthesizing them in the lab. Traditional materials discovery involves extensive trial-and-error experimentation. → Government-scale investment confirms AI materials discovery is moving from research curiosity to national priority | notable | lbl.gov |
| 2026-03-15 | Physical Superintelligence releases GPD — open-source AI physicist | notable | x.com |
| 2026-03-14 | AI-designed antibodies approaching clinical trials | significant | nature.com |
| 2026-03-12 | Bayer selects Cradle AI for protein engineering | notable | analyticalscience.wiley.com |

## 30-Day Trend

Steady. AI-designed antibodies nearing clinical trials mark a significant step toward real-world therapeutic impact. Open-source AI physics tools and enterprise protein engineering adoption (Bayer + Cradle) signal broadening use across domains. Translation to wet-lab validation remains the key bottleneck.

## What to Watch For

- AI-designed drugs advancing in clinical trials
- New protein design breakthroughs
- AI-assisted mathematical proofs / discoveries
- Foundation models for specific scientific domains
- Lab automation + AI integration milestones
- Climate/weather model accuracy milestones

## Builder's Notes

(To be filled by daily scan — Phase 5)

## Related Nodes

- [[ai-research-breakthroughs]]
- [[frontier-models]]
- [[compute-hardware]]
