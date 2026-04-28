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

const CLAUDE_CODE_CONFIG = JSON.stringify(
  {
    mcpServers: {
      "eigen-ai-terminal": {
        command: "npx",
        args: ["eigen-ai-radar-mcp"],
      },
    },
  },
  null,
  2
);

const ANY_AGENT_PROMPT = `You now have access to the Eigen AI Terminal — daily intelligence on 16 areas of AI.

Endpoints (public, no auth):
- Today's signals: https://terminal.clawlab.dev/data/radar.json
- 7-day history: https://terminal.clawlab.dev/data/history.json
- Knowledge base: https://terminal.clawlab.dev/wiki/manifest.json
- Any wiki page: https://terminal.clawlab.dev/wiki/{path}

Fetch radar.json daily. Each signal has significance, domains, and an actionable filter. Match it to what I'm building — only tell me what I can act on. For deeper context on any topic, fetch wiki pages.

Ask me what I'm building so you can start filtering.`;

const openclawMethods: Record<
  OpenClawMethod,
  {
    label: string;
    tag: string;
    prompt: string;
    subtitle: string;
    description: string;
  }
> = {
  direct: {
    label: "Direct install",
    tag: "Recommended",
    prompt: DIRECT_PROMPT,
    subtitle: "Skill install + daily brief",
    description:
      "Paste this into OpenClaw when you want the shortest path from public terminal to agent workflow.",
  },
  clawhub: {
    label: "Via ClawHub",
    tag: "Alternative",
    prompt: CLAWHUB_PROMPT,
    subtitle: "Registry-based install path",
    description:
      "Same outcome, different install route. Use it if you prefer the ClawHub registry flow.",
  },
};

function CommandBlock({
  text,
  copied,
  onCopy,
}: {
  text: string;
  copied: boolean;
  onCopy: (text: string) => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-inset)]">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
        <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          Copyable payload
        </p>
        <button
          onClick={() => onCopy(text)}
          className="rounded-full border border-[var(--color-border-strong)] px-3 py-1.5 font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-4 font-ui text-[12px] leading-[1.8] text-[var(--color-text-secondary)]">
        {text}
      </pre>
    </div>
  );
}

function OpenClawPanel({
  copied,
  onCopy,
}: {
  copied: boolean;
  onCopy: (text: string) => void;
}) {
  const [method, setMethod] = useState<OpenClawMethod>("direct");
  const config = openclawMethods[method];

  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-2">
        {(Object.entries(openclawMethods) as Array<
          [OpenClawMethod, (typeof openclawMethods)[OpenClawMethod]]
        >).map(([key, value]) => {
          const active = method === key;
          return (
            <button
              key={key}
              onClick={() => setMethod(key)}
              className={`rounded-[var(--radius-md)] border px-4 py-4 text-left ${
                active
                  ? "border-[var(--color-accent)] bg-[rgba(126,216,208,0.06)]"
                  : "border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--color-border-strong)]"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-[var(--color-text-strong)]">
                  {value.label}
                </span>
                <span className="rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 font-ui text-[9px] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  {value.tag}
                </span>
              </div>
              <p className="mt-2 font-ui text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                {value.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        <CommandBlock text={config.prompt} copied={copied} onCopy={onCopy} />
      </div>
      <p className="mt-3 text-[13px] leading-[1.7] text-[var(--color-text-secondary)]">
        {config.description}
      </p>
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
    <section className="terminal-panel rounded-[var(--radius-xl)] p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          <p className="section-kicker mb-4">Agent connection layer</p>
          <h2 className="font-display text-[2.4rem] leading-[0.98] text-[var(--color-text-strong)] sm:text-[3.2rem]">
            Wire the terminal into the agent that already knows your work.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.75] text-[var(--color-text-secondary)]">
            The public app shows the field. The agent layer turns that field into something filtered, recurring, and personal. Pick your install path, copy the payload, and let the agent start from the same intelligence surface you just explored here.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { id: "openclaw" as Platform, label: "OpenClaw" },
              { id: "claude-code" as Platform, label: "Claude Code" },
              { id: "any-agent" as Platform, label: "Any agent" },
            ].map((platform) => {
              const active = activePlatform === platform.id;
              return (
                <button
                  key={platform.id}
                  onClick={() => {
                    setActivePlatform(platform.id);
                    setCopied(false);
                  }}
                  className={`rounded-full border px-4 py-2 font-ui text-[11px] uppercase tracking-[0.16em] ${
                    active
                      ? "border-[var(--color-accent)] bg-[rgba(126,216,208,0.08)] text-[var(--color-accent-strong)]"
                      : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-strong)]"
                  }`}
                >
                  {platform.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6">
            {activePlatform === "openclaw" && (
              <OpenClawPanel copied={copied} onCopy={onCopy} />
            )}

            {activePlatform === "claude-code" && (
              <div>
                <p className="mb-4 text-[13px] leading-[1.7] text-[var(--color-text-secondary)]">
                  Add this MCP server entry to Claude Code, then query the radar directly from your working environment.
                </p>
                <CommandBlock
                  text={CLAUDE_CODE_CONFIG}
                  copied={copied}
                  onCopy={onCopy}
                />
                <p className="mt-3 text-[13px] leading-[1.7] text-[var(--color-text-secondary)]">
                  Start with: <span className="text-[var(--color-text-strong)]">&quot;What changed in AI today that affects what I&apos;m building?&quot;</span>
                </p>
              </div>
            )}

            {activePlatform === "any-agent" && (
              <div>
                <p className="mb-4 text-[13px] leading-[1.7] text-[var(--color-text-secondary)]">
                  Use this when the agent can fetch URLs but you do not want an MCP install yet.
                </p>
                <CommandBlock text={ANY_AGENT_PROMPT} copied={copied} onCopy={onCopy} />
              </div>
            )}
          </div>
        </div>

        <aside className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] p-5">
          <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            What the agent gets
          </p>
          <div className="mt-5 space-y-4">
            {[
              "A daily signal brief with builder and strategic filtering.",
              "Cross-linked wiki context for deeper topic dives.",
              "Trend, bottleneck, and change-detection surfaces to support recurring checks.",
            ].map((item) => (
              <div key={item} className="border-t border-[var(--color-border)] pt-4 first:border-t-0 first:pt-0">
                <p className="text-[14px] leading-[1.7] text-[var(--color-text-secondary)]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-4 py-4">
            <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Operating note
            </p>
            <p className="mt-2 text-[13px] leading-[1.7] text-[var(--color-text-secondary)]">
              Your project context stays with your agent. Eigen Terminal provides the intelligence layer, not your private state.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
