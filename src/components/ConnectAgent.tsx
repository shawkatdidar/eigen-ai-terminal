"use client";

import { useState } from "react";

const tabs = [
  {
    id: "openclaw",
    label: "OpenClaw",
    steps: [
      "Tell your OpenClaw agent:",
      '"Install the Eigen AI Terminal skill from ClawHub"',
      "",
      "Or run manually:",
      "npx clawhub@latest install eigen-ai-terminal",
    ],
    description: "Your OpenClaw agent gets 10 tools — signals, ripple effects, the full wiki knowledge base, and personalized intelligence.",
  },
  {
    id: "claude-code",
    label: "Claude Code",
    steps: [
      "Add to your MCP settings (Settings → MCP Servers):",
      "",
      JSON.stringify({
        "mcpServers": {
          "eigen-ai-terminal": {
            "command": "npx",
            "args": ["eigen-ai-radar-mcp"]
          }
        }
      }, null, 2),
      "",
      "Then ask Claude:",
      '"What happened in AI today that affects my work?"',
    ],
    description: "Claude Code gets full access — signals, ripple effects, wiki knowledge base, and personalized filtering.",
  },
  {
    id: "api",
    label: "Any Agent",
    steps: [
      "The full knowledge base is available as static files:",
      "",
      "Manifest:  /wiki/manifest.json",
      "Signals:   /data/radar.json",
      "Wiki page: /wiki/nodes/ai-agents.md",
      "Entity:    /wiki/entities/anthropic.md",
      "",
      "49 interconnected markdown files with [[wikilinks]]",
      "and #tags. Your agent navigates the knowledge graph",
      "the same way a human navigates Obsidian.",
    ],
    description: "Fetch the full knowledge base and navigate it however you want. All files use wikilinks for cross-references.",
  },
];

export default function ConnectAgent() {
  const [activeTab, setActiveTab] = useState("claude-code");
  const [copied, setCopied] = useState(false);
  const tab = tabs.find((t) => t.id === activeTab)!;

  const copyAll = () => {
    navigator.clipboard.writeText(tab.steps.join("\n"));
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
          Your AI agent pulls intelligence from Eigen and combines it with{" "}
          <span className="font-bold text-[var(--color-text)]">your</span> local context — your codebase, your notes, your work.
          We never see your data.
        </p>
      </div>

      <div
        className="bg-white rounded-[var(--radius-xl)] p-6 sm:p-8"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {/* Tabs */}
        <div className="flex gap-1 mb-5">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`
                px-4 py-2 text-[13px] font-bold rounded-[var(--radius-sm)] transition-all
                ${
                  activeTab === t.id
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)]"
                }
              `}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="relative bg-[var(--color-bg-page)] rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
          <pre className="text-[13px] font-mono font-medium text-[var(--color-text)] overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {tab.steps.join("\n")}
          </pre>
          <button
            onClick={copyAll}
            className="absolute top-3 right-3 text-[12px] font-bold px-3 py-1.5 rounded-[var(--radius-sm)]
              bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)]
              hover:bg-[var(--color-bg-subtle)] transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="text-[13px] text-[var(--color-text-muted)] mt-3">{tab.description}</p>

        {/* Tools list */}
        <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
          <p className="text-[12px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
            Your agent gets these tools
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
            ].map((tool) => (
              <div key={tool.name} className="flex items-start gap-2 text-[13px]">
                <code className="text-[12px] font-mono font-bold text-[var(--color-accent)] shrink-0 mt-0.5">
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
