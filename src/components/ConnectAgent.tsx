"use client";

import { useState } from "react";

type Platform = "openclaw" | "claude-code" | "any-agent";
type OpenClawMethod = "direct" | "clawhub";

const MORNING_BRIEF_RULES = `
   - Call radar_brief with view "builder" and significance "significant" to get today's top signals
   - Call radar_relevant with what you know about my work to get personalized intelligence
   - Call radar_trends to check if any major trend shifted overnight
   - Call eigen_whats_new to check for new Eigen features and tips
   - Send me a SHORT morning message (not a wall of text) with this format:

     ☀️ Good morning — here's what matters in AI today:

     [One sentence: the single most important development and why it affects my work]

     What you should know:
     • [Signal that directly impacts what I'm building — one line]
     • [New tool, model, or capability I could use — one line]
     • [Only include a third if it's genuinely relevant]

     Trend to watch: [One developing trend in plain language with confidence %]

     💡 [One tip or new feature from Eigen, if there's something fresh this week — skip if nothing new]

     Say "dig deeper on [topic]" or "full brief" for more.

   IMPORTANT rules for the morning brief:
   - Maximum 3 bullet points. Less is more. Only include what I can ACT on today.
   - Every bullet must pass the test: "Can I do something with this information today?"
   - Never include funding rounds, IPO news, policy changes, or executive shuffles unless they DIRECTLY change a tool or API I use.
   - If nothing significant happened that affects my work, say so in one line. Don't pad with generic AI news.
   - Write like a sharp colleague giving me a 30-second update, not a newsletter.
   - The Eigen tip at the end should be casual and brief — one line max. If eigen_whats_new returned nothing new, skip it entirely.`;

const DIRECT_PROMPT = `Install the Eigen AI Terminal skill into my workspace by running:

npx eigen-terminal-install

After it installs, set up a daily cron job at 7:00 AM that does this every morning:
${MORNING_BRIEF_RULES}

Now ask me: "What are you building right now? I'll filter AI news to only what matters for your work — and deliver it every morning at 7am."`;

const CLAWHUB_PROMPT = `Do two things:

1. Install the Eigen AI Terminal skill from ClawHub:
   npx clawhub@latest install eigen-ai-terminal

2. After it installs, set up a daily cron job at 7:00 AM that does this every morning:
${MORNING_BRIEF_RULES}

Now ask me: "What are you building right now? I'll filter AI news to only what matters for your work — and deliver it every morning at 7am."`;

const CLAUDE_CODE_CONFIG = JSON.stringify({
  mcpServers: {
    "eigen-ai-terminal": {
      command: "npx",
      args: ["eigen-ai-radar-mcp"],
    },
  },
}, null, 2);

const ANY_AGENT_PROMPT = `You now have access to the Eigen AI Terminal — a daily intelligence system tracking 16 domains of the AI landscape.

Endpoints (public, read-only, no auth):
- Today's signals + trends + predictions: https://terminal.clawlab.dev/data/radar.json
- Knowledge base index (49 files): https://terminal.clawlab.dev/wiki/manifest.json
- Any wiki page: https://terminal.clawlab.dev/wiki/{path}
  Examples: wiki/nodes/ai-agents.md, wiki/entities/anthropic.md, wiki/convergences.md

Wiki files use [[wikilinks]] for cross-references — follow them to navigate the knowledge graph.

How to use this:
1. Fetch radar.json daily for signals, causal chains, trends, roadblocks, and predictions
2. Filter by what the user is building — only surface what they can act on
3. When the user asks about any AI topic, search the wiki for deep context
4. For any signal, trace its ripple effects through the force chains and convergences

Ask me what I'm building so you can start filtering.`;

const openclawMethods: Record<OpenClawMethod, {
  label: string;
  tag: string;
  prompt: string;
  subtitle: string;
  description: string;
}> = {
  direct: {
    label: "Direct Install",
    tag: "Recommended",
    prompt: DIRECT_PROMPT,
    subtitle: "Auto morning briefing included",
    description: "Paste this in your OpenClaw chat. It installs the skill and sets up automatic onboarding.",
  },
  clawhub: {
    label: "Via ClawHub",
    tag: "With morning brief",
    prompt: CLAWHUB_PROMPT,
    subtitle: "Installs skill + sets up daily cron",
    description: "Paste this in your OpenClaw chat. It installs from ClawHub AND sets up the morning briefing — all in one prompt.",
  },
};

function CommandBlock({ text, copied, onCopy }: { text: string; copied: boolean; onCopy: (t: string) => void }) {
  return (
    <div className="relative bg-[var(--color-bg-page)] rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
      <pre className="text-[13px] font-mono font-medium text-[var(--color-text)] overflow-x-auto whitespace-pre-wrap leading-relaxed pr-16 max-h-[280px] overflow-y-auto">
        {text}
      </pre>
      <button
        onClick={() => onCopy(text)}
        className="absolute top-3 right-3 text-[12px] font-bold px-3 py-1.5 rounded-[var(--radius-sm)]
          bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)]
          hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all"
      >
        {copied ? "✓ Copied!" : "Copy prompt"}
      </button>
    </div>
  );
}

function OpenClawPanel({ copied, onCopy }: { copied: boolean; onCopy: (t: string) => void }) {
  const [method, setMethod] = useState<OpenClawMethod>("direct");
  const m = openclawMethods[method];

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {(Object.entries(openclawMethods) as [OpenClawMethod, typeof openclawMethods.direct][]).map(([key, val]) => (
          <button
            key={key}
            onClick={() => setMethod(key)}
            className={`
              flex-1 px-4 py-3 rounded-[var(--radius-md)] text-left transition-all duration-200 border-2
              ${method === key
                ? "bg-white border-[var(--color-accent)] shadow-sm"
                : "bg-transparent border-[var(--color-border)] hover:border-[var(--color-text-muted)]"
              }
            `}
          >
            <div className="flex items-center gap-2">
              <span className={`text-[14px] font-bold ${method === key ? "text-[var(--color-accent)]" : "text-[var(--color-text)]"}`}>
                {val.label}
              </span>
              {val.tag && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                  {val.tag}
                </span>
              )}
            </div>
            <p className="text-[12px] text-[var(--color-text-muted)] mt-0.5 leading-snug">
              {val.subtitle}
            </p>
          </button>
        ))}
      </div>

      <CommandBlock text={m.prompt} copied={copied} onCopy={onCopy} />
      <p className="text-[13px] text-[var(--color-text-muted)] mt-3 leading-relaxed">{m.description}</p>
    </div>
  );
}

export default function ConnectAgent() {
  const [activePlatform, setActivePlatform] = useState<Platform>("openclaw");
  const [copied, setCopied] = useState(false);

  const onCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-[24px] font-bold text-[var(--color-text)] tracking-tight">
          Connect Your Agent
        </h3>
        <p className="text-[14px] text-[var(--color-text-secondary)] mt-1.5 max-w-lg">
          Copy the prompt, paste it into your agent. It handles the rest — installs the skill, asks what you&apos;re building, and starts delivering personalized intelligence.
        </p>
      </div>

      <div
        className="bg-white rounded-[var(--radius-xl)] p-6 sm:p-8"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {/* Platform tabs */}
        <div className="flex gap-1 mb-6">
          {[
            { id: "openclaw" as Platform, label: "OpenClaw" },
            { id: "claude-code" as Platform, label: "Claude Code" },
            { id: "any-agent" as Platform, label: "Any Agent" },
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => { setActivePlatform(p.id); setCopied(false); }}
              className={`
                px-4 py-2 text-[13px] font-bold rounded-[var(--radius-sm)] transition-all
                ${activePlatform === p.id
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)]"
                }
              `}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activePlatform === "openclaw" && (
          <OpenClawPanel copied={copied} onCopy={onCopy} />
        )}

        {activePlatform === "claude-code" && (
          <div>
            <p className="text-[13px] text-[var(--color-text-secondary)] mb-4 leading-relaxed">
              Add this to your MCP settings, then ask Claude anything about the AI landscape.
            </p>
            <CommandBlock text={CLAUDE_CODE_CONFIG} copied={copied} onCopy={onCopy} />
            <p className="text-[13px] text-[var(--color-text-muted)] mt-3">
              Then try: <span className="font-semibold text-[var(--color-text)]">&quot;What happened in AI today that affects my work?&quot;</span>
            </p>
          </div>
        )}

        {activePlatform === "any-agent" && (
          <div>
            <p className="text-[13px] text-[var(--color-text-secondary)] mb-4 leading-relaxed">
              Copy this prompt and give it to your agent. Works with any AI that can fetch URLs.
            </p>
            <CommandBlock text={ANY_AGENT_PROMPT} copied={copied} onCopy={onCopy} />
          </div>
        )}

        {/* Tools summary */}
        <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
          <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
            Your agent gets <span className="font-bold text-[var(--color-text)]">11 tools</span> — daily signals, personalized filtering, causal ripple effects, the full knowledge base, developing trends, predictions, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
