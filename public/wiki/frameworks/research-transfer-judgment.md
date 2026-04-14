---
name: Research Transfer Judgment
description: Framework for deciding when AI research findings apply to your specific use case vs when they don't transfer
tags:
  - judgment
  - research-evaluation
  - agents
discovered: 2026-04-14
session: 15
related:
  - "[[ai-research-breakthroughs]]"
  - "[[ai-coding-tools]]"
  - "[[ai-agents]]"
nodes:
  - ai-research-breakthroughs
  - ai-coding-tools
---

# Research Transfer Judgment

## Core Insight

AI research findings do NOT transfer universally. Whether a finding applies to your use case depends on whether the model already has strong learned behavior for the task.

## The Framework

### Step 1: Does the model have prior learned behavior for this task?

- **YES (strong prior)** — The model learned this from training data. Examples: writing clean code, grammar, formatting, common design patterns.
  - → Positive directives COMPETE with the model's existing behavior. Two optimization targets create interference.
  - → Negative constraints COMPLEMENT existing behavior. They remove failure modes without creating conflict.

- **NO (no prior)** — The task involves novel procedures not in training data. Examples: custom file formats, specific workflow phases, proprietary fingerprint schemas, domain-specific protocols.
  - → Positive directives are NECESSARY. They fill a vacuum the model can't fill from training.
  - → Negative constraints still work everywhere.

### Step 2: Context priming (applies regardless)

Any structured text in a system prompt — even random text — shifts the model into a more careful, methodical execution mode. The benefit comes from the *pattern* of having instructions, not the specific content. This is why random rules help as much as expert-curated ones.

## Decision Matrix

| Task Type | Positive Directives | Negative Constraints | Random Structure |
|-----------|-------------------|---------------------|-----------------|
| Model has strong prior (coding, writing) | Harmful — competing optimization | Beneficial — removes failure modes | Beneficial — context priming |
| Model has no prior (custom workflows) | Necessary — fills vacuum | Beneficial | Beneficial |

## Worked Examples

### From today's signal (CLAUDE.md rules study, April 13, 2026)

679 CLAUDE.md files tested across 5,000+ SWE-bench runs:
- Random rules performed equal to expert rules (context priming explains the benefit)
- Negative constraints ("don't refactor unrelated code") = only individually beneficial type
- Positive directives ("follow code style") = actively degraded performance

### Applied to AI Radar's CLAUDE.md

This system's 700-line CLAUDE.md contains both types:
- "Use `[[wikilinks]]` for internal links" — novel procedure, no training prior → KEEP (necessary)
- "Generate fingerprint: `{YYYY-MM-DD}|{primary-node}|{normalized-key-phrase}`" — novel schema → KEEP
- "Keep signal descriptions substantive" — overlaps with model's trained writing behavior → CANDIDATE FOR REMOVAL

## Applies To

- Evaluating any AI research paper's applicability to your specific deployment
- Writing instruction files for AI coding agents (CLAUDE.md, .cursorrules, system prompts)
- Deciding whether to adopt a technique that worked in a benchmark context
- Any situation where you're asking "does this finding apply to my use case?"
