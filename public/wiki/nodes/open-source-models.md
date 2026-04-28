---
name: Open Source Models
id: open-source-models
status: accelerating
impact: high
created: 2026-03-19
last_updated: 2026-04-27
related_nodes:
  - frontier-models
  - edge-on-device-ai
  - ai-infrastructure
  - ai-research-breakthroughs
tags:
  - node
  - models
  - open-source
---

# Open Source Models

## Current State

Open source AI is accelerating on multiple fronts simultaneously, with a new development that directly threatens the commercial voice AI market: Mistral's Voxtral (3B parameters, 90ms latency, open-weight) outperforms ElevenLabs in human preference evaluations 63% of the time. This follows the earlier Qwen3-TTS pattern — open-source TTS is now production-quality and free to deploy. Alibaba's Qwen 3.5-Omni brings open-source multimodal AI (text + image + audio + video in one model) to the open-weight ecosystem. The GLM-5.1 signal (744B MoE trained on Huawei chips) proves that frontier-scale open models can be built without NVIDIA hardware. Xiaomi's MiMo-V2-Pro 1T — revealed as the mystery "Hunter Alpha" — lands as the first open-source 1T-parameter agent-focused model, a new scale milestone. Qwen 3.5 Small demonstrates that a 9B open model can beat gpt-oss-120B on multilingual tasks, proving efficiency gains are compounding. Mistral pushed into formal verification with Leanstral, an Apache 2.0 Lean 4 proof agent — a novel niche for open source.

The tooling layer is surging: Microsoft BitNet gained 6,457 stars/week as 1-bit inference goes mainstream, HuggingFace Transformers v5.3.0 shipped with EuroBERT and VibeVoice support, Unsloth's local training UI is seeing rapid adoption, and H Company released Holotron-12B for open computer-use agents. The open-source ecosystem is no longer just chasing closed models — it's pioneering new capabilities (formal proofs, 1-bit inference, agent architectures) that closed labs haven't prioritized.

## Key Players

| Player | Models | Notable |
|--------|--------|---------|
| Meta | Llama 4 family | Largest open model ecosystem |
| Alibaba (Qwen) | Qwen 3 series | Fast iteration, strong multilingual |
| DeepSeek | DeepSeek-V3, R1 | Cost-efficient training, MoE pioneer |
| Mistral | Mistral Large, Mixtral | European leader, enterprise focus |
| Zhipu AI | GLM-4 series | 744B MoE, low hallucination |
| Hugging Face | Platform/Hub | Central distribution + tooling |

## Recent Signals

| Date | Signal | Significance | Source |
|------|--------|-------------|--------|
| 2026-04-26 | **HauhauCS plagiarizes Heretic abliteration (AGPL-3.0) — LLM-assisted refactoring used to launder copyleft code** — 5M+ monthly downloads across 22 uncensored HuggingFace models. Code analysis: 7/7 module filenames, 30/32 refusal markers, entire analyser geometry pipeline reproduced character-for-character. Original author Philipp Emanuel Weidmann confirmed: "plagiarized from Heretic, refactored by LLM to hide this." → First confirmed case of LLM-assisted license laundering at significant distribution scale. Establishes a new threat to AGPL copyleft: adversaries can use LLMs to structurally refactor copied code, making automated similarity detection harder. | notable | [Analysis](https://dreamfast.github.io/reaper-analysis) |
| 2026-04-24 | **DeepSeek V4 ships — 1.6T-parameter open-weight MoE, 1M context functionally agentic, MIT, FP4-Blackwell-native, production on Huawei Ascend 950** — V4-Pro = 1.6T total / 49B active; V4-Flash = 284B/13B active. Trained on 32T+ tokens with Muon. Three architecture innovations: DSA (sparse attention), hybrid Compressed Sparse Attention + Heavily Compressed Attention (4× / 128× compression), Manifold-Constrained Hyper-Connections. **27% of V3.2 inference FLOPs, 10% of KV cache memory** — what makes 1M context economically viable. B200 199 tok/sec; H200 266 tok/sec. **FP4 expert weights co-designed for Blackwell**; production-deployed on Huawei Ascend 950 with full hardware-specific tuning. Native integration with Claude Code/OpenClaw/OpenCode. Beats all open + rivals top closed on Math/STEM/Coding. Pricing $3.48/Mtok output (V4-Pro), $0.14/$0.28 (V4-Flash). MIT license. V3/V3.2 hard-retire 2026-07-24. **Miles RL framework** open-sourced same day (full DP/TP/SP/EP/PP/CP, FP8 rollout, R3). | breakthrough | [api-docs.deepseek.com](https://api-docs.deepseek.com/news/news260424) · [HuggingFace](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) · [LMSYS](https://www.lmsys.org/blog/2026-04-25-deepseek-v4/) |
| 2026-04-24 | **Tencent Hy3 Preview MoE 295B released** — Smaller-niche release; relevant for open-source inference infra (vLLM/Ollama support). | notable | [hipther.com](https://hipther.com/latest-news/2026/04/24/110724/) |
| 2026-04-22 | **Qwen 3.6-27B dense — 27B Apache 2.0 outperforms own Qwen3.5-397B-A17B MoE on coding** — Dense 27B (no MoE routing), 262K context (extensible to 1M), native multimodal, "Thinking Preservation." Beats parent MoE: 77.2 SWE-bench Verified vs 76.2; 59.3 Terminal-Bench 2.0 vs 52.5; 48.2 SkillsBench vs 30.0. Q4_K_M GGUF = 16.8GB on single consumer GPU. r/LocalLLaMA: ~50 tok/s on RTX 5090 at Q6_K with 200K context. → First credible "dense beats MoE" data point in coding; agentic-coding-grade model on consumer hardware. | notable | [Hugging Face](https://huggingface.co/Qwen/Qwen3.6-27B) · [simonwillison.net](https://simonwillison.net/2026/Apr/22/qwen36-27b/) |
| 2026-04-22 | **DeepSeek TileKernels — open-source GPU-kernel library in tilelang DSL** — Kernels for MoE routing, FP8/FP4/E5M6 quantization, batched transpose, gating. Targets NVIDIA SM90/SM100. 1,207 stars in 4 days. tilelang gaining ground vs CUTLASS/Triton as serious DSL competitor. | notable | [github.com](https://github.com/deepseek-ai/TileKernels) |
| 2026-04-22 | **HuggingFace community Gemma 4 VLA on Jetson Orin Nano Super** — Community demo of Gemma-4-based vision-language-action model running on $249 Jetson Orin Nano Super dev board. → Edge-robotics VLA inference now reaches $249-class hardware; Gemma 4 repurposed as robotics substrate. | notable | [huggingface.co](https://huggingface.co/blog/nvidia/gemma4) |
| 2026-04-21 | **HuggingFace ml-intern — open-source agent for automated LLM post-training** — Built on smolagents. Autonomously does literature review (arXiv/HF Papers), dataset discovery, training script execution, failure diagnosis, iterative retraining. Supports GRPO (Group Relative Policy Optimization — RL method that computes advantages from relative rewards within sampled groups, no value network, lower memory). Launch demo: pushed Qwen3-1.7B GPQA 10% → 32% in <10 hours on one H100; outperformed Claude Code's 22.99% on same task. Integrates HF Jobs (compute) + Trackio (experiment tracking). → "Agent automates LLM post-training" is now an open framework, not an internal lab capability. Compresses weeks of ML-engineering effort into an overnight run. | significant | [github.com](https://github.com/huggingface/ml-intern) |
| 2026-04-21 | **HuggingFace QIMMA Arabic LLM leaderboard — TII (Falcon team)** — New Arabic-language quality-first open leaderboard. → Regional open-source benchmark infrastructure; relevant to sovereign-AI thread. | notable | [huggingface.co](https://huggingface.co/blog/tiiuae/qimma-arabic-leaderboard) |
| 2026-04-20 | **Moonshot Kimi K2.6 — 1T MoE open-weight beats GPT-5.4 + Opus 4.6 on SWE-Bench Pro** — 1T params (32B active per token), 262K context, native vision via MoonViT. SWE-Bench Pro 58.6% (vs GPT-5.4 57.7%, Opus 4.6 53.4%). SWE-Bench Verified 80.2%. Agent swarm scales to 300 parallel sub-agents × 4,000 coordinated steps (K2.5 was 100/1,500). Input pricing $0.60/M — ~10× cheaper than closed frontier. Modified MIT license. → First open-weight model to cleanly beat closed frontier on a non-saturated real-engineering benchmark. Coding moat for closed models is gone. | significant | [marktechpost.com](https://www.marktechpost.com/2026/04/20/moonshot-ai-releases-kimi-k2-6-with-long-horizon-coding-agent-swarm-scaling-to-300-sub-agents-and-4000-coordinated-steps/) |
| 2026-04-17 | **DeepSeek V4 release imminent — 1T MoE, 1M context, Huawei Ascend native** — Founder Liang Wenfeng confirmed late-April 2026 release targeting Huawei Ascend chips rather than NVIDIA. 1T total parameters with ~32–37B active per token. Simultaneously, DeepSeek is raising its first external capital ever ($300M at $10B+). → Second frontier-class Chinese open model built on non-NVIDIA silicon (after GLM-5.1). Pattern confirms: US chip export controls redirect, do not block, frontier training. | significant | [theinformation.com](https://www.theinformation.com/articles/chinas-deepseek-raising-money-first-time-10-billion-plus-valuation) |
| 2026-04-16 | **Qwen3.6-35B-A3B released — 35B total / 3B active MoE beats Opus on pelican-SVG** — Apache 2.0 license. 256 experts (8 routed + 1 shared per token, expert intermediate dim 512). SWE-bench Verified 73.4, SWE-bench Pro 49.5, LiveCodeBench v6 80.4, MMLU-Pro 85.2, GPQA Diamond 86.0, AIME 2026 92.7. 262K native context extensible to 1.01M via YaRN. Multi-token prediction training, vision encoder, thinking mode. Simon Willison's pelican-SVG benchmark: Qwen edged out the same-day Claude Opus 4.7. ~60 tok/s on RTX 4060 Ti 16GB. → Open-weight 35B model on a consumer GPU is now competing with closed frontier models on specific structured tasks. Shifts the "open vs closed" frontier line below consumer hardware cost. | breakthrough | [huggingface.co](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) |
| 2026-04-16 | **Ternary Bonsai 8B — 1.58-bit in-browser inference at 60 tok/s** — Weight quantization restricted to {-1, 0, +1} (ternary), eliminating most floating-point multiplies. 8B-param version ~2GB, 60 tok/s on M4 Max entirely in-browser via WebGPU. → Production-viable ternary LLMs at 8B scale on consumer laptops. Enables serverless, private LLM inference in a browser tab — a category that didn't exist at useful quality 60 days ago. | significant | huggingface.co |
| 2026-04-15 | **Mistral Voxtral TTS open-weights — 4B, 70ms latency, 9 languages** — 4B-parameter open-weights TTS. 70ms time-to-first-audio, voice cloning from 3s reference, 9 languages with strong cross-lingual transfer. → Open-source TTS now competitive with ElevenLabs on latency/quality; removes voice-synthesis vendor lock for voice-agent builders. Voxtral-1 (March 30) was 3B/90ms — 30% latency improvement in ~6 weeks. | significant | mistral.ai |
| 2026-04-15 | **Tencent HY-World 2.0 — fully open-source 3D world model** — Weights, code, technical details released. Generates, reconstructs, simulates interactive 3D worlds from text, images, video. Outputs integrate into game engines and embodied-simulation pipelines (one-click world generation). → Open-source world-model class now includes a Chinese tech-giant-scale release rivaling closed Genie/Lyra. Game-engine pipeline integration is the practical deployment path. | significant | [huggingface.co](https://huggingface.co/tencent/HY-World-2.0) |
| 2026-04-15 | **Mozilla Thunderbolt — open-source enterprise AI client** — Mozilla announced Thunderbolt as an open-source enterprise AI client (Phoronix coverage). → Open-source enterprise AI front-end category expansion; Mozilla enters space dominated by closed-source workflow vendors. | notable | phoronix.com |
| 2026-04-11 | **Alibaba pivots from open-source to revenue (FT report)** — Qwen parent shifting strategy to monetization | significant | ft.com |
| 2026-04-10 | **GLM 5.1 tops code arena for open models, beats GPT-5.4** — Zhipu AI's GLM 5.1 (744B MoE, trained on Huawei chips) reached #1 on the code arena leaderboard among open-source models, and outperforms OpenAI's GPT-5.4 on coding benchmarks. → An open model trained entirely on Chinese domestic hardware beating a frontier closed model on coding tasks is a landmark signal for both open-source competitiveness and China's compute independence. | notable | zhipuai.cn |
| 2026-04-10 | **Qwen 3.6 community voting: dense model wins, release imminent** — Alibaba ran a community vote on Qwen 3.6 architecture direction, and the community chose a dense model (all parameters active per query) over MoE. Release imminent. → Community-driven architecture decisions are a new dynamic in open-source model development; the preference for dense models suggests users value simplicity and deployment ease over theoretical efficiency gains from MoE. | notable | qwen.ai |
| 2026-03-31 | **Qwen 3.6 Plus Preview — 1M context window, 65K output tokens, built-in tool use + chain-of-thought** — Alibaba's latest Qwen model extends to 1M token context (the maximum amount of text the model can process in a single input) with 65K output tokens, and natively supports tool calling (invoking external functions/APIs during generation) and chain-of-thought reasoning (showing intermediate reasoning steps before the final answer). Free during preview period. → Alibaba maintaining aggressive release cadence; 1M context + native tool use positions this as a strong open alternative for agentic workflows that require processing large codebases or document collections. | notable | openrouter.ai |
| 2026-03-31 | **llama.cpp reaches 100K GitHub stars** — The most widely-used open-source inference engine for running LLMs locally crossed 100K stars on GitHub, a community milestone. → Signals the health and scale of the local/open-source inference ecosystem; llama.cpp is the critical infrastructure layer that makes open-weight models practically usable on consumer hardware. | notable | github.com |
| 2026-03-30 | **Mistral releases Voxtral — open-weight TTS beats ElevenLabs 63% of time** — Voxtral is an open-weight (publicly downloadable weights, deployable on your own infrastructure) TTS (Text-to-Speech — converting text to spoken audio) model at 3 billion parameters, achieving 90ms latency (the delay between receiving text and beginning audio output) across 9 languages. In human preference evaluations, it outperforms ElevenLabs' commercial TTS product 63% of the time. → Breaks ElevenLabs' voice quality moat by making a comparable open-weight model freely available; any developer can now build production-grade multilingual voice features without per-character API fees. | significant | mistral.ai |
| 2026-03-30 | **GLM-5.1 (Zhipu/Z.AI) — 744B MoE, trained entirely on Huawei chips** — A 744-billion-parameter Mixture of Experts model (where only a fraction of those 744B parameters activate per input) from Zhipu AI's Z.AI division, notable for being trained entirely on Huawei's Ascend AI chips — no NVIDIA GPUs. → Validates that a frontier-scale open model can be produced on China's domestic AI compute stack, which is critical context for export control policy; it demonstrates China is closer to hardware independence than the chip restrictions implied. | notable | zhipuai.cn |
| 2026-03-30 | **Alibaba Qwen 3.5-Omni multimodal model + Flash/Light variants** — Qwen 3.5-Omni processes text, images, audio, and video in a single model. Flash and Light variants offer different cost/performance tradeoffs. Released as open-weight. → Alibaba continuing aggressive open-source release cadence across model types; the omni approach (all modalities, one model) reduces deployment complexity. | notable | qwen.ai |
| 2026-03-27 | **Meta SAM 3.1 — object multiplexing, 2x speed** — Tracks 16 objects in one forward pass, 32 FPS on H100. Open source. | notable | [Meta AI Blog](https://ai.meta.com/blog/segment-anything-model-3/) |
| 2026-03-24 | **AI2 MolmoWeb — open-weight web agent beats GPT-4o** — 4B/8B models on Molmo 2, screenshot-based browser navigation. Includes MolmoWebMix (36K trajectories, 590K+ actions). No proprietary distillation. → Largest open web agent dataset + model that outperforms leading closed models. | significant | allenai.org |
| 2026-03-20 | DeepSeek V4 released — continued open-source frontier push. DeepSeek has consistently trained models with novel efficiency techniques (e.g., aggressive MoE routing, distillation from larger models). V4 keeps them at the frontier of what open-weight models can do, putting competitive pressure on closed-source providers to justify their pricing. | significant | clawpod.co |
| 2026-03-20 | Mistral Small 4 released — multimodal (processes text, images, and potentially other input types in a single model), Apache 2.0 license (fully permissive, allowing commercial use with no restrictions). Expands the set of capable small models available for production deployment without licensing friction. | notable | llm-stats.com |
| 2026-03-16 | Mistral Large 3 (675B MoE) — a 675-billion-parameter Mixture of Experts model (only a subset of those 675B parameters activate per input, keeping inference cost manageable). Reaches 92% of GPT-5.2's benchmark performance at roughly 15% of the cost. Demonstrates that open-weight models are closing the quality gap with closed frontier models while maintaining a dramatic cost advantage. | significant | machinebrief.com |
| 2026-03-11 | NVIDIA Nemotron 3 Super — 120B total / 12B active MoE architecture (120 billion total parameters but only 12 billion activate per query, a 10:1 sparsity ratio that keeps inference fast and cheap). Open-source release from NVIDIA signals that hardware companies see value in providing strong open models to drive adoption of their compute stack. | significant | llm-stats.com |
| 2026-03-19 | Xiaomi MiMo-V2-Pro 1T — open-source agent-focused model | significant | technology.org |
| 2026-03-19 | Unsloth local training UI +2,552 stars/week | notable | github.com |
| 2026-03-17 | H Company Holotron-12B — open computer-use agent model | notable | huggingface.co |
| 2026-03-16 | Mistral Leanstral — open-source Lean 4 proof agent, Apache 2.0 | significant | mistral.ai |
| 2026-03-10 | Microsoft BitNet surge +6,457 stars/week — 1-bit inference | significant | github.com |
| 2026-03-04 | HuggingFace Transformers v5.3.0 — EuroBERT, VibeVoice, TimesFM2.5 | significant | github.com |
| 2026-03-03 | Qwen 3.5 Small (0.8-9B) — 9B beats gpt-oss-120B on multilingual | significant | venturebeat.com |

## 30-Day Trend

Accelerating strongly. Open source reaching 1T-parameter scale (Xiaomi MiMo-V2-Pro), sub-10B models beating 100B+ closed models on targeted tasks (Qwen 3.5 Small), and novel capabilities like formal proof agents (Mistral Leanstral) emerging open-first. Tooling momentum (BitNet 1-bit inference, Unsloth local training, HF Transformers v5.3.0) is lowering the barrier to running and fine-tuning large models locally.

## What to Watch For

- Llama 5 release timeline and capabilities
- DeepSeek next-gen architecture announcements
- Qwen models matching GPT-4o class on key benchmarks
- New efficient architectures (beyond Transformer)
- Licensing changes — any move away from permissive licenses
- Community fine-tunes that beat base models on specific domains

## Builder's Notes

(To be filled by daily scan — Phase 5)

## Related Nodes

- [[frontier-models]]
- [[edge-on-device-ai]]
- [[ai-infrastructure]]
- [[ai-research-breakthroughs]]
