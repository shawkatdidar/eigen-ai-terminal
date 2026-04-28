---
name: Compute & Hardware
id: compute-hardware
status: accelerating
impact: high
created: 2026-03-19
last_updated: 2026-04-22
related_nodes:
  - frontier-models
  - edge-on-device-ai
  - ai-business-funding
tags:
  - node
  - hardware
  - compute
  - gpu
---

# Compute & Hardware

## Current State

NVIDIA's GTC 2026 reshaped the compute landscape. The Vera Rubin platform delivers 10x perf/watt with a 7-chip architecture, backed by $1T in orders, with the Feynman generation already on the 2028 roadmap. NVIDIA also unveiled standalone Vera CPUs in 256-chip liquid-cooled rack configurations, signaling a push beyond GPUs into full data-center compute. The $20B Groq acquisition brought the Groq 3 LPU into NVIDIA's portfolio — at 35x tokens/watt, it represents a step-change in inference efficiency.

Meta is building its own silicon empire: MTIA custom chips (300-500 variants, RISC-V based) on a 6-month release cadence, plus a massive ~6GW AMD GPU infrastructure deal. The custom silicon trend is accelerating as hyperscalers seek to reduce NVIDIA dependency.

On the interconnect side, Marvell and Lumentum demonstrated optical switching that cuts latency by 40% for agent workloads — a critical enabler as agentic inference becomes the dominant compute pattern. The bottleneck is shifting from raw compute to interconnect and memory bandwidth.

## Key Players

| Player | Products | Notable |
|--------|----------|---------|
| NVIDIA | Blackwell Ultra, DGX Station/Spark, RTX 50-series | Market leader, CUDA ecosystem |
| AMD | MI300X, MI350, Ryzen AI | Price competitive, ROCm improving |
| Google | TPU v6 (Trillium) | Cloud-only, great for training |
| Amazon | Trainium2, Inferentia3 | AWS-integrated, aggressive pricing |
| Apple | M4 Ultra, Neural Engine | Best consumer unified memory |
| Intel | Gaudi 3 | Enterprise price point |
| Cerebras | WSE-3 | Wafer-scale, unique architecture |
| Groq | LPU | Fastest inference speed |

## Recent Signals

| Date | Signal | Significance | Source |
|------|--------|-------------|--------|
| 2026-04-22 | **Google 8th-gen TPUs: TPU 8t (training) + TPU 8i (inference)** — TPU 8t scales to 9,600 chips per superpod with 2 PB shared HBM (High Bandwidth Memory — stacked DRAM on-package for massive memory bandwidth), 3× Ironwood training throughput, 2× perf/watt, 2.7× perf/dollar. TPU 8i links 1,152 chips with 3× on-chip SRAM for concurrent agent inference. Clusters of 1M+ TPUs in a single pod claimed at production scale. → First credible non-NVIDIA training option at agentic-workload scale with explicit perf/dollar advantage. Does not replace NVIDIA at Google — both TPU 8 and NVIDIA A5X/Rubin announced same day at Cloud Next. | significant | [blog.google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/) |
| 2026-04-22 | **NVIDIA + Google Cloud decade-long partnership — A5X, ~960K Rubin GPUs, Confidential Blackwell** — A5X bare-metal instances on Vera Rubin NVL72 (10× lower inference cost/token, 10× tokens/MW vs prior gen); scaling to 80,000 Rubin GPUs per site, ~960,000 across sites via ConnectX-9 SuperNICs + Google Virgo networking; Gemini on Blackwell/Blackwell Ultra preview in Google Distributed Cloud; first Confidential Blackwell GPUs (RTX PRO 6000 Blackwell Server Edition in G4 VMs); NVIDIA Nemotron 3 Super on Gemini Enterprise Agent Platform; managed RL API on NeMo RL. → Google simultaneously doubling down on NVIDIA AND shipping TPU 8 is a multi-stack bet, not substitution. Near-1M Rubin GPU deployment across Google sites is the single largest contracted NVIDIA deployment on the record books. | significant | [blogs.nvidia.com](https://blogs.nvidia.com/blog/google-cloud-agentic-physical-ai-factories/) |
| 2026-04-22 | **Vast Data $1B raise at $30B — 3.3× from $9.1B (2023); IPO-ready end 2026** — Software-for-storing-AI-data platform. Round co-led by Drive Capital + Access Industries; NVIDIA, Fidelity, NEA participating. Customers: JPMorgan Chase, xAI, CoreWeave. Profitable on operating basis; $4B cumulative bookings, most in past year. → AI-infrastructure layer (not just compute) now priced at hyperscale valuations. IPO candidacy signals mid-2026 as the window when AI-stack companies start going public. | significant | [bloomberg.com](https://www.bloomberg.com/news/articles/2026-04-22/nvidia-backed-vast-data-raises-1-billion-triples-valuation-to-30-billion) |
| 2026-04-22 | **Chipmakers: 16-straight positive sessions, SOX +37% in April — longest rally on record** — Philadelphia Semiconductor Index on track for longest daily-gain streak in index history (data back to 1994). 37% gain over the rally; April on track for biggest monthly percentage gain since Feb 2000. Semi sector expected to grow revenue ~57% in 2026 (Bloomberg Intelligence), twice the pace of tech, vs 9.3% S&P. → Market-level confirmation that AI-compute capex thesis is still intact; contradicts Q1 "SaaS crash -40%" reading — compute-layer and application-layer valuations decoupling. | notable | [bloomberg.com](https://www.bloomberg.com/news/articles/2026-04-22/chipmakers-on-track-for-longest-ever-rally-amid-ai-optimism) |
| 2026-04-20 | **Fermi (nuclear-for-AI-datacenter startup) CEO + CFO depart abruptly** — Texas-based nuclear power play for AI data centers loses both top execs simultaneously. → Signal of instability in the nuclear-for-AI narrative; the gigawatt-energy bottleneck for compute is not being solved quickly by nuclear. | notable | [techcrunch.com](https://techcrunch.com/2026/04/20/fermi-ceo-and-cfo-depart-texas-nuclear-power-ai/) |
| 2026-04-11 | **3 OpenAI Stargate execs depart for Meta** — Hoeschele, Hemani, Saharan join Superintelligence Labs | significant | bloomberg.com |
| 2026-04-11 | **Japan commits $16.3B to Rapidus for 2nm AI chips** — sovereign manufacturing push, IBM/ASML partners | significant | bloomberg.com |
| 2026-04-10 | **PJM seeks 15GW emergency power for data centers** — 60GW shortfall over decade, 13-state grid | significant | bloomberg.com |
| 2026-04-10 | **TSMC Q1 2026 $35.7B revenue, +35% YoY on AI demand** — TSMC's quarterly revenue hit $35.7B, up 35% year-over-year, driven almost entirely by AI chip fabrication demand. → Confirms AI is now the dominant revenue driver for the world's most important chipmaker; sustained 35% growth at this scale validates that AI hardware demand is not slowing. | notable | tsmc.com |
| 2026-04-10 | **DeepSeek building Inner Mongolia DC with banned Blackwell chips** — DeepSeek is constructing a data center in Inner Mongolia reportedly equipped with NVIDIA Blackwell GPUs that are restricted for export to China under US chip controls. → Raises serious questions about export control enforcement; if confirmed, demonstrates that China's most capable AI labs are acquiring banned hardware through gray-market or pre-ban stockpiles. | significant | reuters.com |
| 2026-04-10 | **cuBLAS 60% MatMul performance bug on RTX 5090 consumer GPUs** — A bug in NVIDIA's cuBLAS library (the core GPU math library used for matrix multiplication, the fundamental operation in neural network inference) causes 60% performance degradation on RTX 5090 consumer GPUs. → Significant issue for local AI inference on the latest consumer hardware; affects anyone running models locally on RTX 5090. | notable | nvidia.com |
| 2026-04-10 | **Sharetronic $92M banned Nvidia hardware disclosed** — Sharetronic, a Chinese company, disclosed $92M worth of Nvidia hardware that falls under US export restrictions. → Further evidence that restricted NVIDIA chips are circulating in China despite controls. | notable | reuters.com |
| 2026-04-10 | **Qwen3.5-122B at 198 tok/s on 2x RTX PRO 6000 Blackwell** — Alibaba's Qwen3.5-122B model achieves 198 tokens per second inference speed on two NVIDIA RTX PRO 6000 Blackwell GPUs. → Demonstrates that Blackwell-generation professional GPUs enable fast inference of 100B+ parameter models, making large open models practical for workstation deployment. | notable | nvidia.com |
| 2026-04-09 | **CoreWeave-Meta $21B expanded deal through 2032, Vera Rubin deployment** — CoreWeave expanded its Meta deal from $19B to $21B, extending through 2032, with confirmed Vera Rubin GPU deployment. → Largest single AI infrastructure contract continues to grow; Vera Rubin deployment timeline now tied to a concrete customer commitment. | significant | bloomberg.com |
| 2026-04-09 | **Intel-Google multiyear IPU ASIC collaboration** — Intel and Google announced a multiyear collaboration on IPU (Infrastructure Processing Unit) ASICs (Application-Specific Integrated Circuits — chips custom-designed for a single purpose, in this case network/infrastructure processing). → Google diversifying custom silicon partnerships beyond its own TPU program; Intel gains a major customer for its foundry/custom chip business. | notable | intel.com |
| 2026-03-31 | **CoreWeave $8.5B GPU-backed loan — largest chip-backed debt deal** — A3 Moody's rating (investment-grade), backed by Meta's $19B contract. MUFG + Morgan Stanley lead. Matures 2032. → AI infrastructure financing enters investment-grade territory; chip-collateralized debt is becoming a recognized asset class, enabling GPU fleet owners to raise capital at corporate-bond rates rather than venture equity dilution. | significant | bloomberg.com |
| 2026-03-31 | **NVIDIA invests $2B in Marvell + NVLink Fusion + silicon photonics collaboration** — Marvell provides custom XPUs (application-specific accelerators designed for particular workloads), NVIDIA provides Vera CPU + ConnectX NICs + NVLink interconnect. Marvell stock +11%. → NVIDIA is building a heterogeneous compute ecosystem where its interconnect (NVLink) becomes the unifying fabric across different chip types, not just its own GPUs; the silicon photonics angle puts optical interconnects directly inside NVIDIA's AI factory architecture. | significant | bloomberg.com |
| 2026-03-31 | **Huawei 2025 revenue: 2.2% growth (vs 22% prior year)** — Sharp deceleration. Apple iPhone 17 comeback pressuring consumer business. Facing domestic AI chip competition from Cambricon and Alibaba. → Huawei's growth engine is slowing even as its AI chip division gains traction; the competitive pressure from other Chinese chip players (Cambricon, Alibaba DAMO) suggests China's AI chip market is fragmenting rather than consolidating around Huawei. | notable | bloomberg.com |
| 2026-03-31 | **Tract Capital $3.8B NVIDIA-backed data center junk bonds** — $14B in orders for $3.8B offering (3.7x oversubscribed). 30,000+ acres of powered land. Targeting 22GW electricity capacity. → Massive demand for AI data center debt even at junk-bond rates; the 22GW target represents roughly 2% of total US electricity generation capacity, illustrating the scale of the power appetite. | notable | bloomberg.com |
| 2026-03-30 | **Huawei 950PR: ByteDance + Alibaba place large orders** — Two of China's largest AI consumers placing significant orders for Huawei's latest AI accelerator chip, the Ascend 910C-class 950PR. → Concrete demand signal that China's domestic AI chip ecosystem is gaining commercial traction beyond government mandates; GLM-5.1 (trained on Huawei chips) validates that Huawei hardware can train frontier-scale models. | significant | bloomberg.com |
| 2026-03-30 | **Rebellions raises $400M pre-IPO at $2.34B — South Korea AI chip** — South Korean AI chip startup reaching a $2.34B valuation with a pre-IPO funding round. → South Korea emerging as a third non-US/China AI chip contender; raises the question of whether the global AI chip landscape fragments into US (NVIDIA/AMD), China (Huawei/Cambricon), and emerging markets (Rebellions, etc.). | notable | techcrunch.com |
| 2026-03-30 | **Microsoft/Crusoe 900MW AI factory in Abilene, Texas** — A 900-megawatt AI compute facility (900MW is roughly equivalent to the output of a small nuclear power plant) being built jointly by Microsoft and cloud GPU provider Crusoe in Texas. → Illustrates the datacenter power arms race continuing at scale; 900MW in a single facility is one of the largest AI compute deployments announced. | notable | bloomberg.com |
| 2026-03-30 | **Stargate Michigan — first steel beams placed, Oracle construction underway** — Physical construction of one of the Stargate AI infrastructure projects in Michigan has begun with foundation steel; Oracle is building out the data center. → Moves Stargate from announcement to physical reality; confirms the $500B+ AI infrastructure investment is translating to built capacity. | notable | detroitnews.com |
| 2026-03-30 | **Epoch AI: chip memory bandwidth grew 4.1x in last year, HBM now 90% of datacenter** — HBM (High Bandwidth Memory — a specialized stacked DRAM architecture that sits directly on the GPU die, enabling much higher memory bandwidth than conventional GDDR) now accounts for 90% of datacenter AI chip memory. 4.1x growth in memory bandwidth in one year. → Memory bandwidth, not compute cores, is now the key differentiator for AI chips; the memory compression techniques (TurboQuant) being developed are becoming even more strategically important in this context. | notable | epochai.org |
| 2026-03-30 | **Starcloud raises $170M for orbital data centers** — A startup building data centers in low Earth orbit (LEO satellites that serve as AI compute clusters in space). → Speculative but funded bet that energy constraints on ground-based datacenters become acute enough to justify the cost premium of orbital compute; worth monitoring as a potential indicator of how seriously the energy bottleneck is being taken. | notable | techcrunch.com |
| 2026-03-30 | **Biren Tech revenue triples on China AI chip demand** — Chinese AI chip company Biren Technology seeing 3x revenue growth driven by domestic demand. → Further evidence that China's AI chip market is consolidating around domestic suppliers; Biren joins Huawei Ascend and Cambricon as an increasingly credible domestic alternative. | notable | bloomberg.com |
| 2026-03-26 | **Meta increases El Paso data center to $10B / 1GW** — 6.6x investment escalation from original $1.5B. 1GW capacity by 2028. | notable | [CNBC](https://www.cnbc.com/2026/03/26/meta-to-spend-10-billion-on-ai-data-center-in-el-paso-1gw-by-2028.html) |
| 2026-03-25 | **NVIDIA demonstrates power-flexible AI factories as grid stabilizers** — At London Nebius factory (96 Blackwell Ultra GPUs), achieved 100% compliance across 200+ power targets, 30% consumption reduction in under 40 seconds. → AI data centers can be grid assets, not just grid burdens, potentially accelerating build-out approvals. | significant | blogs.nvidia.com |
| 2026-03-24 | **Alibaba XuanTie C950 — 5nm RISC-V CPU for agentic AI** — 3.2 GHz, 3x perf vs C920. First RISC-V to run 100B+ parameter models natively. Two AI compute engines (Vector + Matrix). 470K+ chips shipped. → China building own AI compute stack independent of Arm/x86 licensing. | significant | cnbc.com |
| 2026-03-24 | **NVIDIA donates GPU DRA driver to Kubernetes/CNCF at KubeCon** — moves GPU scheduling from vendor to community governance. Also Kata Containers GPU support for confidential AI computing. | significant | blogs.nvidia.com |
| 2026-03-24 | **Senators Warren & Banks push to expand chip export restrictions to Southeast Asia** — citing Supermicro indictment, bipartisan pressure to restrict AI chip exports beyond China to Malaysia, Thailand, Vietnam, Singapore. | notable | banking.senate.gov |
| 2026-03-24 | **Arm launches AGI CPU — first in-house datacenter chip** — 136-core Neoverse V3, TSMC 3nm, 300W TDP. Co-developed with Meta. Claims 2x perf/rack vs x86. OpenAI, Cerebras, Cloudflare, SAP committed. Arm stock +15%. → Attacks x86 datacenter duopoly with chip purpose-built for agentic AI. | significant | newsroom.arm.com |
| 2026-03-23 | GPU price hikes: GDDR7 shortages pushing RTX 5090 to $3K-$4.5K above MSRP — GDDR7 (the latest generation of graphics memory, needed for high-end GPUs) is in short supply, creating a bottleneck that inflates consumer GPU prices far beyond list price. This constrains local AI inference for individual developers and researchers. | notable | astutegroup.com |
| 2026-03-20 | Neurophos raises $110M for optical processing unit (OPU) — a chip that uses light instead of electrical signals to perform matrix multiplications (the core math operation in neural networks). Each chip contains 1M+ optical elements. Optical compute promises massive parallelism with far lower power consumption than electronic chips. | significant | datacenterdynamics.com |
| 2026-03-20 | 50% of datacenter projects may be delayed due to power access — the physical electrical infrastructure cannot keep pace with AI compute demand. Power availability is becoming the primary bottleneck for scaling AI training and inference, ahead of chip supply. | significant | techcrunch.com |
| 2026-03-20 | Kandou AI raises $225M from SoftBank/Synopsys for AI semiconductors — focuses on high-speed interconnect IP (intellectual property blocks that chip designers license to connect components at high bandwidth). Investment signals that the data-movement layer between chips is a critical and underfunded part of the AI hardware stack. | notable | llm-stats.com |
| 2026-03-17 | NVIDIA standalone Vera CPU — 256-chip liquid-cooled racks | significant | cnbc.com |
| 2026-03-17 | Marvell/Lumentum optical switching — 40% less latency for agents | notable | aiagentstore.ai |
| 2026-03-16 | NVIDIA Vera Rubin — 10x perf/watt, 7 chips, Feynman 2028, $1T orders | breakthrough | nvidianews.nvidia.com |
| 2026-03-16 | Groq 3 LPU — 35x tokens/watt, from NVIDIA's $20B acquisition | significant | the-decoder.com |
| 2026-03-11 | Meta MTIA 300-500 custom chips — RISC-V, new silicon every 6 months | significant | ai.meta.com |
| 2026-02-24 | Meta ~6GW AMD GPU infrastructure deal | significant | x.com |

## 30-Day Trend

Accelerating rapidly. NVIDIA Vera Rubin (10x perf/watt, $1T orders) is a breakthrough signal. Groq acquisition brings 35x tokens/watt inference into NVIDIA's stack. Meta building custom RISC-V silicon on 6-month cadence plus 6GW AMD deal. Optical interconnects (Marvell/Lumentum) addressing the latency bottleneck for agent workloads. The compute landscape is being rebuilt around agentic inference patterns.

## What to Watch For

- NVIDIA next-gen architecture announcements (post-Blackwell)
- AMD ROCm ecosystem reaching CUDA parity for key workloads
- New custom silicon announcements from cloud providers
- Memory technology breakthroughs (HBM4, CXL expansion)
- Price drops on inference hardware
- Power consumption improvements
- Groq/Cerebras production scaling

## Builder's Notes

(To be filled by daily scan — Phase 5)

## Related Nodes

- [[frontier-models]]
- [[edge-on-device-ai]]
- [[ai-business-funding]]
