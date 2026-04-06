"use client";

/**
 * WIKI ARTICLE — Renders a markdown wiki page in Wikipedia style.
 *
 * - Strips YAML frontmatter
 * - Converts [[wikilinks]] to clickable links
 * - Generates a table of contents from headings
 * - Wikipedia typography: serif headings, blue links, clean tables
 */

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMemo } from "react";

function stripFrontmatter(content: string): string {
  if (content.startsWith("---")) {
    const end = content.indexOf("---", 3);
    if (end !== -1) return content.slice(end + 3).trim();
  }
  return content;
}

/** Convert [[wikilinks]] to markdown links */
function convertWikilinks(content: string): string {
  return content.replace(/\[\[([^\]]+)\]\]/g, (_, link) => {
    // Handle [[display|target]] format
    const parts = link.split("|");
    const target = parts[parts.length - 1].trim();
    const display = parts[0].trim();

    // Map common targets to paths
    const targetPath = resolveWikilink(target);
    return `[${display}](/wiki/${targetPath})`;
  });
}

function resolveWikilink(target: string): string {
  const lower = target.toLowerCase().replace(/\s+/g, "-");

  // Known node mappings
  const nodeNames = [
    "frontier-models", "open-source-models", "compute-hardware", "ai-agents",
    "ai-coding-tools", "ai-infrastructure", "ai-safety-alignment", "ai-policy-regulation",
    "ai-business-funding", "multimodal-ai", "ai-for-science", "robotics-embodied-ai",
    "ai-research-breakthroughs", "edge-on-device-ai", "ai-in-enterprise", "frontier-edges",
  ];
  if (nodeNames.includes(lower)) return `nodes/${lower}`;

  // Known entity mappings
  const entityNames = [
    "anthropic", "openai", "nvidia", "google-deepmind", "meta",
    "microsoft", "deepseek", "cursor", "xai", "apple",
  ];
  if (entityNames.includes(lower)) return `entities/${lower}`;

  // Known root files
  const rootFiles = ["radar", "index", "watchlist", "convergences", "force-dynamics",
    "bottleneck-map", "velocity-trackers", "predictions", "opportunity-pipeline"];
  if (rootFiles.includes(lower)) return lower;

  // Default: try as-is
  return lower;
}

/** Extract headings for table of contents */
function extractHeadings(content: string): Array<{ level: number; text: string; id: string }> {
  const headings: Array<{ level: number; text: string; id: string }> = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,4})\s+(.+)/);
    if (match) {
      const level = match[1].length;
      const text = match[2].replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      headings.push({ level, text, id });
    }
  }
  return headings;
}

export default function WikiArticle({ content, currentPath }: { content: string; currentPath: string }) {
  const processed = useMemo(() => {
    const stripped = stripFrontmatter(content);
    return convertWikilinks(stripped);
  }, [content]);

  const headings = useMemo(() => extractHeadings(processed), [processed]);

  return (
    <div className="flex">
      {/* Article */}
      <article className="flex-1 min-w-0 px-8 py-6 max-w-[900px]">
        {/* Wikipedia-style content */}
        <div className="wiki-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-[28px] font-serif font-normal text-[#202122] border-b border-[#a2a9b1] pb-1 mb-4 mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => {
                const text = String(children);
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                return (
                  <h2 id={id} className="text-[22px] font-serif font-normal text-[#202122] border-b border-[#eaecf0] pb-1 mb-3 mt-8">
                    {children}
                  </h2>
                );
              },
              h3: ({ children }) => {
                const text = String(children);
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                return (
                  <h3 id={id} className="text-[18px] font-serif font-bold text-[#202122] mb-2 mt-6">
                    {children}
                  </h3>
                );
              },
              h4: ({ children }) => (
                <h4 className="text-[15px] font-bold text-[#202122] mb-2 mt-4">{children}</h4>
              ),
              p: ({ children }) => (
                <p className="text-[14px] text-[#202122] leading-[1.6] mb-3 font-sans">{children}</p>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-[#0645ad] hover:underline visited:text-[#0b0080]">
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="list-disc ml-6 mb-3 text-[14px] text-[#202122] leading-[1.6] space-y-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal ml-6 mb-3 text-[14px] text-[#202122] leading-[1.6] space-y-1">{children}</ol>
              ),
              li: ({ children }) => <li className="text-[14px]">{children}</li>,
              strong: ({ children }) => <strong className="font-bold">{children}</strong>,
              em: ({ children }) => <em className="italic">{children}</em>,
              code: ({ children, className }) => {
                if (className) {
                  // Code block
                  return <code className="block bg-[#f8f9fa] border border-[#eaecf0] p-4 rounded text-[13px] font-mono overflow-x-auto mb-3">{children}</code>;
                }
                // Inline code
                return <code className="bg-[#f8f9fa] border border-[#eaecf0] px-1.5 py-0.5 rounded text-[13px] font-mono">{children}</code>;
              },
              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="border-collapse text-[13px] w-full">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-[#eaecf0]">{children}</thead>
              ),
              th: ({ children }) => (
                <th className="border border-[#a2a9b1] px-3 py-2 text-left font-bold text-[#202122] bg-[#eaecf0]">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-[#a2a9b1] px-3 py-2 text-[#202122]">{children}</td>
              ),
              hr: () => <hr className="border-t border-[#eaecf0] my-6" />,
              blockquote: ({ children }) => (
                <blockquote className="border-l-3 border-[#c8ccd1] pl-4 my-3 text-[14px] text-[#54595d] italic">
                  {children}
                </blockquote>
              ),
            }}
          >
            {processed}
          </ReactMarkdown>
        </div>

        {/* Page metadata */}
        <div className="mt-12 pt-4 border-t border-[#eaecf0] text-[12px] text-[#72777d]">
          <p>Source: <code className="bg-[#f8f9fa] px-1 py-0.5 rounded text-[11px]">{currentPath}</code></p>
          <p className="mt-1">
            <a href={`/wiki/${currentPath}`} className="text-[#0645ad] hover:underline">Raw markdown</a>
            {" · "}
            <a href="/" className="text-[#0645ad] hover:underline">Eigen AI Terminal</a>
          </p>
        </div>
      </article>

      {/* Table of contents — Wikipedia right sidebar */}
      {headings.length > 3 && (
        <aside className="hidden lg:block w-[220px] min-w-[220px] pl-4 py-6">
          <div className="sticky top-[60px] bg-[#f8f9fa] border border-[#a2a9b1] rounded p-3">
            <p className="text-[13px] font-bold text-[#202122] mb-2 text-center">Contents</p>
            <nav>
              {headings.map((h, i) => (
                <a
                  key={i}
                  href={`#${h.id}`}
                  className="block text-[12px] text-[#0645ad] hover:underline py-0.5 truncate"
                  style={{ paddingLeft: `${(h.level - 2) * 12}px` }}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </div>
  );
}
