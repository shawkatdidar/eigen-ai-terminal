---
name: Multimodal AI
id: multimodal-ai
status: accelerating
impact: high
created: 2026-03-19
last_updated: 2026-03-30
related_nodes:
  - frontier-models
  - ai-research-breakthroughs
  - robotics-embodied-ai
tags:
  - node
  - multimodal
  - vision
  - audio
  - video
---

# Multimodal AI

## Current State

Multimodal AI — models that process and generate text, images, audio, video, and 3D — has become the default rather than the exception. All frontier models now accept multiple input types. Video generation hit a major inflection point: OpenAI shut down Sora after just 6 months (downloads fell from 3.3M to 1.1M) and terminated a $1B Disney licensing deal, redirecting compute to core LLM products. This is the first major product death from a frontier lab and signals that standalone AI video generation may not be a viable standalone product category yet. Remaining players include Runway Gen-3, Kling, and the newly-entered Midjourney V1 video, though copyright disputes (ByteDance Seedance 2.0 global launch paused) highlight unresolved legal risks.

Research is pushing toward "world models" — Seoul World Model demonstrates city-scale video simulation, and VideoAtlas introduces logarithmic-compute approaches to long video navigation. Open-source speech synthesis (Fish Speech) is reaching SOTA quality and gaining rapid adoption (+2,606 stars/wk).

Key trends: real-time multimodal (live video + audio processing), world models moving from concept to demonstration, copyright as a constraint on video generation deployment, and open-source TTS closing the gap with commercial offerings.

## Key Players

| Player | Product | Modality |
|--------|---------|----------|
| OpenAI | Sora, DALL-E, GPT-4o | Video, image, audio, text |
| Google | Gemini, Imagen 3 | All modalities natively |
| Runway | Gen-3 Alpha | Video generation |
| Stability AI | Stable Diffusion 3.x, SVD | Image, video |
| Midjourney | Midjourney V8 + V1 Video | Image + video generation |
| ElevenLabs | Voice AI | Speech synthesis |
| Suno | Suno | Music generation |
| Black Forest Labs | FLUX | Image generation |

## Recent Signals

| Date | Signal | Significance | Source |
|------|--------|-------------|--------|
| 2026-03-30 | **Suno v5.5 with verified voice cloning** — Suno's AI music generation platform released v5.5 with a "verified voice cloning" feature — users can clone their own voice (with verification steps to confirm ownership) for use in AI-generated music. → Addresses the consent and provenance problem that has plagued AI voice/music generation; a verified-consent model could become the standard for compliant voice cloning across platforms. | notable | suno.ai |
| 2026-03-30 | **Cohere Transcribe — 2B parameter ASR tops open leaderboard, 14 languages** — A 2B parameter ASR (Automatic Speech Recognition) model from Cohere reaching the top of the open speech recognition leaderboard across 14 languages. → Demonstrates that specialized small models can achieve category leadership; Cohere's enterprise focus means this will be deployed in enterprise transcription workflows. | notable | cohere.com |
| 2026-03-27 | **Google Gemini 3.1 Flash Live — real-time multimodal voice** — Lower latency, 90+ languages, 2x conversation memory, improved agent tool-triggering. Powers Search Live in 200+ countries. | significant | [Google AI Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-live/) |
| 2026-03-27 | **WildASR benchmark: ASR models hallucinate under degraded inputs** — Safety risk for voice agents in real-world conditions. | notable | [ArXiv](https://arxiv.org/abs/2603.25727) |
| 2026-03-24 | **OpenAI shuts down Sora, kills Disney deal** — Standalone video generation app discontinued after 6 months. Downloads plunged from 3.3M to 1.1M. $1B Disney deal terminated. Compute redirected to core LLM. → Major setback for standalone AI video generation products. | significant | cnbc.com |
| 2026-03-24 | **Mirage (Captions) raises $75M for AI video editing** — custom models for pacing/framing/attention dynamics, 200M+ videos on platform, expanding to Asia. → Specialized AI video models for engagement optimization attract growth capital. | notable | techcrunch.com |
| 2026-03-18 | Scale AI Voice Showdown benchmark — evaluates 11 TTS/voice models across 60+ languages using preference-based ranking (human evaluators choose which output sounds better, rather than automated metrics). → First comprehensive apples-to-apples comparison of voice AI quality across languages, giving developers reliable data for model selection instead of relying on cherry-picked demos | notable | venturebeat.com |
| 2026-03-17 | Midjourney V8 Alpha — 5x faster generation, native 2K resolution output (2048x2048 pixels, up from 1024x1024), and accurate text rendering (historically a weakness of diffusion models — generating legible text in images has been difficult because diffusion models operate on pixel patterns, not character-level understanding). → Text rendering accuracy is a major unlock for commercial use cases: product mockups, marketing materials, and UI design can now be generated without manual text overlay fixes | significant | techradar.com |
| 2026-03-17 | Midjourney V1 video generation enters web beta — 25x cheaper than competitors per second of generated video. Midjourney's first entry into video, leveraging their image generation expertise. → Price compression this aggressive could commoditize short-form video generation overnight, making AI video accessible to individual creators and small businesses rather than just studios with large budgets | significant | techradar.com |
| 2026-03-17 | Qwen3-TTS: first open-source TTS (Text-to-Speech) model matching proprietary quality — achieves 1.835% WER (Word Error Rate — the percentage of words the system gets wrong; lower is better), supports 10 languages. Released under open weights. → Breaks the proprietary lock on high-quality voice synthesis. Any developer can now build voice features without paying per-API-call fees to ElevenLabs or similar services, dramatically lowering the cost floor for voice-enabled applications | notable | bentoml.com |
| 2026-03-19 | Fish Speech SOTA TTS +2,606 stars/wk | notable | github.com |
| 2026-03-18 | VideoAtlas — logarithmic-compute long video navigation | notable | arxiv.org |
| 2026-03-16 | Seoul World Model — city-scale video simulation | notable | arxiv.org |
| 2026-03-15 | ByteDance pauses Seedance 2.0 global launch — copyright dispute | significant | techcrunch.com |

## 30-Day Trend

Accelerating. Midjourney's simultaneous launch of V8 Alpha (5x faster, native 2K, accurate text rendering) and V1 video generation (25x cheaper than competitors) marks a major inflection point — a leading image generation company entering video at aggressively low pricing. Open-source TTS is converging on proprietary quality: Qwen3-TTS achieves 1.835% WER across 10 languages, and Fish Speech continues rapid adoption. Scale AI's Voice Showdown provides the first standardized benchmark for voice models. Research advances continue with VideoAtlas and Seoul World Model. The ByteDance Seedance 2.0 copyright dispute remains a headwind for video generation deployment.

## What to Watch For

- Video generation reaching "good enough" for professional use
- Real-time video understanding in production
- 3D generation breakthroughs (from text/image to 3D)
- World model demonstrations
- Audio/music generation copyright resolution
- Multimodal reasoning improvements (not just perception)

## Builder's Notes

(To be filled by daily scan — Phase 5)

## Related Nodes

- [[frontier-models]]
- [[ai-research-breakthroughs]]
- [[robotics-embodied-ai]]
