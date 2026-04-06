import fs from "fs";
import path from "path";
import WikiArticle from "@/components/WikiArticle";

export default function WikiIndex() {
  // Show the radar dashboard as the landing page, with an intro prepended
  const radarPath = path.join(process.cwd(), "public/wiki/radar.md");
  const radarContent = fs.readFileSync(radarPath, "utf-8");

  const intro = `# Eigen AI Terminal — Knowledge Base

Welcome to the Eigen knowledge base — a living, interconnected wiki tracking the entire AI landscape across 16 domains, updated daily.

**How to navigate:** Use the sidebar to browse by category. Click any [[wikilink]] (blue link) to jump to that page. Every article links to related topics — follow them to explore deeper. The table of contents on the right helps you navigate long articles.

**What's here:** 16 domain trackers, 10 company profiles, daily intelligence briefs, developing trends, causal force chains, predictions with accountability, and judgment frameworks — all cross-referenced.

---

`;

  // Strip the radar frontmatter and prepend our intro
  let radar = radarContent;
  if (radar.startsWith("---")) {
    const end = radar.indexOf("---", 3);
    if (end !== -1) radar = radar.slice(end + 3).trim();
  }
  // Replace the original h1
  radar = radar.replace(/^# AI Radar Dashboard/, "## Dashboard — Live Status");

  return <WikiArticle content={intro + radar} currentPath="radar.md" />;
}
