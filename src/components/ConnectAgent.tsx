"use client";

import { useState } from "react";

const tabs = [
  {
    id: "openclaw",
    label: "OpenClaw",
    steps: [
      "Tell your OpenClaw agent:",
      '"Install the AI Radar skill from ClawHub"',
      "",
      "Or run manually:",
      "npx clawhub@latest install ai-radar",
    ],
    description: "Your OpenClaw agent gets 7 radar tools including personalized intelligence.",
  },
  {
    id: "claude-code",
    label: "Claude Code",
    steps: [
      "1. Clone the radar MCP server:",
      "git clone https://github.com/shawkatdidar/eigen-ai-terminal.git",
      "cd eigen-ai-terminal/mcp-server && npm install",
      "",
      "2. Add to your Claude Code MCP settings:",
      JSON.stringify({
        "mcpServers": {
          "ai-radar": {
            "command": "npx",
            "args": ["tsx", "/path/to/eigen-ai-terminal/mcp-server/src/index.ts"]
          }
        }
      }, null, 2),
      "",
      "3. Ask Claude: \"What happened in AI today that affects my work?\"",
    ],
    description: "Claude Code gets full radar access — signals, ripple effects, and personalized filtering.",
  },
  {
    id: "api",
    label: "Any Agent (API)",
    steps: [
      "Radar data is available as structured JSON:",
      "",
      "GET https://web-one-wine-82.vercel.app/data/radar.json",
      "",
      "Returns: signals, force chains, convergences,",
      "bottlenecks, velocity metrics, predictions,",
      "and ripple connections for every signal.",
      "",
      "Your agent can fetch this daily and process it",
      "against your local context.",
    ],
    description: "Fetch the full radar dataset and process it however you want.",
  },
];

export default function ConnectAgent() {
  const [activeTab, setActiveTab] = useState("openclaw");
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

        {/* What the agent gets */}
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
