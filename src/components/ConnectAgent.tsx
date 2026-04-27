"use client";

import { useState } from "react";

type Platform = "openclaw" | "claude-code" | "any-agent";
type OpenClawMethod = "direct" | "clawhub";

const DIRECT_PROMPT = `Install the Eigen AI Terminal skill:

npx eigen-terminal-install

After it installs:
1. Look at what I'm currently working on and show me the most relevant signals from today
2. Set up two crons:
   - Daily at 7:00 AM — call today(), filter to my work, send me 2-3 things I can act on
   - Every 4 hours — call check_updates(), only tell me if something breaking affects my work`;

const CLAWHUB_PROMPT = `Install the Eigen AI Terminal:

npx clawhub@latest install eigen-ai-terminal

After it installs:
1. Look at what I'm currently working on and show me the most relevant signals from today
2. Set up two crons:
   - Daily at 7:00 AM — call today(), filter to my work, send me 2-3 things I can act on
   - Every 4 hours — call check_updates(), only tell me if something breaking affects my work`;

const CLAUDE_CODE_CONFIG = JSON.stringify({
  mcpServers: {
    "eigen-ai-terminal": {
      command: "npx",
      args: ["eigen-ai-radar-mcp"],
    },
  },
}, null, 2);

const ANY_AGENT_PROMPT = `You now have access to the Eigen AI Terminal — daily intelligence on 16 areas of AI.

Endpoints (public, no auth):
- Today's signals: https://terminal.clawlab.dev/data/radar.json
- 7-day history: https://terminal.clawlab.dev/data/history.json
- Knowledge base: https://terminal.clawlab.dev/wiki/manifest.json
- Any wiki page: https://terminal.clawlab.dev/wiki/{path}

Fetch radar.json daily. Each signal has significance, domains, and an actionable flag. Filter by what I'm building — only tell me what I can act on. For deep context on any topic, fetch wiki pages.

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
    subtitle: "Installs skill + morning brief",
    description: "Paste in your OpenClaw chat. The skill handles everything — onboarding, daily brief, all of it.",
  },
  clawhub: {
    label: "Via ClawHub",
    tag: "Alternative",
    prompt: CLAWHUB_PROMPT,
    subtitle: "Installs from the ClawHub registry",
    description: "Same result, different install path. Paste in your OpenClaw chat.",
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
        {copied ? "Copied" : "Copy"}
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
          Copy the prompt, paste it into your agent. It installs the skill, asks what you&apos;re building, and starts delivering filtered intelligence.
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
              Give this to any AI agent that can fetch URLs. No MCP needed.
            </p>
            <CommandBlock text={ANY_AGENT_PROMPT} copied={copied} onCopy={onCopy} />
          </div>
        )}

        {/* Tools summary */}
        <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
          <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
            Your agent gets <span className="font-bold text-[var(--color-text)]">12 tools</span> — today&apos;s signals, topic deep-dives, cause-and-effect tracing, developing trends, predictions, and a 50-page knowledge base.
          </p>
        </div>
      </div>
    </div>
  );
}
