---
name: NVIDIA
id: nvidia
type: company
status: active
created: 2026-04-04
last_updated: 2026-04-04
related_nodes:
  - compute-hardware
  - ai-infrastructure
  - ai-research-breakthroughs
  - open-source-models
  - robotics-embodied-ai
  - edge-on-device-ai
related_entities:
  - google-deepmind
  - meta
tags:
  - entity
  - company
  - hardware
  - gpu
  - compute
---

# NVIDIA

## Overview

NVIDIA is the dominant supplier of AI accelerator hardware, controlling approximately 55% of China's AI accelerator market (down from higher levels as domestic competitors gain ground) and an even larger share globally. The company's position extends beyond GPU silicon into a full-stack AI compute ecosystem: GPUs, CPUs (Vera), inference engines (Groq LPU via acquisition), interconnects (NVLink Fusion with silicon photonics), software frameworks (CUDA, TensorRT), orchestration (GPU DRA for Kubernetes), and open-source models (Nemotron).

NVIDIA's March 2026 GTC announcements reshaped the compute landscape. The Vera Rubin platform — a 7-chip architecture delivering 10x performance per watt over its predecessor — represents NVIDIA's next generational leap, with $1T in advance orders and the Feynman generation already on the 2028 roadmap. The $20B acquisition of Groq brought the Groq 3 LPU (Language Processing Unit — a chip architecture purpose-built for inference that achieves 35x tokens per watt compared to traditional GPUs) into NVIDIA's portfolio, giving the company a dedicated inference hardware line alongside its GPU-centric training platform.

The company is executing a deliberate strategy of ecosystem lock-in through openness: donating the GPU DRA (Dynamic Resource Allocation) driver to Kubernetes/CNCF, releasing open-source models like Nemotron 3 Super and Alpamayo, and investing $2B in Marvell for silicon photonics integration via NVLink Fusion. Each move makes NVIDIA's hardware more deeply embedded in the infrastructure stack while appearing to democratize access. The Groq acquisition, Vera CPU line (standalone 256-chip liquid-cooled racks), and DGX Spark/Station products signal NVIDIA is building toward controlling the entire AI compute value chain from edge devices to hyperscale datacenters.

## Key Facts

| Attribute | Value |
|-----------|-------|
| Headquarters | Santa Clara, CA |
| CEO | Jensen Huang |
| Market position | Dominant AI accelerator supplier (~55% China share, larger globally) |
| Key architectures | Blackwell Ultra (current), Vera Rubin (next-gen), Feynman (2028 roadmap) |
| Advance orders | $1T+ (Vera Rubin platform) |
| Major acquisitions | Groq ($20B, 2026) |
| Major investments | Marvell ($2B, silicon photonics), Nebius (8.3% stake) |
| Open-source models | Nemotron 3 Super (120B/12B MoE), Alpamayo (10B AV reasoning), gpt-oss-puzzle-88B |
| Key software | CUDA, TensorRT, GPU DRA (donated to CNCF), KVTC, NVLink Fusion |
| Revenue drivers | Data center GPUs, DGX systems, automotive, edge AI |

## Timeline

| Date | Signal | Significance | Source |
|------|--------|-------------|--------|
| 2026-04-03 | MLPerf Inference v6.0: Blackwell Ultra records — 288 GPUs processed 2.49M tokens/sec on DeepSeek-R1, 2.7x performance gains across 5 new workloads | notable | developer.nvidia.com |
| 2026-04-02 | Accelerates Gemma 4 for RTX and edge — Q4_K_M quantization via llama.cpp, compatible with Ollama and DGX Spark | notable | blogs.nvidia.com |
| 2026-03-31 | Invests $2B in Marvell + NVLink Fusion + silicon photonics collaboration — builds heterogeneous compute ecosystem where NVLink becomes the unifying fabric across chip types (Marvell stock +11%) | significant | bloomberg.com |
| 2026-03-31 | Tract Capital $3.8B NVIDIA-backed data center bonds — 30K+ acres, targeting 22GW capacity, $14B in orders (3.7x oversubscribed) | notable | bloomberg.com |
| 2026-03-26 | gpt-oss-puzzle-88B — deployment-optimized open model achieving 2.82x throughput via post-training neural architecture search | significant | huggingface.co |
| 2026-03-25 | Demonstrates power-flexible AI factories as grid stabilizers — London Nebius factory (96 Blackwell Ultra GPUs), 100% compliance across 200+ power targets, 30% consumption reduction in 40 seconds | significant | blogs.nvidia.com |
| 2026-03-25 | Emerald AI $25M (NVentures) for power-flexible AI factories targeting 100GW grid integration | notable | fortune.com |
| 2026-03-24 | Donates GPU DRA driver to Kubernetes/CNCF at KubeCon Europe 2026 — moves GPU scheduling from vendor to community governance; also Kata Containers GPU support for confidential AI | significant | blogs.nvidia.com |
| 2026-03-23 | KVTC compresses LLM KV-cache 20x, cuts latency 8x — lossy tensor compression for cached attention computations, no model architecture changes required | significant | shakudo.io |
| 2026-03-20 | Alpamayo — open-source 10B-parameter autonomous vehicle model with reasoning traces for explainable driving decisions | notable | nvidianews.nvidia.com |
| 2026-03-20 | NVFP4/NVFP8 quantization — 60% memory reduction, 3x speed for edge inference | notable | edge-ai-vision.com |
| 2026-03-19 | SPEED-Bench for speculative decoding evaluation | notable | huggingface.co |
| 2026-03-17 | Standalone Vera CPU — 256-chip liquid-cooled rack configurations, pushing beyond GPUs into full datacenter compute | significant | cnbc.com |
| 2026-03-16 | Vera Rubin platform unveiled — 10x perf/watt, 7-chip architecture, Feynman 2028 roadmap, $1T in orders | breakthrough | nvidianews.nvidia.com |
| 2026-03-16 | Groq 3 LPU enters NVIDIA portfolio via $20B acquisition — 35x tokens/watt inference efficiency | significant | the-decoder.com |
| 2026-03-12 | DGX Spark ships with Ollama preinstalled — NVIDIA shipping consumer-accessible AI appliances | notable | developer.nvidia.com |
| 2026-03-11 | Nemotron 3 Super — 120B total / 12B active MoE, open-source; NVIDIA providing open models to drive hardware adoption | significant | llm-stats.com |

## Connections

### Nodes

- **[[compute-hardware]]** — Primary node. NVIDIA defines the leading edge of AI compute with Vera Rubin (training) and Groq LPU (inference). The $1T order book and Feynman 2028 roadmap anchor the hardware acceleration trajectory.
- **[[ai-infrastructure]]** — GPU DRA donation to Kubernetes/CNCF embeds NVIDIA hardware deeper into cloud-native infrastructure. KVTC (20x KV-cache compression) and SPEED-Bench shape the inference optimization stack. Tract Capital's NVIDIA-backed $3.8B data center bonds signal NVIDIA is directly enabling infrastructure financing.
- **[[ai-research-breakthroughs]]** — KVTC and TurboQuant (from Google, but relevant to NVIDIA's hardware) push inference efficiency forward. NVIDIA AVO agents beat FlashAttention-4 by 10.5% — the company's research arm is producing techniques that compound with its hardware advantages.
- **[[open-source-models]]** — Nemotron 3 Super and gpt-oss-puzzle-88B are strategic open-source releases designed to drive NVIDIA hardware adoption. The Nemotron Coalition with Mistral extends this further.
- **[[robotics-embodied-ai]]** — Alpamayo (open-source AV reasoning model), Isaac simulation platform, and Omniverse position NVIDIA as the compute substrate for physical AI. Agile Robots + Google DeepMind partnership runs Gemini on NVIDIA hardware across 20,000+ deployed bots.
- **[[edge-on-device-ai]]** — DGX Spark and NVFP4/NVFP8 quantization extend NVIDIA into edge AI inference. Gemma 4 RTX optimization shows NVIDIA ensuring open models run best on its consumer hardware.

### Entities

- **[[google-deepmind]]** — Competitive tension: Google TurboQuant (6x KV-cache compression) disrupted memory hardware demand, triggering Samsung/SK Hynix selloffs that affect NVIDIA's memory supply chain. Google's TPUs compete with NVIDIA GPUs for training workloads. However, NVIDIA accelerates Google's open models (Gemma 4) for RTX hardware.
- **[[meta]]** — Meta is both NVIDIA's largest customer and a strategic threat. Meta's ~6GW AMD GPU deal and MTIA custom chip program (300-500 RISC-V variants) represent active efforts to reduce NVIDIA dependency. Yet Meta co-developed the Arm AGI CPU and its $19B CoreWeave contract underpins the $8.5B GPU-backed loan that finances more NVIDIA hardware purchases.

### Force Dynamics

- **FC-007** (TurboQuant Memory Compression Reshapes Hardware Economics) — Google's 6x KV-cache compression disrupts the memory-per-GPU ratio NVIDIA's datacenter economics depend on. NVIDIA's own KVTC (20x compression) is a defensive response that keeps compression innovation within its ecosystem.
- **FC-012** (Investment-Grade GPU Debt Opens Institutional Capital) — CoreWeave's A3 Moody's rating on GPU-backed debt directly increases demand for NVIDIA hardware by making it financeable at corporate-bond rates.
- **FC-013** (Silicon Photonics Enters NVIDIA Ecosystem) — The $2B Marvell investment puts optical interconnects inside NVLink Fusion, positioning NVIDIA to control the next-generation interconnect fabric for AI factories.
- **FC-017** (DeepSeek V4 Huawei-First Optimization) — DeepSeek optimizing V4 exclusively for Huawei chips and withholding from NVIDIA/AMD represents the most concrete threat to NVIDIA's China market share. Combined with IDC's 41% domestic chip share data, China's AI compute stack is bifurcating away from NVIDIA.

## What to Watch

- **Vera Rubin production timeline and customer shipments** — $1T in orders means nothing until hardware ships. Manufacturing yield on the 7-chip architecture is the key risk.
- **China market share trajectory** — IDC's 41% domestic share is accelerating. NVIDIA's 55% share (down from higher) could cross below 50% in 2026 if the DeepSeek V4 Huawei-first pattern spreads to other Chinese labs.
- **Groq LPU integration** — How NVIDIA positions Groq 3 within its portfolio (separate product vs. integrated into DGX) determines whether the acquisition creates value or organizational conflict.
- **Export control evolution** — Warren/Banks push to expand chip restrictions to Southeast Asia directly threatens NVIDIA's ability to serve growing AI markets in Malaysia, Thailand, Vietnam, and Singapore.
- **Inference cost compression** — CONV-002 (Inference Cost Collapse) tracks 5+ independent forces driving inference costs down 5-10x. If inference becomes radically cheaper, NVIDIA's hardware ASPs (average selling prices) face downward pressure even as volume grows.
- **Silicon photonics timeline** — The Marvell/NVLink Fusion integration (FC-013) has a "quarters" lag estimate; production deployment likely 2027+. Watch for prototype benchmarks.
- **Power-flexible AI factories scaling** — The London Nebius demonstration proved the concept. Whether this becomes a standard feature for regulatory approval of new datacenter builds is a demand accelerant.
