"use client";

import { useState } from "react";

const tabs = [
  {
    id: "openclaw",
    label: "OpenClaw",
    command: "npx clawhub@latest install ai-radar",
    description: "One command. Your OpenClaw agent gets full radar access.",
  },
  {
    id: "mcp",
    label: "Claude Code / MCP",
    command: `// Add to your MCP config
{
  "mcpServers": {
    "ai-radar": {
      "command": "npx",
      "args": ["ai-radar-mcp"]
    }
  }
}`,
    description: "Works with Claude Code, Codex, and any MCP-compatible agent.",
  },
  {
    id: "api",
    label: "API",
    command: "GET https://api.ai-radar.dev/v1/signals/today",
    description: "RESTful API for any agent or application.",
  },
];

export default function ConnectAgent() {
  const [activeTab, setActiveTab] = useState("openclaw");
  const [copied, setCopied] = useState(false);
  const tab = tabs.find((t) => t.id === activeTab)!;

  const copyCommand = () => {
    navigator.clipboard.writeText(tab.command);
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
          Your AI agent pulls radar data and combines it with{" "}
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

        {/* Command */}
        <div className="relative bg-[var(--color-bg-page)] rounded-[var(--radius-md)] border border-[var(--color-border)] p-4">
          <pre className="text-[13px] font-mono font-medium text-[var(--color-text)] overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {tab.command}
          </pre>
          <button
            onClick={copyCommand}
            className="absolute top-3 right-3 text-[12px] font-bold px-3 py-1.5 rounded-[var(--radius-sm)]
              bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)]
              hover:bg-[var(--color-bg-subtle)] transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="text-[13px] text-[var(--color-text-muted)] mt-3">{tab.description}</p>
      </div>
    </div>
  );
}
