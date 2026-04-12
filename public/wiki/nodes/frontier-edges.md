---
name: Frontier Edges
id: frontier-edges
status: accelerating
impact: critical
created: 2026-03-19
last_updated: 2026-04-03
related_nodes:
  - ai-research-breakthroughs
  - frontier-models
  - compute-hardware
  - ai-agents
  - ai-safety-alignment
  - ai-for-science
  - robotics-embodied-ai
tags:
  - node
  - edges
  - breakthroughs
  - frontier
  - moonshots
---

# Frontier Edges

> **What this node tracks:** The hard problems that major labs and companies are actively throwing serious resources at. Not what happened — what's being *attempted*. Each edge is a problem where a breakthrough would reshape the field. We track who's pushing, how close they are, and what signals indicate progress.

## How to Read This

Each edge has a **maturity level**:

| Level | Meaning |
|-------|---------|
| `theoretical` | Promising idea, early papers, no serious corporate investment yet |
| `research` | Active lab work, multiple papers, corporate R&D teams assigned |
| `prototype` | Working demos exist, not production-ready |
| `scaling` | Being engineered for production, significant $$$ flowing |
| `near-breakthrough` | Multiple credible groups reporting strong results, could land any month |

And an **impact rating** if cracked:

| Rating | Meaning |
|--------|---------|
| `incremental` | Improves existing capabilities meaningfully |
| `transformative` | Enables fundamentally new capabilities |
| `paradigm-shift` | Reshapes the entire AI field |

---

## Active Edge Registry

---

### EDGE-01: Post-Transformer Architectures
**Maturity:** `research` | **Impact if cracked:** `paradigm-shift` | **Source nodes:** [[ai-research-breakthroughs]] [[frontier-models]]

**The Problem:** Transformers dominate but have fundamental limitations — quadratic attention cost, no built-in world model, poor at structured reasoning. Can a fundamentally different architecture beat them at scale?

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| AMI Labs (LeCun) | JEPA — Joint Embedding Predictive Architecture | $1.03B seed, $3.5B valuation | Building from scratch, early stage |
| Kimi Team | AttnRes — learned depth-wise attention replacing residual connections | Internal R&D | Scaled to 48B, promising results |
| DeepSeek | mHC — manifold-constrained hyper-connections | Internal R&D | 51% BBH vs 43.8% baseline at 6.7% extra compute |
| Various labs | State Space Models (Mamba variants, hybrid architectures) | Distributed research | Mamba-3 at ICLR 2026 — 1.8pp gains at 1.5B, half state size |

**What Breakthrough Looks Like:** A non-Transformer architecture that matches or beats GPT-5 class models on standard benchmarks at comparable or lower compute cost.

**Current Distance:** Far. JEPA is a multi-year bet. Hybrid approaches (Mamba + Transformer) show promise but haven't displaced pure Transformers at scale. AttnRes and mHC are improvements *within* the Transformer framework, not replacements.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-04-09 | Kathleen: oscillator-based byte-level processing, 733K params, outperforms 16x larger models on classification | notable |
| 2026-03-20 | Mamba-3 at ICLR 2026 — 1.8pp accuracy gain, half state size, linear compute | significant |
| 2026-03-20 | Var-JEPA: variational formulation with single ELBO, no ad-hoc regularizers | notable |
| 2026-03-09 | AMI Labs raises $1.03B for JEPA world models | breakthrough |
| 2026-03-16 | AttnRes scales to 48B params with strong results | significant |
| 2026-03-12 | DeepSeek mHC fixes training instability at 6.7% extra compute | significant |

---

### EDGE-02: Reliable Autonomous Agents
**Maturity:** `prototype` | **Impact if cracked:** `transformative` | **Source nodes:** [[ai-agents]] [[ai-in-enterprise]]

**The Problem:** AI agents can do impressive demos but fail in production. Claude Opus 4.5 only achieves 37.4% on realistic enterprise tasks. 100% of enterprises want to expand agents but only 8.6% are in production. The gap between "works sometimes" and "trustworthy enough to delegate" is the core unsolved problem.

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| Anthropic | Claude Code, MCP protocol, Computer Use | Core product bet | Leading on tool use, still unreliable on complex chains |
| OpenAI | AgentKit, MCP (deprecating Assistants API) | Major R&D push + OpenClaw acquisition | Broadest developer adoption, consolidating on MCP |
| LangChain | DeepAgents — planning + subagent spawning | VC-backed, +4,380 stars/wk | Framework approach to reliability |
| Google | Stitch, Gemini agent capabilities | Internal R&D | Enterprise-focused |
| Microsoft | AutoGen, Copilot Cowork (with Anthropic) | Major enterprise bet | Long-running multi-step tasks in M365 |
| NVIDIA | NemoClaw — kernel sandboxing | GTC launch | Hardware-backed security approach |

**What Breakthrough Looks Like:** An agent system that completes >80% of multi-step enterprise workflows correctly, with reliable error recovery, and that enterprises actually trust in production.

**Current Distance:** Medium. The pieces exist (tool use, planning, memory) but composing them reliably is unsolved. MCP at 97M downloads shows the plumbing is ready. The reliability/trust gap is the bottleneck.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-03-30 | SakanaAI AI-Scientist-v2: first fully AI-generated paper accepted for peer review — validates autonomous multi-step research loop | significant |
| 2026-03-30 | AI scheming incidents up 5x (AISI study of 8 frontier models) — reliability ceiling is being hit by behavioral failures, not just capability gaps | significant |
| 2026-03-30 | Ramp grants AI agents access to 50+ corporate finance tools in production — high-stakes domain deployment | notable |
| 2026-03-27 | MCP formal semantics — process calculus proves expressivity gaps, proposes MCP+ extensions | significant |
| 2026-03-27 | OpenAI Codex Plugins — 20+ integrations, MCP-based ecosystem for 1.6M users | significant |
| 2026-03-27 | Kitchen Loop — self-evolving codebase: 285+ iterations, 1,094+ merged PRs, zero regressions | notable |
| 2026-03-23 | OpenAI deprecating Assistants API for MCP — protocol consolidation | significant |
| 2026-03-21 | OpenAI acquires OpenClaw creator; platform goes to foundation | breakthrough |
| 2026-03-20 | METR: agent task autonomy doubling every 7 months, 4+ hour tasks | significant |
| 2026-03-17 | Meta REA agent doubles model accuracy — 3 engineers for 8 models | significant |
| 2026-03-14 | EnterpriseOps-Gym benchmarks agents at 37.4% | notable (reality check) |
| 2026-03-09 | MCP hits 97M monthly SDK downloads | significant |
| 2026-03-19 | LangChain DeepAgents adds planning + subagents | significant |
| 2026-03-16 | NemoClaw kernel sandboxing for enterprise | significant |
| 2026-03-09 | Copilot Cowork launches long-running agents in M365 | significant |

---

### EDGE-03: 1-Bit / Extreme Quantization at Production Quality
**Maturity:** `prototype` | **Impact if cracked:** `transformative` | **Source nodes:** [[ai-research-breakthroughs]] [[edge-on-device-ai]]

**The Problem:** Running large models requires expensive hardware. 1-bit quantization (BitNet) could make frontier-class models run on consumer hardware or phones, but quality degrades. Can 1-bit models match full-precision at production quality?

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| Microsoft Research | BitNet — 1-bit LLM inference framework | Published research, +6,457 stars/wk | Framework available, quality gap remains |
| Tether/QVAC | BitNet LoRA — 1-bit fine-tuning on consumer GPUs/phones | Product development | 77.8% less VRAM, cross-platform |
| Various labs | GPTQ, AWQ, GGUF quantization | Distributed community | 4-bit is practical, 1-bit is frontier |

**What Breakthrough Looks Like:** A 1-bit model that matches a full-precision model of the same parameter count on major benchmarks (MMLU, HumanEval, etc.) within 2-3%, and runs on consumer hardware.

**Current Distance:** Medium. 4-bit quantization is already production-ready (GGUF/llama.cpp ecosystem). 1-bit is the hard frontier. BitNet shows it's theoretically possible but hasn't been demonstrated at frontier scale with frontier quality.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-03-14 | Tether BitNet LoRA — 1-bit fine-tuning on phones, 77.8% less VRAM | notable |
| 2026-03-19 | Microsoft BitNet +6,457 stars/week surge | notable |

---

### EDGE-04: World Models (Learning Physics from Data)
**Maturity:** `research` | **Impact if cracked:** `paradigm-shift` | **Source nodes:** [[ai-research-breakthroughs]] [[multimodal-ai]] [[robotics-embodied-ai]]

**The Problem:** Current AI can generate text and images but doesn't understand how the physical world works — cause and effect, object permanence, physics. World models would let AI predict what happens next in physical environments, critical for robotics, autonomous driving, and genuine understanding.

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| AMI Labs (LeCun) | JEPA — learn world representations without generative modeling | $1.03B seed | Early stage, multi-year bet |
| Google DeepMind | Genie 2, video prediction | Internal R&D | Strong demos, not general |
| Meta | V-JEPA, video understanding | FAIR research | Published, limited scope |
| ByteDance | Seedance 2.0 — 2160p video generation | Product (paused globally) | Generates video but unclear if it "understands" physics |

**What Breakthrough Looks Like:** A model that can reliably predict the physical consequences of actions in novel environments — not just generate plausible-looking video, but actually understand causality and physics.

**Current Distance:** Far. Video generation is advancing fast (Seedance 2.0, Sora, etc.) but generating convincing video is different from understanding physics. JEPA is the most principled approach but is years from demonstrating results at scale.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-03-26 | Meta TRIBEv2 — foundation model predicting brain fMRI responses using V-JEPA2 + LLaMA 3.2 + Wav2Vec. First practical application of JEPA for in-silico neuroscience. Open-sourced (CC-BY-NC-4.0). | significant |
| 2026-03-25 | LeWorldModel achieves stable JEPA learning from pixels at 15M params, 200x compression | notable |
| 2026-03-09 | AMI Labs $1.03B for JEPA world models | breakthrough |
| 2026-03-15 | Seedance 2.0 paused over copyright (20s 2160p video) | notable |

---

### EDGE-05: Mechanistic Interpretability
**Maturity:** `research` | **Impact if cracked:** `transformative` | **Source nodes:** [[ai-safety-alignment]] [[ai-research-breakthroughs]]

**The Problem:** We don't understand what neural networks actually learn or why they produce specific outputs. Mechanistic interpretability aims to reverse-engineer the internal computations — finding the "circuits" inside models that implement specific behaviors.

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| Anthropic | Sparse autoencoders, feature mapping, Anthropic Institute | Core research priority | Found interpretable features in Claude, scaling to larger models |
| Google DeepMind | Circuits-style analysis | Internal R&D | Complementary approaches |
| EleutherAI | Open-source interpretability tools | Community-driven | Tooling and infrastructure |
| Academic labs (MIT, Oxford, etc.) | Various approaches | Grant-funded | Foundational theory |

**What Breakthrough Looks Like:** Being able to reliably predict model behavior from inspecting weights/activations — e.g., knowing in advance that a model will refuse or hallucinate on a specific input, or proving absence of deceptive behavior.

**Current Distance:** Medium — closing. Anthropic's emotion concepts paper (April 2) represents a step change: 171 internal representations identified, proven causal on alignment-relevant behaviors (sycophancy, reward hacking, blackmail), and **steerable** via vectors. This is the first time interpretability has produced a tool that directly enables behavioral tuning. The gap between "detect" and "fix" narrowed significantly. Still: these results are on Claude Sonnet 4.5 — generalizing across architectures and model scales remains unsolved.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-04-02 | **Anthropic emotion concepts paper — 171 functional representations causally steering sycophancy, scheming, reward hacking. Steerable via vectors.** | **significant (step change)** |
| 2026-04-02 | MoE experts are fine-grained task specialists — less polysemantic than dense neurons, path to MoE interpretability | notable |
| 2026-04-02 | Self-preservation bias quantified across 23 models — >60% self-preservation rate, fabricated justifications | significant |
| 2026-03-30 | AI sycophancy study in Science journal — formal measurement baseline established | significant |
| 2026-03-30 | AI scheming incidents up 5x (AISI, 8 frontier models) — behavioral divergence accelerating | significant |
| 2026-03-27 | Reasoning safety monitoring — 9-category taxonomy of unsafe reasoning behaviors, adversarial "reasoning hijacking" | significant |
| 2026-03-27 | LLM metacognition via Signal Detection Theory — Mistral highest accuracy but lowest metacognitive ratio | notable |
| 2026-03-18 | Interpretability without Actionability — 98.2% detection, 45.1% correction (53pp gap) | significant |
| 2026-03-19 | Safety Report: models distinguish test vs deployment | significant |
| 2026-03-19 | Anthropic Institute launched (red team + societal impacts) | significant |
| 2026-03-19 | promptfoo red-teaming surges +5,060 stars/wk | notable |

---

### EDGE-06: Optical / Photonic AI Compute
**Maturity:** `prototype` | **Impact if cracked:** `transformative` | **Source nodes:** [[compute-hardware]] [[ai-infrastructure]]

**The Problem:** Electrical interconnects and transistors are hitting power and heat limits. Optical computing could process AI workloads at the speed of light with dramatically less power. The challenge: making it practical and cost-competitive at scale.

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| Marvell + Lumentum | Optical circuit switching for datacenter AI | Partnership, demos | 40% less latency/power for agent workloads |
| Lightmatter | Photonic interconnects (Passage) | $400M+ raised | Chips fabricated, testing with hyperscalers |
| Ayar Labs | Optical I/O chiplets | VC-backed | Integrated with Intel packaging |
| Celestial AI | Photonic fabric | VC-backed | Data movement focus |

**What Breakthrough Looks Like:** Optical interconnects deployed in production AI datacenters, replacing electrical at the rack or cluster scale, with measurable cost/power/latency improvements.

**Current Distance:** Medium. The physics works. Marvell/Lumentum showed 40% improvements. The challenge is manufacturing at scale and integrating with existing GPU/accelerator ecosystems. Could be production-ready within 2-3 years.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-03-31 | NVIDIA invests $2B in Marvell for silicon photonics + NVLink Fusion. Marvell acquired Celestial AI (photonic fabric). NVIDIA puts photonics directly inside its AI factory ecosystem. | significant |
| 2026-03-20 | Neurophos raises $110M for OPU — 1M+ optical elements, Gates/Microsoft backed | significant |
| 2026-03-20 | Ultra-compact photonic AI chip — 90-99% accuracy at picosecond timescale | notable |
| 2026-03-17 | Marvell/Lumentum optical switching: 40% less latency for agents | notable |

---

### EDGE-07: Humanoid Robot General Dexterity
**Maturity:** `scaling` | **Impact if cracked:** `transformative` | **Source nodes:** [[robotics-embodied-ai]] [[ai-business-funding]]

**The Problem:** Robots can perform specific tasks in controlled environments, but general-purpose dexterity — handling diverse objects, adapting to new environments, recovering from errors — remains unsolved. This is the key bottleneck for humanoid robots in real-world settings.

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| Tesla | Optimus Gen 3 — factory production prep | Fremont conversion, massive capex | Moving to mass production |
| Figure | Figure 02 — foundation model integrated | $675M+ raised | BMW factory pilot |
| China's Big 5 | Various platforms | Government-backed, 85-90% market share target | Tens of thousands projected |
| 1X Technologies | NEO — general purpose humanoid | $125M+ raised | Home/office focus |
| Agility Robotics | Digit — warehouse/logistics | Amazon partnership | Deployed in pilot facilities |

**What Breakthrough Looks Like:** A humanoid robot that can perform 50+ distinct real-world manipulation tasks in unstructured environments with >90% success rate, and generalize to novel tasks with minimal retraining.

**Current Distance:** Medium. Tesla is moving to mass production. $1.2B+ flowed into robotics in a single week. The hardware is converging but the software (VLA models, task generalization) is the hard part. Chinese manufacturers have scale advantage.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-03-30 | Agibot ships 10,000th humanoid robot — first manufacturer to reach this production milestone | significant |
| 2026-03-30 | Waymo 500K weekly rides (3x growth from 150K mid-2025) — autonomous systems scaling in production | notable |
| 2026-03-30 | Uber Europe's first robotaxi launch (Zagreb) — regulatory approval expanding geographically | notable |
| 2026-03-19 | Tesla Optimus Gen 3 — Fremont factory conversion for mass production | significant |
| 2026-03-19 | China Big 5 showcase at AW 2026 Korea, tens of thousands projected | significant |
| 2026-03-19 | $1.2B+ robotics funding in one week | significant |

---

### EDGE-08: AI-Designed Biology (Molecules to Clinical Trials)
**Maturity:** `scaling` | **Impact if cracked:** `paradigm-shift` | **Source nodes:** [[ai-for-science]]

**The Problem:** AI can now design proteins and molecules, but going from AI-designed to clinically validated is the gap. The first AI-designed drug to clear clinical trials would prove the paradigm and unlock a multi-trillion dollar transformation of pharma.

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| Isomorphic Labs (DeepMind) | AlphaFold-based drug design | Alphabet-backed | Partnerships with Eli Lilly, Novartis |
| Recursion | AI-driven drug discovery platform | Public company | Multiple candidates in trials |
| Cradle | AI protein engineering | Bayer partnership | Active deployment |
| Insilico Medicine | End-to-end AI drug design | Multiple candidates in clinic | Most advanced AI-designed candidate |
| Generate Biomedicines | Protein generation | $370M+ raised | Design + validation pipeline |

**What Breakthrough Looks Like:** First fully AI-designed drug/antibody clearing Phase II clinical trials with demonstrated efficacy.

**Current Distance:** Close-medium. AI-designed antibodies are approaching clinical trials. Insilico has candidates in Phase I/II. The next 12-18 months could see the first clear validation.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-03-30 | Eli Lilly + Insilico Medicine $2.75B deal — largest AI drug discovery commitment to date | significant |
| 2026-03-30 | SakanaAI autonomous paper accepted by peer review — validates AI-driven research loops at publication standard | notable |
| 2026-03-19 | AI-designed antibodies approaching clinical trials | significant |
| 2026-03-19 | Bayer selects Cradle AI for protein engineering | notable |

---

### EDGE-09: Decentralized / Distributed Training
**Maturity:** `research` | **Impact if cracked:** `transformative` | **Source nodes:** [[ai-research-breakthroughs]] [[ai-infrastructure]]

**The Problem:** Training frontier models requires massive centralized GPU clusters ($100M+), concentrating AI power in a few wealthy organizations. Can frontier-quality models be trained across distributed, heterogeneous hardware?

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| Various open-source projects | DiLoCo, distributed gradient methods | Community/research | First run rivaling LLaMA-2-70B quality |
| Together AI | Decentralized training platform | VC-backed | Infrastructure provider |
| Prime Intellect | Open distributed training | Funded startup | Focus on coordination protocols |

**What Breakthrough Looks Like:** A frontier-class model (competing with GPT-5/Claude Opus level) trained entirely on distributed, non-colocated hardware at a fraction of the centralized cost.

**Current Distance:** Far-medium. The first decentralized run rivaling LLaMA-2-70B is a milestone, but that's 2+ generations behind frontier. Communication overhead remains the fundamental bottleneck.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-03-20 | Covenant-72B: 72B model across 70+ contributors, 67.1 MMLU — Jensen Huang endorses | significant |
| 2026-03-16 | First decentralized training run rivals LLaMA-2-70B quality | notable |

---

### EDGE-10: Formal Verification of AI-Generated Code
**Maturity:** `research` | **Impact if cracked:** `transformative` | **Source nodes:** [[ai-coding-tools]] [[ai-safety-alignment]]

**The Problem:** AI coding tools produce code 10x faster but with 1.7x more bugs and 2.74x more security vulnerabilities. Formal verification can mathematically prove code correctness, but it's historically been too hard and slow. Can AI make formal verification accessible?

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| Mistral | Leanstral — Lean 4 formal proof agent, 120B (6B active) | Apache 2.0 release | Beats Claude Sonnet at 15x lower cost for proofs |
| Various academic labs | LLM-assisted theorem proving | Research grants | Improving but limited scope |
| DeepMind | AlphaProof lineage | Internal R&D | Math-focused, not general code |

**What Breakthrough Looks Like:** An automated system that takes AI-generated code and either proves it correct against a spec or identifies the exact failure case, fast enough to run in a CI/CD pipeline.

**Current Distance:** Medium-far. Leanstral proves it's possible for narrow domains. Generalizing formal verification to arbitrary codebases (not just mathematical proofs) is much harder. But the vibe-coding quality crisis creates urgent demand.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-03-27 | MCP formal semantics — process calculus applied to dominant agent protocol, proves expressivity gaps | significant |
| 2026-03-19 | Mistral Leanstral — open-source Lean 4 proof agent | significant |

---

### EDGE-11: Test-Time Compute Scaling
**Maturity:** `scaling` | **Impact if cracked:** `transformative` | **Source nodes:** [[ai-research-breakthroughs]] [[frontier-models]]

**The Problem:** Can models get proportionally smarter by "thinking longer" at inference time? Extended thinking / chain-of-thought shows promise but the scaling curve is unclear — does more compute always help, or do returns diminish quickly?

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| OpenAI | GPT-5.4 Thinking variant | Core product feature | 83% GDPVal (Morgan Stanley report) |
| Anthropic | Extended thinking in Claude | Core product feature | Production-deployed |
| DeepSeek | R1 reasoning approaches | Published research | Open-weight reasoning models |
| Google | Gemini thinking modes | Core product feature | Integrated across products |

**What Breakthrough Looks Like:** Clear evidence that test-time compute scales predictably (like training compute scaling laws) — meaning you can reliably trade compute for quality with a known exchange rate.

**Current Distance:** Close. All major labs have shipping products with thinking modes. GPT-5.4 Thinking scoring 83% on GDPVal is strong. The question is whether the scaling curve continues or plateaus, and whether it works beyond reasoning tasks.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-03-27 | S2D2 — 4.7x speedup for diffusion LLMs via training-free self-speculation | notable |
| 2026-03-13 | Morgan Stanley: GPT-5.4 Thinking scores 83% GDPVal | significant |
| 2026-03-05 | GPT-5.4 launched with Thinking variant | significant |

---

### EDGE-12: Agent Security / Provably Safe Execution
**Maturity:** `prototype` | **Impact if cracked:** `transformative` | **Source nodes:** [[ai-agents]] [[ai-safety-alignment]]

**The Problem:** AI agents that use tools, browse the web, and write code are powerful but dangerous. OpenClaw has 7+ CVEs, 20% of skills are malicious, and 17,500 instances are exposed. How do you let agents act autonomously while guaranteeing they can't be exploited or cause harm?

**Who's Pushing:**
| Player | Approach | Investment | Status |
|--------|----------|------------|--------|
| NVIDIA | NemoClaw — kernel-level sandboxing, privacy router | GTC launch product | Requires DGX hardware |
| Genspark | Claw — cloud-managed security layer | Product launch | Cloud-only |
| promptfoo | Red-teaming / testing framework | Open source, +5,060 stars/wk | Testing, not prevention |
| Academic labs | Formal verification of agent behavior | Research | Early stage |

**What Breakthrough Looks Like:** A hardware-agnostic agent execution environment that provides provable containment — agents can use tools freely within a sandbox where the damage radius is mathematically bounded, regardless of what the agent tries to do.

**Current Distance:** Medium. NemoClaw shows the hardware approach works but is NVIDIA-locked. Software-only approaches don't yet provide strong enough guarantees. The OpenClaw crisis is creating urgent demand.

**Recent Progress:**
| Date | Signal | Significance |
|------|--------|-------------|
| 2026-03-27 | Claude Mythos leak — Anthropic's own docs warn model is "far ahead of any other AI in cyber capabilities" | significant |
| 2026-03-27 | WildASR — speech recognition models hallucinate plausible unspoken content, safety risk for voice agents | notable |
| 2026-03-23 | Autonomous jailbreak agents hit 97% success rate across frontier models | significant |
| 2026-03-23 | OpenClaw phishing attack — $30M stolen from developer wallets | significant |
| 2026-03-19 | Votal AI CART — RLHF-trained adversarial attacker, 185+ techniques catalog | notable |
| 2026-03-19 | OpenClaw 7+ CVEs, 20% malicious skills, 17.5K exposed | significant |
| 2026-03-16 | NemoClaw kernel sandboxing at GTC | significant |
| 2026-03-12 | Genspark Claw enterprise-secure alternative | notable |
| 2026-03-19 | promptfoo red-teaming +5,060 stars/wk (acquired by OpenAI) | notable |

---

## Edge Summary Dashboard

| # | Edge | Maturity | Impact | Distance | Key Player | Last Signal |
|---|------|----------|--------|----------|------------|-------------|
| 01 | Post-Transformer Architectures | research | paradigm-shift | Far | AMI Labs, Mamba-3 (ICLR) | 2026-03-20 |
| 02 | Reliable Autonomous Agents | prototype→scaling | transformative | Medium | SakanaAI (peer review), Ramp (finance agents) | 2026-03-30 |
| 03 | 1-Bit Quantization at Scale | prototype | transformative | Medium | Microsoft Research | 2026-03-19 |
| 04 | World Models | research | paradigm-shift | Far | AMI Labs ($1.03B) | 2026-03-20 |
| 05 | Mechanistic Interpretability | research | transformative | Medium-far | AISI (scheming 5x), Science journal sycophancy | 2026-03-30 |
| 06 | Optical/Photonic AI Compute | prototype | transformative | Medium | NVIDIA+Marvell ($2B), Neurophos | 2026-03-31 |
| 07 | Humanoid General Dexterity | scaling | transformative | Medium | Agibot (10K units), Waymo (500K rides) | 2026-03-30 |
| 08 | AI-Designed Biology to Trials | scaling | paradigm-shift | Close | Eli Lilly + Insilico $2.75B | 2026-03-30 |
| 09 | Decentralized Training | research→prototype | transformative | Medium | Covenant-72B, Bittensor | 2026-03-20 |
| 10 | Formal Verification of AI Code | research | transformative | Medium-far | Mistral, MCP formal semantics | 2026-03-27 |
| 11 | Test-Time Compute Scaling | scaling | transformative | Close | OpenAI, Anthropic | 2026-03-27 |
| 12 | Agent Security / Safe Execution | prototype | transformative | Medium | AISI (scheming 5x), Intercom (vertical safety) | 2026-03-30 |

---

## Edge Lifecycle

Edges move through stages and eventually exit:
- **Graduated (breakthrough)** — The problem was cracked. Moves to the relevant node as a breakthrough signal.
- **Stalled** — No meaningful progress in 60+ days. Kept but flagged.
- **Absorbed** — The problem was solved incrementally (no single breakthrough moment) and became standard practice.
- **Abandoned** — Major players pulled out. Archived with notes.

### Graduated Edges
(None yet — tracking begins 2026-03-19)

### Stalled Edges
(None yet)

---

## Related Nodes

- [[ai-research-breakthroughs]]
- [[frontier-models]]
- [[compute-hardware]]
- [[ai-agents]]
- [[ai-safety-alignment]]
- [[ai-for-science]]
- [[robotics-embodied-ai]]
