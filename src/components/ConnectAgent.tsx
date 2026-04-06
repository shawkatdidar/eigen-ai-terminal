"use client";

import { useState } from "react";

type Platform = "openclaw" | "claude-code" | "any-agent";
type OpenClawMethod = "direct" | "clawhub";

const openclawMethods: Record<OpenClawMethod, {
  label: string;
  tag: string;
  command: string;
  description: string;
}> = {
  direct: {
    label: "Direct Install",
    tag: "Recommended",
    command: "npx eigen-terminal-install",
    description: "Installs with automatic daily morning briefing. Asks what you're building, then delivers personalized AI intelligence every morning at 7am.",
  },
  clawhub: {
    label: "Via ClawHub",
    tag: "",
    command: "npx clawhub@latest install eigen-ai-terminal",
    description: "Installs from ClawHub registry. 11 tools available — you set up the morning briefing manually by saying \"set up my Eigen morning brief\".",
  },
};

const platforms: Array<{
  id: Platform;
  label: string;
  content: (copied: boolean, onCopy: (text: string) => void) => React.ReactNode;
}> = [
  {
    id: "openclaw",
    label: "OpenClaw",
    content: (copied, onCopy) => <OpenClawPanel copied={copied} onCopy={onCopy} />,
  },
  {
    id: "claude-code",
    label: "Claude Code",
    content: (copied, onCopy) => {
      const config = JSON.stringify({
        mcpServers: {
          "eigen-ai-terminal": {
            command: "npx",
            args: ["eigen-ai-radar-mcp"],
          },
        },
      }, null, 2);
      return (
        <div>
          <p className="text-[13px] text-[var(--color-text-secondary)] mb-4 leading-relaxed">
            Add this to your MCP settings (Settings → MCP Servers), then ask Claude anything about the AI landscape.
          </p>
          <CommandBlock text={config} copied={copied} onCopy={onCopy} />
          <p className="text-[13px] text-[var(--color-text-muted)] mt-3">
            Then try: <span className="font-semibold text-[var(--color-text)]">&quot;What happened in AI today that affects my work?&quot;</span>
          </p>
        </div>
      );
    },
  },
  {
    id: "any-agent",
    label: "Any Agent",
    content: (copied, onCopy) => {
      const prompt = `Connect to Eigen AI Terminal for daily AI landscape intelligence.

Endpoints:
- Signals & data: https://eigenterminal.clawlab.dev/data/radar.json
- Wiki manifest: https://eigenterminal.clawlab.dev/wiki/manifest.json
- Wiki pages: https://eigenterminal.clawlab.dev/wiki/{path}

Fetch radar.json for today's signals, trends, roadblocks, velocity metrics, and predictions. Fetch wiki pages for deep context — 49 interconnected markdown files with [[wikilinks]] you can follow to navigate the knowledge graph.

Filter signals by what the user is building. Deliver only what's relevant to their work.`;
      return (
        <div>
          <p className="text-[13px] text-[var(--color-text-secondary)] mb-4 leading-relaxed">
            Copy this prompt and give it to your agent. It works with any AI agent that can fetch URLs.
          </p>
          <CommandBlock text={prompt} copied={copied} onCopy={onCopy} />
        </div>
      );
    },
  },
];

function CommandBlock({ text, copied, onCopy }: { text: string; copied: boolean; onCopy: (t: string) => void }) {
  return (
    <div className="relative bg-[var(--color-bg-page)] rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
      <pre className="text-[13px] font-mono font-medium text-[var(--color-text)] overflow-x-auto whitespace-pre-wrap leading-relaxed pr-16">
        {text}
      </pre>
      <button
        onClick={() => onCopy(text)}
        className="absolute top-3 right-3 text-[12px] font-bold px-3 py-1.5 rounded-[var(--radius-sm)]
          bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)]
          hover:bg-[var(--color-bg-subtle)] transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

function OpenClawPanel({ copied, onCopy }: { copied: boolean; onCopy: (t: string) => void }) {
  const [method, setMethod] = useState<OpenClawMethod>("direct");
  const m = openclawMethods[method];

  return (
    <div>
      {/* Method toggle */}
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
              {key === "direct" ? "Auto morning briefing included" : "Manual setup, ClawHub verified"}
            </p>
          </button>
        ))}
      </div>

      {/* Command */}
      <CommandBlock text={m.command} copied={copied} onCopy={onCopy} />
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

  const platform = platforms.find((p) => p.id === activePlatform)!;

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-[24px] font-bold text-[var(--color-text)] tracking-tight">
          Connect Your Agent
        </h3>
        <p className="text-[14px] text-[var(--color-text-secondary)] mt-1.5 max-w-lg">
          Your AI agent pulls intelligence from Eigen and combines it with{" "}
          <span className="font-bold text-[var(--color-text)]">your</span> local context.
          We never see your data.
        </p>
      </div>

      <div
        className="bg-white rounded-[var(--radius-xl)] p-6 sm:p-8"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {/* Platform tabs */}
        <div className="flex gap-1 mb-6">
          {platforms.map((p) => (
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

        {/* Platform content */}
        {platform.content(copied, onCopy)}

        {/* Tools list */}
        <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
          <p className="text-[12px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
            Your agent gets 11 tools
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { name: "radar_brief", desc: "Today's signals by builder/strategic lens" },
              { name: "radar_relevant", desc: "Intelligence filtered for YOUR work" },
              { name: "radar_signal_ripple", desc: "Causal chain for any signal" },
              { name: "radar_trends", desc: "Developing trends with confidence" },
              { name: "radar_roadblocks", desc: "What's blocked and who's fixing it" },
              { name: "radar_velocity", desc: "How fast things are changing" },
              { name: "radar_predictions", desc: "Falsifiable predictions we track" },
              { name: "radar_wiki_browse", desc: "Browse the full knowledge base" },
              { name: "radar_wiki_read", desc: "Read any wiki page, follow wikilinks" },
              { name: "radar_wiki_search", desc: "Search across all 49 wiki files" },
              { name: "radar_morning_setup", desc: "Set up daily morning briefing" },
            ].map((tool) => (
              <div key={tool.name} className="flex items-start gap-2 text-[13px]">
                <code className="text-[11px] font-mono font-bold text-[var(--color-accent)] shrink-0 mt-0.5">
                  {tool.name}
                </code>
                <span className="text-[var(--color-text-secondary)]">{tool.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
