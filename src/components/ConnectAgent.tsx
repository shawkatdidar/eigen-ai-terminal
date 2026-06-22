"use client";

import { useState } from "react";

const CLAWHUB_INSTALL_PROMPT = `Install Eigen Terminal through ClawHub and turn it into my daily AI radar.

npx clawhub@latest install eigen-ai-terminal

After installing:
1. Ask what I am building.
2. Fetch today's Eigen Terminal signals.
3. Send me only the 2-3 items that affect my work.
4. Set up a daily 7:00 AM brief.`;

const DIRECT_INSTALL_PROMPT = `Install Eigen Terminal directly for my agent setup and turn it into my daily AI radar.

npx eigen-terminal-install

After installing:
1. Ask what I am building.
2. Fetch today's Eigen Terminal signals.
3. Send me only the 2-3 items that affect my work.
4. Set up a daily 7:00 AM brief.`;

function CopyBlock({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="border border-[var(--color-border)] bg-[rgba(20,18,16,0.025)]">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
        <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          {label}
        </p>
        <button onClick={copy} className="font-ui text-[11px] uppercase tracking-[0.16em] underline underline-offset-4">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap px-4 py-4 font-ui text-[12px] leading-[1.75] text-[var(--color-text-secondary)]">
        {text}
      </pre>
    </div>
  );
}

export default function ConnectAgent() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
      <div>
        <p className="font-ui text-[12px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
          Connect your agent
        </p>
        <h2 className="font-display mt-5 max-w-xl text-[56px] leading-[0.92] tracking-[-0.05em] sm:text-[72px]">
          Give your agent something better than Twitter.
        </h2>
        <p className="mt-6 max-w-xl text-[16px] leading-[1.8] text-[var(--color-text-secondary)]">
          Paste the install prompt into OpenClaw or any agent that can run commands. The agent gets a daily AI intelligence feed and uses your own project context to decide what matters.
        </p>

        <div className="mt-8 space-y-4 text-[15px] leading-[1.7] text-[var(--color-text-secondary)]">
          <p>
            <strong className="text-[var(--color-text)]">You get:</strong> a short daily brief, source-linked context, and fewer random AI tabs rotting in your browser.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Your agent gets:</strong> radar data, history, and a wiki it can query whenever the field moves.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Install paths:</strong> use the direct installer for any agent setup, or the ClawHub one-liner for the standard OpenClaw flow.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <CopyBlock label="Any agent install (Recommended)" text={DIRECT_INSTALL_PROMPT} />
        <CopyBlock label="OpenClaw via ClawHub" text={CLAWHUB_INSTALL_PROMPT} />
      </div>
    </div>
  );
}
