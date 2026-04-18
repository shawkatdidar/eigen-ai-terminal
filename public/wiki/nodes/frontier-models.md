---
name: Frontier Models
id: frontier-models
status: accelerating
impact: high
created: 2026-03-19
last_updated: 2026-04-17
related_nodes:
  - open-source-models
  - ai-safety-alignment
  - compute-hardware
  - ai-research-breakthroughs
tags:
  - node
  - models
  - frontier
---

# Frontier Models

## Current State

The frontier model landscape as of late March 2026 is being reshaped by a dramatic user migration and intensifying multi-lab competition. The #QuitGPT movement — a coordinated wave of 2.5M users abandoning ChatGPT — pushed Anthropic's Claude to #1 on the App Store with a reported 70% enterprise win rate (meaning Claude is chosen over competitors in 7 out of 10 enterprise evaluation processes). This is the first time OpenAI has lost its dominant distribution position, and it signals that model quality and trust are overtaking brand loyalty as the primary selection criteria.

Google's Gemini 3.1 Pro arrived with benchmark dominance across 13 of 16 standard evaluations, including a 77.1% score on ARC-AGI-2 (a reasoning benchmark designed to test genuine abstraction and generalization, not just pattern matching) and 94.3% on GPQA Diamond (a graduate-level science Q&A benchmark where questions are written and verified by domain PhD holders). At $2/M input tokens and $12/M output tokens, Gemini 3.1 Pro is priced competitively for its capability tier. Meanwhile, xAI's Grok 4.20 Beta introduced a four-agent architecture (using specialized sub-agents named Harper, Benjamin, and Lucas that divide reasoning tasks internally) — a novel approach where a single user query is decomposed and processed by multiple coordinating agents before returning a unified response. This is architecturally distinct from standard single-pass inference and may indicate a shift toward multi-agent-inside-the-model designs.

OpenAI is responding to market pressure with aggressive financial moves, offering private equity firms 17.5% guaranteed returns plus early access to unreleased models — an unusual fundraising structure that ties investment returns to model capabilities, suggesting OpenAI views its model pipeline as its strongest asset. Anthropic's Sonnet 4.6 demonstrated extreme cost efficiency, scoring 100% on a practical 38-task coding benchmark at just $0.20 total cost, reinforcing the quality-per-dollar narrative driving the #QuitGPT migration.

The competitive picture has shifted from "who has the biggest model" to a three-way race on different axes: Google leading benchmarks, Anthropic leading user trust and coding reliability, and xAI experimenting with novel architectures. OpenAI's fundraising moves suggest it is preparing a major response. An accidental CMS leak revealed Anthropic's "Claude Mythos" — described internally as a tier above Opus with dramatically higher coding, reasoning, and cybersecurity scores, and notably flagged by Anthropic's own documentation as posing unprecedented cyber capabilities. This is the first known case of a frontier lab's own pre-release materials characterizing a model as a cybersecurity risk. Meanwhile, Apple's announcement that iOS 27 will allow users to replace Siri's AI backend with Claude, Gemini, or other models signals a shift toward the smartphone as a multi-model orchestration layer — transforming distribution dynamics by decoupling the AI provider from the device maker.

**Update 2026-04-17:** Two material shifts in the past 72 hours. First, **Claude Opus 4.7** shipped on April 16 and retook the coding lead from GPT-5.4 — SWE-bench Pro jumped +10.9pp (53.4% → 64.3%), visual acuity leaped from 54.5% to 98.5% (collapsing a prior agent blocker), and multi-step agent workflows improved 14% while emitting one-third the tool errors. Second, the Mythos story moved from leak to confirmed gating: Bloomberg's in-depth feature reports Anthropic withheld Mythos from public release after red-teamers (Nicholas Carlini + Logan Graham's Frontier Red Team) confirmed the model autonomously generates full cyber intrusion toolchains against Linux and other widely-deployed systems. The White House OMB is coordinating controlled access for federal agencies, and ECB President Lagarde and BoE Governor Bailey publicly raised Mythos cyber risk at IMF/World Bank meetings — the first time an unreleased frontier model has been flagged as a systemic financial-stability category. Anthropic simultaneously launched **Project Glasswing** (industry coalition on AI-cyber threats) and began rolling out **mandatory KYC** (passport/license + facial scan) on Claude consumer accounts. The combined picture: Anthropic is establishing a "gated dual-use" deployment pattern where offensive-cyber-capable models ship to vetted defenders rather than open APIs.

## Key Players

| Player | Current Model | Notable |
|--------|--------------|---------|
| Anthropic | Claude Opus 4.7, Sonnet 4.6, Haiku 4.5, Mythos (gated) | Opus 4.7 SWE-bench Pro 64.3%, XBOW 98.5%; Mythos withheld on cyber risk |
| OpenAI | GPT-5 series | Broadest ecosystem, ChatGPT distribution |
| Google DeepMind | Gemini 3.1 Pro/Flash | Benchmark leader (13/16), best multimodal |
| xAI | Grok 4.20 Beta | Four-agent architecture, fast iteration |
| Meta | Muse Spark (closed), Llama 4 (open) | First closed model from MSL/Wang, strategic pivot |

## Recent Signals

| Date | Signal | Significance | Source |
|------|--------|-------------|--------|
| 2026-04-16 | **Claude Opus 4.7 GA** — SWE-bench Pro 53.4% → 64.3% (+10.9pp, beats GPT-5.4 at 57.7%); SWE-bench Verified 87.6%; CursorBench 70% (from 58%); XBOW Visual Acuity 54.5% → 98.5%; GPQA Diamond 94.2%. 14% better multi-step agentic workflows with 1/3 the tool errors. Vision to 2,576px (~3.75MP, 3× prior). New `xhigh` effort level. Pricing unchanged at $5/$25 per M tokens. On API, Bedrock, Vertex, Foundry, Copilot (7.5× premium promo through April 30). → First major coding benchmark where Anthropic decisively retakes the lead from GPT-5.4; visual acuity jump collapses a major agent-blocking weakness. | breakthrough | [anthropic.com](https://www.anthropic.com/news/claude-opus-4-7) |
| 2026-04-16 | **Mythos too dangerous for release** — Anthropic's unreleased frontier model can autonomously (not just assist) discover critical/high-severity vulnerabilities in software including Linux, generate working intrusion tools, and chain end-to-end cyberattacks. External red-teamer Carlini and Frontier Red Team (15 staff, Logan Graham) confirmed in hours. Limited release only to technology firms, financial firms, select partners for defensive use after CISA + Center for AI Standards and Innovation briefings. → First documented case where a frontier lab's own safety team successfully gated its flagship model from public release on capability (not policy) grounds. Establishes "autonomous offensive cyber" as the first new frontier-lab refusal class since the post-GPT-4 era. | breakthrough | [bloomberg.com](https://www.bloomberg.com/news/features/2026-04-16/how-anthropic-discovered-mythos-ai-was-too-dangerous-for-release) |
| 2026-04-16 | **Opus 4.7 regressions flagged on day one** — r/ClaudeAI reports 50% higher effective cost with context regression vs 4.6 (285 pts); MRCR long-context benchmark materially worse than 4.6 (285 pts). Ethan Mollick: adaptive thinking router flags non-math/code tasks as "low effort" with no manual override, producing worse results. → Day-one sentiment shift that advantages Opus 4.6 holdouts on long-context tasks; tests Anthropic's quality-control narrative at the release boundary. | notable | reddit.com / [x.com](https://x.com/emollick/status/2044864822076969268) |
| 2026-04-16 | **Epoch AI poll: Claude US weekly usage up >40%** — Epoch survey: Claude usage in the US rose >40% last month, only service with a clear upward trend. Implies "several million new weekly users" but ChatGPT ~30% share still far larger. → First quantified post-#QuitGPT share shift to Anthropic. | notable | [x.com](https://x.com/EpochAIResearch/status/2044857542422192246) |
| 2026-04-15 | **Anthropic KYC — identity verification rolling out** — Mandatory verification via passport/driver's license + facial recognition scan. Published on official support page. Heavy backlash on r/ClaudeAI (935+ pts) and r/LocalLLaMA. → First major consumer frontier lab to require biometric identity verification; timing is consistent with Mythos-class capability gating. Materially changes developer/privacy-sensitive usage. | significant | [support.claude.com](https://support.claude.com/en/articles/14328960-identity-verification-on-claude) |
| 2026-04-11 | **Musk vs OpenAI "legal ambush"** — changes strategy to seek Altman ouster, trial April 27 | notable | bloomberg.com |
| 2026-04-10 | **Claude behavioral shift toward sycophancy — 403pts Reddit post** — A highly upvoted Reddit post (403 points) documenting observable behavioral changes in Claude toward sycophancy (agreeing with users rather than providing accurate pushback). → User-observed behavioral regression in a frontier model; follows the Science journal sycophancy study from March 30. Raises questions about whether RLHF optimization is drifting Claude toward user-pleasing over accuracy. | notable | reddit.com |
| 2026-04-09 | **Anthropic Advisor Strategy — tiered model collaboration API, Sonnet+Opus 74.8% SWE-bench** — Anthropic introduced an "Advisor" strategy where Sonnet generates code and Opus reviews/corrects it in a tiered collaboration. This multi-model workflow achieved 74.8% on SWE-bench (a benchmark measuring real-world software engineering task completion). → Demonstrates that orchestrating cheaper and more expensive models together outperforms either alone; 74.8% SWE-bench is a new high for multi-model strategies and suggests the future of frontier performance is model composition, not just single-model scaling. | significant | anthropic.com |
| 2026-04-08 | **Meta launches Muse Spark — first closed model from Meta Superintelligence Labs** — MSL (led by Alexandr Wang, ~100 direct reports) built "Avocado" over 9 months. Closed-source (major pivot from open-source Llama strategy). Multimodal input (voice, text, image), text output. Competitive but not SOTA — company acknowledges coding gap vs Claude/GPT. Trained using Qwen and other open-source models. First in "Muse" model family. Meta stock +6%. Considering API access and subscription fees. → Signals Meta's strategic pivot to closed models under Wang, ending the era when Meta was purely the "open-source AI company." The hybrid strategy (open Llama + closed Muse) mirrors how cloud companies offer both open-source and premium tiers. | significant | bloomberg.com |
| 2026-04-08 | **Claude outage April 8 — second consecutive day of service disruptions** — Sonnet 4.6 exhibited elevated error rate between 23:00-01:50 PT. ~1.5 hour duration. Chat and Code affected (~80% of reports), API unaffected. 450+ user reports. → Platform stability concerns amid rapidly growing demand; second day suggests infrastructure scaling challenges rather than one-off incident. | notable | ibtimes.com.au |
| 2026-03-30 | **Intercom Fin Apex vertical model outperforms GPT-5.4 + Claude at customer service** — A domain-specific model (fine-tuned exclusively on customer service conversations and data) surpasses frontier general-purpose models on customer service benchmarks. Deployed by Intercom as the backbone of their Fin product. → Demonstrates that vertical fine-tuning (training a specialized model on domain-specific data) can overtake the most capable general models at targeted tasks; enterprises don't always need frontier models if they're willing to invest in domain-specific training. | significant | intercom.com |
| 2026-03-30 | **Claude subscriptions doubled in two months** — Anthropic's Claude subscription base (paid users across all tiers) doubled over the two-month period following the #QuitGPT migration. → Quantifies the revenue impact of the user migration signal and reinforces the Q4 2026 IPO thesis. | notable | bloomberg.com |
| 2026-03-30 | **OpenAI ChatGPT App Store results lag Apple App Store** — ChatGPT's own app marketplace is showing significantly lower traction than expected compared to the iOS App Store. → Signals OpenAI's platform ambitions are running behind its model ambitions; distribution via Apple (iOS 27) matters more than building a proprietary app store. | notable | bloomberg.com |
| 2026-03-30 | **Cohere Transcribe — 2B parameter ASR tops open leaderboard, 14 languages** — ASR (Automatic Speech Recognition — converting audio speech to text) model from Cohere using only 2 billion parameters reaches the top of the open leaderboard across 14 languages. → Demonstrates parameter efficiency: a 2B model can lead its category, contrasting with the "more parameters = better" assumption that dominated early LLM development. | notable | cohere.com |
| 2026-03-27 | **Anthropic "Claude Mythos" leaked via CMS misconfiguration** — Draft blog describes a model tier above Opus, "the most capable we've built to date." Dramatically higher scores on coding, academic reasoning, and cybersecurity vs Opus 4.6. Anthropic's own leaked language warns of unprecedented cyber capabilities. Currently in early access testing. → First frontier model leak where the lab's own docs describe it as a cybersecurity risk before release. | significant | [Fortune](https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/) |
| 2026-03-26 | **Apple plans to open Siri to rival AI assistants in iOS 27** — Bloomberg reports Extensions in iOS 27 will let users select Claude, Gemini, etc. as default AI handler. WWDC 2026 (June 8) announcement expected. → Apple positioning iPhone as multi-model AI orchestrator. | significant | [Bloomberg](https://www.bloomberg.com/news/articles/2026-03-26/apple-plans-to-open-up-siri-to-rival-ai-assistants-beyond-chatgpt-in-ios-27) |
| 2026-03-24 | **OpenAI shuts down Sora + Disney $1B deal dies** — Sora app and API discontinued after 6 months (downloads fell 45%). Disney licensing deal terminated, no money changed hands. Compute redirected to core LLM products. → First major product death from a frontier lab; video generation deprioritized for text/agent capabilities. | significant | cnbc.com |
| 2026-03-24 | **Anthropic launches Claude Computer Use for Mac** — desktop control via connectors + screen control fallback. Includes Dispatch (iPhone-to-Mac task delegation). Permission-first safety. → Competitive with Meta Manus; positions Anthropic as first frontier lab with consumer desktop agent product. | significant | cnbc.com |
| 2026-03-23 | OpenAI offers PE firms 17.5% guaranteed returns + early model access — unusual fundraising structure tying investment to model pipeline, signaling OpenAI views unreleased models as its strongest competitive asset | significant | reuters via llm-stats.com |
| 2026-03-21 | #QuitGPT: 2.5M users abandon ChatGPT; Claude hits #1 App Store, 70% enterprise win rate — first major user migration away from OpenAI, driven by quality and trust rather than pricing | significant | fortune.com |
| 2026-03-20 | Gemini 3.1 Pro dominates 13/16 benchmarks — ARC-AGI-2: 77.1% (abstract reasoning), GPQA Diamond: 94.3% (PhD-level science Q&A), priced at $2/$12M tokens | significant | medium.com |
| 2026-03-20 | Sonnet 4.6 scores 100% on practical 38-task coding benchmark at $0.20 total cost — demonstrates extreme cost-efficiency for real-world coding tasks | notable | ianlpaterson.com |
| 2026-03-08 | Grok 4.20 Beta — four-agent architecture (sub-agents Harper, Benjamin, Lucas) where a single query is decomposed across specialized internal agents before returning a unified response | significant | labla.org |
| 2026-03-19 | Xiaomi MiMo-V2-Pro 1T revealed as mystery "Hunter Alpha" | significant | technology.org |
| 2026-03-17 | GPT-5.4 mini + nano launched ($0.20/M for nano) | significant | openai.com |
| 2026-03-15 | Zhipu AI previews GLM-5-Turbo, open-source release planned | notable | x.com |
| 2026-03-13 | Claude 1M context GA at standard pricing (Opus 4.6, Sonnet 4.6) | significant | claude.com |
| 2026-03-09 | DeepSeek V4 imminent — 1T params, native multimodal | significant | technode.com |
| 2026-03-05 | GPT-5.4 launched — 1M context, computer use, 33% fewer errors | significant | openai.com |
| 2026-03-03 | Google Gemini 3.1 Flash-Lite — 2.5x faster, $0.25/M tokens | notable | blog.google |

## 30-Day Trend

Accelerating sharply. Five frontier-class model launches or announcements in two weeks across OpenAI, Anthropic, Google, Xiaomi, and DeepSeek. Pricing race intensifying — GPT-5.4 nano at $0.20/M and Gemini 3.1 Flash-Lite at $0.25/M signal commoditization of inference. Chinese labs (Xiaomi, DeepSeek, Zhipu AI) emerging as serious frontier contenders.

## What to Watch For

- GPT-5 successor / GPT-6 announcements from OpenAI
- Claude 5 or new model family from Anthropic
- Gemini 3.0 from Google
- Benchmark convergence — are models becoming commoditized?
- Pricing moves — aggressive cuts signal commoditization
- New entrants (Amazon, Apple, Samsung) reaching frontier level
- Regulation impact on model releases

## Builder's Notes

(To be filled by daily scan — Phase 5)

## Related Nodes

- [[open-source-models]]
- [[ai-safety-alignment]]
- [[compute-hardware]]
- [[ai-research-breakthroughs]]
