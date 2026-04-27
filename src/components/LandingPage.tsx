"use client";

import type { RadarData } from "@/lib/types";
import ConnectAgent from "./ConnectAgent";

function fmtDate(d: string): string {
  try {
    return new Date(d).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

/** Pull the "why it matters" part after → in a signal description */
function whyItMatters(desc: string, maxLen = 160): string {
  const idx = desc.indexOf("→");
  const raw = idx > -1 ? desc.slice(idx + 1).trim() : desc;
  if (raw.length <= maxLen) return raw;
  // Cut at last sentence boundary within maxLen
  const cut = raw.slice(0, maxLen);
  const dot = cut.lastIndexOf(".");
  return dot > 40 ? cut.slice(0, dot + 1) : cut + "...";
}

export default function LandingPage({ data }: { data: RadarData }) {
  // Pick builder-relevant signals for the demo
  const builderSignals = data.brief.significant
    .filter((s) => s.view === "builder" || s.view === "both")
    .slice(0, 4);

  const lead = builderSignals[0];
  const bullets = builderSignals.slice(1, 3);

  return (
    <div className="min-h-screen bg-[var(--color-bg-page)]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[15px] font-bold text-[var(--color-text)] tracking-tight">
              Eigen
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/wiki"
              className="text-[13px] font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              Knowledge Base
            </a>
            <a
              href="#connect"
              className="inline-flex items-center px-5 py-2 rounded-full bg-[var(--color-primary)] text-white text-[13px] font-bold hover:opacity-90 transition-opacity"
            >
              Connect Agent
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* ── Hero ── */}
        <section className="pt-16 sm:pt-24 pb-16">
          <div className="max-w-3xl">
            <p className="text-[14px] font-bold text-[var(--color-accent)] mb-4 uppercase tracking-wider">
              For people who build with AI
            </p>

            <h1 className="text-[32px] sm:text-[44px] font-extrabold text-[var(--color-text)] leading-[1.15] tracking-tight mb-6">
              Your agent knows what you&apos;re building. Now give it everything happening in&nbsp;AI.
            </h1>

            <p className="text-[18px] sm:text-[20px] text-[var(--color-text-secondary)] leading-[1.7] mb-10 max-w-2xl">
              Tools ship. Models improve. Discoveries drop that you could use — every single day. You don&apos;t have time to find them all. Your agent does. We build the knowledge. It delivers what matters. And when it doesn&apos;t need to tell you, it just gets smarter on its own.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#connect"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-[var(--color-primary)] text-white text-[15px] font-bold hover:opacity-90 transition-opacity"
              >
                Connect your agent
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-[var(--color-border)] text-[var(--color-text)] text-[15px] font-bold hover:border-[var(--color-text-muted)] transition-colors"
              >
                See what you&apos;d get today
              </a>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-16 border-t border-[var(--color-border)]">
          <p className="text-[13px] font-bold text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">
            How it works
          </p>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[var(--color-text)] tracking-tight mb-4">
            We scan everything. Your agent tells you what matters.
          </h2>
          <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.7] mb-12 max-w-2xl">
            Every day, we scan X, ArXiv, Hacker News, Reddit, GitHub, company
            blogs — hundreds of sources across 16 areas of AI. We verify every
            signal against primary sources, map what causes what, and publish a
            structured knowledge base your agent can query.
          </p>

          <a
            href="https://x.com/karpathy/status/2040470801506541998"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-12 max-w-md rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-text-muted)] transition-colors"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <img
              src="/karpathy-tweet.png"
              alt="Andrej Karpathy's tweet about LLM Wiki — 6.2M views: sharing the idea of using LLMs to build persistent knowledge bases"
              className="w-full"
            />
            <div className="px-4 py-3 bg-white">
              <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                <span className="font-bold text-[var(--color-text)]">Built on this idea.</span>{" "}
                We took Karpathy&apos;s LLM Wiki pattern and built a daily AI intelligence system on top of it — then connected it to your agent.
              </p>
            </div>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "We scan & verify",
                body: "Hundreds of sources, every day. Every signal verified against the primary source — the actual company blog, the actual paper, the actual filing. No rumors, no recycled takes.",
              },
              {
                step: "2",
                title: "We map cause & effect",
                body: "Every signal gets traced: what does it push forward? What trends does it feed? What\u2019s blocking it? Your agent gets the full picture, not headlines.",
              },
              {
                step: "3",
                title: "Your agent delivers",
                body: "It combines our intelligence with what it knows about YOU — your codebase, your goals, your stack — and tells you only what you can act on. Every morning, automatically.",
              },
            ].map((card) => (
              <div
                key={card.step}
                className="bg-white rounded-[var(--radius-xl)] p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <span className="text-[18px] font-bold text-[var(--color-accent)]">
                    {card.step}
                  </span>
                </div>
                <h3 className="text-[16px] font-bold text-[var(--color-text)] mb-2">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Live Demo — agent morning brief ── */}
        <section
          id="demo"
          className="py-16 border-t border-[var(--color-border)] scroll-mt-20"
        >
          <p className="text-[13px] font-bold text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">
            Live — {fmtDate(data.brief.date as string)}
          </p>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[var(--color-text)] tracking-tight mb-4">
            Here&apos;s what your agent would tell you this morning
          </h2>
          <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.7] mb-8 max-w-2xl">
            We tracked {data.brief.signalsTotal} signals today.{" "}
            {data.brief.signalsSignificant} were significant. Your agent picks
            the ones that match YOUR work.
          </p>

          {/* Agent chat message mock */}
          <div className="max-w-2xl">
            <div
              className="bg-white rounded-[var(--radius-xl)] p-6 sm:p-8 border border-[var(--color-border)]"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Message header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[var(--color-border)]">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <span className="text-white text-[12px] font-bold">AI</span>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[var(--color-text)]">
                    Your Agent
                  </p>
                  <p className="text-[11px] text-[var(--color-text-muted)]">
                    via Eigen AI Terminal
                  </p>
                </div>
                <span className="ml-auto text-[11px] text-[var(--color-text-muted)]">
                  7:00 AM
                </span>
              </div>

              {/* Message body */}
              <div className="space-y-4 text-[14px] leading-[1.75] text-[var(--color-text)]">
                <p className="font-semibold">
                  Here&apos;s what matters in AI today:
                </p>

                {lead && (
                  <p>
                    <span className="font-semibold">{lead.title}</span>
                    {" — "}
                    {whyItMatters(lead.description, 220)}
                  </p>
                )}

                {bullets.length > 0 && (
                  <div>
                    <p className="font-semibold mb-2">
                      What you should know:
                    </p>
                    <ul className="space-y-2">
                      {bullets.map((s, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[var(--color-text-muted)] select-none shrink-0">
                            *
                          </span>
                          <span>
                            <span className="font-semibold">{s.title}</span>
                            {" — "}
                            {whyItMatters(s.description, 130)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-[var(--color-text-secondary)] text-[13px]">
                  Say &quot;dig deeper on [topic]&quot; or &quot;full
                  brief&quot; for more.
                </p>
              </div>
            </div>

            <p className="text-[13px] text-[var(--color-text-muted)] mt-4 text-center leading-relaxed">
              Real data from today&apos;s scan — filtered for a builder
              working with AI agents.
              <br />
              <span className="font-semibold">
                Your agent filters differently, based on what it knows about
                you.
              </span>
            </p>
          </div>
        </section>

        {/* ── Numbers — the funnel ── */}
        <section className="py-20 border-t border-[var(--color-border)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              {
                num: "400+",
                label: "Sources scanned every morning",
                sub: "Blogs, papers, tweets, repos, news",
              },
              {
                num: "16",
                label: "Areas of AI tracked",
                sub: "Models, agents, tools, research, policy, funding",
              },
              {
                num: "50+",
                label: "Pages of cross-referenced analysis",
                sub: "Not summaries — verified, interconnected knowledge",
              },
              {
                num: "2\u20133",
                label: "Things your agent tells you",
                sub: "Every morning. Only what you can act on.",
              },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-[40px] sm:text-[52px] font-extrabold text-[var(--color-text)] tracking-tight leading-none">
                  {stat.num}
                </p>
                <p className="text-[14px] text-[var(--color-text)] font-bold mt-2">
                  {stat.label}
                </p>
                <p className="text-[12px] text-[var(--color-text-muted)] mt-1 leading-snug">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Connect Agent ── */}
        <section
          id="connect"
          className="py-16 border-t border-[var(--color-border)] scroll-mt-20"
        >
          <ConnectAgent />
        </section>

        {/* ── Footer ── */}
        <footer className="text-center py-10 border-t border-[var(--color-border)]">
          <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
            Eigen AI Terminal — intelligence for builders, delivered by your
            agent.
            <br />
            Your context stays local. We only serve the signals.
          </p>
          <div className="mt-3 flex items-center justify-center gap-4 text-[13px]">
            <a
              href="/wiki"
              className="text-[var(--color-accent)] hover:underline font-semibold"
            >
              Knowledge Base
            </a>
            <span className="text-[var(--color-border)]">&middot;</span>
            <a
              href="https://clawhub.ai/shawkatdidar/eigen-ai-terminal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline font-semibold"
            >
              ClawHub
            </a>
            <span className="text-[var(--color-border)]">&middot;</span>
            <a
              href="https://www.npmjs.com/package/eigen-ai-radar-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline font-semibold"
            >
              npm
            </a>
          </div>
          <p className="mt-5 text-[12px] text-[var(--color-text-muted)] leading-relaxed max-w-xl mx-auto">
            Open-source software, provided for educational and research purposes.
            Information is generated by automated systems — not guaranteed accurate, complete, or current.
            Not investment advice. Not business advice. Not professional advice of any kind.{" "}
            <a
              href="https://github.com/shawkatdidar/eigen-ai-terminal#disclaimer"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--color-text-secondary)] transition-colors"
            >
              Full disclaimer
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
