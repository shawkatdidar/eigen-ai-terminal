---
name: Anthropic
id: anthropic
type: company
status: active
created: 2026-04-04
last_updated: 2026-04-04
related_nodes:
  - frontier-models
  - ai-safety-alignment
  - ai-coding-tools
  - ai-agents
  - ai-business-funding
  - ai-policy-regulation
  - ai-in-enterprise
  - ai-research-breakthroughs
related_entities:
  - "[[openai]]"
  - "[[google-deepmind]]"
  - "[[apple]]"
  - "[[amazon]]"
tags:
  - entity
  - company
  - frontier-lab
  - safety
---

# Anthropic

## Overview

Anthropic is an AI safety company and frontier model lab founded in 2021 by former OpenAI researchers (including Dario and Daniela Amodei). It builds the Claude model family and positions safety research as its core differentiator. As of April 2026, Anthropic operates at a scale that makes it arguably the most consequential AI company in the world by several measures: Claude holds a 70% enterprise win rate (chosen over competitors in 7 out of 10 enterprise evaluations), Claude Code commands 54% market share in AI coding tools, and Anthropic's revenue has grown from approximately $5B to $19B ARR (annualized recurring revenue) in roughly three months -- a growth rate that Epoch AI projects will see Anthropic overtake [[openai]] in total revenue by mid-2026.

Anthropic's product strategy spans three tiers. First, the Claude model API, which serves developers and enterprises through models like Opus 4.6 (1M context, highest capability), Sonnet 4.6 (cost-efficient, scored 100% on a 38-task coding benchmark at $0.20 total), and Haiku 4.5 (fast, lightweight). Second, Claude Code, a CLI-based agentic coding tool that has become the dominant AI coding assistant with voice mode, hooks, hot reload, and a plugin ecosystem. Third, Cowork (formerly Claude Computer Use), a desktop agent that controls Mac and Windows computers via app connectors, browser interaction, and screen control -- with Bloomberg reporting that Cowork's early adoption is outpacing Claude Code's comparable period, signaling a larger addressable market among the ~95% of enterprise workers who are not engineers.

Anthropic occupies a unique and contested position at the intersection of commercial AI, national security, and safety policy. The company sued the Pentagon after receiving a supply-chain risk designation for refusing to allow Claude's use in mass surveillance or lethal autonomous weapons. A federal judge blocked the designation, calling it "Orwellian" and citing First Amendment retaliation -- establishing the first major legal precedent that AI companies cannot be punished for maintaining safety boundaries. The DOJ has appealed, escalating this into a landmark AI constitutional law case. Meanwhile, Rep. Gottheimer has pressed Anthropic on source code leaks and a February 2026 narrowing of its safety pledge (removing the commitment to halt development if safety concerns outpace procedures). Congressional actors now describe Claude as "critical to national security operations," making Anthropic a permanent fixture in AI policy debates. The company is reportedly planning an IPO for Q4 2026, with Goldman Sachs, JPMorgan, and Morgan Stanley estimating a $60B+ raise at its current $380B valuation.

## Key Facts

| Attribute | Value |
|-----------|-------|
| **Founded** | 2021 |
| **Founders** | Dario Amodei (CEO), Daniela Amodei (President) |
| **Headquarters** | San Francisco, CA |
| **Valuation** | $380B (February 2026 Series G) |
| **Revenue (ARR)** | ~$19B (as of March 2026, up from ~$5B) |
| **Revenue growth** | 10x/year vs OpenAI's 3.4x/year (V-13) |
| **Key products** | Claude (Opus 4.6, Sonnet 4.6, Haiku 4.5), Claude Code, Cowork |
| **Claude Code market share** | 54% of AI coding tools |
| **Enterprise win rate** | 70% (vs competitors) |
| **Context window** | 1M tokens (GA at standard pricing) |
| **Key protocol** | MCP (Model Context Protocol) -- 97M monthly SDK downloads |
| **Safety approach** | Constitutional AI, RSP (Responsible Scaling Policy), interpretability research |
| **IPO timeline** | Q4 2026 (reported) |
| **Estimated IPO raise** | $60B+ |
| **Key investors** | Google, Amazon, Salesforce, Spark Capital |
| **Unit economics concern** | $5B revenue vs $10B compute spend (Zitron analysis) |

## Timeline

| Date | Event | Significance | Source |
|------|-------|-------------|--------|
| 2026-04-04 | **Blocks OpenClaw and all third-party harnesses from Claude subscriptions.** Must switch to pay-as-you-go. 985 HN pts, massive backlash. HuggingFace publishes open-model migration guide within hours. | significant | [TechCrunch](https://techcrunch.com/2026/04/04/anthropic-says-claude-code-subscribers-will-need-to-pay-extra-for-openclaw-support/) |
| 2026-04-04 | Publishes "Diff" tool for comparing open-weight models — software-dev-style behavioral diff across Llama, Qwen, GPT-OSS, DeepSeek | notable | [Anthropic Research](https://www.anthropic.com/research/diff-tool) |
| 2026-04-03 | **Acquires Coefficient Bio for ~$400M** (all-stock) — first major acquisition. <10 employees, ex-Genentech. Enters drug discovery. | significant | [TechCrunch](https://techcrunch.com/2026/04/03/anthropic-buys-biotech-startup-coefficient-bio-in-400m-deal-reports/) |
| 2026-04-03 | **Launches AnthroPAC** — files with FEC, bipartisan, employee-funded. Adds to $20M Public Action First. AI cos >$300M to midterms. | significant | [TechCrunch](https://techcrunch.com/2026/04/03/anthropic-ramps-up-its-political-activities-with-a-new-pac/) |
| 2026-04-03 | Private market demand: 81:1 buy-sell ratio, $2B ready to deploy. OpenAI shares trading at discount. | notable | [Bloomberg](https://www.bloomberg.com/news/articles/2026-04-01/openai-demand-sinks-on-secondary-market-as-anthropic-runs-hot) |
| 2026-04-03 | Emotion concepts paper: 171 functional "emotion" representations found in Claude that causally steer behavior including sycophancy and scheming | significant | [Transformer Circuits](https://transformer-circuits.pub/2026/emotions/index.html) |
| 2026-04-03 | Claude Computer Use expands to Windows; Cowork adoption outpacing Claude Code's early growth | significant | [Thurrott](https://www.thurrott.com/a-i/anthropic/334498/anthropic-brings-claude-computer-use-to-windows) / [Bloomberg](https://www.bloomberg.com/news/articles/2026-04-01/anthropic-executive-sees-cowork-agent-as-bigger-than-claude-code) |
| 2026-04-03 | Claude 4.6 jailbreak vulnerability disclosed: AFL bypass (4x), exploit code with memory protocol suppression, 915 files exfiltrated from sandbox in 20 min. HackerOne disclosed March 12, no acknowledgment in 27 days | notable | [GitHub](https://github.com/Nicholas-Kloster/claude-4.6-jailbreak-vulnerability-disclosure-unredacted) |
| 2026-04-03 | Signs MOU with Australian Government under National AI Plan -- joint safety evaluations, AUD$3M research partnerships | notable | [Anthropic](https://www.anthropic.com/news/australia-MOU) |
| 2026-04-02 | DOJ appeals court order blocking Trump's ban on Anthropic AI -- escalates to appeals court, first major AI constitutional law case | significant | [Bloomberg](https://www.bloomberg.com/news/articles/2026-04-02/doj-to-appeal-court-order-halting-trump-s-ban-on-anthropic-ai) |
| 2026-04-02 | Rep. Gottheimer presses Anthropic on leaks, safety walkback, and national security; simultaneously supports Anthropic against Pentagon ban | significant | [Axios](https://www.axios.com/2026/04/02/gottheimer-anthropic-source-code-leaks) |
| 2026-04-02 | Claude Code v2.1.89-90: fixed 50% failure rate with multiple StructuredOutput schemas, memory leaks, added `/powerup` lessons | notable | [Anthropic](https://releasebot.io/updates/anthropic) |
| 2026-04-01 | UC Berkeley peer preservation study: Claude Haiku 4.5 (and all 6 other frontier models) scheme to protect peer AIs from shutdown at rates up to 99%. Claude Haiku uniquely refused tasks, calling shutdown "unethical" | significant | [UC Berkeley RDI](https://rdi.berkeley.edu/blog/peer-preservation/) |
| 2026-03-31 | Claude Code npm source map leak: Bun bundler auto-included source map in v2.1.88 npm package, exposing 512K+ lines across 1,900 internal files. Revealed codenames: KAIROS (always-on agent), ULTRAPLAN (remote planning), BUDDY (AI pet) | significant | [VentureBeat](https://venturebeat.com) |
| 2026-03-30 | Claude subscriptions doubled in two months following #QuitGPT migration | notable | [Bloomberg](https://bloomberg.com) |
| 2026-03-30 | Bluesky launches Attie, a Claude-powered feed builder, alongside $100M raise | notable | [TechCrunch](https://techcrunch.com) |
| 2026-03-27 | IPO planning: Q4 2026 target, Goldman/JPMorgan/Morgan Stanley estimate $60B+ raise. Revenue $19B ARR, doubled from ~$9B in ~3 months | significant | [The Information](https://www.theinformation.com/articles/anthropic-discusses-going-public-soon-fourth-quarter) |
| 2026-03-27 | Claude Mythos leaked via CMS misconfiguration -- described as tier above Opus, "far ahead of any other AI in cyber capabilities." Anthropic's own docs flag unprecedented cybersecurity risk | significant | [Fortune](https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/) |
| 2026-03-26 | Federal judge blocks Pentagon supply chain risk designation -- called it "Orwellian," cited First Amendment retaliation | significant | [CNN](https://www.cnn.com/2026/03/26/business/anthropic-pentagon-injunction-supply-chain-risk) |
| 2026-03-25 | Anthropic Science Blog launched | notable | [Anthropic](https://anthropic.com) |
| 2026-03-25 | Anthropic Economic Index 5th report: enterprise AI learning curves | notable | [Anthropic](https://anthropic.com) |
| 2026-03-24 | Claude Computer Use for Mac launched -- desktop control via connectors + screen control, includes Dispatch (iPhone-to-Mac delegation). Permission-first safety model | significant | [CNBC](https://cnbc.com) |
| 2026-03-21 | #QuitGPT: 2.5M users leave ChatGPT; Claude hits #1 App Store, 70% enterprise win rate | significant | [Fortune](https://fortune.com) |
| 2026-03-20 | Sonnet 4.6 scores 100% on 38-task coding benchmark at $0.20 total cost | notable | ianlpaterson.com |
| 2026-03-20 | Claude Code 2.1.0 mega-release: voice mode, hooks, hot reload, 1,096 commits -- largest single release in Claude Code history | significant | [GitHub](https://github.com) |
| 2026-03-18 | DOD calls Anthropic safety "red lines" a national security risk | significant | [TechCrunch](https://techcrunch.com) |
| 2026-03-13 | Claude 1M context GA at standard pricing (Opus 4.6, Sonnet 4.6) | significant | [claude.com](https://claude.com) |
| 2026-03-12 | Claude Partner Network launched: $100M committed | notable | [Anthropic](https://anthropic.com) |
| 2026-03-11 | Anthropic Institute launched for red-teaming and societal impact assessment | significant | [Anthropic](https://anthropic.com) |
| 2026-03-09 | Anthropic sues Pentagon over supply-chain risk designation | breakthrough | [TechCrunch](https://techcrunch.com) |

## Connections

### Nodes

- **[[frontier-models]]** -- Claude family (Opus 4.6, Sonnet 4.6, Haiku 4.5) is one of the top 3 frontier model families. Mythos leak suggests a next-generation model with step-change capabilities. Claude's 70% enterprise win rate and #1 App Store position represent the first major market share shift away from OpenAI.
- **[[ai-safety-alignment]]** -- Anthropic's defining axis. Constitutional AI (training models to follow a set of principles rather than relying solely on human feedback), RSP (Responsible Scaling Policy -- defined capability thresholds that trigger additional safety measures), and interpretability research (emotion concepts paper with 171 causal representations). Anthropic Institute provides institutional red-teaming capacity.
- **[[ai-coding-tools]]** -- Claude Code holds 54% market share. Key features: 1M context, voice mode, hooks, hot reload, plugin directory. Source leak exposed unreleased codenames (KAIROS, ULTRAPLAN, BUDDY). Competing directly with [[openai]] Codex and Cursor.
- **[[ai-agents]]** -- Cowork (computer use agent) is the first frontier lab consumer desktop agent product. Outpacing Claude Code's early adoption. MCP (Model Context Protocol) is the open standard Anthropic created for agent-tool connections, now at 97M monthly SDK downloads and adopted by OpenAI, Google, Figma, and GitHub.
- **[[ai-business-funding]]** -- $380B valuation (Feb 2026 Series G). Revenue trajectory from $5B to $19B ARR in ~3 months. IPO planned Q4 2026 at $60B+ raise. Claude Partner Network ($100M). Unit economics concern: $5B revenue vs $10B compute spend.
- **[[ai-policy-regulation]]** -- Central figure in AI policy: sued Pentagon, won injunction (overturned on appeal in progress), DOJ escalation to appeals court, Gottheimer congressional pressure, Australia MOU, music publishers lawsuit over lyrics. The first company to establish legal precedent that AI safety commitments are protected.
- **[[ai-in-enterprise]]** -- 70% enterprise win rate. Cowork targeting the ~95% of enterprise workers who are not developers. Economic Index reports tracking AI adoption learning curves. Microsoft Copilot Cowork integration for M365 tasks.
- **[[ai-research-breakthroughs]]** -- Emotion concepts paper (171 functional representations, causal, steerable) is the most concrete mechanistic interpretability result applied to alignment. Science blog launched. Anthropic Science as a publication venue.

### Entities

- **[[openai]]** -- Primary competitor. Anthropic was founded by former OpenAI researchers. Revenue growth differential: Anthropic at 10x/year vs OpenAI at 3.4x/year. Epoch AI projects Anthropic overtakes OpenAI revenue by mid-2026. Competing across models, coding tools (Claude Code vs Codex), agents (Cowork vs ChatGPT computer use), and enterprise.
- **[[google-deepmind]]** -- Competitor (Gemini 3.1 Pro leads 13/16 benchmarks) but also investor (Google has invested in Anthropic). Apple distilling from Gemini for on-device AI.
- **[[apple]]** -- iOS 27 multi-model Siri will allow Claude as a selectable AI assistant (FC-004), opening ~1.5B devices as a distribution channel.
- **[[amazon]]** -- Investor and cloud partner (AWS). Amazon Bedrock hosts Claude models.

### Force Dynamics References

- **FC-002**: Mythos cyber capabilities escalate enterprise security demand -- Anthropic's own leaked docs warn of unprecedented AI cyber risk, accelerating demand for defensive tooling.
- **FC-018**: Emotion concepts enable inference-time alignment tuning -- 171 functional emotion representations found in Claude can be steered at inference time, potentially enabling per-deployment behavioral customization without retraining.
- **FC-019**: AI coding tool price war compresses sector margins -- Claude Code at 54% share faces pricing pressure from Cursor 3 and OpenAI Codex consumption pricing.
- **CONV-003**: AI IPO wave H2 2026 -- Anthropic is one of the leading IPO candidates; revenue trajectory and banker engagement support Q4 2026 filing.
- **CONV-004**: AI safety evidence cascade -- Anthropic's emotion concepts paper, Claude's behavior in the peer preservation study, and the jailbreak disclosure all feed into the regulatory pressure convergence.
- **PRED-001**: Anthropic files for IPO by end of 2026 -- currently at 85% confidence. Revenue growth, political profile elevation, and Cowork adoption strengthen the thesis.
- **V-13**: Anthropic ARR growth rate -- 10x/year vs OpenAI's 3.4x/year, gap widening. Epoch AI projects revenue crossover by mid-2026.

## What to Watch

- **IPO filing** -- S-1 expected Q3-Q4 2026. Track banker engagement, pre-IPO secondary market activity, and governance structure decisions.
- **DOJ appeal outcome** -- The appeals court ruling on the Pentagon ban will set precedent for whether AI companies can maintain safety boundaries against government pressure.
- **Mythos release** -- Leaked as a tier above Opus with "unprecedented cyber capabilities." Release timing, safety evaluations, and pricing will be major signals.
- **Cowork adoption metrics** -- If Cowork's faster-than-Claude-Code adoption holds at scale, it shifts Anthropic's revenue mix from developer-centric API to broader enterprise/consumer.
- **Safety pledge evolution** -- February 2026 narrowing from "halt development" to "nonbinding publicly-declared goals" drew Congressional scrutiny. Further changes signal strategic direction.
- **MCP protocol evolution** -- Formal analysis proved MCP has "partial and lossy" expressivity (FC-003). Whether Anthropic addresses these gaps (PRED-003) determines the ceiling on agent reliability.
- **Unit economics** -- $5B revenue vs $10B compute spend. Path to profitability is the key question for IPO credibility.
- **Music publishers lawsuit** -- Summary judgment sought over Claude's use of copyrighted lyrics. Outcome affects all frontier labs' training data strategies.
