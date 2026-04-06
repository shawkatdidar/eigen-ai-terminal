# Eigen AI Terminal — Public Data Policy

What we expose publicly vs. what stays internal. This controls what appears on the website wiki and what agents can access.

## Current Phase: Builder-First (v1)

Focus: practical, technical, builder-oriented intelligence. Things you can act on today.

### PUBLICLY VISIBLE (website + agent API)

| Content | Why it's public |
|---------|----------------|
| **Domain trackers (nodes/)** | Core value — what's happening in each AI domain |
| **Daily briefs (briefs/)** | Daily signal summaries — but filtered to builder/technical signals only |
| **Developing Trends (convergences.md)** | The CONCLUSIONS only — "inference costs are dropping" — not the methodology of how we detect convergences |
| **What's Blocked (bottleneck-map.md)** | Practical constraints builders need to know about |
| **How Fast Things Move (velocity-trackers.md)** | Rate-of-change metrics — useful for planning |
| **Frameworks (frameworks/)** | Judgment tools for evaluating AI developments |
| **Watchlist** | Emerging areas to monitor |

### HIDDEN FROM PUBLIC (backend only, not on website or agent API)

| Content | Why it's hidden |
|---------|----------------|
| **Cause & Effect Chains (force-dynamics.md)** | Proprietary methodology — how we map causal propagation between domains |
| **Predictions (predictions.md)** | Confusing for general audience, requires understanding of the full system |
| **Opportunity Pipeline (opportunity-pipeline.md)** | Internal strategic assessment, not for public consumption |
| **Convergence methodology** | The "how we detect convergences" explanation — we show the conclusions, not the process |
| **Entity pages (entities/)** | Company profiles — available to agents but not shown in wiki sidebar |
| **Calibration data (system/)** | Internal system performance tracking |

### FILTERED OUT (not shown even though we track it)

| Content | Why it's filtered |
|---------|-------------------|
| **IPO / funding news** | Macro level, not actionable for builders |
| **Policy / regulation signals** | Unless it directly changes a tool or API builders use |
| **Executive shuffles** | Not relevant to what builders can do today |
| **Sector-level market dynamics** | Too abstract for builder audience |

### What agents get vs. what the website shows

| | Website wiki | Agent API (MCP/ClawHub) |
|---|---|---|
| Domain trackers | ✅ | ✅ |
| Daily briefs | ✅ (builder-filtered) | ✅ (builder-filtered by default, all available) |
| Developing Trends | ✅ (conclusions only) | ✅ (conclusions only) |
| What's Blocked | ✅ | ✅ |
| Velocity metrics | ✅ | ✅ |
| Frameworks | ✅ | ✅ |
| Entity pages | ❌ (hidden from sidebar) | ✅ (accessible via tools) |
| Force dynamics | ❌ | ✅ (agents can query, users don't see methodology) |
| Predictions | ❌ | ✅ (agents use for planning, not shown on site) |
| Opportunity pipeline | ❌ | ❌ |

## Future Phases

### Phase 2: Strategic layer (premium)
- Add back: predictions, force dynamics conclusions, macro trends
- Behind authentication or premium tier
- For founders who want the full picture

### Phase 3: Sector-specific
- Vertical views: "AI for fintech", "AI for healthcare", etc.
- Custom filtering by industry

### Phase 4: Community contributions
- Users submit signals from their domains
- Community-verified intelligence
