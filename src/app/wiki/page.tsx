import fs from "fs";
import path from "path";
import WikiArticle from "@/components/WikiArticle";

export default function WikiIndex() {
  // Show the radar dashboard as the landing page, with an intro prepended
  const radarPath = path.join(process.cwd(), "public/wiki/radar.md");
  const radarContent = fs.readFileSync(radarPath, "utf-8");

  const intro = `# Eigen AI Terminal — Knowledge Base

A living wiki tracking the AI landscape across 16 domains, updated daily. Built for builders — tools, models, capabilities, and what you can use right now.

**How to navigate:** Use the sidebar to browse by category. Click any blue link to jump to that page. Every article links to related topics — follow them to explore deeper.

**What's here:** 16 domain trackers covering every area of AI, daily intelligence briefs, developing trends, what's blocked and why, how fast things are moving, and judgment frameworks for evaluating new developments.

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
