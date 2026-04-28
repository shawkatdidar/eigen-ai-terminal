---
name: Google / DeepMind
id: google-deepmind
type: company
status: active
created: 2026-04-04
last_updated: 2026-04-22
related_nodes:
  - frontier-models
  - open-source-models
  - ai-research-breakthroughs
  - ai-for-science
  - compute-hardware
  - multimodal-ai
  - robotics-embodied-ai
  - edge-on-device-ai
  - ai-in-enterprise
related_entities:
  - nvidia
  - meta
tags:
  - entity
  - company
  - frontier
  - open-source
  - research
---

# Google / DeepMind

## Overview

Google/DeepMind operates a dual-track AI strategy that is unique among frontier labs: a closed frontier model line (Gemini) that dominates benchmarks, and a fully open model line (Gemma) released under Apache 2.0 that targets edge deployment and community adoption. As of early April 2026, this two-pronged approach has produced Gemini 3.1 Pro (leading 13 of 16 standard benchmarks including 77.1% on ARC-AGI-2 and 94.3% on GPQA Diamond) and Gemma 4 (the most capable open model family under Apache 2.0, with a 26B MoE variant achieving LMArena 1441 using only 4B active parameters).

DeepMind's research arm continues to produce results that reshape multiple AI domains simultaneously. TurboQuant (presented at ICLR 2026) achieved 6x KV-cache compression with zero accuracy loss — a result significant enough to trigger a selloff in memory stocks (Samsung -4.71%, SK Hynix -6.23%) because it directly reduces the amount of memory hardware needed per GPU for inference. AlphaFold's expansion to protein complexes (multi-protein assemblies, not just individual proteins) extended the utility of AI-driven drug discovery into the domain where most real therapeutic targets exist. The DeepMind manipulation study (10,000 participants across finance and health domains) produced one of the three institutional safety studies driving convergence CONV-004 toward regulatory action.

Google's enterprise AI positioning leverages its cloud infrastructure (TPU v6 Trillium), Workspace integration (Gemini across Docs, Sheets, Drive, and the new Google Vids AI avatars), and the AI Pro plan ($19.99/month, now with 5TB storage). The company's distribution advantage is the broadest in AI: Gemini is embedded in Search, Android, Chrome, Workspace, Cloud, and YouTube, reaching billions of users without requiring a separate app download. Apple's planned iOS 27 multi-model support (FC-004) could extend this distribution further by making Gemini selectable as the default AI handler on 1.5 billion iPhones.

## Key Facts

| Attribute | Value |
|-----------|-------|
| Headquarters | Mountain View, CA (Google) / London, UK (DeepMind) |
| CEO | Sundar Pichai (Google/Alphabet), Demis Hassabis (DeepMind) |
| Frontier model line | Gemini 3.1 Pro/Flash (closed) |
| Open model line | Gemma 4 family (Apache 2.0) |
| Benchmark position | Gemini 3.1 Pro leads 13/16 standard benchmarks |
| Frontier pricing | $2/M input, $12/M output (Gemini 3.1 Pro) |
| Key research outputs | TurboQuant (ICLR 2026), AlphaFold 4 / protein complexes, manipulation study |
| Hardware | TPU v6 (Trillium) — cloud-only |
| Enterprise distribution | Workspace (Docs, Sheets, Drive), Search, Android, Chrome, Cloud |
| Consumer plan | AI Pro — $19.99/month, 5TB storage, Gemini integration |
| Gemma 4 variants | 31B Dense (LMArena 1452), 26B MoE/4B active (LMArena 1441), E4B, E2B edge |
| Gemma 4 innovations | Per-Layer Embeddings (PLE), Shared KV Cache, variable aspect ratio encoding |
| Robotics partnerships | Agile Robots (20,000+ deployed bots running Gemini foundation models) |

## Timeline

| Date | Signal | Significance | Source |
|------|--------|-------------|--------|
| 2026-04-22 | **Google Cloud Next 2026 — 8th-gen TPUs (TPU 8t / TPU 8i)** — TPU 8t: 9,600 chips per superpod, 2 PB shared HBM, 3× Ironwood training throughput, 2× perf/watt, 2.7× perf/dollar; 1M+ TPU single-pod clusters claimed. TPU 8i: 1,152 chips linked, 3× on-chip SRAM for concurrent agent inference. Positioned as default substrate for "agentic-era" training; complements (not replaces) NVIDIA Vera Rubin offerings at Google. | significant | [blog.google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/) |
| 2026-04-22 | **NVIDIA + Google Cloud decade-long partnership** — A5X bare-metal on Vera Rubin NVL72 (10× lower cost/token, 10× tokens/MW); 80K Rubin GPUs/site scaling to ~960K across sites; Gemini on Blackwell/Blackwell Ultra preview in Google Distributed Cloud (sovereign); first Confidential Blackwell GPUs in G4 VMs; Nemotron 3 Super on Gemini Enterprise; NeMo RL managed API; Isaac Sim + Omniverse on GCP Marketplace; Cosmos Reason 2 on Vertex AI + GKE. | significant | [blogs.nvidia.com](https://blogs.nvidia.com/blog/google-cloud-agentic-physical-ai-factories/) |
| 2026-04-22 | **Gemini Enterprise Agent Platform** — Vertex AI successor. 200+ models in Model Garden incl. Gemini 3.1 Pro, Gemini 3.1 Flash Image, Lyria 3, Gemma 4, Claude Opus/Sonnet/Haiku, Nano Banana 2, Nemotron 3 Super. Dual UX: developer Agent Platform + non-technical Gemini Enterprise app. Competitor to AWS Bedrock AgentCore + Microsoft Foundry + OpenAI Workspace Agents. | significant | [blog.google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/) |
| 2026-04-22 | **Multi-billion Google Cloud deal with Thinking Machines Lab (Mira Murati)** — First TML cloud contract. GB300-powered systems for Tinker + RL workloads. Non-exclusive (TML keeps NVIDIA ties). | significant | [techcrunch.com](https://techcrunch.com/2026/04/22/exclusive-google-deepens-thinking-machines-lab-ties-with-new-multi-billion-dollar-deal/) |
| 2026-04-22 | **Chrome Enterprise "AI co-worker" + AI Overviews in Gmail for Workspace** | notable | [techcrunch.com](https://techcrunch.com/2026/04/22/google-turns-chrome-into-an-ai-coworker-for-the-workplace/) |
| 2026-04-22 | **Accenture / Bain / BCG / Deloitte / McKinsey AI partnership** — Big-5 consultancies partnering with Google on AI-in-production. "Only 25% of organizations have moved AI into production at scale" cited as the addressable gap. | notable | [x.com](https://x.com/GoogleDeepMind/status/2046927845851627657) |
| 2026-04-21 | **Deep Research + Deep Research Max (Gemini 3.1 Pro)** — Autonomous research agents that navigate web + custom data (internal docs, specialized financial info), produce fully cited professional reports. Built on Gemini 3.1 Pro. | significant | [x.com](https://x.com/GoogleDeepMind/status/2046627042335060342) |
| 2026-04-03 | Google Vids adds prompt-directed AI avatars — natural language avatar direction, character consistency, free Veo video generation, AI music. Available to paid Workspace accounts | notable | workspaceupdates.googleblog.com |
| 2026-04-02 | Gemma 4 released — four variants under Apache 2.0: 31B Dense (#3 open model), 26B MoE with 4B active (#6 open), E4B and E2B edge. Multimodal inputs, 128K-256K context, native function-calling. Runs on Raspberry Pi to DGX | significant | ai.google.dev |
| 2026-04-02 | Google upgrades AI Pro plan to 5TB storage — no price increase at $19.99/month, expanded Gemini integration across Workspace | notable | 9to5google.com |
| 2026-03-30 | DeepMind publishes AI manipulation study — 10,000 participants across finance and health domains. Provides institutional evidence for AI behavioral safety regulation | notable | deepmind.google |
| 2026-03-26 | Gemini 3.1 Flash Live — realtime voice interaction across 90 languages | significant | blog.google |
| 2026-03-25 | Lyria 3 Pro — longer, more complex AI-generated music compositions | notable | deepmind.google |
| 2026-03-24 | TurboQuant (ICLR 2026) — 3-bit KV-cache quantization with zero accuracy loss. 6x memory reduction, up to 8x H100 speedup. Uses PolarQuant + Quantized Johnson-Lindenstrauss | significant | research.google |
| 2026-03-24 | Agile Robots + Google DeepMind partnership — Gemini Robotics foundation models deployed on 20,000+ production bots in electronics, automotive, logistics | notable | techcrunch.com |
| 2026-03-20 | Gemini 3.1 Pro dominates 13/16 benchmarks — ARC-AGI-2: 77.1% (abstract reasoning), GPQA Diamond: 94.3% (PhD-level science Q&A), priced at $2/$12M tokens | significant | medium.com |
| 2026-03-17 | AlphaFold DB expands to protein complexes — predicted structures for multi-protein assemblies, not just individual proteins. Most drug targets involve protein-protein interactions | significant | geneonline.com |
| 2026-03-10 | Isomorphic Labs IsoDDE ("AlphaFold 4") — outperforms physics-based methods at predicting drug binding affinity. Could compress drug candidate screening from months to days | significant | nature.com |
| 2026-03-03 | Gemini 3.1 Flash-Lite — 2.5x faster, $0.25/M tokens, targeting high-volume inference use cases | notable | blog.google |

## Connections

### Nodes

- **[[frontier-models]]** — Gemini 3.1 Pro leads 13/16 benchmarks, establishing Google as the benchmark leader even as Anthropic leads enterprise trust/adoption and xAI experiments with novel architectures. Pricing ($2/$12M tokens) is competitive for the capability tier.
- **[[open-source-models]]** — Gemma 4 is the most capable Apache 2.0 open model family as of April 2026. The 4B-active MoE variant achieving LMArena 1441 validates the "Densing Law" — more capability per parameter rather than more parameters. Architectural innovations (PLE, Shared KV Cache) are published for community adoption.
- **[[ai-research-breakthroughs]]** — TurboQuant is the most impactful inference efficiency result of the scan period, triggering memory stock selloffs and spawning follow-on work (RotorQuant, which claimed 10-19x improvement within 24 hours). DeepMind's research breadth spans architecture (attention mechanisms), inference optimization (quantization), and safety (manipulation study).
- **[[ai-for-science]]** — AlphaFold remains the defining AI-for-science contribution. The expansion to protein complexes and IsoDDE ("AlphaFold 4") for binding affinity prediction moves the utility from basic research into direct drug discovery application. Isomorphic Labs (DeepMind spinout) is the commercial vehicle.
- **[[compute-hardware]]** — TPU v6 (Trillium) is cloud-only but competitive for training workloads. TurboQuant's 6x memory compression disrupts memory hardware economics (FC-007), reducing the memory-per-GPU ratio needed for inference — which paradoxically undermines NVIDIA's hardware revenue while benefiting Google's cloud inference costs.
- **[[multimodal-ai]]** — Gemini 3.1 Flash Live (90-language realtime voice), Veo 3.1 Lite video generation, Google Vids AI avatars, and Lyria 3 Pro music demonstrate Google's broadest multimodal capability set. Gemma 4's multimodal inputs (image, video, audio) bring this to the open-source ecosystem.
- **[[robotics-embodied-ai]]** — Agile Robots partnership deploys Gemini Robotics foundation models on 20,000+ production bots. This is one of the largest real-world deployments of AI foundation models in robotics.
- **[[edge-on-device-ai]]** — Gemma 4 E4B and E2B edge variants and NVIDIA's RTX optimization of Gemma 4 extend Google's model family to consumer hardware. Apple's reported distillation from Gemini for on-device models suggests Google's models may power Apple's AI features.

### Entities

- **[[nvidia]]** — Complex relationship. Google's TurboQuant directly reduces demand for memory hardware in NVIDIA's ecosystem, while NVIDIA accelerates Google's Gemma 4 for RTX deployment. Google's TPUs compete with NVIDIA GPUs for training, but Google's cloud services also offer NVIDIA GPUs to customers.
- **[[meta]]** — Direct competitor in open-source models (Gemma vs Llama). Both pursue open-weight strategies but for different reasons: Google uses open models to drive cloud/hardware adoption, Meta uses them to prevent dependency on closed-model providers. The Agile Robots partnership (Google) vs Meta's Arm AGI CPU co-development represent competing approaches to the physical AI compute substrate.

### Force Dynamics

- **FC-007** (TurboQuant Memory Compression Reshapes Hardware Economics) — Google is the origin of this force chain. 6x KV-cache compression at zero accuracy loss disrupts memory hardware demand (Samsung -4.71%, SK Hynix -6.23%), enables longer context windows on existing hardware, and makes edge inference of long-context models feasible. This is a rare case where a research paper directly moves public equity markets.
- **FC-004** (Apple Multi-Model iOS Creates New Distribution Channel) — Google's Gemini is one of the named beneficiaries of Apple opening Siri to rival AI assistants in iOS 27. With 1.5B active Apple devices, this creates a massive new distribution channel for Gemini alongside Claude and others.
- **CONV-002** (Inference Cost Collapse Enables Mass Agent Deployment) — TurboQuant is one of the five independent forces driving this convergence. Gemma 4's 4B-active MoE is another — Google contributes two of the five forces driving the projected 5-10x inference cost reduction.
- **CONV-004** (AI Safety Evidence Cascade Triggers Regulatory Action) — DeepMind's 10,000-person manipulation study across finance and health domains is one of the three institutional safety studies feeding this convergence toward regulatory action by Q4 2026.

## What to Watch

- **Gemini 3.2 / Gemini 4 release timeline** — Google is the benchmark leader. Any new Gemini release will reset the competitive landscape and force responses from Anthropic and OpenAI.
- **Gemma 5 and open-source strategy evolution** — Whether Google maintains the dual-track strategy (closed Gemini + open Gemma) or begins restricting open releases as Alibaba has done with Qwen.
- **IsoDDE / AlphaFold 4 clinical validation** — Binding affinity predictions need wet-lab confirmation. Isomorphic Labs' partnership pipeline (combined with the Eli Lilly + Insilico Medicine $2.75B deal trend) determines whether AI drug discovery delivers real therapeutic outcomes.
- **TPU v7 announcement** — Google's custom silicon roadmap competes with NVIDIA's Vera Rubin. TPU generations typically align with new model architectures.
- **iOS 27 Gemini integration** — If Apple's multi-model Siri Extensions ship as reported, Gemini's consumer distribution expands dramatically. Watch WWDC June 2026 for details.
- **TurboQuant adoption in production** — The paper is published; production deployment timelines determine when the 6x memory reduction actually impacts datacenter purchasing. RotorQuant's 10-19x follow-on suggests the compression frontier is still advancing rapidly.
- **Google Workspace AI adoption metrics** — AI Pro plan upgrade (5TB, no price increase) and Vids AI avatars are retention plays. Enterprise seat count and AI feature usage determine whether Google's distribution advantage converts to AI revenue.
